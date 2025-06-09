import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        {/* <p className="hero__subtitle">{siteConfig.tagline}</p> */}

        <div className={styles.row_custom}>

          <div className={styles.buttons_custom}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro">
              Baca Meter
            </Link>
          </div>

          <div className={styles.buttons_custom}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro">
              Penagihan
            </Link>
          </div>

          <div className={styles.buttons_custom}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro">
              Kepegawaian
            </Link>
          </div>

          <div className={styles.buttons_custom}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro">
              Non Air
            </Link>
          </div>

          <div className={styles.buttons_custom}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro">
              Pergudangan
            </Link>
          </div>

          <div className={styles.buttons_custom}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro">
              Sensor
            </Link>
          </div>

        </div>

      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="PDAM Documentations">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
