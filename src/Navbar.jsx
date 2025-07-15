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

  const handleLogout = () => {
    // Supprime les infos de connexion
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("currentUser"); // si tu stockes l'utilisateur

    // Redirige vers la page de connexion
    navigate("/connexion");
  };

  return (
    <>
      {/* Header */}
      <header className="site-header">
        <div className="header-left">
          <img src={Logo} alt="logo" className="logo" />
          <h1>TrouveToutCm</h1>
        </div>

        <div className="header-right">
          <Link to="/ajouter-annonce" className="add-annonce-button">
            ➕ Ajouter une annonce
          </Link>

          {/* Barre de recherche fonctionnelle */}
          <form onSubmit={handleSearch} className="d-flex">
            <input
              type="text"
              placeholder="Rechercher une annonce..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-control me-2"
            />
            <button type="submit" className="btn btn-primary">
              🔍
            </button>
          </form>
        </div>
      </header>

      {/* Navbar */}
      <nav className="nav-bar">
        <Link to="/">🏠 Accueil</Link>

        <div className="dropdown">
          <button className="dropbtn">📢 Flux des annonces ▼</button>
          <div className="dropdown-content">
            <Link to="/publier-annonce">➕ Publier une annonce</Link>
            <Link to="/categories">📚 Catégories</Link>
            <Link to="/communaute">👥 Communauté</Link>
            <Link to="/mes-annonces">🔍 Voir mes annonces</Link>
          </div>
        </div>

        <Link to="/profil">👤 Profil utilisateur</Link>
        <Link to="/connexion">🔐 Connexion</Link>

        <button
          className="btn btn-outline-danger btn-sm ms-2"
          onClick={handleLogout}
        >
          🚪 Déconnexion
        </button>
      </nav>
    </>
  );
}

