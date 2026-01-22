import ProjectCard from '@/components/ProjectCard';

import Link from 'next/link';

import styles from '@/styles/ProjectsListPage.module.css';

interface Project {
    title: string;
    description: string;
    logo: string;
    link: string;
    slug: string;
    technologies: string[];
    status: string;
}

const personalProjects: Project[] = [
    {
        title: 'TCC Generator',
        description:
            'AI-assisted academic paper generator using prompt engineering and APIs. Features serverless architecture with AWS Lambda and API Gateway.',
        logo: '/logos/python.svg',
        link: '#',
        slug: 'tcc-generator',
        technologies: ['Python', 'React', 'TypeScript', 'AWS Lambda', 'Supabase', 'S3'],
        status: 'In Progress',
    },
    {
        title: 'Super Medieval',
        description:
            'Community-driven MMORPG focused on roleplay and persistent world systems. Core gameplay and server-side logic in Lua.',
        logo: '/super_medieval.png',
        link: 'https://www.instagram.com/super_medieval?igsh=MWRqejBpczgzcG45',
        slug: 'super-medieval',
        technologies: ['Lua', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
        status: 'In Progress',
    },
    {
        title: 'Super Medieval Wiki',
        description:
            'A public wiki website that documents the Super Medieval universe, including lore, factions, rules, gameplay systems, and onboarding guides. Built with scalable information architecture.',
        logo: '/logos/vsc.svg',
        link: 'https://godzap.github.io/',
        slug: 'super-medieval-wiki',
        technologies: ['HTML', 'CSS', 'JavaScript', 'Markdown', 'Git/GitHub'],
        status: 'Active',
    },
    {
        title: 'VSCode Portfolio',
        description:
            'This very portfolio! A Visual Studio Code themed developer portfolio built with Next.js and CSS Modules.',
        logo: '/logos/vsc.svg',
        link: 'https://github.com/Godzap',
        slug: 'vscode-portfolio',
        technologies: ['Next.js', 'TypeScript', 'React', 'CSS Modules'],
        status: 'Production',
    },
];

const PersonalProjectsPage = () => {
    return (
        <div className={styles.layout}>
            <div className={styles.header}>
                <Link href="/projects" className={styles.backLink}>
                    ← Back to Projects
                </Link>
                <h1 className={styles.pageTitle}>Personal Projects</h1>
                <p className={styles.pageSubtitle}>
                    Passion-driven development — Projects built for fun, learning, and
                    exploring new technologies. Where creativity meets code.
                </p>
            </div>

            <div className={styles.projectsGrid}>
                {personalProjects.map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                ))}
            </div>
        </div>
    );
};

export async function getStaticProps() {
    return {
        props: { title: 'Personal Projects' },
    };
}

export default PersonalProjectsPage;
