import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css'; // Lien vers votre fichier CSS

const Home = () => {
  return (
    <div className="home-container">
      {/* Header section with fixed position */}
      <header className="header flex justify-between items-center p-4 bg-blue-800 text-white">
  <div className="logo">
    <img src="/images/logo1.png" alt="MoneyTrack Logo" className="logo w-20 h-auto" />
  </div>
  
  {/* Conteneur pour la barre de recherche et le bouton */}
  <div className="ml-auto flex items-center">
    <input 
      type="text" 
      placeholder="Rechercher..." 
      className="search-bar w-64 mx-2 p-2 border rounded"
    />
    <button className="cta-button bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
      Rechercher
    </button>
  </div>

  {/* <nav className="nav">
    <Link to="/">Accueil</Link>
    <Link to="/dashboard">Tableau de bord</Link>
    <Link to="/budget">Budgétisation</Link>
    <Link to="/reports">Rapports</Link>
    <Link to="/login">Connexion</Link>
  </nav> */}
</header>


      {/* Hero Section */}
      <section className="hero-section text-white">
  <h1>Prenez le contrôle de vos finances</h1>
  <p>Suivez vos dépenses, gérez votre budget et économisez plus efficacement avec MoneyTrack.</p>
  <Link to="/register">
    <button className="cta-button">Commencez dès maintenant</button>
  </Link>
</section>


      {/* Features Section */}
      <section className="features-section">
        <div className="feature">
          <img src="/images/expenses.png" alt="Suivi des dépenses" />
          <h2>Suivi des dépenses</h2>
          <p>Gardez un œil sur vos dépenses mensuelles avec des graphiques clairs et précis.</p>
        </div>
        <div className="feature">
          <img src="/images/budget.png" alt="Gestion de budget" />
          <h2>Gestion de budget</h2>
          <p>Planifiez votre budget et atteignez vos objectifs financiers plus facilement.</p>
        </div>
        <div className="feature">
          <img src="/images/savings.png" alt="Objectifs d'épargne" />
          <h2>Objectifs d'épargne</h2>
          <p>Fixez des objectifs financiers et suivez vos progrès.</p>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="dashboard-preview flex justify-between items-center">
  <div className="left-preview">
    <h2>Aperçu de votre tableau de bord</h2>
    <img src="/images/dashboard-preview.png" alt="Aperçu du tableau de bord" />
    <p>Obtenez un aperçu rapide de vos finances avec des graphiques clairs et informatifs.</p>
  </div>
  <div className="right-preview">
    <img src="/images/dashboard-preview1.png" alt="Aperçu du tableau de bord" />
  </div>
</section>


      
      <footer className="footer">
        <p>&copy; 2024 MoneyTrack. Tous droits réservés.</p>
        <nav>
          <Link to="/privacy">Politique de confidentialité</Link> |
          <Link to="/terms">Conditions d'utilisation</Link> |
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> |
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        </nav>
      </footer>
    </div>
  );
};

export default Home;
