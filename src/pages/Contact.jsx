import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [validated, setValidated] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Gestion des changements dans les champs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Gestion de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
    } else {
      // Afficher un message de succès
      setShowSuccess(true);
      setValidated(false);

      // Réinitialiser le formulaire
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      // Masquer le message après 5 secondes
      setTimeout(() => setShowSuccess(false), 5000);
    }
  };

  return (
    <Container className="my-5 py-5">
      {/* Titre de la page */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold mb-3">Me Contacter</h1>
        <p className="lead text-muted">
          N'hésitez pas à me contacter pour toute question ou projet
        </p>
      </div>

      <Row>
        {/* Formulaire de contact */}
        <Col lg={6} className="mb-4">
          <h2 className="h4 mb-4">Envoyez-moi un message</h2>

          {showSuccess && (
            <Alert
              variant="success"
              dismissible
              onClose={() => setShowSuccess(false)}
            >
              Votre message a été envoyé avec succès ! Je vous répondrai dans
              les plus brefs délais.
            </Alert>
          )}

          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            {/* Nom */}
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Nom complet *</Form.Label>
              <Form.Control
                required
                type="text"
                name="name"
                placeholder="Votre nom"
                value={formData.name}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Veuillez entrer votre nom.
              </Form.Control.Feedback>
            </Form.Group>

            {/* Email */}
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Adresse email *</Form.Label>
              <Form.Control
                required
                type="email"
                name="email"
                placeholder="votre@email.com"
                value={formData.email}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Veuillez entrer une adresse email valide.
              </Form.Control.Feedback>
            </Form.Group>

            {/* Téléphone */}
            <Form.Group className="mb-3" controlId="phone">
              <Form.Label>Numéro de téléphone *</Form.Label>
              <Form.Control
                required
                type="tel"
                name="phone"
                placeholder="06 12 34 56 78"
                value={formData.phone}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Veuillez entrer votre numéro de téléphone.
              </Form.Control.Feedback>
            </Form.Group>

            {/* Sujet */}
            <Form.Group className="mb-3" controlId="subject">
              <Form.Label>Sujet *</Form.Label>
              <Form.Control
                required
                type="text"
                name="subject"
                placeholder="Sujet de votre message"
                value={formData.subject}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Veuillez entrer un sujet.
              </Form.Control.Feedback>
            </Form.Group>

            {/* Message */}
            <Form.Group className="mb-3" controlId="message">
              <Form.Label>Message *</Form.Label>
              <Form.Control
                required
                as="textarea"
                rows={5}
                name="message"
                placeholder="Votre message..."
                value={formData.message}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Veuillez entrer votre message.
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Envoyer le message
            </Button>
          </Form>
        </Col>

        {/* Coordonnées et Google Maps */}
        <Col lg={6}>
          <h2 className="h4 mb-4">Mes coordonnées</h2>

          {/* Adresse */}
          <div className="mb-4">
            <h5 className="mb-2">
              <i className="bi bi-geo-alt-fill text-primary me-2"></i>
              Adresse
            </h5>
            <p className="text-muted ms-4">
              40 Rue Laure Diebold
              <br />
              69009 Lyon, France
            </p>
          </div>

          {/* Téléphone */}
          <div className="mb-4">
            <h5 className="mb-2">
              <i className="bi bi-telephone-fill text-primary me-2"></i>
              Téléphone
            </h5>
            <p className="text-muted ms-4">
              <a
                href="tel:0620304050"
                className="text-decoration-none text-muted"
              >
                06 20 30 40 50
              </a>
            </p>
          </div>

          {/* Email */}
          <div className="mb-4">
            <h5 className="mb-2">
              <i className="bi bi-envelope-fill text-primary me-2"></i>
              Email
            </h5>
            <p className="text-muted ms-4">
              <a
                href="mailto:john.doe@example.com"
                className="text-decoration-none text-muted"
              >
                john.doe@example.com
              </a>
            </p>
          </div>

          {/* Google Maps */}
          <div className="mb-4">
            <h5 className="mb-3">Localisation</h5>
            <div className="ratio ratio-16x9 rounded overflow-hidden shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.6269850505937!2d4.796403976660644!3d45.77866571240158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1234567890123!5m2!1sfr!2sfr"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation de John Doe"
              ></iframe>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
