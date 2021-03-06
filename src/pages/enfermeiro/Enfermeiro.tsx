import { useState, useEffect } from 'react'
import CriarFormulario from './CriarFormulario'
import FormulariosSalvos from './FormulariosSalvos'
import FormulariosPendentes from './FormulariosPendentes'
import FormulariosProcessamento from './FormulariosProcessamento'
import FormulariosFinalizados from './FormulariosFinalizados' //Finalizados


import Logo from './../../content/img/prevsep.png'
import IconeEmAberto from './../../content/img/em_aberto_branco.png'
import IconeSalvos from './../../content/img/salvos_branco.png'
import IconeEnviados from './../../content/img/enviados_branco.png'
import IconeCriar from './../../content/img/criar_branco.png'
import IconeAutorizados from './../../content/img/autorizados_branco.png'
// import IconeAutorizarLogin from './../../content/img/autorizar_login_branco.png'
// import IconeDados from './../../content/img/dados_branco.png'

var axios = require('axios')
var qs = require('qs')

export default function Enfermeiro() {

  let [cre, setCre] = useState('')
  let [cpf, setCpf] = useState('')
  let [nome, setNome] = useState('')
  let [email, setEmail] = useState('')

  function Sair() {
    localStorage.removeItem("@PermissionPS:role");
    localStorage.removeItem("@PermissionPS:token");
    sessionStorage.removeItem("@PermissionPS:username");
    document.location.href = document.location.href + ''
  }

  // GET: /api/v1/nurses/{cpf} - Returns info about a Nurse by a given CPF.
  useEffect(() => {
    const token = localStorage.getItem('@PermissionPS:token');
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
        setCpf(response.data.userInfo.cpf)
        setNome(response.data.userInfo.nome)
        setEmail(response.data.userInfo.email)
      })
      .catch(function (error: any) {
        console.log(error);
      });
  }, [])

  return (
    <div className="d-flex" id="wrapper">
      {/* Sidebar */}
      <div className="border-end blue-sidebar" id="sidebar-wrapper">
        <div className="logo"><a href="./enfermeiro"><img src={Logo} alt="Logo HU"></img></a></div>
        <div className="list-group list-group-flush sidebarPage-top">
          <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <a className="nav-link" id="criarFormulario-tab"          data-toggle="pill" href="#criarFormulario"          role="tab" aria-controls="criarFormulario"          aria-selected="false"><img src={IconeCriar} alt="Icone Criar Formul??rio" className="icone"></img>Criar Formul??rio</a>
            <a className="nav-link" id="formulariosSalvos-tab"        data-toggle="pill" href="#formulariosSalvos"        role="tab" aria-controls="formulariosSalvos"        aria-selected="false"><img src={IconeSalvos} alt="Icone Formul??rios Salvos" className="icone"></img>Forms Salvos</a>
            <a className="nav-link" id="formulariosProcessamento-tab" data-toggle="pill" href="#formulariosProcessamento" role="tab" aria-controls="formulariosProcessamento" aria-selected="false"><img src={IconeEmAberto} alt="Icone Formul??rios Abertos" className="icone"></img>Forms em Processamento</a>
            <a className="nav-link" id="formulariosPendentes-tab"     data-toggle="pill" href="#formulariosPendentes"     role="tab" aria-controls="formulariosPendentes"     aria-selected="false"><img src={IconeAutorizados} alt="Icone Formul??rios para Autoriza????o" className="icone"></img>Forms Pendentes</a>
            <a className="nav-link" id="formulariosFinalizados-tab"      data-toggle="pill" href="#formulariosFinalizados"      role="tab" aria-controls="formulariosFinalizados"      aria-selected="false"><img src={IconeEnviados} alt="Icone Formul??rios Enviados" className="icone"></img>Formul??rios Finalizados</a>
          </div>
        </div>
      </div>
      {/* Page content wrapper */}
      <div id="page-content-wrapper">
        {/* Top navigation */}
        <nav className="navbar navbar-expand-lg navbar-light top-navigation">
          <div className="container-fluid">
            <button className="btn navbar-toggler" id="sidebarToggle"><span className="navbar-toggler-icon"></span></button>
            <div id="info" className="dropdown dropleft">
              <button className="btn btn-secondary dropdown-toggle info" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                INFO
              </button>
              <div className="dropdown-menu dropdown-menu-left" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href=""><strong>CRE:</strong> {cre}</a>
                <a className="dropdown-item" href=""><strong>CPF:</strong> {cpf}</a>
                <a className="dropdown-item" href=""><strong>NOME:</strong> {nome}</a>
                <a className="dropdown-item" href=""><strong>EMAIL:</strong> {email}</a>
                <a id="sair" className="dropdown-item" href="" onClick={() => Sair()} >Sair</a>
              </div>
            </div>
          </div>
        </nav>
        {/* Page content */}
        <div className="container-fluid sidebarPage-top">
          <div className="tab-content page-content" id="v-pills-tabContent">
            <div className="tab-pane fade" id="criarFormulario" role="tabpanel" aria-labelledby="criarFormulario-tab"><CriarFormulario /></div>
            <div className="tab-pane fade" id="formulariosSalvos" role="tabpanel" aria-labelledby="formulariosSalvos-tab"><FormulariosSalvos /></div>
            <div className="tab-pane fade" id="formulariosProcessamento" role="tabpanel" aria-labelledby="formulariosProcessamento-tab"><FormulariosProcessamento /></div>
            <div className="tab-pane fade show active" id="formulariosPendentes" role="tabpanel" aria-labelledby="formulariosPendentes-tab"><FormulariosPendentes /></div>
            <div className="tab-pane fade" id="formulariosFinalizados" role="tabpanel" aria-labelledby="formulariosFinalizados-tab"><FormulariosFinalizados /></div>
          </div>
        </div>
      </div>
    </div>
  )
}