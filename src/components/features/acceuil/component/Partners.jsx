import { Col } from "react-bootstrap";

export default function Partners({ partner }) {
  return (
    <Col
      key={partner.id}
      xs={6}
      sm={4}
      md={2}
      className="d-flex justify-content-center"
    >
      <img
        src={partner.logo}
        alt={partner.name}
        style={{ maxHeight: "60px", objectFit: "contain" }}
      />
    </Col>
  );
}
