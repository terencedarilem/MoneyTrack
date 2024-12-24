import React from 'react';

// Exemple d'état d'utilisateur simulé
const simulatedUser = {
  name: "Terence",
  email: "terence@example.com",
};

const Profile = () => {
  // Utilisez l'utilisateur simulé à la place du contexte
  const user = simulatedUser;

  return (
    <div>
      {user ? (
        <div>
          <h1>Bienvenue, {user.name}!</h1>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>Chargement des informations...</p>
      )}
    </div>
  );
};

export default Profile;
