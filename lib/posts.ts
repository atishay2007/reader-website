import { supabase } from "@/lib/supabase";

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
        fileId: String(post.id),
    }));
}




export async function getNextPost(
    date: string
): Promise<Post | null> {

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