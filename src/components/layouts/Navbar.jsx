import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      navigate(`/mesannonces?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery(""); // optionnel pour vider la barre après recherche
    }
  };

  return (
    <>
      {/* Header */}
      <header className="site-header">
        <div className="header-left">
          <img src='assets/logo.png' alt="logo" className="logo" />
          <h1>TrouveToutCm</h1>
        </div>

        <div className="header-right">
          <Link to="/ajouter-annonce" className="add-annonce-button">
            ➕ Ajouter une annonce
          </Link>

          {/* Barre de recherche fonctionnelle */}
          <form onSubmit={handleSearch} className="d-flex ms-auto">
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
            <Link to="/mesannonces">🔍 Voir mes annonces</Link>
            <Link to="/categories-publiques">🔍 Catégories publiques</Link>
          </div>
        </div>

        <Link to="/profil">👤 Profil utilisateur</Link>
        <Link to="/services">🛠️ Services</Link>
         
      </nav>
    </>
  );
}
