import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: <span style={{ fontWeight: 700 }}>LANDTTS Platform Docs</span>,
  project: { link: 'https://github.com/landtts/platform' },
  docsRepositoryBase: 'https://github.com/landtts/platform/tree/main/apps/docs',
  useNextSeoProps() {
    return { titleTemplate: '%s — LANDTTS Docs' };
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="LANDTTS Digital Patient Transport Platform Documentation" />
    </>
  ),
  sidebar: { defaultMenuCollapseLevel: 1, toggleButton: true },
  toc: { float: true, title: 'On This Page' },
  editLink: { text: 'Edit this page on GitHub' },
  feedback: { content: 'Question? Give us feedback →' },
  footer: { text: `© ${new Date().getFullYear()} LANDTTS Ltd. All rights reserved.` },
  search: { placeholder: 'Search documentation…' },
  navigation: { prev: true, next: true },
};

export default config;
