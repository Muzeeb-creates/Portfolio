import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero({ identity }) {
  const isEngineer = identity === 'engineer';

  const content = isEngineer
    ? {
        headlineLine1: 'AI/ML',
        headlineLine2: 'Engineer',
        cardHeadline: 'Building intelligence that solves real problems.',
        cardDescription:
          'I\'m exploring machine learning, computer vision, and software development to build intelligent systems with practical applications.',
        highlights: [
          { number: '#01', title: 'Machine Learning' },
          { number: '#02', title: 'Deep Learning & Vision' },
          { number: '#03', title: 'Full-Stack AI' },
          { number: '#04', title: 'Data Systems' }
        ]
      }
    : {
        headlineLine1: 'Quantitative',
        headlineLine2: 'Trader',
        cardHeadline: 'Precision over prediction with asymmetric market edge.',
        cardDescription:
          'Focused on market structure, disciplined risk management, algorithmic execution, and continuous statistical review.',
        highlights: [
          { number: '#01', title: 'Market Structure' },
          { number: '#02', title: 'Risk Management' },
          { number: '#03', title: 'Algorithmic Execution' },
          { number: '#04', title: 'Quantitative Edge' }
        ]
      };

  const scrollToContact = (e) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section">
      {/* 1. TOP-RIGHT "GET IN TOUCH" BUTTON (Matching screenshot) */}
      <a 
        href="#contact" 
        className="hero-top-contact-btn"
        onClick={scrollToContact}
        aria-label="Get in touch"
      >
        <span className="contact-btn-text">Get in touch</span>
        <span className="contact-btn-arrow-circle" aria-hidden="true">
          <ArrowRight size={14} strokeWidth={2.4} />
        </span>
      </a>

      {/* 2. HERO MAIN CONTAINER */}
      <div className="hero-container">
        
        {/* Main Composition: Left Heading + Right Card */}
        <div className="hero-main-composition identity-fade" key={identity}>
          
          {/* Left Side: Greeting + Massive 2-Line Heading */}
          <div className="hero-left-intro">
            <div className="hero-greeting font-serif">
              <span className="greeting-hey">Hey,</span>{' '}
              <span className="greeting-name">I’m Muzeeb</span>
            </div>

            <h1 className="hero-headline-title font-display">
              <span className="headline-line">{content.headlineLine1}</span>
              <span className="headline-line">{content.headlineLine2}</span>
            </h1>
          </div>

          {/* Right Side: Editorial Info Panel */}
          <div className="hero-right-card">
            <h2 className="hero-card-headline">
              {content.cardHeadline}
            </h2>
            <p className="hero-card-desc">
              {content.cardDescription}
            </p>
          </div>

        </div>

        {/* 3. BOTTOM SKILLS STRIP */}
        <div className="hero-skills-strip identity-fade" key={`skills-strip-${identity}`}>
          <div className="skills-strip-divider" aria-hidden="true" />
          <div className="skills-strip-items">
            {content.highlights.map((item, idx) => (
              <div key={idx} className="skills-strip-item">
                <span className="strip-number font-mono">{item.number}</span>
                <span className="strip-label">{item.title}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

