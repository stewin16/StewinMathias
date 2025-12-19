import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="back-to-top-btn"
          style={{
            position: 'fixed',
            bottom: '8rem', /* Positioned above LiveStats */
            right: '2rem',
            zIndex: 49,
            background: 'rgba(10, 10, 10, 0.8)',
            border: '1px solid var(--border)',
            padding: '0.8rem',
            borderRadius: '50%',
            cursor: 'pointer',
            color: 'var(--accent)',
            backdropFilter: 'blur(5px)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
          }}
          whileHover={{ y: -3, backgroundColor: 'var(--accent)', color: '#fff' }}
        >
          <style>{`
            @media (max-width: 768px) {
              .back-to-top-btn { bottom: 7rem !important; right: 1rem !important; }
            }
          `}</style>
          <ArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;