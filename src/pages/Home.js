import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import '../styles/Home.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearchSubmit = () => {
    if (searchText.toLowerCase() === 'budgets') {
      navigate('/budgets');
    } else if (searchText.toLowerCase() === 'dépenses') {
      navigate('/expenses');
    } else if (searchText.toLowerCase() === 'épargne') {
      navigate('/savings');
    } else {
      alert("Page non trouvée pour cette recherche !");
    }
  };

  // Configuration du carrousel
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="home-container my-auto">
      {/* Header */}
      <header className="header flex justify-between items-center p-4 bg-blue-800 text-white mt-auto">
        <div className="logo font-bold text-xl"></div>
        <div className="ml-auto flex items-center">
          <input
            type="text"
            placeholder="Rechercher..."
            value={searchText}
            onChange={handleInputChange}
            className="search-bar w-64 mx-2 p-2 border rounded text-black"
          />
          <button
  onClick={handleSearchSubmit}
  className="cta-button bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
>
  Recherche
</button>

        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section text-white text-center py-20" style={{ backgroundImage: "url('https://img.freepik.com/premium-vector/stock-market-economic-graph-with-diagrams-business-financial-concepts-reports-abstract-technology-communication-concept-background_29865-1321.jpg?semt=ais_hybrid')", backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
        <h1 className="text-4xl font-semibold mb-4">Prenez le contrôle de vos finances</h1>
        <p className="text-lg mb-6">Suivez vos dépenses, gérez votre budget et économisez plus efficacement avec MoneyTrack.</p>
        <Link to="/auth">
          <button className="cta-button bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">Commencez dès maintenant</button>
        </Link>

        {/* Carrousel des images */}
        <div className="carousel-section py-10">
          <Slider {...sliderSettings}>
            {[
              "https://img.freepik.com/photos-premium/concept-entreprise-finance-epargne-banque-personnes-gros-plan-mains-femme-comptant-argent-dollars-americains_380164-142974.jpg?w=360",
              "https://media.gettyimages.com/id/1367899893/fr/photo/groupe-multiracial-et-diversifi%C3%A9-de-personnes-travaillant-avec-paperwork-sur-une-table-de.jpg?s=612x612&w=gi&k=20&c=V1vwM2kqNxO6T7UGTC43TLI_DWtT8IErut5ZRnfc9cg=",
              "https://www.finance-investissement.com/wp-content/uploads/sites/2/2024/09/human-resource-management-recruiting-hiring-hiring-people-concepts-human-resources-job.jpg_s1024x1024wisk20cLjVQ0Q80KS46JrjU27BRPpcoDYYJcy3l2WcNex9tzSo.jpg",
              "https://thumbs.dreamstime.com/z/les-mains-d-un-homme-noir-avec-de-l-argent-ou-paiement-en-esp%C3%A8ces-profit-du-commerce-finance-la-richesse-et-personne-riche-offre-263682906.jpg",
              "https://plus.unsplash.com/premium_photo-1681589451995-8b08c22c36d8?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFucXVlJTIwZXQlMjBmaW5hbmNlfGVufDB8fDB8fHww",
              "https://pouvoirsafrique.com//uploads/imported_images/uploads/2018/06/finance-afrique.jpg"
            ].map((imageUrl, index) => (
              <div key={index} className="px-2">
                <div className="h-[300px] w-full overflow-hidden">
                  <img
                    src={imageUrl}
                    alt={`Image ${index + 1}`}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section flex justify-around p-10">
        <div className="feature text-center max-w-xs">
          <img src="/images/expenses.png" alt="Suivi des dépenses" className="w-24 mx-auto mb-4" />
          <h2 className="text-xl font-medium">Suivi des dépenses</h2>
          <p>Gardez un œil sur vos dépenses mensuelles avec des graphiques clairs et précis.</p>
        </div>
        <div className="feature text-center max-w-xs">
          <img src="/images/budget.png" alt="Gestion de budget" className="w-24 mx-auto mb-4" />
          <h2 className="text-xl font-medium">Gestion de budget</h2>
          <p>Planifiez votre budget et atteignez vos objectifs financiers plus facilement.</p>
        </div>
        <div className="feature text-center max-w-xs">
          <img src="/images/savings.png" alt="Objectifs d'épargne" className="w-24 mx-auto mb-4" />
          <h2 className="text-xl font-medium">Objectifs d'épargne</h2>
          <p>Fixez des objectifs financiers et suivez vos progrès.</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section py-16 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Questions Fréquentes</h2>
          {[
            {
              question: "Comment MoneyTrack fonctionne-t-il ?",
              answer: "Notre application analyse automatiquement vos transactions et catégorise vos dépenses."
            },
            {
              question: "Est-ce sécurisé ?",
              answer: "Nous utilisons un cryptage de pointe pour protéger vos données personnelles."
            },
            {
              question: "L'application est-elle gratuite ?",
              answer: "Nous proposons une version de base gratuite et un abonnement premium avec des fonctionnalités avancées."
            }
          ].map((faq, index) => (
            <div key={index} className="mb-4 bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-xl mb-2">{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Statistics Section */}
      <section className="statistics-section bg-blue-50 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">MoneyTrack en chiffres</h2>
          <div className="flex justify-center space-x-10">
            {[
              { value: "50 000+", label: "Utilisateurs actifs" },
              { value: "3 M€", label: "Économies générées" },
              { value: "95%", label: "Satisfaction clients" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Ce que nos utilisateurs disent</h2>
          <div className="flex justify-center space-x-6">
            {[
              {
                name: "Sophie L.",
                text: "MoneyTrack m'a aidée à économiser 300 € en seulement 3 mois. Merci !",
                image: "https://randomuser.me/api/portraits/women/1.jpg"
              },
              {
                name: "Arnaud M.",
                text: "L'application est intuitive et m'aide à rester organisé.",
                image: "https://randomuser.me/api/portraits/men/2.jpg"
              },
              {
                name: "Claire D.",
                text: "Meilleure app pour suivre mes dépenses !",
                image: "https://randomuser.me/api/portraits/women/3.jpg"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md max-w-xs">
                <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mx-auto mb-4" />
                <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                <h3 className="font-semibold">{testimonial.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
