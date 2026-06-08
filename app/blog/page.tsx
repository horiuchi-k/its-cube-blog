import { getAllPosts } from "@/lib/getPosts";
import BlogCard from "../../components/BlogCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ブログ一覧 | 50代ITエンジニアのAI実践記",
  description: "AI・IT活用に関するブログ記事の一覧",
};

const BlogListPage = ({ searchParams }: { searchParams: { tag?: string } }) => {
  const allPosts = getAllPosts();
  const posts = searchParams.tag
    ? allPosts.filter((p) => p.tags.includes(searchParams.tag!))
    : allPosts;

  return (
    <div>
      <h1>ブログ一覧</h1>
      {searchParams.tag && <p>タグ：{searchParams.tag}</p>}
      <div>
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogListPage;
