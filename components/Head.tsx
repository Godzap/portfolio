import Head from 'next/head';

interface CustomHeadProps {
  title: string;
}

const CustomHead = ({ title }: CustomHeadProps) => {
  return (
    <Head>
      <title>{title} | Enzo Baião - Backend & Data Engineer</title>
      <meta
        name="description"
        content="Enzo Baião - Backend and Data Engineer with 5+ years of experience in backend services, APIs, and data pipelines. AWS certified. Based in Rio de Janeiro, Brazil."
      />
      <meta
        name="keywords"
        content="enzo baiao, backend engineer, data engineer, python developer, nodejs developer, typescript, aws, api development, data pipelines, rio de janeiro, brazil"
      />
      <meta property="og:title" content="Enzo Baião - Backend & Data Engineer Portfolio" />
      <meta
        property="og:description"
        content="Backend and Data Engineer with 5+ years of experience building reliable systems and data pipelines."
      />
      <meta property="og:image" content="/og-image.png" />
      <meta property="og:url" content="https://enzobaiao.dev" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Enzo Baião',
};
