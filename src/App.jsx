import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Accueil from "./Accueil";
import Profil from "./Profil";
import Connexion from "./Connexion";
import ConfirmationAnnonce from './ConfirmationAnnonce'; // Nouveau composant
import AjouterAnnonce from './AjouterAnnonce'; // Le nouveau composant pour ajouter une annonce
// etc.

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/profil" element={<Profil />} />
         <Route path="/ajouter-annonce" element={<AjouterAnnonce />} />
         <Route path="/confirmation-annonce" element={<ConfirmationAnnonce />} /> {/* Nouvelle route */}
        <Route path="/connexion" element={<Connexion />} />
        {/* Ajoute tes autres routes ici */}
      </Routes>
    </Router>
  );
}
