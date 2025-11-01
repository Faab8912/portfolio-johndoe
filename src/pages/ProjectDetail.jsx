import React from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Badge, Button } from "react-bootstrap";
import projects from "../data/projects";

function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <Container className="my-5 py-5 text-center">
        <h1>Projet non trouvé</h1>
        <Link to="/portfolio" className="btn btn-primary mt-3">
          Retour au portfolio
        </Link>
      </Container>
    );
  }

  return (
    <Container className="my-5 py-5">
      {/* Bouton retour */}
      <div className="mb-4">
        <Link to="/portfolio" className="btn btn-outline-primary">
          ← Retour au portfolio
        </Link>
      </div>

      {/* Image principale */}
      <Row className="mb-5">
        <Col lg={12}>
          <img
            src={project.image}
            alt={project.title}
            style={{
              width: "100%",
              height: "400px",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
        </Col>
      </Row>

      {/* Titre et catégorie */}
      <Row className="mb-4">
        <Col lg={8}>
          <h1 className="display-4 fw-bold mb-3">{project.title}</h1>
          <Badge bg="primary" className="mb-3 p-2">
            {project.category}
          </Badge>
        </Col>
      </Row>

      {/* Description */}
      <Row className="mb-5">
        <Col lg={8}>
          <h3 className="mb-3">À propos du projet</h3>
          <p className="lead text-muted">{project.description}</p>
        </Col>
      </Row>

      {/* Technologies */}
      <Row className="mb-5">
        <Col lg={8}>
          <h3 className="mb-3">Technologies utilisées</h3>
          <div>
            {project.technologies.map((tech, index) => (
              <Badge key={index} bg="secondary" className="me-2 mb-2 p-2">
                {tech}
              </Badge>
            ))}
          </div>
        </Col>
      </Row>

      {/* Section additionnelle */}
      <Row className="mt-5 pt-5 border-top">
        <Col lg={8} className="mx-auto text-center">
          <h3 className="mb-4">Vous aimez ce projet ?</h3>
          <p className="lead text-muted mb-4">
            N'hésitez pas à me contacter pour discuter d'une collaboration ou
            pour en savoir plus sur mes autres projets.
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Me contacter
          </Link>
        </Col>
      </Row>

      {/* Projets connexes */}
      <Row className="mt-5 pt-5">
        <Col lg={12}>
          <h3 className="mb-4">Autres projets</h3>
          <Row className="g-4">
            {projects
              .filter((p) => p.id !== project.id)
              .slice(0, 3)
              .map((relatedProject) => (
                <Col key={relatedProject.id} md={6} lg={4}>
                  <div
                    style={{
                      borderRadius: "8px",
                      overflow: "hidden",
                      cursor: "pointer",
                    }}
                  >
                    <img
                      src={relatedProject.image}
                      alt={relatedProject.title}
                      style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                      }}
                    />
                    <div className="p-3">
                      <h5>{relatedProject.title}</h5>
                      <Link
                        to={`/project/${relatedProject.id}`}
                        className="btn btn-sm btn-outline-primary"
                      >
                        Voir le projet
                      </Link>
                    </div>
                  </div>
                </Col>
              ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default ProjectDetail;
