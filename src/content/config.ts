import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    category: z.enum(['product-experience', 'product-perspectives', 'career-growth', 'ai-tools']),
    description: z.string(),
    lang: z.enum(['en', 'zh']).default('en'),
  }),
});

export const collections = { blog };
