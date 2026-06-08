import React from "react";
import { getBlogById } from "@/lib/getBlog";
import parse from "html-react-parser";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ブログ記事 | IT Scube",
  description: "ブログ記事のページ",
};

const BlogArticlePage = async ({ params }: { params: { id: string } }) => {
  const blog = await getBlogById(params.id);
  return (
    <div>
      <h1>{blog.title}</h1>
      <div>{parse(blog.content)}</div>
    </div>
  );
};

export default BlogArticlePage;
