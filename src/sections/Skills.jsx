import React from 'react';
import { motion } from 'framer-motion';
import styles from './Skills.module.css';
import { FaCode, FaPaintBrush, FaTools } from 'react-icons/fa';

const skillsData = {
  "Languages & Databases": [ "JavaScript", "Python", "HTML/CSS", "SQL", "MongoDB"],
  "Frameworks & Libraries": ["React", "Node.js", "Express", "Framer Motion", "GSAP"],
  "Tools & Platforms": ["Git", "GitHub", "Docker", "Figma", "Vite"]
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1 }
};

const Skills = ({ id }) => {
  return (
    <section id={id} className={styles.skills}>
      <h2 className={styles.heading}>Skills</h2>
      <div className={styles.categories}>
        {Object.entries(skillsData).map(([category, skills]) => (
          <div key={category} className={styles.category}>
            <h3 className={styles.categoryTitle}>{category}</h3>
            <motion.div 
              className={styles.grid}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {skills.map((skill) => (
                <motion.div key={skill} className={styles.skillItem} variants={itemVariants} whileHover={{scale: 1.1}}>
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
