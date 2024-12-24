import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { Pie } from 'react-chartjs-2';
import './Budget.css';

const Budget = () => {
  // États
  const [balance, setBalance] = useState(0);
  const [categories, setCategories] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [newCategory, setNewCategory] = useState({ name: '', amount: 0 });
  const [transaction, setTransaction] = useState({ type: 'deposit', amount: 0, category: '', currency: 'USD' });
  const [exchangeRate, setExchangeRate] = useState(1);
  const [virtualCard] = useState('1234-5678-9101-1121'); // Numéro fictif
  const [qrCodeData] = useState('Carte Virtuelle - 1234-5678-9101-1121');

  // Gestion des catégories
  const handleAddCategory = () => {
    if (newCategory.name && newCategory.amount > 0) {
      setCategories([...categories, newCategory]);
      setNewCategory({ name: '', amount: 0 });
    }
  };

  // Gestion des transactions
  const handleTransaction = () => {
    if (transaction.amount > 0 && transaction.category) {
      const updatedBalance =
        transaction.type === 'deposit'
          ? balance + transaction.amount * exchangeRate
          : balance - transaction.amount * exchangeRate;

      setBalance(updatedBalance);
      setTransactions([...transactions, { ...transaction, amount: transaction.amount * exchangeRate }]);
      setTransaction({ type: 'deposit', amount: 0, category: '', currency: 'USD' });
    }
  };

  // Gestion des devises
  const handleCurrencyExchange = (newRate) => {
    setExchangeRate(newRate);
  };

  // Données pour le graphique
  const chartData = {
    labels: categories.map((cat) => cat.name),
    datasets: [
      {
        data: categories.map((cat) => cat.amount),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'],
      },
    ],
  };

  return (
    <div className="budget-page">
      {/* Section : Budget Total */}
      <div className="total-budget">
        <h1>Budget Total : 2,000,000 XOF</h1>
      </div>
{/* Section : Ajouter une nouvelle catégorie */}  
<div className="budget-form">  
  <h2>Ajouter une Catégorie</h2>  
  <div className="input-field">  
    <label>Nom de la catégorie</label>  
    <input  
      type="text"  
      className="input-category"  
      value={newCategory.name}  
      onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}  
      placeholder="Entrez le nom de la catégorie"  
    />  
  </div>  
  <div className="input-field">  
    <label>Montant</label>  
    <input  
      type="number"  
      className="input-amount"  
      value={newCategory.amount}  
      onChange={(e) => setNewCategory({ ...newCategory, amount: parseFloat(e.target.value) })}  
      placeholder="Entrez le montant"  
    />  
  </div>  
  <button onClick={handleAddCategory}>Ajouter</button>  
</div>

      {/* Section : Effectuer une transaction */}
      <div className="transaction-form">
        <h2>Effectuer une Transaction</h2>
        <select
          value={transaction.type}
          onChange={(e) => setTransaction({ ...transaction, type: e.target.value })}
        >
          <option value="deposit">Dépôt</option>
          <option value="withdraw">Retrait</option>
        </select>
        <input
          type="number"
          value={transaction.amount}
          onChange={(e) => setTransaction({ ...transaction, amount: parseFloat(e.target.value) })}
          placeholder="Montant"
        />
        <select
          value={transaction.currency}
          onChange={(e) => {
            const currency = e.target.value;
            setTransaction({ ...transaction, currency });
            handleCurrencyExchange(currency === 'USD' ? 1 : currency === 'EUR' ? 0.85 : 600);
          }}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="XOF">XOF</option>
        </select>
        <select
          value={transaction.category}
          onChange={(e) => setTransaction({ ...transaction, category: e.target.value })}
        >
          <option value="">Choisir une catégorie</option>
          {categories.map((cat, index) => (
            <option key={index} value={cat.name}>
              {cat.name}
            </option>
          ))}
        </select>
        <button onClick={handleTransaction}>
          {transaction.type === 'deposit' ? 'Ajouter de l’argent' : 'Retirer de l’argent'}
        </button>
      </div>

{/* Section : Carte virtuelle */}  
<div className="virtual-card">  
  <p className="card-owner">Darile NZIENGUI</p>  
  <div className="qr-section">  
    <QRCodeCanvas value={qrCodeData} style={{ width: 100, height: 100 }} />  
  </div>  
  <div className="card-info">  
    <p className="card-name">{virtualCard}</p>  
    <p className="card-details"> : 12/25</p>  
    <p className="card-details"></p>  
  </div>  
</div>      {/* Section : Graphique */}
      <div className="chart-section">
        <h2>Répartition des Dépenses</h2>
        <Pie data={chartData} />
      </div>

      {/* Section : Résumé des transactions */}
      <div className="transactions-summary">
        <h2>Résumé des Transactions</h2>
        <p>Solde total : {balance.toFixed(2)} {transaction.currency}</p>
        <ul>
          {transactions.map((trans, index) => (
            <li key={index}>
              {trans.type === 'deposit' ? '+' : '-'} {trans.amount.toFixed(2)} {trans.currency} 
              (Catégorie : {trans.category})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Budget;
