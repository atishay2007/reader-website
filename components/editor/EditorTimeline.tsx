"use client";

import { useEffect, useRef, useState } from "react";
import { editorTimeline } from "@/data/editorTimeline";


export default function EditorTimeline() {

    const ref = useRef<HTMLDivElement>(null);

    const [active, setActive] = useState(0);


    useEffect(() => {

        const handleScroll = () => {

            const elements =
                document.querySelectorAll(
                    ".timeline-item"
                );


            let current = 0;


            elements.forEach((element, index) => {

                const rect =
                    element.getBoundingClientRect();


                if (rect.top < window.innerHeight * 0.55) {
                    current = index;
                }

            });


            setActive(current);

        };


        window.addEventListener(
            "scroll",
            handleScroll
        );


        handleScroll();


        return () =>
            window.removeEventListener(
                "scroll",
                handleScroll
            );


    }, []);



    return (

        <div
            ref={ref}
            className="
            relative
            "
        >

            <h2
                className="
                mb-10
                font-[var(--font-hindi)]
                text-3xl
                "
            >
                यात्रा
            </h2>



            {/* Background line */}

            <div
                className="
                absolute
                left-[11px]
                top-20
                h-[calc(100%-80px)]
                w-[2px]
                bg-[var(--border)]
                "
            />



            {/* Gold rising line */}

            <div
                className="
                absolute
                left-[11px]
                top-20
                w-[2px]
                bg-gradient-to-b
                from-[var(--gold)]
                via-[#d8b46a]
                to-[var(--gold)]
                transition-all
                duration-700
                "
                style={{
                    height:
                        editorTimeline.length > 1
                            ? `${(active / (editorTimeline.length - 1)) * 100}%`
                            : "0%"
                }}
            />



            <div
                className="
                space-y-14
                "
            >

                {editorTimeline.map((event, index) => (

                    <div
                        key={event.year}
                        className="
                        timeline-item
                        relative
                        pl-10
                        "
                    >


                        {/* Timeline dot */}

                        <div
                            className={`
                            absolute
                            left-[-1px]
                            top-1
                            h-5
                            w-5
                            rounded-full
                            border
                            transition-all
                            duration-500

                            ${index <= active
                                    ? `
                                    border-[var(--gold)]
                                    bg-[var(--gold)]
                                    shadow-[0_0_18px_rgba(176,138,74,0.5)]
                                    scale-110
                                    `
                                    : `
                                    border-[var(--border)]
                                    bg-[var(--background)]
                                    `
                                }
                            `}
                        />



                        {/* Content */}

                        <div
                            className={`
                            transition-all
                            duration-700

                            ${index <= active
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-40 translate-y-3"
                                }
                            `}
                        >


                            <h3
                                className={`
                                font-[var(--font-hindi)]
                                text-2xl
                                font-semibold
                                transition-colors
                                duration-500

                                ${index <= active
                                        ? "text-[var(--accent)]"
                                        : "text-[var(--muted)]"
                                    }
                                `}
                            >
                                {event.year}
                            </h3>



                            <p
                                className="
                                mt-1
                                text-base
                                font-semibold
                                "
                            >
                                {event.title}
                            </p>



                            <div
                                className="
                                mt-2
                                space-y-1
                                text-xs
                                leading-relaxed
                                text-[var(--muted)]
                                "
                            >

                                {event.items.map((item) => (

                                    <p
                                        key={item}
                                    >
                                        {item}
                                    </p>

                                ))}

                            </div>


                        </div>


                    </div>

                ))}


            </div>


        </div>

    );
}