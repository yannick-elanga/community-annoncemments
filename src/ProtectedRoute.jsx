import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isAuthenticated = localStorage.getItem("currentUser");
  
  if (!isAuthenticated) {
    return <Navigate to="/connexion" replace />;
  }

  return children;
}