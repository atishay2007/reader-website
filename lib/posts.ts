import { supabase } from "@/lib/supabase";
import { unstable_cache } from "next/cache";

export type Post = {
    id: number;
    title: string;
    content: string;
    author: string | null;
    category: string | null;
    date: string;
    fileId: string;
    excerpt?: string;
};


export async function getAllPosts(): Promise<Post[]> {

    const pageSize = 1000;
    const allPosts: Post[] = [];

    for (let page = 0; ; page++) {

        const { data, error } = await supabase
            .from("posts")
            .select("*")
            .order("date", {
                ascending: false,
            })
            .range(
                page * pageSize,
                page * pageSize + pageSize - 1
            );


        if (error) {
            console.error(error);
            break;
        }


        if (!data || data.length === 0) {
            break;
        }


        allPosts.push(...data);


        if (data.length < pageSize) {
            break;
        }
    }


    return allPosts.map((post) => ({
        ...post,
        fileId: String(post.id),
    }));
}

export function getReadingTime(content: string) {
    const words = content
        .replace(/<[^>]*>/g, "")
        .trim()
        .split(/\s+/)
        .length;

    const minutes = Math.ceil(words / 200);

    return Math.max(1, minutes);
}


export async function getPostById(
    id: string
): Promise<Post | null> {

    return unstable_cache(
        async () => {

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

        },
        ["post", id],
        {
            revalidate: 3600,
        }
    )();
}


export async function getLatestPosts(
    limit = 10
): Promise<Post[]> {

    const { data, error } = await supabase
        .from("posts")
        .select(`
            id,
            title,
            content,
            author,
            category,
            date
        `)
        .order("date", {
            ascending: false,
        })
        .limit(limit);


    if (error) {
        console.error(error);
        return [];
    }


    return data.map((post) => ({
        ...post,
        excerpt: post.content
            .replace(/<[^>]*>/g, "")
            .replace(/\s+/g, " ")
            .trim()
            .slice(0, 120),
        fileId: String(post.id),
    }));
}

export async function getNextPost(
    date: string
): Promise<Post | null> {

    return unstable_cache(
        async () => {

            const { data, error } = await supabase
                .from("posts")
                .select(`
                    id,
                    title,
                    date
                `)
                .lt("date", date)
                .order("date", {
                    ascending: false,
                })
                .limit(1)
                .single();


            if (error || !data) {
                return null;
            }


            return {
                id: data.id,
                title: data.title,
                date: data.date,
                content: "",
                author: null,
                category: null,
                fileId: String(data.id),
            };

        },
        ["next-post", date],
        {
            revalidate: 3600,
        }
    )();
}

export async function getPreviousPost(
    date: string
): Promise<Post | null> {

    return unstable_cache(
        async () => {

            const { data, error } = await supabase
                .from("posts")
                .select(`
                    id,
                    title,
                    date
                `)
                .gt("date", date)
                .order("date", {
                    ascending: true,
                })
                .limit(1)
                .single();


            if (error || !data) {
                return null;
            }


            return {
                id: data.id,
                title: data.title,
                date: data.date,
                content: "",
                author: null,
                category: null,
                fileId: String(data.id),
            };

        },
        ["previous-post", date],
        {
            revalidate: 3600,
        }
    )();

}


export async function getRelatedPosts(
    category: string | null,
    currentId: string
): Promise<Post[]> {

    if (!category) return [];


    const { data, error } = await supabase
        .from("posts")
        .select(`
            id,
            title,
            author,
            category,
            date
        `)
        .eq("category", category)
        .neq("id", Number(currentId))
        .order("date", {
            ascending: false,
        })
        .limit(3);


    if (error || !data) {
        return [];
    }


    return data.map((post) => ({
        ...post,
        content: "",
        fileId: String(post.id),
    }));

}

export async function getPostCards(limit?: number) {
    let query = supabase
        .from("posts")
        .select(`
            id,
            title,
            author,
            category,
            date
        `)
        .order("date", {
            ascending: false,
        });

    if (limit) {
        query = query.limit(limit);
    }

    const { data, error } = await query;

    if (error || !data) return [];

    return data.map(post => ({
        ...post,
        fileId: String(post.id),
    }));
}