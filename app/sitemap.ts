import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";

const BASE_URL = "https://shreedeshna.in";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    const posts = await getAllPosts();

    return [
        {
            url: BASE_URL,
            lastModified: new Date(),
        },

        {
            url: `${BASE_URL}/articles`,
            lastModified: new Date(),
        },

        {
            url: `${BASE_URL}/dr-neelam-jain`,
            lastModified: new Date(),
        },

        {
            url: `${BASE_URL}/gallery`,
            lastModified: new Date(),
        },

        ...posts.map((post) => ({
            url: `${BASE_URL}/post/${post.fileId}`,
            lastModified: new Date(post.date),
        })),
    ];
}