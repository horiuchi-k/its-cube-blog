import Link from "next/link";
import type { Post } from "../../lib/getPosts";
import { formatDate } from "../../lib/formatDate";
import styles from "./index.module.css";

type BlogCardProps = {
  post: Post;
};

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <div className={styles.blogCard}>
      <h2>
        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
      </h2>
      <p>{formatDate(post.date)}</p>
      <p>{post.excerpt}</p>
    </div>
  );
};

export default BlogCard;
