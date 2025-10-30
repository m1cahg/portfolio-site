import Link from 'next/link';
import styles from './HeroSection.module.css';
import React from 'react'; // Often good to import React for FC type
import ParticleBackground from './ParticleBackground'; // 1. Import it

// We type the component as a "Functional Component"
const HeroSection: React.FC = () => {
  return (
    <section className={styles.hero} id='home'>
      <div className={styles.particleContainer}>
        <ParticleBackground />
      </div>
      <div className={styles.content}>
        <h1 className={styles.heading}>
          Hi, I'm Micah
        </h1>
        <p className={styles.subheading}>
          A Computer Science and Math student in the Rutgers Honors College. I'm a hands-on builder and team lead, driven to turn complex technical challenges into real-world solutions.
        </p>
        <div className={styles.buttonContainer}>
          <Link href="#projects" className={`${styles.button} ${styles.primaryButton}`}>
            View My Work
          </Link>
          <Link
            href="https://linkedin.com/in/micahdg"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.button} ${styles.secondaryButton}`}
          >
            View My LinkedIn
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;