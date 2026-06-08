import { getPostBySlug, getAllPosts } from "@/lib/getPosts";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { formatDate } from "@/lib/formatDate";

type Props = { params: { slug: string } };

export const generateStaticParams = () =>
  getAllPosts().map((post) => ({ slug: post.slug }));

export const generateMetadata = ({ params }: Props): Metadata => {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | 50代ITエンジニアのAI実践記`,
    description: post.excerpt,
  };
};

const BlogArticlePage = ({ params }: Props) => {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{formatDate(post.date)}</p>
      <div>
        {post.tags.map((tag) => (
          <a key={tag} href={`/blog?tag=${tag}`}>
            #{tag}
          </a>
        ))}
      </div>
      <MDXRemote source={post.content} />
    </article>
  );
};

export default BlogArticlePage;
