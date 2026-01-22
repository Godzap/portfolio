import Link from 'next/link';


import styles from '@/styles/ProjectsPage.module.css';

interface ProjectSection {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  link: string;
}

const projectSections: ProjectSection[] = [
  {
    id: 'work',
    title: 'Work Projects',
    subtitle: 'Data Engineering & Backend / LLM Engineering',
    image: '/trabalho.png',
    description:
      'This section includes projects developed in professional environments, focused on data engineering, backend services, and applied AI. The work presented here involves building and maintaining data pipelines, extracting and transforming data from APIs and databases, designing and consuming REST APIs, and implementing backend logic for scalable systems. It also covers applied LLM projects, such as fine-tuning and evaluating language models for real-world use cases, particularly in healthcare and government contexts.',
    link: '/projects/work',
  },
  {
    id: 'personal',
    title: 'Personal Projects',
    subtitle: 'Passion-driven development',
    image: '/pessoal.png',
    description:
      'As someone who has lived and breathed computers for as long as I can remember, my personal projects are driven purely by passion for technology. This is where I explore ideas freely, experiment with new tools, deepen my understanding of systems, and continuously challenge myself not because it is required, but because I genuinely enjoy building and learning.',
    link: '/projects/personal',
  },
];

const ProjectsPage = () => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.pageTitle}>My Projects</h1>
      <p className={styles.pageSubtitle}>
        Explore my work across professional and personal domains. Each section
        represents a different aspect of my journey as a developer.
      </p>

      <div className={styles.sectionsGrid}>
        {projectSections.map((section) => (
          <Link
            href={section.link}
            key={section.id}
            className={styles.sectionCard}
          >
            <div className={styles.imageWrapper}>
              <div
                className={styles.backgroundImage}
                style={{ backgroundImage: `url(${section.image})` }}
              />
              <div className={styles.overlay} />
            </div>
            <div className={styles.cardContent}>
              <div className={styles.textContainer}>
                <h2 className={styles.sectionTitle}>{section.title}</h2>
                <span className={styles.sectionSubtitle}>{section.subtitle}</span>
                <p className={styles.sectionDescription}>{section.description}</p>
                <div className={styles.exploreButton}>
                  <span>Explore Projects</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Projects' },
  };
}

export default ProjectsPage;
