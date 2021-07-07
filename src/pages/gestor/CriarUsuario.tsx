import { useState } from 'react'
import swal from 'sweetalert'

export default function CriarUsuario() {
    const token = localStorage.getItem('@PermissionPS:token');

    let [cpfGestor, setCpfGestor] = useState('')
    let [nomeGestor, setNomeGestor] = useState('')
    let [emailGestor, setEmailGestor] = useState('')
    let [senhaGestor, setSenhaGestor] = useState('')
    let [statusGestor, setStatusGestor] = useState('')

    let [crm, setCrm] = useState('')
    let [cpfMedico, setCpfMedico] = useState('')
    let [nomeMedico, setNomeMedico] = useState('')
    let [emailMedico, setEmailMedico] = useState('')
    let [senhaMedico, setSenhaMedico] = useState('')
    let [statusMedico, setStatusMedico] = useState('')

    let [cre, setCre] = useState('')
    let [cpfEnfermeiro, setCpfEnfermeiro] = useState('')
    let [nomeEnfermeiro, setNomeEnfermeiro] = useState('')
    let [emailEnfermeiro, setEmailEnfermeiro] = useState('')
    let [senhaEnfermeiro, setSenhaEnfermeiro] = useState('')
    let [statusEnfermeiro, setStatusEnfermeiro] = useState('')

    // POST: /api/v1/managers - Cria um novo gestor.
    async function handlePostGestor(event: any) {
        event.preventDefault();

        fetch(`https://prevsep.herokuapp.com/api/v1/managers`, {
            method: 'POST',
            body: JSON.stringify({
                userInfo: {
                    cpf: cpfGestor,
                    nome: nomeGestor,
                    email: emailGestor,
                    senha: senhaGestor,
                    status: statusGestor
                }
            }),
            headers: {
                'accept': 'application/json',
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
        }).catch(function (error: any) {
            console.log(error);
        }).then(() => swal({
            title: "Gestor Criado com Sucesso!!!",
            icon: "success",
            buttons: [false],
            timer: 3000,
        }))
    }

    // POST: /api/v1/doctors - Cria um novo médico.
    async function handlePostMedico(event: any) {
        event.preventDefault();

        fetch(`https://prevsep.herokuapp.com/api/v1/doctors`, {
            method: 'POST',
            body: JSON.stringify({
                crm: crm,
                userInfo: {
                    cpf: cpfMedico,
                    nome: nomeMedico,
                    email: emailMedico,
                    senha: senhaMedico,
                    status: statusMedico
                }
            }),
            headers: {
                'accept': 'application/json',
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
        }).catch(function (error: any) {
            console.log(error);
        }).then(() => swal({
            title: "Médico Criado com Sucesso!!!",
            icon: "success",
            buttons: [false],
            timer: 3000,
        }))
    }

    // POST: /api/v1/nurses - Cria um novo enfermeiro.
    async function handlePostEnfermeiro(event: any) {
        event.preventDefault();

        fetch(`https://prevsep.herokuapp.com/api/v1/nurses`, {
            method: 'POST',
            body: JSON.stringify({
                cre: cre,
                userInfo: {
                    cpf: cpfEnfermeiro,
                    nome: nomeEnfermeiro,
                    email: emailEnfermeiro,
                    senha: senhaEnfermeiro,
                    status: statusEnfermeiro
                }
            }),
            headers: {
                'accept': 'application/json',
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
        }).catch(function (error: any) {
            console.log(error);
        }).then(() => swal({
            title: "Enfermeiro Criado com Sucesso!!!",
            icon: "success",
            buttons: [false],
            timer: 3000,
        }))
    }

    return (
        <>
            <div className="div-header">
                <h2>Criar Usuário</h2>
            </div>
            <ul className="nav nav-tabs mt-3" id="myTab" role="tablist">
                <li className="nav-item">
                    <a className="nav-link active" id="idGestor-tab" data-toggle="tab" href="#gestor" role="tab" aria-controls="gestor" aria-selected="true" style={{ color: '#4e3883' }}>GESTOR</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="idMedico-tab" data-toggle="tab" href="#medico" role="tab" aria-controls="medico" aria-selected="false" style={{ color: '#4e3883' }}>MÉDICO</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="idEnfermeiro-tab" data-toggle="tab" href="#enfermeiro" role="tab" aria-controls="enfermeiro" aria-selected="false" style={{ color: '#4e3883' }}>ENFERMEIRO</a>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="gestor" role="tabpanel" aria-labelledby="idGestor-tab">
                    <form onSubmit={handlePostGestor}>
                        <div className="container" style={{ marginTop: '20px' }}>
                            <div className="row">
                                <div className="col-md-12 col-lg-5 m-2">
                                    <div className="form-group">
                                        <label htmlFor="idNomeCompletoGestor">Nome Completo*</label>
                                        <input type="text" className="form-control" id="idNomeCompletoGestor" required onChange={event => setNomeGestor(event.target.value)} />
                                    </div>
                                    <div className="form-row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="idEmailGestor">Email*</label>
                                            <input type="email" className="form-control" id="idEmailGestor" required onChange={event => setEmailGestor(event.target.value)} />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="idCpfGestor">CPF*</label>
                                            <input type="number" className="form-control" id="idCpfGestor" required onChange={event => setCpfGestor(event.target.value)} />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="idSenhaGestor">Senha*</label>
                                            <input type="text" className="form-control" id="idSenhaGestor" required onChange={event => setSenhaGestor(event.target.value)} />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="idStatusGestor">Status*</label>
                                            <select id="idStatusGestor" className="form-control" required onChange={event => setStatusGestor(event.target.value)} >
                                                <option value="DEFAULT" disabled selected>-- Selecionar --</option>
                                                <option value={'ATIVO'}>Ativo</option>
                                                <option value={'DESATIVADO'}>Desativado</option>
                                                <option value={'EM_FERIAS'}>Em Férias</option>
                                                <option value={'BLOQUEADO'}>Bloqueado</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-start">
                                <div>
                                    <small className="ml-2"><span style={{ color: 'red' }}>*</span> Campos Obrigatórios</small>
                                    <br />
                                    <input className="btn button-purple m-2" type="submit" value="Criar" />
                                    <input className="btn button-purple bg-danger m-2" type="reset" value="Limpar" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="tab-pane fade" id="medico" role="tabpanel" aria-labelledby="idMedico-tab">
                <form onSubmit={handlePostMedico}>
                        <div className="container" style={{ marginTop: '20px' }}>
                            <div className="row">
                                <div className="col-md-12 col-lg-5 m-2">
                                    <div className="form-group">
                                        <label htmlFor="idNomeCompletoMedico">Nome Completo*</label>
                                        <input type="text" className="form-control" id="idNomeCompletoMedico" required onChange={event => setNomeMedico(event.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="idEmailMedico">Email*</label>
                                        <input type="email" className="form-control" id="idEmailMedico" required onChange={event => setEmailMedico(event.target.value)} />
                                    </div>
                                    <div className="form-row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="idCpfMedico">CPF*</label>
                                            <input type="number" className="form-control" id="idCpfMedico" required onChange={event => setCpfMedico(event.target.value)} />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="idSenhaMedico">Senha*</label>
                                            <input type="text" className="form-control" id="idSenhaMedico" required onChange={event => setSenhaMedico(event.target.value)} />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="idStatusMedico">Status*</label>
                                            <select id="idStatusMedico" className="form-control" required onChange={event => setStatusMedico(event.target.value)} >
                                                <option value="DEFAULT" disabled selected>-- Selecionar --</option>
                                                <option value={'ATIVO'}>Ativo</option>
                                                <option value={'DESATIVADO'}>Desativado</option>
                                                <option value={'EM_FERIAS'}>Em Férias</option>
                                                <option value={'BLOQUEADO'}>Bloqueado</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="idCrm">CRM*</label>
                                            <input type="number" className="form-control" id="idCrm" required onChange={event => setCrm(event.target.value)} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-start">
                                <div>
                                    <small className="ml-2"><span style={{ color: 'red' }}>*</span> Campos Obrigatórios</small>
                                    <br />
                                    <input className="btn button-purple m-2" type="submit" value="Criar" />
                                    <input className="btn button-purple bg-danger m-2" type="reset" value="Limpar" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="tab-pane fade" id="enfermeiro" role="tabpanel" aria-labelledby="idEnfermeiro-tab">
                <form onSubmit={handlePostEnfermeiro}>
                        <div className="container" style={{ marginTop: '20px' }}>
                            <div className="row">
                                <div className="col-md-12 col-lg-5 m-2">
                                    <div className="form-group">
                                        <label htmlFor="idNomeCompletoEnfermeiro">Nome Completo*</label>
                                        <input type="text" className="form-control" id="idNomeCompletoEnfermeiro" required onChange={event => setNomeEnfermeiro(event.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="idEmailEnfermeiro">Email*</label>
                                        <input type="email" className="form-control" id="idEmailEnfermeiro" required onChange={event => setEmailEnfermeiro(event.target.value)} />
                                    </div>
                                    <div className="form-row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="idCpfEnfermeiro">CPF*</label>
                                            <input type="number" className="form-control" id="idCpfEnfermeiro" required onChange={event => setCpfEnfermeiro(event.target.value)} />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="idSenhaEnfermeiro">Senha*</label>
                                            <input type="text" className="form-control" id="idSenhaEnfermeiro" required onChange={event => setSenhaEnfermeiro(event.target.value)} />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="idStatusEnfermeiro">Status*</label>
                                            <select id="idStatusEnfermeiro" className="form-control" required onChange={event => setStatusEnfermeiro(event.target.value)} >
                                                <option value="DEFAULT" disabled selected>-- Selecionar --</option>
                                                <option value={'ATIVO'}>Ativo</option>
                                                <option value={'DESATIVADO'}>Desativado</option>
                                                <option value={'EM_FERIAS'}>Em Férias</option>
                                                <option value={'BLOQUEADO'}>Bloqueado</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="idCre">CRE*</label>
                                            <input type="number" className="form-control" id="idCre" required onChange={event => setCre(event.target.value)} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-start">
                                <div>
                                    <small className="ml-2"><span style={{ color: 'red' }}>*</span> Campos Obrigatórios</small>
                                    <br />
                                    <input className="btn button-purple m-2" type="submit" value="Criar" />
                                    <input className="btn button-purple bg-danger m-2" type="reset" value="Limpar" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}