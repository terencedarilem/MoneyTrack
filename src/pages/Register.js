import axios from 'axios';
import React, { useState } from 'react';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('');
  const [birthDay, setBirthDay] = useState('');
  const [birthMonth, setBirthMonth] = useState('');
  const [birthYear, setBirthYear] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();  // Empêche la page de recharger
    try {
      const response = await axios.post('http://localhost:5000/api/users/register', {
        name,
        email,
        password,
        userType,  // Ajout de nouveaux champs si nécessaire
        birthDay,
        birthMonth,
        birthYear,
      });
      console.log('Inscription réussie:', response.data);  // Affiche la réponse dans la console
    } catch (error) {
      console.error('Erreur lors de l\'inscription:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Nom" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} />
      <input type="text" placeholder="Type d'utilisateur" value={userType} onChange={(e) => setUserType(e.target.value)} />
      <input type="text" placeholder="Jour de naissance" value={birthDay} onChange={(e) => setBirthDay(e.target.value)} />
      <input type="text" placeholder="Mois de naissance" value={birthMonth} onChange={(e) => setBirthMonth(e.target.value)} />
      <input type="text" placeholder="Année de naissance" value={birthYear} onChange={(e) => setBirthYear(e.target.value)} />
      <button type="submit">S'inscrire</button>
    </form>
  );
};

export default Register;
