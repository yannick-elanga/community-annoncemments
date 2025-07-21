import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// Assurez-vous d'importer vos styles Bootstrap si nécessaire

export default function AllCategoriesPage() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Récupérer les catégories depuis le localStorage
    const storedCategories = localStorage.getItem('globalCategories');
    if (storedCategories) {
      setCategories(JSON.parse(storedCategories));
    }
    // Optionnel: Mettre en place un écouteur si les catégories peuvent changer
    // pendant que cette page est ouverte (nécessiterait plus de complexité
    // avec un contexte ou un système de gestion d'état global réel)
  }, []); // Exécuter une seule fois au montage du composant

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4 text-primary">Toutes nos Catégories d'Annonces</h2>
      <p className="text-center text-muted mb-5">
        Explorez toutes les catégories d'articles disponibles sur notre plateforme.
      </p>

      {categories.length === 0 ? (
        <div className="alert alert-info text-center" role="alert">
          Aucune catégorie n'est encore disponible. Revenez bientôt !
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {categories.map((category, index) => (
            <div className="col" key={index}>
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body text-center d-flex flex-column justify-content-center">
                  <i className="bi bi-tag-fill text-secondary mb-3" style={{ fontSize: '2.5rem' }}></i>
                  <h5 className="card-title text-dark">{category}</h5>
                  <p className="card-text text-muted small">
                    Découvrez les annonces dans la catégorie "{category}".
                  </p>
                  {/* Optionnel: Bouton pour naviguer vers les annonces de cette catégorie */}
                  <button
                    onClick={() => navigate(`/annonces?category=${category}`)}
                    className="btn btn-outline-primary btn-sm mt-3"
                  >
                    Voir les annonces
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="d-flex justify-content-center mt-5">
        <button onClick={() => navigate("/")} className="btn btn-info btn-lg px-4 shadow-sm">
          <i className="bi bi-house-door-fill me-2"></i> Retour à l'accueil
        </button>
      </div>
    </div>
  );
}