import React, { useEffect, useState, useCallback } from "react";
import { FaTrash } from "react-icons/fa";

export function MesAnnonces() {
  const [annonces, setAnnonces] = useState([]);
  const [loading, setLoading] = useState(true);

  // Charger les annonces depuis localStorage
  useEffect(() => {
    const stored = localStorage.getItem("annonces");
    if (stored) {
      try {
        setAnnonces(JSON.parse(stored));
      } catch (e) {
        console.error("Erreur parsing annonces :", e);
        setAnnonces([]);
      }
    }
    setLoading(false);
  }, []);

  // Supprimer une annonce
  const supprimerAnnonce = useCallback((id) => {
    if (window.confirm("Confirmez-vous la suppression de cette annonce ?")) {
      const nouvellesAnnonces = annonces.filter((annonce) => annonce.id !== id);
      setAnnonces(nouvellesAnnonces);
      localStorage.setItem("annonces", JSON.stringify(nouvellesAnnonces));
    }
  }, [annonces]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 text-lg">Chargement des annonces...</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Mes Annonces Publiées</h2>

      {annonces.length === 0 ? (
        <div className="text-center text-gray-500">
          <p>Aucune annonce n'a été publiée pour le moment.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {annonces.map(({ id, titre, prix, description, imageUrl, categorie, location }) => (
            <div
              key={id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col"
            >
              <img
                src={imageUrl || "https://via.placeholder.com/400x250?text=Aucune+image"}
                alt={titre || "Annonce sans titre"}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <span className="inline-block bg-primary text-white text-xs px-2 py-1 rounded-full mb-2">
                  {categorie || "Sans catégorie"}
                </span>
                <h3 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-1">{titre || "Titre non spécifié"}</h3>
                <p className="text-primary font-bold mb-1">
                  {prix ? `${parseFloat(prix).toLocaleString()} €` : "Prix non précisé"}
                </p>
                <p className="text-gray-600 text-sm mb-2 line-clamp-2">{description || "Aucune description fournie."}</p>
                <p className="text-gray-400 text-xs mb-3">{location || "Lieu non spécifié"}</p>
                <button
                  onClick={() => supprimerAnnonce(id)}
                  className="mt-auto bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-2 rounded flex items-center justify-center transition-colors duration-200"
                >
                  <FaTrash className="mr-2" /> Supprimer l'annonce
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
