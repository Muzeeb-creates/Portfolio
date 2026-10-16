import React from 'react';
import { Code, Database, Eye, Settings } from 'lucide-react';

export default function Skills({ identity }) {
  const isEngineer = identity === 'engineer';

  const skillGroups = isEngineer
    ? [
        {
          icon: Code,
          category: 'PROGRAMMING',
          skills: [
            { name: 'Python', level: 'ADVANCED' },
            { name: 'C / C++', level: 'BASIC' },
            { name: 'HTML', level: 'BASIC' },
            { name: 'SQL' }
          ]
        },
        {
          icon: Database,
          category: 'DATA & MACHINE LEARNING',
          skills: [
            { name: 'Machine Learning', level: 'BASIC' },
            { name: 'Statistics', level: 'BASIC' },
            { name: 'NumPy' },
            { name: 'Pandas' },
            { name: 'Matplotlib' },
            { name: 'Seaborn' }
          ]
        },
        {
          icon: Eye,
          category: 'COMPUTER VISION & APP DEVELOPMENT',
          skills: [
            { name: 'OpenCV' },
            { name: 'Streamlit' },
            { name: 'Expo / React Native' }
          ]
        },
        {
          icon: Settings,
          category: 'TOOLS & AI DEVELOPMENT',
          skills: [
            { name: 'GitHub' },
            { name: 'Firebase' },
            { name: 'AI-assisted coding' },
            { name: 'AI-assisted design and development' }
          ]
        }
      ]
    : [
        {
          icon: Code,
          category: 'MARKET STRUCTURE & PRICE ACTION',
          skills: [
            { name: 'BOS / CHoCH', level: 'ADVANCED' },
            { name: 'Liquidity Pools', level: 'ADVANCED' },
            { name: 'Fair Value Gaps' },
            { name: 'Order Blocks' }
          ]
        },
        {
          icon: Database,
          category: 'RISK & CAPITAL MANAGEMENT',
          skills: [
            { name: 'Asymmetric Sizing', level: 'ADVANCED' },
            { name: 'Drawdown Caps', level: 'ADVANCED' },
            { name: 'Kelly Criterion' },
            { name: 'Capital Preservation' }
          ]
        },
        {
          icon: Eye,
          category: 'QUANTITATIVE & TECHNICAL TOOLS',
          skills: [
            { name: 'Pine Script v5' },
            { name: 'TradingView' },
            { name: 'Volume Profile (VPVR)' },
            { name: 'Multi-Timeframe Confluence' }
          ]
        },
        {
          icon: Settings,
          category: 'EXECUTION & PSYCHOLOGY',
          skills: [
            { name: 'Trade Journaling' },
            { name: 'EV Mindset' },
            { name: 'Rule-Based Checklists' },
            { name: 'Performance Audits' }
          ]
        }
      ];

  const headerData = isEngineer
    ? {
        label: 'TECHNICAL SKILLS',
        headingPart1: 'Tools I Work ',
        headingPart2: 'With',
        subtitle: 'Technologies and tools I use to learn, build, and experiment.',
        bottomDetail: 'BETTER TOOLS   /   SMARTER LIVING'
      }
    : {
        label: 'TRADING COMPETENCY',
        headingPart1: 'Frameworks I Trade ',
        headingPart2: 'With',
        subtitle: 'Methodologies and tools I use to analyze, manage risk, and execute.',
        bottomDetail: 'DISCIPLINED RISK   /   CONSISTENT EDGE'
      };

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        
        {/* Section Heading */}
        <div className="skills-header-block identity-fade" key={`skills-head-${identity}`}>
          <div className="skills-tag-row">
            <span className="skills-tag-dot" aria-hidden="true" />
            <span className="skills-tag-label font-mono">{headerData.label}</span>
          </div>

          <h2 className="skills-heading font-serif">
            {headerData.headingPart1}
            <span className="skills-heading-accent">{headerData.headingPart2}</span>
          </h2>

          <p className="skills-subtitle">
            {headerData.subtitle}
          </p>
        </div>

        {/* 4 Compact Skill Groups in 2x2 Grid */}
        <div className="skills-grid-2x2 identity-fade" key={`skills-grid-${identity}`}>
          {skillGroups.map((group, idx) => {
            const Icon = group.icon;
            return (
              <div key={idx} className="skills-panel">
                <div className="skills-panel-header">
                  <div className="skills-icon-badge">
                    <Icon size={18} strokeWidth={2} />
                  </div>
                  <h3 className="skills-group-title font-mono">{group.category}</h3>
                  <div className="skills-header-line" aria-hidden="true" />
                </div>

                <div className="skills-pills-wrap">
                  {group.skills.map((skill, sIdx) => {
                    const hasLevel = Boolean(skill.level);
                    return (
                      <div
                        key={sIdx}
                        className={`skill-pill ${hasLevel ? 'skill-pill-with-level' : ''}`}
                      >
                        <span className="skill-pill-name">{skill.name}</span>
                        {hasLevel && (
                          <span className={`skill-pill-level ${skill.level.toLowerCase()}`}>
                            {skill.level}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom-Right Detail */}
        <div className="skills-bottom-detail font-mono">
          <div className="skills-bottom-line" aria-hidden="true" />
          <span className="skills-bottom-text">{headerData.bottomDetail}</span>
        </div>

      </div>
    </section>
  );
}
