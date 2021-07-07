import { useState, useEffect } from 'react'
import CriarUsuario from './CriarUsuario'
import HistoricoDeLogin from './HistoricoDeLogin'

import Logo from './../../content/img/prevsep.png'
import IconeEmAberto from './../../content/img/em_aberto_branco.png'
// import IconeSalvos from './../../content/img/salvos_branco.png'
// import IconeEnviados from './../../content/img/enviados_branco.png'
// import IconeAutorizados from './../../content/img/autorizados_branco.png'
import IconeCriarUsuario from './../../content/img/autorizar_login_branco.png'
import IconeDados from './../../content/img/dados_branco.png'
import FormulariosAbertos from './FormulariosAbertos'
import VisualizarDados from './VisualizarDados'

var axios = require('axios')
var qs = require('qs')

export default function Gestor() {

    let [cpf, setCpf] = useState('')
    let [nome, setNome] = useState('')
    let [email, setEmail] = useState('')

    function Sair() {
        localStorage.removeItem("@PermissionPS:role");
        localStorage.removeItem("@PermissionPS:token");
        sessionStorage.removeItem("@PermissionPS:username");
        document.location.href = document.location.href + ''
    }

    // GET: /api/v1/managers/{cpf} - Returns info about a manager by a given CPF.
    useEffect(() => {
        const token = localStorage.getItem('@PermissionPS:token');
        const cpf = sessionStorage.getItem('@PermissionPS:username');

        var data = qs.stringify({
            'grant_type': 'client_credentials'
        });

        var config = {
            method: 'get',
            url: `https://prevsep.herokuapp.com/api/v1/managers/${cpf}`,
            headers: {
                'accept': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            data: data
        };

        axios(config)
            .then(function (response: any) {
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
                <div className="logo"><a href="./gestor"><img src={Logo} alt="Logo HU"></img></a></div>
                <div className="list-group list-group-flush sidebarPage-top">
                    <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <a className="nav-link active" id="formulariosAbertos-tab" data-toggle="pill" href="#formulariosAbertos" role="tab" aria-controls="formulariosAbertos" aria-selected="true"><img src={IconeEmAberto} alt="Icone Criar Formulário" className="icone"></img>Formulários Abertos</a>
                        <a className="nav-link" id="criarUsuario-tab" data-toggle="pill" href="#criarUsuario" role="tab" aria-controls="criarUsuario" aria-selected="false"><img src={IconeCriarUsuario} alt="Icone Criar Formulário" className="icone"></img>Criar Usuário</a>
                        <a className="nav-link" id="visualizarDados-tab" data-toggle="pill" href="#visualizarDados" role="tab" aria-controls="visualizarDados" aria-selected="false"><img src={IconeDados} alt="Icone Criar Formulário" className="icone"></img>Visualizar Dados</a>
                        <a className="nav-link" id="historicoLogin-tab" data-toggle="pill" href="#historicoLogin" role="tab" aria-controls="historicoLogin" aria-selected="false"><img src={IconeEmAberto} alt="Icone Criar Formulário" className="icone"></img>Histórico de Login</a>
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
                        <div className="tab-pane fade" id="criarUsuario" role="tabpanel" aria-labelledby="criarUsuario-tab"><CriarUsuario /></div>
                        <div className="tab-pane fade" id="visualizarDados" role="tabpanel" aria-labelledby="visualizarDados-tab"><VisualizarDados /></div>
                        <div className="tab-pane fade" id="historicoLogin" role="tabpanel" aria-labelledby="historicoLogin-tab"><HistoricoDeLogin /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}