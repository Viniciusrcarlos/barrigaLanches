import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './register.css';
import { auth } from '../../services/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);



    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            if (name.length === 0) {
                alert("Name cannot be empty");
            } else {
                // Create user with email and password
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;
    
                // Update user profile with display name
                await auth.updateProfile(user, {
                    displayName: name
                });

                // Optionally, you can save the user's data to localStorage or state
                const userData = {
                    id: user.uid,
                    name: user.displayName,
                    email: user.email
                };
                localStorage.setItem('user', JSON.stringify(userData));
    
                console.log("User registered successfully:", user);
            }
        } catch (error) {
            // Handle any errors that occur during registration or profile update
            alert(error.message);
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
                            <h3>Crie seu conta</h3>
                            <form>
                                <div className="mb-3">
                                <input onChange={e => setName(e.target.value)}className="form-control text-black mb-3" placeholder="Seu nome" />

                                    <input onChange={e => setEmail(e.target.value)} className="form-control text-black mb-3" placeholder="Seu e-mail" />
                                    <input onChange={e => setPassword(e.target.value)} className="form-control text-black mb-3" placeholder="Sua senha" />
                                    <input onChange={e => setConfirmPassword(e.target.value)}className="form-control text-black mb-3" placeholder="Confirme sua senha" />
                                </div>
                                <button onClick={handleSignIn} className="btn btn-success text-white form-control mb-3" disabled={loading}>
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
                            <Link to="/login" style={{ color: 'white',alignSelf: 'center' }}>Já é cadastrado? Faça login</Link>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;
