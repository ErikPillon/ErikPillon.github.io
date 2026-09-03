// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Legacy Jekyll permalinks were /blog/:filename-slug (case-sensitive).
// Keep them alive by redirecting to the new /writing/ paths.
const legacyPostRedirects = Object.fromEntries(
  [
    ['Why_I_started_blogging', 'why-i-started-blogging'],
    ['Citizen_Kane', 'citizen-kane'],
    ['Science_and_complexity', 'science-and-complexity'],
    ['Eichmann-in-Jerusalem', 'eichmann-in-jerusalem'],
    ['Most_influential_articles', 'most-influential-articles'],
    ['Think-Again', 'think-again'],
    ['doughnut-economics', 'doughnut-economics'],
    ['database-normalization-and-all-that-jazz', 'database-normalization-and-all-that-jazz'],
    ['accelerate', 'accelerate'],
    ['the-champions-mind', 'the-champions-mind'],
  ].map(([from, to]) => [`/blog/${from}`, `/writing/${to}`]),
);

export default defineConfig({
  site: 'https://erikpillon.github.io',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  redirects: {
    '/blog': '/writing',
    '/project': '/projects',
    ...legacyPostRedirects,
  },
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark-dimmed' },
      wrap: true,
    },
  },
  build: { format: 'directory' },
});
