import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaBullhorn,
  FaRocket,
  FaUserTie,
  FaBriefcase,
  FaSearchDollar,
  FaFileAlt,
  FaEnvelopeOpenText,
  FaCalendarAlt,
  FaCheckCircle,
  FaStar,
  FaArrowRight,
  FaUsers,
  FaHandPointUp
} from "react-icons/fa";
import PropTypes from "prop-types";

// --- Données des services ---
const servicesData = [
  {
    id: 'annonces-gratuites',
    icon: <FaBullhorn className="text-blue-600" />,
    title: "Publication d'annonces",
    subTitle: "Mettez vos biens en valeur.",
    description: "Publiez gratuitement et facilement vos annonces pour toucher un large public d'acheteurs potentiels.",
    features: ["Gratuit à vie", "Photos HD illimitées", "Mises à jour instantanées", "Large portée"],
    premium: false,
    color: "blue",
    category: "general",
    buttonText: "Publier une annonce",
    buttonLink: "/formulaire-annonce",
    buttonIcon: <FaBullhorn />
  },
  {
    id: 'mise-en-avant',
    icon: <FaRocket className="text-yellow-600" />,
    title: "Mise en avant Premium",
    subTitle: "Accélérez vos ventes.",
    description: "Boostez la visibilité de vos annonces avec nos options Premium pour des résultats rapides et optimaux.",
    features: ["En tête de liste", "+200% de visibilité", "Badge exclusif Premium", "Support client prioritaire"],
    premium: true,
    color: "yellow",
    category: "general",
    buttonText: "Découvrir Premium",
    buttonLink: "/premium",
    buttonIcon: <FaStar />
  },
  {
    id: 'offres-emploi',
    icon: <FaUserTie className="text-purple-600" />,
    title: "Offres d'emploi",
    subTitle: "Trouvez les bons profils.",
    description: "Publiez vos offres d'emploi et accédez à une base de données qualifiée de candidats motivés.",
    features: ["Accès à la CVthèque", "Alertes candidats automatiques", "Gestion multi-poste", "Visibilité ciblée"],
    premium: false,
    color: "purple",
    category: "recruitment",
    buttonText: "Publier une offre",
    buttonLink: "/publier-offre",
    buttonIcon: <FaBriefcase />
  },
  {
    id: 'recrutement-pro',
    icon: <FaBriefcase className="text-red-600" />,
    title: "Recrutement Professionnel",
    subTitle: "Des solutions sur mesure.",
    description: "Nos solutions avancées sont conçues pour les entreprises ayant des besoins de recrutement complexes et volumineux.",
    features: ["Annonces illimitées", "Classement prioritaire des offres", "Statistiques de performance avancées", "Branding employeur renforcé"],
    premium: true,
    color: "red",
    category: "recruitment",
    buttonText: "Explorer les solutions Pro",
    buttonLink: "/recrutement-premium",
    buttonIcon: <FaRocket />
  },
  {
    id: 'chasse-tete',
    icon: <FaSearchDollar className="text-indigo-600" />,
    title: "Chasse de tête & Consulting",
    subTitle: "Expertise pour profils rares.",
    description: "Laissez notre équipe d'experts dénicher et présélectionner les talents les plus adaptés à vos exigences.",
    features: ["Recherche proactive et confidentielle", "Présélection rigoureuse des candidats", "Contact direct avec les profils ciblés", "Accompagnement personnalisé"],
    premium: true,
    color: "indigo",
    category: "recruitment",
    buttonText: "Demander un devis",
    buttonLink: "/contact-recrutement",
    buttonIcon: <FaSearchDollar />
  },
  {
    id: 'gestion-candidatures',
    icon: <FaFileAlt className="text-gray-600" />,
    title: "Gestion des candidatures",
    subTitle: "Optimisez votre processus.",
    description: "Des outils intuitifs pour centraliser, suivre et évaluer efficacement toutes vos candidatures.",
    features: ["Tableau de bord centralisé", "Outils d'évaluation intégrés", "Workflows de recrutement personnalisables", "Communication simplifiée"],
    premium: false,
    color: "gray",
    category: "recruitment",
    buttonText: "En savoir plus",
    buttonLink: "/gestion-candidatures",
    buttonIcon: <FaFileAlt />
  },
  {
    id: 'consultation-experts',
    icon: <FaEnvelopeOpenText className="text-teal-600" />,
    title: "Consultation Expert",
    subTitle: "Des conseils sur mesure.",
    description: "Bénéficiez d'une expertise personnalisée pour vos projets spécifiques, nos spécialistes vous guident.",
    features: ["Session individuelle d'une heure", "Analyse approfondie de vos besoins", "Plan d'action et recommandations", "Support post-consultation"],
    premium: true,
    color: "teal",
    category: "general",
    buttonText: "Prendre RDV",
    buttonLink: "/reserver-consultation",
    buttonIcon: <FaCalendarAlt />
  },
  {
    id: 'planification-rdv',
    icon: <FaCalendarAlt className="text-blue-500" />,
    title: "Planification de Rendez-vous",
    subTitle: "Gérez vos agendas facilement.",
    description: "Simplifiez l'organisation de vos rencontres professionnelles ou de vente grâce à notre système de planification.",
    features: ["Calendrier partagé intégré", "Notifications automatiques personnalisables", "Synchronisation multi-plateformes (Google, Outlook)", "Optimisation des créneaux"],
    premium: false,
    color: "lightBlue",
    category: "general",
    buttonText: "Essai gratuit",
    buttonLink: "/planification-rdv",
    buttonIcon: <FaHandPointUp />
  },
];

