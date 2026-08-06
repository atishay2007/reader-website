"use client";

import { useEffect, useRef, useState } from "react";


export default function EditorJourney() {

    const [visible, setVisible] = useState<number[]>([]);

    const refs = useRef<(HTMLElement | null)[]>([]);


    const sections = [
        {
            title: "साहित्यिक यात्रा",
            paragraphs: [
                "डॉ. नीलम जैन जैन साहित्य, दर्शन और सामाजिक क्षेत्र की एक प्रतिष्ठित हस्ती हैं। वे लेखिका, कवयित्री, संपादक और शोधकर्ता के रूप में सक्रिय रही हैं।",

                "उन्होंने एम.ए. एवं पी-एच.डी. की शिक्षा प्राप्त की। जैन दर्शन एवं रामकथा विशेषज्ञ के रूप में उन्हें राष्ट्रीय एवं अंतर्राष्ट्रीय संगोष्ठियों में सम्मानपूर्वक आमंत्रित किया गया। वे अमेरिका की State University की Visiting Scholar भी रही हैं।",

                "उन्होंने भारत एवं विदेशों में आयोजित शताधिक साहित्यिक एवं शोध संगोष्ठियों में सहभागिता की है।"
            ]
        },

        {
            title: "लेखन एवं शोध",
            paragraphs: [
                "डॉ. नीलम जैन ने 15 से अधिक पुस्तकों और अनेक महत्वपूर्ण ग्रंथों का लेखन एवं संपादन किया है। उनकी प्रमुख कृतियों में प्राकृत भाषा में रामकथा, सराक क्षेत्र, समाज निर्माण में महिलाओं का योगदान, माटी का सौरभ, जैन लोक साहित्य में नारी, संस्कृति एवं सभ्यता के उन्नायक ऋषभदेव, जैन रिलिजन एंड साइंस, वर्तमान परिप्रेक्ष्य में तीर्थंकर महावीर और मूक माटी में कला और विज्ञान शामिल हैं।",

                "उनकी रचनाएँ विश्वविद्यालयों के साहित्य शोध पाठ्यक्रमों में सम्मिलित हैं। उन्होंने 53 से अधिक पुस्तकों की प्रस्तावनाएँ लिखी हैं तथा अनेक महत्वपूर्ण ग्रंथों का संपादन किया है।"
            ]
        },

        {
            title: "संपादन एवं नेतृत्व",
            paragraphs: [
                "वे Jain Mahiladarsh की मुख्य संपादक हैं, जो कई दशकों से प्रकाशित हो रही है। वे Kund-Kund Vani की संयुक्त संपादक, Jagmagdeep Jyoti की मानद संपादक तथा Sahitya Bharati Shodh Sansthan में Research Officer रही हैं।",

                "वे Shri Deshana पत्रिका की संपादक भी रही हैं और साहित्यिक संस्थाओं में विभिन्न केंद्रीय पदों पर कार्यरत रही हैं।"
            ]
        },

        {
            title: "सामाजिक योगदान",
            paragraphs: [
                "साहित्य के साथ-साथ डॉ. नीलम जैन सामाजिक सेवा में भी सक्रिय रही हैं। उन्होंने महिला संगठनों, जैन संस्थाओं और सामाजिक अभियानों में महत्वपूर्ण भूमिका निभाई है।",

                "वे वृक्षारोपण, रक्तदान, पोलियो उपचार, शाकाहार प्रचार और अन्य सामाजिक सेवा अभियानों के आयोजन से जुड़ी रही हैं। वर्तमान में वे बंगाल, बिहार और ओडिशा के सराक समुदाय के समग्र विकास के लिए कार्य कर रही हैं।"
            ]
        },

        {
            title: "सम्मान एवं विरासत",
            paragraphs: [
                "उन्हें अनेक राष्ट्रीय सम्मान प्राप्त हुए हैं, जिनमें आचार्य विद्यासागर अवार्ड, जॉर्ज बर्नार्ड शॉ मेमोरियल ऑनर, महावीर पुरस्कार, स्वयंभू पुरस्कार और गिरनार गौरव पुरस्कार शामिल हैं।",

                "साहित्य और समाज सेवा के क्षेत्र में उनके योगदान के लिए उन्हें 1000 से अधिक मंचों पर सम्मानित किया जा चुका है।"
            ]
        }
    ];



    useEffect(() => {

        const observer = new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        const index = Number(
                            entry.target.getAttribute("data-index")
                        );


                        setVisible((prev) =>
                            prev.includes(index)
                                ? prev
                                : [...prev, index]
                        );

                    }

                });

            },
            {
                threshold: 0.15,
            }
        );


        refs.current.forEach((section) => {

            if (section) {
                observer.observe(section);
            }

        });


        return () => observer.disconnect();

    }, []);



    return (

        <div className="relative space-y-28">

            {sections.map((section, index) => (

                <section
                    key={section.title}
                    ref={(el) => {
                        refs.current[index] = el;
                    }}
                    data-index={index}
                    className={`
                    relative
                    transition-all
                    duration-1000
                    ease-out

                    ${
                        visible.includes(index)
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-16"
                    }
                    `}
                >

                    {/* chapter number */}

                    <div
                        className="
                        absolute
                        -left-4
                        -top-8
                        font-serif
                        text-7xl
                        font-semibold
                        text-[var(--border)]
                        opacity-40
                        "
                    >
                        0{index + 1}
                    </div>



                    {/* gold manuscript line */}

                    <div
                        className="
                        absolute
                        -left-6
                        top-0
                        h-full
                        w-px
                        bg-gradient-to-b
                        from-[var(--gold)]
                        via-transparent
                        "
                    />



                    <div
                        className="
                        mb-8
                        flex
                        items-center
                        justify-center
                        gap-4
                        "
                    >

                        <span
                            className="
                            h-px
                            w-10
                            bg-[var(--gold)]
                            "
                        />

                        <span
                            className="
                            text-xl
                            text-[var(--gold)]
                            animate-pulse
                            "
                        >
                            ✦
                        </span>

                        <span
                            className="
                            h-px
                            w-10
                            bg-[var(--gold)]
                            "
                        />

                    </div>



                    <h2
                        className="
                        text-center
                        font-[var(--font-hindi)]
                        text-4xl
                        font-semibold
                        text-[var(--accent)]
                        "
                    >
                        {section.title}
                    </h2>



                    <div
                        className="
                        mx-auto
                        mt-8
                        max-w-2xl
                        space-y-6
                        text-center
                        text-lg
                        leading-loose
                        text-[var(--muted)]
                        "
                    >

                        {section.paragraphs.map((para, paragraphIndex) => (

                            <p
                                key={para}
                                className={`
                                transition-all
                                duration-700

                                ${
                                    visible.includes(index)
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-5"
                                }
                                `}
                                style={{
                                    transitionDelay:
                                        `${paragraphIndex * 150}ms`
                                }}
                            >
                                {para}
                            </p>

                        ))}

                    </div>


                </section>

            ))}

        </div>

    );
}