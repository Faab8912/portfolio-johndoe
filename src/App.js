import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/custom.css";
// Import des composants de layout
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
// Import des pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import LegalNotice from "./pages/LegalNotice";
import ProjectDetail from "./pages/ProjectDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mentions-legales" element={<LegalNotice />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
