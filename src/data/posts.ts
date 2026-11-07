import { getCollection } from 'astro:content';

export async function getPosts(locale: string) {
  const entries = await getCollection(
    'blogs',
    (entry) => entry.data.lang === locale,
  );

  return entries
    .sort((first, second) => second.data.pubDate.valueOf() - first.data.pubDate.valueOf())
    .map((entry) => {
      const slug = entry.id.split('/').pop() ?? entry.id;
      const url = locale === 'en' ? `/posts/${slug}` : `/${locale}/posts/${slug}`;

      return {
        url,
        frontmatter: {
          title: entry.data.title,
          pubDate: entry.data.pubDate.toISOString(),
        },
      };
    });
}
