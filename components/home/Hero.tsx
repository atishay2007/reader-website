export default function Hero() {
    return (
        <section className="border-b border-[var(--border)] py-16 md:py-20">
            <div className="mx-auto max-w-3xl text-center">

                <p className="text-lg text-[var(--accent)]">
                    मानसिक पत्रिका
                </p>

                <h1 className="mt-4 text-4xl font-bold tracking-tight text-[var(--text)] md:text-5xl">
                    निबंध • कविता • कहानी • विचार                </h1>

                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
                    Discover essays, poetry, stories, and reflections from श्री देशना,
                    celebrating decades of thoughtful Hindi writing.
                </p>

                <a
                    href="#latest"
                    className="mt-10 inline-flex items-center gap-2 text-[var(--accent)] transition hover:gap-3"
                >
                    Browse Articles
                    <span>↓</span>
                </a>

            </div>
        </section>
    );
}