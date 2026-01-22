import ProjectCard from '@/components/ProjectCard';

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

const workProjects: Project[] = [
    {
        title: 'Health Data Integration API',
        description:
            'TypeScript API Gateway consolidating fragmented laboratory and hospital data sources at Fiocruz. Includes validation and normalization layers.',
        logo: '/logos/typescript.svg',
        link: '#',
        slug: 'health-data-api',
        technologies: ['TypeScript', 'Node.js', 'REST APIs', 'MySQL', 'SQL Server'],
        status: 'Production',
    },
    {
        title: 'Laboratory Inventory System',
        description:
            "Laboratory sample inventory system built with Laravel + MySQL, delivered for adoption in Mozambique's public health system.",
        logo: '/logos/laravel.svg',
        link: '#',
        slug: 'lab-inventory',
        technologies: ['Laravel', 'PHP', 'MySQL', 'JavaScript'],
        status: 'Production',
    },
    {
        title: 'Legislative Data Automation',
        description:
            'Web scraping bots using Python and Playwright to collect 10k+ legal documents at ALERJ, reducing analysis time by 80%.',
        logo: '/logos/python.svg',
        link: '#',
        slug: 'legislative-automation',
        technologies: ['Python', 'Playwright', 'Node.js', 'TypeScript', 'SQL'],
        status: 'Completed',
    },
    {
        title: 'Financial Forecasting Dashboard',
        description:
            'Power BI dashboards for financial KPIs and predictive insights at SEFAZ-RJ, using time-series forecasting models.',
        logo: '/logos/powerbi.svg',
        link: '#',
        slug: 'financial-forecast',
        technologies: ['Python', 'R', 'ARIMA', 'Power BI', 'SQL', 'Pandas'],
        status: 'Completed',
    },
    {
        title: 'Blood Test Auto-Ingestion',
        description:
            'Integrated laboratory exam machines to automatically ingest blood test results into Fiocruz internal systems.',
        logo: '/logos/python.svg',
        link: '#',
        slug: 'blood-test-ingestion',
        technologies: ['Python', 'SQL Server', 'SSIS', 'REST APIs'],
        status: 'Production',
    },
    {
        title: 'Medical Document Workflow',
        description:
            'Extended legacy .NET systems with remote verification/signature workflows for medical documents.',
        logo: '/logos/typescript.svg',
        link: '#',
        slug: 'medical-workflow',
        technologies: ['.NET', 'C#', 'SQL Server', 'REST APIs'],
        status: 'Production',
    },
];

const WorkProjectsPage = () => {
    return (
        <div className={styles.layout}>
            <div className={styles.header}>
                <a href="/projects" className={styles.backLink}>
                    ← Back to Projects
                </a>
                <h1 className={styles.pageTitle}>Work Projects</h1>
                <p className={styles.pageSubtitle}>
                    Data Engineering & Backend / LLM Engineering — Projects developed in
                    professional environments at Fiocruz, ALERJ, SEFAZ-RJ, and more.
                </p>
            </div>

            <div className={styles.projectsGrid}>
                {workProjects.map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                ))}
            </div>
        </div>
    );
};

export async function getStaticProps() {
    return {
        props: { title: 'Work Projects' },
    };
}

export default WorkProjectsPage;
