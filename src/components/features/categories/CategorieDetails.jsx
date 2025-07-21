import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export function CategorieDetails() {
  const { id } = useParams();
  const [categorie, setCategorie] = useState(null);

  const [imagesData, setImagesData] = useState([
    { url: "", price: "", info: "" },
    { url: "", price: "", info: "" },
    { url: "", price: "", info: "" },
    { url: "", price: "", info: "" },
  ]);

  // Pour gérer l'affichage de l'image en modal
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    const savedCategories = JSON.parse(localStorage.getItem("categories")) || [];
    const foundCategorie = savedCategories.find(cat => cat.id.toString() === id);
    if (foundCategorie) {
      setCategorie(foundCategorie);
      setImagesData(foundCategorie.imagesData || [
        { url: "", price: "", info: "" },
        { url: "", price: "", info: "" },
        { url: "", price: "", info: "" },
        { url: "", price: "", info: "" },
      ]);
    }
  }, [id]);

  const handleImageDataChange = (index, field, value) => {
    const newImagesData = [...imagesData];
    newImagesData[index][field] = value;
    setImagesData(newImagesData);

    const updatedCategorie = { ...categorie, imagesData: newImagesData };
    setCategorie(updatedCategorie);

    const savedCategories = JSON.parse(localStorage.getItem("categories")) || [];
    const updatedCategories = savedCategories.map(cat =>
      cat.id.toString() === id ? updatedCategorie : cat
    );
    localStorage.setItem("categories", JSON.stringify(updatedCategories));
  };

  if (!categorie) {
    return (
      <div className="container text-center" style={{ marginTop: "150px", maxWidth: "600px" }}>
        <h2 className="mb-4">❌ Catégorie introuvable</h2>
        <p className="text-muted">La catégorie que vous recherchez n'existe pas ou a été supprimée.</p>
        <Link to="/categories" className="btn btn-primary mt-3">Retour aux catégories</Link>
      </div>
    );
  }

  return (
    <div className="container" style={{ marginTop: "120px", maxWidth: "700px" }}>
      <h2 className="mb-4 text-center">📂 Détails de la catégorie</h2>

      <div className="card shadow-sm p-3">
        <h4 className="card-title mb-3">{categorie.name}</h4>
        <p><strong>ID :</strong> {categorie.id}</p>
        <p><strong>Description :</strong> {categorie.description}</p>

        <div className="mb-3">
          <strong>Images et détails :</strong>
          <div className="row mt-2">
            {imagesData.map((imgData, idx) => (
              <div className="col-md-6 mb-4" key={idx}>
                {imgData.url ? (
                  <img
                    src={imgData.url}
                    alt={`Image ${idx + 1}`}
                    className="img-fluid rounded"
                    style={{ height: "180px", objectFit: "cover", width: "100%", cursor: "pointer" }}
                    onClick={() => setModalImage(imgData.url)}
                  />
                ) : (
                  <div className="bg-light border rounded d-flex align-items-center justify-content-center" style={{ height: "180px" }}>
                    <span className="text-muted">Aucune image</span>
                  </div>
                )}

                <input
                  type="text"
                  className="form-control mt-2"
                  placeholder={`URL de l'image ${idx + 1}`}
                  value={imgData.url}
                  onChange={(e) => handleImageDataChange(idx, "url", e.target.value)}
                />
                <input
                  type="text"
                  className="form-control mt-2"
                  placeholder={`Prix de l'image ${idx + 1} (ex: 100 €)`}
                  value={imgData.price}
                  onChange={(e) => handleImageDataChange(idx, "price", e.target.value)}
                />
                <textarea
                  className="form-control mt-2"
                  placeholder={`Autres informations pour l'image ${idx + 1}`}
                  rows={2}
                  value={imgData.info}
                  onChange={(e) => handleImageDataChange(idx, "info", e.target.value)}
                />

                {imgData.url && (
                  <button
                    className="btn btn-outline-primary btn-sm mt-2"
                    onClick={() => setModalImage(imgData.url)}
                  >
                    Voir plus
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-3">
          <Link to="/categories" className="btn btn-secondary me-2">
            ⬅️ Retour aux catégories
          </Link>
        </div>
      </div>

      {/* Modal Bootstrap */}
      {modalImage && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.6)" }}
          tabIndex="-1"
          role="dialog"
          onClick={() => setModalImage(null)}
        >
          <div
            className="modal-dialog modal-dialog-centered"
            role="document"
            onClick={e => e.stopPropagation()}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Image en grand</h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={() => setModalImage(null)}
                ></button>
              </div>
              <div className="modal-body">
                <img src={modalImage} alt="Grande vue" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
