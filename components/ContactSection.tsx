import React from 'react';
import Link from 'next/link';
import styles from './ContactSection.module.css';

const ContactSection: React.FC = () => {
    return (
        <section className={styles.contactSection} id="contact">
            <div className={styles.contentWrapper}>
                <h2 className={styles.heading}>Get In Touch</h2>
                <p className={styles.subheading}>
                    I'm always open to discussing new projects, creative ideas, or opportunities.
                    Feel free to reach out.
                </p>

                {/* This is the main "mailto" link, styled as a button */}
                <Link
                    href="mailto:goodmanmicah1@gmail.com"
                    className={`${styles.button} ${styles.primaryButton}`}
                >
                    Say Hello (goodmanmicah1@gmail.com)
                </Link>

                {/* These are the secondary links */}
                <div className={styles.socialLinks}>
                    <Link href="https://github.com/m1cahg" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </Link>
                    <Link href="https://linkedin.com/in/micahdg" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;