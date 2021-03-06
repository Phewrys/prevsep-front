import ArrowDown from './../../content/img/arrow-down-solid.svg'

export default function FormulariosAutorizados() {

    return (
        <>
            <div className="div-header">
                <h2>Formulários Autorizados</h2>
            </div>
            <div>
                <div className="div-content">
                    <div className="m-2">
                        <small>Formulários (5)</small><br/><small>Imprimir</small> <small>Exportar</small>
                    </div>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nº Formulário <img src={ArrowDown} alt="Arrow Down" className="icone p-1"></img></th>
                                <th scope="col">Paciente <img src={ArrowDown} alt="Arrow Down" className="icone p-1"></img></th>
                                <th scope="col">Enfermeiro Responsável <img src={ArrowDown} alt="Arrow Down" className="icone p-1"></img></th>
                                <th scope="col">Data de Criação <img src={ArrowDown} alt="Arrow Down" className="icone p-1"></img></th>
                                <th scope="col">Data de Autorização <img src={ArrowDown} alt="Arrow Down" className="icone p-1"></img></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>000000</td>
                                <td>Xxxxx Xxxxx</td>
                                <td>Xxxxx Xxxxx</td>
                                <td>00/00/0000 00:00:00</td>
                                <td>00/00/0000 00:00:00</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>000000</td>
                                <td>Xxxxx Xxxxx</td>
                                <td>Xxxxx Xxxxx</td>
                                <td>00/00/0000 00:00:00</td>
                                <td>00/00/0000 00:00:00</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>000000</td>
                                <td>Xxxxx Xxxxx</td>
                                <td>Xxxxx Xxxxx</td>
                                <td>00/00/0000 00:00:00</td>
                                <td>00/00/0000 00:00:00</td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>000000</td>
                                <td>Xxxxx Xxxxx</td>
                                <td>Xxxxx Xxxxx</td>
                                <td>00/00/0000 00:00:00</td>
                                <td>00/00/0000 00:00:00</td>
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td>000000</td>
                                <td>Xxxxx Xxxxx</td>
                                <td>Xxxxx Xxxxx</td>
                                <td>00/00/0000 00:00:00</td>
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