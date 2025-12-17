import React, { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import styles from './AnimatedCursor.module.css';
import { CursorContext } from '../context/CursorContext';

const AnimatedCursor = () => {
  const { cursorVariant } = useContext(CursorContext);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      mixBlendMode: 'difference'
    },
    text: {
        height: 150,
        width: 150,
        x: mousePosition.x - 75,
        y: mousePosition.y - 75,
        backgroundColor: "var(--color-text)",
        mixBlendMode: "difference"
    }
  };

  return (
    <motion.div
      className={styles.cursor}
      variants={variants}
      animate={cursorVariant}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    />
  );
};

export default AnimatedCursor;
