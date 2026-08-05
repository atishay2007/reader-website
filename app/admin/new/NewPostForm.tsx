"use client";

import PostEditor from "@/components/editor/PostEditor";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

const categories = [
    "साहित्य",
    "संस्कृति",
    "विचार",
    "अध्यात्म",
    "कविता",
];

export default function NewPostForm() {
    const router = useRouter();

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("नीलम जैन");
    const [category, setCategory] = useState("");
    const [content, setContent] = useState("");

    async function publish() {

        const missing = [];

        if (!title.trim()) missing.push("शीर्षक");
        if (!author.trim()) missing.push("लेखक");
        if (!content.trim()) missing.push("लेख");
        if (!category) missing.push("श्रेणी");

        if (missing.length > 0) {
            alert(
                "कृपया यह जानकारी भरें:\n\n" +
                missing.join("\n")
            );
            return;
        }


        const supabase = createClient();

        const { error } = await supabase
            .from("posts")
            .insert({
                title,
                content,
                date: new Date().toISOString(),
                author,
                category,
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
                className="w-full border border-[var(--border)] p-4"
                placeholder="शीर्षक"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />


            <input
                className="w-full border border-[var(--border)] p-4"
                placeholder="लेखक"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
            />


            <select
                className="
                w-full
                border
                border-[var(--border)]
                p-4
                bg-[var(--paper)]
                "
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            >
                <option value="">
                    श्रेणी चुनें
                </option>

                {categories.map((item) => (
                    <option key={item} value={item}>
                        {item}
                    </option>
                ))}

            </select>


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
                "
            >
                प्रकाशित करें
            </button>


        </div>
    );
}