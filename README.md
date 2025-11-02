# Portfolio de John Doe - Développeur Web Full Stack

## Description

Portfolio personnel présentant les projets et compétences de John Doe, développeur web full stack en formation au CEF (Centre Européen de Formation). Ce site a été développé avec React.js et Bootstrap pour démontrer les capacités en développement web moderne.

## Fonctionnalités

- Page d'accueil : Présentation avec hero image et section à propos
- Page Services : Présentation des services (UX Design, Développement Web, Référencement)
- Page Portfolio : Galerie de 6+ projets avec filtrage et détails
- Page de détail projet : Informations complètes sur chaque projet
- Page Contact : Formulaire de contact et coordonnées avec Google Maps
- Page Mentions légales : Informations légales, éditeur, hébergeur, crédits
- Design responsif : Compatible ordinateur, tablette et mobile
- Effets interactifs : Effets de survol, animations CSS, transitions fluides

## Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- Node.js (v14.0.0 ou supérieur)
- npm (v6.0.0 ou supérieur)

Vérifier les versions avec les commandes node --version et npm --version

## Installation

### 1. Clonez le dépôt

git clone https://github.com/Faab8912/portfolio-johndoe.git
cd portfolio-johndoe

### 2. Installer les dépendances

npm install

## Lancement

### Mode développement

npm start

Le site s'ouvrira automatiquement sur http://localhost:3000
Le navigateur se rechargera automatiquement à chaque modification.

### Build pour la production

npm run build

Crée un dossier build/ avec la version optimisée, prêt à être déployé sur un serveur.

## Technologies utilisées

| Technologie      | Version | Utilisation                 |
| ---------------- | ------- | --------------------------- |
| React.js         | 18.x    | Framework JavaScript        |
| React Router     | 6.x     | Routage et navigation       |
| Bootstrap        | 5.x     | Framework CSS et composants |
| Bootstrap Icons  | 1.x     | Icônes                      |
| Google Maps API  | Latest  | Intégration carte           |
| CSS personnalisé | -       | Styles additionnels         |

## Structure du projet

portfolio-johndoe/
├── public/
│ ├── index.html
│ ├── favicon.png
│ └── manifest.json
├── src/
│ ├── assets/
│ │ └── images/
│ ├── components/
│ │ └── layout/
│ ├── pages/
│ │ ├── Home.jsx
│ │ ├── Portfolio.jsx
│ │ ├── Services.jsx
│ │ ├── Contact.jsx
│ │ ├── LegalNotice.jsx
│ │ └── ProjectDetail.jsx
│ ├── data/
│ │ ├── projects.js
│ │ └── services.js
│ ├── styles/
│ │ └── custom.css
│ ├── App.js
│ └── index.js
├── validation/
├── package.json
├── README.md
└── .gitignore

## Validation W3C

Le code HTML a été validé avec le validateur W3C. Les captures d'écran des validations sont disponibles dans le dossier validation/.

## Pages disponibles

- Accueil (/) - Page d'accueil avec présentation
- Services (/services) - Liste des services proposés
- Réalisations (/portfolio) - Portfolio des projets
- Détail projet (/project/:id) - Détails d'un projet spécifique
- Contact (/contact) - Formulaire de contact
- Mentions légales (/mentions-legales) - Informations légales

## Design et UX

- Design moderne et épuré
- Navigation intuitive
- Palette de couleurs professionnelle
- Typographie lisible (Nunito Sans)
- Animations fluides et transitions
- Conception responsive avec media queries

## Contact

- Email : john.doe@example.com
- Téléphone : 06 20 30 40 50
- Adresse : 40 Rue Laure Diebold, 69009 Lyon, France

## Auteur

John Doe
Développeur Web Full Stack en formation
Centre Européen de Formation (CEF)

Dernière mise à jour : Novembre 2025
