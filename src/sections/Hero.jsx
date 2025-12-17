import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';
import { CursorContext } from '../context/CursorContext';

const Hero = ({ id }) => {
  const { textEnter, textLeave } = useContext(CursorContext);
  const name = "Stewin Navin Mathias";

  const sentence = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const intro = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 1.5,
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id={id} className={styles.hero}>
      <motion.h1
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
        className={styles.name}
        variants={sentence}
        initial="hidden"
        animate="visible"
      >
        {name.split("").map((char, index) => (
          <motion.span key={char + "-" + index} variants={letter}>
            {char}
          </motion.span>
        ))}
      </motion.h1>
      <motion.p 
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
        className={styles.intro}
        variants={intro}
        initial="hidden"
        animate="visible"
      >
        A creative developer building modern and engaging web experiences.
      </motion.p>
    </section>
  );
};

export default Hero;
