import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Every .md file in src/content/blog becomes a blog post.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    image: z.string().optional(),
    // Tags like [Revit, Precast]. Optional; posts without tags get an empty list.
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };
