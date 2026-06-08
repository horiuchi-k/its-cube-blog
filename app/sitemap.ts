import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/getPosts";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const postUrls = posts.map((post) => ({
    url: `https://its-cube.com/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [
    { url: "https://its-cube.com/", lastModified: new Date() },
    { url: "https://its-cube.com/about", lastModified: new Date() },
    { url: "https://its-cube.com/blog", lastModified: new Date() },
    ...postUrls,
  ];
}
