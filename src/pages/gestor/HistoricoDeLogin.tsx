import { useState, useEffect } from 'react'
import Moment from 'moment'
import swal from 'sweetalert'
var axios = require('axios')
var qs = require('qs')

interface JSONHistLogin {
    id: string,
    idUsuario: number,
    nomeUsuario: string,
    dtLogin: Date,
    dtExplicitLogout: boolean,
    role: string,
    status: boolean
}

export default function HistoricoDeLogin() {

    let [histLogin, setHistLogin] = useState<JSONHistLogin[]>([])
    let [dtInicio, setDtInicio] = useState(Date)
    let [dtFim, setDtFim] = useState(Date)

    // GET: /api/v1/users/logs/login - Retorna o registro de login dos usuários.
    useEffect(() => {
        const token = localStorage.getItem('@PermissionPS:token');

        var data = qs.stringify({
            'grant_type': 'client_credentials'
        });

        var config = {
            method: 'get',
            url: 'https://prevsep.herokuapp.com/api/v1/users/logs/login',
            headers: {
                'accept': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            data: data
        };

        axios(config)
            .then(function (response: any) {
                setHistLogin(response.data.content)
            })
            .catch(function (error: any) {
                console.log(error);
            });
    }, [])

    // GET: /api/v1/users/logs/login/report - Retorna um relatorio de logins em dado período e CPF's.
    async function PdfHistLogin(event: any) {
        event.preventDefault();

        const token = localStorage.getItem('@PermissionPS:token');

        var data = qs.stringify({
            'grant_type': 'client_credentials'
        });

        var config = {
            method: 'get',
            responseType: 'blob',
            url: `https://prevsep.herokuapp.com/api/v1/users/logs/login/report?dtLoginBegin=${Moment(dtInicio).format('YYYY-MM-DD')}T${Moment(dtInicio).format('HH')}%3A${Moment(dtInicio).format('mm')}%3A00&dtLoginEnd=${Moment(dtFim).format('YYYY-MM-DD')}T${Moment(dtFim).format('HH')}%3A${Moment(dtFim).format('mm')}%3A00`,
            headers: {
                'accept': 'application/pdf',
                'Authorization': "Bearer " + `${token}`,
            },
            data: data
        };

        axios(config)
            .then((response: any) => {
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'Relatório de acessos ao PrevSep.pdf');
                document.body.appendChild(link);
                link.click();
            })
            .catch(function (error: any) {
                console.log(error);
            })
            .then(() => swal({
                title: "Download Iniciado!!!",
                icon: "success",
                buttons: [false],
                timer: 3000,
            }));
    }

    return (
        <>
            <div className="div-header">
                <h2>Histórico de Login</h2>
            </div>
            <div>
                <div className="div-content">
                    <div className="m-2">
                        <form onSubmit={PdfHistLogin}>
                            <div className="form-row">
                                <div className="m-3 ml-1">
                                    <label htmlFor="idDtInicio"><strong>Data Inicio*</strong></label>
                                    <input type="datetime-local" className="form-control" id="idDtInicio" onChange={event => setDtInicio(event.target.value)} required />   
                                </div>
                                <div className="m-3 ml-1">
                                    <label htmlFor="idDtFim"><strong>Data Fim*</strong></label>
                                    <input type="datetime-local" className="form-control" id="idDtFim" onChange={event => setDtFim(event.target.value)} required /> 
                                </div>
                                <div className="col-12 mb-2 ml-1">
                                    <input className="btn button-purple m-2" type="submit" value="Exportar" />
                                </div>
                            </div>
                        </form>
                        <small className="m-3">({histLogin.length}) Formulários</small>
                    </div>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">CPF</th>
                                <th scope="col">Nome</th>
                                <th scope="col">Cargo</th>
                                <th scope="col">Data de Login</th>
                            </tr>
                        </thead>
                        <tbody>
                            {histLogin.map(hl => {
                                return (
                                    <tr key={hl.id}>
                                        <td>{hl.idUsuario}</td>
                                        <td>{hl.nomeUsuario}</td>
                                        <td>{hl.role}</td>
                                        <td>{hl.dtLogin}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}