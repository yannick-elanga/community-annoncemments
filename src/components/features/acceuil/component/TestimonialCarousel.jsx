import { Col, Carousel, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faStar } from "@fortawesome/free-solid-svg-icons";

export default function TestimonialsCarousel({ testimonials }) {
  return (
    <Carousel variant="dark" indicators={false} interval={5000}>
      {testimonials.map((testimonial) => {
        return (
          <Carousel.Item key={testimonial.id}>
            <Row className="justify-content-center text-center">
              <Col md={8}>
                <blockquote className="blockquote">
                  <p className="mb-4 fst-italic">
                    <FontAwesomeIcon
                      icon={faQuoteLeft}
                      className="me-2 text-primary"
                    />
                    {testimonial.quote}
                  </p>
                  <footer className="blockquote-footer d-flex align-items-center justify-content-center gap-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="rounded-circle"
                      width={60}
                      height={60}
                      style={{ objectFit: "cover" }}
                    />
                    <div>
                      <cite title={testimonial.author} className="fw-bold">
                        {testimonial.author}
                      </cite>
                      <br />
                      <small className="text-muted">{testimonial.role}</small>
                      <div className="mt-1 text-warning">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <FontAwesomeIcon icon={faStar} key={i} />
                        ))}
                      </div>
                    </div>
                  </footer>
                </blockquote>
              </Col>
            </Row>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
