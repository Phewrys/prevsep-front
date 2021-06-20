import { Redirect, Route, RouteProps } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

interface RoutesPropsData extends RouteProps {
    roleName?: string;
}

const PrivateRoutes: React.FC<RoutesPropsData> = ({ roleName, ... rest }) => {
    
    const { userLogged } = useAuth();
    const { role } = useAuth();

    const hasPermission = false;

    if (!userLogged()) {
        return <Redirect to="/" />
    }

    if ((role.role === roleName)  && userLogged()) {
        return <Route { ... rest} />
    }

    return hasPermission ? (<Route { ... rest } />) : <Redirect to='/' />
}

export default PrivateRoutes;