// Composant QuickActionButtons
const QuickActionButtons = ({ activeFilter, navigate }) => {
  const buttons = [
    {
      label: "Ajouter une annonce",
      icon: <FaBullhorn className="mr-2" />,
      onClick: () => navigate("/formulaire-annonce"),
      color: "blue",
      visible: activeFilter === 'all' || activeFilter === 'general'
    },
    {
      label: "Publier une offre",
      icon: <FaBriefcase className="mr-2" />,
      onClick: () => navigate("/publier-offre"),
      color: "red",
      visible: activeFilter === 'all' || activeFilter === 'recruitment'
    },
    {
      label: "Passer à Premium",
      icon: <FaStar className="mr-2" />,
      onClick: () => navigate("/premium"),
      color: "yellow",
      visible: true
    }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-8">
      {buttons.filter(btn => btn.visible).map((button, index) => (
        <button
          key={index}
          onClick={button.onClick}
          className={`px-6 py-3 rounded-lg font-medium flex items-center transition-colors duration-300
            ${button.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700 text-white' : 
              button.color === 'red' ? 'bg-red-600 hover:bg-red-700 text-white' :
              'bg-yellow-400 hover:bg-yellow-500 text-yellow-900'}
            shadow-md hover:shadow-lg transform hover:-translate-y-1`}
        >
          {button.icon}
          {button.label}
        </button>
      ))}
    </div>
  );
};

QuickActionButtons.propTypes = {
  activeFilter: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired
};

// --- Composant de filtre des services ---
const ServiceFilter = ({ activeFilter, setActiveFilter }) => (
  <div className="mb-8 text-center">
    <div className="inline-flex rounded-full shadow-lg overflow-hidden bg-white border border-gray-200 p-1">
      <FilterButton
        label="Tous les services"
        isActive={activeFilter === 'all'}
        onClick={() => setActiveFilter('all')}
      />
      <FilterButton
        label="Services Généraux"
        isActive={activeFilter === 'general'}
        onClick={() => setActiveFilter('general')}
      />
      <FilterButton
        label="Recrutement"
        isActive={activeFilter === 'recruitment'}
        onClick={() => setActiveFilter('recruitment')}
      />
    </div>
  </div>
);

