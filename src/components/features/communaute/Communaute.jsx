import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Badge,
  ListGroup,
  Image,
} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUsers,
  faComments,
  faCalendarAlt,
  faEnvelope,
  faHome,
  faLightbulb,
  faHandsHelping,
  faNewspaper,
  faRocket,
  faUserTie,
  faHistory,
  faPlusCircle,
  faQuoteLeft, // New icon for testimonials
  faStar // Another icon for testimonials if needed
} from '@fortawesome/free-solid-svg-icons';

export function Communaute() {
  // Data for Upcoming Events (Future actions)
  const upcomingEvents = [
    { id: 1, title: "Webinar: Sécuriser vos transactions en ligne", date: "15 Juin 2025", type: "En ligne", link: "/evenement/1", attendees: "M. Jean Dupont (Expert en cybersécurité)" },
    { id: 2, title: "Rencontre des vendeurs et acheteurs à Douala", date: "22 Juin 2025", type: "Présentiel - Douala", link: "/evenement/2", attendees: "Mme. Marie Ndiaye (Top Vendeuse), M. Paul Etoa (Acheteur Actif)" },
    { id: 3, title: "Atelier: Maîtriser la photo d'annonce pro", date: "5 Juillet 2025", type: "En ligne", link: "/evenement/3", attendees: "Mme. Sophie Laurent (Photographe professionnelle)" },
    { id: 4, title: "Session Q&A en direct avec l'équipe support", date: "10 Juillet 2025", type: "En ligne", link: "/evenement/4", attendees: "L'équipe Support de TrouveToutCm" },
  ];

  // Data for Past Events (Past actions)
  const pastEvents = [
    { id: 101, title: "Lancement officiel de TrouveToutCm", date: "10 Jan 2024", type: "Hybride", description: "Célébration du lancement de la plateforme avec nos premiers utilisateurs et partenaires.", participants: "M. David Ngono (CEO), Dr. Fatou Camara (Développeuse en chef), les 100 premiers membres." },
    { id: 102, title: "Forum des métiers du digital", date: "28 Mars 2024", type: "Présentiel - Yaoundé", description: "Conférences et ateliers sur les opportunités d'emploi dans le numérique.", participants: "Divers experts en recrutement et professionnels du digital." },
    { id: 103, title: "Webinar: Optimiser votre profil vendeur", date: "12 Sept 2024", type: "En ligne", description: "Conseils pratiques pour maximiser votre visibilité et vos ventes sur la plateforme.", participants: "Mme. Laura Belinga (Responsable Communauté), nos vendeurs les plus performants." },
  ];

  // Data for Community Features
  const features = [
    {
      icon: faComments,
      title: "Forum de discussion",
      desc: "Discutez librement avec la communauté, partagez vos astuces et posez vos questions.",
      badge: { text: "Actif", variant: "success" },
      link: "/forum"
    },
    {
      icon: faCalendarAlt,
      title: "Événements & Ateliers",
      desc: "Participez à nos webinars, ateliers et rencontres physiques pour apprendre et réseauter.",
      badge: { text: "Régulier", variant: "info" },
      link: "/evenements"
    },
    {
      icon: faEnvelope,
      title: "Messagerie privée",
      desc: "Contactez directement d'autres membres en toute sécurité pour des échanges personnalisés.",
      badge: { text: "Bientôt", variant: "warning" },
      link: "#"
    },
    {
      icon: faHandsHelping,
      title: "Aide & Support",
      desc: "Trouvez des réponses à vos questions et obtenez de l'aide de la part de la communauté et de notre équipe.",
      badge: { text: "Essentiel", variant: "primary" },
      link: "/support"
    }
  ];

  // Data for Quick Links
  const quickLinks = [
    { id: 1, text: "Guides & Tutoriels", link: "/guides" },
    { id: 2, text: "Foire Aux Questions (FAQ)", link: "/faq" },
    { id: 3, text: "Règles de la Communauté", link: "/regles" },
    { id: 4, text: "Contacter l'Administration", link: "/contact" },
  ];

  // Data for Community Ambassadors/Key People
  const ambassadors = [
    { id: 1, name: "M. Pierre Ngono", role: "Ambassadeur Immobilier", description: "Expert en transactions immobilières et conseil, il a aidé 15 membres à trouver leur bien idéal.", avatar: "URL_IMAGE_PIERRE" },
    { id: 2, name: "Mme. Fatima Soro", role: "Modératrice Générale", description: "Garantit un environnement sain et sécurisé. Elle a résolu plus de 200 litiges en 2024.", avatar: "URL_IMAGE_FATIMA" },
    { id: 3, name: "Dr. Marc Owona", role: "Conseiller Véhicules", description: "Passionné d'automobile, il vous guide dans vos achats/ventes. Il a facilité 10 ventes de véhicules en un mois.", avatar: "URL_IMAGE_MARC" },
    { id: 4, name: "Mlle. Chantal Ekwalla", role: "Coordinatrice des Ateliers", description: "Organise nos formations en ligne et en présentiel. 5 ateliers réussis le mois dernier!", avatar: "URL_IMAGE_CHANTAL" },
  ];

  // New Data for Success Stories/Testimonials (Exchanges that have occurred)
  const testimonials = [
    {
      id: 1,
      name: "Jean-Pierre N.",
      location: "Yaoundé",
      avatar: "URL_IMAGE_JP",
      quote: "Grâce au forum, j'ai pu vendre ma voiture en moins d'une semaine ! Les conseils des autres membres sur les photos et la description ont été précieux.",
      item: "Voiture vendue",
      date: "Avril 2025"
    },
    {
      id: 2,
      name: "Martine K.",
      location: "Douala",
      avatar: "URL_IMAGE_MARTINE",
      quote: "J'avais des doutes sur l'authenticité d'un produit. Un ambassadeur m'a mise en contact avec un vérificateur indépendant. C'était très rassurant et professionnel.",
      item: "Conseil vérifié",
      date: "Mai 2025"
    },
    {
      id: 3,
      name: "Sylvain M.",
      location: "Bafoussam",
      avatar: "URL_IMAGE_SYLVAIN",
      quote: "J'ai trouvé mon stage grâce à une annonce postée dans la section 'Opportunités' du forum. La communauté est vraiment solidaire !",
      item: "Stage trouvé",
      date: "Juin 2025"
    },
    {
        id: 4,
        name: "Aïsha D.",
        location: "Kribi",
        avatar: "URL_IMAGE_AISHA",
        quote: "Le webinar sur la sécurité des transactions m'a donné toutes les clés pour acheter en toute confiance. Mon premier achat s'est passé sans accroc!",
        item: "Achat sécurisé",
        date: "Janvier 2025"
      },
  ];

  return (
    <Container className="py-5 main-content">
      {/* Hero Section: Engaging Welcome */}
      <Row className="align-items-center justify-content-center text-center text-md-start mb-5 py-4 bg-light rounded-3 shadow-sm">
        <Col md={10}>
          <h1 className="display-4 fw-bold text-primary mb-3">
            <FontAwesomeIcon icon={faUsers} className="me-3" />
            Rejoignez Notre Communauté Dynamique !
          </h1>
          <p className="lead text-muted mb-4">
            Connectez-vous, échangez et grandissez avec des milliers de membres passionnés. Que vous cherchiez des conseils, des partenaires, ou simplement à discuter, notre communauté est l'endroit idéal.
          </p>
          <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-md-start gap-3 mt-4">
            <Button as={Link} to="/inscription" variant="primary" size="lg" className="shadow-sm">
              <FontAwesomeIcon icon={faUsers} className="me-2" /> Nous rejoindre
            </Button>
            <Button as={Link} to="/forum" variant="outline-secondary" size="lg">
              <FontAwesomeIcon icon={faComments} className="me-2" /> Voir le Forum
            </Button>
          </div>
        </Col>
      </Row>

      <hr className="my-5" />

      {/* Main Features of the Community */}
      <section className="mb-5">
        <h2 className="text-center mb-5 fw-bold text-dark">
          <FontAwesomeIcon icon={faLightbulb} className="me-2 text-warning" />
          Découvrez nos Fonctionnalités Clés
        </h2>
        <Row className="g-4 justify-content-center">
          {features.map((feature, index) => (
            <Col key={index} xs={12} sm={6} lg={3}>
              <Card className="h-100 border-0 shadow-sm text-center feature-card">
                <Card.Body className="d-flex flex-column align-items-center justify-content-center p-4">
                  <div className="icon-circle bg-primary bg-opacity-10 text-primary mb-3">
                    <FontAwesomeIcon icon={feature.icon} size="2x" />
                  </div>
                  <h5 className="fw-bold mb-2">{feature.title}</h5>
                  <p className="text-muted flex-grow-1">{feature.desc}</p>
                  <Badge bg={feature.badge.variant} className="mt-2 py-2 px-3 fs-6">
                    {feature.badge.text}
                  </Badge>
                  {feature.link && feature.link !== "#" && (
                    <Button
                      as={Link}
                      to={feature.link}
                      variant="outline-primary"
                      size="sm"
                      className="mt-3 stretched-link"
                    >
                      En savoir plus
                    </Button>
                  )}
                  {feature.link === "#" && (
                     <Button
                       variant="outline-secondary"
                       size="sm"
                       className="mt-3"
                       disabled
                     >
                       Prochainement
                     </Button>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      <hr className="my-5" />

      {/* Community Activities Section (Past & Upcoming) */}
      <section className="mb-5">
        <h2 className="mb-5 text-center fw-bold text-success">
          <FontAwesomeIcon icon={faCalendarAlt} className="me-3" />
          Activités de la Communauté : Passées & Futures
        </h2>

        {/* Past Events Section */}
        <Card className="border-0 shadow-lg p-4 mb-5">
          <Card.Body>
            <h3 className="mb-4 text-center fw-bold text-muted">
              <FontAwesomeIcon icon={faHistory} className="me-2" /> Événements Passés
            </h3>
            {pastEvents.length > 0 ? (
              <ListGroup variant="flush">
                {pastEvents.map(event => (
                  <ListGroup.Item
                    key={event.id}
                    className="d-flex flex-column flex-md-row justify-content-between align-items-md-center py-3"
                  >
                    <div>
                      <h5 className="mb-1">{event.title}</h5>
                      <p className="mb-1 text-muted small">
                        <FontAwesomeIcon icon={faCalendarAlt} className="me-2" /> {event.date} - <Badge bg={event.type === "En ligne" ? "info" : "primary"}>{event.type}</Badge>
                      </p>
                      <p className="mb-0 small">{event.description}</p>
                      <p className="mb-0 small text-primary fw-semibold">
                        Participants Clés : {event.participants}
                      </p>
                    </div>
                    <Button variant="outline-secondary" size="sm" className="mt-3 mt-md-0" as={Link} to={`/evenement-passe/${event.id}`}>
                      <FontAwesomeIcon icon={faPlusCircle} className="me-1" /> Détails
                    </Button>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            ) : (
              <p className="text-center text-muted">Aucun événement passé enregistré pour le moment.</p>
            )}
          </Card.Body>
        </Card>

        {/* Upcoming Events Section */}
        <Card className="border-0 shadow-lg p-4">
          <Card.Body>
            <h3 className="mb-4 text-center fw-bold text-info">
              <FontAwesomeIcon icon={faCalendarAlt} className="me-2" /> Prochains Événements
            </h3>
            <ListGroup variant="flush">
              {upcomingEvents.length > 0 ? (
                upcomingEvents.map(event => (
                  <ListGroup.Item
                    key={event.id}
                    className="d-flex flex-column flex-md-row justify-content-between align-items-md-center py-3"
                  >
                    <div>
                      <h5 className="mb-1">{event.title}</h5>
                      <p className="mb-1 text-muted small">
                        <FontAwesomeIcon icon={faCalendarAlt} className="me-2" /> {event.date}
                      </p>
                      <p className="mb-0 small text-primary fw-semibold">
                        Intervenants : {event.attendees}
                      </p>
                    </div>
                    <div className="d-flex align-items-center mt-3 mt-md-0">
                      <Badge bg={event.type.includes("En ligne") ? "info" : "primary"} className="me-3 fs-6">
                        {event.type}
                      </Badge>
                      <Button variant="outline-primary" size="sm" as={Link} to={event.link}>
                        S'inscrire
                      </Button>
                    </div>
                  </ListGroup.Item>
                ))
              ) : (
                <ListGroup.Item className="text-center text-muted py-4">
                  Aucun événement planifié pour le moment. Restez connecté !
                </ListGroup.Item>
              )}
            </ListGroup>
            <div className="text-center mt-4">
              <Button variant="outline-primary" as={Link} to="/evenements" size="lg">
                <FontAwesomeIcon icon={faNewspaper} className="me-2" /> Voir Tous les Événements
              </Button>
            </div>
          </Card.Body>
        </Card>
      </section>

      <hr className="my-5" />

      {/* Success Stories / Testimonials Section (New Section) */}
      <section className="mb-5">
        <h2 className="text-center mb-5 fw-bold text-warning">
          <FontAwesomeIcon icon={faQuoteLeft} className="me-3" />
          Histoires de Succès et Témoignages
        </h2>
        <Row className="g-4 justify-content-center">
          {testimonials.map(testimonial => (
            <Col xs={12} sm={6} lg={3} key={testimonial.id}>
              <Card className="h-100 shadow-sm testimonial-card border-0">
                <Card.Body className="d-flex flex-column p-4">
                  <div className="d-flex align-items-center mb-3">
                    <Image
                      src={testimonial.avatar || "https://via.placeholder.com/60/cccccc/ffffff?text=User"}
                      roundedCircle
                      width="60"
                      height="60"
                      className="me-3 border border-2 border-info"
                      alt={testimonial.name}
                    />
                    <div>
                      <h5 className="fw-bold mb-0">{testimonial.name}</h5>
                      <p className="text-muted small mb-0">{testimonial.location}</p>
                    </div>
                  </div>
                  <Card.Text className="flex-grow-1 mb-3 fst-italic">
                    "{testimonial.quote}"
                  </Card.Text>
                  <div className="d-flex justify-content-between align-items-center small text-muted mt-auto">
                    <span><FontAwesomeIcon icon={faStar} className="text-warning me-1" /> {testimonial.item}</span>
                    <span>{testimonial.date}</span>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="text-center mt-5">
            <Button as={Link} to="/temoignages" variant="outline-warning" size="lg">
                <FontAwesomeIcon icon={faComments} className="me-2" /> Voir tous les témoignages
            </Button>
        </div>
      </section>

      <hr className="my-5" />

      {/* Meet Our Ambassadors Section (Key People) */}
      <section className="mb-5">
        <h2 className="text-center mb-5 fw-bold text-danger">
          <FontAwesomeIcon icon={faUserTie} className="me-3" />
          Rencontrez Nos Ambassadeurs
        </h2>
        <Row className="g-4 justify-content-center">
          {ambassadors.map(ambassador => (
            <Col xs={12} sm={6} md={4} key={ambassador.id}>
              <Card className="h-100 text-center border-0 shadow-sm ambassador-card">
                <Card.Body className="d-flex flex-column align-items-center p-4">
                  <Image
                    src={ambassador.avatar || "https://via.placeholder.com/100/007bff/ffffff?text=User"}
                    roundedCircle
                    width="100"
                    height="100"
                    className="mb-3 border border-3 border-primary"
                    alt={ambassador.name}
                  />
                  <Card.Title className="fw-bold mb-1">{ambassador.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{ambassador.role}</Card.Subtitle>
                  <Card.Text className="text-sm flex-grow-1">{ambassador.description}</Card.Text>
                  <Button variant="outline-info" size="sm" className="mt-3">
                    Contacter
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      <hr className="my-5" />

      {/* Quick Links / Resources Section */}
      <section className="mb-5">
        <h2 className="text-center mb-5 fw-bold text-secondary">
          <FontAwesomeIcon icon={faRocket} className="me-2" />
          Accès Rapide & Ressources
        </h2>
        <Row className="g-3 justify-content-center">
          {quickLinks.map(item => (
            <Col key={item.id} xs={12} sm={6} md={4}>
              <Card className="h-100 shadow-sm quick-link-card">
                <Card.Body className="d-flex align-items-center">
                  <FontAwesomeIcon icon={faHome} className="text-success me-3" size="lg" />
                  <Link to={item.link} className="stretched-link text-dark fw-semibold text-decoration-none">
                    {item.text}
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      <hr className="my-5" />

      {/* Final Call to Action */}
      <Card className="bg-primary text-white text-center mb-4 border-0 shadow-lg p-3 cta-card">
        <Card.Body className="p-5">
          <h3 className="display-6 fw-bold mb-3">Rejoignez l'aventure TrouveToutCm !</h3>
          <p className="lead mb-4">
            Ne manquez aucune opportunité d'échanger, d'apprendre et de faire de bonnes affaires. Votre place est parmi nous.
          </p>
          <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
            <Button as={Link} to="/inscription" variant="light" size="lg" className="shadow-sm">
              Créer un compte GRATUIT
            </Button>
            <Button as={Link} to="/connexion" variant="outline-light" size="lg">
              Déjà membre ? Connectez-vous
            </Button>
          </div>
        </Card.Body>
      </Card>

      {/* Back to Home Button */}
      <div className="text-center mt-5">
        <Button as={Link} to="/" variant="outline-secondary" size="lg">
          <FontAwesomeIcon icon={faHome} className="me-2" />
          Retour à l'accueil
        </Button>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .main-content {
          min-height: calc(100vh - 120px);
        }
        .feature-card, .quick-link-card, .ambassador-card, .testimonial-card {
          transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
        }
        .feature-card:hover, .quick-link-card:hover, .ambassador-card:hover, .testimonial-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
        }
        .icon-circle {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
        }
        .cta-card {
           background: linear-gradient(45deg, #0d6efd 0%, #6610f2 100%) !important;
        }
        .text-sm {
            font-size: 0.875rem;
        }
      `}</style>
    </Container>
  );
}