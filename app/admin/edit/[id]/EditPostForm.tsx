"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import PostEditor from "@/components/editor/PostEditor";

export default function EditPostForm({
  post,
}: {
  post: any;
}) {
  const router = useRouter();

  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  async function save() {
    const supabase = createClient();

    const { error } = await supabase
      .from("posts")
      .update({
        title,
        content,
        updated_at: new Date().toISOString(),
      })
      .eq("id", post.id);

    if (error) {
      alert(error.message);
      return;
    }

    router.push("/admin");
  }

  return (
    <div className="mt-10 space-y-6">

      <input
        className="w-full border p-4"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <PostEditor
        content={content}
        setContent={setContent}
      />

      <button
        onClick={save}
        className="bg-black px-8 py-3 text-white"
      >
        सहेजें
      </button>

    </div>
  );
}