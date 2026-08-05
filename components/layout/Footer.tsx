export default function Footer() {
    return (
        <footer className="mt-20 border-t border-[var(--border)] bg-[var(--paper)]">
            <div className="
        mx-auto
        max-w-5xl
        px-6
        py-10
        text-center
        font-[var(--font-hindi)]
      ">

                <div className="mb-6 text-[var(--gold)]">
                    ───── ✦ ─────
                </div>

                <p className="text-lg text-[var(--foreground)]">
                    © {new Date().getFullYear()} श्री देशना
                </p>

                <p className="
          mt-3
          text-sm
          text-[var(--muted)]
        ">
                    साहित्य, विचार और संस्कृति का एक संग्रह।
                </p>

            </div>
        </footer>
    );
}