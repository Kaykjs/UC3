import React, { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Mensagem enviada por ${name}: ${message}`);
    setName('');
    setMessage('');
  };

  return (
    <section className="contact-form">
      <h2>Entre em Contato</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Seu Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input-field"
        />
        <textarea
          placeholder="Sua Mensagem"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="textarea-field"
        />
        <button type="submit" className="submit-button">
          Enviar
        </button>
      </form>
    </section>
  );
}

export default ContactForm;