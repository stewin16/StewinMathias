import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FestivalDoodle = () => {
  const [festival, setFestival] = useState(null);
  const [showWish, setShowWish] = useState(false);

  useEffect(() => {
    const date = new Date();
    const month = date.getMonth(); // 0-11 (Jan is 0)
    const day = date.getDate();

    // Define your festivals here
    const events = [
      { month: 0, day: 1, wish: "Happy New Year!", icon: "🎉" },
      { month: 0, day: 26, wish: "Happy Republic Day!", icon: "🇮🇳" },
      { month: 1, day: 14, wish: "Happy Valentine's!", icon: "❤️" },
      { month: 2, day: 8, wish: "Happy Holi!", icon: "🎨" }, // Date varies, hardcoded for example
      { month: 7, day: 15, wish: "Jai Hind!", icon: "🇮🇳" },
      { month: 9, day: 31, wish: "Spooky Season!", icon: "🎃" },
      { month: 10, day: 12, wish: "Happy Diwali!", icon: "🪔" }, // Date varies
      { month: 11, day: 25, wish: "Merry Christmas!", icon: "🎄" },
      { month: 11, day: 31, wish: "Happy New Year!", icon: "🥳" },
    ];

    // Check if today matches any event
    let todayEvent = events.find(e => e.month === month && e.day === day);

    // --- DEMO MODE FOR TESTING ---
    // Force New Year event to match the overlay testing
    // When you are done testing, we will revert this to use 'todayEvent'
    todayEvent = { wish: "Happy New Year!", icon: "🎉" };

    setFestival(todayEvent);
  }, []);

  useEffect(() => {
    if (festival) {
      // Cycle between icon and wish every 4 seconds
      const interval = setInterval(() => {
        setShowWish(prev => !prev);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [festival]);

  if (!festival) return null;

  return (
    <div className="festival-doodle" style={{ marginLeft: '0.8rem', display: 'flex', alignItems: 'center', height: '24px', overflow: 'visible' }}>
      <AnimatePresence mode="wait">
        {showWish ? (
          <motion.span
            key="wish"
            className="festival-doodle-wish"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.3 }}
            style={{ 
              fontSize: '0.85rem', 
              color: 'var(--accent)', 
              fontWeight: 600, 
              whiteSpace: 'nowrap',
              background: 'linear-gradient(to right, var(--accent), #ec4899)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              cursor: 'default'
            }}
          >
            {festival.wish}
          </motion.span>
        ) : (
          <motion.span
            key="icon"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{ fontSize: '1.4rem', cursor: 'pointer', display: 'inline-block', lineHeight: 1 }}
            whileHover={{ scale: 1.2, rotate: 15 }}
            onClick={() => setShowWish(true)}
          >
            {festival.icon}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FestivalDoodle;