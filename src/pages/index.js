import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (<div className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
            <Heading as="h1" className="hero__title">
                {siteConfig.title}
            </Heading>
            <p className="hero__subtitle" style={{fontWeight: "bold"}}>{siteConfig.tagline}</p>
            <p className="hero__subtitle">I'm Amith Koujalgi and I'm a Software Engineer.</p>
            <p className="hero__subtitle">This is my professional bio.</p>

            <div className={styles.buttons}>
                <Link
                    className="button button--secondary button--lg"
                    to="/docs/intro">
                    View Full Profile
                </Link>
            </div>
        </div>
    </div>);
}

// export default function Home() {
//     const {siteConfig} = useDocusaurusContext();
//     return (<Layout
//         // title={`${siteConfig.title}`}
//         title={"My Profile"}
//         description="Description will go into a meta tag in <head />">
//         <HomepageHeader/>
//         <main>
//             <HomepageFeatures/>
//         </main>
//     </Layout>);
// }

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (<Layout
        // title={`${siteConfig.title}`}
        title={"My Profile"}
        description="Amith Koujalgi, Software Engineer.">
        <HomepageHeader/>
    </Layout>);
}
