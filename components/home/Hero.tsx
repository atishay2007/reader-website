import RotatingWord from "@/components/home/RotatingWord";

export default function Hero() {
    return (
        <section
            className="
            border-b
            border-[var(--border)]
            px-6
            py-12
            text-center
            "
        >
            <div className="mx-auto max-w-5xl">

                <p
                    className="
                    font-[var(--font-hindi)]
                    text-lg
                    tracking-normal
                    text-[var(--accent)]
                    "
                >
                    ✦ श्री देशना संग्रह ✦
                </p>


                <h1
                    className="
                    mt-6
                    font-[var(--font-hindi)]
                    text-4xl
                    font-bold
                    leading-relaxed
                    text-[var(--foreground)]
                    md:text-7xl
                    "
                >
                    हर रचना को अवसर मिलना चाहिए{" "}
                    <br />

                    <span className="text-[var(--accent)]">
                        <RotatingWord />
                    </span>
                </h1>


                <p
                    className="
                    mx-auto
                    mt-5
                    max-w-2xl
                    text-lg
                    text-[var(--muted)]
                    "
                >
                    पीढ़ियों से चली आ रही हिंदी रचनाओं का डिजिटल संग्रह।
                </p>


                <a
                    href="#latest"
                    className="
                    mt-8
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    border
                    border-[var(--gold)]
                    bg-[var(--gold)]
                    px-8
                    py-3
                    font-semibold
                    text-[#2b1b10]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-[0_10px_30px_rgba(184,134,44,0.3)]
                    "
                >
                    लेख पढ़ें 

                    <span
                        className="
                        inline-block
                        animate-bounce
                        "
                    >
                        ↓
                    </span>

                </a>


                <div
                    className="
                    mt-10
                    text-sm
                    text-[var(--muted)]
                    "
                >
                    1342+ लेख&nbsp; • &nbsp;हिंदी साहित्य&nbsp; • &nbsp;डिजिटल संग्रह
                </div>

            </div>
        </section>
    );
}