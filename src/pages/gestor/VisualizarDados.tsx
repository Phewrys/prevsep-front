import { useState, useEffect } from 'react'
import swal from 'sweetalert'
var axios = require('axios')
var qs = require('qs')

interface JSONAbertos {
    idFormulario: number,
    paciente: {
        idPaciente: number,
        nome: string,
        idade: number,
        sexo: string,
        leito: string,
        nrAtendimento: string,
        registro: string,
        cpf: string
    },
    crmMedico: number,
    creEnfermeiro: number,
    procedencia: string,
    sirs: {
        febreHipotemia: boolean,
        leucocitoseLeucopenia: boolean,
        taquicardia: boolean,
        taquipneia: boolean
    },
    disfOrganica: {
        diurese: boolean,
        hipotensao: boolean,
        snlcConfAgtcComa: boolean,
        saturacaoDispneia: boolean
    },
    dtAcMedico: Date,
    dtCriacao: Date,
    status: string
}

export default function VisualizarDados() {
    let [abertos, setAbertos] = useState<JSONAbertos[]>([])

    // GET: /api/v1/forms/sepse/nurse/form1 - Returns the nurse forms (part 1) in the database given a criteria.
    useEffect(() => {
        const token = localStorage.getItem('@PermissionPS:token');
    
        var data = qs.stringify({
          'grant_type': 'client_credentials'
        });
    
        var config = {
          method: 'get',
          url: 'https://prevsep.herokuapp.com/api/v1/forms/sepse/nurse/form1',
          headers: {
            'accept': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          data: data
        };
    
        axios(config)
          .then(function (response: any) {
            setAbertos(response.data.content)
          })
          .catch(function (error: any) {
            console.log(error);
          });
      }, [])

    // GET: /api/v1/forms/sepse/report - Gera o relatório dos últimos 30 dias.
    async function PdfVisualizarDados(event: any) {
        event.preventDefault();

        const token = localStorage.getItem('@PermissionPS:token');

        var data = qs.stringify({
            'grant_type': 'client_credentials'
        });

        var config = {
            method: 'get',
            responseType: 'blob',
            url: `https://prevsep.herokuapp.com/api/v1/forms/sepse/report`,
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
                link.setAttribute('download', 'Relatório dos últimos 30 dias.pdf');
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
                <h2>Visualizar Dados</h2>
            </div>
            <div>
                <div className="div-content" style={{overflowX: 'scroll'}}>
                    <div className="m-2">
                        <form onSubmit={PdfVisualizarDados}>
                            <div className="form-row">
                                <div className="col-12 mb-2 ml-1">
                                    <div className="ml-2"><label htmlFor="idGerar"><strong>Gerar Relatório dos últimos 30 dias</strong></label></div>
                                    <input className="btn button-purple m-2 mt-0" type="submit" value="Gerar" />
                                </div>
                            </div>
                        </form>
                        <small className="m-3">({abertos.length}) Formulários</small>
                    </div>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Nº Formulário</th>
                                <th scope="col">Id do Paciente</th>
                                {/* <th scope="col">Paciente</th> */}
                                <th scope="col">Data de Criação</th>
                                <th scope="col">Data de Autorização</th>
                                <th scope="col">STATUS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {abertos.map(aberto => {
                                return (
                                    <tr key={aberto.idFormulario}>
                                        <td>{aberto.idFormulario}</td>
                                        {/* <td>{aberto.paciente.idPaciente}</td> */}
                                        <td>{aberto.paciente.nome}</td>
                                        <td>{aberto.dtCriacao}</td>
                                        <td>{aberto.dtAcMedico}</td>
                                        <td>{aberto.status}</td>
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