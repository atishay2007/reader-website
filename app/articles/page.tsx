import { getPostCards } from "@/lib/posts"; import Link from "next/link";
import ArchiveSelector from "@/components/archive/ArchiveList";
import CategorySelector from "@/components/archive/CategorySelector";


export const revalidate = 3600;

export default async function ArchivePage({
    searchParams,
}: {
    searchParams: Promise<{
        year?: string;
        category?: string;
        search?: string;
        page?: string;
    }>;
}) {


    const posts = await getPostCards();


    const years = Array.from(
        new Set(
            posts.map(
                (post) =>
                    new Date(post.date).getFullYear()
            )
        )
    ).sort((a, b) => b - a);



    const params = await searchParams;


    const selectedYear = params.year
        ? Number(params.year)
        : years[0];


    const selectedCategory =
        params.category;


    const search =
        params.search || "";



    const pageSize = 10;




    const filteredPosts = posts.filter((post) => {


        const notEditorial =
            post.category !== "Editorial";



        const matchesYear =
            new Date(post.date).getFullYear() === selectedYear;



        const matchesCategory =
            !selectedCategory ||
            post.category === selectedCategory;



        const searchable = `
    ${post.title}
    ${post.author ?? ""}
    ${post.category ?? ""}
`.toLowerCase();


        const matchesSearch =
            searchable.includes(
                search.toLowerCase()
            );



        return (
            notEditorial &&
            matchesYear &&
            matchesCategory &&
            matchesSearch
        );


    });
    const currentPage =
        params.page
            ? Number(params.page)
            : 1;


    const start =
        (currentPage - 1) * pageSize;


    const paginatedPosts =
        filteredPosts.slice(
            start,
            start + pageSize
        );


    const totalPages =
        Math.ceil(
            filteredPosts.length / pageSize
        );
    const paginationPages = [];

    if (totalPages <= 5) {

        for (let i = 1; i <= totalPages; i++) {
            paginationPages.push(i);
        }

    } else {

        paginationPages.push(1);

        if (currentPage > 3) {
            paginationPages.push("...");
        }


        for (
            let i = Math.max(2, currentPage - 1);
            i <= Math.min(totalPages - 1, currentPage + 1);
            i++
        ) {
            paginationPages.push(i);
        }


        if (currentPage < totalPages - 2) {
            paginationPages.push("...");
        }


        paginationPages.push(totalPages);

    }




    return (

        <main
            className="
            mx-auto
            max-w-5xl
            px-6
            py-20
            "
        >

            <header
                className="
                mb-8
                text-center
                "
            >

                <h1
                    className="
                    font-[var(--font-hindi)]
                    text-5xl
                    font-semibold
                    "
                >
                    श्री देशना संग्रह
                </h1>


                <p
                    className="
                    mt-4
                    text-lg
                    text-[var(--muted)]
                    "
                >
                    {posts.length} लेख
                </p>


            </header>



            <div className="mb-5">

                <CategorySelector
                    selectedCategory={selectedCategory}
                />

            </div>




            <div
                className="
    mb-8
    flex
    flex-col
    gap-3
    sm:flex-row
    sm:justify-center
    "
            >

                <form
                    method="GET"
                    className="
    relative
    group
    "
                >

                    <input
                        name="search"
                        defaultValue={search}
                        placeholder="लेख खोजें..."
                        className="
        w-[280px]
        sm:w-[320px]
        rounded-md
        border
        border-[var(--border)]
        bg-[var(--paper)]
        py-3
        pl-12
        pr-6
        outline-none
        transition-all
        duration-500
        focus:w-[420px]
        focus:border-[var(--gold)]
        focus:shadow-[0_0_20px_rgba(184,134,44,0.15)]
        placeholder:text-[var(--muted)]
        "
                    />


                    <input
                        type="hidden"
                        name="year"
                        value={selectedYear}
                    />

                    <input
                        type="hidden"
                        name="category"
                        value={selectedCategory ?? ""}
                    />


                    <span
                        className="
        pointer-events-none
        absolute
        left-4
        top-1/2
        -translate-y-1/2
        text-[var(--muted)]
        transition-all
        duration-300
        group-focus-within:text-[var(--gold)]
        "
                    >
                        🔍
                    </span>

                </form>



                <ArchiveSelector
                    years={years}
                    selectedYear={selectedYear}
                />
                



            </div>

{search && (
    <div
        className="
        mb-10
        text-center
        font-[var(--font-hindi)]
        text-lg
        font-semibold
        text-[var(--muted)]
        "
    >
        {filteredPosts.length > 0
            ? `${filteredPosts.length} परिणाम मिले`
            : "कोई परिणाम नहीं मिला"}
    </div>
)}




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



                    <span
                        className="
                        text-sm
                        text-[var(--muted)]
                        "
                    >
                        {filteredPosts.length} लेख
                    </span>


                </div>





                <div className="mt-6">

                    {paginatedPosts.map((post) => (
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
                                    {new Date(post.date)
                                        .toLocaleDateString(
                                            "hi-IN",
                                            {
                                                day: "numeric",
                                                month: "long",
                                                year: "numeric",
                                            }
                                        )}
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

                <div
                    className="
    mt-12
    flex
    items-center
    justify-center
    gap-6
    "
                >
                    {currentPage > 1 && (
                        <Link
                            href={`/articles?year=${selectedYear}&page=${currentPage - 1}${selectedCategory
                                    ? `&category=${selectedCategory}`
                                    : ""
                                }${search
                                    ? `&search=${search}`
                                    : ""
                                }`}
                            className="
            rounded-md
            border
            border-[var(--border)]
            px-5
            py-2
            transition
            hover:border-[var(--gold)]
            hover:text-[var(--gold)]
            "
                        >
                            ← पिछला
                        </Link>
                    )}


                    <span
                        className="
        text-sm
        text-[var(--muted)]
        "
                    >
                        {currentPage} / {totalPages}
                    </span>


                    {currentPage < totalPages && (
                        <Link
                            href={`/articles?year=${selectedYear}&page=${currentPage + 1}${selectedCategory
                                    ? `&category=${selectedCategory}`
                                    : ""
                                }${search
                                    ? `&search=${search}`
                                    : ""
                                }`}
                            className="
            rounded-md
            border
            border-[var(--border)]
            px-5
            py-2
            transition
            hover:border-[var(--gold)]
            hover:text-[var(--gold)]
            "
                        >
                            अगला →
                        </Link>
                    )}
                </div>

            </section>


        </main>

    );

}