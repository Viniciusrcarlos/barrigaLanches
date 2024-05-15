import React, { useState, useEffect } from 'react';
import { FaCartPlus, FaHeart } from 'react-icons/fa';
import { db } from '../../services/firebase';
import { collection, getDocs } from "firebase/firestore";

const Cardapio = () => {
    const [items, setItems] = useState([]);
    const [hoveredItems, setHoveredItems] = useState([]); // Estado para itens que estão sendo 'hovered'

    const handleMouseEnter = (itemId) => {
        setHoveredItems((prevItems) => [...prevItems, itemId]);
    };

    const handleMouseLeave = (itemId) => {
        setHoveredItems((prevItems) => prevItems.filter((id) => id !== itemId));
    };

    const isHovered = (itemId) => {
        return hoveredItems.includes(itemId);
    };

    const fetchCardapio = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "cardapio"));
            const fetchedItems = querySnapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));
            setItems(fetchedItems);
        } catch (error) {
            console.error("Error fetching cardapio:", error);
        }
    };

    useEffect(() => {
        fetchCardapio();
    }, []);

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
                                            <h5 className="card-title d-flex justify-content-between align-items-center">
                                                {item.title}
                                                <FaHeart color='red' />
                                            </h5>
                                            <p style={{ borderBottom: '1px solid #ccc' }} className="card-text">
                                                {item.description}
                                            </p>
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
                    <div className=" d-flex flex-column align-items-center justify-content-center" style={{ height: "50vh" }}>
                      
                        <i className="bi bi-hourglass-split" style={{
                            fontSize: "3rem", zIndex: 9999, color: 'white'
                        }} data-aos="fade-up" data-aos-delay="150"></i>
                          <p className="text-center" style={{
                            width: "100%", zIndex

                                : 9999, color: 'white'
                        }}  data-aos-delay="150"
                        >Estamos preparando o cardápio, volte em breve!</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Cardapio;
