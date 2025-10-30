import React from 'react';
import Image from 'next/image';
import styles from './AboutMe.module.css';

// The skills data object
const skills = {
  languages: ['Java', 'Python', 'C', 'Rust', 'C#', 'SQL', 'Visual Basic'],
  platforms: ['React', 'Next.js', 'Unity'],
  devTools: ['Git', 'Linux', 'VSCode', 'Eclipse'],
  engineering: ['Computer Building', '3D Printing', 'Fusion 360', 'Onshape']
};

const AboutMe: React.FC = () => {
  return (
    <section className={styles.aboutSection} id="about">
    <h2 className={styles.skillsHeading}>About Me</h2>

      {/* --- Part 1: Bio & Headshot --- */}
      <div className={styles.bioContainer}>
        <div className={styles.storyColumn}>
          <p>
            My passion for technology has always been hands-on. It started with
            taking apart and building computers, which grew into designing and
            leading competitive robotics teams.
          </p>
          <p>
            Now, as a <strong>Computer Science and Math student at Rutgers</strong>, I'm applying
            that same systems-level thinking to software. I'm driven by the
            challenge of solving a complex problem from the ground up, whether
            it's programming a world-championship-winning robot or architecting
            a new web application.
          </p>
          <p>
            When I'm not at my desk, you'll find me hiking, 3D printing, or
            (unsurprisingly) building another robot.
          </p>
        </div>
        
        <div className={styles.headshotColumn}>
          <div className={styles.headshotWrapper}>
            <Image
              src="/images/headshot.jpeg"
              alt="Headshot of Micah Goodman"
              width={250}
              height={250}
              className={styles.headshot}
            />
          </div>
        </div>
      </div>

{/* --- Part 2: Categorized Skills (NEW LAYOUT) --- */}
      <div className={styles.skillsContainer}>
        <h2 className={styles.skillsHeading}>My Toolkit</h2>
        
        {/* THIS IS THE NEW GRID WRAPPER */}
        <div className={styles.skillsGrid}>
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className={styles.skillCategory}>
              <h3>{category}</h3>
              <div className={styles.skillTagContainer}>
                {items.map((skill) => (
                  <span key={skill} className={styles.skillTag}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div> {/* End of skillsGrid */}

      </div>
      
    </section>
  );
};

export default AboutMe;