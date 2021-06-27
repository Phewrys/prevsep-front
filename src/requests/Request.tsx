import { useState } from "react"

const token = localStorage.getItem('@PermissionPS:token');

export default function Request () {
    const [cpf, setCpf] = useState('')
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [status, setStatus] = useState('')

    // POST: /api/v1/managers - Creates a new Manager.
    async function handlePost(event: any) {
        event.preventDefault();

        fetch('https://prevsep.herokuapp.com/api/v1/managers', {
            method: 'POST',
            body: JSON.stringify({
                "userInfo":{
                    cpf: cpf,
                    nome: nome,
                    email: email,
                    senha: senha,
                    status: status
                }
            }),
            headers: {
                'accept': 'application/json',
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
        }) 
    }

    return (
        <form className="Container" onSubmit={handlePost}>
            <div className="form-group">
                <label htmlFor="">CPF</label>
                <input type="text" onChange={event => setCpf(event.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="">Nome</label>
                <input type="text" onChange={event => setNome(event.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="">Email</label>
                <input type="text" onChange={event => setEmail(event.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="">Senha</label>
                <input type="password" onChange={event => setSenha(event.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="">Status</label>
                <input type="text" onChange={event => setStatus(event.target.value)} />
            </div>
            <div className="form-group">
                <button type="submit">Cadastrar</button>
            </div>
        </form>
    )
}