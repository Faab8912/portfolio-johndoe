import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <Container>
        <Row>
          {/* Colonne 1 : Informations de contact */}
          <Col md={4} className="mb-3">
            <h5>John Doe</h5>
            <p className="mb-1">40 Rue Laure Diebold</p>
            <p className="mb-1">69009 Lyon, France</p>
            <p className="mb-3">Téléphone : 06 20 30 40 50</p>

            {/* Réseaux sociaux */}
            <div className="d-flex gap-3">
              <a
                href="https://github.com/github-john-doe"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="social-icon"
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="social-icon"
              >
                <i className="bi bi-twitter"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="social-icon"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </Col>

          {/* Colonne 2 : Liens utiles */}
          <Col md={4} className="mb-3">
            <h5>Liens utiles</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="footer-link">
                  Accueil
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/services" className="footer-link">
                  Services
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/portfolio" className="footer-link">
                  Réalisations
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="footer-link">
                  Me contacter
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/mentions-legales" className="footer-link">
                  Mentions légales
                </Link>
              </li>
            </ul>
          </Col>

          {/* Colonne 3 : Dernières réalisations */}
          <Col md={4} className="mb-3">
            <h5>Mes dernières réalisations</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/portfolio" className="footer-link">
                  Fresh Food
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/portfolio" className="footer-link">
                  Restaurant Akira
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/portfolio" className="footer-link">
                  Espace bien-être
                </Link>
              </li>
            </ul>
          </Col>
        </Row>

        {/* Copyright */}
        <Row className="mt-4">
          <Col className="text-center">
            <p className="mb-0">
              © {new Date().getFullYear()} John Doe. Tous droits réservés.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
