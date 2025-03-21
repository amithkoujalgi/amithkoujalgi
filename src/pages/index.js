import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import TailorBird from '@site/static/img/tailor-bird.jpg';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (<div className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
            <Heading as="h1" className="hero__title">
                {siteConfig.title}
            </Heading>

            <div className="center-container">
                <div className="content-box">
                    <img src={TailorBird} alt="Tailor Bird"/>
                    <p className="hero__subtitle">{siteConfig.tagline}</p>
                </div>
            </div>

            <div className="center-container">
                <div className="text-content-box">
                    <p className="hero__subtitle home-small-text">
                        Hey there 👋 I'm an engineer with a passion for tech, photography, and all things creative.
                    </p>
                    <p className="hero__subtitle home-small-text">
                        I love
                        building cool stuff and vibing to a diverse mix of music genres.
                    </p>
                    <p className="hero__subtitle home-small-text">Distributed
                        systems are where I focus
                        on solving complex challenges.
                    </p>
                </div>
            </div>

            <div className={`${styles.buttons} home-read-on-button-container`}>
                <Link
                    className="button button--secondary button--lg home-read-on-button"
                    to="/docs/intro">
                    Read on
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
