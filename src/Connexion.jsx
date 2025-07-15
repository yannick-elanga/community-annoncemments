import React from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Connexion() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simule une connexion (ajoute plus tard une vraie vérification)
    localStorage.setItem("isAuthenticated", JSON.stringify(true));

    alert("Connexion réussie !");
    navigate("/profil");
  };

  return (
    <div className="container" style={{ marginTop: "150px", maxWidth: "400px" }}>
      <h2 className="mb-4 text-center">🔐 Connexion</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Email :</label>
          <input type="email" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Mot de passe :</label>
          <input type="password" className="form-control" required />
        </div>
        <button type="submit" className="btn btn-primary w-100">Se connecter</button>
      </form>
      <div className="text-center mt-3">
        <Link to="/">🏠 Retour à l'accueil</Link>
      </div>
    </div>
  );
}
