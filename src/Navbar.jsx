import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./assets/logo.jpg";
import "./index.css";

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      navigate(`/recherche?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <>
      {/* Header */}
      <header className="site-header">
        <div className="header-left">
          <img src={Logo} alt="logo" className="logo" />
          <h1>MinimalFlux</h1>
        </div>

        <div className="header-right">
          <Link to="/ajouter-annonce" className="add-annonce-button">
            ➕ Ajouter une annonce
          </Link>

          {/* Barre de recherche fonctionnelle */}
          <form onSubmit={handleSearch} className="search-form">
            <input
              type="text"
              placeholder="Rechercher une annonce..."
              className="search-bar"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-button">🔍</button>
          </form>
        </div>
      </header>

      {/* Navbar */}
      <nav className="nav-bar">
        <Link to="/">🏠 Accueil</Link>

        <div className="dropdown">
          <button className="dropbtn">📢 Flux des annonces ▼</button>
          <div className="dropdown-content">
            <Link to="/ajouter-annonce">➕ Publier une annonce</Link>
            <Link to="/categories">📚 Catégories</Link>
            <Link to="/communaute">👥 Communauté</Link>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn">🛠️ Gestion des annonces ▼</button>
          <div className="dropdown-content">
            <Link to="/creer-annonce">➕ Créer une annonce</Link>
            <Link to="/modifier-annonce">✏️ Modifier une annonce</Link>
            <Link to="/supprimer-annonce">🗑️ Supprimer une annonce</Link>
            <Link to="/mes-annonces">🔍 Voir mes annonces</Link>
          </div>
        </div>

        <Link to="/profil">👤 Profil utilisateur</Link>
        <Link to="/connexion">🔐 Connexion</Link>
      </nav>
    </>
  );
}
