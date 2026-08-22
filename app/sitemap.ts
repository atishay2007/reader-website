import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";

const BASE_URL = "https://shreedeshna.in";


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    const posts = await getAllPosts();


    return [

        {
            url: BASE_URL,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },


        {
            url: `${BASE_URL}/articles`,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 0.9,
        },


        {
            url: `${BASE_URL}/dr-neelam-jain`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
        },


        {
            url: `${BASE_URL}/gallery`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.6,
        },


        ...posts.map((post) => ({
            url: `${BASE_URL}/post/${post.fileId}`,
            lastModified: new Date(post.date),
            changeFrequency: "monthly" as const,
            priority: 0.8,
        })),


    ];

}