// Sous-composant pour les boutons de filtre
const FilterButton = ({ label, isActive, onClick }) => (
  <button
    type="button"
    className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ease-in-out
      ${isActive ? 'bg-blue-600 text-white shadow-md' : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'}`}
    onClick={onClick}
  >
    {label}
  </button>
);

ServiceFilter.propTypes = {
  activeFilter: PropTypes.string.isRequired,
  setActiveFilter: PropTypes.func.isRequired
};

FilterButton.propTypes = {
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

// --- Composant de carte de service ---
const ServiceCard = ({ service, animationDelay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const colorClasses = {
    blue: 'bg-blue-50 text-blue-600',
    yellow: 'bg-yellow-50 text-yellow-600',
    purple: 'bg-purple-50 text-purple-600',
    red: 'bg-red-50 text-red-600',
    indigo: 'bg-indigo-50 text-indigo-600',
    gray: 'bg-gray-50 text-gray-600',
    teal: 'bg-teal-50 text-teal-600',
    lightBlue: 'bg-blue-50 text-blue-500'
  };

  return (
    <div 
      ref={cardRef} 
      className={`w-full sm:w-1/2 lg:w-1/3 p-4 transition-all duration-500 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: isVisible ? `${animationDelay}ms` : '0ms' }}
    >
      <div className={`
        bg-white h-full rounded-xl shadow-md overflow-hidden transition-all duration-300 ease-in-out
        transform hover:scale-[1.02] hover:shadow-xl
        flex flex-col border border-gray-200
        ${service.premium ? 'border-2 border-yellow-400' : ''}
      `}>
        {/* En-tête de la carte */}
        <div className={`${colorClasses[service.color]} py-5 px-6 flex items-center`}>
          <div className={`text-3xl mr-4 flex-shrink-0`}>
            {service.icon}
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-gray-800 leading-tight">{service.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{service.subTitle}</p>
          </div>
        </div>

        {/* Corps de la carte */}
        <div className="p-6 flex flex-col flex-grow">
          <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-grow">{service.description}</p>

          <ul className="list-none mb-6 space-y-2">
            {service.features.map((feature, i) => (
              <li key={i} className="flex items-start text-gray-700 text-sm">
                <FaCheckCircle className={`${colorClasses[service.color].split(' ')[1]} mr-2 mt-0.5 flex-shrink-0`} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-4">
            <button 
              onClick={() => navigate(service.buttonLink)}
              className={`w-full py-2 px-4 rounded-lg font-medium transition-colors duration-300
                ${service.premium 
                  ? 'bg-yellow-400 hover:bg-yellow-500 text-yellow-900' 
                  : `bg-${service.color}-600 hover:bg-${service.color}-700 text-white`}
                flex items-center justify-center`}
            >
              {service.buttonIcon && React.cloneElement(service.buttonIcon, { className: "mr-2" })}
              {service.buttonText}
            </button>

            {service.premium && (
              <div className="mt-2 text-center">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800">
                  <FaStar className="mr-1" /> PREMIUM
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.object.isRequired,
  animationDelay: PropTypes.number.isRequired,
};

// --- Composant principal Services ---
export function Services() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredServices = servicesData.filter(service => {
    if (activeFilter === 'all') return true;
    return service.category === activeFilter;
  });

  const getAnimationDelay = (index) => {
    return index * 100;
  };

  return (
    <section className="py-8 bg-gradient-to-br from-blue-50 to-indigo-50 min-h-screen font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* --- Section d'en-tête --- */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
            Nos Services <span className="text-blue-600">Professionnels</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choisissez parmi nos solutions complètes pour répondre à vos besoins spécifiques
          </p>
        </div>

        {/* --- Boutons d'action rapide --- */}
        <QuickActionButtons activeFilter={activeFilter} navigate={navigate} />

        {/* --- Filtres des services --- */}
        <ServiceFilter
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />

        {/* --- Grille des services --- */}
        {filteredServices.length > 0 ? (
          <div className="flex flex-wrap -mx-4">
            {filteredServices.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                animationDelay={getAnimationDelay(index)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-lg text-gray-500">Aucun service trouvé pour ce filtre.</p>
          </div>
        )}

        {/* --- Section d'appel à l'action final --- */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">
            Vous avez des questions sur nos services ?
          </h2>
          <button
            onClick={() => navigate("/contact")}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full shadow-lg
              transition-all duration-300 ease-in-out transform hover:scale-105
              inline-flex items-center"
          >
            Contactez notre équipe <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
}