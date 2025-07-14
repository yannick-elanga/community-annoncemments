import React from 'react'; // Assurez-vous d'importer React

// Si vous avez un composant Link de React Router, importez-le ici :
// import { Link } from 'react-router-dom';

export default function Accueil() {
  // Optionnel: Stockez les catégories et les fonctionnalités dans des tableaux
  // pour les rendre plus faciles à gérer et à modifier.
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

  // Placeholder pour les dernières annonces (en réalité, elles viendraient d'une API)
  const latestAds = [
    { id: 1, title: 'Appartement T3 centre ville', price: '120 000 €', category: 'Immobilier', imageUrl: 'https://via.placeholder.com/300x200?text=Appartement' },
    { id: 2, title: 'Voiture citadine occasion', price: '8 500 €', category: 'Véhicules', imageUrl: 'https://via.placeholder.com/300x200?text=Voiture' },
    { id: 3, title: 'Recherche développeur React', price: 'CDI', category: 'Emploi', imageUrl: 'https://via.placeholder.com/300x200?text=Dev+React' },
  ];

  return (
    <main className="main-content" tabIndex={-1}>
      {/* Section d'introduction avec un arrière-plan visuel ou un carrousel */}
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="fade-in">Bienvenue sur <span className="app-name">MinimalFlux</span></h1>
          <p className="fade-in delay-1 lead-text">
            Votre plateforme de confiance pour des annonces simplifiées, rapides et efficaces.
          </p>
          {/* Barre de recherche intégrée directement dans le hero pour un accès rapide */}
          <div className="search-bar-hero fade-in delay-2">
            <input type="text" placeholder="Que recherchez-vous aujourd'hui ?" aria-label="Recherche rapide" />
            <button className="search-button" aria-label="Lancer la recherche"><i className="fas fa-search"></i></button>
          </div>
          <button className="cta-button fade-in delay-3">Déposer une annonce gratuitement</button>
        </div>
      </header>

      <hr className="divider" />

      {/* Section des statistiques clés pour rassurer et impressionner */}
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

      {/* Catégories populaires dynamiques avec icônes */}
      <section className="categories-section fade-in delay-5">
        <h2>Explorez nos catégories phares</h2>
        <ul className="categories-grid">
          {categories.map((category, index) => (
            <li key={index}>
              {/* Utiliser <Link to={category.link}> si React Router est configuré */}
              <a href={category.link} aria-label={`Explorer les annonces ${category.name}`}>
                <i className={`${category.icon} category-icon`}></i>
                <span>{category.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <hr className="divider" />

      {/* Section des dernières annonces pour montrer du contenu frais */}
      <section className="latest-ads-section fade-in delay-6">
        <h2>Les dernières annonces</h2>
        <div className="ads-grid">
          {latestAds.map(ad => (
            <article key={ad.id} className="ad-card" tabIndex={0}>
              <img src={ad.imageUrl} alt={ad.title} className="ad-image" />
              <div className="ad-info">
                <h3>{ad.title}</h3>
                <p className="ad-price">{ad.price}</p>
                <p className="ad-category">{ad.category}</p>
                {/* <Link to={`/ad/${ad.id}`} className="view-ad-button">Voir l'annonce</Link> */}
                <a href={`/ad/${ad.id}`} className="view-ad-button">Voir l'annonce</a>
              </div>
            </article>
          ))}
        </div>
        <div className="text-center">
            <button className="cta-button-secondary">Voir toutes les annonces</button>
        </div>
      </section>

      <hr className="divider" />

      {/* Section des fonctionnalités clés, enrichie avec plus de détails et d'icônes */}
      <section className="features-section fade-in delay-7">
        <h2>Pourquoi choisir MinimalFlux ?</h2>
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

      {/* Témoignages clients pour renforcer la confiance */}
      <section className="testimonials-section fade-in delay-8">
        <h2>Ce que nos utilisateurs disent</h2>
        <div className="testimonials-carousel">
          <div className="testimonial-card">
            <p>"MinimalFlux a rendu la vente de ma voiture si simple ! J'ai eu des contacts rapidement."</p>
            <cite>- Sarah L.</cite>
          </div>
          <div className="testimonial-card">
            <p>"J'ai trouvé l'appartement de mes rêves grâce aux annonces immobilières. Interface très intuitive !"</p>
            <cite>- Marc D.</cite>
          </div>
          {/* Ajoutez d'autres témoignages au besoin */}
        </div>
      </section>

      <hr className="divider" />

      {/* Section d'appel à l'action finale avec plus d'options */}
      <section className="call-to-action-footer fade-in delay-9">
        <h2>Prêt à simplifier vos échanges ?</h2>
        <p>Rejoignez la communauté MinimalFlux et découvrez la facilité de publier, chercher et gérer vos annonces.</p>
        <div className="cta-buttons-group">
          <button className="cta-button-primary">Créer un compte gratuit</button>
          <button className="cta-button-secondary">Parcourir les annonces</button>
        </div>
      </section>
    </main>
  );
}