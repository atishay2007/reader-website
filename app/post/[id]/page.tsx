import { notFound } from "next/navigation";
import { getPostById } from "@/lib/posts";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const post = await getPostById(id);

    if (!post) {
        return {};
    }

    const description =
        post.content
            ?.replace(/<[^>]*>/g, "")
            .replace(/\s+/g, " ")
            .trim()
            .slice(0, 160) || post.title;

    return {
        title: `${post.title} | श्री देशना`,
        description,

        openGraph: {
            title: `${post.title} | श्री देशना`,
            description,
            type: "article",
        },

        twitter: {
            card: "summary",
            title: `${post.title} | श्री देशना`,
            description,
        },
    };
}

export default async function PostPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const post = await getPostById(id);

    if (!post) {
        return notFound();
    }

    return (
        <article className="mx-auto max-w-3xl px-6 py-24">

            <header className="mb-16 text-center">

                <p
                    className="
                    mb-6
                    font-[var(--font-hindi)]
                    text-sm
                    tracking-[0.25em]
                    text-[var(--accent)]
                    "
                >
                    श्री देशना संग्रह
                </p>


                <h1
                    className="
                    font-[var(--font-hindi)]
                    text-4xl
                    font-semibold
                    leading-relaxed
                    text-[var(--foreground)]
                    md:text-6xl
                    "
                >
                    {post.title}
                </h1>


                <p
                    className="
                    mt-8
                    font-[var(--font-hindi)]
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
                <p
                    className="
    mt-8
    font-[var(--font-hindi)]
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
                    <p
                        className="
        mt-3
        text-sm
        text-[var(--accent)]
        "
                    >
                        लेखक: {post.author}
                    </p>
                )}


                <div
                    className="
                    mx-auto
                    mt-10
                    text-[var(--gold)]
                    "
                >
                    ───── ✦ ─────
                </div>

            </header>


            <div
                className="
                rounded-sm
                border
                border-[var(--border)]
                bg-[var(--paper)]

                px-8
                py-12

                md:px-14
                md:py-16

                font-[var(--font-hindi)]
                text-xl
                leading-[2.2]
                text-[var(--foreground)]

                [&_p]:mb-5

                [&_img]:mx-auto
                [&_img]:my-12
                [&_img]:rounded-sm

                [&_a]:text-[var(--accent)]
                "
                dangerouslySetInnerHTML={{
                    __html: post.content,
                }}
            />

        </article>
    );
}