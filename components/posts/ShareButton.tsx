"use client";

import { useState } from "react";
import {
    FaWhatsapp,
    FaFacebook,
    FaLink,
} from "react-icons/fa";


export default function ShareButton({
    title,
    url,
    label = "Share",
}: {
    title: string;
    url?: string;
    label?: string;
}) {

    const [open, setOpen] = useState(false);
    const [copied, setCopied] = useState(false);


    const shareUrl =
        url ||
        (typeof window !== "undefined"
            ? window.location.href
            : "");





    async function copyLink() {

        try {

            await navigator.clipboard.writeText(shareUrl);

            setCopied(true);

            setTimeout(() => {
                setCopied(false);
            }, 2000);

        } catch {
            console.error("Copy failed");
        }

    }





    async function nativeShare() {

        try {

            await navigator.share?.({
                title,
                text: title,
                url: shareUrl,
            });

        } catch {
            // user cancelled share
        }

    }





    function whatsapp() {

        window.open(
            `https://wa.me/?text=${encodeURIComponent(
                `${title}\n${shareUrl}`
            )}`,
            "_blank"
        );

    }





    function facebook() {

        window.open(
            `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                shareUrl
            )}`,
            "_blank"
        );

    }





    function openShare() {

        if (
            typeof navigator !== "undefined" &&
            "share" in navigator
        ) {

            nativeShare();

        } else {

            setOpen(!open);

        }

    }





    return (

        <div
            className="
            relative
            "
        >

            <button
                onClick={openShare}
                className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-full
                border
                border-[var(--border)]
                px-6
                py-2.5
                font-[var(--font-hindi)]
                text-sm
                text-[var(--muted)]
                transition-all
                duration-300
                hover:border-[var(--gold)]
                hover:text-[var(--gold)]
                "
            >

                <span>
                    ↗
                </span>

                <span>
                    {label}
                </span>

            </button>





            {open && (

                <div
    className="
    absolute
    right-0
    top-full
    z-[100]
    mt-3
    w-56
    rounded-xl
    border
    border-[var(--border)]
    bg-[var(--paper)]
    p-3
    shadow-xl
    "
>


                    <button
                        onClick={whatsapp}
                        className="
                        flex
                        w-full
                        items-center
                        gap-3
                        rounded-lg
                        px-4
                        py-3
                        text-left
                        transition
                        hover:bg-[var(--border)]
                        "
                    >

                        <FaWhatsapp
                            className="
                            text-xl
                            text-green-500
                            "
                        />

                        WhatsApp

                    </button>





                    <button
                        onClick={facebook}
                        className="
                        flex
                        w-full
                        items-center
                        gap-3
                        rounded-lg
                        px-4
                        py-3
                        text-left
                        transition
                        hover:bg-[var(--border)]
                        "
                    >

                        <FaFacebook
                            className="
                            text-xl
                            text-blue-600
                            "
                        />

                        Facebook

                    </button>





                    <button
                        onClick={copyLink}
                        className="
                        flex
                        w-full
                        items-center
                        gap-3
                        rounded-lg
                        px-4
                        py-3
                        text-left
                        transition
                        hover:bg-[var(--border)]
                        "
                    >

                        <FaLink
                            className="
                            text-lg
                            "
                        />

                        {copied
                            ? "Copied ✓"
                            : "Copy Link"
                        }

                    </button>


                </div>

            )}

        </div>

    );
}