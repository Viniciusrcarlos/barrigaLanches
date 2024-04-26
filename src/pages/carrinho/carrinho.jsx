import React from 'react';

const Carrinho = () => {
    return (
        <section id="hero" className="d-flex align-items-center justify-content-center">
            <div className="container" data-aos="fade-up">
                <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="150">
                    <div className="col-xl-6 col-lg-8" id="divTudo">

                        <div className="row">
                            {menuItems.map(item => (
                                <div key={item.id} className="col-md-6 col-lg-4 mb-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">{item.name}</h5>
                                            <p className="card-text">Preço: R${item.price.toFixed(2)}</p>
                                            <button onClick={() => adicionarAoCarrinho(item)}
                                                    className="btn btn-primary">Adicionar ao Carrinho
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );

    const adicionarAoCarrinho = item => {

    };
}

export default Carrinho;