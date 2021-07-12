import { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap'
import swal from 'sweetalert'
import Moment from 'moment'
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

export default function FormulariosSalvos() {
  const token = localStorage.getItem('@PermissionPS:token');

  const [modalDefault, setModalDefaultShow] = useState(false)
  const modalDefaultClose = () => setModalDefaultShow(false)
  const modalDefaultShow = () => setModalDefaultShow(true)

  let [salvos, setSalvos] = useState<JSONSalvos[]>([])
  let [crm, setCrm] = useState('')

  let [PostPut, setPostPut] = useState('')
  let [idPut, setIdPut] = useState(0)

  let [idFormulario, setidFormularioPut] = useState(0)
  let [idPaciente, setidPacientePut] = useState(0)
  let [nome, setnomePut] = useState('')
  let [idade, setidadePut] = useState('')
  let [sexo, setsexoPut] = useState('')
  let [leito, setleitoPut] = useState('')
  let [nrAtendimento, setnrAtendimentoPut] = useState('')
  let [registro, setregistroPut] = useState('')
  let [cpf, setcpfPut] = useState('')
  let [crmMedico, setcrmMedicoPut] = useState(0)
  let [dtCriacao, setdtCriacaoPut] = useState(Date)
  let [status, setstatusPut] = useState('')
  let [pneumoniaEmpema, setpneumoniaEmpemaPut] = useState(false)
  let booleanpneumoniaEmpema = () => {
    if (pneumoniaEmpema) {
      setpneumoniaEmpemaPut(false)
    } else {
      setpneumoniaEmpemaPut(true)
    }
  }
  let [infeccaoUrinaria, setinfeccaoUrinariaPut] = useState(false)
  let booleaninfeccaoUrinaria = () => {
    if (infeccaoUrinaria) {
      setinfeccaoUrinariaPut(false)
    } else {
      setinfeccaoUrinariaPut(true)
    }
  }
  let [infeccaoAbdominal, setinfeccaoAbdominalPut] = useState(false)
  let booleaninfeccaoAbdominal = () => {
    if (infeccaoAbdominal) {
      setinfeccaoAbdominalPut(false)
    } else {
      setinfeccaoAbdominalPut(true)
    }
  }
  let [menigite, setmenigitePut] = useState(false)
  let booleanmenigite = () => {
    if (menigite) {
      setmenigitePut(false)
    } else {
      setmenigitePut(true)
    }
  }
  let [endocardite, setendocarditePut] = useState(false)
  let booleanendocardite = () => {
    if (endocardite) {
      setendocarditePut(false)
    } else {
      setendocarditePut(true)
    }
  }
  let [pelePartesMoles, setpelePartesMolesPut] = useState(false)
  let booleanpelePartesMoles = () => {
    if (pelePartesMoles) {
      setpelePartesMolesPut(false)
    } else {
      setpelePartesMolesPut(true)
    }
  }
  let [infeccaoProtese, setinfeccaoProtesePut] = useState(false)
  let booleaninfeccaoProtese = () => {
    if (infeccaoProtese) {
      setinfeccaoProtesePut(false)
    } else {
      setinfeccaoProtesePut(true)
    }
  }
  let [infeccaoOssea, setinfeccaoOsseaPut] = useState(false)
  let booleaninfeccaoOssea = () => {
    if (infeccaoOssea) {
      setinfeccaoOsseaPut(false)
    } else {
      setinfeccaoOsseaPut(true)
    }
  }
  let [infeccaoFeridaOperatoria, setinfeccaoFeridaOperatoriaPut] = useState(false)
  let booleaninfeccaoFeridaOperatoria = () => {
    if (infeccaoFeridaOperatoria) {
      setinfeccaoFeridaOperatoriaPut(false)
    } else {
      setinfeccaoFeridaOperatoriaPut(true)
    }
  }
  let [infeccaoSanguineaCateter, setinfeccaoSanguineaCateterPut] = useState(false)
  let booleaninfeccaoSanguineaCateter = () => {
    if (infeccaoSanguineaCateter) {
      setinfeccaoSanguineaCateterPut(false)
    } else {
      setinfeccaoSanguineaCateterPut(true)
    }
  }
  let [semFocoDefinido, setsemFocoDefinidoPut] = useState(false)
  let booleansemFocoDefinido = () => {
    if (semFocoDefinido) {
      setsemFocoDefinidoPut(false)
    } else {
      setsemFocoDefinidoPut(true)
    }
  }
  let [outrasInfeccoes, setoutrasInfeccoesPut] = useState('')
  let [apresentaCriterioExclusao, setapresentaCriterioExclusaoPut] = useState(false)
  let booleanapresentaCriterioExclusao = () => {
    if (apresentaCriterioExclusao) {
      setapresentaCriterioExclusaoPut(false)
    } else {
      setapresentaCriterioExclusaoPut(true)
    }
  }
  let [fimDeVida, setfimDeVidaPut] = useState(false)
  let booleanfimDeVida = () => {
    if (fimDeVida) {
      setfimDeVidaPut(false)
    } else {
      setfimDeVidaPut(true)
    }
  }
  let [doencaAtipica, setdoencaAtipicaPut] = useState(false)
  let booleandoencaAtipica = () => {
    if (doencaAtipica) {
      setdoencaAtipicaPut(false)
    } else {
      setdoencaAtipicaPut(true)
    }
  }
  let [probabilidadeSepseBaixa, setprobabilidadeSepseBaixaPut] = useState(false)
  let booleanprobabilidadeSepseBaixa = () => {
    if (probabilidadeSepseBaixa) {
      setprobabilidadeSepseBaixaPut(false)
    } else {
      setprobabilidadeSepseBaixaPut(true)
    }
  }
  let [iniciado, setiniciadoPut] = useState(false)
  let booleaniniciado = () => {
    if (iniciado) {
      setiniciadoPut(false)
    } else {
      setiniciadoPut(true)
    }
  }
  let [dtDisparo, setdtDisparoPut] = useState(Date)
  let [lactoDtColeta, setlactoDtColetaPut] = useState(Date)
  let [hemoculturaDtColeta, sethemoculturaDtColetaPut] = useState(Date)
  let [antibioticoAmploAspectro, setantibioticoAmploAspectroPut] = useState(Date)
  let [cristaloides, setcristaloidesPut] = useState(false)
  let booleancristaloides = () => {
    if (cristaloides) {
      setcristaloidesPut(false)
    } else {
      setcristaloidesPut(true)
    }
  }
  let [vasopressores, setvasopressoresPut] = useState(false)
  let booleanvasopressores = () => {
    if (vasopressores) {
      setvasopressoresPut(false)
    } else {
      setvasopressoresPut(true)
    }
  }
  let [bhJustificativaNao, setbhJustificativaNaoPut] = useState('')
  let [qSofa, setqSofaPut] = useState(false)
  let booleanqSofa = () => {
    if (qSofa) {
      setqSofaPut(false)
    } else {
      setqSofaPut(true)
    }
  }
  let [pas100Mmghg, setpas100MmghgPut] = useState(false)
  let booleanpas100Mmghg = () => {
    if (pas100Mmghg) {
      setpas100MmghgPut(false)
    } else {
      setpas100MmghgPut(true)
    }
  }
  let [fr22Rpm, setfr22RpmPut] = useState(false)
  let booleanfr22Rpm = () => {
    if (fr22Rpm) {
      setfr22RpmPut(false)
    } else {
      setfr22RpmPut(true)
    }
  }
  let [rebaixamentoNivelConsiencia, setrebaixamentoNivelConsienciaPut] = useState(false)
  let booleanrebaixamentoNivelConsiencia = () => {
    if (rebaixamentoNivelConsiencia) {
      setrebaixamentoNivelConsienciaPut(false)
    } else {
      setrebaixamentoNivelConsienciaPut(true)
    }
  }
  let [lactoInicialmenteAlto, setlactoInicialmenteAltoPut] = useState(false)
  let booleanlactoInicialmenteAlto = () => {
    if (lactoInicialmenteAlto) {
      setlactoInicialmenteAltoPut(false)
    } else {
      setlactoInicialmenteAltoPut(true)
    }
  }
  let [outros, setoutrosPut] = useState('')
  let [rsJustificativaNao, setrsJustificativaNaoPut] = useState('')
  let [aplicada, setaplicadaPut] = useState(false)
  let booleanaplicada = () => {
    if (aplicada) {
      setaplicadaPut(false)
    } else {
      setaplicadaPut(true)
    }
  }

  // GET: /api/v1/doctors/{cpf} - Retorna informações sobre um médico dado um CPF.
  useEffect(() => {
    const cpf = sessionStorage.getItem('@PermissionPS:username');

    var data = qs.stringify({
      'grant_type': 'client_credentials'
    });

    var config = {
      method: 'get',
      url: `https://prevsep.herokuapp.com/api/v1/doctors/${cpf}`,
      headers: {
        'accept': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      data: data
    };

    axios(config)
      .then(function (response: any) {
        setCrm(response.data.crm)
      })
      .catch(function (error: any) {
        console.log(error);
      });
  }, [])

  // GET: /api/v1/forms/sepse/doctor - Retorna os formulários dos médicos presentes no banco de dados a partir de um certo critério..
  function formsPendingDoctors() {

    var data = qs.stringify({
      'grant_type': 'client_credentials'
    });

    var config = {
      method: 'get',
      url: `https://prevsep.herokuapp.com/api/v1/forms/sepse/doctor?crmMedico=${crm}&status=SAVED`,
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

  // ALTERAR - GET/:id /api/v1/forms/sepse/doctor - Retorna os formulários dos médicos presentes no banco de dados a partir de um certo critério.
  function handlePutId(id: number) {

    var data = qs.stringify({
      'grant_type': 'client_credentials'
    });

    var config = {
      method: 'get',
      url: `https://prevsep.herokuapp.com/api/v1/forms/sepse/doctor?idFormulario=${id}`,
      headers: {
        'accept': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      data: data
    };

    axios(config)
      .then(function (response: any) {
        setidFormularioPut(response.data.content[0].idFormulario)
        setidPacientePut(response.data.content[0].paciente.idPaciente)
        setnomePut(response.data.content[0].paciente.nome)
        setidadePut(response.data.content[0].paciente.idade)
        setsexoPut(response.data.content[0].paciente.sexo)
        setleitoPut(response.data.content[0].paciente.leito)
        setnrAtendimentoPut(response.data.content[0].paciente.nrAtendimento)
        setregistroPut(response.data.content[0].paciente.registro)
        setcpfPut(response.data.content[0].paciente.cpf)

        setcrmMedicoPut(response.data.content[0].crmMedico)
        setdtCriacaoPut(response.data.content[0].dtCriacao)
        setstatusPut(response.data.content[0].status)

        setpneumoniaEmpemaPut(response.data.content[0].focoInfeccioso.pneumoniaEmpema)
        setinfeccaoUrinariaPut(response.data.content[0].focoInfeccioso.infeccaoUrinaria)
        setinfeccaoAbdominalPut(response.data.content[0].focoInfeccioso.infeccaoAbdominal)
        setmenigitePut(response.data.content[0].focoInfeccioso.menigite)
        setendocarditePut(response.data.content[0].focoInfeccioso.endocardite)
        setpelePartesMolesPut(response.data.content[0].focoInfeccioso.pelePartesMoles)
        setinfeccaoProtesePut(response.data.content[0].focoInfeccioso.infeccaoProtese)
        setinfeccaoOsseaPut(response.data.content[0].focoInfeccioso.infeccaoOssea)
        setinfeccaoFeridaOperatoriaPut(response.data.content[0].focoInfeccioso.infeccaoFeridaOperatoria)
        setinfeccaoSanguineaCateterPut(response.data.content[0].focoInfeccioso.infeccaoSanguineaCateter)
        setsemFocoDefinidoPut(response.data.content[0].focoInfeccioso.semFocoDefinido)
        setoutrasInfeccoesPut(response.data.content[0].focoInfeccioso.outrasInfeccoes)

        setapresentaCriterioExclusaoPut(response.data.content[0].criterioExclusao.apresentaCriterioExclusao)
        setfimDeVidaPut(response.data.content[0].criterioExclusao.fimDeVida)
        setdoencaAtipicaPut(response.data.content[0].criterioExclusao.doencaAtipica)
        setprobabilidadeSepseBaixaPut(response.data.content[0].criterioExclusao.probabilidadeSepseBaixa)

        setiniciadoPut(response.data.content[0].bundleHora1.iniciado)
        setdtDisparoPut(response.data.content[0].bundleHora1.dtDisparo)
        setlactoDtColetaPut(response.data.content[0].bundleHora1.lactoDtColeta)
        sethemoculturaDtColetaPut(response.data.content[0].bundleHora1.hemoculturaDtColeta)
        setantibioticoAmploAspectroPut(response.data.content[0].bundleHora1.antibioticoAmploAspectro)
        setcristaloidesPut(response.data.content[0].bundleHora1.cristaloides)
        setvasopressoresPut(response.data.content[0].bundleHora1.vasopressores)
        setbhJustificativaNaoPut(response.data.content[0].bundleHora1.justificativaNao)

        setqSofaPut(response.data.content[0].reavaliacoesSeriadas.qSofa)
        setpas100MmghgPut(response.data.content[0].reavaliacoesSeriadas.pas100Mmghg)
        setfr22RpmPut(response.data.content[0].reavaliacoesSeriadas.fr22Rpm)
        setrebaixamentoNivelConsienciaPut(response.data.content[0].reavaliacoesSeriadas.rebaixamentoNivelConsiencia)
        setlactoInicialmenteAltoPut(response.data.content[0].reavaliacoesSeriadas.lactoInicialmenteAlto)
        setoutrosPut(response.data.content[0].reavaliacoesSeriadas.outros)
        setrsJustificativaNaoPut(response.data.content[0].reavaliacoesSeriadas.justificativaNao)
        setaplicadaPut(response.data.content[0].reavaliacoesSeriadas.aplicada)

        modalDefaultShow()
      })
      .catch(function (error: any) {
        console.log(error)
      });
  }

  // EDITAR /api/v1/doctors/{crm}/forms/sepse/{idForm}
  // PUT - Salva o estado de um certo formulário no Sistema.
  // POST - Salva o estado de um certo formulário no Sistema.
  async function handlePut(event: any) {
    event.preventDefault();

    fetch(`https://prevsep.herokuapp.com/api/v1/doctors/${crm}/forms/sepse/${idFormulario}`, {
      method: `${PostPut}`,
      body: JSON.stringify({
        focoInfeccioso:{
          infeccaoUrinaria: infeccaoUrinaria,
          infeccaoAbdominal: infeccaoAbdominal,
          menigite: menigite,
          endocardite: endocardite,
          pelePartesMoles: pelePartesMoles,
          infeccaoProtese: infeccaoProtese,
          infeccaoOssea: infeccaoOssea,
          infeccaoFeridaOperatoria: infeccaoFeridaOperatoria,
          infeccaoSanguineaCateter: infeccaoSanguineaCateter,
          semFocoDefinido: semFocoDefinido,
          outrasInfeccoes: outrasInfeccoes
        },
        criterioExclusao:{
          apresentaCriterioExclusao: apresentaCriterioExclusao,
          fimDeVida: fimDeVida,
          doencaAtipica: doencaAtipica,
          probabilidadeSepseBaixa: probabilidadeSepseBaixa
        },
        bundleHora1:{
          iniciado: iniciado,
          dtDisparo: dtDisparo,
          lactoDtColeta: lactoDtColeta,
          hemoculturaDtColeta: hemoculturaDtColeta,
          antibioticoAmploAspectro: antibioticoAmploAspectro,
          cristaloides: cristaloides,
          vasopressores: vasopressores,
          justificativaNao: bhJustificativaNao
        },
        reavaliacoesSeriadas:{
          getqSofa: qSofa,
          pas100Mmghg: pas100Mmghg,
          fr22Rpm: fr22Rpm,
          rebaixamentoNivelConsiencia: rebaixamentoNivelConsiencia,
          lactoInicialmenteAlto: lactoInicialmenteAlto,
          outros: outros,
          justificativaNao: rsJustificativaNao,
          aplicada: aplicada
        }
        }),
      headers: {
        'accept': 'application/json',
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
    }).catch(function (error: any) {
      console.log(error);
    })
    .then(() => swal({
      title: "Editado com Sucesso!!!",
      icon: "success",
      buttons: [false],
      timer: 3000,
    }))

    modalDefaultClose()
  }

  return (
    <>
      <div className="div-header">
        <h2>Formulários Salvos</h2>
      </div>
      <div>
        <div className="div-content">
          <div className="m-2">
            <input className="btn button-purple m-3" onClick={() => formsPendingDoctors()} value="Pesquisar" />
            <br />
            <small className="m-3">({salvos.length}) Formulários</small>
          </div>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Ações</th>
                <th scope="col">Nº Formulário</th>
                <th scope="col">Paciente</th>
                <th scope="col">Data de Criação</th>
                <th scope="col">STATUS</th>
              </tr>
            </thead>
            <tbody>
              {salvos.map(salvo => {
                return (
                  <tr key={salvo.idFormulario}>
                    <td><a onClick={() => handlePutId(salvo.idFormulario)} className="ml-3 w-100 text-primary" href="javascript:void(0);" title="Editar"><i className="icon far fa-edit fa-1x"></i></a></td>
                    <td>{salvo.idFormulario}</td>
                    <td>{salvo.paciente.nome}</td>
                    <td>{salvo.dtCriacao}</td>
                    <td>{salvo.status}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
      <Modal id="modal" show={modalDefault} onHide={modalDefaultClose} size="xl">
        <Modal.Header>
          <h2>Editar Formulário</h2>
        </Modal.Header>
        <Modal.Body style={{background: '#fafdff'}}>
          <div className="row">
            <div className="col-md-10 offset-1">
              <form onSubmit={handlePut}>
                <div className="container" style={{ marginTop: '20px' }}>
                  <div className="row">
                    <div className="col-12 m-2">
                      <h4>Paciente</h4>
                      <div className="form-row" style={{ margin: '-10px 0 -10px 0' }}>
                        <label htmlFor="idNomeCompleto" className="font-weight-bold col-form-label">Nome completo: </label>
                        <span>
                          <input type="text" className="form-control-plaintext" id="idNomeCompleto" defaultValue={nome} readOnly />
                        </span>
                      </div>
                      <div className="form-row pl-1" style={{ margin: '-10px 0 -10px 0' }}>
                        <div className="form-row">
                          <label htmlFor="idIdade" className="font-weight-bold col-form-label">Idade: </label>
                          <span>
                            <input type="number" className="form-control-plaintext" id="idIdade" defaultValue={idade} readOnly />
                          </span>
                        </div>
                        <div className="form-row">
                          <label htmlFor="idSexo" className="font-weight-bold col-form-label">Sexo: </label>
                          <span>
                            <input type="text" className="form-control-plaintext" id="idSexo" defaultValue={sexo} readOnly />
                          </span>
                        </div>
                      </div>
                      <div className="form-row pl-1" style={{ margin: '-10px 0 -10px 0' }}>
                        <div className="form-row">
                          <label htmlFor="idLeitor" className="font-weight-bold col-form-label">Leito: </label>
                          <span>
                            <input type="number" className="form-control-plaintext" id="idLeitor" defaultValue={leito} readOnly />
                          </span>
                        </div>
                        <div className="form-row">
                          <label htmlFor="idNatendimento" className="font-weight-bold col-form-label">Nº Atendimento: </label>
                          <span>
                            <input type="mumber" className="form-control-plaintext" id="idNatendimento" defaultValue={nrAtendimento} readOnly />
                          </span>
                        </div>
                      </div>
                      <div className="form-row" style={{ margin: '-10px 0 -10px 0' }}>
                        <label htmlFor="idRegistro" className="font-weight-bold col-form-label">Registro: </label>
                        <span>
                          <input type="number" className="form-control-plaintext" id="idRegistro" defaultValue={registro} readOnly />
                        </span>
                      </div>

                      <div className="my-2">1) Foco infeccioso</div>
                      <div className="form-row">
                        <div className="form-check col-md-5 ml-4">
                          <input className="form-check-input" type="checkbox" defaultChecked={infeccaoUrinaria} onChange={() => booleaninfeccaoUrinaria()} id="idClinicaMedicazzz2" />
                          <label className="form-check-label" htmlFor="idClinicaMedicazzz2">Infecção urinária.</label>
                        </div>
                        <div className="form-check col-md-5 ml-4">
                          <input className="form-check-input" type="checkbox" defaultChecked={infeccaoOssea} onChange={() => booleaninfeccaoOssea()} id="idClinicaCirurgica1" />
                          <label className="form-check-label" htmlFor="idClinicaCirurgica1">Infecção óssea/articular.</label>
                        </div>
                        <div className="form-check col-md-5 ml-4">
                          <input className="form-check-input" type="checkbox" defaultChecked={infeccaoAbdominal} onChange={() => booleaninfeccaoAbdominal()} id="idClinicaMedica2" />
                          <label className="form-check-label" htmlFor="idClinicaMedica2">Infecção abdominal aguda.</label>
                        </div>
                        <div className="form-check col-md-5 ml-4">
                          <input className="form-check-input" type="checkbox" defaultChecked={infeccaoFeridaOperatoria} onChange={() => booleaninfeccaoFeridaOperatoria()} id="idClinicaCirurgica2" />
                          <label className="form-check-label" htmlFor="idClinicaCirurgica2">Infecção de ferida operatória</label>
                        </div>
                        <div className="form-check col-md-5 ml-4">
                          <input className="form-check-input" type="checkbox" defaultChecked={menigite} onChange={() => booleanmenigite()} id="idPediatria" />
                          <label className="form-check-label" htmlFor="idPediatria">Meningite</label>
                        </div>
                        <div className="form-check col-md-5 ml-4">
                          <input className="form-check-input" type="checkbox" defaultChecked={infeccaoSanguineaCateter} onChange={() => booleaninfeccaoSanguineaCateter()} id="idOncologia" />
                          <label className="form-check-label" htmlFor="idOncologia">Infecção de corrente sanguínea associada ao cateter.</label>
                        </div>
                        <div className="form-check col-md-5 ml-4">
                          <input className="form-check-input" type="checkbox" defaultChecked={endocardite} onChange={() => booleanendocardite()} id="idUtiaaa" />
                          <label className="form-check-label" htmlFor="idUtiaaa">Endocardite.</label>
                        </div>
                        <div className="form-check col-md-5 ml-4">
                          <input className="form-check-input" type="checkbox" defaultChecked={semFocoDefinido} onChange={() => booleansemFocoDefinido()} id="idAmbulatóriox" />
                          <label className="form-check-label" htmlFor="idAmbulatóriox">Sem foco definido.</label>
                        </div>
                        <div className="form-check col-md-5 ml-4">
                          <input className="form-check-input" type="checkbox" defaultChecked={pelePartesMoles} onChange={() => booleanpelePartesMoles()} id="idUti" />
                          <label className="form-check-label" htmlFor="idUti">Pele e partes moles.</label>
                        </div>
                        <div className="form-check col-md-5 ml-4">
                          <input className="form-check-input" type="checkbox" placeholder={outrasInfeccoes} onChange={e => setoutrasInfeccoesPut(e.target.value)} id="idAmbulatório" />
                          <label className="form-check-label" htmlFor="idAmbulatório">Outras infecções.</label>
                        </div>
                      </div>

                      <div className="my-2">2) Critérios de exclusão para seguir no protocolo</div>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultChecked={apresentaCriterioExclusao} onChange={() => booleanapresentaCriterioExclusao()} id="idEF110" />
                        <label className="form-check-label" htmlFor="idEF110">
                          Apresenta critério de Exclusão.
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultChecked={fimDeVida} onChange={() => booleanfimDeVida()} id="idEF111" />
                        <label className="form-check-label" htmlFor="idEF111">
                          Paciente em cuidados de fim de vida.
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultChecked={doencaAtipica} onChange={() => booleandoencaAtipica()} id="idEF112" />
                        <label className="form-check-label" htmlFor="idEF112">
                          Quadro sugestivo de doenças atípicas (dengue, malária, leptospirose).
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultChecked={probabilidadeSepseBaixa} onChange={() => booleanprobabilidadeSepseBaixa()} id="idEF113" />
                        <label className="form-check-label" htmlFor="idEF113">
                          Quadro clínico pouco sugestivo de sepse (IVAS, amigdalite).
                        </label>
                      </div>

                      <div className="form-row">
                        <div className="form-check col-md-12 my-2">3) Iniciado bundle da HORA-T?</div>
                        <div className="form-check col-md-8">
                          <label htmlFor="idDtDisparo"><span className="font-weight-bold">Data e hora do disparo do protocolo: </span></label>
                          <input type="datetime-local" className="form-control" id="idDtDisparo" placeholder={dtDisparo} onChange={e => setdtDisparoPut(e.target.value)} />
                        </div>
                        <div className="form-check col-12 w-100">
                          <span className="form-row d-inline-block px-2" style={{ width: '80%' }}>
                            <label htmlFor="idJustificativa">Justificativa: </label>
                            <span className="px-2 d-inline-block" style={{ width: '80%' }}>
                              <input type="text" className="form-control form-control-sm" id="idJustificativa" placeholder={bhJustificativaNao} onChange={e => setbhJustificativaNaoPut(e.target.value)} />
                            </span>
                          </span>
                        </div>
                        <div className="form-check col-md-5">
                          <label className="form-check-label" htmlFor="idX">Media lactato (kit sepse).</label>
                        </div>
                        <div className="form-check col-md-5">
                          <label htmlFor="idlactoDtColeta"><span className="font-weight-bold">Data e hora da coleta: </span></label>
                          <input type="datetime-local" className="form-control" id="idlactoDtColeta" placeholder={lactoDtColeta} onChange={e => setlactoDtColetaPut(e.target.value)} />
                        </div>
                        <div className="form-check col-md-5">
                          <label className="form-check-label" htmlFor="idX1">Obter hemoculturas (kit sepse).</label>
                        </div>
                        <div className="form-check col-md-5">
                          <label htmlFor="idhemoculturaDtColeta"><span className="font-weight-bold">Data e hora da coleta: </span></label>
                          <input type="datetime-local" className="form-control" id="idhemoculturaDtColeta" placeholder={hemoculturaDtColeta} onChange={e => sethemoculturaDtColetaPut(e.target.value)} />
                        </div>
                        <div className="form-check col-md-5">
                          <label className="form-check-label" htmlFor="idX">Administrar antibióticos de amplo espectro.</label>
                        </div>
                        <div className="form-check col-md-5">
                          <label htmlFor="idantibioticoAmploAspectro"><span className="font-weight-bold">Data e hora da coleta: </span></label>
                          <input type="datetime-local" className="form-control" id="idantibioticoAmploAspectro" placeholder={antibioticoAmploAspectro} onChange={e => setantibioticoAmploAspectroPut(e.target.value)} />
                        </div>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultChecked={cristaloides} onChange={() => booleancristaloides()} id="idEF11" />
                        <label className="form-check-label" htmlFor="idEF11">
                          Iniciar administração de cristaloides (30ml/kg) se hipotensão ou lactato {'>'} 4mmol/L.
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultChecked={vasopressores} onChange={() => booleanvasopressores()} id="idEF115" />
                        <label className="form-check-label" htmlFor="idEF115">
                          Instalar vasopressores se hipotensão durante ou após ressuscitação hídrica (manter PAM {'>'} 65mmHg).
                        </label>
                      </div>

                      <div className="my-2">4) Reavaliações seriadas nas primeiras 6 horas do protocolo?</div>
                      <div className="form-row">
                        <div className="form-check col-12 w-100">
                          <span className="form-row d-inline-block px-2" style={{ width: '80%' }}>
                            <label htmlFor="idJustificativa">Justificativa: </label>
                            <span className="px-2 d-inline-block" style={{ width: '80%' }}>
                              <input type="text" className="form-control form-control-sm" id="idJustificativaX" placeholder={rsJustificativaNao} onChange={e => setrsJustificativaNaoPut(e.target.value)} />
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-check col-12 w-100">
                          <span className="d-inline-block px-4">
                            <input className="form-check-input" type="checkbox" defaultChecked={qSofa} onChange={() => booleanqSofa()} id="idEF11ASD" />
                            <label className="form-check-label" htmlFor="idEF11ASD">
                              qSOFA &ge; 2.
                            </label>
                          </span>
                          <span className="d-inline-block px-4">
                            <input className="form-check-input" type="checkbox" defaultChecked={pas100Mmghg} onChange={() => booleanpas100Mmghg()} id="idEF11AFSDF" />
                            <label className="form-check-label" htmlFor="idEF11AFSDF">
                              PAS {'<'} 100mmHg.
                            </label>
                          </span>
                          <span className="d-inline-block px-4">
                            <input className="form-check-input" type="checkbox" defaultChecked={fr22Rpm} onChange={() => booleanfr22Rpm()} id="idEF11ADSALFKJDS" />
                            <label className="form-check-label" htmlFor="idEF11ADSALFKJDS">
                              FR {'>'} 22rpm.
                            </label>
                          </span>
                          <span className="d-inline-block px-4">
                            <input className="form-check-input" type="checkbox" defaultChecked={rebaixamentoNivelConsiencia} onChange={() => booleanrebaixamentoNivelConsiencia()} id="idEF11ASDFKJKKJ" />
                            <label className="form-check-label" htmlFor="idEF11ASDFKJKKJ">
                              Rebaixamento de nível de consciência.
                            </label>
                          </span>
                        </div>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultChecked={lactoInicialmenteAlto} onChange={() => booleanlactoInicialmenteAlto()} id="idEF11ASDFDF" />
                        <label className="form-check-label" htmlFor="idEF11ASDFDF">
                          Lactato inicialmente alto ({'>'}2mmol/L) e redosado 2h a 4h so início da fluidoterapia.
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultChecked={vasopressores} onChange={() => booleanvasopressores()} id="idEF12LFKOIRRN" />
                        <label className="form-check-label" htmlFor="idEF12LFKOIRRN">
                          Leucocitose {'>'} 12.000, leucopenia {'<'} 4.000 ou desvio esquerdo {'>'} 10% bastões.
                        </label>
                      </div>
                      <div className="form-check">
                        <label htmlFor="idJustificativa">Outros: </label>
                        <span className="px-2 d-inline-block">
                          <input type="text" className="form-control form-control-sm" id="idJustificativaZZ" placeholder={outros} onChange={e => setoutrosPut(e.target.value)} />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <h4>Você quer</h4>
                    <div className="d-flex justify-content-start">
                      <div className="row">
                        <div className="form-check ml-4">
                          <input className="form-check-input" type="radio" name="radioVQ" onChange={() => (setstatusPut('SAVED'), setPostPut('PUT'))} id="idSalvarSair" required />
                          <label className="form-check-label" htmlFor="idSalvarSair">Salvar e Sair</label>
                        </div>
                        <div className="form-check ml-4">
                          <input className="form-check-input" type="radio" name="radioVQ" onChange={() => (setstatusPut('FINISHED'), setPostPut('POST'))} id="idSalvarEnviar" required />
                          <label className="form-check-label" htmlFor="idSalvarEnviar">Salvar e Enviar</label>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-start mt-3">
                      <div>
                        <small className="ml-2"><span style={{ color: 'red' }}>*</span> Campos Obrigatórios</small>
                        <br />
                        <input className="btn button-purple m-2" type="submit" value="Editar" />
                        <input className="btn button-purple bg-danger m-2" onClick={modalDefaultClose} value="Sair" />
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