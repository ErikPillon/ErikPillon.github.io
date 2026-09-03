import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { parse as parseYaml } from 'yaml';

/**
 * The YAML data files are plain hand-authored lists, but Astro's `file()` loader
 * wants an object keyed by id. Parse the list and key it by a slug of `name`.
 */
function keyedYamlList(text: string): Record<string, Record<string, unknown>> {
  const items = (parseYaml(text) ?? []) as Array<Record<string, unknown>>;
  const seen = new Set<string>();
  return Object.fromEntries(
    items.map((item, index) => {
      // Names are not guaranteed unique (two degrees from the same university),
      // so de-duplicate rather than silently dropping an entry.
      let id = slugify(String(item.name));
      while (seen.has(id)) id = `${slugify(String(item.name))}-${index}`;
      seen.add(id);
      return [id, { ...item, id, order: index }];
    }),
  );
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    date: z.coerce.date(),
    description: z.string().optional(),
    cover: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    /** Set when the post is a book note. */
    book: z
      .object({
        author: z.string(),
        year: z.number().optional(),
        pages: z.number().optional(),
      })
      .optional(),
    /** Original Jekyll filename slug — kept so old permalinks stay traceable. */
    legacySlug: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: file('./src/data/projects.yaml', { parser: keyedYamlList }),
  schema: z.object({
    order: z.number(),
    name: z.string(),
    group: z.enum(['current', 'scicomm', 'archive']),
    status: z.enum(['live', 'wip', 'archived']),
    featured: z.boolean().default(false),
    year: z.string().optional(),
    tagline: z.string().optional(),
    description: z.string(),
    stack: z.array(z.string()).default([]),
    image: z.string().optional(),
    link: z.string().url().optional(),
  }),
});

const education = defineCollection({
  loader: file('./src/data/education.yaml', { parser: keyedYamlList }),
  schema: z.object({
    order: z.number(),
    name: z.string(),
    dates: z.string(),
    qualification: z.string(),
    current: z.boolean().default(false),
    description: z.string(),
  }),
});

const elsewhere = defineCollection({
  loader: file('./src/data/elsewhere.yaml', { parser: keyedYamlList }),
  schema: z.object({
    order: z.number(),
    name: z.string(),
    kind: z.string(),
    host: z.string(),
    description: z.string(),
    link: z.string().url(),
  }),
});

export const collections = { posts, projects, education, elsewhere };
