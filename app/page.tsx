import { getAllPosts, getPostsByTag } from "../lib/getPosts";
import BlogCard from "@/components/BlogCard";
import styles from "./page.module.css";

const HomePage = () => {
  const notices = getPostsByTag("お知らせ").slice(0, 5);
  const recentPosts = getAllPosts().slice(0, 6);

  return (
    <div>
      {notices.length > 0 && (
        <section>
          <h2>お知らせ</h2>
          <ul>
            {notices.map((post) => (
              <li key={post.slug}>
                <a href={`/blog/${post.slug}`}>{post.title}</a>
              </li>
            ))}
          </ul>
        </section>
      )}
      <section>
        <h2>最近の投稿</h2>
        <div className={styles.blogGrid}>
          {recentPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
        <div className={styles.readMore}>
          <a href="/blog">さらに読む</a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
