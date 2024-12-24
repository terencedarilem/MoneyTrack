import React, { useState } from 'react';

const FacebookAuth = () => {
  const [showSignup, setShowSignup] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    birthDay: '',
    birthMonth: '',
    birthYear: '',
    gender: '',
    newEmail: '',
    newPassword: '',
    userType: 'particulier' // Choix entre Particulier ou Entreprise
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (showSignup) {
      // Logique pour l'inscription
      if (formData.newEmail && formData.newPassword && formData.firstName && formData.lastName) {
        console.log('Inscription soumise:', formData);
        alert('Inscription réussie !'); // Juste pour test
      } else {
        alert('Veuillez remplir tous les champs requis pour l\'inscription.');
      }
    } else {
      // Logique pour la connexion
      if (formData.email && formData.password) {
        console.log('Connexion soumise:', formData);
        alert('Connexion réussie !'); // Juste pour test
      } else {
        alert('Veuillez entrer votre email et mot de passe pour vous connecter.');
      }
    }
  };

  return (
    <div className="auth-page">
      {!showSignup ? (
        <div className="auth-container">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="email"
              placeholder="Adresse e-mail ou numéro de tél."
              value={formData.email}
              onChange={handleChange}
              className="auth-input"
            />
            <input
              type="password"
              name="password"
              placeholder="Mot de passe"
              value={formData.password}
              onChange={handleChange}
              className="auth-input"
            />
            
            <div className="user-type">
              <label>Type d’utilisateur :</label>
              <div>
                <label>
                  <input
                    type="radio"
                    name="userType"
                    value="particulier"
                    checked={formData.userType === 'particulier'}
                    onChange={handleChange}
                  />
                  Particulier
                </label>
                <label style={{ marginLeft: '10px' }}>
                  <input
                    type="radio"
                    name="userType"
                    value="entreprise"
                    checked={formData.userType === 'entreprise'}
                    onChange={handleChange}
                  />
                  Entreprise
                </label>
              </div>
            </div>

            <button type="submit" className="login-button">
              Se connecter
            </button>
            
            <button type="button" className="forgot-password" onClick={() => {/* Ajouter la logique pour réinitialisation de mot de passe */}}>
              Mot de passe oublié ?
            </button>

            <div className="divider"></div>
            <button
              type="button"
              className="create-account-button"
              onClick={() => setShowSignup(true)}
            >
              Créer nouveau compte
            </button>
          </form>
        </div>
      ) : (
        <div className="signup-container">
          <h1>Créer un compte</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="firstName"
              placeholder="Prénom"
              value={formData.firstName}
              onChange={handleChange}
              className="auth-input"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Nom de famille"
              value={formData.lastName}
              onChange={handleChange}
              className="auth-input"
            />
            <input
              type="text"
              name="newEmail"
              placeholder="Numéro mobile ou e-mail"
              value={formData.newEmail}
              onChange={handleChange}
              className="auth-input"
            />
            <input
              type="password"
              name="newPassword"
              placeholder="Nouveau mot de passe"
              value={formData.newPassword}
              onChange={handleChange}
              className="auth-input"
            />
            <button type="submit" className="signup-button">
              S'inscrire
            </button>
          </form>
          
          <button className="login-link" onClick={() => setShowSignup(false)}>
            Vous avez déjà un compte ?
          </button>
        </div>
      )}
    </div>
  );
};

export default FacebookAuth;
