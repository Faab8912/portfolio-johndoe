import React from "react";
import { Container, Accordion } from "react-bootstrap";
import { Helmet } from "react-helmet";

function LegalNotice() {
  return (
    <>
      {/* Meta tag pour empêcher l'indexation par les moteurs de recherche */}
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <title>Mentions Légales - John Doe</title>
      </Helmet>

      <Container className="my-5 py-5">
        {/* Titre de la page */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold mb-3">Mentions Légales</h1>
          <p className="lead text-muted">
            Informations légales concernant ce site web
          </p>
        </div>

        {/* Accordéon Bootstrap */}
        <Accordion defaultActiveKey="0">
          {/* Éditeur du site */}
          <Accordion.Item eventKey="0">
            <Accordion.Header>Éditeur du site</Accordion.Header>
            <Accordion.Body>
              <h5>John Doe</h5>
              <p className="mb-2">
                <strong>Adresse :</strong> 40 Rue Laure Diebold, 69009 Lyon,
                France
              </p>
              <p className="mb-2">
                <strong>Téléphone :</strong>{" "}
                <a href="tel:0620304050">06 20 30 40 50</a>
              </p>
              <p className="mb-2">
                <strong>Email :</strong>{" "}
                <a href="mailto:john.doe@example.com">john.doe@example.com</a>
              </p>
            </Accordion.Body>
          </Accordion.Item>

          {/* Hébergeur */}
          <Accordion.Item eventKey="1">
            <Accordion.Header>Hébergeur</Accordion.Header>
            <Accordion.Body>
              <h5>Always Data</h5>
              <p className="mb-2">
                91 rue du Faubourg Saint Honoré
                <br />
                75008 Paris
                <br />
                France
              </p>
              <p className="mb-0">
                <strong>Site web :</strong>{" "}
                <a
                  href="https://www.alwaysdata.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.alwaysdata.com
                </a>
              </p>
            </Accordion.Body>
          </Accordion.Item>

          {/* Crédits */}
          <Accordion.Item eventKey="2">
            <Accordion.Header>Crédits</Accordion.Header>
            <Accordion.Body>
              <h5>Images</h5>
              <p className="mb-3">
                Les images utilisées sur ce site proviennent de{" "}
                <a
                  href="https://pixabay.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pixabay
                </a>
                , une plateforme offrant des images libres de droits.
              </p>

              <h5>Icônes</h5>
              <p className="mb-3">
                Le favicon utilisé provient de{" "}
                <a
                  href="https://www.flaticon.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Flaticon
                </a>
                .
              </p>

              <h5>Technologies utilisées</h5>
              <ul>
                <li>React.js - Framework JavaScript</li>
                <li>Bootstrap - Framework CSS</li>
                <li>React Router - Gestion des routes</li>
                <li>Bootstrap Icons - Bibliothèque d'icônes</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          {/* Propriété intellectuelle */}
          <Accordion.Item eventKey="3">
            <Accordion.Header>Propriété intellectuelle</Accordion.Header>
            <Accordion.Body>
              <p>
                L'ensemble de ce site relève de la législation française et
                internationale sur le droit d'auteur et la propriété
                intellectuelle. Tous les droits de reproduction sont réservés, y
                compris pour les documents téléchargeables et les
                représentations iconographiques et photographiques.
              </p>
              <p className="mb-0">
                La reproduction de tout ou partie de ce site sur un support
                électronique quel qu'il soit est formellement interdite sauf
                autorisation expresse du directeur de la publication.
              </p>
            </Accordion.Body>
          </Accordion.Item>

          {/* Protection des données personnelles */}
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              Protection des données personnelles
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Conformément à la loi « Informatique et Libertés » du 6 janvier
                1978 modifiée et au Règlement Général sur la Protection des
                Données (RGPD), vous disposez d'un droit d'accès, de
                rectification, de suppression et d'opposition aux données
                personnelles vous concernant.
              </p>
              <p>
                Pour exercer ce droit, vous pouvez nous contacter par email à
                l'adresse :
                <a href="mailto:john.doe@example.com"> john.doe@example.com</a>
              </p>
              <p className="mb-0">
                Les informations recueillies via le formulaire de contact sont
                destinées uniquement à John Doe et ne seront en aucun cas
                transmises à des tiers.
              </p>
            </Accordion.Body>
          </Accordion.Item>

          {/* Cookies */}
          <Accordion.Item eventKey="5">
            <Accordion.Header>Cookies</Accordion.Header>
            <Accordion.Body>
              <p>
                Ce site n'utilise pas de cookies à des fins de tracking ou de
                publicité. Seuls des cookies techniques strictement nécessaires
                au bon fonctionnement du site peuvent être utilisés.
              </p>
              <p className="mb-0">
                Vous pouvez à tout moment paramétrer votre navigateur pour
                refuser les cookies ou être informé de leur dépôt.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </>
  );
}

export default LegalNotice;
