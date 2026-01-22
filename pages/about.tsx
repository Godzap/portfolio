import Image from 'next/image';
import styles from '@/styles/AboutPage.module.css';


const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.profileSection}>
          <div className={styles.imageWrapper}>
            <Image
              src="/trabalho.png"
              alt="Enzo Baião"
              width={200}
              height={200}
              className={styles.profileImage}
              priority
            />
          </div>
          <div className={styles.profileInfo}>
            <h1 className={styles.title}>Enzo Baião</h1>
            <div className={styles.subtitle}>Backend Engineer | Data Engineer</div>
          </div>
        </div>

        <div className={styles.aboutContent}>
          <section className={styles.section}>
            <p className={styles.paragraph}>
              Hey! I&apos;m a Backend and Data Engineer from Rio de Janeiro, Brazil
              with 5+ years of experience designing, developing, and maintaining
              backend services, APIs, and data pipelines.
            </p>
            <p className={styles.paragraph}>
              I primarily work with <span className={styles.highlight}>Node.js</span>,
              <span className={styles.highlight}> TypeScript</span>, and
              <span className={styles.highlight}> Python</span>, building robust
              backend systems and data pipelines for government, healthcare, and
              analytics environments.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Current Focus</h2>
            <p className={styles.paragraph}>
              Currently at <span className={styles.highlight}>Fiocruz (Oswaldo Cruz Foundation)</span> as
              a Backend / Data Engineer, where I&apos;m automated critical health and operational
              data flows, integrated multiple internal and external APIs, and built API Gateways
              consolidating fragmented laboratory and hospital data sources.
            </p>
            <p className={styles.paragraph}>
              I&apos;ve also worked on integrating laboratory exam machines to automatically ingest
              blood test results into internal systems and developed systems delivered for adoption
              in Mozambique&apos;s public health system.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Technical Expertise</h2>
            <p className={styles.paragraph}>
              <strong>Backend:</strong> Node.js, TypeScript, JavaScript, Python, REST APIs,
              API Gateway, API Integration
            </p>
            <p className={styles.paragraph}>
              <strong>Data Engineering:</strong> Pandas, ETL/ELT, Apache Airflow, SQL,
              Power BI, Forecasting (ARIMA, SARIMA, ARIMAX, ETS)
            </p>
            <p className={styles.paragraph}>
              <strong>Automation:</strong> Playwright, Selenium, Web Scraping, Data Automation
            </p>
            <p className={styles.paragraph}>
              <strong>Cloud:</strong> AWS (Certified Cloud Practitioner), Lambda, S3, CI/CD, Git
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Availability</h2>
            <p className={styles.paragraph}>
              I&apos;m currently <span className={styles.highlight}>open to new opportunities</span> and
              available for Remote positions (Brazil) or relocation to Europe/Portugal.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
