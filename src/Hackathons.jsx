import React from 'react';
import Reveal from './Reveal';

const hacks = [
  { 
    name: "Smart India Hackathon 2025", 
    year: "2025", 
    role: "Finalist | Team Lead", 
    desc: "Selected as a National Finalist to tackle a problem statement for ISRO. As Team Lead, I directed the 36-hour development sprint, overseeing everything from system architecture to the final pitch. We successfully transformed abstract requirements into a working prototype, a process that honed my ability to lead effectively and make critical technical decisions under extreme time pressure.",
    imgs: ["/sih.jpg", "/sih2.jpg", "/sih3.jpg"]
  }
];

const Hackathons = () => {
  return (
    <section id="hackathons" style={{ padding: '4rem 0' }}>
      <Reveal><h2 className="section-title">Hackathons</h2></Reveal>
      <div style={{ borderLeft: '1px solid var(--border)', paddingLeft: '2rem' }}>
        {hacks.map((h, i) => (
          <Reveal key={i}>
            <div style={{ marginBottom: '3rem', position: 'relative', display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
              <div style={{ position: 'absolute', left: '-2.35rem', top: '0.4rem', width: '10px', height: '10px', background: 'var(--accent)', borderRadius: '50%', boxShadow: '0 0 10px var(--accent-glow)' }}></div>
              <span style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.9rem' }}>{h.year}</span>
              <h3 style={{ fontSize: '1.5rem', margin: '0.5rem 0' }}>{h.name}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>{h.role} - {h.desc}</p>
              {h.imgs ? (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
                  {h.imgs.map((img, idx) => (
                    <img 
                      key={idx} 
                      src={img} 
                      alt={`${h.name} ${idx + 1}`} 
                      className="hackathon-img" 
                      style={{ 
                        marginBottom: 0,
                        objectPosition: img.includes('sih3') ? 'center' : undefined
                      }} 
                    />
                  ))}
                </div>
              ) : (
                <img src={h.img} alt={h.name} className="hackathon-img" />
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Hackathons;