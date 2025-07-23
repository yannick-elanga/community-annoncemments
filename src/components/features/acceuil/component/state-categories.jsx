import { Card, Col, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function StateCategories({ category, index }) {
  return (
    <Col lg={2} md={4} sm={6} key={index} className="mb-4">
      <Card
        as={Link}
        to="/mes-annonces"
        className="h-100 text-decoration-none hover-shadow"
      >
        <Card.Body className="text-center">
          <FontAwesomeIcon
            icon={category.icon}
            className="text-primary mb-3"
            size="3x"
          />
          <h5 className="text-dark">{category.name}</h5>
          <Badge bg="secondary" pill>
            {category.count.toLocaleString()} annonces
          </Badge>
        </Card.Body>
      </Card>
    </Col>
  );
}
