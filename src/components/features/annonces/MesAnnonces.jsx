import React, { useEffect, useState, useCallback } from "react"; // Ajout de useCallback

export function MesAnnonces() {
  const [annonces, setAnnonces] = useState([]);
  const [loading, setLoading] = useState(true); // Ajout d'un état de chargement
  const [error, setError] = useState(null); // Ajout d'un état d'erreur

  // Utilisation de useCallback pour mémoriser la fonction supprimerAnnonce
  const supprimerAnnonce = useCallback((id) => {
    if (window.confirm("Confirmez-vous la suppression de cette annonce ?")) {
      try {
        const newAnnonces = annonces.filter((a) => a.id !== id);
        setAnnonces(newAnnonces);
        localStorage.setItem("annonces", JSON.stringify(newAnnonces));
        // Optionnel : Ajouter une notification de succès ici
      } catch (e) {
        console.error("Erreur lors de la suppression de l'annonce :", e);
        setError("Impossible de supprimer l'annonce. Veuillez réessayer.");
      }
    }
  }, [annonces]); // Dépendance à 'annonces'

  useEffect(() => {
    try {
      const stored = localStorage.getItem("annonces");
      if (stored) {
        setAnnonces(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Erreur lors de la récupération des annonces depuis localStorage :", e);
      setError("Erreur lors du chargement de vos annonces.");
    } finally {
      setLoading(false); // Fin du chargement
    }
  }, []); // Le tableau de dépendances vide assure que cela ne s'exécute qu'une fois au montage

  if (loading) {
    return (
      <div className="container py-5 text-center">
        <p>Chargement de vos annonces...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-5 text-center text-danger">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h2 className="mb-4">Mes Annonces</h2>

      {annonces.length === 0 ? (
        <p>Aucune annonce trouvée pour le moment.</p>
      ) : (
        <div className="row">
          {annonces.map(({ id, titre, prix, description, imageUrl }) => (
            <div key={id} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm"> {/* Ajout de shadow-sm pour une meilleure UI */}
                <img
                  src={imageUrl || "https://via.placeholder.com/400x250?text=Pas+d'image+disponible"} // Taille d'image légèrement ajustée
                  alt={titre || "Annonce sans titre"} // Ajout d'un alt par défaut
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/400x250?text=Image+introuvable"; }} // Gestion des erreurs d'image
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-truncate">{titre || "Titre non spécifié"}</h5> {/* Ajout de text-truncate et valeur par défaut */}
                  <p className="text-primary fw-bold mb-2">{prix ? `${parseFloat(prix).toLocaleString('fr-FR')} €` : "Prix non précisé"}</p> {/* Formatage du prix */}
                  {description && (
                    <p className="card-text text-muted mb-3" style={{ maxHeight: "4.5em", overflow: "hidden", textOverflow: "ellipsis" }}> {/* max-height augmenté pour plus de texte */}
                      {description}
                    </p>
                  )}
                  <button
                    onClick={() => supprimerAnnonce(id)}
                    className="btn btn-danger mt-auto w-100" // Bouton pleine largeur
                    aria-label={`Supprimer l'annonce ${titre}`} // Accessibilité
                  >
                    Supprimer l'annonce
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