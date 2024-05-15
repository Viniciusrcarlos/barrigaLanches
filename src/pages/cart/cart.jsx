import React from "react";


export default function ProductCards() {
  const products = [

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
          price: 8.53,
          description: "Batatas fritas crocantes e deliciosas.",
          quantity: 15,
          image: "https://img.freepik.com/fotos-gratis/vista-lateral-de-batatas-fritas-com-tempero_141793-4899.jpg?w=1060&t=st=1713997010~exp=1713997610~hmac=bb6bd863e7ff35d87b0c1d1adea8d9b8f6614ebbfc1d8af8c085838947ee91f4",
          id: 2
      },

  ];

  return (
    <section className="h-100 py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h3 className="fw-normal mb-0 text-white opacity-75">Carrinho</h3>
              <div>
                <p className="mb-0">
                  <span className="text-muted me-2" style={{ fontSize: "0.875rem", lineHeight: "1.5" }}>Ordenar por:</span>
                  <a href="#!" className="text-body">preco <i className="fas fa-angle-down mt-1"></i></a>
                </p>
              </div>
            </div>

            {products.map((product, index) => (
              <div key={index}>
                <ProductCard product={product} />
                {index !== products.length - 1} {/* Renderiza uma linha horizontal se não for o último produto */}
              </div>
            ))}

            <div className="card mb-2">
              <div className="card-body d-flex flex-row p-2">
                <input className="form-control flex-fill me-2" type="text" placeholder="Cupom de desconto" />
                <button className="btn btn-dark btn-lg">Aplicar</button>
              </div>
            </div>

            <div className="card d-flex flex-row align-items-center justify-content-between mb-3">
              <div className="card-body">
                <h5 className="mb-0">Subtotal: R$999.00</h5>
              </div>
              <div className="card-body text-end">
                <button className="btn btn-lg btn-dark" style={{ border: "1px solid #fff" }}>Agendar pedido</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }) {
  const decreaseQuantity = () => {
    // Implement decrease quantity logic here
  };

  const increaseQuantity = () => {
    // Implement increase quantity logic here
  };

  const deleteProduct = () => {
    // Implement delete product logic here
  };

  return (
    <div className="card mb-2">
      <div className="card-body d-flex flex-row p-2">
        <img 
          src={product.image} 
          alt={product.name} 
          className="me-2" 
          style={{ width: "100px", height: "100px", objectFit: "cover" }} 
        />
        <div className="flex-fill">
          <h5 className="mb-0">{product.title}</h5>
          <p className="mb-0 text-muted">{product.description}</p>
          <div className="d-flex flex-row align-items-center">
            <p className="mb-0 text-muted me-2">Quantidade:</p>
            <button className="btn btn-sm btn-light me-2" onClick={decreaseQuantity}>
              <p className="mb-0">-</p>
            </button>
            <p className="mb-0">{product.quantity}</p>
            <button className="btn btn-sm btn-light me-2" onClick={increaseQuantity}>
              <p className="mb-0">+</p>
            </button>
          </div>
          <p className="mb-0 text-muted card-text">
            <span className="text-muted">R$</span>{product.price}
          </p>
        </div>
        <div className="d-flex flex-column align-items-center justify-content-top">
          <i 
            className="ri-delete-bin-line me-2"
            style={{ fontSize: "1.5rem", cursor: "pointer" }}
            onClick={deleteProduct}
            role="button"
            aria-label="Delete product"
          ></i>
        </div>
      </div>
    </div>
  );
}
