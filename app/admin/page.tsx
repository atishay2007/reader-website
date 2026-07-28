import { redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { getAllPosts } from "@/lib/posts";
import DeletePostButton from "@/components/admin/DeletePostButton";


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

    const posts = await getAllPosts();

    return (
        <main className="mx-auto max-w-5xl px-6 py-20">

            <div className="flex items-center justify-between">

                <h1 className="font-[var(--font-hindi)] text-5xl font-semibold">
                    श्री देशना Admin
                </h1>

                <Link
                    href="/admin/new"
                    className="
            border
            border-[var(--accent)]
            px-5
            py-3
            text-[var(--accent)]
          "
                >
                    नया लेख लिखें
                </Link>

            </div>


            <p className="mt-4 text-[var(--muted)]">
                {posts.length} लेख
            </p>


            <section className="mt-12">

                {posts.map((post) => (

                    <div
                        key={post.fileId}
                        className="
              flex
              items-center
              justify-between
              border-b
              border-[var(--border)]
              py-6
            "
                    >

                        <div>

                            <h2 className="
                font-[var(--font-hindi)]
                text-2xl
                font-semibold
              ">
                                {post.title}
                            </h2>

                            <p className="mt-2 text-sm text-[var(--muted)]">
                                {new Date(post.date).toLocaleDateString("hi-IN")}
                            </p>

                        </div>


                        <div className="flex gap-4">

                            <Link
                                href={`/admin/edit/${post.fileId}`}
                                className="text-[var(--accent)]"
                            >
                                संपादित करें
                            </Link>

                            <DeletePostButton id={post.id} />

                        </div>

                    </div>

                ))}

            </section>

        </main>
    );
}