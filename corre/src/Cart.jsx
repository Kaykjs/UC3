import React from 'react';

function Cart({ cartItems, removeFromCart }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <section className="cart">
      <h2>Carrinho de Compras</h2>
      {cartItems.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <ul className="cart-items">
          {cartItems.map(item => (
            <li key={item.id} className="cart-item">
              {item.name} - R$ {item.price.toFixed(2)}
              <button onClick={() => removeFromCart(item.id)} className="remove-button">
                Remover
              </button>
            </li>
          ))}
        </ul>
      )}
      <p className="total">Total: R$ {total.toFixed(2)}</p>
    </section>
  );
}

export default Cart;