import React, { useRef, useState, useLayoutEffect, useCallback } from 'react';

export default function Header({ activeIdentity, onSelectIdentity }) {
  const containerRef = useRef(null);
  const navRef = useRef(null);
  const identityRef = useRef(null);

  const [dims, setDims] = useState({
    wTop: 590,
    hTop: 42,
    wBot: 285,
    hBot: 34,
    containerW: 610,
    containerH: 78
  });

  const updateDims = useCallback(() => {
    if (!containerRef.current || !navRef.current || !identityRef.current) return;
    const navRect = navRef.current.getBoundingClientRect();
    const idRect = identityRef.current.getBoundingClientRect();
    const contRect = containerRef.current.getBoundingClientRect();

    const wTop = Math.round(navRect.width);
    const hTop = Math.round(navRect.height);
    const wBot = Math.round(idRect.width);
    const hBot = Math.round(idRect.height);
    const containerW = Math.round(contRect.width);
    const containerH = Math.round(contRect.height);

    if (wTop <= 0 || wBot <= 0) return;

    setDims(prev => {
      if (
        Math.abs(prev.wTop - wTop) < 1 &&
        Math.abs(prev.hTop - hTop) < 1 &&
        Math.abs(prev.wBot - wBot) < 1 &&
        Math.abs(prev.hBot - hBot) < 1 &&
        Math.abs(prev.containerW - containerW) < 1 &&
        Math.abs(prev.containerH - containerH) < 1
      ) {
        return prev;
      }
      return { wTop, hTop, wBot, hBot, containerW, containerH };
    });
  }, []);

  useLayoutEffect(() => {
    updateDims();

    let ro;
    if (typeof ResizeObserver !== 'undefined') {
      ro = new ResizeObserver(() => updateDims());
      if (containerRef.current) ro.observe(containerRef.current);
      if (navRef.current) ro.observe(navRef.current);
      if (identityRef.current) ro.observe(identityRef.current);
    }

    window.addEventListener('resize', updateDims);
    if (typeof document !== 'undefined' && document.fonts) {
      document.fonts.ready.then(updateDims);
    }

    return () => {
      if (ro) ro.disconnect();
      window.removeEventListener('resize', updateDims);
    };
  }, [updateDims]);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Compute SVG continuous outline path
  const { wTop, hTop, wBot, hBot, containerW, containerH } = dims;
  const strokeOffset = 1;
  const topY = strokeOffset;
  const effectiveW = containerW > 0 ? containerW : wTop;
  const centerX = effectiveW / 2;
  const xTopL = centerX - wTop / 2;
  const xTopR = centerX + wTop / 2;
  const midY = topY + hTop;
  const xBotL = centerX - wBot / 2;
  const xBotR = centerX + wBot / 2;
  const botY = midY + hBot;

  const rTop = Math.max(12, hTop / 2);
  const rBot = Math.min(12, hBot / 2);
  const maxFillet = Math.max(0, (xBotL - xTopL - rTop) / 2);
  const rFillet = Math.min(8, Math.max(0, maxFillet));

  const pathD = [
    `M ${(xTopL + rTop).toFixed(1)} ${topY.toFixed(1)}`,
    `L ${(xTopR - rTop).toFixed(1)} ${topY.toFixed(1)}`,
    `A ${rTop.toFixed(1)} ${rTop.toFixed(1)} 0 0 1 ${(xTopR - rTop).toFixed(1)} ${midY.toFixed(1)}`,
    `L ${(xBotR + rFillet).toFixed(1)} ${midY.toFixed(1)}`,
    `A ${rFillet.toFixed(1)} ${rFillet.toFixed(1)} 0 0 0 ${xBotR.toFixed(1)} ${(midY + rFillet).toFixed(1)}`,
    `L ${xBotR.toFixed(1)} ${(botY - rBot).toFixed(1)}`,
    `A ${rBot.toFixed(1)} ${rBot.toFixed(1)} 0 0 1 ${(xBotR - rBot).toFixed(1)} ${botY.toFixed(1)}`,
    `L ${(xBotL + rBot).toFixed(1)} ${botY.toFixed(1)}`,
    `A ${rBot.toFixed(1)} ${rBot.toFixed(1)} 0 0 1 ${xBotL.toFixed(1)} ${(botY - rBot).toFixed(1)}`,
    `L ${xBotL.toFixed(1)} ${(midY + rFillet).toFixed(1)}`,
    `A ${rFillet.toFixed(1)} ${rFillet.toFixed(1)} 0 0 0 ${(xBotL - rFillet).toFixed(1)} ${midY.toFixed(1)}`,
    `L ${(xTopL + rTop).toFixed(1)} ${midY.toFixed(1)}`,
    `A ${rTop.toFixed(1)} ${rTop.toFixed(1)} 0 0 1 ${(xTopL + rTop).toFixed(1)} ${topY.toFixed(1)}`,
    'Z'
  ].join(' ');

  return (
    <header className="site-header">
      <div className="header-pill-frame" ref={containerRef}>
        <svg
          className="header-outline-svg"
          aria-hidden="true"
          viewBox={`0 0 ${containerW} ${containerH}`}
          style={{ width: `${containerW}px`, height: `${containerH}px` }}
        >
          <path className="header-outline-path" d={pathD} />
        </svg>

        {/* ROW 1: Navigation links inside top capsule */}
        <nav className="header-nav-row" ref={navRef} aria-label="Main Navigation">
          <ul className="nav-row-links">
            <li>
              <a 
                href="#hero" 
                className="nav-link"
                onClick={(e) => scrollToSection(e, 'hero')}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className="nav-link"
                onClick={(e) => scrollToSection(e, 'about')}
              >
                About Me
              </a>
            </li>
            <li>
              <a 
                href="#skills" 
                className="nav-link"
                onClick={(e) => scrollToSection(e, 'skills')}
              >
                Skills
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                className="nav-link"
                onClick={(e) => scrollToSection(e, 'projects')}
              >
                Project
              </a>
            </li>
            <li>
              <a 
                href="#certifications" 
                className="nav-link"
                onClick={(e) => scrollToSection(e, 'certifications')}
              >
                Certifications
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className="nav-link"
                onClick={(e) => scrollToSection(e, 'contact')}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* ROW 2: Identity switchers inside bottom tab */}
        <div
          className="header-identity-row"
          ref={identityRef}
          role="tablist"
          aria-label="Professional Identity"
        >
          <button
            type="button"
            id="identity-btn-engineer"
            data-testid="identity-engineer"
            role="tab"
            aria-selected={activeIdentity === 'engineer'}
            className={`identity-btn ${activeIdentity === 'engineer' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onSelectIdentity('engineer');
            }}
          >
            As an Engineer
          </button>
          <span className="identity-divider" aria-hidden="true">/</span>
          <button
            type="button"
            id="identity-btn-trader"
            data-testid="identity-trader"
            role="tab"
            aria-selected={activeIdentity === 'trader'}
            className={`identity-btn ${activeIdentity === 'trader' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onSelectIdentity('trader');
            }}
          >
            As a Trader
          </button>
        </div>
      </div>
    </header>
  );
}

