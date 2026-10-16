import React, { useEffect } from 'react';
import { ArrowLeft, ArrowRight, ExternalLink, CheckCircle2, ShieldCheck, Code2, Layers, Cpu, Sparkles } from 'lucide-react';
import { Github } from './BrandIcons';
import { PROJECTS } from '../data/projectsData';

export default function ProjectDetail({ projectId, onBack, onSwitchProject }) {
  const project = PROJECTS.find((p) => p.id === projectId) || PROJECTS[0];
  const otherProject = PROJECTS.find((p) => p.id !== project.id) || PROJECTS[1];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [projectId]);

  return (
    <div className="project-detail-view identity-fade">
      {/* Top Floating Navigation Bar */}
      <nav className="detail-top-nav" aria-label="Project Navigation">
        <button
          type="button"
          onClick={onBack}
          className="detail-back-btn"
          aria-label="Back to Portfolio"
        >
          <ArrowLeft size={16} />
          <span>Back to Portfolio</span>
        </button>

        <div className="detail-nav-brand font-mono">
          <span className="detail-nav-dot" />
          <span>{project.badge}</span>
          <span className="detail-nav-sep">/</span>
          <span className="detail-nav-name">{project.name}</span>
        </div>

        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="detail-repo-link"
          aria-label="View Project Repository on GitHub"
        >
          <Github size={15} />
          <span className="detail-repo-text">Repository</span>
          <ExternalLink size={13} />
        </a>
      </nav>

      {/* Main Container */}
      <div className="detail-container">
        
        {/* Project Header Hero */}
        <header className="detail-hero-block">
          <div className="detail-badge-row">
            <span className="detail-pill font-mono">{project.badge}</span>
            <span className="detail-status font-mono">
              <span className="status-dot-active" />
              <span>PRODUCTION ARCHITECTURE</span>
            </span>
          </div>

          <h1 className="detail-main-title font-display">
            {project.name}
          </h1>

          <p className="detail-tagline font-serif">
            "{project.tagline}"
          </p>

          <p className="detail-lead-desc">
            {project.fullDescription}
          </p>

          {/* Quick Metrics Bar */}
          <div className="detail-metrics-grid font-mono">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="detail-metric-card">
                <span className="metric-card-label">{metric.label}</span>
                <span className="metric-card-value">{metric.value}</span>
              </div>
            ))}
          </div>

          {/* CTA Actions */}
          <div className="detail-actions-row">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="detail-primary-action"
            >
              <Github size={16} />
              <span>Explore GitHub Repository</span>
              <ArrowRight size={15} />
            </a>

            <button
              type="button"
              onClick={onBack}
              className="detail-secondary-action"
            >
              <span>Return to Projects Carousel</span>
            </button>
          </div>
        </header>

        {/* Section 1: Purpose & Core Problem Solved */}
        <section className="detail-section-block">
          <div className="detail-section-tag font-mono">
            <span className="tag-number">01</span>
            <span className="tag-sep">/</span>
            <span>PURPOSE & OBJECTIVE</span>
          </div>
          <h2 className="detail-section-heading font-serif">
            The Problem Statement & Practical Vision
          </h2>
          <div className="detail-editorial-card">
            <p className="detail-text-p">{project.purpose}</p>
          </div>
        </section>

        {/* Section 2: Key Features & Engineering Highlights */}
        <section className="detail-section-block">
          <div className="detail-section-tag font-mono">
            <span className="tag-number">02</span>
            <span className="tag-sep">/</span>
            <span>CORE CAPABILITIES</span>
          </div>
          <h2 className="detail-section-heading font-serif">
            Key Features & Functional Architecture
          </h2>
          <div className="detail-features-grid">
            {project.highlights.map((feat, idx) => (
              <div key={idx} className="detail-feature-card">
                <div className="feature-card-header">
                  <div className="feature-icon-badge">
                    <CheckCircle2 size={16} />
                  </div>
                  <h3 className="feature-card-title">{feat.title}</h3>
                </div>
                <p className="feature-card-desc">{feat.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Technology Stack */}
        <section className="detail-section-block">
          <div className="detail-section-tag font-mono">
            <span className="tag-number">03</span>
            <span className="tag-sep">/</span>
            <span>TECHNOLOGY STACK</span>
          </div>
          <h2 className="detail-section-heading font-serif">
            Technologies & Tools Employed
          </h2>
          <div className="detail-tech-pills-wrap">
            {project.technologies.map((tech, idx) => (
              <span key={idx} className="detail-tech-pill font-mono">
                <Code2 size={14} className="tech-pill-icon" />
                <span>{tech}</span>
              </span>
            ))}
          </div>
        </section>

        {/* Bottom Switcher & Return Bar */}
        <footer className="detail-footer-bar">
          <button
            type="button"
            onClick={onBack}
            className="detail-footer-back-btn font-mono"
          >
            <ArrowLeft size={16} />
            <span>RETURN TO MAIN PORTFOLIO</span>
          </button>

          {otherProject && (
            <button
              type="button"
              onClick={() => onSwitchProject(otherProject.id)}
              className="detail-footer-next-btn font-mono"
            >
              <span>NEXT PROJECT: {otherProject.name}</span>
              <ArrowRight size={16} />
            </button>
          )}
        </footer>

      </div>
    </div>
  );
}
