import { notFound } from "next/navigation";
import {
    getPostById,
    getNextPost,
    getPreviousPost,
    getReadingTime,
    getRelatedPosts,
} from "@/lib/posts";

import Link from "next/link";
import Comments from "@/components/comments/Comments";
import ReadingProgress from "@/components/posts/ReadingProgress";
import RelatedPosts from "@/components/posts/RelatedPosts";
import ShareButton from "@/components/posts/ShareButton";


export const revalidate = 3600;
export const dynamicParams = true;


export async function generateStaticParams() {
    return [];
}


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


    const nextPost = await getNextPost(post.date);
    const previousPost = await getPreviousPost(post.date);

    const readingTime = getReadingTime(post.content);

    const relatedPosts = await getRelatedPosts(
        post.category,
        id
    );



    return (
        <>

            <ReadingProgress />


            <main
                className="
                mx-auto
                max-w-[1400px]
                px-6
                py-12
                "
            >


                <div
                    className="
                    grid
                    gap-10
                    lg:grid-cols-[220px_minmax(0,760px)_260px]
                    "
                >



                    {/* LEFT */}

                    <aside className="hidden lg:block">

                        <div
                            className="
        sticky
        top-24
        min-h-[calc(100vh-120px)]
        flex
        flex-col
        "
                        >

                            <Link href="/articles">
                                ← सभी लेख
                            </Link>


                            {previousPost && (
                                <div className="mt-auto">

                                    <Link
                                        href={`/post/${previousPost.fileId}`}
                                        className="
                    group
                    block
                    rounded-xl
                    border
                    border-[var(--border)]
                    bg-[var(--paper)]
                    p-5
                    transition-all
                    hover:-translate-y-1
                    hover:border-[var(--gold)]
                    "
                                    >

                                        <p className="mb-3 text-xs text-[var(--muted)]">
                                            ← पिछला लेख
                                        </p>

                                        <h3 className="font-[var(--font-hindi)] text-lg font-semibold">
                                            {previousPost.title}
                                        </h3>

                                    </Link>

                                </div>
                            )}

                        </div>

                    </aside>





                    {/* ARTICLE */}

                    <article>


                        <header
                            className="
                            mb-12
                            text-center
                            "
                        >

                            <p
                                className="
                                mb-5
                                font-[var(--font-hindi)]
                                text-sm
                                tracking-[0.2em]
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
                                leading-[1.6]
                                md:text-6xl
                                "
                            >
                                {post.title.replace(/^#+\s*/, "")}
                            </h1>



                            {post.author && (

                                <p
                                    className="
                                    mt-6
                                    font-[var(--font-hindi)]
                                    text-lg
                                    "
                                >
                                    {post.author}
                                </p>

                            )}



                            <div
                                className="
                                mt-4
                                flex
                                flex-wrap
                                justify-center
                                gap-3
                                font-[var(--font-hindi)]
                                text-sm
                                text-[#7b2d3a]
                                "
                            >

                                {post.category && (
                                    <>
                                        <span>{post.category}</span>
                                        <span>•</span>
                                    </>
                                )}


                                <span>
                                    {new Date(post.date).toLocaleDateString(
                                        "hi-IN",
                                        {
                                            day: "numeric",
                                            month: "long",
                                            year: "numeric",
                                        }
                                    )}
                                </span>


                                <span>•</span>


                                <span>
                                    {readingTime} मिनट पढ़ने का समय
                                </span>

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

                            [&_p]:mb-6
                            [&_img]:mx-auto
                            [&_img]:my-12
                            [&_img]:rounded-sm
                            "
                            dangerouslySetInnerHTML={{
                                __html: post.content,
                            }}
                        />



                        <Comments postId={id} />


                    </article>






                    {/* RIGHT */}

                    <aside
                        className="
                        hidden
                        lg:block
                        "
                    >

                        <div
                            className="
                            sticky
                            top-24
                            "
                        >


                            <div className="mb-8">
                                <ShareButton
                                    title={post.title}
                                />
                            </div>



                            {relatedPosts.length > 0 && (

                                <div className="mt-10">

                                    <RelatedPosts
                                        posts={relatedPosts}
                                    />

                                </div>

                            )}





                            {nextPost && (

                                <div
                                    className="
                                    mt-10
                                    "
                                >

                                    <Link
                                        href={`/post/${nextPost.fileId}`}
                                        className="
                                        group
                                        block
                                        rounded-xl
                                        border
                                        border-[var(--border)]
                                        bg-[var(--paper)]
                                        p-5
                                        transition-all
                                        duration-300
                                        hover:-translate-y-1
                                        hover:border-[var(--gold)]
                                        "
                                    >

                                        <p
                                            className="
                                            mb-3
                                            font-[var(--font-hindi)]
                                            text-xs
                                            text-[var(--muted)]
                                            "
                                        >
                                            अगला लेख →
                                        </p>


                                        <h3
                                            className="
                                            font-[var(--font-hindi)]
                                            text-lg
                                            font-semibold
                                            leading-relaxed
                                            group-hover:text-[var(--gold)]
                                            "
                                        >
                                            {nextPost.title.replace(/^#+\s*/, "")}
                                        </h3>

                                    </Link>

                                </div>

                            )}


                        </div>

                    </aside>


                </div>


            </main>

        </>
    );
}