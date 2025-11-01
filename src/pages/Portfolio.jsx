import React from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import projects from "../data/projects";
import heroPortfolio from "../assets/images/hero-portfolio.jpg";

function Portfolio() {
  return (
    <>
      {/* Hero Section */}
      <section
        style={{
          backgroundImage: `url(${heroPortfolio})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "300px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className="text-center text-white"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: "60px 40px",
            borderRadius: "8px",
          }}
        >
          <h1 className="display-4 fw-bold mb-3">Portfolio</h1>
          <p className="lead">Voici quelques-unes de mes réalisations</p>
        </div>
      </section>

      {/* Grille de projets */}
      <Container className="my-5 py-5">
        <Row className="g-4">
          {projects.map((project) => (
            <Col key={project.id} md={6} lg={4}>
              <Card className="h-100 border-0 shadow-sm">
                {/* Image du projet */}
                <Card.Img
                  variant="top"
                  src={project.image}
                  alt={project.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body className="d-flex flex-column">
                  {/* Titre */}
                  <Card.Title className="h5 mb-3">{project.title}</Card.Title>

                  {/* Description */}
                  <Card.Text className="text-muted flex-grow-1">
                    {project.description}
                  </Card.Text>

                  {/* Technologies */}
                  <div className="mb-3">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} bg="secondary" className="me-2 mb-2">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Bouton */}
                  <Link
                    to={`/project/${project.id}`}
                    className="btn btn-primary w-100"
                  >
                    Voir le projet
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Section complémentaire */}
        <Row className="mt-5 pt-5">
          <Col lg={8} className="mx-auto text-center">
            <h2 className="mb-4">Vous avez un projet en tête ?</h2>
            <p className="lead text-muted mb-4">
              N'hésitez pas à me contacter pour discuter de votre projet. Je
              serais ravi de vous accompagner dans sa réalisation.
            </p>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Me contacter
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Portfolio;
