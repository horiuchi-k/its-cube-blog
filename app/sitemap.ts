import type { MetadataRoute } from "next";
import { getBlogs } from "@/lib/getBlog";
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogs = await getBlogs();
  const blogUrls = blogs.map((post) => ({
    url: `https://blog.it-scube.com/blog/${post.id}`,
    lastModified: new Date(post.publishedAt),
  }));

  return [
    {
      url: "https://blog.it-scube.com/",
      lastModified: new Date(),
    },
    {
      url: "https://blog.it-scube.com/about",
      lastModified: new Date(),
    },
    {
      url: "https://blog.it-scube.com/blog",
      lastModified: new Date(),
    },
    {
      url: "https://blog.it-scube.com/category",
      lastModified: new Date(),
    },
    ...blogUrls,
  ];
}
