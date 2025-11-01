// Import des images depuis le dossier assets
import seoImage from "../assets/images/portfolio-seo.jpg";
import codeImage from "../assets/images/portfolio-code.jpg";
import zenImage from "../assets/images/portfolio-zen.jpg";
import freshFoodImage from "../assets/images/portfolio-fresh-food.jpg";
import restaurantImage from "../assets/images/portfolio-restaurant.jpg";
import webDesignImage from "../assets/images/portfolio-web-design.jpg";

// Liste des projets du portfolio
const projects = [
  {
    id: 1,
    title: "SEO & Référencement",
    description:
      "Optimisation SEO complète pour améliorer le positionnement sur les moteurs de recherche.",
    image: seoImage,
    technologies: ["SEO", "Analytics", "Marketing"],
    category: "SEO",
  },
  {
    id: 2,
    title: "Développement Web",
    description:
      "Création de sites web modernes et responsive avec les dernières technologies.",
    image: codeImage,
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "Développement",
  },
  {
    id: 3,
    title: "Application Zen",
    description:
      "Application de méditation et de bien-être avec interface intuitive.",
    image: zenImage,
    technologies: ["React", "CSS3", "API"],
    category: "Application",
  },
  {
    id: 4,
    title: "Fresh Food - E-commerce",
    description:
      "Plateforme e-commerce pour la vente de produits frais et bio.",
    image: freshFoodImage,
    technologies: ["React", "Node.js", "MongoDB"],
    category: "E-commerce",
  },
  {
    id: 5,
    title: "Restaurant Japonais",
    description:
      "Site vitrine pour restaurant avec système de réservation en ligne.",
    image: restaurantImage,
    technologies: ["WordPress", "PHP", "MySQL"],
    category: "Site Vitrine",
  },
  {
    id: 6,
    title: "Web Design Moderne",
    description:
      "Conception d'interfaces utilisateur modernes et ergonomiques.",
    image: webDesignImage,
    technologies: ["Figma", "Adobe XD", "CSS"],
    category: "Design",
  },
];

export default projects;
