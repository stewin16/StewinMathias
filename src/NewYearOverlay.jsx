import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { X } from 'lucide-react';

const NewYearOverlay = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (isVisible) {
      // Lock scroll on both html and body for mobile support
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      
      // Prevent touch scrolling on mobile
      const preventDefault = (e) => e.preventDefault();
      document.addEventListener('touchmove', preventDefault, { passive: false });
      return () => {
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
        document.removeEventListener('touchmove', preventDefault);
      };
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    // --- DATE LOGIC ---
    // The check is currently commented out so you can test the page anytime.
    // When you're ready, we will re-enable this with your final dates.
    /*
    const expiryDate = new Date('2026-01-03T00:00:00');
    if (new Date() > expiryDate) {
      setIsVisible(false);
      return;
    }
    */

    // --- ANIMATION LOGIC ---
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 10001 };

    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);

    // Auto vanish slowly after 12 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 12000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
      confetti.reset();
    };
  }, [isVisible]);

  // Balloon configuration
  const balloons = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 5}s`,
    duration: `${6 + Math.random() * 4}s`,
    emoji: ['🎈', '✨', '🎉'][Math.floor(Math.random() * 3)]
  }));

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1.5, ease: "easeInOut" } }}
          style={{
            position: 'fixed', top: 0, left: 0, width: '100vw', height: '100dvh',
            zIndex: 10000,
            background: 'rgba(5, 5, 5, 0.95)', backdropFilter: 'blur(20px)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            textAlign: 'center', padding: '2rem', overflow: 'hidden',
            touchAction: 'none'
          }}
        >
          <button 
            onClick={() => setIsVisible(false)}
            style={{
              position: 'absolute', top: '2rem', right: '2rem',
              background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '50%', width: '50px', height: '50px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#fff', cursor: 'none', zIndex: 10002, transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
          >
            <X size={24} />
          </button>

          {balloons.map(b => (
            <div key={b.id} className="floating-item" style={{ 
                left: b.left, animationDelay: b.delay, animationDuration: b.duration,
                fontSize: 'clamp(2rem, 4vw, 4rem)'
            }}>
              {b.emoji}
            </div>
          ))}

          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
            style={{ zIndex: 10001, maxWidth: '800px' }}
          >
            <h1 style={{ 
              fontSize: 'clamp(3rem, 10vw, 7rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem',
              background: 'linear-gradient(to right, #fff, #6366f1, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 0 30px rgba(99, 102, 241, 0.3))'
            }}>Happy New Year<br/>2026!</h1>
            <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '2rem' }}>
              As we step into this new chapter, I wish you a year filled with breakthrough moments, bug-free code, and endless creativity. Thank you for visiting my portfolio.
            </p>
            <p style={{ fontSize: '1.2rem', color: '#fff', fontWeight: 600, letterSpacing: '0.05em' }}>Here's to building the future together! 🚀</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NewYearOverlay;