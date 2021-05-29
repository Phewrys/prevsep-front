
export default function CriarFormulario() {

    return (
        <>
            <div className="div-header">
                <h2>Criar Formulário</h2>
                <button type="button" className="btn button-blue">Novo Formulário +</button>
                {/* <a className="btn btn-primary" href="#id" role="button">Página Interna</a> */}
            </div>
            <div>
                <form>
                    <div className="container" style={{marginTop: '20px'}}>
                        <div className="row">
                            <div className="col-md-12 col-lg-5 m-2">
                              <h4>Paciente</h4>
                              <div className="form-group">
                                <label htmlFor="idNomeCompleto">Nome completo*</label>
                                <input type="text" className="form-control" id="idNomeCompleto" required />
                              </div>
                              <div className="form-row">
                                <div className="col-md-6 mb-3">
                                  <label htmlFor="idIdade">Idade*</label>
                                  <input type="number" className="form-control" id="idIdade" required />
                                </div>
                                <div className="col-md-6 mb-3">
                                  <label htmlFor="idSexo">Sexo*</label>
                                  <select id="idSexo" className="form-control">
                                    <option selected>Escolher...</option>
                                    <option value={1}>Masculino</option>
                                    <option value={2}>Feminino</option>
                                  </select>
                                </div>
                              </div>
                              <div className="form-row">
                                <div className="col-md-6 mb-3">
                                  <label htmlFor="idLeitor">Leito*</label>
                                  <input type="text" className="form-control" id="idLeitor" required />
                                </div>
                                <div className="col-md-6 mb-3">
                                  <label htmlFor="idNAtendimento">Nº Atendimento*</label>
                                  <input type="text" className="form-control" id="idNAtendimento" required />
                                </div>
                              </div>
                              <div className="form-group">
                                <label htmlFor="idRegistro">Registro*</label>
                                <input type="text" className="form-control" id="idRegistro" required />
                              </div>
                            </div>
                            <div className="col-md-12 col-lg-5 m-2">
                              <h4>Equipe de Enfermagem</h4>
                              <div className="my-2">1) Paciente apresenta dois ou mais sinais de SIRS.</div>
                              <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="idEF11" />
                                <label className="form-check-label" htmlFor="idEF11">
                                  Febre {'>'} 37,8ºC ou hipotermia {'<'} 35ºC. 
                                </label>
                              </div>
                              <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="idEF12" />
                                <label className="form-check-label" htmlFor="idEF12">
                                  Leucocitose {'>'} 12.000, leucopenia {'<'} 4.000 ou desvio esquerdo {'>'} 10% bastões.
                                </label>
                              </div>
                              <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="idEF13" />
                                <label className="form-check-label" htmlFor="idEF13">
                                  Taquicardia {'>'} 90bpm.
                                </label>
                              </div>
                              <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="idEF14" />
                                <label className="form-check-label" htmlFor="idEF14">
                                  Taquipneia {'>'} 20irpm.
                                </label>
                              </div>
                              <div className="my-2">2) Paciente apresenta uma ou mais disfunção orgânica.</div>
                              <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="idEF21" />
                                <label className="form-check-label" htmlFor="idEF21">
                                  Diurese {'<'} 0,5ml/kg/hora.
                                </label>
                              </div>
                              <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="idEF22" />
                                <label className="form-check-label" htmlFor="idEF22">
                                  Hipotensão (PAS &le; 90mmHg).
                                </label>
                              </div>
                              <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="idEF23" />
                                <label className="form-check-label" htmlFor="idEF23">
                                  Sonolência, confusão, agitação ou coma.
                                </label>
                              </div>
                              <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="idEF24" />
                                <label className="form-check-label" htmlFor="idEF24">
                                  SatO<sub>2</sub> &le; 90%, necessidade de O<sub>2</sub> ou dispneia.
                                </label>
                              </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 col-lg-5 m-2">
                              <h4>Procedência</h4>
                              <div className="form-row">
                                <div className="form-check col-md-5 ml-4">
                                  <input className="form-check-input" type="checkbox" value="" id="idClinicaMedica1" />
                                  <label className="form-check-label" htmlFor="idClinicaMedica1">Clínica Médica I</label>
                                </div>
                                <div className="form-check col-md-5 ml-4">
                                  <input className="form-check-input" type="checkbox" value="" id="idClinicaMedica2" />
                                  <label className="form-check-label" htmlFor="idClinicaMedica2">Clínica Médica II</label>
                                </div>
                                <div className="form-check col-md-5 ml-4">
                                  <input className="form-check-input" type="checkbox" value="" id="idClinicaCirurgica1" />
                                  <label className="form-check-label" htmlFor="idClinicaCirurgica1">Clínica Cirúrgica I</label>
                                </div>
                                <div className="form-check col-md-5 ml-4">
                                  <input className="form-check-input" type="checkbox" value="" id="idClinicaCirurgica2" />
                                  <label className="form-check-label" htmlFor="idClinicaCirurgica2">Clínica Cirúrgica II</label>
                                </div>
                                <div className="form-check col-md-5 ml-4">
                                  <input className="form-check-input" type="checkbox" value="" id="idPediatria" />
                                  <label className="form-check-label" htmlFor="idPediatria">Pediatria</label>
                                </div>
                                <div className="form-check col-md-5 ml-4">
                                  <input className="form-check-input" type="checkbox" value="" id="idOncologia" />
                                  <label className="form-check-label" htmlFor="idOncologia">Oncologia</label>
                                </div>
                                <div className="form-check col-md-5 ml-4">
                                  <input className="form-check-input" type="checkbox" value="" id="idUti" />
                                  <label className="form-check-label" htmlFor="idUti">UTI</label>
                                </div>
                                <div className="form-check col-md-5 ml-4">
                                  <input className="form-check-input" type="checkbox" value="" id="idAmbulatório" />
                                  <label className="form-check-label" htmlFor="idAmbulatório">Ambulatório</label>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12 col-lg-5 m-2">
                              <h4>Acionamento da Equipe Médica</h4>
                              <div className="form-group">
                                <label htmlFor="idNomeMedicoChamado">Nome do médico chamado*</label>
                                <input type="text" className="form-control" id="idNomeMedicoChamado" required />
                              </div>
                            </div>
                        </div>
                        <div className="row mt-3">
                          <div className="d-flex justify-content-start">
                            <div>
                              <small className="ml-2"><span style={{color: 'red'}}>*</span> Campos Obrigatórios</small>
                              <br />
                              <input className="btn button-purple m-2" type="submit" value="Salvar e Sair" />
                              <input className="btn button-purple m-2" type="reset" value="Salvar e Enviar" />
                            </div>
                          </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}