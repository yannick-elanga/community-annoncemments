import React, { useEffect, useState } from "react";

export function MesAnnonces() {
  const [annonces, setAnnonces] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("annonces");
    if (stored) {
      setAnnonces(JSON.parse(stored));
    }
  }, []);

  const supprimerAnnonce = (id) => {
    if (window.confirm("Confirmer la suppression ?")) {
      const newAnnonces = annonces.filter((a) => a.id !== id);
      setAnnonces(newAnnonces);
      localStorage.setItem("annonces", JSON.stringify(newAnnonces));
    }
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4">Mes Annonces</h2>

      {annonces.length === 0 ? (
        <p>Aucune annonce trouvée.</p>
      ) : (
        <div className="row">
          {annonces.map(({ id, titre, prix, description, imageUrl }) => (
            <div key={id} className="col-md-4 mb-4">
              <div className="card h-100">
                <img
                  src={
                    imageUrl ||
                    "https://via.placeholder.com/300x200?text=Pas+d'image"
                  }
                  alt={titre}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{titre}</h5>
                  <p className="text-primary fw-bold">{prix || "Prix non précisé"}</p>
                  {description && (
                    <p className="text-truncate" style={{ maxHeight: "3em", overflow: "hidden" }}>
                      {description}
                    </p>
                  )}
                  <button
                    onClick={() => supprimerAnnonce(id)}
                    className="btn btn-danger mt-auto"
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
