import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const SocialLinks = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      style={{
        position: 'fixed',
        left: '2rem',
        bottom: '0',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        alignItems: 'center',
        zIndex: 10
      }}>
      <a href="https://github.com/stewin16" target="_blank" rel="noreferrer"><Github size={20} /></a>
      <a href="https://linkedin.com/in/stewin-navin-mathias" target="_blank" rel="noreferrer"><Linkedin size={20} /></a>
      <a href="mailto:mathiasstewinn@gmail.com"><Mail size={20} /></a>
      <div style={{ width: '1px', height: '100px', background: '#333', marginTop: '1rem' }}></div>
    </motion.div>
  );
};

export default SocialLinks;