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

            <div
                className="
                mb-12
                flex
                items-center
                gap-3
                "
            >

                <span
                    className="
                    h-px
                    w-8
                    bg-[var(--gold)]
                    "
                />

                <h2
                    className="
                    font-[var(--font-hindi)]
                    text-3xl
                    font-semibold
                    text-[var(--accent)]
                    "
                >
                    यात्रा
                </h2>

            </div>



            {/* Base line */}

            <div
                className="
                absolute
                left-[8px]
                top-20
                h-[calc(100%-80px)]
                w-px
                bg-[var(--border)]
                "
            />



            {/* Progress line */}

            <div
                className="
                absolute
                left-[8px]
                top-20
                w-px
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
                space-y-16
                "
            >

                {editorTimeline.map((event, index) => (

                    <div
                        key={event.year}
                        className="
                        timeline-item
                        relative
                        pl-8
                        "
                    >


                        {/* Dot */}

                        <div
                            className={`
                            absolute
                            left-0
                            top-1
                            h-4
                            w-4
                            rounded-full
                            border
                            transition-all
                            duration-500

                            ${index <= active
                                    ?
                                    `
                                    border-[var(--gold)]
                                    bg-[var(--gold)]
                                    shadow-[0_0_12px_rgba(184,134,44,0.35)]
                                    scale-110
                                    `
                                    :
                                    `
                                    border-[var(--border)]
                                    bg-[var(--paper)]
                                    `
                                }
                            `}
                        />



                        <div
                            className={`
                            transition-all
                            duration-700

                            ${index <= active
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-50 translate-y-2"
                                }
                            `}
                        >


                            <h3
                                className={`
                                font-[var(--font-hindi)]
                                text-3xl
                                font-semibold
                                transition-colors
                                duration-500

                                ${index <= active
                                        ?
                                        "text-[var(--accent)]"
                                        :
                                        "text-[var(--muted)]"
                                    }
                                `}
                            >
                                {event.year}
                            </h3>



                            <p
                                className="
                                mt-2
                                font-[var(--font-hindi)]
                                text-base
                                font-semibold
                                text-[var(--foreground)]
                                "
                            >
                                {event.title}
                            </p>



                            <div
                                className="
                                mt-3
                                space-y-2
                                font-[var(--font-hindi)]
                                text-sm
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