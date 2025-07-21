import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '/assets/image1.jpg'
import IMG2 from '/assets/IMG2.jpg'
import IMG19 from '/assets/IMG19.jpg'
import IMG20 from '/assets/IMG20.jpg'
import IMG16 from '/assets/IMG16.jpg'
import IMG17 from '/assets/IMG17.jpg'
import image2 from '/assets/image2.jpg'
import image3 from '/assets/image3.jpg'
import image4 from '/assets/image4.jpg'
import image5 from '/assets/image5.jpg'


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
  FormControl
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
  faQuoteLeft
} from '@fortawesome/free-solid-svg-icons';

export function Accueil() {
  const categories = [
    { name: 'Immobilier', icon: faHome, count: 24500 },
    { name: 'Véhicules', icon: faCar, count: 18700 },
    { name: 'Emploi', icon: faBriefcase, count: 12300 },
    { name: 'Services', icon: faHandshake, count: 9800 },
    { name: 'Multimédia', icon: faMobileAlt, count: 15600 },
    { name: 'Loisirs', icon: faGamepad, count: 8700 },
  ];

  const features = [
    {
      id: 'publish',
      title: 'Publiez vos annonces facilement',
      description: 'Ajoutez rapidement des annonces pour vendre ou chercher ce dont vous avez besoin.',
      icon: faBullhorn,
    },
    {
      id: 'manage',
      title: 'Gérez vos annonces',
      description: 'Modifiez, supprimez ou consultez vos annonces en toute simplicité.',
      icon: faEdit,
    },
    {
      id: 'community',
      title: 'Communauté active',
      description: 'Participez aux discussions et retrouvez des offres exclusives.',
      icon: faUsers,
    },
    {
      id: 'search',
      title: 'Trouvez l\'annonce parfaite',
      description: 'Utilisez nos filtres avancés pour dénicher exactement ce que vous cherchez.',
      icon: faSearch,
    },
  ];

  const latestAds = [
    { 
      id: 1, 
      title: 'Appartement T3 centre ville', 
      price: '120 000', 
      category: 'Immobilier', 
      imageUrl: image1,
      location: 'Douala, Bonanjo',
      date: 'Il y a 2 heures',
      isVerified: true
    },
    { 
      id: 2, 
      title: 'Voiture citadine occasion', 
      price: '8 500', 
      category: 'Véhicules', 
      imageUrl: IMG2,
      location: 'Yaoundé, Bastos',
      date: 'Il y a 5 heures',
      isVerified: false
    },
    { 
      id: 3, 
      title: 'Recherche développeur React', 
      price: 'Salaire compétitif', 
      category: 'Emploi', 
      imageUrl: IMG19,
      location: 'Remote',
      date: 'Il y a 1 jour',
      isVerified: true
    },
    { 
      id: 4, 
      title: 'iPhone 13 Pro Max - Neuf', 
      price: '450 000', 
      category: 'Multimédia', 
      imageUrl: IMG20,
      location: 'Bafoussam',
      date: 'Il y a 3 jours',
      isVerified: true
    },
  ];

  const testimonials = [
    {
      id: 1,
      quote: "TrouveToutCm a rendu la vente de ma voiture si simple ! J'ai eu des contacts rapidement.",
      author: "Sarah L.",
      role: "Vendeuse particulière",
      image: IMG16,
      rating: 5
    },
    {
      id: 2,
      quote: "J'ai trouvé l'appartement de mes rêves grâce aux annonces immobilières. Interface très intuitive !",
      author: "Marc D.",
      role: "Acheteur immobilier",
      image: IMG17,
      rating: 4
    },
    {
      id: 3,
      quote: "En tant que recruteur, cette plateforme m'a permis de trouver des talents qualifiés rapidement.",
      author: "Aïssa T.",
      role: "Responsable RH",
      image: image2,
      rating: 5
    }
  ];

  const partners = [
    { id: 1, name: 'Partner 1', logo: image3 },
    { id: 2, name: 'Partner 2', logo: image4 },
    { id: 3, name: 'Partner 3', logo: 'https://via.placeholder.com/150x60?text=Partner+3' },
    { id: 4, name: 'Partner 4', logo: 'https://via.placeholder.com/150x60?text=Partner+4' },
    { id: 5, name: 'Partner 5', logo: 'https://via.placeholder.com/150x60?text=Partner+5' },
  ];

  const stats = [
    { value: '150 000+', label: 'Annonces actives', icon: faBullseye },
    { value: '50 000+', label: 'Membres inscrits', icon: faUserFriends },
    { value: '10 000+', label: 'Transactions par mois', icon: faExchangeAlt },
    { value: '95%', label: 'Satisfaction clients', icon: faStar }
  ];

  return (
    <main className="main-content">
      {/* Hero Section */}
      <section className="hero-section bg-primary text-white py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <h1 className="display-4 fw-bold mb-3">Bienvenue sur <span className="text-warning">TrouveToutCm</span></h1>
              <p className="lead mb-4">
                Votre plateforme de confiance pour des annonces simplifiées, rapides et efficaces au Cameroun.
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
                <Button as={Link} to="/publier-annonce" variant="warning" size="lg">
                  Déposer une annonce gratuite
                </Button>
                <Button as={Link} to="/mes-annonces" variant="outline-light" size="lg">
                  Explorer les annonces
                </Button>
              </div>
            </Col>
            <Col lg={6}>
              <img 
                src= {image5} 
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
              <Col md={3} sm={6} key={index} className="mb-4 mb-md-0">
                <Card className="border-0 text-center h-100 bg-transparent">
                  <Card.Body>
                    <FontAwesomeIcon icon={stat.icon} className="text-primary mb-3" size="3x" />
                    <h3 className="fw-bold">{stat.value}</h3>
                    <p className="text-muted">{stat.label}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Categories Section */}
      <section className="py-5" style={{ background: "linear-gradient(135deg, #0d6efd 0%, #6610f2 100%)" }}>
        <Container>
          <h2 className="text-center text-white mb-5">Explorez nos catégories phares</h2>
          <Row>
            {categories.map((category, index) => (
              <Col lg={2} md={4} sm={6} key={index} className="mb-4">
                <Card as={Link} to="/mes-annonces" className="h-100 text-decoration-none hover-shadow">
                  <Card.Body className="text-center">
                    <FontAwesomeIcon icon={category.icon} className="text-primary mb-3" size="3x" />
                    <h5 className="text-dark">{category.name}</h5>
                    <Badge bg="secondary" pill>{category.count.toLocaleString()} annonces</Badge>
                  </Card.Body>
                </Card>
              </Col>
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
              <Col lg={3} md={6} key={ad.id} className="mb-4">
                <Card className="h-100 hover-shadow">
                  <div style={{ height: '200px', overflow: 'hidden' }}>
                    <Card.Img variant="top" src={ad.imageUrl} alt={ad.title} style={{ objectFit: 'cover', height: '100%' }} />
                  </div>
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-start">
                      <Card.Title>{ad.title}</Card.Title>
                      {ad.isVerified && <Badge bg="success">Vérifié</Badge>}
                    </div>
                    <Card.Text className="text-muted small mb-2">
                      <FontAwesomeIcon icon={faHome} className="me-1" /> {ad.location}
                    </Card.Text>
                    <Card.Text className="fw-bold text-primary h5 mb-3">
                      {ad.price} {ad.price !== 'Salaire compétitif' && 'FCFA'}
                    </Card.Text>
                    <div className="d-flex justify-content-between align-items-center">
                      <Badge bg="light" text="dark">{ad.category}</Badge>
                      <span className="text-muted small">{ad.date}</span>
                    </div>
                  </Card.Body>
                  <Card.Footer className="bg-transparent border-top-0">
                    <Button as={Link} to={`/annonce/${ad.id}`} variant="outline-primary" size="sm" className="w-100">
                      Voir les détails
                    </Button>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5">Pourquoi choisir TrouveToutCm ?</h2>
          <Row>
            {features.map(feature => (
              <Col lg={3} md={6} key={feature.id} className="mb-4">
                <Card className="h-100 border-0 bg-white shadow-sm">
                  <Card.Body className="text-center p-4">
                    <div className="icon-square bg-primary bg-opacity-10 text-primary rounded-circle mb-4 mx-auto" style={{ width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <FontAwesomeIcon icon={feature.icon} size="2x" />
                    </div>
                    <Card.Title>{feature.title}</Card.Title>
                    <Card.Text>{feature.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-5">Ce que disent nos utilisateurs</h2>
          <Carousel variant="dark" indicators={false} interval={5000}>
            {testimonials.map(testimonial => (
              <Carousel.Item key={testimonial.id}>
                <Row className="justify-content-center text-center">
                  <Col md={8}>
                    <blockquote className="blockquote">
                      <p className="mb-4 fst-italic">
                        <FontAwesomeIcon icon={faQuoteLeft} className="me-2 text-primary" />
                        {testimonial.quote}
                      </p>
                      <footer className="blockquote-footer d-flex align-items-center justify-content-center gap-3">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.author} 
                          className="rounded-circle" 
                          width={60} 
                          height={60} 
                          style={{ objectFit: 'cover' }}
                        />
                        <div>
                          <cite title={testimonial.author} className="fw-bold">{testimonial.author}</cite>
                          <br />
                          <small className="text-muted">{testimonial.role}</small>
                          <div className="mt-1 text-warning">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <FontAwesomeIcon icon={faStar} key={i} />
                            ))}
                          </div>
                        </div>
                      </footer>
                    </blockquote>
                  </Col>
                </Row>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      </section>

      {/* Partners Section */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5">Nos partenaires</h2>
          <Row className="justify-content-center align-items-center gy-4">
            {partners.map(partner => (
              <Col key={partner.id} xs={6} sm={4} md={2} className="d-flex justify-content-center">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  style={{ maxHeight: '60px', objectFit: 'contain' }} 
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </main>
  );
}
