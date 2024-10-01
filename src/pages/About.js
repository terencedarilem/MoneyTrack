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
          <img src="/images/expenses-tracking.png" alt="Suivi des dépenses" />
          <h3>Suivi des Dépenses</h3>
          <p>
            Gardez une trace de toutes vos transactions avec des graphiques simples et des rapports clairs. 
            Vous pouvez ainsi mieux comprendre où va votre argent chaque mois.
          </p>
        </div>
        <div className="about-feature">
          <img src="/images/budget-planning.png" alt="Planification de budget" />
          <h3>Planification de Budget</h3>
          <p>
            Créez un plan budgétaire personnalisé en fonction de vos objectifs financiers. 
            MoneyTrack vous aide à garder vos finances sur la bonne voie en vous fournissant des alertes et des analyses régulières.
          </p>
        </div>
        <div className="about-feature">
          <img src="/images/financial-goals.png" alt="Atteinte des objectifs financiers" />
          <h3>Atteinte des Objectifs</h3>
          <p>
            Fixez des objectifs financiers clairs et mesurez vos progrès au fil du temps. Que ce soit pour épargner ou rembourser vos dettes, 
            MoneyTrack vous aide à atteindre vos objectifs plus rapidement.
          </p>
        </div>
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
