// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "Amith Koujalgi",
    tagline: "Nature is the ultimate algorithm, where each moment unfolds as a masterstroke of design. Observation is the key that unlocks its brilliance, revealing the intricate patterns and hidden beauty woven into the fabric of the world.",
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://amithkoujalgi.github.io/',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'amithkoujalgi', // Usually your GitHub org/user name.
    projectName: 'amithkoujalgi', // Usually your repo name.

    onBrokenLinks: 'warn',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: './sidebars.js',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
                gtag: {
                    trackingID: 'G-FWTNXKHYWK',
                    anonymizeIP: false,
                },
            })
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: 'img/docusaurus-social-card.jpg',
            navbar: {
                title: 'Intro',
                logo: {
                    alt: 'Logo',
                    src: 'img/logo.png',
                },
                items: [
                    {
                        type: 'docSidebar',
                        sidebarId: 'tutorialSidebar',
                        position: 'left',
                        label: 'About',
                    },
                    {
                        type: 'dropdown',
                        label: 'Work', 
                        position: 'left',
                        items: [
                            {
                                to: '/docs/category/projects',
                                label: 'Projects'
                            },
                            {
                                to: '/docs/category/open-source-projects',
                                label: 'Open Source'
                            },
                        ],
                    },
                    {
                        to: '/blog',
                        label: 'Blog',
                        position: 'left'
                    },
                    {
                        type: 'dropdown',
                        label: 'Beyond Tech',
                        position: 'left', 
                        items: [
                            {
                                to: '/docs/beyond-tech/photography',
                                label: 'Photography'
                            },
                            {
                                to: '/docs/beyond-tech/music',
                                label: 'Music'
                            },
                        ],
                    },
                    {
                        href: 'https://github.com/amithkoujalgi',
                        label: 'GitHub',
                        position: 'right',
                    }
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Quick Links',
                        items: [
                            {
                                label: 'Projects',
                                to: '/docs/category/projects',
                            },
                            {
                                label: 'Open-source',
                                to: '/docs/category/open-source-projects',
                            },
                            {
                                label: 'Blog',
                                to: '/blog',
                            },
                            {
                                label: 'Photography',
                                to: '/docs/beyond-tech/photography',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Medium',
                                href: 'https://medium.com/@koujalgi.amith',
                            },
                            {
                                label: 'Twitter/X',
                                href: 'https://x.com/amithkoujalgi',
                            },
                        ],
                    },
                    {
                        title: 'Connect',
                        items: [

                            {
                                label: 'Email',
                                href: 'mailto:koujalgi.amith@gmail.com',
                            },
                            {
                                href: 'https://www.linkedin.com/in/amithkoujalgi/',
                                label: 'LinkedIn',
                                position: 'right'
                            },
                            {
                                href: 'https://www.instagram.com/amithkoujalgi/',
                                label: 'Instagram',
                                position: 'right',
                            },
                            {
                                href: 'https://www.youtube.com/@AmithKoujalgi',
                                label: 'YouTube',
                                position: 'right',
                            }
                        ],
                    },
                ],
                copyright: `Amith Koujalgi - Profile. ${new Date().getFullYear()}.`,
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
                additionalLanguages: ['java', 'json', 'javascript'],
            },
            colorMode:{
                defaultMode: 'light',
                disableSwitch: false,
                respectPrefersColorScheme: false,
            },
        }),
    markdown: {
        mermaid: true,
    },
    themes: ['@docusaurus/theme-mermaid'],
    plugins: [
      ['drawio', {}],
    ],
};

export default config;
