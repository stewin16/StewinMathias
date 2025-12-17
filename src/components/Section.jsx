import React from 'react';
import styles from './Section.module.css';

const Section = ({ id, children }) => {
  return (
    <section id={id} className={styles.section}>
      {children}
    </section>
  );
};

export default Section;
