import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Designed & Built by Stewin Navin Mathias &copy; {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
