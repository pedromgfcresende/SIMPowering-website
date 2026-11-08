import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://simpowering.org',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
    routing: { prefixDefaultLocale: false },
  },
});
