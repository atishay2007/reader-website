import Image from "next/image";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { getCoverUrl } from "@/lib/archive";

export const revalidate = 3600;

export default async function ArchivePage() {
    const supabase = await createClient();

    const { data: issues } = await supabase
        .from("issues")
        .select("*")
        .order("year", { ascending: false });


    if (!issues) {
        return null;
    }


    const years = Array.from(
        new Set(issues.map((issue) => issue.year))
    ).sort((a, b) => b - a);


    return (
        <main className="mx-auto max-w-6xl px-6 py-20">

            <header className="mb-20 text-center">

                <h1
                    className="
                    font-[var(--font-hindi)]
                    text-5xl
                    font-semibold
                    "
                >
                    श्री देशना अभिलेख
                </h1>

                <p className="mx-auto mt-5 max-w-2xl text-lg text-[var(--muted)]">
                    श्री देशना के मुद्रित संस्करणों का डिजिटल संग्रह।
                    वर्षों से प्रकाशित पत्रिकाओं को अब ऑनलाइन पढ़ें और संरक्षित रखें।
                </p>

                <p className="mt-6 text-sm text-[var(--accent)]">
                    कुल {issues.length} अंक संरक्षित
                </p>

            </header>


            <div className="space-y-20">

                {years.map((year) => (

                    <section key={year}>

                        <div className="mb-10 flex items-center gap-5">

                            <div>
                                <h2
                                    className="
                                    font-[var(--font-english)]
                                    text-4xl
                                    font-semibold
                                    text-[var(--accent)]
                                    "
                                >
                                    {year}
                                </h2>

                                <p className="mt-1 text-sm text-[var(--muted)]">
                                    {
                                        issues.filter(
                                            (issue) => issue.year === year
                                        ).length
                                    } अंक
                                </p>
                            </div>


                            <div
                                className="
                                h-px
                                flex-1
                                bg-[var(--border)]
                                "
                            />

                        </div>


                        <div
                            className="
                            grid
                            gap-14
                            sm:grid-cols-2
                            md:grid-cols-3
                            "
                        >

                            {issues
                                .filter((issue) => issue.year === year)
                                .map((issue, index) => (

                                    <article
                                        key={issue.id}
                                        className="group text-center"
                                    >

                                        <Link
                                            href={`/archive/${issue.id}`}
                                            className="block"
                                        >

                                            <div
                                                className="
                                                relative
                                                overflow-hidden
                                                rounded-sm
                                                border
                                                border-[var(--border)]
                                                bg-[var(--paper)]
                                                p-2
                                                shadow-md
                                                transition
                                                duration-300
                                                hover:-translate-y-2
                                                hover:shadow-xl
                                                "
                                            >

                                                {year === years[0] && index === 0 && (
                                                    <span
                                                        className="
    absolute
    right-0
    top-0
    z-10
    bg-[var(--gold)]
    px-5
    py-2
    text-sm
    font-semibold
    text-white
    shadow-md
    "
                                                    >
                                                        नवीनतम अंक
                                                    </span>
                                                )}

                                                <div
                                                    className="
                                                    overflow-hidden
                                                    border
                                                    border-[var(--border)]
                                                    "
                                                >

                                                    <Image
                                                        src={getCoverUrl(issue.folder_name)}
                                                        alt={issue.title}
                                                        width={500}
                                                        height={700}
                                                        className="
                                                        aspect-[3/4]
                                                        object-contain
                                                        transition
                                                        duration-500
                                                        group-hover:scale-105
                                                        "
                                                    />

                                                </div>

                                            </div>

                                        </Link>


                                        <h3
                                            className="
                                            mt-6
                                            font-[var(--font-hindi)]
                                            text-2xl
                                            font-semibold
                                            "
                                        >
                                            {issue.title}
                                        </h3>


                                        <Link
                                            href={`/archive/${issue.id}`}
                                            className="
                                            mt-5
                                            inline-block
                                            border
                                            border-[var(--accent)]
                                            px-6
                                            py-2
                                            text-sm
                                            text-[var(--accent)]
                                            transition
                                            hover:bg-[var(--accent)]
                                            hover:text-white
                                            "
                                        >
                                            अंक पढ़ें →
                                        </Link>


                                    </article>

                                ))}

                        </div>

                    </section>

                ))}

            </div>

        </main>
    );
}