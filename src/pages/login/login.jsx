import React from 'react';
import "./login.css";
import {Link} from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Login = () => {

    

  return (
      <section id="hero" className="d-flex align-items-center justify-content-center">
          <div className="container" data-aos="fade-up">
              <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="150">
                  <div className="col-xl-6 col-lg-8" id="divTudo">

                      <div className="text-white" id="divLogin">
                        <h3>Já é cadastrado?</h3>
                          <form>
                              <div className="mb-3">
                                  <input className="form-control text-black mb-3" placeholder="Seu e-mail"/>
                                  <input className="form-control text-black" placeholder="Sua senha"/>
                              </div>
                              <button className="btn btn-success text-white form-control">
                                  <i className="bi bi-check-circle"></i> FAZER LOGIN
                              </button>
                          </form>
                          <a>Esqueci a senha</a>
                      </div>

                      <div className="text-white" id="divCadastro">
                          <h3>Seu primeiro pedido?</h3>
                          <Link to="/register" className="btn bg-primary text-white form-control"><i
                              className="bi bi-person"></i> CADASTRE-SE</Link>

                      </div>

                  </div>
              </div>
          </div>
      </section>
  );
};

export default Login;
