import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap'; // <-- Ajouté ici

export default function Accueil() {
  const categories = [
    { name: 'Immobilier', icon: 'fas fa-home', link: '/categories/immobilier' },
    { name: 'Véhicules', icon: 'fas fa-car', link: '/categories/vehicules' },
    { name: 'Emploi', icon: 'fas fa-briefcase', link: '/categories/emploi' },
    { name: 'Services', icon: 'fas fa-handshake', link: '/categories/services' },
    { name: 'Multimédia', icon: 'fas fa-mobile-alt', link: '/categories/multimedia' },
    { name: 'Loisirs', icon: 'fas fa-gamepad', link: '/categories/loisirs' },
  ];

  const features = [
    {
      id: 'publish',
      title: 'Publiez vos annonces facilement',
      description: 'Ajoutez rapidement des annonces pour vendre ou chercher ce dont vous avez besoin.',
      icon: 'fas fa-bullhorn',
    },
    {
      id: 'manage',
      title: 'Gérez vos annonces',
      description: 'Modifiez, supprimez ou consultez vos annonces en toute simplicité.',
      icon: 'fas fa-edit',
    },
    {
      id: 'community',
      title: 'Communauté active',
      description: 'Participez aux discussions et retrouvez des offres exclusives.',
      icon: 'fas fa-users',
    },
    {
      id: 'search',
      title: 'Trouvez l\'annonce parfaite',
      description: 'Utilisez nos filtres avancés pour dénicher exactement ce que vous cherchez.',
      icon: 'fas fa-search',
    },
  ];

  const latestAds = [
    { id: 1, title: 'Appartement T3 centre ville', price: '120 000 ', category: 'Immobilier', imageUrl: 'https://via.placeholder.com/300x200?text=Appartement' },
    { id: 2, title: 'Voiture citadine occasion', price: '8 500 ', category: 'Véhicules', imageUrl: 'https://via.placeholder.com/300x200?text=Voiture' },
    { id: 3, title: 'Recherche développeur React', price: '', category: 'Emploi', imageUrl: 'https://via.placeholder.com/300x200?text=Dev+React' },
  ];

  return (
    <main className="main-content" tabIndex={-1}>
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="fade-in">Bienvenue sur <span className="app-name">TrouveToutCm</span></h1>
          <p className="fade-in delay-1 lead-text">
            Votre plateforme de confiance pour des annonces simplifiées, rapides et efficaces.
          </p>
          <div className="search-bar-hero fade-in delay-2">
            <input type="text" placeholder="Que recherchez-vous aujourd'hui ?" aria-label="Recherche rapide" />
            <button className="search-button" aria-label="Lancer la recherche">
              <i className="fas fa-search"></i>
            </button>
          </div>
          <Link to="/publier-annonce" className="cta-button fade-in delay-3">
            Déposer une annonce gratuitement
          </Link>
        </div>
      </header>

      <hr className="divider" />

      <section className="stats-section fade-in delay-4">
        <h2>Notre communauté en chiffres</h2>
        <div className="stats-grid">
          <div className="stat-item">
            <i className="fas fa-bullseye stat-icon"></i>
            <span className="stat-number">150 000+</span>
            <p className="stat-label">Annonces actives</p>
          </div>
          <div className="stat-item">
            <i className="fas fa-user-friends stat-icon"></i>
            <span className="stat-number">50 000+</span>
            <p className="stat-label">Membres inscrits</p>
          </div>
          <div className="stat-item">
            <i className="fas fa-exchange-alt stat-icon"></i>
            <span className="stat-number">10 000+</span>
            <p className="stat-label">Transactions par mois</p>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* Section catégories avec React Bootstrap */}
     <section
  className="categories-section py-5 fade-in delay-5"
  style={{
    background: "linear-gradient(135deg, #0d6efd 0%, #6610f2 100%)",
    color: "#fff",
  }}
>
  <Container>
    <h2 className="mb-4 text-center fw-bold">
      🌟 Explorez nos catégories phares
    </h2>
    <Row className="justify-content-center">
      {categories.map((category, index) => (
        <Col
          key={index}
          xs={6}
          sm={4}
          md={3}
          className="mb-4 d-flex justify-content-center"
        >
          <Link
            to={category.link}
            aria-label={`Explorer les annonces ${category.name}`}
            className="text-center rounded p-3 d-flex flex-column align-items-center category-link"
            style={{
              background: "#1c1f26",
              color: "#f8f9fa",
              width: "100%",
              maxWidth: "150px",
              textDecoration: "none",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
            }}
          >
            <i
              className={`${category.icon} mb-2`}
              style={{ fontSize: "2.5rem", color: "#0d6efd" }}
            ></i>
            <div className="fw-semibold">{category.name}</div>
          </Link>
        </Col>
      ))}
    </Row>
  </Container>
</section>


      <hr className="divider" />

      <section className="latest-ads-section fade-in delay-6">
  <h2>Les dernières annonces</h2>
  <div className="ads-grid">
    {latestAds.map((ad) => (
      <article key={ad.id} className="ad-card" tabIndex={0}>
        {/* ✅ Ici tu remplaces simplement ad.imageUrl par ton import local */}
        {ad.imageUrl && (
          <img
            src={ad.imageUrl}
            alt={ad.title}
            className="ad-image"
            style={{ objectFit: 'cover', width: '100%', height: '200px', borderRadius: '8px' }}
          />
        )}
        <div className="ad-info">
          <h3>{ad.title}</h3>
          <p className="ad-price">{ad.price} FCFA</p>
          <p className="ad-category">{ad.category}</p>
          <Link to={`/ad/${ad.id}`} className="view-ad-button">
            Voir l'annonce
          </Link>
        </div>
      </article>
    ))}
  </div>
  <div className="text-center mt-4">
  <div className="text-center mt-4">
  <Link to="/mesannonces" className="cta-button-secondary">
    Voir toutes les annonces
  </Link>
</div>

  </div>
</section>


      <hr className="divider" />

      <section className="features-section fade-in delay-7">
        <h2>Pourquoi choisir TrouveToutCm ?</h2>
        <div className="features-grid">
          {features.map(feature => (
            <div className="card" tabIndex={0} role="group" aria-labelledby={`feature-${feature.id}`} key={feature.id}>
              <i className={`${feature.icon} feature-icon`}></i>
              <h3 id={`feature-${feature.id}`}>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="divider" />

      <section className="testimonials-section fade-in delay-8">
        <h2>Ce que nos utilisateurs disent</h2>
        <div className="testimonials-carousel">
          <div className="testimonial-card">
            <p>"TrouveToutCm a rendu la vente de ma voiture si simple ! J'ai eu des contacts rapidement."</p>
            <cite>- Sarah L.</cite>
          </div>
          <div className="testimonial-card">
            <p>"J'ai trouvé l'appartement de mes rêves grâce aux annonces immobilières. Interface très intuitive !"</p>
            <cite>- Marc D.</cite>
          </div>
        </div>
      </section>

      <hr className="divider" />

      <section className="call-to-action-footer fade-in delay-9">
        <h2>Prêt à simplifier vos échanges ?</h2>
        <p>Rejoignez la communauté MinimalFlux et découvrez la facilité de publier, chercher et gérer vos annonces.</p>
        <div className="cta-buttons-group">
          <Link to="/inscription" className="cta-button-primary">Créer un compte gratuit</Link>
          <Link to="/annonces" className="cta-button-secondary">Parcourir les annonces</Link>
        </div>
      </section>
    </main>
  );
}
