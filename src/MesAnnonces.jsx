import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function MesAnnonces() {
  const [annonces, setAnnonces] = useState([]);

  useEffect(() => {
    const savedAnnonces = JSON.parse(localStorage.getItem("annonces")) || [];
    setAnnonces(savedAnnonces);
  }, []);

  const supprimerAnnonce = (id) => {
    if (window.confirm("Confirmer la suppression de cette annonce ?")) {
      const nouvellesAnnonces = annonces.filter((a) => a.id !== id);
      setAnnonces(nouvellesAnnonces);
      localStorage.setItem("annonces", JSON.stringify(nouvellesAnnonces));
    }
  };

  return (
    <div className="container main-content">
      <h2 className="mb-4 text-center">📢 Mes Annonces</h2>

      {annonces.length === 0 ? (
        <p className="text-center">Vous n'avez pas encore publié d'annonces.</p>
      ) : (
        <div className="row">
          {annonces.map((annonce) => (
            <div className="col-md-4 mb-4" key={annonce.id}>
              <div className="card h-100 shadow-sm">
                <img
                  src={annonce.imageUrl}
                  className="card-img-top"
                  alt={annonce.titre}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{annonce.titre}</h5>
                  <p className="card-text">Prix: {annonce.prix}</p>
                  {annonce.description && (
                    <p className="card-text">{annonce.description}</p>
                  )}
                  <div className="mt-auto">
                    <Link
                      to={`/modifier-annonce/${annonce.id}`}
                      className="btn btn-primary btn-sm me-2"
                    >
                      Modifier
                    </Link>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => supprimerAnnonce(annonce.id)}
                    >
                      Supprimer
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="text-center mt-4">
        <Link to="/publier-annonce" className="btn btn-success">
          ➕ Publier une nouvelle annonce
        </Link>
      </div>
    </div>
  );
}
