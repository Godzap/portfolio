import Image from 'next/image';

import { getImagePath } from '@/utils';
import { Project } from '@/types';

import styles from '@/styles/ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.card}
    >
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.logoWrapper}>
            <Image
              src={project.logo}
              alt={`${project.title} logo`}
              width={24}
              height={24}
              className={styles.logo}
            />
          </div>
          {project.status && (
            <span className={`${styles.status} ${styles[project.status.toLowerCase().replace(' ', '')]}`}>
              {project.status}
            </span>
          )}
        </div>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
        {project.technologies && project.technologies.length > 0 && (
          <div className={styles.technologies}>
            {project.technologies.slice(0, 4).map((tech, idx) => (
              <span key={idx} className={styles.techBadge}>
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className={styles.techBadge}>+{project.technologies.length - 4}</span>
            )}
          </div>
        )}
      </div>
    </a>
  );
};

export default ProjectCard;
