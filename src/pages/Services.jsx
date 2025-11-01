import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import servicesData from "../data/services";

function Services() {
  return (
    <Container className="my-5 py-5">
      {/* Titre de la page */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold mb-3">Mes Services</h1>
        <p className="lead text-muted">
          Découvrez les services que je propose pour vous accompagner dans vos
          projets web
        </p>
      </div>

      {/* Grille de services */}
      <Row className="g-4">
        {servicesData.map((service) => (
          <Col key={service.id} md={6} lg={4}>
            <Card className="h-100 text-center border-0 shadow-sm">
              <Card.Body className="d-flex flex-column p-4">
                {/* Icône */}
                <div className="mb-4">
                  <i
                    className={`${service.icon} text-primary`}
                    style={{ fontSize: "3rem" }}
                  ></i>
                </div>

                {/* Titre */}
                <Card.Title className="h4 mb-3">{service.title}</Card.Title>

                {/* Description */}
                <Card.Text className="text-muted flex-grow-1">
                  {service.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Section complémentaire */}
      <Row className="mt-5 pt-5">
        <Col lg={8} className="mx-auto text-center">
          <h2 className="mb-4">Pourquoi me choisir ?</h2>
          <p className="lead text-muted">
            Je m'engage à livrer des projets de qualité, dans les délais
            convenus, en utilisant les meilleures pratiques du développement web
            moderne. Votre satisfaction est ma priorité.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Services;
