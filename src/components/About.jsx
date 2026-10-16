import React from 'react';

export default function About({ identity }) {
  const isEngineer = identity === 'engineer';

  const content = isEngineer
    ? {
        sectionTagNum: '01 /',
        sectionTagLabel: 'ABOUT ME',
        headingLine1: 'Curious by nature.',
        headingLine2: 'Driven to ',
        headingAccent: 'build.',
        bio: "I'm Muzeeb Kazi, a CSE-AIML student at Marwadi University. I've always been fascinated by automation and how intelligent technology can make everyday tasks simpler. I enjoy coding, exploring AI models, and turning ideas into practical projects.",
        visionLabel: 'MY VISION',
        visionStatementLine1: 'One of my biggest goals is to build',
        visionStatementLine2: 'my own personal AI assistant.',
        visionSubtext: 'Technology that understands, assists, and automates.',
        aiLabels: ['AI / ML', 'Coding', 'Development', 'Automation'],
        bottomDetail: 'BETTER TOOLS   /   SMARTER LIVING'
      }
    : {
        sectionTagNum: '01 /',
        sectionTagLabel: 'ABOUT ME',
        headingLine1: 'Disciplined by risk.',
        headingLine2: 'Driven to ',
        headingAccent: 'compound.',
        bio: 'As an independent trader, I analyze market structure, liquidity profiling, and systematic risk across asset classes. I combine quantitative discipline with rule-based execution to navigate dynamic financial markets.',
        visionLabel: 'MY VISION',
        visionStatementLine1: 'One of my biggest goals is to achieve',
        visionStatementLine2: 'scalable, asymmetric market edge.',
        visionSubtext: 'Risk protocols that protect, compound, and endure.',
        aiLabels: ['Market Structure', 'Risk Protocol', 'Order Flow', 'Quantitative Edge'],
        bottomDetail: 'DISCIPLINED RISK   /   CONSISTENT EDGE'
      };

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        
        {/* Main Two-Column Composition */}
        <div className="about-main-grid identity-fade" key={identity}>
          
          {/* Left Column: Tag, Heading, Bio, Vision */}
          <div className="about-left-col">
            
            {/* Section Tag */}
            <div className="about-tag-row">
              <span className="about-tag-crimson font-mono">{content.sectionTagNum}</span>
              <span className="about-tag-label font-mono">{content.sectionTagLabel}</span>
              <div className="about-tag-line" aria-hidden="true" />
            </div>

            {/* Main Serif Heading */}
            <h2 className="about-heading font-serif">
              {content.headingLine1}<br />
              {content.headingLine2}
              <span className="about-heading-accent">{content.headingAccent}</span>
            </h2>

            {/* Bio Paragraph */}
            <p className="about-bio-text">
              {content.bio}
            </p>

            {/* Vision Block */}
            <div className="about-vision-block">
              <div className="vision-accent-bar" aria-hidden="true" />
              <div className="vision-content">
                <div className="vision-label-row">
                  <span className="vision-label font-mono">{content.visionLabel}</span>
                  <div className="vision-label-line" aria-hidden="true" />
                </div>
                <p className="vision-statement font-serif">
                  {content.visionStatementLine1}<br />
                  {content.visionStatementLine2}
                </p>
                <p className="vision-subtext">
                  {content.visionSubtext}
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: AI Circular Visual */}
          <div className="about-right-col">
            <div className="about-ai-visual-wrap">
              <svg
                viewBox="0 0 580 320"
                className="about-ai-visual"
                aria-hidden="true"
                role="img"
              >
                <defs>
                  {/* Subtle crimson glow filter */}
                  <filter id="aboutCrimsonGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  {/* Dark black/burgundy translucent radial background */}
                  <radialGradient id="aboutDarkOverlay" cx="34%" cy="50%" r="56%">
                    <stop offset="0%" stopColor="#050508" stopOpacity="0.75" />
                    <stop offset="35%" stopColor="#12050e" stopOpacity="0.62" />
                    <stop offset="65%" stopColor="#1a0612" stopOpacity="0.32" />
                    <stop offset="85%" stopColor="#070709" stopOpacity="0.08" />
                    <stop offset="100%" stopColor="#070709" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient id="aboutCenterAura" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#e52b50" stopOpacity="0.32" />
                    <stop offset="50%" stopColor="#e52b50" stopOpacity="0.08" />
                    <stop offset="100%" stopColor="#e52b50" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Dark Radial Base behind circular graphic & connectors */}
                <ellipse cx="220" cy="160" rx="270" ry="165" fill="url(#aboutDarkOverlay)" />

                {/* Central Soft Glow Aura */}
                <circle cx="180" cy="160" r="48" fill="url(#aboutCenterAura)" />

                {/* Concentric Circles */}
                {/* Ring 1 - Inner */}
                <circle
                  cx="180"
                  cy="160"
                  r="42"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.12)"
                  strokeWidth="1"
                />
                {/* Ring 2 */}
                <circle
                  cx="180"
                  cy="160"
                  r="78"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.09)"
                  strokeWidth="1"
                  strokeDasharray="3 3"
                />
                {/* Ring 3 */}
                <circle
                  cx="180"
                  cy="160"
                  r="118"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.12)"
                  strokeWidth="1"
                />
                {/* Ring 4 - Outer subtle */}
                <circle
                  cx="180"
                  cy="160"
                  r="156"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.06)"
                  strokeWidth="1"
                />

                {/* Horizontal Axis Guide Line */}
                <line
                  x1="22"
                  y1="160"
                  x2="336"
                  y2="160"
                  stroke="rgba(255, 255, 255, 0.1)"
                  strokeWidth="1"
                />
                {/* Tick on Left Edge */}
                <line
                  x1="22"
                  y1="156"
                  x2="22"
                  y2="164"
                  stroke="rgba(255, 255, 255, 0.22)"
                  strokeWidth="1"
                />

                {/* Crimson Node Points on Rings */}
                {/* Top Node (12 o'clock on Ring 3) */}
                <circle
                  cx="180"
                  cy="42"
                  r="3.5"
                  fill="#ff2a5f"
                  filter="url(#aboutCrimsonGlow)"
                />
                {/* Bottom Node (6 o'clock on Ring 2) */}
                <circle
                  cx="180"
                  cy="238"
                  r="3"
                  fill="#ff2a5f"
                  filter="url(#aboutCrimsonGlow)"
                />
                {/* Left Node (9 o'clock on Ring 3) */}
                <circle
                  cx="62"
                  cy="160"
                  r="3.5"
                  fill="#ff2a5f"
                  filter="url(#aboutCrimsonGlow)"
                />
                {/* Right Node (3 o'clock on Ring 3) */}
                <circle
                  cx="298"
                  cy="160"
                  r="3.5"
                  fill="#ff2a5f"
                  filter="url(#aboutCrimsonGlow)"
                />

                {/* Center Brain Icon (AI Symbol) */}
                <g className="ai-brain-node">
                  <svg
                    x="163"
                    y="143"
                    width="34"
                    height="34"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ff3866"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ filter: 'drop-shadow(0 0 8px rgba(229, 43, 80, 0.85))' }}
                  >
                    <path d="M12 18V5" />
                    <path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4" />
                    <path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5" />
                    <path d="M17.997 5.125a4 4 0 0 1 2.526 5.77" />
                    <path d="M18 18a4 4 0 0 0 2-7.464" />
                    <path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517" />
                    <path d="M6 18a4 4 0 0 1-2-7.464" />
                    <path d="M6.003 5.125a4 4 0 0 0-2.526 5.77" />
                  </svg>
                </g>

                {/* Circuit Connector Lines branching right */}
                {/* Line 1 -> AI / ML */}
                <path
                  d="M 336 160 L 362 160 L 388 68 L 418 68"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.16)"
                  strokeWidth="1"
                />
                {/* Line 2 -> Coding */}
                <path
                  d="M 336 160 L 372 160 L 392 128 L 418 128"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.16)"
                  strokeWidth="1"
                />
                {/* Line 3 -> Development */}
                <path
                  d="M 336 160 L 372 160 L 392 192 L 418 192"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.16)"
                  strokeWidth="1"
                />
                {/* Line 4 -> Automation */}
                <path
                  d="M 336 160 L 362 160 L 388 252 L 418 252"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.16)"
                  strokeWidth="1"
                />

                {/* Crimson Bullet Nodes & Text Labels */}
                {/* Item 1 */}
                <circle cx="424" cy="68" r="3" fill="#ff2a5f" filter="url(#aboutCrimsonGlow)" />
                <text
                  x="438"
                  y="68"
                  fill="#e5e5f0"
                  fontSize="15"
                  fontWeight="500"
                  dominantBaseline="central"
                  fontFamily="Plus Jakarta Sans, sans-serif"
                  letterSpacing="0.02em"
                >
                  {content.aiLabels[0]}
                </text>

                {/* Item 2 */}
                <circle cx="424" cy="128" r="3" fill="#ff2a5f" filter="url(#aboutCrimsonGlow)" />
                <text
                  x="438"
                  y="128"
                  fill="#e5e5f0"
                  fontSize="15"
                  fontWeight="500"
                  dominantBaseline="central"
                  fontFamily="Plus Jakarta Sans, sans-serif"
                  letterSpacing="0.02em"
                >
                  {content.aiLabels[1]}
                </text>

                {/* Item 3 */}
                <circle cx="424" cy="192" r="3" fill="#ff2a5f" filter="url(#aboutCrimsonGlow)" />
                <text
                  x="438"
                  y="192"
                  fill="#e5e5f0"
                  fontSize="15"
                  fontWeight="500"
                  dominantBaseline="central"
                  fontFamily="Plus Jakarta Sans, sans-serif"
                  letterSpacing="0.02em"
                >
                  {content.aiLabels[2]}
                </text>

                {/* Item 4 */}
                <circle cx="424" cy="252" r="3" fill="#ff2a5f" filter="url(#aboutCrimsonGlow)" />
                <text
                  x="438"
                  y="252"
                  fill="#e5e5f0"
                  fontSize="15"
                  fontWeight="500"
                  dominantBaseline="central"
                  fontFamily="Plus Jakarta Sans, sans-serif"
                  letterSpacing="0.02em"
                >
                  {content.aiLabels[3]}
                </text>
              </svg>

              {/* Accessible labels for screen readers */}
              <ul className="sr-only">
                {content.aiLabels.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom-Right Detail: Fine line + "BETTER TOOLS / SMARTER LIVING" */}
        <div className="about-bottom-detail font-mono">
          <div className="about-bottom-line" aria-hidden="true" />
          <span className="about-bottom-text">{content.bottomDetail}</span>
        </div>

      </div>
    </section>
  );
}
