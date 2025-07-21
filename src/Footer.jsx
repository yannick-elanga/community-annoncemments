import React from "react";
import { Link } from "react-router-dom";
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light pt-5 pb-3">
      <div className="container">
        <div className="row g-4">
          {/* Colonne 1 - À propos */}
          <div className="col-lg-4 col-md-6">
            <div className="d-flex align-items-center mb-3">
              <img 
                src="/logo-light.png" 
                alt="TrouveToutCm Logo" 
                width="40" 
                height="40"
                className="me-2"
              />
              <h4 className="mb-0 text-primary fw-bold">TrouveToutCm</h4>
            </div>
            <p className="small">
              La plateforme camerounaise de référence pour trouver et publier des annonces en toute simplicité.
            </p>
            <div className="social-icons mt-4">
              <a href="#" className="text-light me-3" aria-label="Facebook">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-light me-3" aria-label="Twitter">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-light me-3" aria-label="Instagram">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-light me-3" aria-label="LinkedIn">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-light" aria-label="WhatsApp">
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>

          {/* Colonne 2 - Liens rapides */}
          <div className="col-lg-2 col-md-6">
            <h5 className="text-uppercase text-primary mb-4">Navigation</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-light text-decoration-none hover-primary">
                  Accueil
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/annonces" className="text-light text-decoration-none hover-primary">
                  Toutes les annonces
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/categories" className="text-light text-decoration-none hover-primary">
                  Catégories
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/recrutement" className="text-light text-decoration-none hover-primary">
                  Offres d'emploi
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/blog" className="text-light text-decoration-none hover-primary">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3 - Liens utiles */}
          <div className="col-lg-2 col-md-6">
            <h5 className="text-uppercase text-primary mb-4">Utilitaires</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/aide" className="text-light text-decoration-none hover-primary">
                  Centre d'aide
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/conditions" className="text-light text-decoration-none hover-primary">
                  Conditions d'utilisation
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/confidentialite" className="text-light text-decoration-none hover-primary">
                  Politique de confidentialité
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/faq" className="text-light text-decoration-none hover-primary">
                  FAQ
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="text-light text-decoration-none hover-primary">
                  Nous contacter
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 4 - Contact */}
          <div className="col-lg-4 col-md-6">
            <h5 className="text-uppercase text-primary mb-4">Contactez-nous</h5>
            <ul className="list-unstyled">
              <li className="mb-3 d-flex align-items-start">
                <FaMapMarkerAlt className="text-primary mt-1 me-2 flex-shrink-0" />
                <span>Rue 1.234, Quartier Bastos, Yaoundé, Cameroun</span>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <FaPhone className="text-primary me-2 flex-shrink-0" />
                <a href="tel:+237677777777" className="text-light text-decoration-none">
                  +237 677 77 77 77
                </a>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <FaEnvelope className="text-primary me-2 flex-shrink-0" />
                <a href="mailto:contact@trouvetoutcm.com" className="text-light text-decoration-none">
                  contact@trouvetoutcm.com
                </a>
              </li>
              <li className="d-flex align-items-center">
                <FaClock className="text-primary me-2 flex-shrink-0" />
                <span>Lun-Ven: 8h-18h | Sam: 9h-13h</span>
              </li>
            </ul>

            <div className="mt-4">
              <h6 className="text-uppercase text-primary mb-3">Newsletter</h6>
              <div className="input-group">
                <input 
                  type="email" 
                  className="form-control form-control-sm" 
                  placeholder="Votre email" 
                  aria-label="Email"
                />
                <button className="btn btn-primary btn-sm" type="button">
                  S'inscrire
                </button>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-4 border-secondary" />

        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <p className="small mb-0">
              &copy; {currentYear} TrouveToutCm. Tous droits réservés.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <p className="small mb-0">
              <a href="#" className="text-light text-decoration-none me-3">Paiements sécurisés</a>
              <a href="#" className="text-light text-decoration-none">Mentions légales</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}