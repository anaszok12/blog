// Helper functions shared by the blog pages.
import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

// All published posts (drafts hidden), newest first.
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

// Turns a tag name into a safe web address part.
// Example: "Precast Concrete" becomes "precast-concrete"
export function tagSlug(tag: string): string {
  return tag.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

// Every tag used by at least one post, with how many posts use it.
// Sorted by most used first, then A to Z.
export function getTags(posts: Post[]) {
  const map = new Map<string, { name: string; slug: string; count: number }>();
  for (const post of posts) {
    for (const name of post.data.tags) {
      const slug = tagSlug(name);
      if (!slug) continue;
      const entry = map.get(slug) ?? { name, slug, count: 0 };
      entry.count++;
      map.set(slug, entry);
    }
  }
  return [...map.values()].sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}

// Splits posts into month buckets like "November 2026".
// Posts must already be sorted newest first; the months keep that order.
export function groupByMonth(posts: Post[]) {
  const groups: { key: string; label: string; posts: Post[] }[] = [];
  for (const post of posts) {
    const d = post.data.date;
    const key = d.toISOString().slice(0, 7); // "2026-11"
    const label = d.toLocaleDateString('en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' });
    let group = groups.find((g) => g.key === key);
    if (!group) {
      group = { key, label, posts: [] };
      groups.push(group);
    }
    group.posts.push(post);
  }
  return groups;
}
