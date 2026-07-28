import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { getPostById } from "@/lib/posts";
import EditPostForm from "./EditPostForm";

export default async function EditPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (
    !user ||
    user.email !== "drneelamjain26@gmail.com"
  ) {
    redirect("/admin/login");
  }

  const { id } = await params;

  const post = await getPostById(id);

  if (!post) {
    redirect("/admin");
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-20">

      <h1 className="font-[var(--font-hindi)] text-4xl font-semibold">
        लेख संपादित करें
      </h1>

      <EditPostForm post={post} />

    </main>
  );
}