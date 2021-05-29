import ArrowDown from './../../content/img/arrow-down-solid.svg'

export default function HistoricoDeLogin() {

    return (
        <>
            <div className="div-header">
                <h2>Histórico de Login</h2>
            </div>
            <div>
                <div className="div-content">
                    <div className="m-2">
                        <small>Logins (5)</small><br/><small>Imprimir</small> <small>Exportar</small>
                    </div>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Funcionário <img src={ArrowDown} alt="Arrow Down" className="icone p-1"></img></th>
                                <th scope="col">Cargo <img src={ArrowDown} alt="Arrow Down" className="icone p-1"></img></th>
                                <th scope="col">CPF <img src={ArrowDown} alt="Arrow Down" className="icone p-1"></img></th>
                                <th scope="col">Autorizado? <img src={ArrowDown} alt="Arrow Down" className="icone p-1"></img></th>
                                <th scope="col">Data de Autenticação <img src={ArrowDown} alt="Arrow Down" className="icone p-1"></img></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Xxxxx Xxxxx</td>
                                <td>Xxxxx Xxxxx</td>
                                <td>000.000.000-00</td>
                                <td>Sim</td>
                                <td>00/00/0000 00:00:00</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Xxxxx Xxxxx</td>
                                <td>Xxxxx Xxxxx</td>
                                <td>000.000.000-00</td>
                                <td>Não</td>
                                <td>00/00/0000 00:00:00</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Xxxxx Xxxxx</td>
                                <td>Xxxxx Xxxxx</td>
                                <td>000.000.000-00</td>
                                <td>Sim</td>
                                <td>00/00/0000 00:00:00</td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>Xxxxx Xxxxx</td>
                                <td>Xxxxx Xxxxx</td>
                                <td>000.000.000-00</td>
                                <td>Não</td>
                                <td>00/00/0000 00:00:00</td>
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td>Xxxxx Xxxxx</td>
                                <td>Xxxxx Xxxxx</td>
                                <td>000.000.000-00</td>
                                <td>Sim</td>
                                <td>00/00/0000 00:00:00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                    <nav aria-label="Navegação de página exemplo">
                        <ul className="pagination justify-content-center pt-3">
                            {/* <li className="page-item disabled">
                                <a className="page-link" href="#" tabIndex={-1}>Anterior</a>
                            </li> */}
                            <li><a className="page-link" href="#">1</a></li>
                            <li><a className="page-link" href="#">2</a></li>
                            <li><a className="page-link" href="#">3</a></li>
                            {/* <li className="page-item">
                                <a className="page-link" href="#">Próximo</a>
                            </li> */}
                        </ul>
                    </nav>
            </div>
        </>
    )
}