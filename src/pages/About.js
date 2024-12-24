import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h2>À propos de MoneyTrack</h2>
      <p>
        MoneyTrack est une application conçue pour vous aider à suivre et gérer vos finances en toute simplicité. 
        Que vous souhaitiez garder un œil sur vos dépenses, planifier un budget, ou atteindre vos objectifs financiers, 
        MoneyTrack est là pour vous offrir des outils efficaces et intuitifs.
      </p>
      
      <section className="about-features">
        <div className="about-feature">
          <img src="/images/expenses.png" alt="Suivi des dépenses" />
          <h3>Suivi des Dépenses</h3>
          <p>
            Gardez une trace de toutes vos transactions avec des graphiques simples et des rapports clairs. 
            Vous pouvez ainsi mieux comprendre où va votre argent chaque mois.
          </p>
        </div>
        <div className="about-feature">
          <img src="/images/budget.png" alt="Planification de budget" />
          <h3>Planification de Budget</h3>
          <p>
            Créez un plan budgétaire personnalisé en fonction de vos objectifs financiers. 
            MoneyTrack vous aide à garder vos finances sur la bonne voie en vous fournissant des alertes et des analyses régulières.
          </p>
        </div>
        <div className="about-feature">
          <img src="/images/SAVINGS.png" alt="Atteinte des objectifs financiers" />
          <h3>Atteinte des Objectifs</h3>
          <p>
            Fixez des objectifs financiers clairs et mesurez vos progrès au fil du temps. Que ce soit pour épargner ou rembourser vos dettes, 
            MoneyTrack vous aide à atteindre vos objectifs plus rapidement.
          </p>
        </div>
      </section>

      {/* Section Politique de Confidentialité */}
      <section className="privacy-policy">
        <h3>Politique de Confidentialité</h3>
        <p>
          Chez MoneyTrack, nous respectons votre vie privée et nous nous engageons à protéger vos informations personnelles. 
          Cette Politique de Confidentialité décrit comment nous recueillons, utilisons et partageons vos données lorsque vous utilisez notre service.
        </p>
        <ul>
          <li><strong>Collecte des informations :</strong> Nous recueillons des informations personnelles lorsque vous vous inscrivez, utilisez nos services ou interagissez avec notre site.</li>
          <li><strong>Utilisation des informations :</strong> Vos données sont utilisées pour améliorer nos services, personnaliser votre expérience, et vous fournir des informations pertinentes.</li>
          <li><strong>Partage des informations :</strong> Nous ne partageons pas vos informations personnelles avec des tiers, sauf pour respecter la loi ou avec votre consentement.</li>
          <li><strong>Sécurité des données :</strong> Nous mettons en place des mesures de sécurité pour protéger vos données contre tout accès non autorisé ou toute divulgation.</li>
        </ul>
        <p>
          En utilisant MoneyTrack, vous acceptez notre Politique de Confidentialité. Si vous avez des questions ou des préoccupations, n'hésitez pas à nous contacter.
        </p>
      </section>

      <footer className="about-footer">
        <p>
          Avec MoneyTrack, prenez le contrôle de vos finances et commencez à construire un avenir financier plus solide dès aujourd'hui !
        </p>
      </footer>
    </div>
  );
};

export default About;
