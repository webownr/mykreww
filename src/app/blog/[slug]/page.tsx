// src/app/blog/[slug]/page.tsx
import { POSTS, BlogPostPage } from "../page";

export function generateStaticParams() {
  return POSTS.map(p => ({ slug: p.slug }));
}

export default BlogPostPage;
