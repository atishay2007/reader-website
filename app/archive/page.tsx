import { getAllPosts } from "@/lib/posts";
import Link from "next/link";
import YearSelector from "@/components/archive/YearSelector";

export default async function ArchivePage({
    searchParams,
}: {
    searchParams: Promise<{ year?: string }>;
}) {
    const posts = await getAllPosts();

    const years = Array.from(
        new Set(posts.map((post) => new Date(post.date).getFullYear()))
    ).sort((a, b) => b - a);

    const params = await searchParams;

    const selectedYear = params.year
        ? Number(params.year)
        : years[0];

    const filteredPosts = posts.filter(
        (post) =>
            new Date(post.date).getFullYear() === selectedYear
    );

    return (
        <main className="mx-auto max-w-5xl px-6 py-20">

            <header className="text-center mb-16">

                <h1 className="font-[var(--font-hindi)] text-5xl font-semibold">
                    श्री देशना संग्रह
                </h1>

                <p className="mt-4 text-lg text-[var(--muted)]">
                    {posts.length} लेख
                </p>

            </header>


            <div className="mb-14 flex justify-center">
                <YearSelector
                    years={years}
                    selectedYear={selectedYear}
                />
            </div>


            <section>

                <div className="flex items-baseline justify-between border-b border-[var(--border)] pb-4">

                    <h2 className="font-[var(--font-english)] text-4xl font-semibold text-[var(--accent)]">
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

                            <h3 className="
                font-[var(--font-hindi)]
                text-2xl
                font-semibold
              ">
                                {post.title}
                            </h3>


                            <p className="mt-3 text-sm text-[var(--muted)]">
                                {new Date(post.date).toLocaleDateString("hi-IN", {
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                                })}
                            </p>

                        </Link>

                    ))}

                </div>

            </section>

        </main>
    );
}