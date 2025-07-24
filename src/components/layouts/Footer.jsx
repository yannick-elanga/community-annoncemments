import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const QUICK_LINKS = [
  { to: "/annonces", label: "Explorer les annonces" },
  { to: "/publier-annonce", label: "Publier une annonce" },
  { to: "/profil", label: "Mon profil" },
  { to: "/categories", label: "Toutes les catégories" },
  { to: "/a-propos", label: "À propos de nous" },
  { to: "/contact", label: "Nous contacter" },
  { to: "/faq", label: "FAQ et Aide" },
];

const SOCIAL_LINKS = [
  { 
    href: "https://facebook.com", 
    icon: faFacebookF, 
    label: "Suivez-nous sur Facebook",
    title: "Facebook",
    color: "hover:text-blue-500"
  },
  { 
    href: "https://instagram.com", 
    icon: faInstagram, 
    label: "Suivez-nous sur Instagram",
    title: "Instagram",
    color: "hover:text-pink-500"
  },
  { 
    href: "https://twitter.com", 
    icon: faTwitter, 
    label: "Suivez-nous sur Twitter",
    title: "Twitter",
    color: "hover:text-blue-400"
  },
  { 
    href: "https://linkedin.com", 
    icon: faLinkedinIn, 
    label: "Suivez-nous sur LinkedIn",
    title: "LinkedIn",
    color: "hover:text-blue-700"
  },
];

const LEGAL_LINKS = [
  { to: "/politique-confidentialite", label: "Politique de confidentialité" },
  { to: "/conditions-utilisation", label: "Conditions d'utilisation" },
];

export function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return alert("Veuillez entrer une adresse email valide.");
    alert(`Merci pour votre inscription, ${newsletterEmail} !`);
    setNewsletterEmail('');
  };

  return (
    <footer className="bg-gray-900 text-gray-200 pt-16 pb-8 mt-auto border-t border-gray-800">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">

        {/* Logo & Description */}
        <div>
          <Link to="/" className="inline-block mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded-md">
            <h3 className="text-yellow-400 text-4xl font-extrabold tracking-tight">TrouveToutCm</h3>
          </Link>
          <p className="text-sm leading-relaxed text-gray-400">
            Votre portail unique pour des annonces classées, rapides et fiables au Cameroun. Connectons les opportunités, simplifions la vie.
          </p>
          <p className="mt-4 text-xs text-gray-500 opacity-80">Trouvez. Vendez. Connectez. Partagez.</p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-yellow-400 text-xl font-bold mb-5 pb-2 border-b border-gray-700">Contactez-nous</h4>
          <address className="not-italic space-y-3 text-sm text-gray-400">
            <p className="flex items-start">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-yellow-400 mr-3 mt-1" />
              Douala, Cameroun<br />BP 255
            </p>
            <a href="tel:+2376XXXXXXXX" className="flex items-center hover:text-yellow-400 transition-transform transform hover:translate-x-1 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded-md">
              <FontAwesomeIcon icon={faPhone} className="mr-3 text-yellow-400" />
              +237 6 71592153
            </a>
            <a href="mailto:contact@trouvetoutcm.com" className="flex items-center hover:text-yellow-400 transition-transform transform hover:translate-x-1 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded-md">
              <FontAwesomeIcon icon={faEnvelope} className="mr-3 text-yellow-400" />
              contact@trouvetoutcm.com
            </a>
          </address>
        </div>

        {/* Navigation */}
        <nav aria-label="Liens de navigation du pied de page" className="text-sm">
          <h4 className="text-yellow-400 text-xl font-bold mb-5 pb-2 border-b border-gray-700">Navigation</h4>
          <ul className="space-y-3">
            {QUICK_LINKS.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="inline-block hover:text-yellow-400 transition-transform transform hover:translate-x-1 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded-md"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Newsletter & Réseaux sociaux */}
        <div>
          <h4 className="text-yellow-400 text-xl font-bold mb-5 pb-2 border-b border-gray-700">Restez Connecté</h4>
          <p className="mb-4 text-sm text-gray-400">
            Inscrivez-vous pour les dernières annonces, mises à jour et offres exclusives.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Votre adresse email"
              aria-label="Adresse email pour la newsletter"
              value={newsletterEmail}
              onChange={e => setNewsletterEmail(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-700 text-gray-100 placeholder-gray-400
                         focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent shadow-inner"
              required
            />
            <button
              type="submit"
              className="w-full bg-yellow-400 text-gray-900 font-bold py-3 rounded-lg
                         hover:bg-yellow-500 transition transform hover:scale-105
                         focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-gray-900 shadow-md"
            >
              S'inscrire
            </button>
          </form>
          <div className="mt-8 pt-4 border-t border-gray-700 flex space-x-6">
            {SOCIAL_LINKS.map(({ href, icon, label, title, color }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={title}
                className={`text-gray-400 transition-transform transform hover:scale-125 hover:rotate-3
                            focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded-full p-2 ${color}`}
              >
                <FontAwesomeIcon icon={icon} size="xl" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <hr className="border-gray-700 my-10" />

      {/* Copyright & Liens légaux */}
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
        <div className="text-center md:text-left mb-3 md:mb-0">
          &copy; {new Date().getFullYear()} TrouveToutCm. Tous droits réservés.
        </div>
        <nav aria-label="Liens légaux">
          <ul className="flex space-x-6">
            {LEGAL_LINKS.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="hover:text-yellow-400 transition focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded-md"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
