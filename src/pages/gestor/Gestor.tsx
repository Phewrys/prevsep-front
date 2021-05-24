import Logo from './../../content/img/uh-ufs.jpg'

export default function Gestor() {

    return(
    <div className="d-flex" id="wrapper">
        {/* Sidebar */}
        <div className="border-end blue-sidebar" id="sidebar-wrapper">
            <div className="logo"><img src={Logo} alt="Logo HU"></img></div>
            <div className="list-group list-group-flush sidebarPage-top">
            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <a className="nav-link active" id="formulariosAbertos-tab" data-toggle="pill" href="#formulariosAbertos" role="tab" aria-controls="formulariosAbertos" aria-selected="true">Formulários Abertos</a>
                <a className="nav-link" id="formulariosAutorizados-tab" data-toggle="pill" href="#formulariosAutorizados" role="tab" aria-controls="formulariosAutorizados" aria-selected="false">Formulários Autorizados</a>
                <a className="nav-link" id="autorizarLogin-tab" data-toggle="pill" href="#autorizarLogin" role="tab" aria-controls="autorizarLogin" aria-selected="false">Autorizar Login</a>
                <a className="nav-link" id="visualizarDados-tab" data-toggle="pill" href="#visualizarDados" role="tab" aria-controls="visualizarDados" aria-selected="false">Visualizar Dados</a>
                <a className="nav-link" id="visualizacaoGrafica-tab" data-toggle="pill" href="#visualizacaoGrafica" role="tab" aria-controls="visualizacaoGrafica" aria-selected="false">Visualização Gráfica</a>
                <a className="nav-link" id="historicoLogin-tab" data-toggle="pill" href="#historicoLogin" role="tab" aria-controls="historicoLogin" aria-selected="false">Histórico de Login</a>
                <a className="nav-link" id="visualizarFormularioEmAberto-tab" data-toggle="pill" href="#visualizarFormularioEmAberto" role="tab" aria-controls="visualizarFormularioEmAberto" aria-selected="false">Visualizar Formulário em Aberto</a>
                <a className="nav-link" id="visualizarFormularioAutorizado-tab" data-toggle="pill" href="#visualizarFormularioAutorizado" role="tab" aria-controls="visualizarFormularioAutorizado" aria-selected="false">Visualizar Formulário Autorizado</a>
            </div>
            </div>
        </div>
        {/* Page content wrapper */}
        <div id="page-content-wrapper">
            {/* Top navigation */}
            <nav className="navbar navbar-expand-lg navbar-light top-navigation">
                <div className="container-fluid">
                    <button className="btn navbar-toggler" id="sidebarToggle"><span className="navbar-toggler-icon"></span></button>
                    <div></div>
                </div>
            </nav>
            {/* Page content */}
            <div className="container-fluid sidebarPage-top">
                <div className="tab-content page-content" id="v-pills-tabContent">
                    <div className="tab-pane fade show active" id="formulariosAbertos" role="tabpanel" aria-labelledby="formulariosAbertos-tab">Formulários Abertos</div>
                    <div className="tab-pane fade" id="formulariosAutorizados" role="tabpanel" aria-labelledby="formulariosAutorizados-tab">Formulários Autorizados</div>
                    <div className="tab-pane fade" id="autorizarLogin" role="tabpanel" aria-labelledby="autorizarLogin-tab">Autorizar Login</div>
                    <div className="tab-pane fade" id="visualizarDados" role="tabpanel" aria-labelledby="visualizarDados-tab">Visualizar Dados</div>
                    <div className="tab-pane fade" id="visualizacaoGrafica" role="tabpanel" aria-labelledby="visualizacaoGrafica-tab">Visualização Gráfica</div>
                    <div className="tab-pane fade" id="historicoLogin" role="tabpanel" aria-labelledby="historicoLogin-tab">Histórico de Login</div>
                    <div className="tab-pane fade" id="visualizarFormularioEmAberto" role="tabpanel" aria-labelledby="visualizarFormularioEmAberto-tab">Visualizar Formulário em Aberto</div>
                    <div className="tab-pane fade" id="visualizarFormularioAutorizado" role="tabpanel" aria-labelledby="visualizarFormularioAutorizado-tab">Visualizar Formulário Autorizado</div>
                </div>
            </div>
        </div>
    </div>
    )
}