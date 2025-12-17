import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import styles from './SocialLinks.module.css';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { CursorContext } from '../context/CursorContext';

const SocialLinks = () => {
  const { textEnter, textLeave } = useContext(CursorContext);

  return (
    <motion.div 
      className={styles.socials}
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ delay: 2, duration: 0.8 }}
      onMouseEnter={textEnter}
      onMouseLeave={textLeave}
    >
      <a href="https://github.com/stewin16" target="_blank" rel="noopener noreferrer">
        <FiGithub />
      </a>
      <a href="https://linkedin.com/in/stewin-navin-mathias" target="_blank" rel="noopener noreferrer">
        <FiLinkedin />
      </a>
    </motion.div>
  );
};

export default SocialLinks;
