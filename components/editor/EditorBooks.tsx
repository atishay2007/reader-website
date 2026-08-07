"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { editorBooks as bookMeta } from "@/data/editorBooks";


type Book = {
    name: string;
    url: string;
};



export default function EditorBooks() {

    const [books, setBooks] = useState<Book[]>([]);
    const [visible, setVisible] = useState(false);


    useEffect(() => {

        fetch("/api/editor-books")
            .then(res => res.json())
            .then(data => {
                setBooks(data);
            });


        const timer = setTimeout(() => {
            setVisible(true);
        }, 200);


        return () => clearTimeout(timer);

    }, []);



    return (

        <section
            className="
            py-10
            "
        >

            <h2
                className="
                mb-10
                text-center
                font-[var(--font-hindi)]
                text-3xl
                font-semibold
                "
            >
                प्रकाशित
                <br />
                पुस्तकें
            </h2>



            <div
                className="
                grid
                grid-cols-1
                gap-10
                "
            >

                {books.map((book, index) => {


                    const meta =
                        bookMeta.find(
                            item =>
                                item.image === book.name
                        )
                        ??
                        bookMeta[index];



                    const featured =
                        index < 2;



                    const content = (

                        <div
                            className={`
                            group
                            mx-auto
                            w-full
                            max-w-[230px]
                            cursor-pointer
                            transition-all
                            duration-700

                            ${visible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-12"
                                }

                            ${featured
                                    ? "scale-105"
                                    : ""
                                }
                            `}
                            style={{
                                transitionDelay:
                                    `${index * 120}ms`
                            }}
                        >


                            <div
                                className={`
                                relative
                                overflow-hidden
                                bg-[var(--paper)]
                                transition-all
                                duration-500

                                p-1

                                ${featured
                                        ?
                                        `
                                        border-2
                                        border-[#b8862c]
                                        shadow-[0_0_35px_rgba(184,134,44,0.25)]
                                        `
                                        :
                                        `
                                        border
                                        border-[#d8cbb5]
                                        shadow-[0_4px_15px_rgba(0,0,0,0.06)]
                                        `
                                    }

                                group-hover:-translate-y-3
                                group-hover:shadow-2xl
                                `}
                            >


                                <Image
                                    src={book.url}
                                    alt={meta?.title ?? book.name}
                                    width={300}
                                    height={450}
                                    className="
                                    mx-auto
                                    h-auto
                                    w-full
                                    object-contain
                                    transition-transform
                                    duration-500
                                    group-hover:scale-105
                                    "
                                />



                                {featured && (

                                    <div
                                        className="
                                        absolute
                                        bottom-3
                                        left-1/2
                                        -translate-x-1/2
                                        translate-y-8
                                        whitespace-nowrap
                                        rounded-full
                                        border
                                        border-black/20
                                        bg-gradient-to-r
                                        from-[#ffb000]
                                        to-[#ff9900]
                                        px-5
                                        py-2
                                        text-xs
                                        font-semibold
                                        text-black
                                        opacity-0
                                        shadow-lg
                                        transition-all
                                        duration-500
                                        group-hover:translate-y-0
                                        group-hover:opacity-100
                                        "
                                    >
                                        Amazon पर खरीदें →
                                    </div>

                                )}

                            </div>



                            {meta?.title && (

                                <h3
                                    className="
                                    mt-3
                                    text-center
                                    font-[var(--font-hindi)]
                                    text-sm
                                    font-semibold
                                    "
                                >
                                    {meta.title}
                                </h3>

                            )}


                        </div>

                    );



                    if (
                        featured &&
                        meta?.buyLink
                    ) {

                        return (
                            <Link
                                key={book.name}
                                href={meta.buyLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {content}
                            </Link>
                        );

                    }



                    return (
                        <div key={book.name}>
                            {content}
                        </div>
                    );


                })}

            </div>


        </section>

    );
}