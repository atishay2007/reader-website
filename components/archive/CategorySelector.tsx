"use client";

import Link from "next/link";

const categories = [
    "सभी",
    "साहित्य",
    "संस्कृति",
    "विचार",
    "अध्यात्म",
    "कविता",
];

export default function CategorySelector({
    selectedCategory,
}: {
    selectedCategory?: string;
}) {
    return (
        <div className="flex flex-wrap justify-center gap-3">

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
        rounded-full
        border
        px-5
        py-2
        text-sm
        transition

        ${active
                                ? "border-[var(--accent)] bg-[var(--accent)] text-white"
                                : "border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
                            }
    `}
                    >
                        {category}
                    </Link>
                );
            })}

        </div>
    );
}