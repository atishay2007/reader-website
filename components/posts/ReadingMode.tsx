"use client";

import { useEffect, useState } from "react";

export default function ReadingMode({
    onToggle,
}: {
    onToggle?: (active: boolean) => void;
}) {

    const [active, setActive] = useState(false);


    useEffect(() => {

        return () => {
            document.body.classList.remove("reading-mode");
        };

    }, []);



    function toggle() {

        const next = !active;

        setActive(next);


        if (next) {
            document.body.classList.add("reading-mode");
        } else {
            document.body.classList.remove("reading-mode");
        }


        console.log(
            "Reading mode:",
            next,
            document.body.className
        );


        onToggle?.(next);

    }



    return (

        <button
            onClick={toggle}
            className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-[var(--border)]
            px-5
            py-2

            text-sm
            text-[var(--muted)]

            transition-all
            duration-300

            hover:border-[var(--gold)]
            hover:text-[var(--gold)]
            "
        >

            <span>
                {active ? "×" : "📖"}
            </span>

            <span>
                {
                    active
                        ? "Exit Reading Mode"
                        : "Reading Mode"
                }
            </span>

        </button>

    );
}