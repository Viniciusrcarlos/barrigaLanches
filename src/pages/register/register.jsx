import React, { useState } from 'react';
import {Link} from "react-router-dom";
import "./register.css";

const Register = () => {
    return (
        <section id="hero" className="d-flex align-items-center justify-content-center">
            <div className="container" data-aos="fade-up">
                <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="150">
                    <div className="col-xl-6 col-lg-8" id="divTudo">

                        <div className="text-white" id="divLogin">
                            <h3>Crie seu cadastro:</h3>
                            <form>
                                <div className="mb-3">
                                    <input className="form-control text-black mb-3" placeholder="Seu e-mail"/>
                                    <input className="form-control text-black" placeholder="Sua senha"/>
                                </div>
                                <button className="btn btn-success text-white form-control">
                                    <i className="bi bi-check-circle"></i> CRIAR CADASTRO
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;
