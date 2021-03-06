import { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap'
import swal from 'sweetalert'
import Lupa from './../../content/img/lupa_preta.jpg'
var axios = require('axios')
var qs = require('qs')

interface JSONSalvos {
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
    dtCriacao: string,
    status: string
}

interface JSONDoctors {
    cpf: string
    nome: string
    crm: string
    statusUsuario: string
}

export default function FormulariosProcessamento() {
    const token = localStorage.getItem('@PermissionPS:token');

    const [modalDefault, setModalDefaultShow] = useState(false)
    const modalDefaultClose = () => {
        setModalDefaultShow(false);
    }
    const modalDefaultShow = () => setModalDefaultShow(true)

    let [PostPut, setPostPut] = useState('')
    let [idFormulario, setidFormularioPut] = useState(0)

    let [salvos, setSalvos] = useState<JSONSalvos[]>([])

    let [doctors, setDoctors] = useState<JSONDoctors[]>([])

    let [nome, setNome] = useState('')
    let [idade, setIdade] = useState('')
    let [cpf, setCpf] = useState('')
    let [sexo, setSexo] = useState('')
    let [leito, setLeito] = useState('')
    let [nAtm, setNatm] = useState('')
    let [registro, setRegistro] = useState('')

    let [procedencia, setProcedencia] = useState('')
    let [crm, setCrm] = useState('')
    let [cre, setCre] = useState('')

    let [febreHipotemia, setFebreHipotemia] = useState(false)
    let boleanFebreHipotemia = () => {
        if (febreHipotemia) {
            setFebreHipotemia(false)
        } else {
            setFebreHipotemia(true)
        }
    }

    let [leucocitoseLeucopenia, setLeucocitoseLeucopenia] = useState(false)
    let boleanLeucocitoseLeucopenia = () => {
        if (leucocitoseLeucopenia) {
            setLeucocitoseLeucopenia(false)
        } else {
            setLeucocitoseLeucopenia(true)
        }
    }

    let [taquicardia, setTaquicardia] = useState(false)
    let boleanTaquicardia = () => {
        if (taquicardia) {
            setTaquicardia(false)
        } else {
            setTaquicardia(true)
        }
    }

    let [taquipneia, setTaquipneia] = useState(false)
    let boleanTaquipneia = () => {
        if (taquipneia) {
            setTaquipneia(false)
        } else {
            setTaquipneia(true)
        }
    }

    let [diurese, setDiurese] = useState(false)
    let boleanDiurese = () => {
        if (diurese) {
            setDiurese(false)
        } else {
            setDiurese(true)
        }
    }

    let [hipotensao, setHipotensao] = useState(false)
    let boleanHipotensao = () => {
        if (hipotensao) {
            setHipotensao(false)
        } else {
            setHipotensao(true)
        }
    }

    let [snlcConfAgtcComa, setSnlcConfAgtcComa] = useState(false)
    let boleanSnlcConfAgtComa = () => {
        if (snlcConfAgtcComa) {
            setSnlcConfAgtcComa(false)
        } else {
            setSnlcConfAgtcComa(true)
        }
    }

    let [saturacaoDispneia, setSaturacaoDispneia] = useState(false)
    let boleanSaturacaoDispneia = () => {
        if (saturacaoDispneia) {
            setSaturacaoDispneia(false)
        } else {
            setSaturacaoDispneia(true)
        }
    }

    // GET: /api/v1/doctors - Returns all doctors in the database.
    useEffect(() => {
        const token = localStorage.getItem('@PermissionPS:token');

        var data = qs.stringify({
            'grant_type': 'client_credentials'
        });

        var config = {
            method: 'get',
            url: 'https://prevsep.herokuapp.com/api/v1/doctors',
            headers: {
                'accept': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            data: data
        };

        axios(config)
            .then(function (response: any) {
                setDoctors(response.data)
            })
            .catch(function (error: any) {
                console.log(error);
            });
    }, [])

    // GET: /api/v1/nurses/{cpf} - Returns info about a Nurse by a given CPF.
    useEffect(() => {
        const cpf = sessionStorage.getItem('@PermissionPS:username');

        var data = qs.stringify({
            'grant_type': 'client_credentials'
        });

        var config = {
            method: 'get',
            url: `https://prevsep.herokuapp.com/api/v1/nurses/${cpf}`,
            headers: {
                'accept': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            data: data
        };

        axios(config)
            .then(function (response: any) {
                setCre(response.data.cre)
            })
            .catch(function (error: any) {
                console.log(error);
            });
    }, [])

    // GET: Get forms for current nurse
    function formsSalvosNurse() {

        var data = qs.stringify({
            'grant_type': 'client_credentials'
        });

        var config = {
            method: 'get',
            url: `https://prevsep.herokuapp.com/api/v1/forms/sepse/nurse/form1?status=CREATED&creEnfermeiro=${cre}`,
            headers: {
                'accept': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            data: data
        };

        axios(config)
            .then(function (response: any) {
                setSalvos(response.data.content)
            })
            .catch(function (error: any) {
                console.log(error)
            });
    }

    // GET/:id /api/v1/forms/sepse/doctor - Retorna os formul??rios dos m??dicos presentes no banco de dados a partir de um certo crit??rio.
    function handlePutId(id: number) {

        var data = qs.stringify({
            'grant_type': 'client_credentials'
        });

        var config = {
            method: 'get',
            url: `https://prevsep.herokuapp.com/api/v1/forms/sepse/nurse/form1?idFormulario=${id}`,
            headers: {
                'accept': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            data: data
        };

        axios(config)
            .then(function (response: any) {
                const data = response.data.content[0]
                setidFormularioPut(data.idFormulario)

                setNome(data.paciente.nome)
                setIdade(data.paciente.idade)
                setCpf(data.paciente.cpf)
                setSexo(data.paciente.sexo)
                setNatm(data.paciente.nrAtendimento)
                setLeito(data.paciente.leito)
                setRegistro(data.paciente.registro)

                setCrm(data.crmMedico)
                setProcedencia(data.procedencia)

                setFebreHipotemia(data.sirs.febreHipotemia)
                setLeucocitoseLeucopenia(data.sirs.leucocitoseLeucopenia)
                setTaquicardia(data.sirs.taquicardia)
                setTaquipneia(data.sirs.taquipneia)

                setDiurese(data.disfOrganica.diurese)
                setHipotensao(data.disfOrganica.hipotensao)
                setSnlcConfAgtcComa(data.disfOrganica.snlcConfAgt)
                setSaturacaoDispneia(data.disfOrganica.saturacaoDispneia)

                modalDefaultShow()
            })
            .catch(function (error: any) {
                console.log(error)
            });
    }

    return (
        <>
            <div className="div-header">
                <h2>Formul??rios em Processamento</h2>
            </div>
                <h6>Formul??rios j?? preenchidos, mas n??o finalizados.</h6>
            <div>
                <div className="div-content">
                    <div className="m-2">
                        <input className="btn button-purple m-3" onClick={() => formsSalvosNurse()} value="Pesquisar" />
                        <br />
                        <small className="m-3">({salvos.length}) Formul??rios</small>
                    </div>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">A????es</th>
                                <th scope="col">N?? Formul??rio</th>
                                <th scope="col">Nome do Paciente</th>
                                <th scope="col">Data de Cria????o</th>
                            </tr>
                        </thead>
                        <tbody>
                            {salvos.map(salvo => {
                                return (
                                    <tr key={salvo.idFormulario}>
                                        <td><a onClick={() => handlePutId(salvo.idFormulario)} className="ml-3 w-100 text-primary" href="javascript:void(0);" title="Visualizar"><img src={Lupa} alt="editar"></img></a></td>
                                        <td>{salvo.idFormulario}</td>
                                        <td>{salvo.paciente.nome}</td>
                                        <td>{salvo.dtCriacao}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>



            <Modal id="modal" show={modalDefault} onHide={modalDefaultClose} size="xl">
                <Modal.Header>
                    <h2>Formul??rio</h2>
                </Modal.Header>
                <Modal.Body style={{ background: '#fafdff' }}>
                    <div className="row">
                        <div className="col-md-10 offset-1">
                            <form>
                                <div className="container" style={{ marginTop: '20px' }}>
                                    <div className="row">
                                        <div className="col-md-12 col-lg-5 m-2">
                                            <h4>Paciente</h4>
                                            <div className="form-group">
                                                <label htmlFor="idNomeCompleto">Nome completo*</label>
                                                <input type="text" className="form-control" id="idNomeCompleto" value={nome} readOnly onChange={event => setNome(event.target.value)} required />
                                            </div>
                                            <div className="form-row">
                                                <div className="col-md-6 mb-3">
                                                    <label htmlFor="idIdade">Idade*</label>
                                                    <input type="number" className="form-control" id="idIdade" value={idade} readOnly onChange={event => setIdade(event.target.value)} required />
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <label htmlFor="idCpf">CPF*</label>
                                                    <input type="text" className="form-control" id="idCpf" value={cpf} readOnly onChange={event => setCpf(event.target.value)} required />
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="col-md-6 mb-3">
                                                    <label htmlFor="idCpf">Sexo*</label>
                                                    <input type="text" className="form-control" id="idSexo" value={sexo} readOnly required />
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <label htmlFor="idLeitor">Leito*</label>
                                                    <input type="text" className="form-control" id="idLeitor" value={leito} readOnly onChange={event => setLeito(event.target.value)} required />
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="col-md-6 mb-3">
                                                    <label htmlFor="idNAtendimento">N?? Atendimento*</label>
                                                    <input type="text" className="form-control" id="idNAtendimento" value={nAtm} readOnly onChange={event => setNatm(event.target.value)} required />
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <label htmlFor="idRegistro">Registro*</label>
                                                    <input type="text" className="form-control" id="idRegistro" value={registro} readOnly onChange={event => setRegistro(event.target.value)} required />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-5 m-2">
                                            <h4>Equipe de Enfermagem</h4>
                                            <div className="my-2">1) Paciente apresenta dois ou mais sinais de SIRS.</div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" disabled defaultChecked={febreHipotemia}  readOnly id="idEF11" />
                                                <label className="form-check-label" htmlFor="idEF11">
                                                    Febre {'>'} 37,8??C ou hipotermia {'<'} 35??C.
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" disabled defaultChecked={leucocitoseLeucopenia} readOnly onChange={() => boleanLeucocitoseLeucopenia()} id="idEF12" />
                                                <label className="form-check-label" htmlFor="idEF12">
                                                    Leucocitose {'>'} 12.000, leucopenia {'<'} 4.000 ou desvio esquerdo {'>'} 10% bast??es.
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" disabled defaultChecked={taquicardia} readOnly onChange={() => boleanTaquicardia()} id="idEF13" />
                                                <label className="form-check-label" htmlFor="idEF13">
                                                    Taquicardia {'>'} 90bpm.
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" disabled defaultChecked={taquipneia} readOnly onChange={() => boleanTaquipneia()} id="idEF14" />
                                                <label className="form-check-label" htmlFor="idEF14">
                                                    Taquipneia {'>'} 20irpm.
                                                </label>
                                            </div>
                                            <div className="my-2">2) Paciente apresenta uma ou mais disfun????o org??nica.</div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" disabled defaultChecked={diurese} readOnly onChange={() => boleanDiurese()} id="idEF21" />
                                                <label className="form-check-label" htmlFor="idEF21">
                                                    Diurese {'<'} 0,5ml/kg/hora.
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" disabled defaultChecked={hipotensao} readOnly onChange={() => boleanHipotensao()} id="idEF22" />
                                                <label className="form-check-label" htmlFor="idEF22">
                                                    Hipotens??o (PAS &le; 90mmHg).
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" disabled defaultChecked={snlcConfAgtcComa} readOnly onChange={() => boleanSnlcConfAgtComa()} id="idEF23" />
                                                <label className="form-check-label" htmlFor="idEF23">
                                                    Sonol??ncia, confus??o, agita????o ou coma.
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" disabled defaultChecked={saturacaoDispneia} readOnly onChange={() => boleanSaturacaoDispneia()} id="idEF24" />
                                                <label className="form-check-label" htmlFor="idEF24">
                                                    SatO<sub>2</sub> &le; 90%, necessidade de O<sub>2</sub> ou dispneia.
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 col-lg-5 m-2">
                                            <h4>Proced??ncia</h4>
                                            <div className="col-md-6 mb-3">
                                                <input type="text" className="form-control" id="procedencia" value={procedencia} readOnly required />
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-5 m-2">
                                            <h4>Acionamento da Equipe M??dica</h4>
                                                <div className="col-md-6 mb-3">
                                                    <label htmlFor="idNomeMedicoChamado">CRM*</label>
                                                    <input type="text" className="form-control" id="crm" value={crm} readOnly required />
                                                </div>
                                        </div>
                                    </div>


                                    <div className="row mt-3">
                                        <div className="d-flex justify-content-start mt-3">
                                            <div>
                                                <small className="ml-2"><span style={{ color: 'red' }}>*</span> Campos Obrigat??rios</small>
                                                <br />
                                                <input className="btn button-purple bg-danger m-2" onClick={() => { modalDefaultClose(); }} value="Sair" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </form>
                            <br />
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}