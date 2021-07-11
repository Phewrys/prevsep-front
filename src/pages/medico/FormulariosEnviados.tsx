import { useState, useEffect } from 'react'
var axios = require('axios')
var qs = require('qs')

interface JSONEnviados {
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

export default function FormulariosEnviados() {

    let [enviados, setEnviados] = useState<JSONEnviados[]>([])

    // GET: /api/v1/forms/sepse/doctor - Retorna os formulários dos médicos presentes no banco de dados a partir de um certo critério.
    useEffect(() => {
        const token = localStorage.getItem('@PermissionPS:token');
    
        var data = qs.stringify({
          'grant_type': 'client_credentials'
        });
    
        var config = {
          method: 'get',
          url: 'https://prevsep.herokuapp.com/api/v1/forms/sepse/doctor?status=FINISHED',
          headers: {
            'accept': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          data: data
        };
    
        axios(config)
          .then(function (response: any) {
            setEnviados(response.data.content)
          })
          .catch(function (error: any) {
            console.log(error);
          });
      }, [])

    return (
        <>
            <div className="div-header">
                <h2>Formulários Enviados</h2>
            </div>
            <div>
                <div className="div-content">
                    <div className="m-2">
                        <small>({enviados.length}) Formulários</small>
                    </div>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Nº Formulário</th>
                                <th scope="col">Nome do Paciente</th>
                                <th scope="col">Data de Criação</th>
                                <th scope="col">STATUS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {enviados.map(enviado => {
                                return (
                                    <tr key={enviado.idFormulario}>
                                        <td>{enviado.idFormulario}</td>
                                        <td>{enviado.paciente.nome}</td>
                                        <td>{enviado.dtCriacao}</td>
                                        <td>{enviado.status}</td>
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