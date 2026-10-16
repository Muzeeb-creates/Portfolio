import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { Github, Linkedin, Twitter } from './BrandIcons';

export default function Footer({ activeIdentity, onSelectIdentity }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="section-container">
        
        <div className="footer-top-grid">
          
          {/* Brand Col */}
          <div className="footer-brand-col">
            <h3 className="footer-brand-title font-display">Mohammadmujeeb Kazi</h3>
            <p className="footer-brand-tagline">
              Engineering intelligence through neural architectures and navigating financial markets with disciplined risk management.
            </p>
            <div className="footer-identity-badge font-mono">
              <span className="dot" />
              <span>ACTIVE PERSPECTIVE: {activeIdentity === 'engineer' ? 'AI / ML ENGINEER' : 'SYSTEMATIC TRADER'}</span>
            </div>
          </div>

          {/* Navigation Col */}
          <div className="footer-links-col">
            <h4 className="footer-col-title font-mono">NAVIGATION</h4>
            <ul className="footer-links-list">
              <li><button type="button" onClick={() => scrollTo('hero')} className="footer-link-btn">Home</button></li>
              <li><button type="button" onClick={() => scrollTo('about')} className="footer-link-btn">About</button></li>
              <li><button type="button" onClick={() => scrollTo('skills')} className="footer-link-btn">Skills</button></li>
              <li><button type="button" onClick={() => scrollTo('projects')} className="footer-link-btn">Projects</button></li>
              <li><button type="button" onClick={() => scrollTo('certifications')} className="footer-link-btn">Certifications</button></li>
              <li><button type="button" onClick={() => scrollTo('experience')} className="footer-link-btn">Experience</button></li>
              <li><button type="button" onClick={() => scrollTo('contact')} className="footer-link-btn">Contact</button></li>
            </ul>
          </div>

          {/* Identity Switch Col */}
          <div className="footer-links-col">
            <h4 className="footer-col-title font-mono">DUAL IDENTITY</h4>
            <ul className="footer-links-list">
              <li>
                <button
                  type="button"
                  onClick={() => onSelectIdentity('engineer')}
                  className={`footer-link-btn ${activeIdentity === 'engineer' ? 'active-footer-identity' : ''}`}
                >
                  As an Engineer
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectIdentity('trader')}
                  className={`footer-link-btn ${activeIdentity === 'trader' ? 'active-footer-identity' : ''}`}
                >
                  As a Trader
                </button>
              </li>
            </ul>
          </div>

          {/* Social & Contact Col */}
          <div className="footer-links-col">
            <h4 className="footer-col-title font-mono">CONNECT</h4>
            <ul className="footer-links-list">
              <li>
                <a href="https://github.com/Muzeeb-creates" target="_blank" rel="noopener noreferrer" className="footer-ext-link">
                  <Github size={14} />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/muzeeb-kazi-476516440" target="_blank" rel="noopener noreferrer" className="footer-ext-link">
                  <Linkedin size={14} />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-ext-link">
                  <Twitter size={14} />
                  <span>Twitter / X</span>
                </a>
              </li>
              <li>
                <a href="mailto:mohammadmujeebkazi@example.com" className="footer-ext-link">
                  <Mail size={14} />
                  <span>Email</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="footer-copy font-mono">
            © {new Date().getFullYear()} Mohammadmujeeb Kazi. Built with React & Vite. All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="back-to-top-btn font-mono"
            aria-label="Back to top"
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
}
