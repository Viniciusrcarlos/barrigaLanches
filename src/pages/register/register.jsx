import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './register.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../services/firebase';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            setError(null);
            await createUserWithEmailAndPassword(email, password);
            setSuccess(true);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const navigate = useNavigate(); // Adicionando o hook useNavigate para redirecionamento

    if (success) {
        navigate('/login'); // Redirecionando para a página de login
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
                                    <input onChange={e => setEmail(e.target.value)} className="form-control text-black mb-3" placeholder="Seu e-mail" />
                                    <input onChange={e => setPassword(e.target.value)} className="form-control text-black" placeholder="Sua senha" />
                                </div>
                                <button onClick={handleSignIn} className="btn btn-success text-white form-control" disabled={loading}>
                                    {loading ? (
                                        <div className="spinner-border spinner-border-sm" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                    ) : (
                                        <span>
                                            <i className="bi bi-check-circle"></i> CRIAR CADASTRO
                                        </span>
                                    )}
                                </button>
                            </form>
                            {error && <p className="text-danger mt-2">{error}</p>}
                            <Link to="/login">Já tem cadastro? Faça login.</Link>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;
