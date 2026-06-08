import React from "react";
import { getBlogs } from "@/lib/getBlog";
import BlogCard from "../../components/BlogCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ブログ一覧 | IT Scube",
  description: "ブログ記事の一覧のページ",
};

const BlogListPage = async () => {
  const blogs = await getBlogs();

  return (
    <div>
      <h1>ブログ一覧</h1>
      <div>
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogListPage;
