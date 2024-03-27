// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {

  title: 'Vela',
  tagline: "The Botlhale NLP Toolkit",
  url: 'https://madlalakhaya25.github.io', // Update URL to your GitHub Pages URL
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.svg',
  organizationName: 'madlalakhaya25', // Replace with your GitHub username or organization name
  projectName: 'madlalakhaya25.github.io', // Replace with your repository name
  deploymentBranch: 'gh-pages',
  // Assuming your repository is named `madlalakhaya25.github.io`

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/madlalakhaya25/madlalakhaya25.github.io/edit/main/docs/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/madlalakhaya25/madlalakhaya25.github.io/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: '', 
      logo: {
        alt: 'Botlhale AI Logo',
        src: '/img/logo.png',
      },
      items: [], 
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
