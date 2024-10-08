const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
});

module.exports = withNextra({
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // config.cache = false; // Comment this out or remove it to re-enable the cache
    return config;
  },
});
