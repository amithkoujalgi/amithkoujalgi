import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import IndianWhiteEye from '@site/static/img/photos/indian-white-eye.jpg';

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
                    <img src={IndianWhiteEye} alt="Indian White-eye"/>
                    <p className="hero__subtitle">{siteConfig.tagline}</p>
                </div>
            </div>

            <div className="text-center-container">
                <div className="text-content-box">
                    <p className="hero__subtitle home-small-text">
                        Hey there 👋 I'm an engineer with a passion for tech, photography, and anything creative. I enjoy
                        building systems, solving problems, and vibing to a mix of music.
                        Distributed systems is what I'm exploring at the moment.
                    </p>
                </div>
            </div>

            <div className={`${styles.buttons} home-read-on-button-container`}>
                <Link
                    className="button button--secondary button--lg home-read-on-button"
                    to="/docs/about">
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
