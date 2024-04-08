import React, { useState } from 'react';
import {Link} from "react-router-dom";
import "./register.css";
import {useCreateUserWithEmailAndPassword} from "react-firebase-hooks/auth";
import {auth} from "../../services/firebase";

const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    function handleSignIn(e) {
        e.preventDefault();
        createUserWithEmailAndPassword(email, password)
    }

    if (loading) {
        <p>Carregando...</p>
    }

    return (
        <section id="hero" className="d-flex align-items-center justify-content-center">
            <div className="container" data-aos="fade-up">
                <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="150">
                    <div className="col-xl-6 col-lg-8" id="divTudo">

                        <div className="text-white" id="divLogin">
                            <h3>Crie seu cadastro:</h3>
                            <form>
                                <div className="mb-3">
                                    <input onChange={e => setEmail(e.target.value)} className="form-control text-black mb-3" placeholder="Seu e-mail"/>
                                    <input onChange={e => setPassword(e.target.value)} className="form-control text-black" placeholder="Sua senha"/>
                                </div>
                                <button onClick={handleSignIn} className="btn btn-success text-white form-control">
                                    <i  className="bi bi-check-circle"></i> CRIAR CADASTRO
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
