import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPosts, summarise } from '../lib/posts';
import { site } from '../site';

export async function GET(context: APIContext) {
  const posts = await getPosts();

  return rss({
    title: `${site.title} — Writing`,
    description: site.description,
    site: context.site ?? site.url,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description ?? summarise(post.body ?? '', 300),
      link: `/writing/${post.id}/`,
      categories: post.data.tags,
    })),
    customData: `<language>en-gb</language>`,
  });
}
