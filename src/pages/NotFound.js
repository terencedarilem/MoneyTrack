import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container">
      <h1>Page non trouvée</h1>
      <p>Nous n'avons pas pu trouver la page que vous cherchez.</p>
      <Link to="/">Retourner à l'accueil</Link>
    </div>
  );
};

export default NotFound;
