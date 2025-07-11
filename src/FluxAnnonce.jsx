import React from 'react';
import Logo from './assets/logo.jpg';
// import './FluxAnnonce.css'; // Importation CSS séparée

export default function FluxAnnonce() {
  return (
    <>
      {/* Header */}
      <header className="site-header">
        <div className="header-left">
          <img src={Logo} alt="logo" className="logo" />
          <h1>MinimalFlux</h1>
        </div>

        <div className="header-right">
          <a href="form.html" className="add-annonce-button">➕ Ajouter une annonce</a>
          <input
            type="text"
            placeholder="Rechercher une annonce..."
            className="search-bar"
          />
        </div>
      </header>

      {/* Barre de navigation */}
      <nav className="nav-bar">
        <a href="accueil.html">🏠 Accueil</a>

        <div className="dropdown">
          <a href="index.html">📢 Flux des annonces ▼</a>
          <div className="dropdown-content">
            <a href="form.html">➕ Publier une annonce</a>
            <a href="#">📚 Catégories</a>
            <a href="#">👥 Communauté</a>
          </div>
        </div>

        <div className="dropdown">
          <a href="gestion-annonces.html">🛠️ Gestion des annonces ▼</a>
          <div className="dropdown-content">
            <a href="creer-annonce.html">➕ Créer une annonce</a>
            <a href="modifier-annonce.html">✏️ Modifier une annonce</a>
            <a href="supprimer-annonce.html">🗑️ Supprimer une annonce</a>
            <a href="mes-annonces.html">🔍 Voir mes annonces</a>
          </div>
        </div>

        <a href="profil.html">👤 Profil utilisateur</a>
        <a href="connexion.html">🔐 Connexion</a>
      </nav>

      {/* Contenu principal */}
      <main className="dashboard">
        <article className="card">
          <h2>Annonce 1</h2>
          <p>Contenu de la première annonce publiée.</p>
        </article>
        <article className="card">
          <h2>Annonce 2</h2>
          <p>Deuxième annonce publiée avec des informations importantes.</p>
        </article>
      </main>
    </>
  );
}
