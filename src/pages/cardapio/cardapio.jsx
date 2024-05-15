import React, { useState } from 'react';
import { FaCartPlus, FaHeart } from 'react-icons/fa';

const Cardapio = () => {
    const items = [
        {
            title: "Hamburguer",
            price: 15.99,
            description: "Delicioso hamburguer feito com ingredientes frescos.",
            quantity: 10,
            image: "https://img.freepik.com/free-photo/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese_90220-1063.jpg?w=740&t=st=1713995201~exp=1713995801~hmac=ab02b44c70afac589d5b0d37f55b8f1b1c3fc195619d89f95179c9778bedcf18",
            id: 1
        },
        {
            title: "Batata Frita",
            price: 8.50,
            description: "Batatas fritas crocantes e deliciosas.",
            quantity: 15,
            image: "https://img.freepik.com/fotos-gratis/vista-lateral-de-batatas-fritas-com-tempero_141793-4899.jpg?w=1060&t=st=1713997010~exp=1713997610~hmac=bb6bd863e7ff35d87b0c1d1adea8d9b8f6614ebbfc1d8af8c085838947ee91f4",
            id: 2
        },
        {
            title: "Refrigerante",
            price: 4.00,
            description: "Refrescante refrigerante em lata.",
            quantity: 20,
            image: "https://pizzariadojoao.festzap.com.br/_core/_uploads/107/2022/05/1804170522i5dbk2ad6a.png",
            id: 3
        }
    ];

    const [hoveredItems, setHoveredItems] = useState([]);

    const handleMouseEnter = (itemId) => {
        setHoveredItems((prevItems) => [...prevItems, itemId]);
    };

    const handleMouseLeave = (itemId) => {
        setHoveredItems((prevItems) => prevItems.filter((id) => id !== itemId));
    };

    const isHovered = (itemId) => {
        return hoveredItems.includes(itemId);
    };

    return (
        <section className="mx-5">
            <h2 className="text-center mb-4">Cardápio</h2>
            <div className="row">
                {items.length > 0 ? (
                    items.map(item => (
                        <div key={item.id} className="col-lg-4 col-md-6 mb-4">
                            <div className="card h-100">
                                <div className="row no-gutters">
                                    <div className="col-md-4">
                                        <div style={{ width: '100%', height: '200px', overflow: 'hidden' }}>
                                            <img
                                                src={item.image}
                                                className="card-img"
                                                alt={item.title}
                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title d-flex justify-content-between align-items-center">{item.title}<FaHeart color='red' /></h5>git
                                            <p style={{ borderBottom: '1px solid #ccc' }} className="card-text">{item.description}</p>
                                            <p className="card-text">Quantidade disponível: {item.quantity}</p>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center p-3">
                                            <h6 className="card-subtitle text-muted">
                                                <span className="text-success">R$ {item.price.toFixed(2)}</span>
                                            </h6>
                                            <FaCartPlus
                                                size={24}
                                                color={isHovered(item.id) ? "#ffc451" : "#000"}
                                                onMouseEnter={() => handleMouseEnter(item.id)}
                                                onMouseLeave={() => handleMouseLeave(item.id)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-12 text-center">
                        <p>Nenhum item disponível no cardápio.</p>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Cardapio;
