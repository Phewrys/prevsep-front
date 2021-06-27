// import FormulariosAbertos from './FormulariosAbertos'
import FormulariosAutorizados from './FormulariosAutorizados'
import AutorizarLogin from './AutorizarLogin'
import HistoricoDeLogin from './HistoricoDeLogin'
import Request from './../../requests/Request'

import Logo from './../../content/img/uh-ufs.jpg'
import IconeEmAberto from './../../content/img/em_aberto_branco.png'
// import IconeSalvos from './../../content/img/salvos_branco.png'
// import IconeEnviados from './../../content/img/enviados_branco.png'
import IconeAutorizados from './../../content/img/autorizados_branco.png'
import IconeAutorizarLogin from './../../content/img/autorizar_login_branco.png'
import IconeDados from './../../content/img/dados_branco.png'
import FormulariosAbertos from '../enfermeiro/FormulariosAbertos'

export default function Gestor() {

    function Sair() {
        localStorage.removeItem("@PermissionPS:role");
        localStorage.removeItem("@PermissionPS:token");
        sessionStorage.removeItem("@PermissionPS:username");
        document.location.href = document.location.href + ''
    }

    return (
        <div className="d-flex" id="wrapper">
            {/* Sidebar */}
            <div className="border-end blue-sidebar" id="sidebar-wrapper">
                <div className="logo"><a href="./gestor"><img src={Logo} alt="Logo HU"></img></a></div>
                <div className="list-group list-group-flush sidebarPage-top">
                    <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <a className="nav-link active" id="formulariosAbertos-tab" data-toggle="pill" href="#formulariosAbertos" role="tab" aria-controls="formulariosAbertos" aria-selected="true"><img src={IconeEmAberto} alt="Icone Criar Formulário" className="icone"></img>Formulários Abertos</a>
                        <a className="nav-link" id="formulariosAutorizados-tab" data-toggle="pill" href="#formulariosAutorizados" role="tab" aria-controls="formulariosAutorizados" aria-selected="false"><img src={IconeAutorizados} alt="Icone Criar Formulário" className="icone"></img>Forms Autorizados</a>
                        <a className="nav-link" id="autorizarLogin-tab" data-toggle="pill" href="#autorizarLogin" role="tab" aria-controls="autorizarLogin" aria-selected="false"><img src={IconeAutorizarLogin} alt="Icone Criar Formulário" className="icone"></img>Autorizar Login</a>
                        <a className="nav-link" id="visualizarDados-tab" data-toggle="pill" href="#visualizarDados" role="tab" aria-controls="visualizarDados" aria-selected="false"><img src={IconeDados} alt="Icone Criar Formulário" className="icone"></img>Visualizar Dados</a>
                        <a className="nav-link" id="visualizacaoGrafica-tab" data-toggle="pill" href="#visualizacaoGrafica" role="tab" aria-controls="visualizacaoGrafica" aria-selected="false"><img src={IconeDados} alt="Icone Criar Formulário" className="icone"></img>Visualização Gráfica</a>
                        <a className="nav-link" id="historicoLogin-tab" data-toggle="pill" href="#historicoLogin" role="tab" aria-controls="historicoLogin" aria-selected="false"><img src={IconeEmAberto} alt="Icone Criar Formulário" className="icone"></img>Histórico de Login</a>
                        <a className="nav-link" id="visualizarFormularioEmAberto-tab" data-toggle="pill" href="#visualizarFormularioEmAberto" role="tab" aria-controls="visualizarFormularioEmAberto" aria-selected="false"><img src={IconeDados} alt="Icone Criar Formulário" className="icone"></img>V. Form em Aberto</a>
                        <a className="nav-link" id="visualizarFormularioAutorizado-tab" data-toggle="pill" href="#visualizarFormularioAutorizado" role="tab" aria-controls="visualizarFormularioAutorizado" aria-selected="false"><img src={IconeDados} alt="Icone Criar Formulário" className="icone"></img>V. Form Autorizado</a>
                    </div>
                </div>
            </div>
            {/* Page content wrapper */}
            <div id="page-content-wrapper">
                {/* Top navigation */}
                <nav className="navbar navbar-expand-lg navbar-light top-navigation">
                    <div className="container-fluid">
                        <button className="btn navbar-toggler" id="sidebarToggle"><span className="navbar-toggler-icon"></span></button>
                        <div>
                            <button id="btn-sair" type="button" className="btn button-blue" onClick={() => Sair()} >Sair</button>
                        </div>
                    </div>
                </nav>
                {/* Page content */}
                <div className="container-fluid sidebarPage-top">
                    <div className="tab-content page-content" id="v-pills-tabContent">
                        <div className="tab-pane fade show active" id="formulariosAbertos" role="tabpanel" aria-labelledby="formulariosAbertos-tab"><FormulariosAbertos /></div>
                        <div className="tab-pane fade" id="formulariosAutorizados" role="tabpanel" aria-labelledby="formulariosAutorizados-tab"><FormulariosAutorizados /></div>
                        <div className="tab-pane fade" id="autorizarLogin" role="tabpanel" aria-labelledby="autorizarLogin-tab"><AutorizarLogin /></div>
                        <div className="tab-pane fade" id="visualizarDados" role="tabpanel" aria-labelledby="visualizarDados-tab">Visualizar Dados</div>
                        <div className="tab-pane fade" id="visualizacaoGrafica" role="tabpanel" aria-labelledby="visualizacaoGrafica-tab">Visualização Gráfica</div>
                        <div className="tab-pane fade" id="historicoLogin" role="tabpanel" aria-labelledby="historicoLogin-tab"><HistoricoDeLogin /></div>
                        <div className="tab-pane fade" id="visualizarFormularioEmAberto" role="tabpanel" aria-labelledby="visualizarFormularioEmAberto-tab">Visualizar Formulário em Aberto</div>
                        <div className="tab-pane fade" id="visualizarFormularioAutorizado" role="tabpanel" aria-labelledby="visualizarFormularioAutorizado-tab">Visualizar Formulário Autorizado</div>
                    </div>
                </div>
            </div>
        </div>
    )
}