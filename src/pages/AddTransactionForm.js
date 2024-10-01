import React, { useState } from 'react';
import axios from 'axios';
import './AddTransactionForm.css';

const AddTransactionForm = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Remplace l'URL par celle de ton backend
    axios.post('http://localhost:5000/api/transactions', { name, amount })
      .then(() => {
        setName('');
        setAmount('');
        alert('Transaction ajoutée avec succès');
      })
      .catch(error => console.error('Erreur lors de l\'ajout de la transaction', error));
  };

  return (
    <form className="add-transaction-form" onSubmit={handleSubmit}>
      <h2>Ajouter une Transaction</h2>
      <input
        type="text"
        placeholder="Nom"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Montant"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default AddTransactionForm;
