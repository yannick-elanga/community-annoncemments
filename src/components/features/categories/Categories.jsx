import React, { useState, useEffect } from "react";
import { Container, Card, Table, Form, Button, Alert, Badge, Spinner, Pagination, Row, Col, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faChartBar, faList, faCheckCircle, faExclamationTriangle, faTrash, faEdit, faEye } from '@fortawesome/free-solid-svg-icons';

const colors = {
  primary: "#4e73df",
  secondary: "#858796",
  success: "#1cc88a",
  danger: "#e74a3b",
  warning: "#f6c23e",
  info: "#36b9cc",
  light: "#f8f9fc",
  dark: "#5a5c69"
};

export function Categories() {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [categoriesPerPage] = useState(5);
  const [editMode, setEditMode] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const defaultCategories = [
    { id: 1, name: "Électronique", description: "Téléphones, ordinateurs, accessoires...", count: 124 },
    { id: 2, name: "Meubles", description: "Tables, chaises, canapés...", count: 89 },
    { id: 3, name: "Vêtements", description: "Hommes, femmes, enfants...", count: 215 },
    { id: 4, name: "Livres", description: "Livres scolaires, romans...", count: 56 },
    { id: 5, name: "Services", description: "Réparations, cours particuliers...", count: 42 },
    { id: 6, name: "Automobile", description: "Voitures, pièces détachées...", count: 78 },
    { id: 7, name: "Immobilier", description: "Appartements, maisons, terrains...", count: 112 },
  ];

  useEffect(() => {
    const loadCategories = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulation chargement
        const savedCategories = JSON.parse(localStorage.getItem("categories"));
        if (savedCategories?.length > 0) {
          setCategories(savedCategories);
        } else {
          setCategories(defaultCategories);
          localStorage.setItem("categories", JSON.stringify(defaultCategories));
        }
      } catch (err) {
        setError("Erreur lors du chargement des catégories");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadCategories();
  }, []);

  const indexOfLastCategory = currentPage * categoriesPerPage;
  const indexOfFirstCategory = indexOfLastCategory - categoriesPerPage;
  const currentCategories = categories.slice(indexOfFirstCategory, indexOfLastCategory);
  const totalPages = Math.ceil(categories.length / categoriesPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleAddCategory = (e) => {
    e.preventDefault();
    if (!name.trim() || !description.trim()) {
      setError("Veuillez remplir tous les champs");
      return;
    }
    const newCategory = {
      id: Date.now(),
      name: name.trim(),
      description: description.trim(),
      count: 0
    };
    const updatedCategories = [...categories, newCategory];
    setCategories(updatedCategories);
    localStorage.setItem("categories", JSON.stringify(updatedCategories));
    setName("");
    setDescription("");
    setSuccess("Catégorie ajoutée avec succès !");
    setError(null);
    setTimeout(() => setSuccess(null), 3000);
  };

  const handleEditCategory = (category) => {
    setEditMode(category.id);
    setName(category.name);
    setDescription(category.description);
  };

  const handleUpdateCategory = (e) => {
    e.preventDefault();
    if (!name.trim() || !description.trim()) {
      setError("Veuillez remplir tous les champs");
      return;
    }
    const updatedCategories = categories.map(cat => 
      cat.id === editMode 
        ? { ...cat, name: name.trim(), description: description.trim() } 
        : cat
    );
    setCategories(updatedCategories);
    localStorage.setItem("categories", JSON.stringify(updatedCategories));
    setEditMode(null);
    setName("");
    setDescription("");
    setSuccess("Catégorie modifiée avec succès !");
    setError(null);
    setTimeout(() => setSuccess(null), 3000);
  };

  const handleDeleteCategory = (id) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cette catégorie ?")) {
      const updatedCategories = categories.filter(cat => cat.id !== id);
      setCategories(updatedCategories);
      localStorage.setItem("categories", JSON.stringify(updatedCategories));
      setSuccess("Catégorie supprimée avec succès !");
      setTimeout(() => setSuccess(null), 3000);
      if (currentCategories.length === 1 && currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    }
  };

  const handleViewCategory = (category) => {
    setSelectedCategory(category);
    setShowModal(true);
  };

  if (loading) {
    return (
      <Container className="py-5 text-center">
        <Spinner animation="border" variant="primary" style={{ width: '3rem', height: '3rem' }} />
        <p className="mt-3">Chargement des catégories...</p>
      </Container>
    );
  }

  return (
    <Container className="py-5" style={{ maxWidth: "1200px" }}>
      <div className="text-center mb-5">
        <h1 className="fw-bold mb-3" style={{ color: colors.primary }}>
          <FontAwesomeIcon icon={faChartBar} className="me-2" />
          Gestion des catégories
        </h1>
        <p className="lead" style={{ color: colors.secondary }}>
          Organisez et structurez les différentes catégories de votre plateforme
        </p>
      </div>

      {error && (
        <Alert variant="danger" dismissible onClose={() => setError(null)}>
          <FontAwesomeIcon icon={faExclamationTriangle} className="me-2" />
          {error}
        </Alert>
      )}
      {success && (
        <Alert variant="success" dismissible onClose={() => setSuccess(null)}>
          <FontAwesomeIcon icon={faCheckCircle} className="me-2" />
          {success}
        </Alert>
      )}

      <Card className="shadow mb-4 border-0">
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h4 className="mb-0" style={{ color: colors.primary }}>
              <FontAwesomeIcon icon={faList} className="me-2" />
              Liste des catégories
            </h4>
            <Badge pill bg="primary">{categories.length} catégories</Badge>
          </div>

          {categories.length > 0 ? (
            <>
              <div className="table-responsive">
                <Table hover>
                  <thead style={{ backgroundColor: colors.primary, color: 'white' }}>
                    <tr>
                      <th>#</th>
                      <th>Nom</th>
                      <th>Description</th>
                      <th>Annonces</th>
                      <th className="text-end">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentCategories.map((cat, index) => (
                      <tr key={cat.id}>
                        <td>{(currentPage - 1) * categoriesPerPage + index + 1}</td>
                        <td>{cat.name}</td>
                        <td>{cat.description}</td>
                        <td><Badge pill bg="secondary">{cat.count || 0}</Badge></td>
                        <td className="text-end">
                          <Button
                            variant="outline-success"
                            size="sm"
                            className="me-2"
                            onClick={() => handleViewCategory(cat)}
                          >
                            <FontAwesomeIcon icon={faEye} className="me-1" />
                            Voir
                          </Button>
                          <Button
                            variant="outline-primary"
                            size="sm"
                            className="me-2"
                            onClick={() => handleEditCategory(cat)}
                          >
                            <FontAwesomeIcon icon={faEdit} className="me-1" />
                            Modifier
                          </Button>
                          <Button
                            variant="outline-danger"
                            size="sm"
                            onClick={() => handleDeleteCategory(cat.id)}
                          >
                            <FontAwesomeIcon icon={faTrash} className="me-1" />
                            Supprimer
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>

              {totalPages > 1 && (
                <div className="d-flex justify-content-center mt-3">
                  <Pagination>
                    <Pagination.First onClick={() => paginate(1)} disabled={currentPage === 1} />
                    <Pagination.Prev onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} />
                    {Array.from({ length: totalPages }, (_, i) => (
                      <Pagination.Item
                        key={i + 1}
                        active={i + 1 === currentPage}
                        onClick={() => paginate(i + 1)}
                      >
                        {i + 1}
                      </Pagination.Item>
                    ))}
                    <Pagination.Next onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages} />
                    <Pagination.Last onClick={() => paginate(totalPages)} disabled={currentPage === totalPages} />
                  </Pagination>
                </div>
              )}
            </>
          ) : (
            <Alert variant="info" className="text-center">
              Aucune catégorie disponible pour le moment.
            </Alert>
          )}
        </Card.Body>
      </Card>

      <Card className="shadow border-0">
        <Card.Body>
          <h4 className="mb-4" style={{ color: editMode ? colors.info : colors.success }}>
            <FontAwesomeIcon icon={faPlus} className="me-2" />
            {editMode ? "Modifier une catégorie" : "Ajouter une nouvelle catégorie"}
          </h4>
          <Form onSubmit={editMode ? handleUpdateCategory : handleAddCategory}>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Nom de la catégorie</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ex: Jardinage"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={1}
                    placeholder="Ex: Outils, équipements de jardin..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <div className="d-flex justify-content-end">
              {editMode && (
                <Button
                  variant="outline-secondary"
                  className="me-3"
                  onClick={() => {
                    setEditMode(null);
                    setName("");
                    setDescription("");
                  }}
                >
                  Annuler
                </Button>
              )}
              <Button variant={editMode ? "info" : "success"} type="submit">
                {editMode ? "Mettre à jour" : "Ajouter la catégorie"}
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>

      {/* Modal Voir Catégorie */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Détails de la catégorie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedCategory && (
            <>
              <h5 style={{ color: colors.primary }}>{selectedCategory.name}</h5>
              <p className="mb-2">{selectedCategory.description}</p>
              <Badge bg="secondary">Nombre d'annonces : {selectedCategory.count || 0}</Badge>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
