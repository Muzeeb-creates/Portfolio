import React, { useRef } from 'react';
import { Award, ExternalLink, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import awsCertImg from '../assets/certificates/aws-academy-certificate.png';
import ciiCertImg from '../assets/certificates/cii-certificate.png';
import udemyCertImg from '../assets/certificates/udemy-ds-ml-certificate.jpg';
import be10xCertImg from '../assets/certificates/be10x-certificate.png';
import outskillCertImg from '../assets/certificates/outskill-certificate.jpg';

export default function Certifications({ identity }) {
  const isEngineer = identity === 'engineer';
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.34;
      scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.34;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const certificates = isEngineer
    ? [
        {
          id: 'cert-aws',
          title: 'AWS Academy Graduate - Generative AI Foundations',
          issuer: 'AWS Academy',
          date: 'AWS Training Badge',
          credentialId: 'Credly: f8917c96-8703-4b48',
          previewImage: awsCertImg,
          skills: ['Generative AI', 'AWS Cloud', 'Foundation Models', 'Prompt Design'],
          description:
            'Foundational training covering generative AI architectures, Amazon Bedrock, foundation models, and cloud-based AI deployment.'
        },
        {
          id: 'cert-cii',
          title: 'Foundational Course on Applied Machine Learning and AI',
          issuer: 'Confederation of Indian Industry (CII) & HP Centre for AI',
          date: 'NCVET Recognised',
          credentialId: '23CII-FJ26-79407',
          previewImage: ciiCertImg,
          skills: ['Applied ML', 'Model Evaluation', 'AI Pipelines', 'Supervised Learning'],
          description:
            'Government and industry accredited curriculum spanning applied machine learning algorithms, model training, and AI pipelines.'
        },
        {
          id: 'cert-udemy',
          title: 'Complete Data Science, Machine Learning, DL, NLP Bootcamp',
          issuer: 'Udemy / Krish Naik (KRISHAI Technologies)',
          date: '101.5 Total Hours',
          credentialId: 'UC-cfd339f7-1b5c-4906-bbc9-c5b89c687611',
          previewImage: udemyCertImg,
          skills: ['Data Science', 'Machine Learning', 'Deep Learning', 'NLP'],
          description:
            'In-depth 101.5-hour bootcamp covering statistical data science, end-to-end ML workflows, deep neural networks, and NLP pipelines.'
        },
        {
          id: 'cert-be10x',
          title: 'AI Tools and ChatGPT Workshop',
          issuer: 'Be10x',
          date: 'Workshop Certified',
          credentialId: 'be10x Verified',
          previewImage: be10xCertImg,
          skills: ['ChatGPT & LLMs', 'AI Tools', 'Workflow Automation', 'Rapid Productivity'],
          description:
            'Hands-on workshop focused on leveraging generative AI tools, prompt engineering, and workflow automation for accelerated productivity.'
        },
        {
          id: 'cert-outskill',
          title: 'Generative AI Mastermind',
          issuer: 'Outskill (Vaibhav Sisinty)',
          date: 'Certificate of Completion',
          credentialId: 'Outskill Certified',
          previewImage: outskillCertImg,
          skills: ['Generative AI', 'AI Product Strategy', 'LLM Workflows', 'Autonomous Agents'],
          description:
            'Intensive masterclass focused on generative AI strategy, cutting-edge AI toolsets, and practical enterprise deployment.'
        }
      ]
    : [
        {
          id: 'cert-trd-1',
          title: 'Financial Markets & Quantitative Structure',
          issuer: 'Financial Market Analysis Institute',
          date: 'Verified Certificate',
          credentialId: 'FM-QUANT-2025 [Placeholder]',
          skills: ['Market Microstructure', 'Order Flow Mechanics', 'Liquidity Dynamics', 'Asset Correlation'],
          description:
            'Quantitative study of intermarket dynamics, liquidity distribution curves, and non-linear institutional price delivery.'
        },
        {
          id: 'cert-trd-2',
          title: 'Advanced Risk Management & Drawdown Control',
          issuer: 'Capital Preservation Protocols',
          date: 'Verified Mastery',
          credentialId: 'RISK-CAP-PROT [Placeholder]',
          skills: ['Position Sizing', 'Kelly Criterion', 'Value at Risk (VaR)', 'Drawdown Controls'],
          description:
            'Strict mathematical certification on asymmetric risk-to-reward profiling, capital allocation, and emotional anti-tilt frameworks.'
        },
        {
          id: 'cert-trd-3',
          title: 'Price Action & Institutional Liquidity Mastery',
          issuer: 'Market Structure Academy',
          date: 'Specialized Framework',
          credentialId: 'TA-STRUCTURE-991 [Placeholder]',
          skills: ['Fair Value Gaps (FVG)', 'Break of Structure', 'Liquidity Sweeps', 'Order Blocks'],
          description:
            'Rigorous systemization of pure price action, imbalance mitigation, and high-probability entry models without indicator lag.'
        }
      ];

  return (
    <section id="certifications" className="certifications-section">
      <div className="section-container">
        
        {/* Header Block with Navigation Controls */}
        <div className="certifications-header-row identity-fade" key={`cert-head-${identity}`}>
          <div className="certifications-header-left">
            <div className="section-badge font-mono">
              <span className="dot" />
              <span>{isEngineer ? 'VERIFIED CREDENTIALS' : 'MARKET & RISK QUALIFICATIONS'}</span>
            </div>
            <h2 className="section-title font-display">
              {isEngineer ? 'Certifications & Accreditations' : 'Trading Credentials & Competency Certifications'}
            </h2>
            <p className="section-subtitle">
              {isEngineer
                ? 'Accredited coursework and formal credentials in machine learning, cloud AI, and generative architectures.'
                : 'Formal qualifications and standardized frameworks in quantitative risk, price action mechanics, and market analysis.'}
            </p>
          </div>

          {/* Carousel Arrow Controls */}
          <div className="cert-arrows-wrap" role="group" aria-label="Certificates Carousel Controls">
            <button
              type="button"
              onClick={scrollLeft}
              className="carousel-arrow-btn"
              aria-label="Previous Certificates"
              title="Previous Certificates"
            >
              <ChevronLeft size={18} strokeWidth={2.2} />
            </button>
            <button
              type="button"
              onClick={scrollRight}
              className="carousel-arrow-btn"
              aria-label="Next Certificates"
              title="Next Certificates"
            >
              <ChevronRight size={18} strokeWidth={2.2} />
            </button>
          </div>
        </div>

        {/* Horizontal Scrollable Row */}
        <div 
          className="certifications-scroll-container" 
          ref={scrollContainerRef}
          tabIndex={0}
          role="region"
          aria-label="Certifications horizontal carousel"
        >
          <div className="certifications-track">
            {certificates.map((cert) => (
              <div key={cert.id} className="editorial-card cert-card">
                
                <div className="cert-card-top">
                  <div className="cert-badge-icon">
                    <Award size={18} className="cert-icon" />
                  </div>
                  <div className="cert-status-pill font-mono">
                    <ShieldCheck size={12} className="text-crimson" />
                    <span>{cert.date}</span>
                  </div>
                </div>

                <h3 className="cert-title font-display" title={cert.title}>
                  {cert.title}
                </h3>
                <div className="cert-issuer">{cert.issuer}</div>

                <p className="cert-description">{cert.description}</p>

                {/* Certificate Visual Preview Frame */}
                {cert.previewImage ? (
                  <div className="cert-preview-frame">
                    <a
                      href={cert.previewImage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cert-preview-link"
                      title={`Click to view full ${cert.title} certificate`}
                      aria-label={`View full certificate for ${cert.title}`}
                    >
                      <img
                        src={cert.previewImage}
                        alt={`${cert.title} Certificate`}
                        className="cert-preview-img"
                        loading="lazy"
                      />
                      <div className="cert-preview-overlay font-mono">
                        <ExternalLink size={11} />
                        <span>View Certificate</span>
                      </div>
                    </a>
                  </div>
                ) : (
                  <div className="cert-id-row font-mono">
                    <span className="cert-id-label">Credential ID:</span>
                    <span className="cert-id-val">{cert.credentialId}</span>
                  </div>
                )}

                {/* Skills covered */}
                <div className="cert-skills-wrap">
                  {cert.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="cert-skill-pill">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="card-ambient-glow" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
