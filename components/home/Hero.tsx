export default function Hero() {
    return (
        <section className="border-b border-[var(--border)] px-6 py-24 text-center">

            <h1 className="
        font-[var(--font-hindi)]
        text-5xl
        font-semibold
        leading-relaxed
        md:text-7xl
      ">
                श्री देशना
            </h1>


            <p className="
        mx-auto
        mt-6
        max-w-2xl
        font-[var(--font-hindi)]
        text-xl
        leading-loose
        text-[var(--muted)]
      ">
                साहित्य, विचार और संस्कृति का एक संग्रह।
                <br />
                पीढ़ियों से चली आ रही हिंदी लेखनी का संरक्षण।
            </p>


            <a
                href="#latest"
                className="
          mt-10
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

        </section>
    );
}