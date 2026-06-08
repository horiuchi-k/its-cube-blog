import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type Post = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  content: string;
};

const postsDirectory = path.join(process.cwd(), "content/posts");

export const getAllPosts = (): Post[] => {
  if (!fs.existsSync(postsDirectory)) return [];

  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((name) => name.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const { data, content } = matter(fs.readFileSync(fullPath, "utf8"));
      return {
        slug,
        title: data.title || "",
        date: data.date || "",
        tags: data.tags || [],
        excerpt: data.excerpt || "",
        content,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
};

export const getPostBySlug = (slug: string): Post | null => {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const { data, content } = matter(fs.readFileSync(fullPath, "utf8"));
    return {
      slug,
      title: data.title || "",
      date: data.date || "",
      tags: data.tags || [],
      excerpt: data.excerpt || "",
      content,
    };
  } catch {
    return null;
  }
};

export const getPostsByTag = (tag: string): Post[] =>
  getAllPosts().filter((post) => post.tags.includes(tag));
