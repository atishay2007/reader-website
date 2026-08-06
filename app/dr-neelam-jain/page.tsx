import EditorHero from "@/components/editor/EditorHero";
import EditorJourney from "@/components/editor/EditorJourney";
import EditorTimeline from "@/components/editor/EditorTimeline";
import EditorGallery from "@/components/editor/EditorGallery";
import EditorBooks from "@/components/editor/EditorBooks";

export default function EditorPage() {
    return (
        <main>

            <EditorHero />


            <section
                className="
    mx-auto
    max-w-7xl
    px-6
    py-32
    "
            >
                <div
                    className="
    grid
    gap-12
lg:grid-cols-[1.3fr_2fr_0.9fr]
    items-start
    "
                >

                    <aside
                        className="
    lg:sticky
    lg:top-24
    lg:self-start
    "
                    >
                        <EditorBooks />
                    </aside>


                    <article>
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

                    <aside
                        className="
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