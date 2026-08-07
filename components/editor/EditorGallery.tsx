"use client";

import Image from "next/image";
import { useEffect, useState } from "react";


type GalleryImage = {
    name: string;
    url: string;
};



export default function EditorGallery() {

    const [images, setImages] = useState<GalleryImage[]>([]);
    const [visible, setVisible] = useState(false);



    useEffect(() => {

        async function loadImages() {

            const response = await fetch(
                "/api/editor-gallery"
            );

            const data = await response.json();

            setImages(data);


            setTimeout(() => {
                setVisible(true);
            }, 200);

        }


        loadImages();

    }, []);




    if (!images.length) {

        return (
            <section className="p-20 text-center">
                IMAGES LOADING....
            </section>
        );

    }




    return (

        <section
            className="
            mx-auto
            max-w-6xl
            px-6
            py-32
            "
        >


            <div
                className="
                mb-16
                text-center
                "
            >

                <h2
                    className="
                    font-[var(--font-hindi)]
                    text-4xl
                    font-semibold
                    text-[var(--accent)]
                    "
                >
                    कुछ यादगार क्षण
                </h2>


                <p
                    className="
                    mt-3
                    text-[var(--muted)]
                    "
                >
                    साहित्य, सेवा और जीवन यात्रा की झलकियाँ
                </p>

            </div>





            <div
                className="
                columns-1
                gap-8
                md:columns-3
                "
            >

                {images.map((image, index) => (

                    <div
                        key={image.name}
                        className={`
                        mb-8
                        break-inside-avoid

                        ${visible
                                ?
                                "opacity-100 translate-y-0"
                                :
                                "opacity-0 translate-y-10"
                            }

                        transition-all
                        duration-700
                        `}
                        style={{
                            transitionDelay:
                                `${index * 120}ms`
                        }}
                    >


                        <div
                            className={`
                            group
                            relative
                            bg-[var(--paper)]
                            p-3
                            shadow-[0_8px_25px_rgba(0,0,0,0.08)]
                            transition-all
                            duration-500

                            ${index % 2 === 0
                                    ?
                                    "rotate-[-1deg]"
                                    :
                                    "rotate-[1deg]"
                                }

                            hover:rotate-0
                            hover:-translate-y-3
                            hover:shadow-xl
                            `}
                        >

                            <Image
                                src={image.url}
                                alt="डॉ. नीलम जैन"
                                width={600}
                                height={700}
                                className="
                                w-full
                                object-cover
                                transition-transform
                                duration-500
                                group-hover:scale-[1.03]
                                "
                            />


                        </div>


                    </div>

                ))}

            </div>


        </section>

    );
}