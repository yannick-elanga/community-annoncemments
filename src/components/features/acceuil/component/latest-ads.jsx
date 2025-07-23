import { Button } from "react-bootstrap";
import { Card, Col, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function LatestAds({ ad }) {
  return (
    <Col lg={3} md={6} key={ad.id} className="mb-4">
      <Card className="h-100 hover-shadow">
        <div style={{ height: "200px", overflow: "hidden" }}>
          <Card.Img
            variant="top"
            src={ad.imageUrl}
            alt={ad.title}
            style={{ objectFit: "cover", height: "100%" }}
          />
        </div>
        <Card.Body>
          <div className="d-flex justify-content-between align-items-start">
            <Card.Title>{ad.title}</Card.Title>
            {ad.isVerified && <Badge bg="success">Vérifié</Badge>}
          </div>
          <Card.Text className="text-muted small mb-2">
            <FontAwesomeIcon icon={faHome} className="me-1" /> {ad.location}
          </Card.Text>
          <Card.Text className="fw-bold text-primary h5 mb-3">
            {ad.price} {ad.price !== "Salaire compétitif" && "FCFA"}
          </Card.Text>
          <div className="d-flex justify-content-between align-items-center">
            <Badge bg="light" text="dark">
              {ad.category}
            </Badge>
            <span className="text-muted small">{ad.date}</span>
          </div>
        </Card.Body>
        <Card.Footer className="bg-transparent border-top-0">
          <Button
            as={Link}
            to={`/annonce/${ad.id}`}
            variant="outline-primary"
            size="sm"
            className="w-100"
          >
            Voir les détails
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  );
}
