import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function AjouterAnnonce({ onAnnonceAjoutee }) {
  const [titre, setTitre] = useState('');
  const [description, setDescription] = useState('');
  const [prix, setPrix] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Créer un id simple (timestamp)
    const id = Date.now();

    // Nouvelle annonce complète
    const nouvelleAnnonce = { id, titre, description, prix, imageUrl: "https://via.placeholder.com/300" };

    // Récupérer les anciennes annonces depuis localStorage
    const anciennesAnnonces = JSON.parse(localStorage.getItem("annonces")) || [];

    // Ajouter la nouvelle annonce au tableau
    const misesAJour = [...anciennesAnnonces, nouvelleAnnonce];

    // Enregistrer dans localStorage
    localStorage.setItem("annonces", JSON.stringify(misesAJour));

    // Optionnel : appeler la fonction de rappel
    if (onAnnonceAjoutee) {
      onAnnonceAjoutee(nouvelleAnnonce);
    }

    // Réinitialiser le formulaire
    setTitre('');
    setDescription('');
    setPrix('');

    // Redirection
    navigate('/confirmation-annonce');
  };

  return (
    <main className="main-content" tabIndex={-1} style={{ marginTop: '112px', padding: '2rem' }}>
      <h1 className="fade-in">Déposer une nouvelle annonce</h1>
      <p className="fade-in delay-1">Remplissez les champs ci-dessous pour publier votre annonce.</p>

      <section className="fade-in delay-2 form-section">
        <form onSubmit={handleSubmit} className="ad-form">
          <div className="form-group">
            <label htmlFor="title">Titre de l'annonce</label>
            <input
              type="text"
              id="title"
              name="title"
              required
              maxLength="100"
              value={titre}
              onChange={(e) => setTitre(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              rows="5"
              required
              maxLength="1000"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="price">Prix (€)</label>
            <input
              type="number"
              id="price"
              name="price"
              min="0"
              step="0.01"
              value={prix}
              onChange={(e) => setPrix(e.target.value)}
            />
          </div>

          <button type="submit" className="cta-button-primary">
            Publier l'annonce
          </button>
        </form>
      </section>
    </main>
  );
}
