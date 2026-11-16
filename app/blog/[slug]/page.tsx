import { Metadata } from "next";
import { blogPosts } from "../blog-posts";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.id, 
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const post = blogPosts.find(bp => bp.id === slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.description.substring(0, 160), // Short description for SEO
    openGraph: {
      title: post.title,
      description: post.description.substring(0, 160),
      type: "article",
      url: `https://jessecallahan.github.io/Portfolio/blog/${slug}`,
      images: [
        {
          url: `https://jessecallahan.github.io/${post.image}`, 
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const post = blogPosts.find(bp => bp.id === slug);

  if (!post) return <h1>Post Not Found</h1>;

  return (
    <div style={{ margin:'-30px 10px 0 10px' }}>
        <h1 style={{color: '#228B22'}}>{post.title}</h1>
        <div>{post.content}</div>
    </div>
  );
}
