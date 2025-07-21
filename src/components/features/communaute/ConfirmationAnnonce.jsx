import React from 'react';
import { Link } from 'react-router-dom';

export function ConfirmationAnnonce() {
  return (
    <main className="main-content" tabIndex={-1} style={{ marginTop: '112px', padding: '2rem', textAlign: 'center' }}>
      <div className="confirmation-container">
        <i className="fas fa-check-circle confirmation-icon"></i>
        <h1 className="fade-in">Votre annonce a été publiée avec succès !</h1>
        <p className="fade-in delay-1">Elle est maintenant visible par les autres membres de la communauté MinimalFlux.</p>
        <div className="cta-buttons-group fade-in delay-2">
          <Link to="/" className="cta-button-primary">Retour à l'accueil</Link>
          <Link to="/mes-annonces" className="cta-button-secondary">Voir mes annonces</Link> {/* Route à créer */}
        </div>
      </div>
    </main>
  );
}