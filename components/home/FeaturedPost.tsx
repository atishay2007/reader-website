import { getLatestPosts } from "@/lib/posts";
import Link from "next/link";

export default async function FeaturedPost() {
    const posts = await getLatestPosts(1);
    const post = posts[0];

    if (!post) return null;

    return (
        <section className="mx-auto max-w-5xl px-6 py-12">

    <Link
        href={`/post/${post.fileId}`}
        className="
        block
        group
        "
    >

    <div
        className="
        relative
        overflow-hidden
        border
        border-[var(--border)]
        bg-[var(--paper)]
        px-8
        py-14
        text-center
        transition-all
        duration-500
        hover:-translate-y-3
        hover:border-[var(--gold)]
        hover:shadow-[0_25px_70px_rgba(184,134,44,0.25)]
        md:px-16
        "
    >
                <div
                    className="
    pointer-events-none
    absolute
    inset-0
    bg-gradient-to-br
    from-[var(--gold)]/5
    to-transparent
    opacity-0
    transition-opacity
    duration-500
    group-hover:opacity-100
    "
                />
                <p
                    className="
                    font-[var(--font-hindi)]
                    text-xl
                    font-semibold
                    tracking-normal
                    text-[var(--accent)]
                    mb-6
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


               <span
    className="
    mt-10
    inline-block
    border-b
    border-[var(--accent)]
    pb-1
    text-[var(--accent)]
    transition-all
    duration-300
    group-hover:text-[var(--gold)]
    "
>
    पूरा लेख पढ़ें →
</span>

    </div>

    </Link>

</section>
    );
}