import React from 'react';

class HomePage extends React.Component {
  render() {
    return (
      <>
        <header id="header" className="fixed-top">
          <div className="container d-flex align-items-center justify-content-lg-between">
            <h1 className="logo me-auto me-lg-0"><a href="/">BC<span>.</span></a></h1>
            <a href="/" className="logo me-auto me-lg-0"><img src="assets/img/logo.png" alt="" className="img-fluid" /></a>
            <nav id="navbar" className="navbar order-last order-lg-0">
              <ul>
                <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                <li><a className="nav-link scrollto" href="#cardapio">Cardápio</a></li>
                <li><a className="nav-link scrollto" href="#contact">Contato</a></li>
              </ul>
            </nav>
            <a href="#" className="get-started-btn scrollto">Login</a>
          </div>
        </header>
        <section id="hero" className="d-flex align-items-center justify-content-center">
          <div className="container" data-aos="fade-up">
            <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="150">
              <div className="col-xl-6 col-lg-8">
                <img src="assets/img/logo.png" className="img-fluid" alt=""/>
                <h1>Barriga Cheia<span>.</span></h1>
                <h2>Reserve seu lanche, e fuja das filas!</h2>
              </div>
            </div>
            <div className="row gy-4 mt-5 justify-content-center text-decoration-none" data-aos="zoom-in" data-aos-delay="250">
              <div className="col-xl-2 col-md-4">
                <div className="icon-box">
                <i class="ri-bread-line"></i>
                  <h3><a href="/">Lanches</a></h3>
                </div>
              </div>
              <div className="col-xl-2 col-md-4">
                <div className="icon-box">
                  <i className="bi bi-cup-straw"></i>
                  <h3><a href="/">Bebidas</a></h3>
                </div>
              </div>
              <div className="col-xl-2 col-md-4">
                <div className="icon-box">
                  <i className="bi bi-cake"></i>
                  <h3><a href="/" >Doces</a></h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default HomePage;
