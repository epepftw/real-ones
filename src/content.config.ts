import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const members = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/members' }),
  schema: z.object({
    codename: z.string(),
    discipline: z.string(),
    bio: z.string(),
    portrait: z.string(),
    manifesto: z.string(),
    signature: z.enum(['waveform', 'stack', 'quote', 'stats', 'gallery', 'ascii']),
    signatureData: z.any(),
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    category: z.enum(['DISPATCH', 'FIELD NOTES', 'INTERVIEW']),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    code: z.string(),
    status: z.enum(['live', 'archive']),
    cover: z.string(),
    description: z.string(),
  }),
});

export const collections = { members, posts, projects };
