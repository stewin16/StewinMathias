import React, { useEffect, useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { CursorContext } from './CursorContext';

const AnimatedCursor = () => {
  const { cursorVariant } = useContext(CursorContext);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      mixBlendMode: "difference",
    },
  };

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: 32,
        width: 32,
        backgroundColor: "var(--accent)",
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 20000,
      }}
      variants={variants}
      animate={cursorVariant}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    />
  );
};

export default AnimatedCursor;