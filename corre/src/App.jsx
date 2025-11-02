import React, { useState } from 'react';
import Header from './Header';
import ProductList from './ProductList';
import Cart from './Cart';
import ContactForm from './ContactForm';
import Footer from './Footer';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const products = [
    { id: 1, name: 'Pão Francês', price: 0.50, image: '/imagens/pao-frances.jpg'},
    { id: 2, name: 'Pão de Queijo', price: 5.00, image: '/imagens/Pao-de-queijo-1.webp' },
    { id: 3, name: 'Sonho', price: 4.00, image: '/imagens/sonho.webp' },
    { id: 4, name: 'Donuts', price: 4.50, image: '/imagens/donuts.jpg' },
    { id: 5, name: 'Salgado', price: 3.00, image: '/imagens/salgado.jpg' },
  ];

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div className="App">
      <Header />
      <ProductList products={products} addToCart={addToCart} />
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;