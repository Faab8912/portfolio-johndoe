import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  ProgressBar,
  Modal,
  Nav,
} from "react-bootstrap";
import heroBg from "../assets/images/hero-bg.jpg";
import aboutPhoto from "../assets/images/about-john-doe.jpg";

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [githubData, setGithubData] = useState(null);
  const [activeTab, setActiveTab] = useState("about");

  // Fonction pour ouvrir la modale et charger les données GitHub
  const handleShowModal = async () => {
    try {
      const response = await fetch(
        "https://api.github.com/users/github-johndoe"
      );
      const data = await response.json();
      setGithubData(data);
      setShowModal(true);
    } catch (error) {
      console.error("Erreur lors du chargement des données GitHub:", error);
    }
  };

  const handleCloseModal = () => setShowModal(false);

  // Compétences avec niveaux
  const skills = [
    { name: "HTML5", level: 90 },
    { name: "CSS3", level: 80 },
    { name: "JavaScript", level: 70 },
    { name: "PHP", level: 60 },
    { name: "React", level: 50 },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "500px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className="hero-content text-center text-white"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: "60px 40px",
            borderRadius: "8px",
          }}
        >
          <h1 className="display-3 fw-bold mb-3">Bonjour, je suis John Doe</h1>
          <h2 className="h3 mb-4">Développeur Web Full Stack</h2>
          <Button variant="primary" size="lg" onClick={handleShowModal}>
            En savoir plus
          </Button>
        </div>
      </section>

      {/* Section À propos et Compétences avec Tabs */}
      <Container className="my-5 py-5">
        {/* Tabs Navigation */}
        <Nav variant="tabs" className="mb-4" defaultActiveKey="about">
          <Nav.Item>
            <Nav.Link
              eventKey="about"
              onClick={() => setActiveTab("about")}
              active={activeTab === "about"}
              style={{
                borderBottom:
                  activeTab === "about"
                    ? "3px solid #0d6efd"
                    : "1px solid #dee2e6",
                color: activeTab === "about" ? "#0d6efd" : "#6c757d",
                fontWeight: activeTab === "about" ? "600" : "400",
              }}
            >
              À propos
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="skills"
              onClick={() => setActiveTab("skills")}
              active={activeTab === "skills"}
              style={{
                borderBottom:
                  activeTab === "skills"
                    ? "3px solid #0d6efd"
                    : "1px solid #dee2e6",
                color: activeTab === "skills" ? "#0d6efd" : "#6c757d",
                fontWeight: activeTab === "skills" ? "600" : "400",
              }}
            >
              Mes compétences
            </Nav.Link>
          </Nav.Item>
        </Nav>

        {/* Contenu des Tabs */}
        {activeTab === "about" && (
          <Row className="align-items-center">
            <Col md={6} className="mb-4 mb-md-0">
              <h2 className="mb-4">À propos de moi</h2>
              <p className="lead">
                Passionné par le développement web, je crée des sites modernes,
                responsives et performants. Mon objectif est de transformer vos
                idées en réalité digitale.
              </p>
              <p>
                Fort d'une expérience en développement front-end et back-end, je
                maîtrise les technologies les plus récentes pour vous offrir des
                solutions web de qualité professionnelle.
              </p>
              <p>
                Actuellement en formation au CEF, je recherche une alternance
                pour mettre en pratique mes compétences et continuer à apprendre
                auprès de professionnels expérimentés.
              </p>
            </Col>
            <Col md={6}>
              <img
                src={aboutPhoto}
                alt="John Doe"
                className="img-fluid rounded shadow"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Col>
          </Row>
        )}

        {activeTab === "skills" && (
          <Row>
            <Col md={8} className="mx-auto">
              <h2 className="text-center mb-5">Mes Compétences</h2>
              {skills.map((skill, index) => (
                <div key={index} className="mb-4">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="fw-bold">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <ProgressBar now={skill.level} variant="primary" animated />
                </div>
              ))}
            </Col>
          </Row>
        )}
      </Container>

      {/* Modale GitHub */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Profil GitHub</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {githubData ? (
            <div className="text-center">
              <img
                src={githubData.avatar_url}
                alt={githubData.name}
                className="rounded-circle mb-3"
                width="120"
              />
              <h4>{githubData.name || githubData.login}</h4>
              <p className="text-muted">{githubData.bio}</p>
              <div className="d-flex justify-content-around mt-4">
                <div>
                  <strong>{githubData.public_repos}</strong>
                  <p className="text-muted small">Repositories</p>
                </div>
                <div>
                  <strong>{githubData.followers}</strong>
                  <p className="text-muted small">Followers</p>
                </div>
                <div>
                  <strong>{githubData.following}</strong>
                  <p className="text-muted small">Following</p>
                </div>
              </div>
              <a
                href={githubData.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark mt-3"
              >
                Voir le profil GitHub
              </a>
            </div>
          ) : (
            <p className="text-center">Chargement...</p>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Home;
