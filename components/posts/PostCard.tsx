import Link from "next/link";

type PostCardProps = {
    post: {
        fileId: string;
        title: string;
        date: string;
        author?: string | null;
        category?: string | null;
        excerpt?: string | null;
    };
    index: number;
};
export default function PostCard({
    post,
    index,
}: PostCardProps) {

    const excerpt = post.excerpt || "";


    const date = new Date(post.date).toLocaleDateString(
        "hi-IN",
        {
            day: "numeric",
            month: "long",
            year: "numeric",
        }
    );


    return (
        <Link
            href={`/post/${post.fileId}`}
            className={`
            group
            h-80
            perspective
            block
            ${index >= 3 ? "hidden md:block" : ""}
            `}
        >

            <div
                className="
                relative
                h-full
                w-full
                transition-transform
                duration-700
                transform-style-preserve-3d
                group-hover:rotate-y-180
                "
            >

                {/* FRONT */}

                <div
                    className="
                    absolute
                    inset-0
                    flex
                    border
                    border-[var(--border)]
                    bg-[var(--paper)]
                    backface-hidden
                    "
                >

                    <div
                        className="
                        w-14
                        shrink-0
                        border-r
                        border-[var(--border)]
                        flex
                        items-center
                        justify-center
                        "
                    >

                        <span
                            className="
                            writing-vertical
                            rotate-180
                            text-xs
                            tracking-widest
                            text-[var(--muted)]
                            "
                        >
                            {date}
                        </span>

                    </div>


                    <div
                        className="
                        flex
                        flex-col
                        justify-between
                        p-7
                        "
                    >

                        <div>

                            {post.category && (
                                <p className="
                                text-sm
                                text-[var(--accent)]
                                ">
                                    {post.category}
                                </p>
                            )}


                            <h3
                                className="
                                mt-5
                                font-[var(--font-hindi)]
                                text-2xl
                                font-semibold
                                leading-relaxed
                                "
                            >
                                {post.title}
                            </h3>

                        </div>


                        {post.author && (
                            <p
                                className="
                                text-sm
                                text-[var(--accent)]
                                "
                            >
                                लेखक: {post.author}
                            </p>
                        )}

                    </div>

                </div>



                {/* BACK */}

                <div
                    className="
                    absolute
                    inset-0
                    rotate-y-180
                    border
                    border-[var(--border)]
                    bg-[var(--paper)]
                    p-8
                    backface-hidden
                    flex
                    flex-col
                    justify-between
                    "
                >

                    <p
                        className="
                        font-[var(--font-hindi)]
                        leading-loose
                        text-[var(--muted)]
                        "
                    >
                        {excerpt}...
                    </p>


                    <p
                        className="
                        text-[var(--accent)]
                        border-b
                        border-[var(--accent)]
                        w-fit
                        "
                    >
                        पूरा लेख पढ़ें →
                    </p>

                </div>


            </div>

        </Link>
    );
}