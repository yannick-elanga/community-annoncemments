import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export function PublierAnnonce() {
  const navigate = useNavigate();

  // États pour les champs du formulaire
  const [titre, setTitre] = useState("");
  const [prix, setPrix] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!titre || !prix) {
      alert("Veuillez remplir au moins le titre et le prix.");
      return;
    }

    // Récupérer les anciennes annonces ou tableau vide
    const anciennesAnnonces = JSON.parse(localStorage.getItem("annonces")) || [];

    // Créer nouvelle annonce avec un id unique
    const nouvelleAnnonce = {
      id: Date.now(),
      titre,
      prix,
      description,
      imageUrl,
    };

    // Ajouter la nouvelle annonce à la liste existante
    const misesAJour = [...anciennesAnnonces, nouvelleAnnonce];

    // Sauvegarder dans localStorage
    localStorage.setItem("annonces", JSON.stringify(misesAJour));

    alert("Annonce publiée avec succès !");
    // Rediriger vers la page Mes Annonces
    navigate("/mes-annonces");
  };

  return (
    <div className="container" style={{ marginTop: "150px", maxWidth: "600px" }}>
      <h2 className="mb-4 text-center">➕ Publier une nouvelle annonce</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="titre" className="form-label">Titre</label>
          <input
            type="text"
            id="titre"
            className="form-control"
            value={titre}
            onChange={(e) => setTitre(e.target.value)}
            placeholder="Titre de l'annonce"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="prix" className="form-label">Prix</label>
          <input
            type="text"
            id="prix"
            className="form-control"
            value={prix}
            onChange={(e) => setPrix(e.target.value)}
            placeholder="Prix (ex: 150 €)"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea
            id="description"
            className="form-control"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description de l'annonce (optionnel)"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="imageUrl" className="form-label">URL de l'image</label>
          <input
            type="url"
            id="imageUrl"
            className="form-control"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="https://exemple.com/image.jpg (optionnel)"
          />
        </div>

        <button type="submit" className="btn btn-success w-100">
          Publier l'annonce
        </button>
      </form>
    </div>
  );
}
