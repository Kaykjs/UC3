import React from 'react';

function ProductList({ products, addToCart }) {
  return (
    <section className="product-list">
      <h2>Produtos Disponíveis</h2>
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>R$ {product.price.toFixed(2)}</p>
            <button onClick={() => addToCart(product)} className="add-button">
              Adicionar ao Carrinho
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductList;