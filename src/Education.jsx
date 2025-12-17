import React from 'react';
import Reveal from './Reveal';

const Education = () => {
  const handleMouseMove = (e) => {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section id="education" style={{ padding: '4rem 0' }}>
      <Reveal><h2 className="section-title">Education</h2></Reveal>
      <div style={{ display: 'grid', gap: '2rem' }}>
        <Reveal>
          <div className="glass-card" onMouseMove={handleMouseMove}>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '0.5rem' }}>
              <h3 style={{ fontSize: '1.25rem' }}>B.Tech – Computer Engineering</h3>
              <span style={{ color: 'var(--accent)' }}>2024 – 2028</span>
            </div>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Fr. Conceicao Rodrigues College of Engineering, Mumbai</p>
            <p style={{ fontWeight: 600 }}>CGPA: 9.17</p>
          </div>
        </Reveal>
        <Reveal>
          <div className="glass-card" onMouseMove={handleMouseMove}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Higher Secondary (Class XII) & Secondary (Class X)</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Maharashtra State Board</p>
            <div style={{ marginTop: '1rem', display: 'flex', gap: '2rem' }}>
              <span>Class XII: <strong style={{ color: '#fff' }}>91.00%</strong></span>
              <span>Class X: <strong style={{ color: '#fff' }}>93.20%</strong></span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Education;