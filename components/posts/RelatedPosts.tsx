import Link from "next/link";
import type { Post } from "@/lib/posts";


export default function RelatedPosts({
    posts,
}: {
    posts: Post[];
}) {


    if (!posts.length) {
        return null;
    }


    return (

        <div
            className="
            border-t
            border-[var(--border)]
            pt-8
            "
        >
            <h2
                className="
    mb-5
    font-[var(--font-hindi)]
    text-sm
    font-medium
    tracking-wide
    text-[var(--muted)]
    "
            >
                आपको यह भी पसंद आ सकता है
            </h2>


            <div
                className="
                space-y-5
                "
            >

                {posts.slice(0, 4).map((post) => (

                    <Link
                        key={post.fileId}
                        href={`/post/${post.fileId}`}
                        className="
                        group
                        block
                        border-b
                        border-[var(--border)]
                        pb-5
                        "
                    >

                        {post.category && (

                            <p
                                className="
                                mb-2
                                font-[var(--font-hindi)]
                                text-xs
                                text-[var(--accent)]
                                "
                            >
                                {post.category}
                            </p>

                        )}



                        <h3
                            className="
                            font-[var(--font-hindi)]
                            text-base
                            font-semibold
                            leading-relaxed
                            transition
                            group-hover:text-[var(--gold)]
                            "
                        >
                            {post.title.replace(/^#+\s*/, "")}
                        </h3>


                    </Link>

                ))}

            </div>

        </div>

    );
}