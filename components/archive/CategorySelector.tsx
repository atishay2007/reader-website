"use client";

import Link from "next/link";

const categories = [
    "सभी",
    "आलेख",
    "कविता",
    "अध्यात्म",
    "कहानी",
    "समीक्षा",
];

export default function CategorySelector({
    selectedCategory,
}: {
    selectedCategory?: string;
}) {
    return (
        <div
            className="
            flex
            flex-wrap
            justify-center
            gap-4
            "
        >
            {categories.map((category) => {
                const active =
                    selectedCategory === category ||
                    (!selectedCategory && category === "सभी");

                return (
                    <Link
                        key={category}
                        href={
                            category === "सभी"
                                ? "/articles"
                                : `/articles?category=${category}`
                        }
                        className={`
                        group
                        relative
                        overflow-hidden
                        rounded-full
                        border
                        px-7
                        py-3
                        font-[var(--font-hindi)]
                        text-base
                        font-semibold
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:shadow-lg

                        ${active
                                ? `
                                border-[var(--gold)]
                                bg-[var(--gold)]
                                text-[#2b1b10]
                                shadow-[0_8px_25px_rgba(184,134,44,0.35)]
                                `
                                : `
                                border-[var(--border)]
                                bg-[var(--paper)]
                                text-[var(--foreground)]
                                hover:border-[var(--gold)]
                                hover:text-[var(--gold)]
                                `
                            }
                        `}
                    >
                        <span
                            className="
                            relative
                            z-10
                            "
                        >
                            {category}
                        </span>


                        <span
                            className="
                            absolute
                            inset-0
                            -translate-x-full
                            bg-gradient-to-r
                            from-transparent
                            via-white/20
                            to-transparent
                            transition-transform
                            duration-700
                            group-hover:translate-x-full
                            "
                        />
                    </Link>
                );
            })}
        </div>
    );
}