import Logo from './../content/img/uh-ufs.jpg'

export default function Home() {

    return(
    <div className="d-flex" id="wrapper">
        {/* Sidebar */}
        <div className="border-end blue-sidebar" id="sidebar-wrapper">
            <div className="logo"><img src={Logo} alt="Logo HU"></img></div>
            <div className="list-group list-group-flush sidebarPage-top">
            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <a className="nav-link active" id="id-tab" data-toggle="pill" href="#id" role="tab" aria-controls="id" aria-selected="true">Lorem</a>
                <a className="nav-link" id="id2-tab" data-toggle="pill" href="#id2" role="tab" aria-controls="id2" aria-selected="false">Lorem 2</a>
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
                    <div className="tab-pane fade show active" id="id" role="tabpanel" aria-labelledby="id-tab"><h2>Lorem</h2> <h4>Ipsom</h4></div>
                    <div className="tab-pane fade" id="id2" role="tabpanel" aria-labelledby="id2-tab"><h2>2 Lorem</h2> <h4>2 Ipsom</h4></div>
                </div>
            </div>
        </div>
    </div>
    )
}