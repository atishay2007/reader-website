
"use client";

import { useEffect, useState } from "react";

export default function ReadingProgress() {
    const [progress, setProgress] = useState(0);


    useEffect(() => {

        function updateProgress() {

            const scrollTop = window.scrollY;

            const height =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;

            const percentage =
                (scrollTop / height) * 100;


            setProgress(Math.min(100, Math.max(0, percentage)));

        }


        window.addEventListener(
            "scroll",
            updateProgress
        );


        return () => {
            window.removeEventListener(
                "scroll",
                updateProgress
            );
        };

    }, []);


    return (
        <div
            className="
            fixed
            top-0
            left-0
            z-50
            h-1
            w-full
            bg-transparent
            "
        >
            <div
                className="
                h-full
                bg-[var(--gold)]
                transition-all
                duration-150
                "
                style={{
                    width: `${progress}%`,
                }}
            />
        </div>
    );
}