import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import NewPostForm from "./NewPostForm";

export default async function NewPostPage() {
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
    
    return (
        <main className="mx-auto max-w-3xl px-6 py-20">

            <h1 className="font-[var(--font-hindi)] text-4xl font-semibold">
                नया लेख लिखें
            </h1>

            <NewPostForm />

        </main>
    );
}