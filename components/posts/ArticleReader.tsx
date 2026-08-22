"use client";

import { useState } from "react";
import ReadingMode from "./ReadingMode";
import ShareButton from "./ShareButton";


export default function ArticleReader({
    children,
    title,
}: {
    children: React.ReactNode;
    title: string;
}) {

    const [reading, setReading] = useState(false);


    return (

        <div
            className="
            transition-all
            duration-700
            ease-in-out
            "
        >

            <div
                className={`
                relative

                transition-all
                duration-700
                ease-in-out

                ${reading
                        ? `
                    mx-auto
                    max-w-3xl
                    `
                        : ""
                    }
                `}
            >

                <div
                    className={`
                    relative

                    transition-all
                    duration-700
                    ease-in-out


                    ${reading
                            ? `
                        border-none
                        bg-transparent
                        px-2
                        py-8

                        text-2xl
                        leading-[2.4]

                        md:px-6
                        `
                            : `
                        rounded-sm
                        border
                        border-[var(--border)]

                        bg-[var(--paper)]

                        px-8
                        pt-20
                        pb-12

                        md:px-14
                        md:pt-24
                        md:pb-16

                        text-xl
                        leading-[2.2]
                        `
                        }


                    font-[var(--font-hindi)]

                    [&_p]:mb-6

                    [&_img]:mx-auto
                    [&_img]:my-12
                    [&_img]:rounded-sm

                    [&_blockquote]:my-10

                    [&_a]:text-[var(--accent)]

                    `}
                >

                    <div
                        className="
    absolute
    right-6
    top-6
    z-10
    flex
    items-center
    gap-3
    "
                    >

                        <ReadingMode
                            onToggle={setReading}
                        />

                        {!reading && (
                            <ShareButton
                                title={title}
                            />
                        )}

                    </div>

                    {children}


                </div>

            </div>

        </div>

    );
}