import React from 'react';
import ProjectCard from './ProjectCard';
import styles from './ProjectShowcase.module.css';

// Define the type for a single project
interface Project {
  title: string;
  description: string;
  imageUrl: string;
  liveLink?: string;
  githubLink: string;
  tags: string[];
}

// You could fetch this data from an API, a CMS, or define it here
const projects: Project[] = [
  {
    title: 'An Apple A Day (Hackathon Winner)',
    description: 'Won best video game at High Tech Hacks 2.0 hacakthon. A fast-paced Pygame game, built from scratch in 24 hours.',
    imageUrl: '/images/appleaday.png', // Make sure you have this image in your public folder
    githubLink: 'https://github.com/yourusername/expense-tracker',
    tags: ['Python', 'Pygame', 'Hackathon', 'Game Development', '1st Place'],
  },
  {
    title: 'FRC Robotics Programming Lead',
    description: 'Led the programming team for an inaugural FRC team, qualifying for the FIRST World Championship. I developed complex robot control systems in Java.',
    imageUrl: '/images/grover.webp', // Make sure you have this image in your public folder
    liveLink: 'https://taskmanager.vercel.app',
    githubLink: 'https://github.com/yourusername/task-manager-nextjs',
    tags: ['Java', 'Leadership', 'Robotics', 'FRC Worlds'],
  },
  {
    title: 'Computers 4 People Program Founder',
    description: 'Founded and led the "Computers4People4Teens" program. I designed the curriculum, taught free computer-building classes, and secured a $3,500 grant from the AT&T Kids Tech Summit.',
    imageUrl: '/images/c4p4t.png', // Make sure you have this image in your public folder
    // liveLink: 'https://yourportfolio.com', // Replace with your actual live link
    // githubLink: 'https://github.com/yourusername/my-portfolio',
    tags: ['Leadership', 'Teaching', 'Community', 'Hardware'],
  },
  // Add more projects as needed
];

const ProjectShowcase: React.FC = () => {
  return (
    <section className={styles.showcase} id="projects"> {/* Add an ID for easy linking from Hero */}
      <h2 className={styles.heading}>My Projects</h2>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectShowcase;