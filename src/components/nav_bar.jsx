import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Login from "../pages/login/login";
import Avatar from 'react-avatar';
import Dropdown from 'react-bootstrap/Dropdown';
import { auth } from '../services/firebase';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    var user = localStorage.getItem('user');

    return (
        <header id="header" className="fixed-top">
            <div className="container d-flex align-items-center justify-content-between">
                <h1 className="logo me-auto me-lg-0"><a href="/">BC<span>.</span></a></h1>
                <a href="/" className="logo me-auto me-lg-0"><img src="assets/img/logo.png" alt="" className="img-fluid" /></a>
                <div className="menu-toggle d-lg-none" onClick={toggleMenu}>
                    <i className={isMenuOpen ? "bi bi-x" : "bi bi-list"}></i>
                </div>
                <nav id="navbar" className={isMenuOpen ? "navbar order-last order-lg-0 show" : "navbar order-last order-lg-0"}>
                    <ul>
                        <li><NavLink exact to="/" activeClassName="active" onClick={toggleMenu}>Home</NavLink></li>
                        <li><NavLink to="/cardapio" activeClassName="active" onClick={toggleMenu}>Cardapio</NavLink></li>
                        <li><NavLink to="/contato" activeClassName="active" onClick={toggleMenu}>Contato</NavLink></li>
                    </ul>
                </nav>
                {
                    user ? (
                        <Dropdown color='white' className='me-4'>
                            <Dropdown.Toggle variant="Secondary" id="dropdown-basic" color='white' >
                                <Avatar name={JSON.parse(user).email} size="40" round={true} />
                            </Dropdown.Toggle>

                            <Dropdown.Menu color='white'>
                                <Dropdown.Item href="/perfil">Perfil</Dropdown.Item>
                                <Dropdown.Item href="/pedidos">Pedidos</Dropdown.Item>
                                <Dropdown.Item onClick={() => {
                                    auth.signOut();
                                    localStorage.removeItem('user');
                                    window.location.href = '/';
                                }}>Sair</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    ) : (
                        <Link to="/login" className="get-started-btn">Login</Link>
                    )
                }
            </div>
        </header>
        
    );
};

export default NavBar;
