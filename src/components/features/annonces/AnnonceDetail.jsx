import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Card, Badge, Button, ListGroup, Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCalendarAlt, faTag, faPhone, faList, faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

import image1 from '/assets/image1.jpg';
import IMG2 from '/assets/IMG2.jpg';
import IMG19 from '/assets/IMG19.jpg';
import IMG20 from '/assets/IMG20.jpg';
import IMG3 from '/assets/IMG3.jpg';
import image9 from '/assets/image9.jpg';
import image8 from '/assets/image8.jpg';

export function AnnonceDetail() {
  const { id } = useParams();
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const latestAds = [
    {
      id: 1,
      title: 'Appartement T3 centre ville',
      price: '120 000',
      category: 'Immobilier',
      images: [image1, IMG3, image9],
      location: 'Douala, Bonanjo',
      date: 'Il y a 2 heures',
      isVerified: true,
      description: "Appartement lumineux au cœur de Douala avec 2 chambres, 1 salon et une cuisine équipée.",
      features: ['2 Chambres', '1 Salon', 'Cuisine équipée', 'Balcon'],
      contact: '+237 699 00 00 00'
    },
    {
      id: 2,
      title: 'Voiture citadine occasion',
      price: '8 500',
      category: 'Véhicules',
      images: [IMG2, image8],
      location: 'Yaoundé, Bastos',
      date: 'Il y a 5 heures',
      isVerified: false,
      description: "Petite voiture économique en parfait état, faible consommation.",
      features: ['Essence', 'Manuelle', 'Climatisation'],
      contact: '+237 678 00 00 00'
    },
    {
      id: 3,
      title: 'Recherche développeur React',
      price: 'Salaire compétitif',
      category: 'Emploi',
      images: [IMG19],
      location: 'Remote',
      date: 'Il y a 1 jour',
      isVerified: true,
      description: "Nous recherchons un développeur React expérimenté pour rejoindre notre équipe.",
      features: ['Télétravail', 'Temps plein', 'Expérience React'],
      contact: 'recrutement@entreprise.cm'
    },
    {
      id: 4,
      title: 'iPhone 13 Pro Max - Neuf',
      price: '450 000',
      category: 'Multimédia',
      images: [IMG20, IMG20],
      location: 'Bafoussam',
      date: 'Il y a 3 jours',
      isVerified: true,
      description: "iPhone 13 Pro Max neuf, jamais utilisé, avec accessoires complets.",
      features: ['128 Go', 'Couleur Graphite', 'Garantie 1 an'],
      contact: '+237 677 00 00 00'
    },
  ];

  const annonce = latestAds.find(ad => ad.id.toString() === id);

  if (!annonce) {
    return (
      <Container className="py-5 mt-5">
        <h3>Annonce non trouvée</h3>
        <Button as={Link} to="/" variant="primary">Retour à l'accueil</Button>
      </Container>
    );
  }

  const handleRating = (rate) => {
    setRating(rate);
    console.log(`Note donnée : ${rate}`);
  };

  return (
    <Container className="py-5 mt-5">
      <Row className="justify-content-center">
        <Col lg={10}>
          <Card className="shadow-sm border-0 rounded-4 p-4">
            <Row className="align-items-start">
              <Col md={6} className="mb-4 mb-md-0">
                <Carousel className="rounded-4 overflow-hidden shadow">
                  {annonce.images.map((img, index) => (
                    <Carousel.Item key={index}>
                      <img
                        src={img}
                        alt={`${annonce.title} ${index + 1}`}
                        className="d-block w-100"
                        style={{ objectFit: 'cover', height: '400px' }}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
              </Col>

              <Col md={6}>
                <h2 className="fw-bold mb-3">{annonce.title}</h2>
                <h4 className="text-primary fw-bold">
                  {annonce.price} {annonce.price !== 'Salaire compétitif' && 'FCFA'}
                </h4>
                {annonce.isVerified && <Badge bg="success" className="mb-2">Annonce Vérifiée</Badge>}
                <p className="mb-1"><FontAwesomeIcon icon={faHome} className="me-2 text-primary" />{annonce.location}</p>
                <p className="mb-1"><FontAwesomeIcon icon={faCalendarAlt} className="me-2 text-primary" />{annonce.date}</p>
                <p className="mb-3"><FontAwesomeIcon icon={faTag} className="me-2 text-primary" />{annonce.category}</p>

                <h5 className="mt-4 fw-semibold">Description</h5>
                <p className="text-muted">{annonce.description}</p>

                <h5 className="mt-4 fw-semibold">Caractéristiques</h5>
                <ListGroup variant="flush" className="mb-3">
                  {annonce.features.map((feature, idx) => (
                    <ListGroup.Item key={idx} className="ps-0 border-0">
                      <FontAwesomeIcon icon={faList} className="me-2 text-primary" />
                      {feature}
                    </ListGroup.Item>
                  ))}
                </ListGroup>

                <h5 className="mt-4 fw-semibold">Contact</h5>
                <p>
                  <FontAwesomeIcon icon={faPhone} className="me-2 text-primary" />
                  {annonce.contact}
                </p>

                <h5 className="mt-4 fw-semibold">Notez cette annonce</h5>
                <div className="d-flex mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FontAwesomeIcon
                      key={star}
                      icon={star <= (hoverRating || rating) ? solidStar : regularStar}
                      className="text-warning fs-3 me-2 pointer"
                      onClick={() => handleRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      style={{ cursor: 'pointer', transition: 'transform 0.2s' }}
                    />
                  ))}
                </div>

                <Button as={Link} to="/mes-annonces" variant="primary" className="mt-2">
                  Retour aux annonces
                </Button>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
