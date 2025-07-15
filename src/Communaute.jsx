import React from "react";
import { Link } from "react-router-dom";

export default function Communaute() {
  return (
    <div className="container" style={{ marginTop: "150px", maxWidth: "700px" }}>
      <h2 className="mb-4 text-center">👥 Communauté</h2>
      
      <p>
        Bienvenue sur la page Communauté ! Ici, les membres peuvent partager des expériences,
        poser des questions, et échanger autour des annonces et bien plus.
      </p>

      <h4>Fonctionnalités à venir :</h4>
      <ul>
        <li>Forum de discussion</li>
        <li>Groupes thématiques</li>
        <li>Évènements en ligne</li>
        <li>Messagerie privée</li>
      </ul>

      <div className="text-center mt-4">
        <Link to="/" className="btn btn-secondary">🏠 Retour à l'accueil</Link>
      </div>
    </div>
  );
}
