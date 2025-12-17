import React, { useContext, useState, useEffect } from 'react';
import { CursorContext } from './CursorContext';
import { FileText } from 'lucide-react';

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
      <div onMouseEnter={textEnter} onMouseLeave={textLeave} style={{ fontWeight: 800, fontSize: '1.5rem', color: '#fff' }}>SM.</div>
      <div>
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