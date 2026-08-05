import { getAllPosts } from "@/lib/posts";
import Link from "next/link";

export default async function SearchPage({
    searchParams,
}: {
    searchParams: Promise<{
        q?: string;
    }>;
}) {

    const posts = await getAllPosts();

    const { q } = await searchParams;

    const query = q?.toLowerCase().trim() || "";


    const results = query
        ? posts.filter((post) => {

            const searchable =
                `
                ${post.title}
                ${post.content}
                ${post.author}
                ${post.category}
                `.toLowerCase();


            return searchable.includes(query);

        })
        : [];


    return (
        <main className="mx-auto max-w-5xl px-6 py-20">


            <header className="mb-12 text-center">

                <h1
                    className="
                    font-[var(--font-hindi)]
                    text-5xl
                    font-semibold
                    "
                >
                    खोज
                </h1>

            </header>


            <form
                className="mb-12"
            >

                <input
                    name="q"
                    defaultValue={q}
                    placeholder="लेख खोजें..."
                    className="
                    w-full
                    border
                    border-[var(--border)]
                    bg-[var(--paper)]
                    p-4
                    text-lg
                    "
                />

            </form>


            {query && (
                <p className="mb-8 text-[var(--muted)]">
                    {results.length} परिणाम मिले
                </p>
            )}


            <div>

                {results.map((post) => (

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

                        <h2
                            className="
                            font-[var(--font-hindi)]
                            text-2xl
                            font-semibold
                            "
                        >
                            {post.title}
                        </h2>


                        <div
                            className="
                            mt-3
                            text-sm
                            text-[var(--muted)]
                            "
                        >
                            {post.author && (
                                <span>
                                    लेखक: {post.author}
                                </span>
                            )}

                            {post.category && (
                                <span className="ml-4">
                                    {post.category}
                                </span>
                            )}

                        </div>


                    </Link>

                ))}

            </div>


        </main>
    );
}