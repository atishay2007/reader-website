import { getAllPosts } from "@/lib/posts";
import Link from "next/link";

export default async function EditorialPage() {
    const posts = await getAllPosts();

    const editorials = posts.filter(
        (post) => post.category === "Editorial"
    );


    return (
        <main className="mx-auto max-w-5xl px-6 py-20">

            <header className="mb-16 text-center">

                <h1
                    className="
                    font-[var(--font-hindi)]
                    text-5xl
                    font-semibold
                    "
                >
                    Editorial
                </h1>

                <p className="mt-4 text-lg text-[var(--muted)]">
                    {editorials.length} लेख
                </p>

            </header>


            <section>

                <div
                    className="
                    border-b
                    border-[var(--border)]
                    pb-4
                    "
                >

                    <h2
                        className="
                        font-[var(--font-english)]
                        text-4xl
                        font-semibold
                        text-[var(--accent)]
                        "
                    >
                        संपादकीय
                    </h2>

                </div>


                <div className="mt-6">

                    {editorials.map((post) => (

                        <Link
                            key={post.fileId}
                            href={`/post/${post.fileId}`}
                            className="
                            block
                            border-b
                            border-[var(--border)]
                            py-7
                            transition
                            hover:px-3
                            hover:text-[var(--accent)]
                            "
                        >

                            <h3
                                className="
                                font-[var(--font-hindi)]
                                text-2xl
                                font-semibold
                                "
                            >
                                {post.title}
                            </h3>


                            <div
                                className="
                                mt-3
                                flex
                                gap-4
                                text-sm
                                text-[var(--muted)]
                                "
                            >

                                <span>
                                    {new Date(post.date).toLocaleDateString("hi-IN", {
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric",
                                    })}
                                </span>

                                {post.author && (
                                    <span>
                                        लेखक: {post.author}
                                    </span>
                                )}

                            </div>

                        </Link>

                    ))}

                </div>

            </section>

        </main>
    );
}