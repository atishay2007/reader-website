import { getLatestPosts } from "@/lib/posts";
import Link from "next/link";
import PostCard from "@/components/posts/PostCard";


export default async function LatestPosts() {

    const posts = await getLatestPosts(8);


    return (

        <section
            id="latest"
            className="
            mx-auto
            max-w-5xl
            px-6
            py-14
            "
        >


            <div
                className="
                mb-10
                flex
                items-end
                justify-between
                "
            >

                <h2
                    className="
                    font-[var(--font-hindi)]
                    text-4xl
                    font-semibold
                    "
                >
                    नवीनतम लेख
                </h2>


                <p
                    className="
                    text-sm
                    text-[var(--muted)]
                    "
                >
                    हमारे संग्रह से नवीनतम रचनाएँ
                </p>

            </div>



            <div
                className="
                grid
                gap-8
                md:grid-cols-2
                "
            >

                {posts.map((post,index)=>(
                    <PostCard
                        key={post.fileId}
                        post={post}
                        index={index}
                    />
                ))}


            </div>



            <div
                className="
                mt-10
                text-center
                text-[var(--gold)]
                "
            >
                ───── ✦ ─────
            </div>



            <div className="mt-12 text-center">

                <Link
                    href="/archive"
                    className="
                    inline-block
                    border
                    border-[var(--accent)]
                    px-8
                    py-3
                    text-[var(--accent)]
                    transition
                    hover:bg-[var(--accent)]
                    hover:text-white
                    "
                >
                    सभी लेख देखें →
                </Link>

            </div>


        </section>

    );
}