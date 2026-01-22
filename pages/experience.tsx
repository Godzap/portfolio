import styles from '@/styles/ExperiencePage.module.css';

interface Experience {
    company: string;
    role: string;
    period: string;
    domain: string;
    highlights: string[];
    technologies: string[];
}

const experiences: Experience[] = [
    {
        company: 'Fiocruz — Oswaldo Cruz Foundation',
        role: 'Backend Engineer / Data Engineer',
        period: 'Jan 2025 - Present',
        domain: 'Public Health',
        highlights: [
            'Automated critical health and operational data flows by designing backend services in Python.',
            'Integrated multiple internal and external APIs via Node.js (TypeScript) ingestion pipelines with validation and normalization layers.',
            'Built a TypeScript API Gateway consolidating fragmented laboratory and hospital data sources.',
            'Integrated laboratory exam machines to automatically ingest blood test results into internal systems.',
            'Developed a laboratory sample inventory system (Laravel + MySQL) delivered for adoption in Mozambique\'s public health system.',
            'Maintained and extended legacy .NET systems with new modules such as remote verification/signature workflows for medical documents.',
            'Created Playwright automation bots for document import and healthcare system interoperability.',
        ],
        technologies: ['Python', 'TypeScript', 'Node.js', 'MySQL', 'SQL Server', 'SSIS', 'Laravel', '.NET', 'Playwright', 'REST APIs'],
    },
    {
        company: 'SEFAZ-RJ',
        role: 'Data Engineer',
        period: 'Jan 2023 - Dec 2024',
        domain: 'Finance / Public Administration',
        highlights: [
            'Extracted financial data from APIs and SQL databases using Python and JavaScript.',
            'Cleaned and transformed datasets using Pandas.',
            'Built financial forecasting models using R and time-series techniques.',
            'Created Power BI dashboards for financial KPIs and predictive insights.',
        ],
        technologies: ['Python', 'JavaScript', 'SQL', 'Pandas', 'R', 'ARIMA', 'Power BI'],
    },
    {
        company: 'ALERJ — Legislative Assembly of Rio de Janeiro',
        role: 'Backend Engineer',
        period: 'Jan 2021 - Dec 2022',
        domain: 'Government / Legislative Data',
        highlights: [
            'Built API-based integrations to automate legislative analysis and parliamentary reporting.',
            'Developed Node.js (TypeScript) backend services to expose standardized legislative data via REST APIs.',
            'Built web scraping bots using Python and Playwright to collect 10k+ legal documents, reducing analysis time by 80%.',
        ],
        technologies: ['Node.js', 'TypeScript', 'Python', 'Playwright', 'SQL', 'REST APIs'],
    },
    {
        company: 'Arraial Tour',
        role: 'Python Developer / Data Engineer',
        period: 'Jan 2020 - Dec 2020',
        domain: 'Tourism & Pricing Intelligence',
        highlights: [
            'Engineered web scraping and automation scripts using Python (Playwright, Selenium).',
            'Extracted real-time pricing and availability data from 20+ sources.',
            'Cleaned and enriched datasets using Pandas and external APIs (weather, events).',
            'Built Power BI dashboards to track seasonal pricing trends and demand hotspots.',
            'Increased operational efficiency by 70% through full automation of data collection.',
        ],
        technologies: ['Python', 'Playwright', 'Selenium', 'Pandas', 'Power BI', 'SQL'],
    },
];

const ExperiencePage = () => {
    return (
        <div className={styles.layout}>
            <h1 className={styles.pageTitle}>Professional Experience</h1>
            <p className={styles.pageSubtitle}>
                My journey through backend engineering, data engineering, and automation across
                government, healthcare, and analytics domains.
            </p>

            <div className={styles.timeline}>
                {experiences.map((exp, index) => (
                    <div key={index} className={styles.experienceCard}>
                        <div className={styles.cardHeader}>
                            <div className={styles.companyInfo}>
                                <h2 className={styles.company}>{exp.company}</h2>
                                <span className={styles.domain}>{exp.domain}</span>
                            </div>
                            <div className={styles.roleInfo}>
                                <h3 className={styles.role}>{exp.role}</h3>
                                <span className={styles.period}>{exp.period}</span>
                            </div>
                        </div>

                        <div className={styles.highlights}>
                            <ul>
                                {exp.highlights.map((highlight, idx) => (
                                    <li key={idx}>{highlight}</li>
                                ))}
                            </ul>
                        </div>

                        <div className={styles.technologies}>
                            {exp.technologies.map((tech, idx) => (
                                <span key={idx} className={styles.techBadge}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export async function getStaticProps() {
    return {
        props: { title: 'Experience' },
    };
}

export default ExperiencePage;
