import { getAllPosts } from "@/lib/getPosts";
import BlogCard from "../../components/BlogCard";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ブログ一覧 | 50代ITエンジニアのAI実践記",
  description: "AI・IT活用に関するブログ記事の一覧",
};

const BlogListPage = ({ searchParams }: { searchParams: { tag?: string } }) => {
  const allPosts = getAllPosts();
  const allTags = Array.from(new Set(allPosts.flatMap((p) => p.tags)));
  const posts = searchParams.tag
    ? allPosts.filter((p) => p.tags.includes(searchParams.tag!))
    : allPosts;

  return (
    <div>
      <h1>ブログ一覧</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "24px" }}>
        <Link
          href="/blog"
          style={{
            fontSize: "0.85rem",
            padding: "4px 12px",
            border: "1px solid #000080",
            borderRadius: "4px",
            color: !searchParams.tag ? "#fff" : "#000080",
            backgroundColor: !searchParams.tag ? "#000080" : "transparent",
            textDecoration: "none",
          }}
        >
          すべて
        </Link>
        {allTags.map((tag) => (
          <Link
            key={tag}
            href={`/blog?tag=${encodeURIComponent(tag)}`}
            style={{
              fontSize: "0.85rem",
              padding: "4px 12px",
              border: "1px solid #000080",
              borderRadius: "4px",
              color: searchParams.tag === tag ? "#fff" : "#000080",
              backgroundColor: searchParams.tag === tag ? "#000080" : "transparent",
              textDecoration: "none",
            }}
          >
            #{tag}
          </Link>
        ))}
      </div>
      <div>
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogListPage;
