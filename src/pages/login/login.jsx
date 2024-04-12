import React, { useState } from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom'; // Importe useNavigate
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../services/firebase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Use useNavigate para navegação

  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

  const signIn = async () => {
    try {
      setLoading(true);
      setError(null);
      await signInWithEmailAndPassword(email, password);
      navigate('/'); // Navegue para a página inicial após o login bem-sucedido
    } catch (error) {
      setError('Usuário ou senha incorretos. Por favor, tente novamente.');
    } finally {
      setLoading(false);
    }
  };
  console.log(auth.currentUser);

  return (
    <section id="hero" className="d-flex align-items-center justify-content-center">
      <div className="container" data-aos="fade-up">
        <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="150">
          <div className="col-xl-6 col-lg-8" id="divTudo">

            <div className="text-white" id="divLogin">
              <h3>Já é cadastrado?</h3>
              <form>
                <div className="mb-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control text-black mb-3"
                    placeholder="Seu e-mail"
                  />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control text-black"
                    placeholder="Sua senha"
                  />
                </div>
                <button
                  onClick={signIn}
                  className="btn btn-success text-white form-control"
                  disabled={loading}
                >
                  {loading ? (
                    <div className="spinner-border spinner-border-sm" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  ) : (
                    <span>
                      <i className="bi bi-check-circle"></i> FAZER LOGIN
                    </span>
                  )}
                </button>
              </form>
              {error && <p className="text-danger mt-2">{error}</p>}
              <Link to="/forgot-password">Esqueci a senha</Link>
            </div>

            <div className="text-white" id="divCadastro">
              <h3>Seu primeiro pedido?</h3>
              <Link to="/register" className="btn bg-primary text-white form-control">
                <i className="bi bi-person"></i> CADASTRE-SE
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
