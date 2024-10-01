import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="social-links">
        <h3>Suivez-nous</h3>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>

      <div className="partners">
        <h3>Nos Partenaires</h3>
        <img src="/images/visa-logo.png" alt="Visa" />
        <img src="/images/mastercard-logo.png" alt="MasterCard" />
        <img src="/images/paypal-logo.png" alt="PayPal" />
        <img src="/images/stripe-logo.png" alt="Stripe" />
      </div>

      <div className="footer-credits">
        <p>&copy; 2024 MoneyTrack. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
