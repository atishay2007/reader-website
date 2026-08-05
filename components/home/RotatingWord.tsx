"use client";

import { useEffect, useState } from "react";

const words = [
    "पढ़े जाने का",
    "सुने जाने का",
    "अनुभव किए जाने का",
    "याद रखे जाने का",
];

export default function RotatingWord() {
    const [index, setIndex] = useState(0);
    const [flip, setFlip] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setFlip(true);

            setTimeout(() => {
                setIndex((i) => (i + 1) % words.length);
                setFlip(false);
            }, 300);

        }, 1500);

        return () => clearInterval(timer);
    }, []);

    return (
        <span
            className={`
                inline-block
                text-[var(--accent)]
                transition-all
                duration-300
                ${flip
                    ? "rotate-x-90 opacity-0"
                    : "rotate-x-0 opacity-100"
                }
            `}
            style={{
                transformOrigin: "center",
            }}
        >
            {words[index]}
        </span>
    );
}