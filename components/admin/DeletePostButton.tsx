"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function DeletePostButton({
  id,
}: {
  id: number;
}) {
  const router = useRouter();

  async function remove() {
    const confirmed = confirm(
      "क्या आप इस लेख को हटाना चाहते हैं?"
    );

    if (!confirmed) return;

    const supabase = createClient();

    const { error } = await supabase
      .from("posts")
      .delete()
      .eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    router.refresh();
  }

  return (
    <button
      onClick={remove}
      className="text-red-600"
    >
      हटाएं
    </button>
  );
}