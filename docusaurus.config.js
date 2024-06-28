// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "Hello, World! 👋, I'm Amith Koujalgi",
    tagline: 'Software Engineer. Tech Enthusiast.',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://amithkoujalgi.github.io/',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/amithkoujalgi/',

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
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: 'img/docusaurus-social-card.jpg',
            navbar: {
                title: 'Home',
                logo: {
                    alt: 'Logo',
                    src: 'img/logo.png',
                },
                items: [
                    {
                        type: 'docSidebar',
                        sidebarId: 'tutorialSidebar',
                        position: 'left',
                        label: 'Profile',
                    },
                    {to: '/blog', label: 'Blog', position: 'left'},
                    {
                        href: 'https://github.com/amithkoujalgi',
                        label: 'GitHub',
                        position: 'right',
                    },
                    {
                        href: 'https://www.linkedin.com/in/amithkoujalgi/',
                        label: 'LinkedIn',
                        position: 'right'
                    }
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Docs',
                        items: [
                            {
                                label: 'Introduction',
                                to: '/docs/intro',
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
                                label: 'Twitter/X - @amithkoujalgi',
                                href: 'https://x.com/amithkoujalgi',
                            },
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'Blog',
                                to: '/blog',
                            },
                            {
                                label: 'Email',
                                href: 'mailto:koujalgi.amith@gmail.com',
                            },
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
