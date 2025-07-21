import { Navigate } from "react-router-dom";

 function ProtectedRoute({ children }) {
  const isAuthenticated = localStorage.getItem("currentUser");
  
  if (!isAuthenticated) {
    return <Navigate to="/connexion" replace />;
  }

  return children;
}