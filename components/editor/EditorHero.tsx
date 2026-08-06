import Image from "next/image";

export default function EditorHero() {
    return (
        <section
            className="
            mx-auto
            max-w-6xl
            px-6
            py-24
            "
        >

            <div
                className="
                grid
                items-center
                gap-12
                md:grid-cols-2
                "
            >

                <div
                    className="
                    text-center
                    md:text-left
                    "
                >

                    <p
                        className="
                        font-[var(--font-hindi)]
                        text-[var(--accent)]
                        "
                    >
                        संपादक परिचय
                    </p>


                    <h1
                        className="
                        mt-5
                        font-[var(--font-hindi)]
                        text-5xl
                        font-semibold
                        "
                    >
                        डॉ. नीलम जैन
                    </h1>


                    <p
                        className="
                        mt-6
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

                </div>


                <div className="flex justify-center">

                    <div
                        className="
                        border
                        border-[var(--border)]
                        bg-[var(--paper)]
                        p-3
                        "
                    >

                        <Image
                            src="https://losvwqdyeshnyfxyxwuk.supabase.co/storage/v1/object/public/assets/editor/neelam-jain.jpeg"
                            alt="डॉ. नीलम जैन"
                            width={450}
                            height={600}
                        />

                    </div>

                </div>

            </div>

        </section>
    );
}