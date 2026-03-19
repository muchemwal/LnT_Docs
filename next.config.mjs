import nextra from 'nextra';

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  defaultShowCopyCode: true,
  staticImage: true,
});

const isProd = process.env.NODE_ENV === 'production';

// 👇 must match your GitHub repo name exactly
const repoName = 'LnT_Docs';

export default withNextra({
  output: 'export', // 🔥 REQUIRED for GitHub Pages

  images: {
    unoptimized: true,
  },

  reactStrictMode: true,

  // 👇 critical for GitHub Pages routing
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
});