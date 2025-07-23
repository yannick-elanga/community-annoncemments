import { Card, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function StateCard({ stat, index }) {
  return (
    <Col md={3} sm={6} key={index} className="mb-4 mb-md-0">
      <Card className="border-0 text-center h-100 bg-transparent">
        <Card.Body>
          <FontAwesomeIcon
            icon={stat.icon}
            className="text-primary mb-3"
            size="3x"
          />
          <h3 className="fw-bold">{stat.value}</h3>
          <p className="text-muted">{stat.label}</p>
        </Card.Body>
      </Card>
    </Col>
  );
}
