import React, { useContext } from 'react';
import { CursorContext } from './CursorContext';
import { FileText } from 'lucide-react';

const Navbar = () => {
  const { textEnter, textLeave } = useContext(CursorContext);

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

  const linkStyle = {
    fontSize: '0.9rem',
    fontWeight: 500,
    color: 'var(--text-secondary)',
    marginLeft: '2rem'
  };

  return (
    <nav style={navStyle}>
      <div onMouseEnter={textEnter} onMouseLeave={textLeave} style={{ fontWeight: 800, fontSize: '1.5rem', color: '#fff' }}>SM.</div>
      <div>
        <a href="#projects" style={linkStyle} onMouseEnter={textEnter} onMouseLeave={textLeave}>Work</a>
        <a href="#experience" style={linkStyle} onMouseEnter={textEnter} onMouseLeave={textLeave}>Experience</a>
        <a href="#contact" style={linkStyle} onMouseEnter={textEnter} onMouseLeave={textLeave}>Contact</a>
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