import Image from "next/image";
import Link from "next/link";
import { issues } from "@/data/issues";

export default function ArchivePage() {
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

                <p className="mt-5 text-lg text-[var(--muted)]">
                    मुद्रित संस्करणों का डिजिटल संग्रह
                </p>

            </header>


            <section
                className="
                grid
                gap-14
                sm:grid-cols-2
                md:grid-cols-3
                "
            >

                {issues.map((issue) => (

                    <article
                        key={issue.id}
                        className="
                        group
                        text-center
                        "
                    >

                        <div
                            className="
                            overflow-hidden
                            border
                            border-[var(--border)]
                            bg-[var(--paper)]
                            shadow-md
                            transition
                            duration-300
                            hover:-translate-y-2
                            hover:shadow-xl
                            "
                        >

                            <Image
                                src={issue.cover}
                                alt={issue.title}
                                width={500}
                                height={700}
                                className="
                                aspect-[3/4]
                                object-cover
                                transition
                                duration-500
                                group-hover:scale-105
                                "
                            />

                        </div>


                        <h2
                            className="
                            mt-6
                            font-[var(--font-hindi)]
                            text-2xl
                            font-semibold
                            "
                        >
                            {issue.title}
                        </h2>


                        <p className="mt-2 text-sm text-[var(--muted)]">
                            {issue.description}
                        </p>


                        <Link
                            href={issue.pdf}
                            target="_blank"
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

            </section>

        </main>
    );
}


