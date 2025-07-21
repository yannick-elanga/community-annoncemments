import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import IMG7 from './assets/IMG7.jpg';
import IMG17 from './assets/IMG17.jpg';
import IMG16 from './assets/IMG16.jpg';
import IMG21 from './assets/IMG21.jpg';
import pp from './assets/Pp.jpg';

// Make sure you have Bootstrap and Bootstrap Icons linked in your project.
// For example, in public/index.html:
// <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
// <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">


export default function Profil() {
  const navigate = useNavigate();

  // MODIFIED: Initial categories are now global, not per user.
  // This will be treated as the source of truth for all categories.
  const [globalCategories, setGlobalCategories] = useState(() => {
    const storedCategories = localStorage.getItem('globalCategories');
    return storedCategories ? JSON.parse(storedCategories) : [
      "Électronique", "Véhicules", "Immobilier", "Services", "Mode", "Maison & Jardin", "Sports & Loisirs", "Livres", "Musique", "Autres"
    ];
  });

  const [users, setUsers] = useState([
    {
      id: uuidv4(),
      name: "John Doe",
      email: "john.doe@example.com",
      password: "1234",
      memberSince: "12/03/2023",
      location: "Yaoundé, Cameroun",
      phone: "+237 671 25 67 87",
      bio: "Passionné par les bonnes affaires et les échanges.",
      profilePicture: IMG17,
      ads: [
        { id: uuidv4(), title: "Vélo de course", price: "250 000 FCFA", status: "Active", imageUrl: IMG7, category: "Véhicules" }, // Added category
        { id: uuidv4(), title: "Ordinateur portable HP", price: "350 000 FCFA", status: "Active", imageUrl: IMG16, category: "Électronique" }, // Added category
      ],
      messages: [ // Example messages
        { id: uuidv4(), sender: "Alice Dupont", subject: "Question sur Vélo de course", content: "Bonjour, le vélo est-il toujours disponible ?", timestamp: "2025-07-15T10:00:00Z" },
        { id: uuidv4(), sender: "Bob Martin", subject: "Offre pour Ordinateur portable HP", content: "Je vous propose 300 000 FCFA pour l'ordinateur.", timestamp: "2025-07-14T15:30:00Z" },
      ],
      payments: [ // Example payments/transactions
        { id: uuidv4(), item: "Vélo de course", amount: "250 000 FCFA", date: "2025-07-10", type: "Reçu" },
        { id: uuidv4(), item: "Frais de publication", amount: "5 000 FCFA", date: "2025-07-01", type: "Payé" },
      ],
      // REMOVED: categories property from user object
    },
    {
      id: uuidv4(),
      name: "elanga yannick",
      email: "elangayannick29@gmail.com",
      password: "331999",
      memberSince: "12/03/2023",
      location: "Yaoundé, Cameroun",
      phone: "+237 671 25 67 87",
      bio: "Passionné par les bonnes affaires et les échanges.",
      profilePicture: IMG21,
      ads: [
        { id: uuidv4(), title: "Vélo de course", price: "250 000 FCFA", status: "Active", imageUrl: IMG7, category: "Véhicules" }, // Added category
        { id: uuidv4(), title: "souchi", price: "3 000 FCFA", status: "Active", imageUrl: pp, category: "Nourriture" }, // Added category
      ],
      messages: [],
      payments: [],
      // REMOVED: categories property from user object
    },
    {
      id: uuidv4(),
      name: "Alice Mbarga",
      email: "alice.mbarga@example.com",
      password: "abcd",
      memberSince: "05/06/2024",
      location: "Douala, Cameroun",
      phone: "+237 690 837 645",
      bio: "Je vends des articles électroniques d'occasion.",
      profilePicture: IMG16,
      ads: [
        { id: uuidv4(), title: "Imprimante Canon", price: "80 000 FCFA", status: "Active", imageUrl: IMG16, category: "Électronique" }, // Added category
        { id: uuidv4(), title: "Smartwatch", price: "60 000 FCFA", status: "Active", imageUrl: IMG7, category: "Électronique" }, // Added category
      ],
      messages: [],
      payments: [],
      // REMOVED: categories property from user object
    },
  ]);

  const [currentUser, setCurrentUser] = useState(() => {
    const storedUser = localStorage.getItem('currentUser');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState("");
  const [editedEmail, setEditedEmail] = useState("");
  const [editedPhone, setEditedPhone] = useState("");
  const [editedLocation, setEditedLocation] = useState("");
  const [editedBio, setEditedBio] = useState("");
  const [newAdTitle, setNewAdTitle] = useState("");
  const [newAdPrice, setNewAdPrice] = useState("");
  const [newAdStatus, setNewAdStatus] = useState("Active");
  const [newAdImageFile, setNewAdImageFile] = useState(null);
  const [newAdImagePreview, setNewAdImagePreview] = useState("");
  // NEW: State for selected category when adding a new ad
  const [newAdCategory, setNewAdCategory] = useState(globalCategories[0] || "");


  const [activeSection, setActiveSection] = useState('profile'); // 'profile', 'ads', 'categories', 'messages', 'payments'
  const [newCategoryName, setNewCategoryName] = useState("");


  useEffect(() => {
    if (currentUser) {
      setEditedName(currentUser.name);
      setEditedEmail(currentUser.email);
      setEditedPhone(currentUser.phone);
      setEditedLocation(currentUser.location);
      setEditedBio(currentUser.bio);
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
    }
  }, [currentUser]);

  // NEW: Save globalCategories to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('globalCategories', JSON.stringify(globalCategories));
  }, [globalCategories]);

  const handleLogin = () => {
    const foundUser = users.find(
      (u) => u.email === loginEmail && u.password === loginPassword
    );
    if (foundUser) {
      setCurrentUser(foundUser);
      setLoginError("");
      setLoginEmail("");
      setLoginPassword("");
    } else {
      setLoginError("Email ou mot de passe incorrect.");
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('currentUser');
  };

  const handleSaveProfile = () => {
    const updatedUsers = users.map((u) =>
      u.id === currentUser.id
        ? { ...u, name: editedName, email: editedEmail, phone: editedPhone, location: editedLocation, bio: editedBio }
        : u
    );
    setUsers(updatedUsers);
    setCurrentUser({ ...currentUser, name: editedName, email: editedEmail, phone: editedPhone, location: editedLocation, bio: editedBio });
    setIsEditing(false);
  };

  const handleAddAd = () => {
    if (!newAdTitle || !newAdPrice || !newAdImageFile || !newAdCategory) { // Added newAdCategory validation
      alert("Veuillez remplir tous les champs et ajouter une image pour l'annonce.");
      return;
    }

    // Use the image preview URL as the imageUrl for the ad
    // MODIFIED: Added category to the new ad object
    const newAd = { id: uuidv4(), title: newAdTitle, price: newAdPrice, status: newAdStatus, imageUrl: newAdImagePreview, category: newAdCategory };
    const updatedAds = [...currentUser.ads, newAd];
    const updatedUsers = users.map((u) =>
      u.id === currentUser.id ? { ...u, ads: updatedAds } : u
    );
    setUsers(updatedUsers);
    setCurrentUser({ ...currentUser, ads: updatedAds });
    setNewAdTitle("");
    setNewAdPrice("");
    setNewAdStatus("Active");
    setNewAdImageFile(null);
    setNewAdImagePreview("");
    setNewAdCategory(globalCategories[0] || ""); // Reset to first category or empty
  };

  const handleDeleteAd = (adId) => {
    const updatedAds = currentUser.ads.filter((ad) => ad.id !== adId);
    const updatedUsers = users.map((u) =>
      u.id === currentUser.id ? { ...u, ads: updatedAds } : u
    );
    setUsers(updatedUsers);
    setCurrentUser({ ...currentUser, ads: updatedAds });
  };

  // MODIFIED: handleAddCategory now adds to globalCategories
  const handleAddCategory = () => {
    const trimmedCategoryName = newCategoryName.trim();
    if (trimmedCategoryName === "") {
      alert("Le nom de la catégorie ne peut pas être vide.");
      return;
    }
    if (globalCategories.includes(trimmedCategoryName)) {
      alert("Cette catégorie existe déjà.");
      setNewCategoryName("");
      return;
    }
    setGlobalCategories([...globalCategories, trimmedCategoryName]);
    setNewCategoryName("");
  };

  // MODIFIED: handleDeleteCategory now removes from globalCategories
  const handleDeleteCategory = (categoryToDelete) => {
    // Prevent deleting if the category is used by any ad
    const isCategoryUsed = users.some(user =>
      user.ads.some(ad => ad.category === categoryToDelete)
    );

    if (isCategoryUsed) {
      alert(`Impossible de supprimer la catégorie "${categoryToDelete}" car elle est utilisée par une ou plusieurs annonces.`);
      return;
    }

    const updatedCategories = globalCategories.filter(cat => cat !== categoryToDelete);
    setGlobalCategories(updatedCategories);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewAdImageFile(file);
      setNewAdImagePreview(URL.createObjectURL(file));
    } else {
      setNewAdImageFile(null);
      setNewAdImagePreview("");
    }
  };


  if (!currentUser) {
    return (
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="card shadow p-4" style={{ maxWidth: '400px', width: '100%' }}>
          <h1 className="mb-4 text-center text-primary">Connexion</h1>
          <div className="mb-3">
            <label htmlFor="loginEmail" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="loginEmail"
              placeholder="votre.email@example.com"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="loginPassword" className="form-label">Mot de passe</label>
            <input
              type="password"
              className="form-control"
              id="loginPassword"
              placeholder="********"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
          </div>
          {loginError && <div className="alert alert-danger text-center">{loginError}</div>}
          <button onClick={handleLogin} className="btn btn-primary w-100 mt-3">
            Se connecter
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid py-4 min-vh-100 bg-light">
      {/* Dashboard Header - Only displays the title */}
      <div className="d-flex justify-content-between align-items-center mb-4 pb-2 border-bottom">
        <h2 className="text-dark"><i className="bi bi-speedometer2 me-2"></i> Tableau de bord</h2>
      </div>

      {/* Main Content: Sidebar and Content Area */}
      <div className="row g-4">
        {/* Sidebar Navigation */}
        <div className="col-md-3">
          <div className="card shadow-sm h-100 d-flex flex-column">
            <div className="card-body text-center p-4">
              <img
                src={currentUser.profilePicture}
                alt={currentUser.name}
                className="rounded-circle mb-3 border border-3 border-primary shadow"
                width={120}
                height={120}
                style={{ objectFit: 'cover' }}
              />
              <h5 className="mb-1 text-primary">{currentUser.name}</h5>
              <small className="text-muted">{currentUser.email}</small>
            </div>
            {/* Déconnexion button moved to the footer area */}
            <div className="list-group list-group-flush border-top">
              <button
                className={`list-group-item list-group-item-action py-3 ${activeSection === 'profile' ? 'active bg-primary text-white' : ''}`}
                onClick={() => setActiveSection('profile')}
              >
                <i className="bi bi-person-circle me-3 fs-5"></i> Mon Profil
              </button>
              <button
                className={`list-group-item list-group-item-action py-3 ${activeSection === 'ads' ? 'active bg-primary text-white' : ''}`}
                onClick={() => setActiveSection('ads')}
              >
                <i className="bi bi-megaphone me-3 fs-5"></i> Mes Annonces
              </button>
              <button
                className={`list-group-item list-group-item-action py-3 ${activeSection === 'categories' ? 'active bg-primary text-white' : ''}`}
                onClick={() => setActiveSection('categories')}
              >
                <i className="bi bi-tag me-3 fs-5"></i> Catégories
              </button>
              <button
                className={`list-group-item list-group-item-action py-3 ${activeSection === 'messages' ? 'active bg-primary text-white' : ''}`}
                onClick={() => setActiveSection('messages')}
              >
                <i className="bi bi-chat-dots me-3 fs-5"></i> Messagerie
              </button>
              <button
                className={`list-group-item list-group-item-action py-3 ${activeSection === 'payments' ? 'active bg-primary text-white' : ''}`}
                onClick={() => setActiveSection('payments')}
              >
                <i className="bi bi-credit-card me-3 fs-5"></i> Paiements
              </button>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="col-md-9">
          <div className="card shadow-sm p-4 h-100">
            {activeSection === 'profile' && (
              <div>
                <h3 className="mb-4 text-primary"><i className="bi bi-person-circle me-2"></i> Mon Profil</h3>
                <p className="text-muted border-bottom pb-2 mb-3">Gérez vos informations personnelles et vos coordonnées.</p>
                {isEditing ? (
                  <div>
                    <div className="mb-3">
                      <label htmlFor="editedName" className="form-label">Nom Complet</label>
                      <input type="text" className="form-control" id="editedName" value={editedName} onChange={(e) => setEditedName(e.target.value)} />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="editedEmail" className="form-label">Adresse Email</label>
                      <input type="email" className="form-control" id="editedEmail" value={editedEmail} onChange={(e) => setEditedEmail(e.target.value)} />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="editedPhone" className="form-label">Numéro de Téléphone</label>
                      <input type="text" className="form-control" id="editedPhone" value={editedPhone} onChange={(e) => setEditedPhone(e.target.value)} />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="editedLocation" className="form-label">Localisation</label>
                      <input type="text" className="form-control" id="editedLocation" value={editedLocation} onChange={(e) => setEditedLocation(e.target.value)} />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="editedBio" className="form-label">Biographie</label>
                      <textarea className="form-control" id="editedBio" rows="3" value={editedBio} onChange={(e) => setEditedBio(e.target.value)}></textarea>
                    </div>
                    <button onClick={handleSaveProfile} className="btn btn-success me-2"><i className="bi bi-save me-2"></i> Sauvegarder</button>
                    <button onClick={() => setIsEditing(false)} className="btn btn-secondary"><i className="bi bi-x-lg me-2"></i> Annuler</button>
                  </div>
                ) : (
                  <div>
                    <p className="mb-2"><strong>Nom :</strong> {currentUser.name}</p>
                    <p className="mb-2"><strong>Email :</strong> {currentUser.email}</p>
                    <p className="mb-2"><strong>Téléphone :</strong> {currentUser.phone}</p>
                    <p className="mb-2"><strong>Membre depuis :</strong> {currentUser.memberSince}</p>
                    <p className="mb-2"><strong>Localisation :</strong> {currentUser.location}</p>
                    <p className="mb-4"><strong>Bio :</strong> {currentUser.bio}</p>
                    <button
                      onClick={() => setIsEditing(true)}
                      className="btn btn-primary"
                    >
                      <i className="bi bi-pencil-square me-2"></i> Modifier mon Profil
                    </button>
                  </div>
                )}
              </div>
            )}

            {activeSection === 'ads' && (
              <div>
                <h3 className="mb-4 text-primary"><i className="bi bi-megaphone me-2"></i> Mes Annonces</h3>
                <p className="text-muted border-bottom pb-2 mb-3">Gérez vos annonces publiées et ajoutez de nouvelles offres.</p>

                {/* Add New Ad Form */}
                <div className="card mb-4 p-3 border-primary-subtle bg-light">
                  <h4 className="mb-3 text-primary-emphasis"><i className="bi bi-plus-circle me-2"></i> Publier une nouvelle annonce</h4>
                  <div className="mb-3">
                    <label htmlFor="newAdTitle" className="form-label">Titre de l'annonce</label>
                    <input type="text" className="form-control" id="newAdTitle" placeholder="Ex: Vélo de course presque neuf" value={newAdTitle} onChange={(e) => setNewAdTitle(e.target.value)} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="newAdPrice" className="form-label">Prix</label>
                    <input type="text" className="form-control" id="newAdPrice" placeholder="Ex: 250 000 FCFA" value={newAdPrice} onChange={(e) => setNewAdPrice(e.target.value)} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="newAdImageFile" className="form-label">Ajouter une image</label>
                    <input
                      type="file"
                      className="form-control"
                      id="newAdImageFile"
                      accept="image/*" // Only allow image files
                      onChange={handleImageChange}
                    />
                    {newAdImagePreview && (
                      <div className="mt-3 text-center">
                        <img src={newAdImagePreview} alt="Aperçu de l'annonce" className="img-thumbnail" style={{ maxWidth: '150px', maxHeight: '150px', objectFit: 'cover' }} />
                        <p className="small text-muted mt-1">Aperçu de l'image</p>
                      </div>
                    )}
                  </div>
                  {/* NEW: Dropdown for selecting category from global categories */}
                  <div className="mb-3">
                    <label htmlFor="newAdCategory" className="form-label">Catégorie</label>
                    <select
                      className="form-select"
                      id="newAdCategory"
                      value={newAdCategory}
                      onChange={(e) => setNewAdCategory(e.target.value)}
                    >
                      {globalCategories.map((category, index) => (
                        <option key={index} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>
                  <button onClick={handleAddAd} className="btn btn-primary w-100">
                    <i className="bi bi-plus me-2"></i> Ajouter l'annonce
                  </button>
                </div>

                {/* List of Ads */}
                <h4 className="mt-4 mb-3 text-secondary"><i className="bi bi-card-list me-2"></i> Vos annonces actuelles</h4>
                {currentUser.ads.length === 0 ? (
                  <div className="alert alert-info text-center" role="alert">
                    Vous n'avez aucune annonce publiée pour le moment.
                  </div>
                ) : (
                  <div className="row row-cols-1 row-cols-md-2 g-4"> {/* Responsive grid */}
                    {currentUser.ads.map((ad) => (
                      <div key={ad.id} className="col">
                        <div className="card h-100 shadow-sm">
                          <img src={ad.imageUrl} alt={ad.title} className="card-img-top" style={{ height: "180px", objectFit: "cover" }} />
                          <div className="card-body d-flex flex-column">
                            <h5 className="card-title text-truncate">{ad.title}</h5>
                            <p className="card-text mb-1"><strong>Prix:</strong> <span className="text-success">{ad.price}</span></p>
                            {ad.category && <p className="card-text mb-1"><small className="text-muted">Catégorie: {ad.category}</small></p>} {/* Display category */}
                            <p className="card-text"><small className="text-muted">Statut: {ad.status}</small></p>
                            <button onClick={() => handleDeleteAd(ad.id)} className="btn btn-danger btn-sm mt-auto">
                              <i className="bi bi-trash me-2"></i> Supprimer
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeSection === 'categories' && (
              <div>
                <h3 className="mb-4 text-primary"><i className="bi bi-tag me-2"></i> Gérer les catégories</h3>
                <p className="text-muted border-bottom pb-2 mb-3">Ajoutez, supprimez et gérez les catégories disponibles pour toutes les annonces.</p>

                {/* Add New Category Form */}
                <div className="card mb-4 p-3 border-primary-subtle bg-light">
                  <h4 className="mb-3 text-primary-emphasis"><i className="bi bi-plus-circle me-2"></i> Ajouter une nouvelle catégorie</h4>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Ex: Immobilier, Services"
                      value={newCategoryName}
                      onChange={(e) => setNewCategoryName(e.target.value)}
                    />
                    <button onClick={handleAddCategory} className="btn btn-success">
                      <i className="bi bi-plus me-2"></i> Ajouter
                    </button>
                  </div>
                </div>

                {/* List of Categories */}
                <h4 className="mt-4 mb-3 text-secondary"><i className="bi bi-list-nested me-2"></i> Toutes les catégories disponibles</h4>
                {globalCategories && globalCategories.length > 0 ? (
                  <ul className="list-group">
                    {globalCategories.map((category, index) => (
                      <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                        {category}
                        <button
                          onClick={() => handleDeleteCategory(category)}
                          className="btn btn-outline-danger btn-sm"
                        >
                          <i className="bi bi-x-lg"></i> Supprimer
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="alert alert-info text-center" role="alert">
                    Aucune catégorie n'est définie. Ajoutez-en une !
                  </div>
                )}
              </div>
            )}

            {activeSection === 'messages' && (
              <div>
                <h3 className="mb-4 text-primary"><i className="bi bi-chat-dots me-2"></i> Messagerie</h3>
                <p className="text-muted border-bottom pb-2 mb-3">Consultez et répondez à tous vos messages et appels.</p>

                {/* Message List */}
                {currentUser.messages && currentUser.messages.length > 0 ? (
                  <div className="list-group mb-4">
                    {currentUser.messages.map((message) => (
                      <div key={message.id} className="list-group-item list-group-item-action shadow-sm mb-2 p-3">
                        <div className="d-flex w-100 justify-content-between align-items-center mb-1">
                          <h6 className="mb-0 text-primary">{message.subject}</h6>
                          <small className="text-muted">{new Date(message.timestamp).toLocaleString()}</small>
                        </div>
                        <p className="mb-1">De: <strong className="text-dark">{message.sender}</strong></p>
                        <p className="text-muted small mb-2">{message.content}</p>
                        <button className="btn btn-info btn-sm"><i className="bi bi-reply me-2"></i> Répondre</button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="alert alert-info text-center" role="alert">
                    Vous n'avez aucun message pour le moment.
                  </div>
                )}

                {/* Send New Message Section */}
                <div className="card p-3 border-primary-subtle bg-light">
                  <h5 className="mb-3 text-primary-emphasis"><i className="bi bi-envelope-plus me-2"></i> Envoyer un nouveau message</h5>
                  <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Destinataire (Email ou Nom d'utilisateur)" />
                  </div>
                  <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Sujet du message" />
                  </div>
                  <div className="mb-3">
                    <textarea className="form-control" rows="3" placeholder="Votre message..."></textarea>
                  </div>
                  <button className="btn btn-primary w-100"><i className="bi bi-send me-2"></i> Envoyer le message</button>
                </div>
              </div>
            )}

            {activeSection === 'payments' && (
              <div>
                <h3 className="mb-4 text-primary"><i className="bi bi-credit-card me-2"></i> Historique des Paiements</h3>
                <p className="text-muted border-bottom pb-2 mb-3">Consultez toutes vos transactions financières passées.</p>

                {/* Payment History Table */}
                {currentUser.payments && currentUser.payments.length > 0 ? (
                  <div className="table-responsive">
                    <table className="table table-striped table-hover align-middle">
                      <thead className="table-light">
                        <tr>
                          <th scope="col">Article/Description</th>
                          <th scope="col">Montant</th>
                          <th scope="col">Date</th>
                          <th scope="col">Type</th>
                        </tr>
                      </thead>
                      <tbody>
                        {currentUser.payments.map((payment) => (
                          <tr key={payment.id}>
                            <td>{payment.item}</td>
                            <td><span className={`badge ${payment.type === 'Reçu' ? 'text-bg-success' : 'text-bg-info'}`}>{payment.amount}</span></td>
                            <td>{payment.date}</td>
                            <td>{payment.type}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="alert alert-info text-center" role="alert">
                    Aucune transaction enregistrée pour le moment.
                  </div>
                )}

                {/* Payment Methods */}
                <h4 className="mt-4 mb-3 text-secondary"><i className="bi bi-wallet2 me-2"></i> Méthodes de Paiement</h4>
                <p className="text-muted">Ajoutez ou gérez vos informations de paiement. Notez que les transactions réelles sont gérées par des plateformes sécurisées.</p>
                <div className="card p-3 border-primary-subtle bg-light">
                  <div className="mb-3">
                    <label htmlFor="paymentMethod" className="form-label">Type de méthode</label>
                    <select className="form-select" id="paymentMethod">
                      <option>Mobile Money</option>
                      <option>Carte Bancaire</option>
                      <option>Autre</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="accountNumber" className="form-label">Numéro de Compte / Carte</label>
                    <input type="text" className="form-control" id="accountNumber" placeholder="XXXX XXXX XXXX XXXX" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="accountName" className="form-label">Nom du Titulaire</label>
                    <input type="text" className="form-control" id="accountName" placeholder="Nom sur la carte/compte" />
                  </div>
                  <button className="btn btn-primary w-100"><i className="bi bi-credit-card-fill me-2"></i> Ajouter Méthode de Paiement</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer Navigation - Now includes Logout button */}
      <div className="d-flex justify-content-center gap-3 mt-5"> {/* Added gap-3 for spacing */}
        <button onClick={() => navigate("/")} className="btn btn-info btn-lg px-4 shadow-sm">
          <i className="bi bi-house-door-fill me-2"></i> Retour à l'accueil
        </button>
        <button onClick={handleLogout} className="btn btn-outline-danger btn-lg px-4 shadow-sm">
          <i className="bi bi-box-arrow-right me-2"></i> Déconnexion
        </button>
      </div>
    </div>
  );
}