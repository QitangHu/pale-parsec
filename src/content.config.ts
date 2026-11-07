import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blogs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blogs' }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    lang: z.enum(['en', 'zh', 'es', 'ja']),
    author: z.string().optional(),
    description: z.string().optional(),
    image: z.object({ url: z.string(), alt: z.string() }).optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { blogs };
