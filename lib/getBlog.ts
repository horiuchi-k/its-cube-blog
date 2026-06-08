import { client } from "./microcmsClient";

export type Blog = {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  publishedAt: string;
  categories: Category[];
  slug: string;
};

export type Category = {
  id: string;
  name: string;
  slug: string;
  category: string;
};

export const getBlogs = async (): Promise<Blog[]> => {
  const response = await client.get({
    endpoint: "blogs",
    queries: { limit: 100 },
  });
  return response.contents;
};

export const getBlogById = async (id: string): Promise<Blog> => {
  const response = await client.get({ endpoint: `blogs/${id}` });
  return response;
};

export const getBlogsByCategory = async (category: string): Promise<Blog[]> => {
  const response = await client.get({
    endpoint: "blogs",
    queries: { filters: `slug[equals]${category}` },
  });
  return response.contents;
};

export const getALLCategories = async (limit = 100): Promise<Category[]> => {
  const response = await client.get({
    endpoint: "categories",
    queries: { fields: "name,id,slug", limit },
  });
  return response.contents;
};
