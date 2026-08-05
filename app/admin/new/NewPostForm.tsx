"use client";

import PostEditor from "@/components/editor/PostEditor";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function NewPostForm() {
    const router = useRouter();

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("नीलम जैन");
    const [content, setContent] = useState("");

    async function publish() {
        const supabase = createClient();

        const { error } = await supabase
            .from("posts")
            .insert({
                title,
                content,
                date: new Date().toISOString(),
                author,
            });

        if (error) {
            alert(error.message);
            return;
        }

        router.push("/admin");
    }

    return (
        <div className="mt-10 space-y-6">

            <input
                className="
                w-full
                border
                border-[var(--border)]
                bg-[var(--paper)]
                p-4
                "
                placeholder="शीर्षक"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />


            <input
                className="
                w-full
                border
                border-[var(--border)]
                bg-[var(--paper)]
                p-4
                "
                placeholder="लेखक"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
            />


            <PostEditor
                content={content}
                setContent={setContent}
            />


            <button
                onClick={publish}
                className="
                bg-[var(--accent)]
                px-8
                py-3
                text-white
                transition
                hover:bg-[var(--accent-hover)]
                "
            >
                प्रकाशित करें
            </button>

        </div>
    );
}