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
import ArticleReader from "@/components/posts/ArticleReader";


export const revalidate = 3600;
export const dynamicParams = true;


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
                    article-layout
                    gap-10
                    lg:grid-cols-[220px_minmax(0,760px)_260px]
                    "
                >


                    {/* LEFT */}

                    <aside
                        className="
                        reading-hide
                        hidden
                        lg:block
                        "
                    >

                        <div
                            className="
                            sticky
                            top-24
                            min-h-[calc(100vh-120px)]
                            flex
                            flex-col
                            "
                        >

                            <Link
                                href="/articles"
                                className="
                                text-sm
                                text-[var(--muted)]
                                hover:text-[var(--gold)]
                                "
                            >
                                ← सभी लेख
                            </Link>



                            {previousPost && (

                                <Link
                                    href={`/post/${previousPost.fileId}`}
                                    className="
                                    mt-auto
                                    rounded-xl
                                    border
                                    border-[var(--border)]
                                    bg-[var(--paper)]
                                    p-5
                                    transition
                                    hover:-translate-y-1
                                    hover:border-[var(--gold)]
                                    "
                                >

                                    <p className="mb-3 text-xs text-[var(--muted)]">
                                        ← पिछला लेख
                                    </p>


                                    <h3
                                        className="
                                        font-[var(--font-hindi)]
                                        text-lg
                                        font-semibold
                                        "
                                    >
                                        {previousPost.title}
                                    </h3>


                                </Link>

                            )}

                        </div>

                    </aside>




                    {/* ARTICLE */}

                    <article>


                        <header className="mb-10 text-center">

                            <p className="
                            mb-5
                            font-[var(--font-hindi)]
                            text-sm
                            tracking-[0.2em]
                            text-[var(--accent)]
                            ">
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
                                    {new Date(post.date)
                                        .toLocaleDateString(
                                            "hi-IN"
                                        )}
                                </span>

                                <span>•</span>

                                <span>
                                    {readingTime} मिनट पढ़ने का समय
                                </span>

                            </div>

                        </header>



                        <ArticleReader
                            title={post.title}
                        >

                            <div
                                dangerouslySetInnerHTML={{
                                    __html: post.content,
                                }}
                            />

                        </ArticleReader>




                        <div className="comments-section mt-16">

                            <Comments postId={id} />

                        </div>


                    </article>






                    {/* RIGHT */}

                    <aside
                        className="
                        reading-hide
                        hidden
                        lg:block
                        "
                    >

                        <div
                            className="
    sticky
    top-24
    pt-10
    min-h-[calc(100vh-120px)]
    flex
    flex-col
    "
                        >

                            {relatedPosts.length > 0 && (

                                <div
                                    className="
                                    border
                                    border-[var(--border)]
                                    bg-[var(--paper)]
                                    p-5
                                    "
                                >

                                    <p
                                        className="
                                        mb-5
                                        font-[var(--font-hindi)]
                                        text-lg
                                        text-[var(--muted)]
                                        "
                                    >
                                        आपको यह भी पसंद आ सकता है
                                    </p>


                                    <RelatedPosts
                                        posts={relatedPosts}
                                    />


                                </div>

                            )}




                            {nextPost && (

                                <Link
                                    href={`/post/${nextPost.fileId}`}
                                    className="
                                    mt-auto
                                    rounded-xl
                                    border
                                    border-[var(--border)]
                                    bg-[var(--paper)]
                                    p-5
                                    transition
                                    hover:-translate-y-1
                                    hover:border-[var(--gold)]
                                    "
                                >

                                    <p
                                        className="
                                        mb-3
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
                                        "
                                    >
                                        {nextPost.title}
                                    </h3>


                                </Link>

                            )}


                        </div>

                    </aside>


                </div>

            </main>

        </>
    );
}