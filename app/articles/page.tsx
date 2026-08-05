import { getAllPosts } from "@/lib/posts";
import Link from "next/link";
import ArchiveSelector from "@/components/archive/ArchiveList";
import CategorySelector from "@/components/archive/CategorySelector";

export default async function ArchivePage({
    searchParams,
}: {
    searchParams: Promise<{
        year?: string;
        category?: string;
    }>;
}) {
    const posts = await getAllPosts();

    const years = Array.from(
        new Set(posts.map((post) => new Date(post.date).getFullYear()))
    ).sort((a, b) => b - a);


    const params = await searchParams;


    const selectedYear = params.year
        ? Number(params.year)
        : years[0];


    const selectedCategory = params.category;


    const filteredPosts = posts.filter((post) => {

        const matchesYear =
            new Date(post.date).getFullYear() === selectedYear;


        const matchesCategory =
            !selectedCategory ||
            post.category === selectedCategory;


        return matchesYear && matchesCategory;
    });


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
                    श्री देशना संग्रह
                </h1>

                <p className="mt-4 text-lg text-[var(--muted)]">
                    {posts.length} लेख
                </p>

            </header>


            <div className="mb-8">
                <CategorySelector
                    selectedCategory={selectedCategory}
                />
            </div>


            <div className="mb-14 flex justify-center">
                <ArchiveSelector
                    years={years}
                    selectedYear={selectedYear}
                />
            </div>


            <section>

                <div
                    className="
                    flex
                    items-baseline
                    justify-between
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
                        {selectedYear}
                    </h2>

                    <span className="text-sm text-[var(--muted)]">
                        {filteredPosts.length} लेख
                    </span>

                </div>


                <div className="mt-6">

                    {filteredPosts.map((post) => (

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


                            <div className="mt-3 flex gap-4 text-sm text-[var(--muted)]">

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

                                {post.category && (
                                    <span>
                                        {post.category}
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