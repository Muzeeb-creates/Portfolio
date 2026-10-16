import React, { useState } from 'react';
import { Mail, MapPin, Send, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Github, Linkedin, Twitter, Instagram } from './BrandIcons';

export default function Contact({ identity }) {
  const isEngineer = identity === 'engineer';
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: isEngineer ? 'Engineering Role / AI Project' : 'Trading Collaboration / Quantitative',
    message: ''
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      // Keep state clear after a moment if desired or keep success message
    }, 4000);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="section-container">
        
        <div className="contact-editorial-wrapper">
          
          {/* Top Intro Section (Styled after screen recording frame 00:10) */}
          <div className="contact-header-block identity-fade" key={`contact-head-${identity}`}>
            <div className="section-badge">
              <span className="dot" />
              <span>LET'S CONNECT</span>
            </div>

            <h2 className="contact-title font-display">
              {isEngineer ? 'READY TO BUILD INTELLIGENT SYSTEMS?' : 'READY TO TALK MARKETS & EXECUTION?'}
            </h2>

            <p className="contact-subtitle">
              {isEngineer
                ? 'Open to high-impact AI/ML engineering roles, production vision deployments, and innovative software architecture projects.'
                : 'Available for discussions on market structure, quantitative strategy development, and disciplined trading execution.'}
            </p>
          </div>

          {/* Grid: Form on Left, Direct Info on Right */}
          <div className="contact-main-grid identity-fade" key={`contact-grid-${identity}`}>
            
            {/* Interactive Form */}
            <div className="editorial-card contact-form-card">
              {formSubmitted ? (
                <div className="contact-success-state">
                  <div className="success-icon-wrap">
                    <CheckCircle2 size={44} className="text-crimson" />
                  </div>
                  <h3 className="success-title font-display">Inquiry Sent Successfully</h3>
                  <p className="success-desc">
                    Thank you for reaching out, {formData.name || 'there'}. I have received your message regarding{' '}
                    <span className="text-crimson font-mono">{formData.topic}</span> and will respond promptly.
                  </p>
                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={() => setFormSubmitted(false)}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group-row">
                    <div className="form-field">
                      <label htmlFor="name" className="field-label font-mono">YOUR NAME *</label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        placeholder="John Doe"
                        className="form-input"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="email" className="field-label font-mono">YOUR EMAIL *</label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        placeholder="john@example.com"
                        className="form-input"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-field">
                    <label htmlFor="topic" className="field-label font-mono">INQUIRY TYPE</label>
                    <select
                      id="topic"
                      name="topic"
                      className="form-select"
                      value={formData.topic}
                      onChange={handleChange}
                    >
                      {isEngineer ? (
                        <>
                          <option value="AI / ML Engineering Role">AI / ML Engineering Role</option>
                          <option value="Computer Vision System Architecture">Computer Vision System Architecture</option>
                          <option value="LLM Agent / RAG Implementation">LLM Agent / RAG Implementation</option>
                          <option value="Full-Stack AI Project">Full-Stack AI Project</option>
                          <option value="General Technical Consultation">General Technical Consultation</option>
                        </>
                      ) : (
                        <>
                          <option value="Quantitative Trading Collaboration">Quantitative Trading Collaboration</option>
                          <option value="Pine Script & Custom Indicators">Pine Script & Custom Indicators</option>
                          <option value="Market Structure & Order Flow Discussion">Market Structure & Order Flow Discussion</option>
                          <option value="Algorithmic Backtesting Consultation">Algorithmic Backtesting Consultation</option>
                          <option value="Prop Desk Opportunity">Prop Desk Opportunity</option>
                        </>
                      )}
                    </select>
                  </div>

                  <div className="form-field">
                    <label htmlFor="message" className="field-label font-mono">YOUR MESSAGE *</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      placeholder={
                        isEngineer
                          ? 'Share details about your team, technical objectives, or the problem you are looking to solve...'
                          : 'Share details regarding market setups, backtesting parameters, or collaboration scope...'
                      }
                      className="form-textarea"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  <button type="submit" className="btn-primary contact-submit-btn">
                    <span>Submit Inquiry</span>
                    <ArrowRight size={17} />
                  </button>
                </form>
              )}
            </div>

            {/* Direct Info & Social Channels */}
            <div className="contact-details-column">
              
              <div className="editorial-card direct-info-card">
                <h3 className="direct-info-title font-display">Direct Channels</h3>
                <p className="direct-info-desc">
                  Prefer direct communication? Reach out via email or connect through professional networks.
                </p>

                <div className="direct-channels-list">
                  <a href="mailto:muzeebworks@gmail.com" className="direct-channel-item">
                    <div className="channel-icon-pill">
                      <Mail size={16} />
                    </div>
                    <div>
                      <div className="channel-label font-mono">PRIMARY EMAIL</div>
                      <div className="channel-value">muzeebworks@gmail.com</div>
                    </div>
                  </a>

                  <div className="direct-channel-item">
                    <div className="channel-icon-pill">
                      <MapPin size={16} />
                    </div>
                    <div>
                      <div className="channel-label font-mono">LOCATION</div>
                      <div className="channel-value">Marwadi University</div>
                    </div>
                  </div>
                </div>

                <div className="direct-socials-group">
                  <div className="socials-label font-mono">PERSONAL NETWORK</div>
                  <div className="socials-pills-row">
                    <a
                      href="https://github.com/Muzeeb-creates"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-pill"
                    >
                      <Github size={15} />
                      <span>GitHub</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/muzeeb-kazi-476516440"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-pill"
                    >
                      <Linkedin size={15} />
                      <span>LinkedIn</span>
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-pill"
                    >
                      <Twitter size={15} />
                      <span>Twitter / X</span>
                    </a>
                    <a
                      href="https://www.instagram.com/muzeeb__kazi?srtk=Z2lxa2gzdW10dDZh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-pill"
                    >
                      <Instagram size={15} />
                      <span>Instagram</span>
                    </a>
                  </div>
                </div>

                <div className="card-ambient-glow" />
              </div>

              {/* Status / Working Philosophy Badge */}
              <div className="status-quote-card">
                <div className="status-live-pill font-mono">
                  <span className="live-pulse" />
                  <span>STATUS: AVAILABLE FOR NEW ENGAGEMENTS</span>
                </div>
                <p className="status-quote-text">
                  {isEngineer
                    ? '"Obsessed with engineering simplicity and mathematical clarity in high-performance intelligence."'
                    : '"Trading is an infinite game of discipline, humility, and mathematical edge."'}
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
