import { notFound } from "next/navigation";
import { getPostById } from "@/lib/posts";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const post = getPostById(id);

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

    const post = getPostById(id);

    if (!post) {
        notFound();
    }

    return (
        <article className="mx-auto max-w-4xl px-6 py-20">

            <header className="mb-12 text-center">

                <h1
                    className="
            font-[var(--font-hindi)]
            text-4xl
            font-semibold
            leading-relaxed
            text-[var(--foreground)]
            md:text-5xl
          "
                >
                    {post.title}
                </h1>


                <p className="mt-6 text-sm text-[var(--accent)]">
                    {new Date(post.date).toLocaleDateString("hi-IN", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                    })}
                </p>


                <div className="mx-auto mt-8 h-px w-24 bg-[var(--accent)]" />

            </header>


            <div
                className="
          mx-auto
          max-w-2xl
          font-[var(--font-hindi)]
          text-xl
          font-normal
          leading-[2]
          text-[var(--foreground)]

          [&_p]:mb-2

          [&_img]:mx-auto
          [&_img]:my-10
          [&_img]:rounded-lg

          [&_a]:text-[var(--accent)]
        "
                dangerouslySetInnerHTML={{
                    __html: post.content,
                }}
            />

        </article>
    );
}