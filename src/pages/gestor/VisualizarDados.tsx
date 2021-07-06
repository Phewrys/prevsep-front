import { useState, useEffect } from 'react'
import ArrowDown from './../../content/img/arrow-down-solid.svg'
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

    return (
        <>
            <div className="div-header">
                <h2>Visualizar Dados</h2>
            </div>
            <div>
                <div className="div-content" style={{overflowX: 'scroll'}}>
                    <div className="m-2">
                    <small className="mr-3">({abertos.length}) Formulários</small><small><img src={ArrowDown} alt="Arrow Down" className="icone p-1"></img><a href="#">Exportar</a></small>
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