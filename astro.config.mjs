// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  i18n: {
    locales: ['ch', 'en'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
