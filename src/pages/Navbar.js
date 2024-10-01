import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="nav">
      <Link to="/">Accueil</Link>
      <Link to="/dashboard">Tableau de bord</Link>
      <Link to="/budget">Budgétisation</Link>
      <Link to="/reports">Rapports</Link>
      <Link to="/login">Connexion</Link>
    </nav>
  );
};

export default NavBar;
