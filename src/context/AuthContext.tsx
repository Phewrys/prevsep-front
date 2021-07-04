import { createContext, useCallback, useContext, useState } from 'react'
import api from '../services/api'
var axios = require('axios')
var qs = require('qs')

interface AuthContextState {
    token: TokenState;
    signIn({username, password}: UserData): Promise<void>;
    userLogged(): boolean;
    role: RoleState;
}

interface UserData {
    username: string;
    password: string;
}

interface TokenState {
    token: string;
}

interface RoleState {
    role: string;
}

const AuthContext = createContext<AuthContextState>({} as AuthContextState);

const AuthProvider: React.FC = ({children}) => {

    const [role, setRole] = useState<RoleState>(() => {
        const role = localStorage.getItem('@PermissionPS:role');
        
        if(role) {
            return { role }
        }
        
        return { } as RoleState;
    });

    const [token, setToken] = useState<TokenState>(() => {
        const token = localStorage.getItem('@PermissionPS:token');

        if(token) {
            api.defaults.headers.autorization = `Bearer ${token}`;

            return { token }
        }
        
        return { } as TokenState;
    });

    const signIn = useCallback(async ({ username, password }: UserData ) => {
        
        const decode = Buffer.from(username + ':' + password).toString('base64');
        
        var data = qs.stringify({
          'grant_type': 'client_credentials' 
        });

        var config = {
          method: 'post',
          url: 'https://prevsep.herokuapp.com/oauth/token',
          headers: {
            'Accept': 'application/json, text/plain, /',
            'Authorization': `Basic ${decode}`
          },
          data : data
        };
        
        axios(config)
        .then(function (response: any) {

          const { access_token } = response.data;
          setToken(access_token);
          localStorage.setItem("@PermissionPS:token", access_token);

          const { roleName } = response.data.claims[0];
          setRole(roleName);
          localStorage.setItem("@PermissionPS:role", roleName);
          
          sessionStorage.setItem("@PermissionPS:username", username);

          // REDIRECIONA O USUÁRIO PARA A ROTA QUE ELE TEM PERMISSÃO
          document.location.href = document.location.href + response.data.claims[0].roleName;
        })
        .catch(function (error: any) {
          console.log(error);
        });

    }, []);

    const userLogged = useCallback(() => {
        const token = localStorage.getItem('@PermissionPS:token');

        if(token) {
            return true;
        }

        return false;
    }, [] );

    return (
        <AuthContext.Provider value={{ token, signIn, userLogged, role }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(): AuthContextState {
    const context = useContext(AuthContext);
    return context;
}

export { AuthProvider, useAuth }