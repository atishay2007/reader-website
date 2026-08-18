"use client";

import { useState } from "react";
import ReadingMode from "./ReadingMode";

export default function ArticleReader({
    children,
}: {
    children: React.ReactNode;
}) {

    const [reading, setReading] = useState(false);


    return (
        <>
            <div className="mb-6 flex justify-center">
                <ReadingMode onToggle={setReading} />
            </div>


            <div
                className={`
                transition-all
                duration-500

                ${
                    reading
                    ? "mx-auto max-w-3xl text-2xl leading-[2.5]"
                    : ""
                }
                `}
            >
                {children}
            </div>
        </>
    );
}