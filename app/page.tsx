import React from "react";
import { getBlogs } from "../lib/getBlog";
import BlogCard from "@/components/BlogCard";
import styles from "./page.module.css";

const HomePage = async () => {
  const blogs = await getBlogs();
  const recentBlogs = blogs.slice(0, 6); // 最新の6件を取得

  return (
    <div>
      <h1>最近の投稿</h1>
      <div className={styles.blogGrid}>
        {recentBlogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
      <div className={styles.readMore}>
        <a href="/blog">さらに読む</a>
      </div>
    </div>
  );
};

export default HomePage;
