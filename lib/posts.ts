import { supabase } from "@/lib/supabase";
import { unstable_noStore as noStore } from "next/cache";

export type Post = {
    id: number;
    title: string;
    content: string;
    author: string | null;
    category: string | null;
    date: string;
    fileId: string;
};


export async function getAllPosts(): Promise<Post[]> {
    noStore();

    const { data, error } = await supabase
        .from("posts")
        .select("*")
        .order("date", {
            ascending: false,
        });

    if (error) {
        console.error(error);
        return [];
    }

    return data.map((post) => ({
        ...post,
        fileId: String(post.id),
    }));
}


export async function getPostById(
    id: string
): Promise<Post | null> {

    const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("id", Number(id))
        .single();

    if (error || !data) {
        return null;
    }

    return {
        ...data,
        fileId: String(data.id),
    };
}


export async function getLatestPosts(limit = 10) {
    noStore();

    const posts = await getAllPosts();

    return posts.slice(0, limit);
}