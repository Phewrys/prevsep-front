
export default function PreencherFormulario() {

    return (
        <>
            <div className="div-header">
                <h2>Preencher Formulário</h2>
                <button type="button" className="btn button-blue">Novo Formulário +</button>
                {/* <a className="btn btn-primary" href="#id" role="button">Página Interna</a> */}
            </div>
            <div>
                <form>
                    <div className="container" style={{marginTop: '20px'}}>
                        <div className="row">
                            <div className="col-12 m-2">
                            <h4>Paciente</h4>
                              <div className="form-row" style={{margin: '-10px 0 -10px 0'}}>
                                <label htmlFor="idNomeCompleto" className="font-weight-bold col-form-label">Nome completo: </label>
                                <span>
                                  <input type="text" readOnly className="form-control-plaintext" id="idNomeCompleto" value="Xxxxxx Xxxxxx" />
                                </span>
                              </div>
                              <div className="form-row pl-1" style={{margin: '-10px 0 -10px 0'}}>
                                <div className="form-row">
                                  <label htmlFor="idIdade" className="font-weight-bold col-form-label">Idade: </label>
                                  <span>
                                    <input type="number" readOnly className="form-control-plaintext" id="idIdade" value="00" />
                                  </span>
                                </div>
                                <div className="form-row">
                                  <label htmlFor="idSexo" className="font-weight-bold col-form-label">Sexo: </label>
                                  <span>
                                    <input type="text" readOnly className="form-control-plaintext" id="idSexo" value="Masculino" />
                                  </span>
                                </div>
                              </div>
                              <div className="form-row pl-1" style={{margin: '-10px 0 -10px 0'}}>
                                <div className="form-row">
                                  <label htmlFor="idLeitor" className="font-weight-bold col-form-label">Leito: </label>
                                  <span>
                                    <input type="number" readOnly className="form-control-plaintext" id="idLeitor" value="0000" />
                                  </span>
                                </div>
                                <div className="form-row">
                                  <label htmlFor="idNatendimento" className="font-weight-bold col-form-label">Nº Atendimento: </label>
                                  <span>
                                    <input type="mumber" readOnly className="form-control-plaintext" id="idNatendimento" value="0000" />
                                  </span>
                                </div>
                              </div>
                              <div className="form-row" style={{margin: '-10px 0 -10px 0'}}>
                                <label htmlFor="idRegistro" className="font-weight-bold col-form-label">Registro: </label>
                                <span>
                                  <input type="number" readOnly className="form-control-plaintext" id="idRegistro" value="0000000000" />
                                </span>
                              </div>

                              <div className="my-2">1) Foco infeccioso suspeito ou confirmado?</div>
                              <div className="form-row">
                                <div className="form-check col-12 ml-4">
                                  <span style={{display: 'inline-block', marginRight: '20px'}}>
                                    <input className="form-check-input" type="checkbox" value="" id="idClinicaMedica1" />
                                    <label className="form-check-label" htmlFor="idClinicaMedica1">Sim.</label>
                                  </span>
                                  <span style={{display: 'inline-block', marginLeft: '20px'}}>
                                    <input className="form-check-input" type="checkbox" value="" id="idClinicaMedica1" />
                                    <label className="form-check-label" htmlFor="idClinicaMedica1">Não.</label>
                                  </span>
                                </div>
                                <div className="form-check col-md-5 ml-4">
                                  <input className="form-check-input" type="checkbox" value="" id="idClinicaMedica2" />
                                  <label className="form-check-label" htmlFor="idClinicaMedica2">Infecção urinária.</label>
                                </div>
                                <div className="form-check col-md-5 ml-4">
                                  <input className="form-check-input" type="checkbox" value="" id="idClinicaCirurgica1" />
                                  <label className="form-check-label" htmlFor="idClinicaCirurgica1">Infecção óssea/articular.</label>
                                </div>
                                <div className="form-check col-md-5 ml-4">
                                  <input className="form-check-input" type="checkbox" value="" id="idClinicaMedica2" />
                                  <label className="form-check-label" htmlFor="idClinicaMedica2">Infecção abdominal aguda.</label>
                                </div>
                                <div className="form-check col-md-5 ml-4">
                                  <input className="form-check-input" type="checkbox" value="" id="idClinicaCirurgica2" />
                                  <label className="form-check-label" htmlFor="idClinicaCirurgica2">Infecção de ferida operatória</label>
                                </div>
                                <div className="form-check col-md-5 ml-4">
                                  <input className="form-check-input" type="checkbox" value="" id="idPediatria" />
                                  <label className="form-check-label" htmlFor="idPediatria">Meningite</label>
                                </div>
                                <div className="form-check col-md-5 ml-4">
                                  <input className="form-check-input" type="checkbox" value="" id="idOncologia" />
                                  <label className="form-check-label" htmlFor="idOncologia">Infecção de corrente sanguínea associada ao cateter.</label>
                                </div>
                                <div className="form-check col-md-5 ml-4">
                                  <input className="form-check-input" type="checkbox" value="" id="idUti" />
                                  <label className="form-check-label" htmlFor="idUti">Endocardite.</label>
                                </div>
                                <div className="form-check col-md-5 ml-4">
                                  <input className="form-check-input" type="checkbox" value="" id="idAmbulatório" />
                                  <label className="form-check-label" htmlFor="idAmbulatório">Sem foco definido.</label>
                                </div>
                                <div className="form-check col-md-5 ml-4">
                                  <input className="form-check-input" type="checkbox" value="" id="idUti" />
                                  <label className="form-check-label" htmlFor="idUti">Pele e partes moles.</label>
                                </div>
                                <div className="form-check col-md-5 ml-4">
                                  <input className="form-check-input" type="checkbox" value="" id="idAmbulatório" />
                                  <label className="form-check-label" htmlFor="idAmbulatório">Outras infecções.</label>
                                </div>
                              </div>
                              
                              <div className="my-2">2) Apresenta critérios de exclusão para seguir no protocolo?</div>
                              <div className="form-check col-12">
                                <span style={{display: 'inline-block', marginRight: '20px'}}>
                                  <input className="form-check-input" type="checkbox" value="" id="idClinicaMedica1" />
                                  <label className="form-check-label" htmlFor="idClinicaMedica1">Sim.</label>
                                </span>
                                <span style={{display: 'inline-block', marginLeft: '20px'}}>
                                  <input className="form-check-input" type="checkbox" value="" id="idClinicaMedica1" />
                                  <label className="form-check-label" htmlFor="idClinicaMedica1">Não.</label>
                                </span>
                              </div>
                              <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="idEF11" />
                                 <label className="form-check-label" htmlFor="idEF11">
                                   Paciente em cuidados de fim de vida.
                                </label>
                              </div>                        
                              <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="idEF11" />
                                 <label className="form-check-label" htmlFor="idEF11">
                                  Quadro sugestivo de doenças atípicas (dengue, malária, leptospirose).
                                </label>
                              </div>                        
                              <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="idEF11" />
                                 <label className="form-check-label" htmlFor="idEF11">
                                  Quadro clínico pouco sugestivo de sepse (IVAS, amigdalite).
                                </label>
                              </div>

                              <div className="form-row">
                                <div className="form-check col-md-5 my-2">3) Iniciado bundle da HORA-T?</div>
                                <div className="form-check col-md-5 ml-4">
                                  <span className="font-weight-bold">Data e hora do disparo do protocolo: </span>00/00/00 00:00
                                </div>
                                <div className="form-check col-12 w-100">
                                  <span className="d-inline-block px-4">
                                    <input className="form-check-input" type="checkbox" value="" id="idClinicaMedica1" />
                                    <label className="form-check-label" htmlFor="idClinicaMedica1">Sim.</label>
                                  </span>
                                  <span className="d-inline-block px-2">
                                    <input className="form-check-input" type="checkbox" value="" id="idClinicaMedica1" />
                                    <label className="form-check-label" htmlFor="idClinicaMedica1">Não.</label>
                                  </span>
                                  <span className="form-row d-inline-block px-2" style={{width: '80%'}}>
                                    <label htmlFor="idJustificativa">Justificativa: </label>
                                    <span className="px-2 d-inline-block" style={{width: '80%'}}>
                                      <input type="text" className="form-control form-control-sm" id="idJustificativa" />
                                    </span>
                                  </span>
                                </div>
                                <div className="form-check col-md-5 ml-4">
                                  <input className="form-check-input" type="checkbox" value="" id="idX" />
                                  <label className="form-check-label" htmlFor="idX">Media lactato (kit sepse).</label>
                                </div>
                                <div className="form-check col-md-5">
                                  <span className="font-weight-bold">Data e hora da coleta: </span>00/00/00 00:00
                                </div>
                                <div className="form-check col-md-5 ml-4">
                                  <input className="form-check-input" type="checkbox" value="" id="idX" />
                                  <label className="form-check-label" htmlFor="idX">Obter hemoculturas (kit sepse).</label>
                                </div>
                                <div className="form-check col-md-5">
                                  <span className="font-weight-bold">Data e hora da coleta: </span>00/00/00 00:00
                                </div>
                                <div className="form-check col-md-5 ml-4">
                                  <input className="form-check-input" type="checkbox" value="" id="idX" />
                                  <label className="form-check-label" htmlFor="idX">Administrar antibióticos de amplo espectro.</label>
                                </div>
                                <div className="form-check col-md-5">
                                  <span className="font-weight-bold">Data e hora da 1ª dose: </span>00/00/00 00:00
                                </div>
                              </div>
                              <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="idEF11" />
                                <label className="form-check-label" htmlFor="idEF11">
                                  Iniciar administração de cristaloides (30ml/kg) se hipotensão ou lactato {'>'} 4mmol/L.
                                </label>
                              </div>
                              <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="idEF11" />
                                <label className="form-check-label" htmlFor="idEF11">
                                  Instalar vasopressores se hipotensão durante ou após ressuscitação hídrica (manter PAM {'>'} 65mmHg).
                                </label>
                              </div>

                              <div className="my-2">4) Reavaliações seriadas nas primeiras 6 horas do protocolo?</div>
                              <div className="form-row">
                                <div className="form-check col-12 w-100">
                                  <span className="d-inline-block px-4">
                                    <input className="form-check-input" type="checkbox" value="" id="idClinicaMedica1" />
                                    <label className="form-check-label" htmlFor="idClinicaMedica1">Sim.</label>
                                  </span>
                                  <span className="d-inline-block px-2">
                                    <input className="form-check-input" type="checkbox" value="" id="idClinicaMedica1" />
                                    <label className="form-check-label" htmlFor="idClinicaMedica1">Não.</label>
                                  </span>
                                  <span className="form-row d-inline-block px-2" style={{width: '80%'}}>
                                    <label htmlFor="idJustificativa">Justificativa: </label>
                                    <span className="px-2 d-inline-block" style={{width: '80%'}}>
                                      <input type="text" className="form-control form-control-sm" id="idJustificativa" />
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <div className="form-row">
                                <div className="form-check col-12 w-100">
                                  <span className="d-inline-block px-4">
                                    <input className="form-check-input" type="checkbox" value="" id="idEF11" />
                                    <label className="form-check-label" htmlFor="idEF11">
                                      qSOFA &ge; 2.
                                    </label>
                                  </span>
                                  <span className="d-inline-block px-4">
                                    <input className="form-check-input" type="checkbox" value="" id="idEF11" />
                                    <label className="form-check-label" htmlFor="idEF11">
                                      PAS {'<'} 100mmHg.
                                    </label>
                                  </span>
                                  <span className="d-inline-block px-4">
                                    <input className="form-check-input" type="checkbox" value="" id="idEF11" />
                                    <label className="form-check-label" htmlFor="idEF11">
                                      FR {'>'} 22rpm.
                                    </label>
                                  </span>
                                  <span className="d-inline-block px-4">
                                    <input className="form-check-input" type="checkbox" value="" id="idEF11" />
                                    <label className="form-check-label" htmlFor="idEF11">
                                      Rebaixamento de nível de consciência.
                                    </label>
                                  </span>
                                </div>
                              </div>
                              <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="idEF11" />
                                <label className="form-check-label" htmlFor="idEF11">
                                  Lactato inicialmente alto ({'>'}2mmol/L) e redosado 2h a 4h so início da fluidoterapia.
                                </label>
                              </div>
                              <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="idEF12" />
                                <label className="form-check-label" htmlFor="idEF12">
                                  Leucocitose {'>'} 12.000, leucopenia {'<'} 4.000 ou desvio esquerdo {'>'} 10% bastões.
                                </label>
                              </div>
                              <div className="form-check">
                                <label htmlFor="idJustificativa">Outros: </label>
                                <span className="px-2 d-inline-block">
                                  <input type="text" className="form-control form-control-sm" id="idJustificativa" />
                                </span>
                              </div>
                            </div>
                        </div>
                        <div className="row mt-3">
                          <div className="d-flex justify-content-start">
                            <div>
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