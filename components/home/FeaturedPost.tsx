import { getLatestPosts } from "@/lib/posts";
import Link from "next/link";

export default function FeaturedPost() {
    const post = getLatestPosts(1)[0];

    if (!post) return null;

    return (
        <section className="mx-auto max-w-5xl px-6 py-20">

            <div
                className="
          border
          border-[var(--border)]
          bg-[var(--background)]
          px-8
          py-12
          md:px-14
        "
            >

                <p className="text-sm tracking-[0.35em] text-[var(--accent)]">
                    प्रमुख लेख
                </p>


                <h2
                    className="
            mt-6
            font-[var(--font-hindi)]
            text-4xl
            font-semibold
            leading-relaxed
            md:text-5xl
          "
                >
                    {post.title}
                </h2>


                <p className="mt-4 text-sm text-[var(--muted)]">
                    {new Date(post.date).toLocaleDateString("hi-IN", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                    })}
                </p>


                <p
                    className="
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
                        .slice(0, 300)}
                    ...
                </p>


                <Link
                    href={`/post/${post.fileId}`}
                    className="
            mt-8
            inline-block
            text-[var(--accent)]
            hover:underline
          "
                >
                    पूरा लेख पढ़ें →
                </Link>

            </div>

        </section>
    );
}