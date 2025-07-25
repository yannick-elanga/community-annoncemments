import { Link } from "react-router-dom";
import image1 from "/assets/image1.jpg";
import IMG2 from "/assets/IMG2.jpg";
import IMG19 from "/assets/IMG19.jpg";
import IMG20 from "/assets/IMG20.jpg";
import IMG16 from "/assets/IMG16.jpg";
import IMG17 from "/assets/IMG17.jpg";
import image2 from "/assets/image2.jpg";
import image3 from "/assets/image3.jpg";
import image4 from "/assets/image4.jpg";
import image5 from "/assets/image5.jpg";
import image10 from "/assets/image10.jpg";
/*import StateCard from "./component/state-card";*/
import StateCategories from "./component/state-categories";
import LatestAds from "./component/latest-ads";
import Features from "./component/Features";
import Partners from "./component/Partners";

import {
  Container,
  Row,
  Col,
  Card,
  Carousel,
  Button,
  Badge,
  ListGroup,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCar,
  faBriefcase,
  faHandshake,
  faMobileAlt,
  faGamepad,
  faSearch,
  faBullhorn,
  faEdit,
  faUsers,
  faExchangeAlt,
  faBullseye,
  faUserFriends,
  faStar,
  faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";
import StateCard from "./component/state-card";
import TestimonialsCarousel from "./component/TestimonialCarousel";
import { i } from "framer-motion/client";

export function Accueil() {
  const categories = [
    { name: "Immobilier", icon: faHome, count: 24500 },
    { name: "Véhicules", icon: faCar, count: 18700 },
    { name: "Emploi", icon: faBriefcase, count: 12300 },
    { name: "Services", icon: faHandshake, count: 9800 },
    { name: "Multimédia", icon: faMobileAlt, count: 15600 },
    { name: "Loisirs", icon: faGamepad, count: 8700 },
  ];

  const features = [
    {
      id: "publish",
      title: "Publiez vos annonces facilement",
      description:
        "Ajoutez rapidement des annonces pour vendre ou chercher ce dont vous avez besoin.",
      icon: faBullhorn,
    },
    {
      id: "manage",
      title: "Gérez vos annonces",
      description:
        "Modifiez, supprimez ou consultez vos annonces en toute simplicité.",
      icon: faEdit,
    },
    {
      id: "community",
      title: "Communauté active",
      description:
        "Participez aux discussions et retrouvez des offres exclusives.",
      icon: faUsers,
    },
    {
      id: "search",
      title: "Trouvez l'annonce parfaite",
      description:
        "Utilisez nos filtres avancés pour dénicher exactement ce que vous cherchez.",
      icon: faSearch,
    },
  ];

  const latestAds = [
    {
      id: 1,
      title: "Appartement T3 centre ville",
      price: "120 000",
      category: "Immobilier",
      imageUrl: image1,
      location: "Douala, Bonanjo",
      date: "Il y a 2 heures",
      isVerified: true,
    },
    {
      id: 2,
      title: "Voiture citadine occasion",
      price: "8 500",
      category: "Véhicules",
      imageUrl: IMG2,
      location: "Yaoundé, Bastos",
      date: "Il y a 5 heures",
      isVerified: false,
    },
    {
      id: 3,
      title: "Recherche développeur React",
      price: "Salaire compétitif",
      category: "Emploi",
      imageUrl: IMG19,
      location: "Remote",
      date: "Il y a 1 jour",
      isVerified: true,
    },
    {
      id: 4,
      title: "iPhone 13 Pro Max - Neuf",
      price: "450 000",
      category: "Multimédia",
      imageUrl: IMG20,
      location: "Bafoussam",
      date: "Il y a 3 jours",
      isVerified: true,
    },
  ];

  const testimonials = [
    {
      id: 1,
      quote:
        "TrouveToutCm a rendu la vente de ma voiture si simple ! J'ai eu des contacts rapidement.",
      author: "Sarah L.",
      role: "Vendeuse particulière",
      image: IMG16,
      rating: 5,
    },
    {
      id: 2,
      quote:
        "J'ai trouvé l'appartement de mes rêves grâce aux annonces immobilières. Interface très intuitive !",
      author: "Marc D.",
      role: "Acheteur immobilier",
      image: IMG17,
      rating: 4,
    },
    {
      id: 3,
      quote:
        "En tant que recruteur, cette plateforme m'a permis de trouver des talents qualifiés rapidement.",
      author: "Aïssa T.",
      role: "Responsable RH",
      image: image2,
      rating: 5,
    },
  ];

  const partners = [
    { id: 1, name: "Partner 1", logo: image3 },
    { id: 2, name: "Partner 2", logo: image4 },
    { id: 3, name: "Partner 3", logo: image10 },
    {
      id: 4,
      name: "Partner 4",
      logo: "https://via.placeholder.com/150x60?text=Partner+4",
    },
    {
      id: 5,
      name: "Partner 5",
      logo: "https://via.placeholder.com/150x60?text=Partner+5",
    },
  ];

  const stats = [
    { value: "150 000+", label: "Annonces actives", icon: faBullseye },
    { value: "50 000+", label: "Membres inscrits", icon: faUserFriends },
    { value: "10 000+", label: "Transactions par mois", icon: faExchangeAlt },
    { value: "95%", label: "Satisfaction clients", icon: faStar },
  ];

  return (
    <main className="main-content">
      {/* Hero Section */}
      <section className="hero-section bg-primary text-white py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <h1 className="display-4 fw-bold mb-3">
                Bienvenue sur <span className="text-warning">TrouveToutCm</span>
              </h1>
              <p className="lead mb-4">
                Votre plateforme de confiance pour des annonces simplifiées,
                rapides et efficaces au Cameroun.
              </p>

              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Que recherchez-vous aujourd'hui ?"
                  aria-label="Recherche rapide"
                />
                <Button variant="warning">
                  <FontAwesomeIcon icon={faSearch} className="me-2" />
                  Rechercher
                </Button>
              </InputGroup>

              <div className="d-flex flex-wrap gap-2">
                <Button
                  as={Link}
                  to="/publier-annonce"
                  variant="warning"
                  size="lg"
                >
                  Déposer une annonce gratuite
                </Button>
                <Button
                  as={Link}
                  to="/mes-annonces"
                  variant="outline-light"
                  size="lg"
                >
                  Explorer les annonces
                </Button>
              </div>
            </Col>
            <Col lg={6}>
              <img
                src={image5}
                alt="Plateforme d'annonces"
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5">Notre communauté en chiffres</h2>
          <Row>
            {stats.map((stat, index) => (
              <StateCard key={index} stat={stat} index={index} />
            ))}
          </Row>
        </Container>
      </section>

      {/* Categories Section */}
      <section
        className="py-5"
        style={{
          background: "linear-gradient(135deg, #0d6efd 0%, #6610f2 100%)",
        }}
      >
        <Container>
          <h2 className="text-center text-white mb-5">
            Explorez nos catégories phares
          </h2>
          <Row>
            {categories.map((category, index) => (
              <StateCategories key={index} category={category} index={index} />
            ))}
          </Row>
        </Container>
      </section>

      {/* Latest Ads Section */}
      <section className="py-5">
        <Container>
          <div className="d-flex justify-content-between align-items-center mb-5">
            <h2>Les dernières annonces</h2>
            <Button as={Link} to="/mes-annonces" variant="outline-primary">
              Voir toutes les annonces
            </Button>
          </div>

          <Row>
            {latestAds.map((ad) => (
              <LatestAds key={ad.id} ad={ad} />
            ))}
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5">Pourquoi choisir TrouveToutCm ?</h2>
          <Row>
            {features.map((feature) => (
              <Features key={feature.id} feature={feature} />
            ))}
          </Row>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-5">Ce que disent nos utilisateurs</h2>
          <TestimonialsCarousel testimonials={testimonials} />
        </Container>
      </section>

      {/* Partners Section */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5">Nos partenaires</h2>
          <Row className="justify-content-center align-items-center gy-4">
            {partners.map((partner) => (
              <Partners key={partner.id} partner={partner} />
            ))}
          </Row>
        </Container>
      </section>
    </main>
  );
}
