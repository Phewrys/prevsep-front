import { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap'
import swal from 'sweetalert'
import Editar from './../../content/img/edit_preto.png'
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

export default function FormulariosSalvos() {
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

  // POST or PUT: Update or finish form1
  async function handlePut(event: any) {
    event.preventDefault();

    let data = JSON.stringify({
      paciente: {
        nome: nome,
        idade: idade,
        sexo: sexo,
        leito: leito,
        nrAtendimento: nAtm,
        registro: registro,
        cpf: cpf
      },
      crmMedico: crm,
      procedencia: procedencia,
      sirs: {
        febreHipotemia: febreHipotemia,
        leucocitoseLeucopenia: leucocitoseLeucopenia,
        taquicardia: taquicardia,
        taquipneia: taquipneia
      },
      disfOrganica: {
        diurese: diurese,
        hipotensao: hipotensao,
        snlcConfAgtcComa: snlcConfAgtcComa,
        saturacaoDispneia: saturacaoDispneia
      }
    });

    let config = {
      method: PostPut,
      url: `https://prevsep.herokuapp.com/api/v1/nurses/${cre}/forms/sepse/${idFormulario}/form1`,
      headers: {
        'accept': 'application/json',
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response: any) {
        swal({
          title: "Processado com Sucesso!",
          icon: "success",
          buttons: [false],
          timer: 2000,
        });
      })
      .catch(function (error: any) {
        try {
          console.log('------------ ERROR ------------')
          console.log(error.response.data);
          console.log('------------ ----- ------------')
          swal({
            title: "Erro!",
            text: error.response.data.message,
            icon: "error",
            buttons: [true]
          });
        }
        catch(error: any) {
          swal({
            title: "Erro!",
            icon: "error",
            buttons: [true]
          });
          console.log(error);
        }
      });
  }

  // GET: Get form for current nurse
  function formsSalvosNurse() {

    var data = qs.stringify({
      'grant_type': 'client_credentials'
    });

    var config = {
      method: 'get',
      url: `https://prevsep.herokuapp.com/api/v1/forms/sepse/nurse/form1?status=SAVED&creEnfermeiro=${cre}`,
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

  // GET/:id get data of saved form
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
        if (data.status === "SAVED") {
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
        }
        else {
          swal({
            title: "Formul??rio j?? submetido!",
            buttons: [false],
            timer: 2000,
          })
        }
      }) 
      .catch(function (error: any) {
        console.log(error)
      });
  }

  return (
    <>
      <div className="div-header">
        <h2>Formul??rios Salvos</h2>
      </div>
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
                    <td><a onClick={() => handlePutId(salvo.idFormulario)} className="ml-3 w-100 text-primary" href="javascript:void(0);" title="Editar"><img src={Editar} alt='Editar'></img></a></td>
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
          <h2>Editar Formul??rio</h2>
        </Modal.Header>
        <Modal.Body style={{ background: '#fafdff' }}>
          <div className="row">
            <div className="col-md-10 offset-1">
              <form onSubmit={handlePut}>
                <div className="container" style={{ marginTop: '20px' }}>
                  <div className="row">
                    <div className="col-md-12 col-lg-5 m-2">
                      <h4>Paciente</h4>
                      <div className="form-group">
                        <label htmlFor="idNomeCompleto">Nome completo*</label>
                        <input type="text" className="form-control" id="idNomeCompleto" value={nome} onChange={event => setNome(event.target.value)} required />
                      </div>
                      <div className="form-row">
                        <div className="col-md-6 mb-3">
                          <label htmlFor="idIdade">Idade*</label>
                          <input type="number" className="form-control" id="idIdade" value={idade} onChange={event => setIdade(event.target.value)} required />
                        </div>
                        <div className="col-md-6 mb-3">
                          <label htmlFor="idCpf">CPF*</label>
                          <input type="text" className="form-control" id="idCpf" value={cpf} onChange={event => setCpf(event.target.value)} required />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="col-md-6 mb-3">
                          <label htmlFor="idSexo">Sexo*</label>
                          <select id="idSexo" className="form-control" required value={sexo} onChange={event => setSexo(event.target.value)} >
                            <option value="DEFAULT" disabled selected>-- Selecionar --</option>
                            <option value={'Masculino'}>Masculino</option>
                            <option value={'Feminino'}>Feminino</option>
                          </select>
                        </div>
                        <div className="col-md-6 mb-3">
                          <label htmlFor="idLeitor">Leito*</label>
                          <input type="text" className="form-control" id="idLeitor" value={leito} onChange={event => setLeito(event.target.value)} required />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="col-md-6 mb-3">
                          <label htmlFor="idNAtendimento">N?? Atendimento*</label>
                          <input type="text" className="form-control" id="idNAtendimento" value={nAtm} onChange={event => setNatm(event.target.value)} required />
                        </div>
                        <div className="col-md-6 mb-3">
                          <label htmlFor="idRegistro">Registro*</label>
                          <input type="text" className="form-control" id="idRegistro" value={registro} onChange={event => setRegistro(event.target.value)} required />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 col-lg-5 m-2">
                      <h4>Equipe de Enfermagem</h4>
                      <div className="my-2">1) Paciente apresenta dois ou mais sinais de SIRS.</div>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultChecked={febreHipotemia} onChange={() => boleanFebreHipotemia()} id="idEF11" />
                        <label className="form-check-label" htmlFor="idEF11">
                          Febre {'>'} 37,8??C ou hipotermia {'<'} 35??C.
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultChecked={leucocitoseLeucopenia} onChange={() => boleanLeucocitoseLeucopenia()} id="idEF12" />
                        <label className="form-check-label" htmlFor="idEF12">
                          Leucocitose {'>'} 12.000, leucopenia {'<'} 4.000 ou desvio esquerdo {'>'} 10% bast??es.
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultChecked={taquicardia} onChange={() => boleanTaquicardia()} id="idEF13" />
                        <label className="form-check-label" htmlFor="idEF13">
                          Taquicardia {'>'} 90bpm.
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultChecked={taquipneia} onChange={() => boleanTaquipneia()} id="idEF14" />
                        <label className="form-check-label" htmlFor="idEF14">
                          Taquipneia {'>'} 20irpm.
                        </label>
                      </div>
                      <div className="my-2">2) Paciente apresenta uma ou mais disfun????o org??nica.</div>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultChecked={diurese} onChange={() => boleanDiurese()} id="idEF21" />
                        <label className="form-check-label" htmlFor="idEF21">
                          Diurese {'<'} 0,5ml/kg/hora.
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultChecked={hipotensao} onChange={() => boleanHipotensao()} id="idEF22" />
                        <label className="form-check-label" htmlFor="idEF22">
                          Hipotens??o (PAS &le; 90mmHg).
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultChecked={snlcConfAgtcComa} onChange={() => boleanSnlcConfAgtComa()} id="idEF23" />
                        <label className="form-check-label" htmlFor="idEF23">
                          Sonol??ncia, confus??o, agita????o ou coma.
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultChecked={saturacaoDispneia} onChange={() => boleanSaturacaoDispneia()} id="idEF24" />
                        <label className="form-check-label" htmlFor="idEF24">
                          SatO<sub>2</sub> &le; 90%, necessidade de O<sub>2</sub> ou dispneia.
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 col-lg-5 m-2">
                      <h4>Proced??ncia</h4>
                      <div className="form-row">
                        <div className="form-check col-md-5 ml-4">
                          <input className="form-check-input" type="radio" name="radio" value="CLINICA_MEDICA_1" defaultChecked={procedencia==="CLINICA_MEDICA_1"} onChange={event => setProcedencia(event.target.value)} id="idClinicaMedica1" />
                          <label className="form-check-label" htmlFor="idClinicaMedica1">Cl??nica M??dica I</label>
                        </div>
                        <div className="form-check col-md-5 ml-4">
                          <input className="form-check-input" type="radio" name="radio" value="CLINICA_MEDICA_2" defaultChecked={procedencia==="CLINICA_MEDICA_2"} onChange={event => setProcedencia(event.target.value)} id="idClinicaMedica2" />
                          <label className="form-check-label" htmlFor="idClinicaMedica2">Cl??nica M??dica II</label>
                        </div>
                        <div className="form-check col-md-5 ml-4">
                          <input className="form-check-input" type="radio" name="radio" value="CLINICA_CIRURGICA_1" defaultChecked={procedencia==="CLINICA_CIRURGICA_1"} onChange={event => setProcedencia(event.target.value)} id="idClinicaCirurgica1" />
                          <label className="form-check-label" htmlFor="idClinicaCirurgica1">Cl??nica Cir??rgica I</label>
                        </div>
                        <div className="form-check col-md-5 ml-4">
                          <input className="form-check-input" type="radio" name="radio" value="CLINICA_CIRURGICA_2" defaultChecked={procedencia==="CLINICA_CIRURGICA_2"} onChange={event => setProcedencia(event.target.value)} id="idClinicaCirurgica2" />
                          <label className="form-check-label" htmlFor="idClinicaCirurgica2">Cl??nica Cir??rgica II</label>
                        </div>
                        <div className="form-check col-md-5 ml-4">
                          <input className="form-check-input" type="radio" name="radio" value="PEDIATRIA" defaultChecked={procedencia==="PEDIATRIA"} onChange={event => setProcedencia(event.target.value)} id="idPediatria" />
                          <label className="form-check-label" htmlFor="idPediatria">Pediatria</label>
                        </div>
                        <div className="form-check col-md-5 ml-4">
                          <input className="form-check-input" type="radio" name="radio" value="ONCOLOGIA" defaultChecked={procedencia==="ONCOLOGIA"} onChange={event => setProcedencia(event.target.value)} id="idOncologia" />
                          <label className="form-check-label" htmlFor="idOncologia">Oncologia</label>
                        </div>
                        <div className="form-check col-md-5 ml-4">
                          <input className="form-check-input" type="radio" name="radio" value="UTI" defaultChecked={procedencia==="UTI"} onChange={event => setProcedencia(event.target.value)} id="idUti" />
                          <label className="form-check-label" htmlFor="idUti">UTI</label>
                        </div>
                        <div className="form-check col-md-5 ml-4">
                          <input className="form-check-input" type="radio" name="radio" value="AMBULATORIO" defaultChecked={procedencia==="AMBULATORIO"} onChange={event => setProcedencia(event.target.value)} id="idAmbulat??rio" />
                          <label className="form-check-label" htmlFor="idAmbulat??rio">Ambulat??rio</label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 col-lg-5 m-2">
                      <h4>Acionamento da Equipe M??dica</h4>
                      <div className="form-group">
                        <label htmlFor="idNomeMedicoChamado">Nome do m??dico chamado*</label>
                        <select className="form-control" id="idNomeMedicoChamado" value={crm} onChange={event => setCrm(event.target.value)} required>
                          <option value="DEFAULT" disabled selected>-- Selecionar --</option>
                          {doctors.map(doctor => {
                            return (
                              <option key={doctor.cpf} value={doctor.crm}>{doctor.nome}</option>
                            )
                          })}
                        </select>
                      </div>
                    </div>
                  </div>

                  
                  <div className="row mt-3">
                    <h4>Voc?? quer</h4>
                    <div className="d-flex justify-content-start">
                      <div className="row">
                        <div className="form-check ml-4">
                          <input className="form-check-input" type="radio" name="radioVQ" onChange={() => (setPostPut('PUT'))} id="idSalvarSair" required />
                          <label className="form-check-label" htmlFor="idSalvarSair">Salvar e Sair</label>
                        </div>
                        <div className="form-check ml-4">
                          <input className="form-check-input" type="radio" name="radioVQ" onChange={() => (setPostPut('POST'))} id="idSalvarEnviar" required />
                          <label className="form-check-label" htmlFor="idSalvarEnviar">Salvar e Enviar</label>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-start mt-3">
                      <div>
                        <small className="ml-2"><span style={{ color: 'red' }}>*</span> Campos Obrigat??rios</small>
                        <br />
                        <input className="btn button-purple m-2" type="submit" onClick={() => {modalDefaultClose();}} value="Editar" />
                        <input className="btn button-purple bg-danger m-2" onClick={() => {modalDefaultClose();}} value="Sair" />
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