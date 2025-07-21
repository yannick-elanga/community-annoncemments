import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaBullhorn,
  FaRocket,
  FaChartLine,
  FaHandshake,
  FaArrowRight,
  FaShieldAlt,
  FaComments,
  FaMapMarkerAlt,
  FaStar,
  FaCheckCircle,
  FaUserTie,
  FaBriefcase,
  FaSearchDollar,
  FaFileAlt
} from "react-icons/fa";
import PropTypes from "prop-types";

// Configuration des services (version étendue)
const servicesData = [
  // Services existants
  {
    icon: <FaBullhorn />,
    title: "Publication d'annonces",
    description: "Publiez gratuitement vos annonces en quelques clics.",
    features: ["Gratuit", "Illimité", "Photos HD"],
    premium: false,
    color: "info",
    category: "general"
  },
  {
    icon: <FaRocket />,
    title: "Mise en avant Premium",
    description: "Boostez la visibilité de vos annonces.",
    features: ["En tête de liste", "+200% de visibilité", "Badge exclusif"],
    premium: true,
    color: "warning",
    category: "general"
  },

  // Nouveaux services pour le recrutement
  {
    icon: <FaUserTie />,
    title: "Offres d'emploi",
    description: "Publiez vos annonces de recrutement et trouvez les meilleurs talents.",
    features: ["CVthèque", "Alertes candidats", "Gestion multi-poste"],
    premium: false,
    color: "primary",
    category: "recruitment"
  },
  {
    icon: <FaBriefcase />,
    title: "Recrutement Premium",
    description: "Solutions avancées pour les professionnels du recrutement.",
    features: ["Annonces illimitées", "Classement prioritaire", "Statistiques détaillées"],
    premium: true,
    color: "danger",
    category: "recruitment"
  },
  {
    icon: <FaSearchDollar />,
    title: "Chasse de tête",
    description: "Notre équipe trouve pour vous les profils rares.",
    features: ["Recherche active", "Présélection", "Contact direct"],
    premium: true,
    color: "success",
    category: "recruitment"
  },
  {
    icon: <FaFileAlt />,
    title: "Gestion des candidatures",
    description: "Outils complets pour suivre vos processus de recrutement.",
    features: ["Tableau de bord", "Évaluation", "Workflow personnalisable"],
    premium: false,
    color: "secondary",
    category: "recruitment"
  }
];

// Composant de filtre
const ServiceFilter = ({ activeFilter, setActiveFilter }) => (
  <div className="mb-4 text-center">
    <div className="btn-group" role="group">
      <button 
        type="button" 
        className={`btn ${activeFilter === 'all' ? 'btn-primary' : 'btn-outline-primary'}`}
        onClick={() => setActiveFilter('all')}
      >
        Tous les services
      </button>
      <button 
        type="button" 
        className={`btn ${activeFilter === 'general' ? 'btn-primary' : 'btn-outline-primary'}`}
        onClick={() => setActiveFilter('general')}
      >
        Services généraux
      </button>
      <button 
        type="button" 
        className={`btn ${activeFilter === 'recruitment' ? 'btn-primary' : 'btn-outline-primary'}`}
        onClick={() => setActiveFilter('recruitment')}
      >
        Recrutement
      </button>
    </div>
  </div>
);

ServiceFilter.propTypes = {
  activeFilter: PropTypes.string.isRequired,
  setActiveFilter: PropTypes.func.isRequired
};

// Composant de carte de service (version améliorée)
const ServiceCard = ({ service }) => (
  <div className="col-md-6 col-lg-4 mb-4 service-card">
    <div className={`card h-100 border-0 shadow-sm overflow-hidden transition-all ${service.premium ? 'border border-2 border-warning' : ''}`}>
      <div className={`card-header bg-${service.color}-subtle py-3 d-flex align-items-center`}>
        <div className={`icon-wrapper text-${service.color} fs-3 me-3`}>
          {React.cloneElement(service.icon, { className: "d-block" })}
        </div>
        <h3 className="h5 card-title mb-0 fw-bold flex-grow-1">{service.title}</h3>
      </div>
      <div className="card-body d-flex flex-column">
        <p className="card-text text-muted mb-4">{service.description}</p>
        
        <ul className="list-unstyled mb-4">
          {service.features.map((feature, i) => (
            <li key={i} className="mb-2 d-flex align-items-start">
              <FaCheckCircle className={`text-${service.color} me-2 mt-1 flex-shrink-0`} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        {service.premium && (
          <div className="mt-auto text-center">
            <span className="badge rounded-pill bg-warning text-dark py-2 px-3 d-inline-flex align-items-center">
              <FaStar className="me-1" /> PREMIUM
            </span>
          </div>
        )}
      </div>
    </div>
  </div>
);

ServiceCard.propTypes = {
  service: PropTypes.object.isRequired
};

// Composant principal
export function Services() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = React.useState('all');

  const filteredServices = servicesData.filter(service => {
    if (activeFilter === 'all') return true;
    return service.category === activeFilter;
  });

  return (
    <section className="services-section py-5 bg-light">
      <div className="container">
        {/* En-tête amélioré */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold mb-3 text-dark">
            Nos Solutions Complètes
          </h1>
          <p className="lead text-muted mx-auto" style={{ maxWidth: "700px" }}>
            Des outils puissants pour vos transactions et votre recrutement
          </p>
        </div>

        {/* Filtres */}
        <ServiceFilter 
          activeFilter={activeFilter} 
          setActiveFilter={setActiveFilter} 
        />

        {/* Grille de services */}
        <div className="row g-4">
          {filteredServices.map((service, index) => (
            <ServiceCard 
              key={`service-${index}`} 
              service={service} 
            />
          ))}
        </div>

        {/* Call-to-action contextuel */}
        <div className="text-center mt-5 pt-4">
          <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
            {activeFilter === 'recruitment' ? (
              <>
                <button
                  className="btn btn-danger btn-lg px-4 py-3 fw-bold shadow"
                  onClick={() => navigate("/publier-offre")}
                >
                  <FaBriefcase className="me-2" />
                  Publier une offre d'emploi
                </button>
                <button
                  className="btn btn-outline-danger btn-lg px-4 py-3 fw-bold shadow-sm"
                  onClick={() => navigate("/recrutement-premium")}
                >
                  <FaRocket className="me-2" />
                  Solutions Entreprises <FaArrowRight className="ms-2" />
                </button>
              </>
            ) : (
              <>
                <button
                  className="btn btn-primary btn-lg px-4 py-3 fw-bold shadow"
                  onClick={() => navigate("/ajouter-annonce")}
                >
                  <FaBullhorn className="me-2" />
                  Publier une annonce
                </button>
                <button
                  className="btn btn-outline-primary btn-lg px-4 py-3 fw-bold shadow-sm"
                  onClick={() => navigate("/premium")}
                >
                  <FaStar className="me-2" />
                  Passer à Premium <FaArrowRight className="ms-2" />
                </button>
              </>
            )}
          </div>
          
          <p className="text-muted mt-3 small">
            {activeFilter === 'recruitment' 
              ? `${Math.floor(Math.random() * 200) + 50} talents trouvés cette semaine` 
              : `${Math.floor(Math.random() * 5000) + 1000} annonces publiées aujourd'hui`}
          </p>
        </div>
      </div>
    </section>
  );
}