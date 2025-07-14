import React, { useState } from "react";
import { Link } from "react-router-dom"; // Pour les liens d'inscription/mot de passe oublié

export default function Connexion() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Pour afficher les messages d'erreur

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(""); // Réinitialiser l'erreur à chaque soumission

    // --- Simulation de la logique de connexion (sans backend) ---
    // En temps normal, vous enverriez ces données à votre API ici
    console.log("Tentative de connexion avec :", { email, password });

    if (email === "test@example.com" && password === "password123") {
      console.log("Connexion réussie !");
      // Ici, vous redirigeriez l'utilisateur ou stockeriez le token d'authentification
      alert("Connexion réussie ! (Simulation)");
      // Exemple de redirection après succès (nécessite useNavigate de react-router-dom)
      // import { useNavigate } from "react-router-dom";
      // const navigate = useNavigate();
      // navigate('/dashboard');
    } else {
      setError("Email ou mot de passe incorrect.");
      console.log("Échec de la connexion.");
    }
    // --- Fin de la simulation ---
  };

  return (
    <main className="main-content" tabIndex={-1} style={{ marginTop: '112px' }}> {/* Ajustez la marge pour le header/navbar */}
      <section className="auth-form-section fade-in">
        <h2 className="fade-in">Connexion à votre compte</h2>
        <p className="fade-in delay-1 auth-subtext">Accédez à vos annonces et gérez votre profil.</p>

        <form onSubmit={handleSubmit} className="auth-form fade-in delay-2">
          {error && <div className="error-message">{error}</div>} {/* Affichage des erreurs */}

          <div className="form-group">
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="votre.email@example.com"
              aria-describedby="email-help"
            />
            <small id="email-help" className="form-help-text">Nous ne partagerons jamais votre email.</small>
          </div>

          <div className="form-group">
            <label htmlFor="password">Mot de passe :</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              aria-describedby="password-help"
            />
            <Link to="/mot-de-passe-oublie" className="forgot-password-link">Mot de passe oublié ?</Link>
          </div>

          <button type="submit" className="cta-button-primary auth-submit-button">
            Se connecter
          </button>
        </form>

        <div className="auth-links fade-in delay-3">
          <p>Vous n'avez pas de compte ? <Link to="/inscription" className="cta-button-tertiary">Inscrivez-vous</Link></p>
        </div>
      </section>
    </main>
  );
}