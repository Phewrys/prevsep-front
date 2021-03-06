import { useState, useEffect } from 'react'
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

export default function FormulariosAbertos() {

    let [abertos, setAbertos] = useState<JSONAbertos[]>([])

    // GET: /api/v1/forms/sepse/nurse/form1 - Returns the nurse forms (part 1) in the database given a criteria.
    useEffect(() => {
        const token = localStorage.getItem('@PermissionPS:token');
    
        var data = qs.stringify({
          'grant_type': 'client_credentials'
        });
    
        var config = {
          method: 'get',
          url: 'https://prevsep.herokuapp.com/api/v1/forms/sepse/nurse/form1?status=CREATED',
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
                <h2>Formulários Abertos</h2>
            </div>
            <div>
                <div className="div-content">
                    <div className="m-2">
                        <small>({abertos.length}) Formulários</small>
                    </div>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Nº Formulário</th>
                                <th scope="col">Paciente</th>
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