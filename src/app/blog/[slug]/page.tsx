// 📁 src/app/blog/[slug]/page.tsx
import { POSTS, BlogPostPage } from "../page";

export function generateStaticParams() {
  return POSTS.map(p => ({ slug: p.slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Wrap the exported page to await the async params object natively for Next.js 15
export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  return <BlogPostPage params={resolvedParams} />;
}
