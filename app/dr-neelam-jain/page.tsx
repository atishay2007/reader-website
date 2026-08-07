import EditorHero from "@/components/editor/EditorHero";
import EditorJourney from "@/components/editor/EditorJourney";
import EditorTimeline from "@/components/editor/EditorTimeline";
import EditorGallery from "@/components/editor/EditorGallery";
import EditorBooks from "@/components/editor/EditorBooks";

export const revalidate = 3600;

export default function EditorPage() {
    return (
        <main>

            <EditorHero />


            <section
                className="
                mx-auto
                max-w-7xl
                px-4
                lg:px-8
                py-20
                "
            >

                <div
                    className="
                    grid
                    items-start
                    gap-0
                    lg:grid-cols-[320px_minmax(0,1fr)_260px]
                    "
                >


                    {/* Books */}

                    <div
                        className="
                        border-r
                        border-[var(--border)]
                        pr-10
                        "
                    >
                        <EditorBooks />
                    </div>



                    {/* Main Content */}

                    <article
                        id="journey"
                        className="
    px-10
    "
                    >
                        <EditorJourney />


                        <div className="h-12" />


                        <blockquote
                            className="
                            my-20
                            mx-auto
                            max-w-xl
                            text-center
                            font-[var(--font-hindi)]
                            text-3xl
                            font-semibold
                            leading-relaxed
                            text-[var(--accent)]
                            "
                        >
                            &ldquo;शब्द केवल लिखे नहीं जाते,
                            वे समय के साथ जीवित रहते हैं।&rdquo;
                        </blockquote>

                    </article>




                    {/* Timeline */}

                    <aside
                        className="
                        border-l
                        border-[var(--border)]
                        pl-10
                        lg:sticky
                        lg:top-24
                        lg:self-start
                        "
                    >
                        <EditorTimeline />

                    </aside>


                </div>

            </section>



            <EditorGallery />


        </main>
    );
}