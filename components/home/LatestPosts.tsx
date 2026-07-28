import { getLatestPosts } from "@/lib/posts";
import Link from "next/link";

export default function LatestPosts() {
    const posts = getLatestPosts(8);

    return (
        <section
            id="latest"
            className="mx-auto max-w-5xl px-6 py-20"
        >

            <div className="mb-10 flex items-end justify-between">

                <h2 className="
          font-[var(--font-hindi)]
          text-4xl
          font-semibold
        ">
                    नवीनतम लेख
                </h2>

            </div>


            <div className="
        grid
        gap-6
        md:grid-cols-2
      ">

                {posts.map((post) => (

                    <Link
                        key={post.fileId}
                        href={`/post/${post.fileId}`}
                        className="
              border
              border-[var(--border)]
              p-8
              transition
              hover:-translate-y-1
              hover:border-[var(--accent)]
            "
                    >

                        <h3 className="
              font-[var(--font-hindi)]
              text-2xl
              font-semibold
              leading-relaxed
            ">
                            {post.title}
                        </h3>


                        <p className="
              mt-3
              text-sm
              text-[var(--muted)]
            ">
                            {new Date(post.date).toLocaleDateString("hi-IN")}
                        </p>


                        <p className="
              mt-5
              line-clamp-3
              font-[var(--font-hindi)]
              leading-loose
              text-[var(--muted)]
            ">
                            {post.content
                                .replace(/<[^>]*>/g, "")
                                .slice(0, 160)}
                            ...
                        </p>


                        <p className="
              mt-6
              text-sm
              text-[var(--accent)]
            ">
                            पढ़ें →
                        </p>

                    </Link>

                ))}

            </div>


            <div className="mt-14 text-center">

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