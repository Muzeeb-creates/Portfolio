import React, { useState, useEffect } from 'react';
import BackgroundCanvas from './components/BackgroundCanvas';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import Certifications from './components/Certifications';
import ExperienceEducation from './components/ExperienceEducation';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeIdentity, setActiveIdentity] = useState('engineer');
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  // Sync state with URL hash (e.g. #/project/scanigo or #/project/tradelog)
  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/project/')) {
        const id = hash.replace('#/project/', '').trim().toLowerCase();
        setSelectedProjectId(id);
      } else {
        setSelectedProjectId(null);
      }
    };

    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  const handleSelectIdentity = (identity) => {
    if (identity === activeIdentity) return;
    setActiveIdentity(identity);
  };

  const handleOpenProject = (id) => {
    window.location.hash = `#/project/${id}`;
    setSelectedProjectId(id);
  };

  const handleBackToPortfolio = () => {
    window.location.hash = '#projects';
    setSelectedProjectId(null);
    setTimeout(() => {
      const el = document.getElementById('projects');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 60);
  };

  return (
    <div className="portfolio-root">
      {/* 1. Cinematic Scroll-Controlled Background Animation */}
      <BackgroundCanvas />

      {/* 2. Main Content Layers */}
      <div className="app-wrapper">
        {selectedProjectId ? (
          /* Dedicated Project Details View */
          <ProjectDetail
            projectId={selectedProjectId}
            onBack={handleBackToPortfolio}
            onSwitchProject={handleOpenProject}
          />
        ) : (
          /* Main Portfolio View */
          <>
            {/* Centered Two-Row Minimal Header */}
            <Header 
              activeIdentity={activeIdentity} 
              onSelectIdentity={handleSelectIdentity} 
            />

            {/* 1. Hero */}
            <Hero identity={activeIdentity} />

            {/* 2. About */}
            <About identity={activeIdentity} />

            {/* 3. Skills */}
            <Skills identity={activeIdentity} />

            {/* 4. Projects (Horizontal Carousel) */}
            <Projects 
              identity={activeIdentity} 
              onOpenProject={handleOpenProject}
            />

            {/* 5. Certifications */}
            <Certifications identity={activeIdentity} />

            {/* 6. Experience and Education */}
            <ExperienceEducation identity={activeIdentity} />

            {/* 7. Contact */}
            <Contact identity={activeIdentity} />

            {/* 8. Footer */}
            <Footer 
              activeIdentity={activeIdentity} 
              onSelectIdentity={handleSelectIdentity} 
            />
          </>
        )}
      </div>
    </div>
  );
}
