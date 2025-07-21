import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCheckCircle, FaStar, FaCrown, FaCreditCard } from 'react-icons/fa'; // Importez d'autres icônes si besoin

export default function PremiumOffersPage() {
  const navigate = useNavigate();

  // Définissez vos offres premium ici
  const premiumPlans = [
    {
      name: "Boost Simple",
      price: "5 000 FCFA / 7 jours",
      features: [
        "Annonce en tête de liste pendant 24h",
        "1 photo supplémentaire",
        "Support prioritaire (Email)"
      ],
      icon: <FaStar className="me-2 text-warning" />,
      color: "border-warning",
      buttonText: "Activer le Boost",
      buttonVariant: "btn-warning"
    },
    {
      name: "Pack Visibilité",
      price: "15 000 FCFA / 30 jours",
      features: [
        "Annonce en tête de liste pendant 7 jours",
        "Jusqu'à 5 photos supplémentaires",
        "Statistiques de performance de l'annonce",
        "Support prioritaire (Chat)"
      ],
      icon: <FaRocket className="me-2 text-primary" />,
      color: "border-primary",
      buttonText: "Choisir ce Pack",
      buttonVariant: "btn-primary"
    },
    {
      name: "Ultra Premium",
      price: "40 000 FCFA / 90 jours",
      features: [
        "Annonce en tête de liste pendant 30 jours",
        "Photos illimitées",
        "Statistiques de performance avancées",
        "Support dédié 24/7 (Téléphone & Chat)",
        "Référencement SEO optimisé"
      ],
      icon: <FaCrown className="me-2 text-info" />,
      color: "border-info",
      buttonText: "Devenir Ultra Premium",
      buttonVariant: "btn-info"
    }
  ];

  return (
    <div className="premium-page py-5 bg-light min-vh-100 d-flex flex-column">
      <div className="container my-auto">
        <header className="text-center mb-5">
          <h1 className="display-4 fw-bold mb-3 text-dark">Découvrez nos Offres Premium</h1>
          <p className="lead text-muted max-w-700 mx-auto">
            Augmentez la visibilité de vos annonces et multipliez vos chances de vente grâce à nos plans exclusifs.
          </p>
        </header>

        <div className="row g-4 justify-content-center">
          {premiumPlans.map((plan, index) => (
            <div className="col-md-6 col-lg-4 d-flex" key={index}>
              <div className={`card h-100 shadow-lg border-2 ${plan.color} rounded-4 overflow-hidden`}>
                <div className="card-body p-4 d-flex flex-column">
                  <div className="text-center mb-4">
                    {plan.icon}
                    <h3 className="card-title fw-bold mt-2 mb-1">{plan.name}</h3>
                    <p className="text-muted mb-0">{plan.price}</p>
                  </div>
                  <ul className="list-unstyled flex-grow-1 mb-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="mb-2">
                        <FaCheckCircle className="text-success me-2" /> {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-center mt-auto">
                    <button
                      className={`btn ${plan.buttonVariant} btn-lg fw-bold px-4 py-2 w-100`}
                      onClick={() => alert(`Vous avez choisi l'offre : ${plan.name}. Redirection vers le paiement... (logique de paiement à implémenter)`)}
                    >
                      <FaCreditCard className="me-2" /> {plan.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5 pt-3">
          <button
            className="btn btn-outline-secondary btn-lg px-4"
            onClick={() => navigate('/')}
          >
            <i className="bi bi-arrow-left me-2"></i> Retour à l'accueil
          </button>
        </div>
      </div>
    </div>
  );
}