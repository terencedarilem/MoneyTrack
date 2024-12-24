import React, { useState } from 'react';
import './Login.css'; // Import du fichier CSS

const FacebookAuth = () => {
 const [showSignup, setShowSignup] = useState(false);
 const [formData, setFormData] = useState({
   email: '',
   password: '',
   firstName: '',
   lastName: '',
   birthDay: '25',
   birthMonth: 'oct',
   birthYear: '2024',
   gender: '',
   newPassword: '',
   userType: 'particulier' // Nouveau champ pour le type d'utilisateur
 });

 const handleChange = (e) => {
   setFormData({
     ...formData,
     [e.target.name]: e.target.value
   });
 };

 const handleSubmit = (e) => {
   e.preventDefault();
   console.log('Formulaire soumis:', formData);
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
           
           {/* Nouveau champ pour choisir entre Particulier ou Entreprise */}
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
           <a href="#" className="forgot-password" style={{ color: 'white' }}>  
  Mot de passe oublié ?  
</a>
           <div className="divider"></div>
           <button
             type="button"
             className="create-account-button"
             onClick={() => setShowSignup(true)}
           >
             Créer nouveau compte
           </button>
         </form>
         <div className="create-page-text">
           <a href="#">Créer un compte </a> de gestion de finance pour particulier ou entreprise
         </div>
       </div>
     ) : (
       <div className="signup-container">
         {/* Inscription */}
         <h1>Créer un compte</h1>
         <p className="subtitle">C'est simple et rapide.</p>
         <div className="divider"></div>
         <form onSubmit={handleSubmit}>
           {/* Champs d’inscription */}
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
         <a href="#" className="login-link" onClick={() => setShowSignup(false)}>
           Vous avez déjà un compte ?
         </a>
       </div>
     )}
   </div>
 );
};

export default FacebookAuth;
