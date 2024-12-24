import React, { useState } from 'react';
import { Pie, Line } from 'react-chartjs-2';
import 'chart.js/auto';

const Dashboard = () => {
  const [revenus, setRevenus] = useState(5000);
  const [depenses, setDepenses] = useState(3000);
  const [epargne, setEpargne] = useState(0);  // Épargne ajoutée
  const [transactions, setTransactions] = useState([
    { date: '2024-10-01', description: 'Salaire', montant: 2500, type: 'revenu' },
    { date: '2024-10-02', description: 'Loyer', montant: -1200, type: 'dépense' },
    { date: '2024-10-03', description: 'Courses', montant: -300, type: 'dépense' },
  ]);

  const [description, setDescription] = useState('');
  const [montant, setMontant] = useState('');
  const [typeTransaction, setTypeTransaction] = useState('revenu');
  const [montantEpargne, setMontantEpargne] = useState('');  // Nouveau champ pour épargne

  const soldeNet = revenus - depenses;
  const soldeTotal = soldeNet + epargne;  // Total incluant l'épargne

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const getDepensesParCategorie = () => {
    const categories = {};
    const couleurs = [];

    transactions.forEach((transaction) => {
      if (transaction.type === 'dépense') {
        const desc = transaction.description.toLowerCase();
        if (categories[desc]) {
          categories[desc] += Math.abs(transaction.montant);
        } else {
          categories[desc] = Math.abs(transaction.montant);
          couleurs.push(getRandomColor());
        }
      }
    });

    return {
      labels: Object.keys(categories),
      datasets: [{
        data: Object.values(categories),
        backgroundColor: couleurs,
      }],
    };
  };

  const [depensesParCategorie, setDepensesParCategorie] = useState(getDepensesParCategorie());

  const [historiqueTransactions, setHistoriqueTransactions] = useState({
    labels: [],
    datasets: [{
      label: 'Transactions',
      data: [],
      fill: false,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
    }],
  });

  const ajouterTransaction = (e) => {
    e.preventDefault();
    
    const montantNum = parseFloat(montant);
    const montantEpargneNum = parseFloat(montantEpargne);
    
    if (description && !isNaN(montantNum)) {
      // Mettre à jour les revenus ou dépenses
      if (typeTransaction === 'revenu') {
        setRevenus(revenus + montantNum);
      } else {
        setDepenses(depenses + montantNum);
      }

      // Ajouter à l'épargne si spécifié
      if (!isNaN(montantEpargneNum) && montantEpargneNum > 0) {
        setEpargne(epargne + montantEpargneNum);  // Ajouter à l'épargne
      }

      const nouvelleTransaction = {
        date: new Date().toISOString().split('T')[0],
        description: description.trim().toLowerCase(),
        montant: montantNum,
        type: typeTransaction,
      };

      setTransactions([...transactions, nouvelleTransaction]);

      const newLabels = [...historiqueTransactions.labels, new Date().toLocaleDateString()];
      const newData = [...historiqueTransactions.datasets[0].data, montantNum];

      setHistoriqueTransactions({
        labels: newLabels,
        datasets: [{
          ...historiqueTransactions.datasets[0],
          data: newData,
        }],
      });

      setDepensesParCategorie(getDepensesParCategorie());
      setDescription('');
      setMontant('');
      setMontantEpargne('');
    } else {
      alert('Veuillez remplir tous les champs correctement.');
    }
  };

  const resetData = () => {
    setRevenus(0);
    setDepenses(0);
    setEpargne(0);  // Réinitialisation de l'épargne
    setTransactions([]);
    setHistoriqueTransactions({
      labels: [],
      datasets: [{
        label: 'Transactions',
        data: [],
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
      }],
    });
    setDepensesParCategorie(getDepensesParCategorie());
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Ajouter une transaction</h2>
      <form onSubmit={ajouterTransaction} style={styles.form}>
        <div style={styles.formGroup}>
          <label>Description :</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={styles.input}
            placeholder="Ex: Loyer"
          />
        </div>
        <div style={styles.formGroup}>
          <label>Montant :</label>
          <input
            type="number"
            value={montant}
            onChange={(e) => setMontant(e.target.value)}
            style={styles.input}
            placeholder="Ex: -1200"
          />
        </div>
        <div style={styles.formGroup}>
          <label>Type :</label>
          <select
            value={typeTransaction}
            onChange={(e) => setTypeTransaction(e.target.value)}
            style={styles.input}
          >
            <option value="revenu">Revenu</option>
            <option value="dépense">Dépense</option>
          </select>
        </div>
        <div style={styles.formGroup}>
          <label>Montant de l'épargne (optionnel) :</label>
          <input
            type="number"
            value={montantEpargne}
            onChange={(e) => setMontantEpargne(e.target.value)}
            style={styles.input}
            placeholder="Ex: 500"
          />
        </div>
        <button type="submit" style={styles.button}>Ajouter</button>
      </form>

      <div style={styles.summary}>
        <h3>Résumé des finances</h3>
        <p>Total des revenus : <strong>{revenus} €</strong></p>
        <p>Total des dépenses : <strong>{depenses} €</strong></p>
        <p>Solde net : <strong>{soldeNet} €</strong></p>
        <p>Épargne : <strong>{epargne} €</strong></p>
        <p>Solde total (incluant épargne) : <strong>{soldeTotal} €</strong></p>
      </div>

      <h3>Dépenses par catégorie</h3>
      <div style={styles.chartContainer}>
        <Pie data={depensesParCategorie} />
      </div>

      <h3>Historique des transactions</h3>
      <div style={styles.chartContainer}>
        <Line data={historiqueTransactions} />
      </div>

      <button 
        type="button" 
        onClick={resetData} 
        style={{ ...styles.button, backgroundColor: '#dc3545', marginTop: '10px' }}
      >
        Réinitialiser le budget
      </button>
    </div>
  );
};

// Styles CSS
const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    textAlign: 'center',
    color: '#333',
  },
  form: {
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '15px',
    marginBottom: '20px',
    backgroundColor: '#f9f9f9',
  },
  formGroup: {
    marginBottom: '15px',
  },
  input: {
    display: 'block',
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    backgroundColor: '#fff',
  },
  button: {
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  summary: {
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#f0f0f0',
    borderRadius: '5px',
  },
  chartContainer: {
    marginTop: '20px',
  },
};

export default Dashboard;
