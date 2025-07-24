// src/components/PublicAds.jsx
import React from 'react';
import { FaHeart, FaEye, FaCommentDots } from 'react-icons/fa';

// Données d'exemple pour les annonces
const publicAdsData = [
  {
    id: 1,
    title: 'Offre d\'emploi - Développeur Web',
    description: 'Recherche développeur web full-stack expérimenté en React et Node.js.',
    image: 'https://via.placeholder.com/400x250/3b82f6/FFFFFF?text=Emploi+Web',
    category: 'Emploi',
    location: 'Douala',
    price: null,
    contact: 'contact@example.com',
    views: 120,
    likes: 30,
    comments: 5,
  },
  {
    id: 2,
    title: 'Consultation juridique gratuite',
    description: 'Bénéficiez d\'une première consultation gratuite avec un avocat qualifié.',
    image: 'https://via.placeholder.com/400x250/14b8a6/FFFFFF?text=Conseil+Juridique',
    category: 'Services',
    location: 'Yaoundé',
    price: 'Gratuit',
    contact: '+237 6XX XXX XXX',
    views: 85,
    likes: 15,
    comments: 2,
  },
  {
    id: 3,
    title: 'Formation en Marketing Digital',
    description: 'Apprenez les bases du marketing digital pour booster votre carrière.',
    image: 'https://via.placeholder.com/400x250/f97316/FFFFFF?text=Marketing+Digital',
    category: 'Formation',
    location: 'En ligne',
    price: '250.000 XAF',
    contact: 'info@formation.com',
    views: 90,
    likes: 20,
    comments: 3,
  },
];

const myAdsData = [
  {
    id: 101,
    title: 'Mon Annonce Perso - Designer UI/UX',
    description: 'Je propose mes services de designer UI/UX pour vos projets web et mobile.',
    image: 'https://via.placeholder.com/400x250/8b5cf6/FFFFFF?text=Mon+Service+UIUX',
    category: 'Services',
    location: 'Douala',
    price: 'Sur devis',
    contact: 'moi@monportfolio.com',
    views: 50,
    likes: 10,
    comments: 1,
  },
  {
    id: 102,
    title: 'Recherche stagiaire comptable',
    description: 'PME recherche stagiaire en comptabilité pour une durée de 6 mois.',
    image: 'https://via.placeholder.com/400x250/ef4444/FFFFFF?text=Stagiaire+Compta',
    category: 'Emploi',
    location: 'Yaoundé',
    price: null,
    contact: 'recrutement@mapme.com',
    views: 75,
    likes: 5,
    comments: 0,
  },
];

const getCategoryColor = (category) => {
  switch (category) {
    case 'Emploi':
      return 'bg-purple-500';
    case 'Services':
      return 'bg-teal-500';
    case 'Formation':
      return 'bg-orange-500';
    default:
      return 'bg-gray-500';
  }
};

const AdCard = ({ ad }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden animate-pop-in border border-gray-200 hover:shadow-xl transition-shadow duration-300">
    <img src={ad.image} alt={ad.title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <div className={`inline-block ${getCategoryColor(ad.category)} text-white text-xs font-semibold px-2 py-1 rounded-full mb-2`}>
        {ad.category}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{ad.title}</h3>
      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{ad.description}</p>
      <div className="flex items-center text-sm text-gray-500 mb-3">
        <span>{ad.location}</span>
        {ad.price && <span className="ml-4 font-semibold text-primary">{ad.price}</span>}
      </div>
      <div className="flex justify-between items-center text-gray-500 text-sm">
        <div className="flex items-center space-x-3">
          <span className="flex items-center">
            <FaEye className="mr-1" /> {ad.views}
          </span>
          <span className="flex items-center">
            <FaHeart className="mr-1 text-red-500" /> {ad.likes}
          </span>
          <span className="flex items-center">
            <FaCommentDots className="mr-1" /> {ad.comments}
          </span>
        </div>
        <button className="bg-primary text-white text-sm px-3 py-1 rounded-full hover:bg-primary-dark transition-colors duration-200">
          Voir l'annonce
        </button>
      </div>
    </div>
  </div>
);

const PublicAds = ({ type = 'public' }) => {
  const adsToDisplay = type === 'my' ? myAdsData : publicAdsData;
  const title = type === 'my' ? 'Mes Annonces' : 'Annonces Publiques Récentes';
  const description = type === 'my'
    ? 'Gérez et visualisez toutes les annonces que vous avez publiées.'
    : 'Découvrez les dernières annonces disponibles sur la plateforme.';

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-3">{title}</h2>
        <p className="text-lg text-gray-600 mb-8">{description}</p>

        {adsToDisplay.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {adsToDisplay.map((ad) => (
              <AdCard key={ad.id} ad={ad} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-md">
            <p className="text-xl text-gray-500">Aucune annonce disponible pour le moment.</p>
            {type === 'my' && (
              <button className="mt-6 bg-primary text-white font-semibold py-3 px-6 rounded-full hover:bg-primary-dark transition-colors duration-200 shadow-md">
                Publier une nouvelle annonce
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default PublicAds;