import React from 'react';
import FluxAnnonce from './FluxAnnonce';
import FormulaireAnnonce from './FormulaireAnnonce';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <FluxAnnonce />
        <FormulaireAnnonce />
        {/* Remplace par <FormulaireAnnonce /> lorsque tu souhaites afficher uniquement le formulaire */}
      </main>
      
    </div>
  );
}

export default App;
