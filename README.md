# Portfolio de John Doe - Développeur Web Full Stack

## 📋 Description

Portfolio personnel présentant les projets et compétences de John Doe, développeur web full stack en formation au CEF (Centre Européen de Formation). Ce site a été développé avec React.js et Bootstrap pour démontrer les capacités en développement web moderne.

## 🎯 Fonctionnalités

- **Page d'accueil** : Présentation avec hero image et section à propos
- **Page Services** : Présentation des services (UX Design, Développement Web, Référencement)
- **Page Portfolio** : Galerie de 6+ projets avec filtrage et détails
- **Page de détail projet** : Informations complètes sur chaque projet
- **Page Contact** : Formulaire de contact et coordonnées avec Google Maps
- **Page Mentions légales** : Informations légales, éditeur, hébergeur, crédits
- **Design responsif** : Compatible desktop, tablette et mobile
- **Effets interactifs** : Hover effects, animations CSS, transitions fluides

## 📦 Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- **Node.js** (v14.0.0 ou supérieur) - [Télécharger](https://nodejs.org/)
- **npm** (v6.0.0 ou supérieur) - Installé avec Node.js

Vérifiez les versions :

```bash
node --version
npm --version
```

## 🚀 Installation

1. **Clonez le repository**

```bash
git clone https://github.com/Faab8912/portfolio-johndoe.git
cd portfolio-johndoe
```

2. **Installez les dépendances**

```bash
npm install
```

Cette commande installe tous les packages nécessaires listés dans `package.json`.

## 🏃 Lancement

### Mode développement

```bash
npm start
```

- Le site s'ouvrira automatiquement sur `http://localhost:3000`
- Le navigateur se rechargera automatiquement quand vous modifiez le code
- Les erreurs s'affichent dans la console et le navigateur

### Build pour production

```bash
npm run build
```

- Crée un dossier `build/` avec la version optimisée du site
- Prêt à être déployé sur un serveur

## 🛠️ Technologies utilisées

| Technologie      | Version | Utilisation                 |
| ---------------- | ------- | --------------------------- |
| React.js         | 18.x    | Framework JavaScript        |
| React Router     | 6.x     | Routage et navigation       |
| Bootstrap        | 5.x     | Framework CSS et composants |
| Bootstrap Icons  | 1.x     | Icônes                      |
| Google Maps API  | Latest  | Intégration carte           |
| CSS personnalisé | -       | Styles additionnels         |
| HTML5            | -       | Structure sémantique        |

## 📁 Structure du projet

```
portfolio-johndoe/
├── public/                 # Fichiers publics
│   ├── index.html         # Page HTML principale
│   ├── favicon.png        # Favicon
│   └── manifest.json      # Métadonnées PWA
├── src/
│   ├── assets/
│   │   └── images/        # Images du portfolio
│   ├── components/
│   │   └── layout/        # Header, Footer
│   ├── pages/             # Pages React
│   │   ├── Home.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Services.jsx
│   │   ├── Contact.jsx
│   │   ├── LegalNotice.jsx
│   │   └── ProjectDetail.jsx
│   ├── data/              # Données
│   │   ├── projects.js
│   │   └── services.js
│   ├── styles/            # Feuilles de style
│   │   └── custom.css
│   ├── App.js             # Composant principal
│   └── index.js           # Point d'entrée
├── validation/            # Captures d'écran W3C
├── package.json           # Dépendances
├── README.md              # Ce fichier
└── .gitignore             # Fichiers ignorés par Git

```

## ✅ Validation W3C

Le code HTML a été validé avec le validateur W3C. Les captures d'écran des validations sont disponibles dans le dossier `validation/`.

- ✅ HTML valide selon les normes W3C
- ✅ CSS validé
- ✅ Pas d'erreurs, seulement des informations mineures

## 📱 Pages disponibles

- **Accueil** (`/`) - Page d'accueil avec présentation
- **Services** (`/services`) - Liste des services proposés
- **Réalisations** (`/portfolio`) - Portfolio des projets
- **Détail projet** (`/project/:id`) - Détails d'un projet spécifique
- **Contact** (`/contact`) - Formulaire de contact
- **Mentions légales** (`/mentions-legales`) - Informations légales

## 🎨 Design et UX

- Design moderne et épuré
- Navigation intuitive
- Palette de couleurs professionnelle
- Typographie lisible (Nunito Sans)
- Animations fluides et transitions
- Icônes Bootstrap pour une meilleure UX
- Responsive design avec media queries

## 📞 Contact

- **Email** : john.doe@example.com
- **Téléphone** : 06 20 30 40 50
- **Adresse** : 40 Rue Laure Diebold, 69009 Lyon, France

## 🔗 Liens utiles

- [Site Portfolio](http://localhost:3000)
- [GitHub Repository](https://github.com/Faab8912/portfolio-johndoe)
- [Validateur W3C](https://validator.w3.org/)
- [Bootstrap Documentation](https://getbootstrap.com/docs/)
- [React Documentation](https://react.dev/)

## 📝 Commit History

Les commits ont été organisés de manière explicite pour suivre le déroulement du projet :

```
- Premier commit - Portfolio John Doe complet
- Ajout des validations W3C HTML
```

## 📄 Licence

Ce projet est personnel et à usage éducatif.

## 👨‍💻 Auteur

**John Doe**

- Développeur Web Full Stack en formation
- Centre Européen de Formation (CEF)
- [GitHub](https://github.com/Faab8912)
- [LinkedIn](https://linkedin.com)
- [Twitter](https://twitter.com)

---

**Dernière mise à jour** : Novembre 2025
