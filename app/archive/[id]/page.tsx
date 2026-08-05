import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { getPdfUrl } from "@/lib/archive";

export default async function IssuePage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const supabase = await createClient();

    const { data: issue } = await supabase
        .from("issues")
        .select("*")
        .eq("id", id)
        .single();


    if (!issue) {
        notFound();
    }


    return (
        <main className="mx-auto max-w-6xl px-6 py-10">
            <header className="mb-12 text-center">

                <h1
                    className="
        font-[var(--font-hindi)]
        text-5xl
        font-semibold
        "
                >
                   श्री देशना मासिक पत्रिका - {issue.title}
                </h1>

            </header>


            <div className="mx-auto w-full max-w-5xl">

                <div
                    className="
        overflow-hidden
        border
        border-[var(--border)]
        bg-[var(--paper)]
        shadow-lg
        "
                >

                    <iframe
                        src={getPdfUrl(issue.folder_name)}
                        className="
h-[calc(100vh-180px)]
w-full
"
                        title={issue.title}
                    />

                </div>

            </div>

        </main>
    );
}