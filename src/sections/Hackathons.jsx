import React from 'react';
import { motion } from 'framer-motion';
import styles from './Hackathons.module.css';

const hackathonsData = [
  {
    event: 'Hackfest 2024',
    year: '2024',
    outcome: 'Top 10 Finalist',
    description: 'Developed a prototype for a decentralized social media platform using blockchain technology to ensure user data privacy and control.',
  },
  {
    event: 'Innovate India',
    year: '2023',
    outcome: 'Participant',
    description: 'Collaborated in a team to build a mobile app that helps farmers get real-time crop disease detection using machine learning.',
  },
  {
    event: 'Smart City Challenge',
    year: '2023',
    outcome: 'Runner-up',
    description: 'Designed and implemented an IoT-based solution for smart traffic management to reduce congestion in urban areas.',
  },
];

const timelineVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut'
    }
  },
};

const Hackathons = ({ id }) => {
  return (
    <section id={id} className={styles.hackathons}>
      <h2 className={styles.heading}>Hackathons</h2>
      <motion.div 
        className={styles.timeline}
        variants={timelineVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {hackathonsData.map((item, index) => (
          <motion.div key={index} className={styles.timelineItem} variants={itemVariants}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineContent}>
              <div className={styles.header}>
                <h3 className={styles.event}>{item.event}</h3>
                <span className={styles.year}>{item.year}</span>
              </div>
              <p className={styles.outcome}>{item.outcome}</p>
              <p className={styles.description}>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Hackathons;
