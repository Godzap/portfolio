import Image from 'next/image';
import GitHubCalendar from 'react-github-calendar';
import { VscRepo, VscPerson, VscLoading } from 'react-icons/vsc';
import { useState, useEffect } from 'react';

import RepoCard from '@/components/RepoCard';
import { Repo, User } from '@/types';

import styles from '@/styles/GithubPage.module.css';

const GithubPage = () => {
  const [user, setUser] = useState<User | null>(null);
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'Godzap';

        const userRes = await fetch(`https://api.github.com/users/${username}`);
        const userData = await userRes.json();

        const repoRes = await fetch(
          `https://api.github.com/users/${username}/repos?sort=pushed&per_page=6`
        );
        const repoData = await repoRes.json();

        setUser(userData);
        setRepos(Array.isArray(repoData) ? repoData : []);
      } catch (error) {
        console.error("Failed to fetch GitHub data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  if (loading || !user) {
    return (
      <div className={styles.layout}>
        <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
          <VscLoading className={styles.spinner} size={50} style={{ animation: 'spin 1s linear infinite' }} />
          <style jsx global>{`
                @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }
             `}</style>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.layout}>
      <div className={styles.pageHeading}>
        <h1 className={styles.pageTitle}>GitHub</h1>
        <p className={styles.pageSubtitle}>
          Browse through my GitHub repositories and see what I&apos;ve been
          working on. These are some of my public repositories showcasing
          various projects and skills.
        </p>
      </div>

      <div className={styles.githubPage}>
        <div className={styles.profileSection}>
          <div className={styles.profileInfo}>
            <Image
              src={user.avatar_url}
              className={styles.avatar}
              alt={user.login}
              width={100}
              height={100}
              priority
              unoptimized
            />
            <div className={styles.userInfo}>
              <h2 className={styles.username}>{user.login}</h2>
              <div className={styles.stats}>
                <div className={styles.statItem}>
                  <VscRepo className={styles.statIcon} />
                  <span>{user.public_repos} repositories</span>
                </div>
                <div className={styles.statItem}>
                  <VscPerson className={styles.statIcon} />
                  <span>{user.followers} followers</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.sectionHeader}>
          <h3 className={styles.sectionTitle}>Popular Repositories</h3>
        </div>
        <div className={styles.reposContainer}>
          {repos.map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </div>
        <div className={styles.contributions}>
          <GitHubCalendar
            username={user.login}
            hideColorLegend
            hideMonthLabels
            colorScheme="dark"
            theme={{
              dark: ['#161B22', '#0e4429', '#006d32', '#26a641', '#39d353'],
              light: ['#161B22', '#0e4429', '#006d32', '#26a641', '#39d353'],
            }}
            style={{
              width: '100%',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "GitHub" }
  };
}

export default GithubPage;
