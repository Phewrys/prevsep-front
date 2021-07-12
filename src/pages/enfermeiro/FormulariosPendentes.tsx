import { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap'
import swal from 'sweetalert'
var axios = require('axios')
var qs = require('qs')

interface JSONPendentes {
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
  creEnfermeiro: number,
  dtUti: string,
  dtAlta: string,
  dtObito: string,
  dtCriacao: string,
  status: string
}

export default function FormulariosPendentes() {
  const token = localStorage.getItem('@PermissionPS:token');

  const [modalDefault, setModalDefaultShow] = useState(false)
  const modalDefaultClose = () => {
    setModalDefaultShow(false);
  }
  const modalDefaultShow = () => setModalDefaultShow(true)

  let [idFormulario, setidFormularioPut] = useState(0)

  let [dtUti, setDtUti] = useState(Date)
  let [altaObito, setAltaObito] = useState('')
  let [dtAltaObito, setDtAltaObito] = useState(Date)

  let [pendentes, setPendentes] = useState<JSONPendentes[]>([])

  let [cpf, setCpf] = useState('')
  let [cre, setCre] = useState('')

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

  // POST: Finish form2
  async function handlePost(event: any) {
    event.preventDefault();

    console.log('Aqui')
    console.log(dtUti)
    console.log(dtAltaObito)

    let body = JSON.stringify({
      'dtUti': dtUti,
      'dtAlta': dtAltaObito
    })
    if (altaObito === 'OBITO')
      body = JSON.stringify({
        'dtUti': dtUti,
        'dtObito': dtAltaObito
      })
    fetch(`https://prevsep.herokuapp.com/api/v1/nurses/${cre}/forms/sepse/${idFormulario}/form2`, {
      method: 'POST',
      body: body,
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
      timer: 2000,
    }))
    modalDefaultClose()
  }

  // GET: Get PENDING forms
  function formsPendentes() {

    var data = qs.stringify({
      'grant_type': 'client_credentials'
    });

    var config = {
      method: 'get',
      url: `https://prevsep.herokuapp.com/api/v1/nurses/${cre}/forms/sepse/pending`,
      headers: {
        'accept': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      data: data
    };

    axios(config)
      .then(function (response: any) {
        setPendentes(response.data.content)
      })
      .catch(function (error: any) {
        console.log(error)
      });
  }

  return (
    <>
      <div className="div-header">
        <h2>Formulários Pendentes</h2>
      </div>
      <div>
        <div className="div-content">
          <div className="m-2">
            <input className="btn button-purple m-3" onClick={() => formsPendentes()} value="Pesquisar" />
            <br />
            <small className="m-3">({pendentes.length}) Formulários</small>
          </div>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Ações</th>
                <th scope="col">Nº Formulário</th>
                <th scope="col">Nome do Paciente</th>
                <th scope="col">Data de Criação</th>
              </tr>
            </thead>
            <tbody>
              {pendentes.map(pendente => {
                return (
                  <tr key={pendente.idFormulario}>
                    <td><a onClick={() => { setidFormularioPut(pendente.idFormulario); modalDefaultShow(); }} className="ml-3 w-100 text-primary" href="javascript:void(0);" title="Editar"><i className="icon far fa-edit fa-1x"></i></a></td>
                    <td>{pendente.idFormulario}</td>
                    <td>{pendente.paciente.nome}</td>
                    <td>{pendente.dtCriacao}</td>
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
        <Modal.Body style={{ background: '#fafdff' }}>
          <div className="row">
            <div className="col-md-10 offset-1">
              <form onSubmit={handlePost}>
                <div className="container" style={{ marginTop: '20px' }}>

                  <div className="m-3 ml-1">
                    <label htmlFor="idDtUti"><strong>Data de entrada na UTI</strong></label>
                    <input type="datetime-local" className="form-control" id="idDtUti" onChange={event => setDtUti(event.target.value)}/>
                  </div>
                  <div className="form-check ml-4">
                    <input className="form-check-input" type="radio" name="radioVQ" onChange={() => (setAltaObito('ALTA'))} id="idAlta" required/>
                    <label className="form-check-label" htmlFor="idAlta">Alta</label>
                  </div>
                  <div className="form-check ml-4">
                    <input className="form-check-input" type="radio" name="radioVQ" onChange={() => (setAltaObito('OBITO'))} id="idObito" required/>
                    <label className="form-check-label" htmlFor="idObito">Óbito</label>
                  </div>
                  <div className="m-3 ml-1">
                    <label htmlFor="idDtAltaObito"><strong>Data*</strong></label>
                    <input type="datetime-local" className="form-control" id="idDtAltaObito" onChange={event => setDtAltaObito(event.target.value)} required />
                  </div>

                  <div className="row mt-3">
                    <div className="d-flex justify-content-start mt-3">
                      <div>
                        <small className="ml-2"><span style={{ color: 'red' }}>*</span> Campos Obrigatórios</small>
                        <br />
                        <input className="btn button-purple m-2" type="submit" value="Enviar" />
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