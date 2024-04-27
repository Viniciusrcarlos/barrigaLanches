import React, {useState} from 'react';
import './carrinho.css';

const Carrinho = () => {

    const [carrinhoItems, setCarrinhoItems] = useState([]);

    const menuItens = [
        { id: 1, name: 'Pizza de Calabresa', price: 30.00 },
        { id: 2, name: 'Hambúrguer', price: 20.00 },
        { id: 3, name: 'Sushi', price: 50.00 },
        { id: 4, name: 'Pizza de Calabresa', price: 30.00 },
        { id: 5, name: 'Hambúrguer', price: 20.00 },
        { id: 6, name: 'Sushi', price: 50.00 }
    ];

    const calcularTotal = () => {
        return carrinhoItems.reduce((total, item) => total + item.price, 0).toFixed(2);
    };

    const removerItem = (id) => {
        setCarrinhoItems(carrinhoItems.filter(item => item.id !== id));
    };

    return (
        <section id="hero" className="d-flex align-items-center justify-content-center">
            <div className="container" data-aos="fade-up">
                <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="150">
                    <div className="col-xl-6 col-lg-8" id="divTudo">

                        <h1>Carrinho de Compras</h1>
                        <div className="row carrinho" id="div">
                            {menuItens.map(item => (
                                <div key={item.id} className="col-md-6 col-lg-4 mb-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">{item.name}</h5>
                                            <p className="card-text">R${item.price.toFixed(2)}</p>
                                            <button onClick={() => removerItem(item.id)}
                                                    className="btn btn-danger btn-sm">Remover Item
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="card" id="total">
                            <h5 id="textoTotal">Total: R${calcularTotal()}</h5>
                        </div>
                        <button className="btn btn-primary">Finalizar Pedido</button>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Carrinho;