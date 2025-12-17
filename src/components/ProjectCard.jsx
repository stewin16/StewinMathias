import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import styles from './ProjectCard.module.css';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { CursorContext } from '../context/CursorContext';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  },
};

const ProjectCard = ({ title, description, technologies, githubLink, liveLink }) => {
  const { textEnter, textLeave } = useContext(CursorContext);

  return (
    <motion.div 
      onMouseEnter={textEnter} 
      onMouseLeave={textLeave}
      className={styles.card}
      variants={cardVariants}
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
    >
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.links}>
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FiGithub />
            </a>
          )}
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noopener noreferrer" aria-label="Live Link">
              <FiExternalLink />
            </a>
          )}
        </div>
      </div>
      <p className={styles.description}>{description}</p>
      <ul className={styles.technologies}>
        {technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ProjectCard;
