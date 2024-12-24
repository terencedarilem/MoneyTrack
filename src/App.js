import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Budget from './pages/Budget';
import Reports from './pages/Reports';
import About from './pages/About';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import FacebookAuth from './components/FacebookAuth';
import '@fortawesome/fontawesome-free/css/all.css';
import { QRCodeCanvas } from 'qrcode.react';
import CarteVirtuelle from './components/CarteVirtuelle';

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Section d'en-tête */}
        <header className="header">
          <div className="logo">
            <Link to="/">
              <img src="/images/logo2.png" alt="MoneyTrack Logo" className="w-20 h-auto" />
              <span>Finetrack</span>
            </Link>
          </div>
      
          <nav className="nav">
            <ul>
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/dashboard">Tableau de Bord</Link></li>
              <li><Link to="/budget">Budget</Link></li>
              <li><Link to="/reports">Rapports</Link></li>
              <li><Link to="/about">À propos</Link></li>
              <li><Link to="/auth">Connexion</Link></li>
            </ul>
          </nav>
        </header>

        {/* Main Content Section */}
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/budget" element={<Budget />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/auth" element={<FacebookAuth />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/auth" element={<Login />} />

          </Routes>
        </main>

        {/* Footer Section */}
        <footer className="footer bg-dark text-white">
          <p>&copy; 2024 MoneyTrack. Tous droits réservés.</p>

          <div className="contact-info">
            <p><strong>Contactez-nous :</strong></p>
            <p>Téléphone : 784325670</p>
            <p>Email : <a href="mailto:terencedarilem@gmail.com" className="text-white">terencedarilem@gmail.com</a></p>
          </div>

          <div className="global-impact">
            <p><strong>Notre impact mondial :</strong></p>
            <p>MoneyTrack aide des milliers de personnes à mieux gérer leurs finances dans le monde entier.</p>
          </div>

          <nav>
            <Link to="/about" className="text-white">À propos</Link> | 
            <Link to="/privacy-policy" className="text-white">Politique de confidentialité</Link> | 
            <Link to="/terms" className="text-white">Conditions d'utilisation</Link> | 
            <Link to="/settings" className="text-white"><i className="fas fa-cog"></i></Link> | 
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white"><i className="fab fa-facebook-f"></i></a> | 
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white"><i className="fab fa-twitter"></i></a>
          </nav>

          <div className="partners">
            <h3>Nos Partenaires</h3>
            <div className="logos">
              <img 
                src="https://cdn.svgporn.com/logos/visa.svg" 
                alt="Logo Visa" 
                style={{ 
                  height: 40, 
                  width: 80, 
                  margin: 10, 
                  filter: 'brightness(0.6)' // Foncit l'image de Visa
                }} 
              />
              <img src="https://cdn.svgporn.com/logos/mastercard.svg" alt="Logo MasterCard" style={{ height: 40, width: 80, margin: 10 }} />
              <img src="https://cdn.svgporn.com/logos/paypal.svg" alt="Logo PayPal" style={{ height: 40, width: 80, margin: 10 }} />
              <img src="https://cdn.svgporn.com/logos/stripe.svg" alt="Logo Stripe" style={{ height: 40, width: 80, margin: 10 }} />
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
