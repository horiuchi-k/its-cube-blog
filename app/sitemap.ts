import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/getPosts";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const postUrls = posts.map((post) => ({
    url: `https://blog.hiraku-ai.com/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [
    { url: "https://blog.hiraku-ai.com/", lastModified: new Date() },
    { url: "https://blog.hiraku-ai.com/about", lastModified: new Date() },
    { url: "https://blog.hiraku-ai.com/blog", lastModified: new Date() },
    ...postUrls,
  ];
}
