import Link from "next/link";
import type { Blog } from "../../lib/getBlog";
import { formatDate } from "../../lib/formatDate";
import styles from "./index.module.css";

type BlogCardProps = {
  blog: Blog;
};

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <div className={styles.blogCard}>
      <h2>
        <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
      </h2>
      <p>{formatDate(blog.publishedAt)}</p>
      <p>{blog.excerpt}</p>
    </div>
  );
};

export default BlogCard;
