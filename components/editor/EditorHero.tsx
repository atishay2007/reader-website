"use client";

import Image from "next/image";
export default function EditorHero() {
    return (
        <section
            className="
            mx-auto
            max-w-6xl
            px-6
            py-6
            "
        >

            <div
                className="
                grid
                items-center
                gap-10
                md:grid-cols-2
                "
            >


                {/* Text */}

                <div
                    className="
                    text-center
                    md:text-left
                    "
                >

                    <p
                        className="
                        font-[var(--font-hindi)]
                        text-sm
                        tracking-widest
                        text-[var(--accent)]
                        "
                    >
                        संपादक परिचय
                    </p>


                    <div
                        className="
                        mt-5
                        mb-6
                        text-[var(--gold)]
                        "
                    >
                        ─── ✦ ───
                    </div>



                    <h1
                        className="
                        font-[var(--font-hindi)]
                        text-5xl
                        font-semibold
                        leading-tight
                        md:text-6xl
                        "
                    >
                        डॉ. नीलम जैन
                    </h1>



                    <p
                        className="
                        mt-8
                        max-w-xl
                        font-[var(--font-hindi)]
                        text-xl
                        leading-loose
                        text-[var(--muted)]
                        "
                    >
                        साहित्यकार, संपादक और सामाजिक कार्यकर्ता।
                        हिंदी साहित्य, जैन दर्शन एवं संस्कृति के क्षेत्र
                        में निरंतर योगदान।
                    </p>
                    <div
                        className="
                        mt-10
                        text-[var(--gold)]
                        "
                    >
                        ───── ✦ ─────
                    </div>

                    <button
                        onClick={() => {
                            document
                                .getElementById("journey")
                                ?.scrollIntoView({
                                    behavior: "smooth",
                                });
                        }}
                        className="
    mt-8
    flex
    w-full
    items-center
    justify-center
    gap-3
    text-[var(--muted)]
    transition
    hover:text-[var(--gold)]
"
                    >
                        <span
                            className="
        font-[var(--font-hindi)]
        text-xl
        tracking-wide
        "
                        >
                            नीचे पढ़ें
                        </span>

                        <span
                            className="
        text-xl
        text-[var(--gold)]
        animate-bounce
        "
                        >
                            ↓
                        </span>
                    </button>




                </div>




                {/* Portrait */}


                <div
                    className="
                    flex
                    justify-center
                    "
                >

                    <div
                        className="
                        relative
                        border
                        border-[var(--gold)]
                        bg-[var(--paper)]
                        p-3
                        shadow-[0_20px_50px_rgba(0,0,0,0.08)]
                        "
                    >

                        <Image
                            src="https://losvwqdyeshnyfxyxwuk.supabase.co/storage/v1/object/public/assets/editor/neelam-jain.jpeg"
                            alt="डॉ. नीलम जैन"
                            width={380}
                            height={520}
                            className="
    object-cover
    "
                        />


                        <div
                            className="
                            absolute
                            -bottom-3
                            -right-3
                            h-12
                            w-12
                            border-b
                            border-r
                            border-[var(--gold)]
                            "
                        />


                    </div>

                </div>


            </div>

        </section>
    );
}
