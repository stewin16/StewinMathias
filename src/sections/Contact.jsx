import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import styles from './Contact.module.css';
import { FiMail, FiPhone, FiGithub, FiLinkedin } from 'react-icons/fi';
import { CursorContext } from '../context/CursorContext';

const contactDetails = {
    email: 'mathiasstewinn@gmail.com',
    phone: '+91 9226791022',
    github: 'https://github.com/stewin16',
    linkedin: 'https://linkedin.com/in/stewin-navin-mathias',
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const Contact = ({ id }) => {
  const { textEnter, textLeave } = useContext(CursorContext);

  return (
    <section id={id} className={styles.contact}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.2 }}
      >
        <motion.h2 onMouseEnter={textEnter} onMouseLeave={textLeave} className={styles.heading} variants={itemVariants}>Get In Touch</motion.h2>
        <motion.p onMouseEnter={textEnter} onMouseLeave={textLeave} className={styles.text} variants={itemVariants}>
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out to me.
        </motion.p>
        
        <motion.div className={styles.links} variants={itemVariants}>
            <a onMouseEnter={textEnter} onMouseLeave={textLeave} href={`mailto:${contactDetails.email}`} className={styles.linkItem}>
                <FiMail />
                <span>{contactDetails.email}</span>
            </a>
            <a onMouseEnter={textEnter} onMouseLeave={textLeave} href={`tel:${contactDetails.phone}`} className={styles.linkItem}>
                <FiPhone />
                <span>{contactDetails.phone}</span>
            </a>
            <a onMouseEnter={textEnter} onMouseLeave={textLeave} href={contactDetails.github} target="_blank" rel="noopener noreferrer" className={styles.linkItem}>
                <FiGithub />
                <span>GitHub</span>
            </a>
            <a onMouseEnter={textEnter} onMouseLeave={textLeave} href={contactDetails.linkedin} target="_blank" rel="noopener noreferrer" className={styles.linkItem}>
                <FiLinkedin />
                <span>LinkedIn</span>
            </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
