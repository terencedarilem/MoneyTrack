import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './TransactionList.css';

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Remplace l'URL par celle de ton backend
    axios.get('http://localhost:5000/api/transactions')
      .then(response => setTransactions(response.data))
      .catch(error => console.error('Erreur lors de la récupération des transactions', error));
  }, []);

  return (
    <div className="transaction-list">
      <h2>Liste des Transactions</h2>
      <ul>
        {transactions.map(transaction => (
          <li key={transaction.id}>
            {transaction.name} - {transaction.amount} €
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
