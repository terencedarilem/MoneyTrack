import React, { useState, useEffect } from 'react';
import { Bar, Pie, Line } from 'react-chartjs-2';

const Reports = () => {
  const [transactions, setTransactions] = useState([]);
  const [revenus, setRevenus] = useState(0);
  const [depenses, setDepenses] = useState(0);
  const [soldeNet, setSoldeNet] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simule la récupération des données
    setTimeout(() => {
      // Simuler des transactions récupérées depuis une API ou une base de données
      const transactionsData = [
        { description: 'Salaire', montant: 3000, date: '2024-01-01', type: 'revenu' },
        { description: 'Loyer', montant: -1500, date: '2024-01-05', type: 'dépense' },
        { description: 'Courses', montant: -500, date: '2024-01-10', type: 'dépense' },
        { description: 'Salaire', montant: 3000, date: '2024-02-01', type: 'revenu' },
        { description: 'Loyer', montant: -1500, date: '2024-02-05', type: 'dépense' },
        { description: 'Cours', montant: -500, date: '2024-02-10', type: 'dépense' },
        // Ajoute d'autres transactions ici
      ];

      setTransactions(transactionsData);

      // Calcul des revenus et dépenses
      let totalRevenus = 0;
      let totalDepenses = 0;
      transactionsData.forEach((transaction) => {
        if (transaction.type === 'revenu') {
          totalRevenus += transaction.montant;
        } else if (transaction.type === 'dépense') {
          totalDepenses += Math.abs(transaction.montant);
        }
      });

      setRevenus(totalRevenus);
      setDepenses(totalDepenses);
      setSoldeNet(totalRevenus - totalDepenses);
      setLoading(false);
    }, 2000); // Simulation de 2 secondes pour récupérer les données
  }, []);

  const revenusDepensesData = {
    labels: ['Jan', 'Févr', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sept', 'Oct', 'Nov', 'Déc'],
    datasets: [
      {
        label: 'Revenus',
        backgroundColor: 'rgba(75,192,192,0.6)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.8)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: [3000, 3500, 4000, 3000, 4500, 5000, 4000, 4200, 4800, 5000, 5400, 6000],
      },
      {
        label: 'Dépenses',
        backgroundColor: 'rgba(255,99,132,0.6)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.8)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [2000, 1800, 2200, 2100, 1900, 2300, 2200, 2500, 2400, 2600, 2800, 3000],
      },
    ],
  };

  const getDepensesParCategorie = () => {
    const categories = {};
    const couleurs = [];
    if (!transactions || transactions.length === 0) {
      return { labels: [], datasets: [{ data: [], backgroundColor: [] }] };
    }
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
      datasets: [{ data: Object.values(categories), backgroundColor: couleurs }],
    };
  };

  const evolutionSoldeNet = {
    labels: ['Jan', 'Févr', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sept', 'Oct', 'Nov', 'Déc'],
    datasets: [
      {
        label: 'Solde Net',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [1000, 1500, 1200, 1800, 1600, 2100, 2400, 2500, 2600, 2800, 3000, 3200],
      },
    ],
  };

  const tauxEpargneData = {
    labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'],
    datasets: [
      {
        label: 'Taux d\'épargne',
        backgroundColor: 'rgba(75,192,192,0.6)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.8)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: [20, 30, 40, 30, 40, 50, 40, 50, 60, 50, 60, 70],
      },
    ],
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const listeTransactions = transactions.map((transaction, index) => (
    <tr key={index}>
      <td>{transaction.description}</td>
      <td>{transaction.montant}</td>
      <td>{transaction.date}</td>
    </tr>
  ));

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>Rapports Financiers</h1>
      {loading ? (
        <div style={{ textAlign: 'center', fontSize: '24px', marginTop: '50px' }}>Chargement...</div>
      ) : (
        <>
          <div style={{ margin: '20px 0', backgroundColor: '#f1f1f1', padding: '10px', borderRadius: '5px', textAlign: 'center' }}>
            <p>Total des revenus : <strong>{revenus} FC</strong></p>
            <p>Total des dépenses : <strong>{depenses} FCFA</strong></p>
            <p>Solde net : <strong>{soldeNet} FCFA</strong></p>
          </div>
          <h3>Revenus et dépenses par mois</h3>
          <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#fff', borderRadius: '5px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <Bar data={revenusDepensesData} />
          </div>
          <h3>Répartition des dépenses par catégorie</h3>
<div
  style={{
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#fff',
    borderRadius: '5px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '450px', // Taille agrandie
    height: '450px', // Taille agrandie
    margin: '0 auto', // Centrer le graphique
  }}
>
  <Pie data={getDepensesParCategorie()} />
</div>

          <h3>Évolution du solde net</h3>
          <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#fff', borderRadius: '5px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <Line data={evolutionSoldeNet} />
          </div>
          <h3>Taux d'épargne mensuel</h3>
          <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#fff', borderRadius: '5px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <Line data={tauxEpargneData} />
          </div>
          <h3>Liste des Transactions</h3>
          <table style={{ width: '100%', marginTop: '20px', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th>Description</th>
                <th>Montant</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>{listeTransactions}</tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default Reports;
