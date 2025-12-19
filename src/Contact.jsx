import React, { useContext, useState } from 'react';
import Reveal from './Reveal';
import { CursorContext } from './CursorContext';
import { Copy, Check } from 'lucide-react';

const Contact = () => {
  const { textEnter, textLeave } = useContext(CursorContext);
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("mathiasstewinn@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="section-padding-lg" style={{ textAlign: 'center', position: 'relative' }}>
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        maxWidth: '600px',
        aspectRatio: '1',
        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%)',
        zIndex: -1,
        pointerEvents: 'none'
      }}></div>
      <Reveal width="100%">
        <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 800, marginBottom: '1.5rem' }}>Let's work together.</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.2rem' }}>
          Currently open for internships and collaborative projects.
        </p>
        
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <a 
            href="mailto:mathiasstewinn@gmail.com" 
            onMouseEnter={textEnter} 
            onMouseLeave={textLeave}
            style={{ fontSize: 'clamp(1.2rem, 3vw, 2rem)', color: 'var(--accent)', borderBottom: '2px solid var(--accent)', paddingBottom: '5px' }}>
            mathiasstewinn@gmail.com
          </a>
          <button 
            onClick={copyEmail}
            style={{ background: 'transparent', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', padding: '0.5rem' }}
            title="Copy to clipboard"
          >
            {copied ? <Check size={20} color="#22c55e" /> : <Copy size={20} />}
          </button>
        </div>
        {copied && <p style={{ fontSize: '0.8rem', color: '#22c55e', marginTop: '0.5rem' }}>Email copied to clipboard!</p>}

        <div style={{ marginTop: '4rem', color: '#555', display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
          <span>+91 9226791022 • Mumbai, India</span>
          <div>
            <a href="https://github.com/stewin16" target="_blank" rel="noreferrer" style={{ color: 'inherit' }}>GitHub</a>
            <span style={{ margin: '0 0.5rem' }}>•</span>
            <a href="https://linkedin.com/in/stewin-navin-mathias" target="_blank" rel="noreferrer" style={{ color: 'inherit' }}>LinkedIn</a>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default Contact;