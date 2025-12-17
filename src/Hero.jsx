import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { CursorContext } from './CursorContext';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const { textEnter, textLeave } = useContext(CursorContext);

  return (
    <section id="hero" style={{ minHeight: '100dvh', display: 'flex', alignItems: 'center', position: 'relative', paddingTop: '96px', paddingBottom: '96px' }}>
      <div className="hero-grid">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 style={{ color: 'var(--accent)', marginBottom: '1.5rem', fontSize: '1.2rem', fontWeight: 500 }}>Hello, I'm</h2>
          <h1 onMouseEnter={textEnter} onMouseLeave={textLeave} style={{ fontSize: 'clamp(3rem, 9.6vw, 5.5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
            Stewin Navin Mathias
          </h1>
          <h3 style={{ fontSize: 'clamp(1.5rem, 4.8vw, 2.5rem)', color: 'var(--text-secondary)', marginBottom: '2rem', fontWeight: 400 }}>
            Computer Engineering Student & <span style={{ color: '#fff' }}>Creative Developer</span>
          </h3>
          <p style={{ maxWidth: '720px', color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.8 }}>
            I specialize in building high-performance web applications that blend technical expertise with premium design. 
            Currently focused on creating seamless digital experiences using modern React ecosystems.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-image-wrapper"
        >
          {/* Replace src with your actual image path, e.g., "/profile.jpg" */}
          <img src="/profile.jpg" alt="Stewin Navin Mathias" className="hero-image" />
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }} 
        transition={{ repeat: Infinity, duration: 2 }}
        style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', opacity: 0.5 }}>
        <ArrowDown />
      </motion.div>
    </section>
  );
};

export default Hero;