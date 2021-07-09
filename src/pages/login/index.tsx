import React, { useCallback, useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import './styles.css'

const Login: React.FC = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { signIn } = useAuth();

    const handleSubmit = useCallback(
        async (event) => {
            event.preventDefault();

            const x = document.getElementById('loader')
            x?.classList.toggle('loader')
            signIn({ username, password }).then(() => {
                x?.classList.toggle('loader')
            }, () => {
                console.log('Error in signIn!')
            });
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [username, password]
    );

    return (
        <div className="main">
            <div id="loader"></div>
            <form className="login" onSubmit={handleSubmit}>
                <h1>PrevSep+</h1>
                <input type="text" placeholder="Usuário" autoComplete="off" onChange={event => setUsername(event.target.value)} required />
                <input type="password" placeholder="Senha" autoComplete="off" onChange={event => setPassword(event.target.value)} required />
                <button id="btn" type="submit">Entrar</button>
            </form>
        </div>
    )
};

export default Login;