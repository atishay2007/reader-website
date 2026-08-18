"use client";

import { useState } from "react";

export default function ReadingMode({
    onToggle,
}: {
    onToggle: (active: boolean) => void;
}) {

    const [active, setActive] = useState(false);


    function toggle() {

        const next = !active;

        setActive(next);
        onToggle(next);

    }


    return (
        <button
            onClick={toggle}
            className="
            rounded-full
            border
            border-[var(--border)]
            px-6
            py-2
            font-[var(--font-hindi)]
            text-sm
            text-[var(--muted)]
            transition-all
            duration-300
            hover:border-[var(--gold)]
            hover:text-[var(--gold)]
            "
        >
            {active
                ? "सामान्य दृश्य"
                : "📖 पाठ मोड"
            }
        </button>
    );
}