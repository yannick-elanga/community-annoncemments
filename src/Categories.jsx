import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const savedCategories = JSON.parse(localStorage.getItem("categories"));
    if (savedCategories && savedCategories.length > 0) {
      setCategories(savedCategories);
    } else {
      const defaultCategories = [
        { id: 1, name: "Électronique", description: "Téléphones, ordinateurs, accessoires..." },
        { id: 2, name: "Meubles", description: "Tables, chaises, canapés..." },
        { id: 3, name: "Vêtements", description: "Hommes, femmes, enfants..." },
        { id: 4, name: "Livres", description: "Livres scolaires, romans..." },
        { id: 5, name: "Services", description: "Réparations, cours particuliers..." },
      ];
      setCategories(defaultCategories);
      localStorage.setItem("categories", JSON.stringify(defaultCategories));
    }
  }, []);

  const handleAddCategory = (e) => {
    e.preventDefault();
    if (!name.trim() || !description.trim()) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    const newCategory = {
      id: Date.now(),
      name,
      description,
    };

    const updatedCategories = [...categories, newCategory];
    setCategories(updatedCategories);
    localStorage.setItem("categories", JSON.stringify(updatedCategories));
    setName("");
    setDescription("");
  };

  return (
    <div className="container py-5" style={{ maxWidth: "900px" }}>
      <h2 className="mb-4 text-center fw-bold">
        📊 Tableau de bord des catégories
      </h2>
      <p className="text-center text-muted mb-4">
        Visualisez, gérez et ajoutez vos catégories facilement pour organiser votre plateforme.
      </p>

      <div className="card shadow-sm mb-4 border-0">
        <div className="card-body">
          <h4 className="mb-3 text-primary">
            📋 Liste des catégories
          </h4>
          {categories.length > 0 ? (
            <div className="table-responsive">
              <table className="table table-hover align-middle">
                <thead className="table-primary">
                  <tr>
                    <th>#</th>
                    <th>Nom</th>
                    <th>Description</th>
                    <th className="text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map((cat, index) => (
                    <tr key={cat.id}>
                      <td>{index + 1}</td>
                      <td className="fw-semibold">{cat.name}</td>
                      <td>{cat.description}</td>
                      <td className="text-center">
                        <Link
                          to={`/categories/${cat.id}`}
                          className="btn btn-sm btn-outline-primary"
                        >
                          <i className="fas fa-eye me-1"></i> Voir
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-center text-muted">Aucune catégorie disponible pour le moment.</p>
          )}
        </div>
      </div>

      <div className="card shadow-sm border-0 bg-light">
        <div className="card-body">
          <h4 className="mb-3 text-success">
            ➕ Ajouter une nouvelle catégorie
          </h4>
          <form onSubmit={handleAddCategory}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Nom de la catégorie</label>
              <input
                type="text"
                id="name"
                className="form-control"
                placeholder="Ex : Jardinage"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="description" className="form-label">Description</label>
              <textarea
                id="description"
                className="form-control"
                placeholder="Ex : Outils, équipements de jardin..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-success">
                <i className="fas fa-plus me-2"></i>Ajouter la catégorie
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
