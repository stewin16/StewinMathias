import React, { useContext, useState, useEffect, useRef } from 'react';
import { CursorContext } from './CursorContext';
import { FileText, Menu, X } from 'lucide-react';
import FestivalDoodle from './FestivalDoodle';
import confetti from 'canvas-confetti';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const { textEnter, textLeave } = useContext(CursorContext);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const getLinkStyle = (section) => ({
    fontSize: '0.9rem',
    fontWeight: 500,
    color: activeSection === section ? 'var(--accent)' : 'var(--text-secondary)',
    marginLeft: '2rem',
    transition: 'color 0.3s ease'
  });

  return (
    <nav className="navbar">
      <canvas 
        ref={canvasRef} 
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }} 
      />
      <div 
        onMouseEnter={textEnter} 
        onMouseLeave={textLeave} 
        style={{ fontWeight: 800, fontSize: '1.5rem', color: '#fff', display: 'flex', alignItems: 'center', position: 'relative', zIndex: 1, transition: 'transform 0.3s ease' }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        SM.
        <FestivalDoodle />
      </div>

      {/* Mobile Menu Toggle */}
      <div className="nav-toggle" style={{ position: 'relative', zIndex: 101 }}>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{ background: 'transparent', border: 'none', color: '#fff', display: 'flex', alignItems: 'center' }}
          onMouseEnter={textEnter} onMouseLeave={textLeave}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Desktop Links */}
      <div className="nav-links-desktop" style={{ position: 'relative', zIndex: 1 }}>
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

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mobile-menu"
          >
            {['projects', 'hackathons', 'skills', 'education', 'contact'].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item}`}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ color: activeSection === item ? 'var(--accent)' : '#fff' }}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 + i * 0.07 }}
              >
                {item}
              </motion.a>
            ))}
            <motion.a
              href="/resume.pdf" 
              target="_blank" 
              className="btn-primary"
              style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem', padding: '0.8rem 2rem' }}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 + 5 * 0.07 }}
            >
              <FileText size={20} /> Resume
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;