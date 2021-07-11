import { useState, useEffect } from 'react'
import ArrowDown from './../../content/img/arrow-down-solid.svg'
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

export default function FormulariosFinalizados() {

    let [enviados, setEnviados] = useState<JSONEnviados[]>([])

    // GET: /api/v1/forms/sepse/nurse/form1 - Returns the nurse forms (part 1) in the database given a criteria.
    useEffect(() => {
        const token = localStorage.getItem('@PermissionPS:token');
    
        var data = qs.stringify({
          'grant_type': 'client_credentials'
        });
    
        var config = {
          method: 'get',
          url: 'https://prevsep.herokuapp.com/api/v1/forms/sepse/nurse/form1?status=FINISHED',
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
                <button type="button" className="btn button-blue">Novo Formulário +</button>
            </div>
            <div>
                <div className="div-content">
                    <div className="m-2">
                        <small>Formulários ({enviados.length})</small><br/><small>Imprimir</small> <small>Exportar</small>
                    </div>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                {/* <th scope="col">#</th> */}
                                <th scope="col">Nº Formulário <img src={ArrowDown} alt="Arrow Down" className="icone p-1"></img></th>
                                <th scope="col">Paciente <img src={ArrowDown} alt="Arrow Down" className="icone p-1"></img></th>
                                <th scope="col">Data de Criação <img src={ArrowDown} alt="Arrow Down" className="icone p-1"></img></th>
                                <th scope="col">Data de Autorização <img src={ArrowDown} alt="Arrow Down" className="icone p-1"></img></th>
                                <th scope="col">STATUS<img src={ArrowDown} alt="Arrow Down" className="icone p-1"></img></th>
                            </tr>
                        </thead>
                        <tbody>
                        {enviados.map(enviado => {
                                return (
                                    <tr key={enviado.idFormulario}>
                                        {/* <th scope="row"></th> */}
                                        <td>{enviado.idFormulario}</td>
                                        <td>{enviado.paciente.nome}</td>
                                        <td>{enviado.dtCriacao}</td>
                                        <td>{enviado.dtAcMedico}</td>
                                        <td>{enviado.status}</td>
                                    </tr>
                                )
                            })}
                            {/* <tr>
                                <th scope="row">1</th>
                                <td>000000</td>
                                <td>Xxxxx Xxxxx</td>
                                <td>00/00/0000 00:00:00</td>
                                <td>00/00/0000 00:00:00</td>
                            </tr> */}
                        </tbody>
                    </table>
                </div>
                    <nav aria-label="Navegação de página exemplo">
                        <ul className="pagination justify-content-center pt-3">
                            {/* <li className="page-item disabled">
                                <a className="page-link" href="#" tabIndex={-1}>Anterior</a>
                            </li> */}
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <li><a className="page-link" href="#">1</a></li>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <li><a className="page-link" href="#">2</a></li>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <li><a className="page-link" href="#">3</a></li>
                            {/* <li className="page-item">
                                <a className="page-link" href="#">Próximo</a>
                            </li> */}
                        </ul>
                    </nav>
            </div>
        </>
    )
}