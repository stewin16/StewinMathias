import React from 'react';
import { motion } from 'framer-motion';
import styles from './Education.module.css';

const educationData = [
  {
    degree: 'Bachelor of Technology (B.Tech) – Computer Engineering',
    institution: 'Fr. Conceicao Rodrigues College of Engineering, Mumbai',
    period: '2024 – 2028',
    score: 'First Year CGPA: 9.17',
  },
  {
    degree: 'Class XII (HSC – Maharashtra State Board)',
    institution: 'Maharashtra State Board',
    period: '2024',
    score: 'Percentage: 91.00%',
  },
  {
    degree: 'Class X (SSC – Maharashtra State Board)',
    institution: 'Maharashtra State Board',
    period: '2022',
    score: 'Percentage: 93.20%',
  },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

const Education = ({ id }) => {
  return (
    <section id={id} className={styles.education}>
      <h2 className={styles.heading}>Education</h2>
      <motion.div 
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {educationData.map((edu, index) => (
          <motion.div key={index} className={styles.card} variants={itemVariants}>
            <h3 className={styles.degree}>{edu.degree}</h3>
            <p className={styles.institution}>{edu.institution}</p>
            <div className={styles.footer}>
              <span className={styles.period}>{edu.period}</span>
              <span className={styles.score}>{edu.score}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Education;
