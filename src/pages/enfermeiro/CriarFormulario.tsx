import { useState, useEffect } from 'react'
import Moment from 'moment'
import swal from 'sweetalert'
var axios = require('axios')
var qs = require('qs')

interface JSONDoctors {
  cpf: string
  nome: string
  crm: string
  statusUsuario: string

}

const token = localStorage.getItem('@PermissionPS:token');

export default function CriarFormulario() {
  let [nome, setNome] = useState('')
  let [idade, setIdade] = useState('')
  let [cpf, setCpf] = useState('')
  let [sexo, setSexo] = useState('')
  let [leito, setLeito] = useState('')
  let [nAtm, setNatm] = useState('')
  let [registro, SetRegistro] = useState('')
  let [procedencia, setProcedencia] = useState('')
  let [crm, setCrm] = useState('')
  let [doctors, setDoctors] = useState<JSONDoctors[]>([])
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

  let [snlcConfAgtComa, setSnlcConfAgtComa] = useState(false)
  let boleanSnlcConfAgtComa = () => {
    if (snlcConfAgtComa) {
      setSnlcConfAgtComa(false)
    } else {
      setSnlcConfAgtComa(true)
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

  let [finalizado, setFinalizado] = useState(false)

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

  // POST: /api/v1/nurses/{cre}/forms/sepse - Creates a Sepse form.
  async function handlePost(event: any) {
    event.preventDefault();

    fetch(`https://prevsep.herokuapp.com/api/v1/nurses/${cre}/forms/sepse`, {
      method: 'POST',
      body: JSON.stringify({
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
          snlcConfAgtcComa: snlcConfAgtComa,
          saturacaoDispneia: saturacaoDispneia
        },
        dtAcMedico: "",
        dtCriacao: Moment(new Date()).format('YYYY-MM-DD'),
        finalizado: finalizado
      }),
      headers: {
      'accept': 'application/json',
        'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
    },
  }).catch(function (error: any) {
    console.log(error);
  }).then(() => swal({
    title: "Cadastrado com Sucesso!!!",
    icon: "success",
    buttons: [false],
    timer: 3000,
}))
}

// console.log(Moment(new Date()).format('YYYY-MM-DD'))
// console.log(Moment(new Date(),"currentFormat").format("YYYY-MM-DD"))
// console.log( Moment(new Date(Date.now())).format('YYYY-MM-DD'))

return (
  <>
    <div className="div-header">
      <h2>Criar Formulário</h2>
      <button type="button" className="btn button-blue">Novo Formulário +</button>
      {/* <a className="btn btn-primary" href="#id" role="button">Página Interna</a> */}
    </div>
    <div>
      <form onSubmit={handlePost}>
        <div className="container" style={{ marginTop: '20px' }}>
          <div className="row">
            <div className="col-md-12 col-lg-5 m-2">
              <h4>Paciente</h4>
              <div className="form-group">
                <label htmlFor="idNomeCompleto">Nome completo*</label>
                <input type="text" className="form-control" id="idNomeCompleto" onChange={event => setNome(event.target.value)} required />
              </div>
              <div className="form-row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="idIdade">Idade*</label>
                  <input type="number" className="form-control" id="idIdade" onChange={event => setIdade(event.target.value)} required />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="idCpf">CPF*</label>
                  <input type="text" className="form-control" id="idCpf" onChange={event => setCpf(event.target.value)} required />
                </div>
              </div>
              <div className="form-row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="idSexo">Sexo*</label>
                  <select id="idSexo" className="form-control" onChange={event => setSexo(event.target.value)} >
                    <option value="DEFAULT" disabled selected>-- Selecionar --</option>
                    <option value={'Masculino'}>Masculino</option>
                    <option value={'Feminino'}>Feminino</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="idLeitor">Leito*</label>
                  <input type="text" className="form-control" id="idLeitor" onChange={event => setLeito(event.target.value)} required />
                </div>
              </div>
              <div className="form-row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="idNAtendimento">Nº Atendimento*</label>
                  <input type="text" className="form-control" id="idNAtendimento" onChange={event => setNatm(event.target.value)} required />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="idRegistro">Registro*</label>
                  <input type="text" className="form-control" id="idRegistro" onChange={event => SetRegistro(event.target.value)} required />
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-5 m-2">
              <h4>Equipe de Enfermagem</h4>
              <div className="my-2">1) Paciente apresenta dois ou mais sinais de SIRS.</div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" onChange={() => boleanFebreHipotemia()} id="idEF11" />
                <label className="form-check-label" htmlFor="idEF11">
                  Febre {'>'} 37,8ºC ou hipotermia {'<'} 35ºC.
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" onChange={() => boleanLeucocitoseLeucopenia()} id="idEF12" />
                <label className="form-check-label" htmlFor="idEF12">
                  Leucocitose {'>'} 12.000, leucopenia {'<'} 4.000 ou desvio esquerdo {'>'} 10% bastões.
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" onChange={() => boleanTaquicardia()} id="idEF13" />
                <label className="form-check-label" htmlFor="idEF13">
                  Taquicardia {'>'} 90bpm.
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" onChange={() => boleanTaquipneia()} id="idEF14" />
                <label className="form-check-label" htmlFor="idEF14">
                  Taquipneia {'>'} 20irpm.
                </label>
              </div>
              <div className="my-2">2) Paciente apresenta uma ou mais disfunção orgânica.</div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" onChange={() => boleanDiurese()} id="idEF21" />
                <label className="form-check-label" htmlFor="idEF21">
                  Diurese {'<'} 0,5ml/kg/hora.
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" onChange={() => boleanHipotensao()} id="idEF22" />
                <label className="form-check-label" htmlFor="idEF22">
                  Hipotensão (PAS &le; 90mmHg).
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" onChange={() => boleanSnlcConfAgtComa()} id="idEF23" />
                <label className="form-check-label" htmlFor="idEF23">
                  Sonolência, confusão, agitação ou coma.
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" onChange={() => boleanSaturacaoDispneia()} id="idEF24" />
                <label className="form-check-label" htmlFor="idEF24">
                  SatO<sub>2</sub> &le; 90%, necessidade de O<sub>2</sub> ou dispneia.
                </label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-lg-5 m-2">
              <h4>Procedência</h4>
              <div className="form-row">
                <div className="form-check col-md-5 ml-4">
                  <input className="form-check-input" type="radio" name="radio" value="CLINICA_MEDICA_1" onChange={event => setProcedencia(event.target.value)} id="idClinicaMedica1" />
                  <label className="form-check-label" htmlFor="idClinicaMedica1">Clínica Médica I</label>
                </div>
                <div className="form-check col-md-5 ml-4">
                  <input className="form-check-input" type="radio" name="radio" value="CLINICA_MEDICA_2" onChange={event => setProcedencia(event.target.value)} id="idClinicaMedica2" />
                  <label className="form-check-label" htmlFor="idClinicaMedica2">Clínica Médica II</label>
                </div>
                <div className="form-check col-md-5 ml-4">
                  <input className="form-check-input" type="radio" name="radio" value="CLINICA_CIRURGICA_1" onChange={event => setProcedencia(event.target.value)} id="idClinicaCirurgica1" />
                  <label className="form-check-label" htmlFor="idClinicaCirurgica1">Clínica Cirúrgica I</label>
                </div>
                <div className="form-check col-md-5 ml-4">
                  <input className="form-check-input" type="radio" name="radio" value="CLINICA_CIRURGICA_2" onChange={event => setProcedencia(event.target.value)} id="idClinicaCirurgica2" />
                  <label className="form-check-label" htmlFor="idClinicaCirurgica2">Clínica Cirúrgica II</label>
                </div>
                <div className="form-check col-md-5 ml-4">
                  <input className="form-check-input" type="radio" name="radio" value="PEDIATRIA" onChange={event => setProcedencia(event.target.value)} id="idPediatria" />
                  <label className="form-check-label" htmlFor="idPediatria">Pediatria</label>
                </div>
                <div className="form-check col-md-5 ml-4">
                  <input className="form-check-input" type="radio" name="radio" value="ONCOLOGIA" onChange={event => setProcedencia(event.target.value)} id="idOncologia" />
                  <label className="form-check-label" htmlFor="idOncologia">Oncologia</label>
                </div>
                <div className="form-check col-md-5 ml-4">
                  <input className="form-check-input" type="radio" name="radio" value="UTI" onChange={event => setProcedencia(event.target.value)} id="idUti" />
                  <label className="form-check-label" htmlFor="idUti">UTI</label>
                </div>
                <div className="form-check col-md-5 ml-4">
                  <input className="form-check-input" type="radio" name="radio" value="AMBULATORIO" onChange={event => setProcedencia(event.target.value)} id="idAmbulatório" />
                  <label className="form-check-label" htmlFor="idAmbulatório">Ambulatório</label>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-5 m-2">
              <h4>Acionamento da Equipe Médica</h4>
              <div className="form-group">
                <label htmlFor="idNomeMedicoChamado">Nome do médico chamado*</label>
                <select className="form-control" id="idNomeMedicoChamado" onChange={event => setCrm(event.target.value)} required>
                  <option value="DEFAULT" disabled selected>-- Selecionar --</option>
                  {doctors.map(doctor => {
                    return (
                      <option key={doctor.cpf} value={`${doctor.crm}`}>{doctor.nome}</option>
                    )
                  })}
                </select>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <h4>Você quer</h4>
            <div className="d-flex justify-content-start">
              <div className="row">
                <div className="form-check ml-4">
                  <input className="form-check-input" type="radio" name="radio" onChange={() => setFinalizado(false)} id="idSalvarSair" />
                  <label className="form-check-label" htmlFor="idSalvarSair">Salvar e Sair</label>
                </div>
                <div className="form-check ml-4">
                  <input className="form-check-input" type="radio" name="radio" onChange={() => setFinalizado(true)} id="idSalvarEnviar" />
                  <label className="form-check-label" htmlFor="idSalvarEnviar">Salvar e Enviar</label>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-start mt-3">
              <div>
                <small className="ml-2"><span style={{ color: 'red' }}>*</span> Campos Obrigatórios</small>
                <br />
                {/* <input className="btn button-purple m-2" type="submit" value="Salvar e Sair" onMouseEnter={() => finalizadoFalse} /> */}
                {/* <input className="btn button-purple m-2" type="submit" value="Salvar e Enviar" onMouseEnter={() => finalizadoTrue} /> */}
                <input className="btn button-purple m-2" type="submit" value="Criar" />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </>
)
}