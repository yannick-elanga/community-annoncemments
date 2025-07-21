import { Route } from "react-router-dom";
import { RootLayout } from "./components/layouts/root-layout";
import { Accueil, AjouterAnnonce, AllCategoriesPage, AnnonceDetail, CategorieDetails, Categories, Communaute, ConfirmationAnnonce, Connexion, MesAnnonces, Profil, PublierAnnonce ,Services} from "./components/features";


export default function App() {
  const routes = [
    { path: "/", element: <Accueil/> },
    { path: "/profil", element: <Profil /> },
    {
      path: "/ajouter-annonce",
      element: <AjouterAnnonce />,
    },
    {
      path: "/confirmation-annonce",
      element: <ConfirmationAnnonce />,
    },
    {
      path: "/connexion",
      element: <Connexion />,
    },
    {
      path: "/publier-annonce",
      element: <PublierAnnonce />,
    },
    { path: "/mes-annonces", element: <MesAnnonces /> },
    {
      path: "/categories",
      element: <Categories />,
    },
    {
      path: "/categories/:id",
      element: <CategorieDetails />,
    },
        {
      path: "/categories-publiques",
      element: <AllCategoriesPage />,
    },        {
      path: "/services",
      element: <Services />,
    },        {
      path: "/annonce/:id",
      element: <AnnonceDetail />,
    },
    {
      path: "/communaute",
      element: <Communaute />,
    },
  ];
  return (
    <RootLayout>
      {routes.map(e => (
        <Route path={e.path} element={e.element} />
      ))}
    </RootLayout>
  );
}

// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./Navbar";
// import Accueil from "./Accueil";
// import Profil from "./Profil";

// import ConfirmationAnnonce from './ConfirmationAnnonce';
// import AjouterAnnonce from './AjouterAnnonce';
// import PublierAnnonce from "./PublierAnnonce";
// import MesAnnonces from "./MesAnnonces";
// import Categories from "./Categories";
// import CategorieDetails from "./CategorieDetails";
// import Communaute from "./Communaute";
// import Footer from "./Footer";
// import AllCategoriesPage from './AllCategoriesPage'; // Le nouveau composant
// import Services from './Services';
// import AnnonceDetail from './AnnonceDetail';

