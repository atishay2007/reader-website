import { getLatestPosts } from "@/lib/posts";
import Link from "next/link";

export default async function FeaturedPost() {
    const posts = await getLatestPosts(1);
    const post = posts[0];

    if (!post) return null;

    return (
        <section className="mx-auto max-w-5xl px-6 py-12">

            <div
                className="
                border
                border-[var(--border)]
                bg-[var(--paper)]
                px-8
                py-14
                text-center
                md:px-16
                "
            >

                <p
                    className="
                    font-[var(--font-hindi)]
                    text-sm
                    tracking-[0.35em]
                    text-[var(--accent)]
                    "
                >
                    प्रमुख लेख
                </p>


                <div className="mt-6 text-[var(--gold)]">
                    ───── ✦ ─────
                </div>


                <h2
                    className="
                    mt-8
                    font-[var(--font-hindi)]
                    text-4xl
                    font-semibold
                    leading-relaxed
                    md:text-5xl
                    "
                >
                    {post.title}
                </h2>


                <p
                    className="
                    mt-5
                    text-sm
                    text-[var(--muted)]
                    "
                >
                    {new Date(post.date).toLocaleDateString("hi-IN", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                    })}
                </p>
                {post.author && (
                    <p className="mt-3 text-sm text-[var(--accent)]">
                        लेखक: {post.author}
                    </p>
                )}


                <p
                    className="
                    mx-auto
                    mt-8
                    max-w-3xl
                    font-[var(--font-hindi)]
                    text-lg
                    leading-loose
                    text-[var(--muted)]
                    "
                >
                    {post.content
                        .replace(/<[^>]*>/g, "")
                        .replace(/\s+/g, " ")
                        .slice(0, 300)}
                    ...
                </p>


                <Link
                    href={`/post/${post.fileId}`}
                    className="
                    mt-10
                    inline-block
                    border-b
                    border-[var(--accent)]
                    pb-1
                    text-[var(--accent)]
                    hover:text-[var(--accent-hover)]
                    "
                >
                    पूरा लेख पढ़ें →
                </Link>

            </div>

        </section>
    );
}