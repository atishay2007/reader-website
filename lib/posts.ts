import { supabase } from "@/lib/supabase";

export type Post = {
  id: number;
  fileId: string;
  title: string;
  slug: string | null;
  date: string;
  content: string;
  author?: string | null;
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


export async function getLatestPosts(limit = 10) {
  const posts = await getAllPosts();

  return posts.slice(0, limit);
}