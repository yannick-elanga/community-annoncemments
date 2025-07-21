import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Accueil from "./Accueil";
import Profil from "./Profil";

import ConfirmationAnnonce from './ConfirmationAnnonce';
import AjouterAnnonce from './AjouterAnnonce';
import PublierAnnonce from "./PublierAnnonce";
import MesAnnonces from "./MesAnnonces";
import Categories from "./Categories";
import CategorieDetails from "./CategorieDetails";
import Communaute from "./Communaute";
import Footer from "./Footer";
import AllCategoriesPage from './AllCategoriesPage'; // Le nouveau composant
import Services from './Services';
import AnnonceDetail from './AnnonceDetail';


export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/ajouter-annonce" element={<AjouterAnnonce />} />
        <Route path="/confirmation-annonce" element={<ConfirmationAnnonce />} />
      
        <Route path="/publier-annonce" element={<PublierAnnonce />} />
        <Route path="/mes-annonces" element={<MesAnnonces />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:id" element={<CategorieDetails />} />
        <Route path="/communaute" element={<Communaute />} />
         <Route path="/categories-publiques" element={<AllCategoriesPage />} /> {/* NOUVELLE ROUTE */}
           <Route path="/services" element={<Services />} />
           <Route path="/annonce/:id" element={<AnnonceDetail />} />
        
        {/* Ajoute tes autres routes ici */}
      </Routes>
      <Footer /> {/* ✅ Déplacé en dehors de <Routes> */}
    </Router>
  );
}
