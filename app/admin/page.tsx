import { redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { getPostCards } from "@/lib/posts";
import DeletePostButton from "@/components/admin/DeletePostButton";
import ShareButton from "@/components/posts/ShareButton";


export default async function AdminPage() {

    const supabase = await createClient();


    const {
        data: { user },
    } = await supabase.auth.getUser();



    if (
        !user ||
        user.email !== "drneelamjain26@gmail.com"
    ) {
        redirect("/admin/login");
    }



    const posts = await getPostCards();



    return (

        <main
            className="
            mx-auto
            max-w-6xl
            px-6
            py-16
            "
        >



            {/* HEADER */}

            <div
                className="
                flex
                flex-col
                gap-6
                border-b
                border-[var(--border)]
                pb-10
                md:flex-row
                md:items-center
                md:justify-between
                "
            >

                <div>

                    <p
                        className="
                        font-[var(--font-hindi)]
                        text-sm
                        text-[var(--accent)]
                        "
                    >
                        श्री देशना CMS
                    </p>


                    <h1
                        className="
                        mt-2
                        text-5xl
                        font-semibold
                        "
                    >
                        Admin Dashboard
                    </h1>


                    <p
                        className="
                        mt-3
                        text-[var(--muted)]
                        "
                    >
                        Manage all your articles
                    </p>

                </div>



                <Link
                    href="/admin/new"
                    className="
                    rounded-full
                    border
                    border-[var(--gold)]
                    bg-[var(--gold)]
                    px-7
                    py-3
                    font-semibold
                    text-[#2b1b10]
                    transition
                    hover:-translate-y-1
                    hover:shadow-lg
                    "
                >
                    + New Post
                </Link>


            </div>





            {/* STATS */}

            <div
                className="
                mt-10
                grid
                gap-5
                md:grid-cols-3
                "
            >


                <div
                    className="
                    rounded-xl
                    border
                    border-[var(--border)]
                    bg-[var(--paper)]
                    p-6
                    "
                >

                    <p className="text-sm text-[var(--muted)]">
                        Total Articles
                    </p>


                    <p
                        className="
                        mt-2
                        text-4xl
                        font-semibold
                        text-[var(--accent)]
                        "
                    >
                        {posts.length}
                    </p>

                </div>




                <div
                    className="
                    rounded-xl
                    border
                    border-[var(--border)]
                    bg-[var(--paper)]
                    p-6
                    "
                >

                    <p className="text-sm text-[var(--muted)]">
                        Latest Article
                    </p>


                    <p
                        className="
                        mt-2
                        font-[var(--font-hindi)]
                        text-xl
                        font-semibold
                        "
                    >
                        {posts[0]?.title || "—"}
                    </p>

                </div>




                <div
                    className="
                    rounded-xl
                    border
                    border-[var(--border)]
                    bg-[var(--paper)]
                    p-6
                    "
                >

                    <p className="text-sm text-[var(--muted)]">
                        Authors
                    </p>


                    <p
                        className="
                        mt-2
                        text-2xl
                        font-semibold
                        "
                    >
                        {
                            new Set(
                                posts
                                    .map(
                                        p => p.author
                                    )
                                    .filter(Boolean)
                            ).size
                        }
                    </p>

                </div>


            </div>






            {/* POSTS */}

            <section className="mt-14">


                <div
                    className="
                    mb-6
                    flex
                    items-center
                    justify-between
                    "
                >

                    <h2
                        className="
                        font-[var(--font-hindi)]
                        text-3xl
                        font-semibold
                        "
                    >
                        सभी लेख
                    </h2>


                    <span
                        className="
                        text-sm
                        text-[var(--muted)]
                        "
                    >
                        {posts.length} entries
                    </span>

                </div>






                <div className="space-y-4">


                    {posts.map((post) => (


                        <div
                            key={post.fileId}
                            className="
                            group
                            flex
                            flex-col
                            gap-6
                            rounded-xl
                            border
                            border-[var(--border)]
                            bg-[var(--paper)]
                            p-7
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:border-[var(--gold)]
                            md:flex-row
                            md:items-center
                            md:justify-between
                            "
                        >



                            <div
                                className="
                                min-w-0
                                "
                            >


                                <Link
                                    href={`/post/${post.fileId}`}
                                    className="group/title"
                                >

                                    <h3
                                        className="
                                        font-[var(--font-hindi)]
                                        text-xl
                                        font-semibold
                                        transition
                                        group-hover/title:text-[var(--gold)]
                                        md:text-2xl
                                        "
                                    >
                                        {post.title}
                                    </h3>


                                </Link>




                                <div
                                    className="
                                    mt-3
                                    flex
                                    flex-wrap
                                    gap-x-4
                                    gap-y-2
                                    text-sm
                                    text-[var(--muted)]
                                    "
                                >

                                    <span>
                                        {new Date(post.date)
                                            .toLocaleDateString(
                                                "hi-IN"
                                            )}
                                    </span>


                                    {post.author && (

                                        <span>
                                            Author: {post.author}
                                        </span>

                                    )}



                                    {post.category && (

                                        <span>
                                            Category: {post.category}
                                        </span>

                                    )}

                                </div>


                            </div>





                            <div
                                className="
                                flex
                                flex-wrap
                                items-center
                                gap-3
                                "
                            >



                                <ShareButton
                                    title={post.title}
                                    url={`https://shreedeshna.in/post/${post.fileId}`}
                                />



                                <Link
                                    href={`/admin/edit/${post.fileId}`}
                                    className="
                                    rounded-full
                                    border
                                    border-[var(--accent)]
                                    px-5
                                    py-2
                                    text-sm
                                    text-[var(--accent)]
                                    transition
                                    hover:bg-[var(--accent)]
                                    hover:text-white
                                    "
                                >
                                    Edit
                                </Link>



                                <DeletePostButton
                                    id={post.id}
                                />



                            </div>



                        </div>


                    ))}


                </div>


            </section>


        </main>

    );
}