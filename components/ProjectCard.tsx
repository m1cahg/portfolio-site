import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Next.js Image component for optimization
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  liveLink?: string; // Optional live demo link
  githubLink?: string;
  tags: string[]; // Array of technologies used
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  liveLink,
  githubLink,
  tags,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={imageUrl}
          alt={title}
          width={400} // Provide intrinsic width and height for Image component
          height={200}
          className={styles.image}
        // You might need to adjust layout prop based on your specific image needs
        // For object-fit: cover, layout="fill" might be more appropriate with parent position: relative
        // e.g., layout="fill" objectFit="cover"
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.tags}>
          {tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className={styles.links}>
          {liveLink && (
            <Link href={liveLink} target="_blank" rel="noopener noreferrer" className={`${styles.linkButton} ${styles.primary}`}>
              Live Demo
            </Link>
          )}
          {githubLink && ( // <-- Add this conditional check
            <Link href={githubLink} target="_blank" rel="noopener noreferrer" className={`${styles.linkButton} ${styles.secondary}`}>
              GitHub
            </Link>
          )}

        </div>
      </div>
    </div>
  );
};

export default ProjectCard;