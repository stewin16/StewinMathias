import React, { useContext, useState, useEffect, useRef } from 'react';
import { CursorContext } from './CursorContext';
import { FileText } from 'lucide-react';
import FestivalDoodle from './FestivalDoodle';
import confetti from 'canvas-confetti';

const Navbar = () => {
  const { textEnter, textLeave } = useContext(CursorContext);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'projects', 'hackathons', 'skills', 'education', 'contact'];
      const scrollPosition = window.scrollY + 150; // Offset for better triggering

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const myConfetti = confetti.create(canvasRef.current, {
      resize: true,
      useWorker: false
    });

    const interval = setInterval(() => {
      myConfetti({
        particleCount: 3,
        startVelocity: 8,
        spread: 360,
        origin: { x: Math.random(), y: 0 },
        colors: ['#6366f1', '#ec4899', '#ffffff'],
        shapes: ['circle', 'square'],
        gravity: 0.6,
        scalar: 0.5,
        ticks: 150
      });
    }, 200);

    return () => {
      clearInterval(interval);
      myConfetti.reset();
    };
  }, []);

  const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    padding: '1.5rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 100,
    backdropFilter: 'blur(10px)',
    background: 'rgba(5, 5, 5, 0.5)',
    borderBottom: '1px solid rgba(255,255,255,0.05)'
  };

  const getLinkStyle = (section) => ({
    fontSize: '0.9rem',
    fontWeight: 500,
    color: activeSection === section ? 'var(--accent)' : 'var(--text-secondary)',
    marginLeft: '2rem',
    transition: 'color 0.3s ease'
  });

  return (
    <nav style={navStyle}>
      <canvas 
        ref={canvasRef} 
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }} 
      />
      <div onMouseEnter={textEnter} onMouseLeave={textLeave} style={{ fontWeight: 800, fontSize: '1.5rem', color: '#fff', display: 'flex', alignItems: 'center', position: 'relative', zIndex: 1 }}>
        SM.
        <FestivalDoodle />
      </div>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <a href="#projects" style={getLinkStyle('projects')} onMouseEnter={textEnter} onMouseLeave={textLeave}>Work</a>
        <a href="#hackathons" style={getLinkStyle('hackathons')} onMouseEnter={textEnter} onMouseLeave={textLeave}>Hackathons</a>
        <a href="#skills" style={getLinkStyle('skills')} onMouseEnter={textEnter} onMouseLeave={textLeave}>Skills</a>
        <a href="#education" style={getLinkStyle('education')} onMouseEnter={textEnter} onMouseLeave={textLeave}>Education</a>
        <a href="#contact" style={getLinkStyle('contact')} onMouseEnter={textEnter} onMouseLeave={textLeave}>Contact</a>
        <a 
          href="/resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-primary"
          style={{ marginLeft: '2rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
          onMouseEnter={textEnter} 
          onMouseLeave={textLeave}
        >
          <FileText size={16} /> Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;