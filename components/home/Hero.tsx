import RotatingWord from "@/components/home/RotatingWord";

export default function Hero() {
    return (
<section className="border-b border-[var(--border)] px-6 py-14 text-center">
            <div className="mx-auto max-w-5xl">

                <h1
                    className="
    font-[var(--font-hindi)]
    text-3xl
    font-semibold
    leading-relaxed
    md:text-6xl
    "
                >
                    हर रचना को अवसर मिलना चाहिए{" "}
                    <br />
                    <RotatingWord />
                </h1>

                <p className="mt-4 text-lg text-[var(--muted)]">
                    पीढ़ियों से चली आ रही हिंदी रचनाओं का डिजिटल संग्रह।
                </p>

                <a
                    href="#latest"
                    className="
mt-8
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
                    लेख पढ़ें ↓
                </a>

            </div>

        </section>
    );
}