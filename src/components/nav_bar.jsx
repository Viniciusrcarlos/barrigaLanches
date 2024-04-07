import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Login from "../pages/login/login";

const NavBar = () => {
    return (
        <header id="header" className="fixed-top">
            <div className="container d-flex align-items-center justify-content-lg-between">
                <h1 className="logo me-auto me-lg-0"><a href="/">BC<span>.</span></a></h1>
                <a href="/" className="logo me-auto me-lg-0"><img src="assets/img/logo.png" alt="" className="img-fluid" /></a>
                <nav id="navbar" className="navbar order-last order-lg-0">
                    <ul>
                        <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                        <li><NavLink to="/cardapio" activeClassName="active">Cardapio</NavLink></li>
                        <li><NavLink to="/contato" activeClassName="active">Contato</NavLink></li>
                    </ul>
                </nav>
                <Link to="/login" className="get-started-btn">Login</Link>
            </div>
        </header>
    );
};

export default NavBar;
