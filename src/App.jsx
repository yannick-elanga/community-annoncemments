import { Route } from "react-router-dom";
import { RootLayout } from "./components/layouts/root-layout";
import { Accueil, AjouterAnnonce, CategorieDetails, Categories, Communaute, ConfirmationAnnonce, Connexion, MesAnnonces, Profil, PublierAnnonce } from "./components/features";


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
