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

            <div style={{
                display: "flex",
                justifyContent: "center",   // Center the div horizontally in the parent
                alignItems: "center",       // Center the div vertically in the parent
            }}>
                <div style={{
                    width: "45%",
                    display: "flex",
                    flexDirection: "column",   // Stack image and text vertically
                    justifyContent: "center",  // Center content vertically within this div
                    alignItems: "center",      // Center content horizontally within this div
                    textAlign: "center"        // Center text inside <p> tag
                }}>
                    <img src={TailorBird} style={{width: "100%", maxWidth: "100%"}} alt={"Tailor Bird"}/>
                    <p className="hero__subtitle">{siteConfig.tagline}</p>
                </div>
            </div>

            <p className="hero__subtitle home-small-text">
                Hey there 👋 I'm an engineer with a passion for tech, photography, and all things creative. I love
                building cool stuff and vibing to a diverse mix of music genres.
            </p>
            <p className="hero__subtitle home-small-text">Distributed
                systems are where I focus
                on solving complex challenges.
            </p>
            <div className={styles.buttons}>
                <Link
                    className="button button--secondary button--lg home-read-button"
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
