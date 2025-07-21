import React from 'react';

export function FormulaireAnnonce() {
  return (
    <>
      <header><h2>Envoyer votre annonce</h2></header>
      
      <main>
        <form>
          <label htmlFor="title">Titre de l'annonce</label>
          <input type="text" id="title" name="title" required />

          <label htmlFor="content">Contenu de l'annonce</label>
          <textarea id="content" name="content" rows="5" required></textarea>

          <button type="submit">Soumettre</button>
        </form>
      </main>
  
    </>
  );
}