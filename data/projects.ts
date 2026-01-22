export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
  technologies?: string[];
  status?: string;
}

export const projects: Project[] = [
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
    logo: '/logos/lua.svg',
    link: '#',
    slug: 'super-medieval',
    technologies: ['Lua', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
    status: 'In Progress',
  },
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
      'Laboratory sample inventory system built with Laravel + MySQL, delivered for adoption in Mozambique\'s public health system.',
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
];
