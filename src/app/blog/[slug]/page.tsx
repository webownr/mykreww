// src/app/blog/[slug]/page.tsx
import { POSTS, BlogPostPage } from "@/app/blog";

export function generateStaticParams() {
  return POSTS.map(p => ({ slug: p.slug }));
}

export default BlogPostPage;
