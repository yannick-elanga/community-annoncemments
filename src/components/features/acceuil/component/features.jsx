import { Card, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Features({ feature }) {
  return (
    <Col lg={3} md={6} key={feature.id} className="mb-4">
      <Card className="h-100 border-0 bg-white shadow-sm">
        <Card.Body className="text-center p-4">
          <div
            className="icon-square bg-primary bg-opacity-10 text-primary rounded-circle mb-4 mx-auto"
            style={{
              width: "80px",
              height: "80px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FontAwesomeIcon icon={feature.icon} size="2x" />
          </div>
          <Card.Title>{feature.title}</Card.Title>
          <Card.Text>{feature.description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
