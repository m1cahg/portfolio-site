import React from "react";
import styles from "./StickyNavbar.module.css";

const StickyNavbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li>
          <a href="#home" className={styles.navLink}>
            Home
          </a>
        </li>
        <li>
          <a href="#projects" className={styles.navLink}>
            Projects
          </a>
        </li>
        <li>
          <a href="#about" className={styles.navLink}>
            About
          </a>
        </li>
        <li>
          <a href="#contact" className={styles.navLink}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default StickyNavbar;
