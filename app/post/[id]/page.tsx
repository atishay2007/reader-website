import { notFound } from "next/navigation";
import { getPostById, getAllPosts } from "@/lib/posts";
import Link from "next/link";

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

    const allPosts = await getAllPosts();

    const currentIndex = allPosts.findIndex(
        (item) => item.fileId === id
    );

    const nextPost =
        currentIndex >= 0 &&
            currentIndex < allPosts.length - 1
            ? allPosts[currentIndex + 1]
            : null;

    return (
        <article className="mx-auto max-w-4xl px-6 py-12">
            <Link
                href="/articles"
                className="
            mb-12
            inline-flex
            items-center
            text-sm
            text-[var(--muted)]
            transition
            hover:text-[var(--gold)]
            "
            >
                ← सभी लेख
            </Link>

            <header className="mb-8 text-center">
                <p
                    className="
    mb-3
    font-[var(--font-hindi)]
    text-sm
    tracking-wide
    text-[var(--accent)]
    "
                >
                    श्री देशना संग्रह
                </p>


                <h1
                    className="
    mx-auto
    max-w-4xl
    font-[var(--font-hindi)]
    text-3xl
    font-semibold
    leading-[1.5]
    text-[var(--foreground)]
    md:text-5xl
    "
                >
                    {post.title}
                </h1>

                <p
                    className="
    mt-4
    font-[var(--font-hindi)]
    text-sm
    text-[#7b2d3a]
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
    mt-4
    font-[var(--font-hindi)]
    text-sm
    !text-[#7b2d3a]
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
            {
                nextPost && (

                    <div
                        className="
            mt-20
            border-t
            border-[var(--border)]
            pt-12
            "
                    >

                        <Link
                            href={`/post/${nextPost.fileId}`}
                            className="
                group
                block
                "
                        >

                            <p
                                className="
    mb-4
    font-[var(--font-hindi)]
    text-xl
    tracking-wide
    font-semibold
    text-[#7b2d3a]
    "
                            >
                                अगला लेख पढ़ें
                            </p>


                            <div
                                className="
                    flex
                    items-center
                    justify-between
                    rounded-sm
                    border
                    border-[var(--border)]
                    bg-[var(--paper)]
                    px-8
                    py-6
                    transition-all
                    duration-300
                    group-hover:border-[var(--gold)]
                    group-hover:-translate-y-1
                    "
                            >

                                <h3
                                    className="
                        max-w-xl
                        font-[var(--font-hindi)]
                        text-xl
                        font-semibold
                        "
                                >
                                    {nextPost.title}
                                </h3>


                                <span
                                    className="
                        text-2xl
                        text-[var(--gold)]
                        transition-transform
                        group-hover:translate-x-2
                        "
                                >
                                    →
                                </span>


                            </div>

                        </Link>


                    </div>

                )
            }
            <section
                className="
    mt-20
    border-t
    border-[var(--border)]
    pt-12
    "
            >

                <h2
                    className="
    font-[var(--font-hindi)]
    text-3xl
    font-semibold
    "
                >
                    टिप्पणियाँ
                </h2>


                <form
                    className="
    mt-8
    space-y-5
    "
                >


                    <input
                        placeholder="आपका नाम"
                        className="
    w-full
    rounded-md
    border
    border-[var(--border)]
    bg-[var(--paper)]
    px-5
    py-3
    outline-none
    transition-all
    duration-500
    focus:w-[90%]
    focus:border-[var(--gold)]
    "
                    />



                    <textarea
                        placeholder="अपनी टिप्पणी लिखें..."
                        className="
    min-h-[120px]
    w-full
    resize-none
    rounded-md
    border
    border-[var(--border)]
    bg-[var(--paper)]
    px-5
    py-4
    outline-none
    transition-all
    duration-300
    focus:min-h-[200px]
    focus:border-[var(--gold)]
    "
                    />


                    <button
                        className="
    rounded-md
    border
    border-[var(--gold)]
    px-6
    py-3
    text-sm
    transition
    hover:bg-[var(--gold)]
    hover:text-black
    "
                    >
                        टिप्पणी भेजें
                    </button>


                </form>


            </section>

        </article>
    );
}