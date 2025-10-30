import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.copyright}>
          © {currentYear} Micah Goodman. All rights reserved.
        </div>
        
        <div className={styles.links}>
          <Link href="mailto:goodmanmicah1@gmail.com" className={styles.link}>
            Email
          </Link>
          <Link 
            href="https://github.com/m1cahg" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.link}
          >
            GitHub
          </Link>
          <Link 
            href="https://linkedin.com/in/micahdg" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.link}
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;