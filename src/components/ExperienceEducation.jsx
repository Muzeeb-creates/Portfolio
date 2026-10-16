import React from 'react';
import { GraduationCap, Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function ExperienceEducation({ identity }) {
  const isEngineer = identity === 'engineer';

  const education = {
    degree: 'Bachelor of Technology in Computer Science & Engineering',
    specialization: 'Focus in Artificial Intelligence & Machine Learning',
    institution: 'Marwadi University',
    period: 'Academic Foundation',
    highlights: [
      'Comprehensive coursework: Advanced Data Structures, Algorithms, Linear Algebra, Probability & Statistics',
      'Research focus on Computer Vision, Deep Learning architectures, and Distributed Systems',
      'Hands-on laboratory implementation of neural networks, data preprocessing, and model benchmarking'
    ]
  };

  const experience = isEngineer
    ? [
        {
          role: 'AI / Machine Learning Engineer',
          entity: '[Company / Research Lab Placeholder]',
          period: 'Engineering Milestone',
          type: 'Full-Time / Project Focus',
          description:
            'Architecting and evaluating deep learning models for production inference. Focused on computer vision pipelines, multi-modal LLM agent integration, and runtime optimization.',
          achievements: [
            'Implemented custom YOLOv8 detection and tracking pipelines optimized with TensorRT',
            'Designed scalable FastAPI microservices with Docker containerization for distributed inference',
            'Established reproducible experimentation benchmarks using MLflow and PyTorch'
          ]
        },
        {
          role: 'Software & Data Systems Engineer',
          entity: '[Engineering Team / Organization Placeholder]',
          period: 'Development Milestone',
          type: 'Applied Software Engineering',
          description:
            'Developed backend microservices, data ingestion engines, and high-throughput database interactions supporting intelligent applications.',
          achievements: [
            'Built robust RESTful APIs in Python and modern JavaScript frameworks',
            'Engineered automated data cleaning, validation, and feature extraction pipelines',
            'Collaborated on version control workflows, automated CI/CD testing, and code review standards'
          ]
        }
      ]
    : [
        {
          role: 'Quantitative Strategy & Algorithmic Researcher',
          entity: '[Independent Trading Desk / Quantitative Research]',
          period: 'Systematic Trading Milestone',
          type: 'Quantitative Edge',
          description:
            'Developing and validating statistical trading hypotheses across historical multi-asset data. Engineered vectorized backtesting scripts and automated risk boundary algorithms.',
          achievements: [
            'Coded custom Pine Script v5 indicators scanning real-time liquidity pools and fair value gaps',
            'Executed 1,000-run Monte Carlo simulations in Python to model tail-risk and maximum drawdown',
            'Standardized trade entry parameters ensuring strict 1:3+ minimum risk-to-reward ratios'
          ]
        },
        {
          role: 'Market Structure & Price Action Trader',
          entity: '[Proprietary / Independent Market Operations]',
          period: 'Execution Milestone',
          type: 'Discretionary Execution',
          description:
            'Executing rule-based intraday and swing setups in equity indices, crypto futures, and foreign exchange using institutional order flow principles.',
          achievements: [
            'Maintained 100% adherence to daily maximum loss limits and fixed 1% fractional risk models',
            'Documented over 200+ structured trade executions with detailed quantitative post-trade analysis',
            'Constructed a disciplined anti-tilt operating protocol eliminating emotional interference'
          ]
        }
      ];

  return (
    <section id="experience" className="section-padding">
      <div className="section-container">
        
        {/* Header Block */}
        <div className="section-header-block identity-fade" key={`exp-head-${identity}`}>
          <div className="section-badge">
            <span className="dot" />
            <span>{isEngineer ? 'JOURNEY & FOUNDATION' : 'TRADING MILESTONES & DISCIPLINE'}</span>
          </div>
          <h2 className="section-title font-display">
            {isEngineer ? 'Experience & Academic Background' : 'Trading Journey & Academic Foundations'}
          </h2>
          <p className="section-subtitle">
            {isEngineer
              ? 'A disciplined trajectory advancing from computational fundamentals to advanced artificial intelligence engineering.'
              : 'A systematic progression from market theory and statistical modeling to strict real-time execution.'}
          </p>
        </div>

        {/* Timeline Sprint Layout (Editorial Timeline) */}
        <div className="experience-editorial-layout identity-fade" key={`exp-grid-${identity}`}>
          
          {/* Experience Column */}
          <div className="timeline-column">
            <div className="column-title-pill font-mono">
              <Briefcase size={16} className="text-crimson" />
              <span>{isEngineer ? 'PROFESSIONAL MILESTONES' : 'TRADING OPERATIONS & RESEARCH'}</span>
            </div>

            <div className="timeline-cards-list">
              {experience.map((item, idx) => (
                <div key={idx} className="editorial-card timeline-card">
                  <div className="timeline-card-header">
                    <div>
                      <h3 className="timeline-role font-display">{item.role}</h3>
                      <div className="timeline-entity">{item.entity}</div>
                    </div>
                    <div className="timeline-period-badge font-mono">
                      <Calendar size={12} />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  <p className="timeline-desc">{item.description}</p>

                  <ul className="timeline-bullets">
                    {item.achievements.map((bullet, bIdx) => (
                      <li key={bIdx} className="timeline-bullet-item">
                        <CheckCircle2 size={14} className="bullet-check text-crimson" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="card-ambient-glow" />
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="timeline-column">
            <div className="column-title-pill font-mono">
              <GraduationCap size={16} className="text-crimson" />
              <span>ACADEMIC FOUNDATION</span>
            </div>

            <div className="editorial-card timeline-card education-highlight-card">
              <div className="timeline-card-header">
                <div>
                  <h3 className="timeline-role font-display">{education.degree}</h3>
                  <div className="timeline-entity text-crimson">{education.specialization}</div>
                </div>
                <div className="timeline-period-badge font-mono">
                  <Calendar size={12} />
                  <span>{education.period}</span>
                </div>
              </div>

              <div className="edu-institution-tag font-mono">
                <MapPin size={13} />
                <span>{education.institution}</span>
              </div>

              <div className="edu-divider" />

              <h4 className="edu-subheading font-display">Core Academic Rigor & Focus</h4>
              <ul className="timeline-bullets">
                {education.highlights.map((highlight, hIdx) => (
                  <li key={hIdx} className="timeline-bullet-item">
                    <CheckCircle2 size={14} className="bullet-check text-crimson" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {/* Verified academic placeholder tag */}
              <div className="edu-verified-tag font-mono">
                <span>✦ Academic Credentials Available Upon Formal Verification</span>
              </div>

              <div className="card-ambient-glow" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
