import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ArrowUpRight, ArrowRight, ChevronLeft, ChevronRight, CheckCircle2, TrendingUp, DollarSign, Calendar, BarChart2, ShoppingCart, Scan, Receipt } from 'lucide-react';
import { Github } from './BrandIcons';
import { PROJECTS } from '../data/projectsData';

export default function Projects({ identity, onOpenProject }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const touchStartXRef = useRef(0);
  const touchEndXRef = useRef(0);
  const wheelLockRef = useRef(false);

  const totalProjects = PROJECTS.length;

  const nextProject = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalProjects);
  }, [totalProjects]);

  const prevProject = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + totalProjects) % totalProjects);
  }, [totalProjects]);

  // Handle Trackpad Horizontal Scrolling & Shift + Wheel
  const handleWheel = useCallback((e) => {
    const isHorizontal = Math.abs(e.deltaX) > Math.abs(e.deltaY);
    const isShiftVertical = e.shiftKey && Math.abs(e.deltaY) > 20;

    if ((isHorizontal && Math.abs(e.deltaX) > 30) || isShiftVertical) {
      if (wheelLockRef.current) return;
      wheelLockRef.current = true;

      const delta = isHorizontal ? e.deltaX : e.deltaY;
      if (delta > 0) {
        nextProject();
      } else {
        prevProject();
      }

      setTimeout(() => {
        wheelLockRef.current = false;
      }, 400);
    }
  }, [nextProject, prevProject]);

  // Touch Swipe Handling on Mobile
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartXRef.current - touchEndXRef.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        nextProject();
      } else {
        prevProject();
      }
    }
    touchStartXRef.current = 0;
    touchEndXRef.current = 0;
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener('wheel', handleWheel, { passive: true });
    return () => el.removeEventListener('wheel', handleWheel);
  }, [handleWheel]);

  return (
    <section id="projects" className="projects-carousel-section">
      <div className="projects-carousel-container" ref={containerRef}>
        
        {/* Section Top Header & Navigation Arrows */}
        <div className="projects-header-row identity-fade" key={`proj-head-${identity}`}>
          <div className="projects-header-left">
            <div className="projects-tag-badge font-mono">
              <span className="projects-tag-dot" aria-hidden="true" />
              <span>FEATURED ENGINEERING WORK</span>
            </div>
            <p className="projects-subtitle">
              Real projects. Practical solutions. Built with modern tech.
            </p>
          </div>

          {/* Carousel Arrow Controls */}
          <div className="projects-arrows-wrap" role="group" aria-label="Project Carousel Controls">
            <button
              type="button"
              onClick={prevProject}
              className="carousel-arrow-btn"
              aria-label="Previous Project"
              title="Previous Project"
            >
              <ChevronLeft size={18} strokeWidth={2.2} />
            </button>
            <button
              type="button"
              onClick={nextProject}
              className="carousel-arrow-btn"
              aria-label="Next Project"
              title="Next Project"
            >
              <ChevronRight size={18} strokeWidth={2.2} />
            </button>
          </div>
        </div>

        {/* Horizontal Carousel Viewport */}
        <div 
          className="projects-carousel-viewport"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="projects-carousel-track"
            style={{
              transform: `translateX(calc(-${activeIndex} * (var(--card-width) + var(--card-gap))))`
            }}
          >
            {PROJECTS.map((project, idx) => {
              const isActive = idx === activeIndex;
              return (
                <article
                  key={project.id}
                  className={`project-carousel-card ${isActive ? 'card-active' : 'card-peek'}`}
                  onClick={() => {
                    if (!isActive) setActiveIndex(idx);
                  }}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${project.name} (${idx + 1} of ${totalProjects})`}
                >
                  {/* Left Column: Details & Actions */}
                  <div className="card-left-content">
                    
                    {/* Top Row: Badge & Index */}
                    <div className="card-top-row">
                      <span className="card-badge-pill font-mono">
                        {project.badge}
                      </span>
                      <span className="card-index-mono font-mono">
                        #{String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Project Heading */}
                    <h3 className="card-project-title font-display">
                      {project.displayTitle}
                    </h3>

                    {/* Short Description */}
                    <p className="card-project-desc">
                      {project.shortDescription}
                    </p>

                    {/* Tech Stack Pills */}
                    <div className="card-tech-pills-row">
                      {project.technologies.slice(0, 4).map((tech, tIdx) => (
                        <span key={tIdx} className="card-tech-tag font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons: View Project & Repository */}
                    <div className="card-actions-row">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (onOpenProject) {
                            onOpenProject(project.id);
                          }
                        }}
                        className="card-action-btn card-btn-primary"
                        aria-label={`View full details for ${project.name}`}
                      >
                        <ArrowUpRight size={15} strokeWidth={2.2} />
                        <span>View Project</span>
                        <ArrowRight size={13} className="btn-arrow-icon" />
                      </button>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="card-action-btn card-btn-secondary"
                        aria-label={`View GitHub repository for ${project.name}`}
                      >
                        <Github size={15} />
                        <span>Repository</span>
                        <ArrowRight size={13} className="btn-arrow-icon" />
                      </a>
                    </div>

                  </div>

                  {/* Right Column: Custom Project UI Mockup */}
                  <div className="card-right-preview" aria-hidden="true">
                    {project.id === 'tradelog' ? (
                      <TradingJournalPreview />
                    ) : (
                      <ScaniGoPreview />
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Bottom Pink Progress Indicator */}
        <div 
          className="projects-progress-track"
          role="progressbar"
          aria-valuenow={activeIndex + 1}
          aria-valuemin="1"
          aria-valuemax={totalProjects}
          aria-label="Projects Carousel Progress"
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const fraction = clickX / rect.width;
            setActiveIndex(fraction > 0.5 ? 1 : 0);
          }}
        >
          <div
            className="projects-progress-bar"
            style={{
              width: `${100 / totalProjects}%`,
              transform: `translateX(${activeIndex * 100}%)`
            }}
          />
        </div>

      </div>
    </section>
  );
}

// --------------------------------------------------------------------------
// UI PREVIEW 1: TRADELOG (Personal Trading Journal Dashboard Mockup)
// Matching the attached reference image's dashboard composition
// --------------------------------------------------------------------------
function TradingJournalPreview() {
  return (
    <div className="preview-window trade-preview-window">
      {/* Top Header Bar */}
      <div className="preview-top-bar">
        <div className="preview-brand-tag">
          <span className="journal-icon-indicator" />
          <span className="preview-window-title font-mono">Trading Journal</span>
        </div>
        <div className="preview-window-dots">
          <span className="p-dot" />
          <span className="p-dot" />
          <span className="p-dot" />
        </div>
      </div>

      <div className="trade-preview-body">
        {/* Mini Sidebar */}
        <aside className="trade-mini-sidebar font-mono">
          <div className="sidebar-nav-item active">
            <span className="nav-glyph">▣</span>
            <span>Dashboard</span>
          </div>
          <div className="sidebar-nav-item">
            <span className="nav-glyph">▤</span>
            <span>Trades</span>
          </div>
          <div className="sidebar-nav-item">
            <span className="nav-glyph">▲</span>
            <span>Analytics</span>
          </div>
          <div className="sidebar-nav-item">
            <span className="nav-glyph">▦</span>
            <span>Calendar</span>
          </div>
          <div className="sidebar-nav-item">
            <span className="nav-glyph">📄</span>
            <span>Reports</span>
          </div>
          <div className="sidebar-nav-item">
            <span className="nav-glyph">⚙</span>
            <span>Settings</span>
          </div>
        </aside>

        {/* Main Dashboard Canvas */}
        <div className="trade-dash-canvas">
          
          {/* KPI Stat Cards */}
          <div className="trade-kpi-row font-mono">
            <div className="trade-kpi-card">
              <span className="kpi-title">Trading Days</span>
              <div className="kpi-value-row">
                <span className="kpi-val">24 / 30</span>
                <span className="kpi-gain-up">↑ 12%</span>
              </div>
            </div>

            <div className="trade-kpi-card">
              <span className="kpi-title">Total Trades</span>
              <div className="kpi-value-row">
                <span className="kpi-val">48</span>
                <span className="kpi-gain-up">↑ 8%</span>
              </div>
            </div>

            <div className="trade-kpi-card highlight-card">
              <span className="kpi-title">Net P&L</span>
              <div className="kpi-value-row">
                <span className="kpi-val pnl-green">$1,245.60</span>
                <span className="kpi-gain-green">↑ 15%</span>
              </div>
            </div>
          </div>

          {/* Chart & Performance Stats Split */}
          <div className="trade-chart-row">
            
            {/* Left: Equity Curve SVG Line Chart */}
            <div className="trade-equity-box">
              <div className="chart-header-row font-mono">
                <span className="chart-title">Equity Curve</span>
                <span className="chart-val-green">+$1,245.60</span>
              </div>

              <svg viewBox="0 0 280 90" className="trade-svg-chart" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="equityGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.32" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                {/* Horizontal Guide Lines */}
                <line x1="0" y1="20" x2="280" y2="20" stroke="rgba(255,255,255,0.05)" strokeDasharray="2 3" />
                <line x1="0" y1="50" x2="280" y2="50" stroke="rgba(255,255,255,0.05)" strokeDasharray="2 3" />
                <line x1="0" y1="75" x2="280" y2="75" stroke="rgba(255,255,255,0.05)" strokeDasharray="2 3" />

                {/* Shaded Area */}
                <path
                  d="M 10 70 Q 40 75 70 52 T 130 58 T 190 35 T 240 38 T 275 16 L 275 90 L 10 90 Z"
                  fill="url(#equityGrad)"
                />

                {/* Green Trajectory Path */}
                <path
                  d="M 10 70 Q 40 75 70 52 T 130 58 T 190 35 T 240 38 T 275 16"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />

                {/* Data point glowing node */}
                <circle cx="275" cy="16" r="3.5" fill="#10b981" />
                <circle cx="275" cy="16" r="7" stroke="#10b981" strokeWidth="1" strokeOpacity="0.5" />
              </svg>

              <div className="chart-dates-row font-mono">
                <span>Jul 20</span>
                <span>Jul 21</span>
                <span>Jul 22</span>
                <span>Jul 23</span>
                <span>Jul 24</span>
                <span>Jul 25</span>
                <span>Jul 26</span>
              </div>
            </div>

            {/* Right: Key Performance Metric Breakdown */}
            <div className="trade-perf-panel font-mono">
              <span className="perf-title">Performance</span>
              
              <div className="perf-stat-line">
                <span className="perf-label">Win Rate:</span>
                <span className="perf-val text-green">68.8%</span>
              </div>
              <div className="perf-stat-line">
                <span className="perf-label">Best Trade:</span>
                <span className="perf-val text-green">$270.50</span>
              </div>
              <div className="perf-stat-line">
                <span className="perf-label">Worst Trade:</span>
                <span className="perf-val text-red">-$100.20</span>
              </div>
              <div className="perf-stat-line">
                <span className="perf-label">Long Win %:</span>
                <span className="perf-val text-green">72.4%</span>
              </div>
              <div className="perf-stat-line">
                <span className="perf-label">Short Win %:</span>
                <span className="perf-val">63.2%</span>
              </div>
              <div className="perf-stat-line">
                <span className="perf-label">Captured Pips:</span>
                <span className="perf-val text-green">842.6</span>
              </div>
            </div>

          </div>

          {/* Bottom Recent Trades Table */}
          <div className="trade-recent-table font-mono">
            <div className="table-header-row">
              <span>Date</span>
              <span>Asset</span>
              <span>Direction</span>
              <span>P&L</span>
              <span>Pips</span>
            </div>
            <div className="table-row">
              <span>2025-07-26</span>
              <span>XAUUSD</span>
              <span className="direction-badge long">Long</span>
              <span className="pnl-green">+$120.50</span>
              <span className="pnl-green">+18.4</span>
            </div>
            <div className="table-row">
              <span>2025-07-25</span>
              <span>NAS100</span>
              <span className="direction-badge short">Short</span>
              <span className="pnl-red">-$75.20</span>
              <span className="pnl-red">-10.2</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// --------------------------------------------------------------------------
// UI PREVIEW 2: SCANIGO (Retail Barcode Scanner & Digital Receipt Mockup)
// --------------------------------------------------------------------------
function ScaniGoPreview() {
  return (
    <div className="preview-window scanigo-preview-window">
      {/* Top Header Bar */}
      <div className="preview-top-bar">
        <div className="preview-brand-tag">
          <span className="scan-icon-indicator" />
          <span className="preview-window-title font-mono">ScaniGo • Quick Checkout</span>
        </div>
        <div className="preview-window-dots">
          <span className="p-dot" />
          <span className="p-dot" />
          <span className="p-dot" />
        </div>
      </div>

      <div className="scanigo-preview-body">
        
        {/* Camera Viewfinder Scanner Simulation */}
        <div className="scanigo-viewfinder">
          <div className="reticle-corner top-left" />
          <div className="reticle-corner top-right" />
          <div className="reticle-corner bottom-left" />
          <div className="reticle-corner bottom-right" />
          <div className="laser-scan-line" />

          {/* Barcode Graphic Inside Viewfinder */}
          <div className="simulated-barcode">
            <div className="barcode-bars" />
            <span className="barcode-number font-mono">UPC: 0 49000 00044 3</span>
          </div>

          <div className="scanner-status-pill font-mono">
            <span className="scan-pulse-dot" />
            <span>BARCODE LOCKED • 100% CONFIDENCE</span>
          </div>
        </div>

        {/* Right Side: Active Cart & Receipt Action */}
        <div className="scanigo-cart-panel font-mono">
          <div className="cart-header-line">
            <span className="cart-title">SCANNED CART (3 ITEMS)</span>
            <span className="cart-live-tag">ACTIVE</span>
          </div>

          {/* Scanned Items Mini-List */}
          <div className="scanned-items-list">
            <div className="cart-item-row active-item">
              <div className="item-name-col">
                <span className="item-name">Organic Almond Milk 1L</span>
                <span className="item-sku">SKU #890412</span>
              </div>
              <span className="item-price">$4.99</span>
            </div>

            <div className="cart-item-row">
              <div className="item-name-col">
                <span className="item-name">Whole Wheat Loaf 500g</span>
                <span className="item-sku">SKU #412093</span>
              </div>
              <span className="item-price">$3.50</span>
            </div>

            <div className="cart-item-row">
              <div className="item-name-col">
                <span className="item-name">Himalayan Dark Roast</span>
                <span className="item-sku">SKU #902184</span>
              </div>
              <span className="item-price">$6.36</span>
            </div>
          </div>

          {/* Summary Total & Instant Checkout CTA */}
          <div className="cart-checkout-box">
            <div className="cart-subtotal-row">
              <span>Subtotal:</span>
              <span className="subtotal-val">$14.85</span>
            </div>
            <div className="receipt-generate-btn">
              <Receipt size={14} />
              <span>DIGITAL RECEIPT GENERATED</span>
              <CheckCircle2 size={13} className="text-green" />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
