import { useState, useEffect } from 'react'
import FormulariosAbertos from './FormulariosAbertos'
import FormulariosSalvos from './FormulariosSalvos'
import FormulariosEnviados from './FormulariosEnviados'
import PreencherFormulario from './PreencherFormulario'

import Logo from './../../content/img/prevsep.png'
import IconeEmAberto from './../../content/img/em_aberto_branco.png'
import IconeSalvos from './../../content/img/salvos_branco.png'
import IconeEnviados from './../../content/img/enviados_branco.png'
import IconeAutorizados from './../../content/img/autorizados_branco.png'
import IconeAutorizarLogin from './../../content/img/autorizar_login_branco.png'
import IconeDados from './../../content/img/dados_branco.png'

var axios = require('axios')
var qs = require('qs')

export default function Medico() {

    let [crm, setCrm] = useState('')
    let [cpf, setCpf] = useState('')
    let [nome, setNome] = useState('')
    let [email, setEmail] = useState('')
    
    function Sair() {
        localStorage.removeItem("@PermissionPS:role");
        localStorage.removeItem("@PermissionPS:token");
        sessionStorage.removeItem("@PermissionPS:username");
        document.location.href = document.location.href + ''
    }

    // GET: /api/v1/doctors/{cpf} - Returns info about a doctor by a given CPF.
    useEffect(() => {
        const token = localStorage.getItem('@PermissionPS:token');
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
                setCpf(response.data.userInfo.cpf)
                setNome(response.data.userInfo.nome)
                setEmail(response.data.userInfo.email)
            })
            .catch(function (error: any) {
                console.log(error);
            });
    }, [])
    
    return(
    <div className="d-flex" id="wrapper">
        {/* Sidebar */}
        <div className="border-end blue-sidebar" id="sidebar-wrapper">
            <div className="logo"><a href="./medico"><img src={Logo} alt="Logo HU"></img></a></div>
            <div className="list-group list-group-flush sidebarPage-top">
            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <a className="nav-link active" id="formulariosAbertos-tab" data-toggle="pill" href="#formulariosAbertos" role="tab" aria-controls="formulariosAbertos" aria-selected="true"><img src={IconeEmAberto} alt="Icone Criar Formulário" className="icone"></img>Formulários Abertos</a>
                <a className="nav-link" id="formulariosEnviados-tab" data-toggle="pill" href="#formulariosEnviados" role="tab" aria-controls="formulariosEnviados" aria-selected="true"><img src={IconeEmAberto} alt="Icone Criar Formulário" className="icone"></img>Formulários Enviados</a>
                <a className="nav-link" id="preencherFormulario-tab" data-toggle="pill" href="#preencherFormulario" role="tab" aria-controls="preencherFormulario" aria-selected="false"><img src={IconeEmAberto} alt="Icone Criar Formulário" className="icone"></img>Preencher Formulário</a>
                <a className="nav-link" id="formulariosSalvos-tab" data-toggle="pill" href="#formulariosSalvos" role="tab" aria-controls="formulariosSalvos" aria-selected="true"><img src={IconeEmAberto} alt="Icone Criar Formulário" className="icone"></img>Formulários Salvos</a>
                <a className="nav-link" id="visualizarFormulario-tab" data-toggle="pill" href="#visualizarFormulario" role="tab" aria-controls="visualizarFormulario" aria-selected="false"><img src={IconeDados} alt="Icone Criar Formulário" className="icone"></img>Visualizar Formulário</a>
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
                            <a className="dropdown-item" href=""><strong>CRM:</strong> {crm}</a>
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
                    <div className="tab-pane fade show active" id="formulariosAbertos" role="tabpanel" aria-labelledby="formulariosAbertos-tab"><FormulariosAbertos /></div>
                    <div className="tab-pane fade" id="formulariosEnviados" role="tabpanel" aria-labelledby="formulariosEnviados-tab"><FormulariosEnviados /></div>
                    <div className="tab-pane fade" id="preencherFormulario" role="tabpanel" aria-labelledby="preencherFormulario-tab"><PreencherFormulario /></div>
                    <div className="tab-pane fade" id="formulariosSalvos" role="tabpanel" aria-labelledby="formulariosSalvos-tab"><FormulariosSalvos /></div>
                    <div className="tab-pane fade" id="visualizarFormulario" role="tabpanel" aria-labelledby="visualizarFormulario-tab">Visualizar Formulário</div>
                </div>
            </div>
        </div>
    </div>
    )
}