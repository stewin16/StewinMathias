import React from 'react';
import Reveal from './Reveal';

const skills = ["React", "JavaScript (ES6+)", "CSS Modules", "Framer Motion", "Git", "Node.js", "C++", "Java", "Tailwind CSS", "MongoDB"];

const Skills = () => {
  return (
    <section id="skills" style={{ padding: '4rem 0' }}>
      <Reveal><h2 className="section-title">Skills</h2></Reveal>
      <Reveal width="100%">
        <div className="skills-marquee">
          {/* We render the list twice to create a seamless loop */}
          <div className="skills-content">
            {skills.map((s) => (
              <span key={s} style={{
                border: '1px solid var(--border)',
                padding: '0.75rem 1.5rem',
                borderRadius: '50px',
                fontSize: '1rem',
                background: 'rgba(255,255,255,0.03)',
                whiteSpace: 'nowrap',
                color: '#e0e0e0'
              }}>{s}</span>
            ))}
          </div>
          <div className="skills-content" aria-hidden="true">
            {skills.map((s, i) => (
              <span key={`${s}-${i}`} style={{
                border: '1px solid var(--border)',
                padding: '0.75rem 1.5rem',
                borderRadius: '50px',
                fontSize: '1rem',
                background: 'rgba(255,255,255,0.03)',
                whiteSpace: 'nowrap',
                color: '#e0e0e0'
              }}>{s}</span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default Skills;