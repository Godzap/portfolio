import Image from 'next/image';
import { VscBook, VscCloud, VscMortarBoard, VscLightbulb } from 'react-icons/vsc';

import styles from '@/styles/StudiesPage.module.css';

const StudiesPage = () => {
    return (
        <div className={styles.layout}>
            <div className={styles.header}>
                <div className={styles.headerContent}>
                    <h1 className={styles.pageTitle}>Studies & Continuous Learning</h1>
                    <p className={styles.pageSubtitle}>
                        I am constantly studying topics that I find genuinely interesting and that I do not
                        always have the opportunity to explore deeply in my day-to-day work. Learning is a
                        continuous process for me, driven by curiosity and the desire to build better, more
                        scalable systems.
                    </p>
                </div>
                <div className={styles.headerImage}>
                    <Image
                        src="/pessoal.png"
                        alt="Enzo Baião studying"
                        width={200}
                        height={200}
                        className={styles.profileImage}
                    />
                </div>
            </div>

            <div className={styles.focusAreas}>
                <div className={styles.areaCard}>
                    <div className={styles.areaIcon}>
                        <VscCloud size={40} />
                    </div>
                    <div className={styles.areaContent}>
                        <h2 className={styles.areaTitle}>Cloud Computing</h2>
                        <p className={styles.areaDetails}>
                            Cloud engineering is currently my main area of study. I actively focus on cloud
                            architecture, scalability, and serverless patterns, with a strong emphasis on AWS.
                            I am working toward AWS Professional-level certifications, having already obtained
                            the foundational certification.
                        </p>
                        <div className={styles.areaTags}>
                            <span className={styles.tag}>AWS</span>
                            <span className={styles.tag}>Serverless</span>
                            <span className={styles.tag}>Cloud Architecture</span>
                            <span className={styles.tag}>Scalability</span>
                        </div>
                    </div>
                </div>

                <div className={styles.areaCard}>
                    <div className={styles.areaIcon}>
                        <VscMortarBoard size={40} />
                    </div>
                    <div className={styles.areaContent}>
                        <h2 className={styles.areaTitle}>Academic Education</h2>
                        <p className={styles.areaDetails}>
                            I am completing my Bachelor&apos;s degree in Systems Analysis and Development, with
                            graduation expected in the middle of this year. This academic background complements
                            my practical experience by strengthening fundamentals in software engineering,
                            systems design, and problem-solving.
                        </p>
                        <div className={styles.areaTags}>
                            <span className={styles.tag}>Systems Analysis</span>
                            <span className={styles.tag}>Software Engineering</span>
                            <span className={styles.tag}>Bachelor&apos;s Degree</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.mindsetSection}>
                <div className={styles.mindsetIcon}>
                    <VscLightbulb size={32} />
                </div>
                <div className={styles.mindsetContent}>
                    <h3 className={styles.mindsetTitle}>Learning Mindset</h3>
                    <p className={styles.mindsetText}>
                        I believe that consistent learning is essential in technology. Whether through
                        certifications, academic studies, or hands-on experimentation, I continuously invest
                        time in improving my skills and expanding my technical perspective.
                    </p>
                </div>
            </div>

            <div className={styles.certifications}>
                <h3 className={styles.certTitle}>
                    <VscBook size={24} />
                    Certifications & Goals
                </h3>
                <div className={styles.certGrid}>
                    <div className={styles.certCard}>
                        <div className={styles.certBadge}>✓</div>
                        <span className={styles.certName}>AWS Cloud Practitioner</span>
                        <span className={styles.certStatus}>Achieved</span>
                    </div>
                    <div className={`${styles.certCard} ${styles.inProgress}`}>
                        <div className={styles.certBadge}>→</div>
                        <span className={styles.certName}>AWS Solutions Architect</span>
                        <span className={styles.certStatus}>In Progress</span>
                    </div>
                    <div className={`${styles.certCard} ${styles.planned}`}>
                        <div className={styles.certBadge}>○</div>
                        <span className={styles.certName}>AWS Developer Associate</span>
                        <span className={styles.certStatus}>Planned</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export async function getStaticProps() {
    return {
        props: { title: 'Studies' },
    };
}

export default StudiesPage;
