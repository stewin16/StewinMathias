import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import styles from './Navbar.module.css';
import { CursorContext } from '../context/CursorContext';

const Navbar = () => {
  const { textEnter, textLeave } = useContext(CursorContext);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = ['Projects', 'Hackathons', 'Skills', 'Education', 'Contact'];

  return (
    <motion.nav 
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className={styles.navContainer}>
        <div className={styles.logo} onMouseEnter={textEnter} onMouseLeave={textLeave}>
          <Link to="hero" smooth={true} duration={500} spy={true} className={styles.logoLink}>
            SNM
          </Link>
        </div>
        <ul className={styles.navLinks}>
          {navItems.map(item => (
            <li key={item} onMouseEnter={textEnter} onMouseLeave={textLeave}>
              <Link
                activeClass={styles.active}
                to={item.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={styles.navLink}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
