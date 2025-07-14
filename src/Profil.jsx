import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Profil() {
  const [userProfile, setUserProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    memberSince: "12/03/2023",
    location: "Yaoundé, Cameroun",
    phone: "+237 6XX XX XX XX",
    bio: "Passionné par les bonnes affaires et les échanges. N'hésitez pas à me contacter !",
    profilePicture: "https://via.placeholder.com/150/cccccc/ffffff?text=JD",
  });

  // ❌ On supprime useState et setUserAds
  // ✅ Déclaration simple :
  const userAds = [
    { id: 101, title: "Ancien vélo de course", price: "250 €", status: "Active", imageUrl: "https://via.placeholder.com/150x100?text=Velo" },
    { id: 102, title: "Console de jeux PS5", price: "400 €", status: "Vendue", imageUrl: "https://via.placeholder.com/150x100?text=PS5" },
    { id: 103, title: "Service de développement web", price: "Sur devis", status: "Active", imageUrl: "https://via.placeholder.com/150x100?text=DevWeb" },
  ];

  const [isEditing, setIsEditing] = useState(false);
  const [editedBio, setEditedBio] = useState(userProfile.bio);

  const handleEditProfile = () => setIsEditing(true);

  const handleSaveProfile = () => {
    setUserProfile({ ...userProfile, bio: editedBio });
    setIsEditing(false);
    alert("Profil mis à jour ! (Simulation)");
  };

  return (
    <main className="main-content" tabIndex={-1} style={{ marginTop: '112px' }}>
      <section className="profile-section fade-in">
        {/* En-tête du profil */}
        <div className="profile-header">
          <img
            src={userProfile.profilePicture}
            alt={`Photo de profil de ${userProfile.name}`}
            className="profile-picture"
          />
          <div className="profile-info-main">
            <h2 className="fade-in delay-1">{userProfile.name}</h2>
            <p className="fade-in delay-2">{userProfile.email}</p>
            <p className="fade-in delay-3">Membre depuis : {userProfile.memberSince}</p>
          </div>
        </div>

        {/* Détails du profil */}
        <div className="profile-details fade-in delay-4">
          <div className="profile-detail-card card">
            <h3>À propos de moi</h3>
            {isEditing ? (
              <>
                <textarea
                  value={editedBio}
                  onChange={(e) => setEditedBio(e.target.value)}
                  rows={4}
                  className="profile-bio-edit"
                />
                <button onClick={handleSaveProfile} className="cta-button">
                  Enregistrer
                </button>
              </>
            ) : (
              <>
                <p>{userProfile.bio}</p>
                <button onClick={handleEditProfile} className="cta-button">
                  Modifier le profil
                </button>
              </>
            )}
          </div>

          <div className="profile-detail-card card">
            <h3>Coordonnées</h3>
            <p><strong>Localisation :</strong> {userProfile.location}</p>
            {userProfile.phone && (
              <p><strong>Téléphone :</strong> {userProfile.phone}</p>
            )}
          </div>
        </div>

        <hr className="divider fade-in delay-5" />

        {/* Annonces utilisateur */}
        <section className="user-ads-section fade-in delay-6">
          <h2>Mes Annonces ({userAds.length})</h2>

          {userAds.length === 0 ? (
            <p className="no-ads-message">Vous n'avez pas encore publié d'annonces.</p>
          ) : (
            <div className="ads-grid user-ads-grid">
              {userAds.map((ad) => (
                <article key={ad.id} className="ad-card card" tabIndex={0}>
                  <img
                    src={ad.imageUrl}
                    alt={`Image de l'annonce: ${ad.title}`}
                    className="ad-image"
                  />
                  <div className="ad-info">
                    <h3>{ad.title}</h3>
                    <p className="ad-price">{ad.price}</p>
                    <p className={`ad-status ${ad.status.toLowerCase()}`}>
                      Statut : {ad.status}
                    </p>
                    <div className="ad-actions">
                      <Link to={`/modifier-annonce/${ad.id}`} className="cta-button">
                        Modifier
                      </Link>
                      <button
                        className="cta-button delete-ad-button"
                        onClick={() => alert(`Suppression de l'annonce ${ad.id} (simulation)`)}
                      >
                        Supprimer
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          <div className="text-center fade-in delay-7" style={{ marginTop: 'var(--space-xl)' }}>
            <Link to="/ajouter-annonce" className="cta-button-primary">
              ➕ Déposer une nouvelle annonce
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
