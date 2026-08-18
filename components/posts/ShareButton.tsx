"use client";

import { useState } from "react";


export default function ShareButton({
    title,
}: {
    title: string;
}) {

    const [open, setOpen] = useState(false);
    const [copied, setCopied] = useState(false);


    const url =
        typeof window !== "undefined"
            ? window.location.href
            : "";



    async function copyLink() {

        await navigator.clipboard.writeText(url);

        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2000);

    }



    function whatsapp() {

        window.open(
            `https://wa.me/?text=${encodeURIComponent(
                title + "\n" + url
            )}`,
            "_blank"
        );

    }



    function facebook() {

        window.open(
            `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
            "_blank"
        );

    }



    async function instagram() {

        await copyLink();

        alert(
            "लिंक कॉपी हो गया। अब इसे Instagram पर साझा करें।"
        );

    }



    return (

        <div
            className="
            relative
            "
        >

            <button
                onClick={() => setOpen(!open)}
                className="
    inline-flex
    items-center
    justify-center
    gap-2
    rounded-full
    border
    border-[var(--border)]
    px-6
    py-2
    font-[var(--font-hindi)]
    text-sm
    leading-none
    text-[var(--muted)]
    transition-all
    duration-300
    hover:border-[var(--gold)]
    hover:text-[var(--gold)]
  "
            >
                <span>↗</span>
                <span>Share</span>
            </button>



            {open && (

                <div
                    className="
                    absolute
                    right-0
                    z-20
                    mt-3
                    grid
                    w-52
                    gap-2
                    rounded-xl
                    border
                    border-[var(--border)]
                    bg-[var(--paper)]
                    p-3
                    shadow-lg
                    "
                >

                    <button
                        onClick={whatsapp}
                        className="
                        rounded-lg
                        px-4
                        py-2
                        text-left
                        transition
                        hover:bg-[var(--border)]
                        "
                    >
                        🟢 WhatsApp
                    </button>


                    <button
                        onClick={facebook}
                        className="
                        rounded-lg
                        px-4
                        py-2
                        text-left
                        transition
                        hover:bg-[var(--border)]
                        "
                    >
                        🔵 Facebook
                    </button>


                    <button
                        onClick={instagram}
                        className="
                        rounded-lg
                        px-4
                        py-2
                        text-left
                        transition
                        hover:bg-[var(--border)]
                        "
                    >
                        🟣 Instagram
                    </button>



                    <button
                        onClick={copyLink}
                        className="
                        rounded-lg
                        px-4
                        py-2
                        text-left
                        transition
                        hover:bg-[var(--border)]
                        "
                    >
                        🔗 {copied ? "कॉपी हुआ" : "Copy Link"}
                    </button>


                </div>

            )}

        </div>

    );
}