import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Budget from './pages/Budget';
import Reports from './pages/Reports';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
  return (
    <div className="app-container">
      <Router>
        <header className="header">
          <div className="logo">MoneyTrack</div>
          <nav className="nav">
            <ul>
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/dashboard">Tableau de Bord</Link></li>
              <li><Link to="/budget">Budget</Link></li>
              <li><Link to="/reports">Rapports</Link></li>
              <li><Link to="/login">Connexion</Link></li>
              <li><Link to="/register">Inscription</Link></li>
            </ul>
          </nav>
        </header>

        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/budget" element={<Budget />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>

        {/* <footer className="footer">
          <p>&copy; 2024 Gestion Budgétaire</p>
        </footer> */}
      </Router>
    </div>
  );
};

export default App;
