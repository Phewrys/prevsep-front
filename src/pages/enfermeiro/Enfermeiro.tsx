import FormulariosAbertos from './FormulariosAbertos'
import Logo from './../../content/img/uh-ufs.jpg'
import IconeEmAberto from './../../content/img/em_aberto_branco.png'
import IconeSalvos from './../../content/img/salvos_branco.png'
import IconeEnviados from './../../content/img/enviados_branco.png'
import IconeAutorizados from './../../content/img/autorizados_branco.png'
// import IconeAutorizarLogin from './../../content/img/autorizar_login_branco.png'
// import IconeDados from './../../content/img/dados_branco.png'

export default function Enfermeiro() {

    return(
    <div className="d-flex" id="wrapper">
        {/* Sidebar */}
        <div className="border-end blue-sidebar" id="sidebar-wrapper">
            <div className="logo"><img src={Logo} alt="Logo HU"></img></div>
            <div className="list-group list-group-flush sidebarPage-top">
            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <a className="nav-link active" id="autorizarFormulario-tab" data-toggle="pill" href="#autorizarFormulario" role="tab" aria-controls="autorizarFormulario" aria-selected="true"><img src={IconeAutorizados} alt="Icone Autorizar Formulário" className="icone"></img>Autorizar Formulário</a>
                <a className="nav-link" id="formulariosParaAutorizacao-tab" data-toggle="pill" href="#formulariosParaAutorizacao" role="tab" aria-controls="formulariosParaAutorizacao" aria-selected="false"><img src={IconeAutorizados} alt="Icone Formulários para Autorização" className="icone"></img>Forms para Autorização</a>
                <a className="nav-link" id="criarFormulario-tab" data-toggle="pill" href="#criarFormulario" role="tab" aria-controls="criarFormulario" aria-selected="false"><img src={IconeEmAberto} alt="Icone Criar Formulário" className="icone"></img>Criar Formulário</a>
                <a className="nav-link" id="editarFormulario-tab" data-toggle="pill" href="#editarFormulario" role="tab" aria-controls="editarFormulario" aria-selected="false"><img src={IconeEmAberto} alt="Icone Editar Formulário" className="icone"></img>Editar Formulário</a>
                <a className="nav-link" id="formulariosAbertos-tab" data-toggle="pill" href="#formulariosAbertos" role="tab" aria-controls="formulariosAbertos" aria-selected="false"><img src={IconeEmAberto} alt="Icone Formulários Abertos" className="icone"></img>Formulários Abertos</a>
                <a className="nav-link" id="formulariosSalvos-tab" data-toggle="pill" href="#formulariosSalvos" role="tab" aria-controls="formulariosSalvos" aria-selected="false"><img src={IconeSalvos} alt="Icone Formulários Salvos" className="icone"></img>Formulários Salvos</a>
                <a className="nav-link" id="formulariosEnviados-tab" data-toggle="pill" href="#formulariosEnviados" role="tab" aria-controls="formulariosEnviados" aria-selected="false"><img src={IconeEnviados} alt="Icone Formulários Enviados" className="icone"></img>Formulários Enviados</a>
                <a className="nav-link" id="visualizarFormularios-tab" data-toggle="pill" href="#visualizarFormularios" role="tab" aria-controls="visualizarFormularios" aria-selected="false"><img src={IconeEmAberto} alt="Icone Visualizar Formulários" className="icone"></img>Visualizar Formulários</a>
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
                    <div className="tab-pane fade show active" id="autorizarFormulario" role="tabpanel" aria-labelledby="autorizarFormulario-tab">Autorizar Formulário</div>
                    <div className="tab-pane fade" id="criarFormulario" role="tabpanel" aria-labelledby="criarFormulario-tab">Criar Formulário</div>
                    <div className="tab-pane fade" id="editarFormulario" role="tabpanel" aria-labelledby="editarFormulario-tab">Editar Formulário</div>
                    <div className="tab-pane fade" id="formulariosAbertos" role="tabpanel" aria-labelledby="formulariosAbertos-tab"><FormulariosAbertos /></div>
                    <div className="tab-pane fade" id="formulariosEnviados" role="tabpanel" aria-labelledby="formulariosEnviados-tab">Formulários Enviados</div>
                    <div className="tab-pane fade" id="formulariosParaAutorizacao" role="tabpanel" aria-labelledby="formulariosParaAutorizacao-tab">Formulários para Autorização</div>
                    <div className="tab-pane fade" id="formulariosSalvos" role="tabpanel" aria-labelledby="formulariosSalvos-tab">Formulários Salvos</div>
                    <div className="tab-pane fade" id="visualizarFormularios" role="tabpanel" aria-labelledby="visualizarFormularios-tab">Visualizar Formulários</div>
                </div>
            </div>
        </div>
    </div>
    )
}