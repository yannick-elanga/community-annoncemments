// AjouterAnnonce.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Ajouter la prop "onAnnonceAjoutee" (la fonction de rappel)
export default function AjouterAnnonce({ onAnnonceAjoutee }) {
  const [titre, setTitre] = useState('');
  const [description, setDescription] = useState('');
  const [prix, setPrix] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Créer un objet annonce (adaptez les champs à votre formulaire)
    const nouvelleAnnonce = { titre, description, prix };

    // Appeler la fonction de rappel (remonte les données à Accueil)
    onAnnonceAjoutee(nouvelleAnnonce);

    // Réinitialiser le formulaire (optionnel)
    setTitre('');
    setDescription('');
    setPrix('');

    // Rediriger ou afficher un message (comme avant)
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
            <input type="text" id="title" name="title" required maxLength="100" value={titre} onChange={(e) => setTitre(e.target.value)} />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea id="description" name="description" rows="5" required maxLength="1000" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="price">Prix (€)</label>
            <input type="number" id="price" name="price" min="0" step="0.01" value={prix} onChange={(e) => setPrix(e.target.value)} />
          </div>

          {/* ... (vos autres champs de formulaire) ... */}

          <button type="submit" className="cta-button-primary">Publier l'annonce</button>
        </form>
      </section>
    </main>
  );
}