import Image from "next/image";
import Link from "next/link";

const links = [
    { href: "/", label: "Home" },
    { href: "/articles", label: "Articles" },
    { href: "/editorial", label: "Editorial" },
    { href: "/archive", label: "Archive" },
    { href: "/gallery", label: "Gallery" },
    { href: "/dr-neelam-jain", label: "About Me" },
    { href: "/admin", label: "Admin" },
];


export default function Footer() {
    return (
        <footer
            className="
            border-t
            border-[var(--border)]
            bg-[var(--paper)]
            "
        >

            <div
                className="
                mx-auto
                max-w-7xl
                px-8
                py-12
                font-[var(--font-hindi)]
                "
            >

                <div
                    className="
                    grid
                    gap-12
                    md:grid-cols-3
                    "
                >

                    {/* Contact */}

                    <div>

                        <h2 className="text-2xl font-semibold">
                            संपर्क करें
                        </h2>


                        <div className="mt-6 flex gap-5">

                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.2559211923353!2d73.9442215251768!3d18.51733366927325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3a21aee1237%3A0x8138e86f7e378d62!2sTower%2058%2C%20Future%20Towers!5e0!3m2!1sen!2sin!4v1785938395595!5m2!1sen!2sin"
                                className="
                                h-24
                                w-32
                                rounded-sm
                                "
                                loading="lazy"
                            />


                            <p
                                className="
                                text-sm
                                leading-relaxed
                                text-[var(--muted)]
                                "
                            >
                                Pune,
                                <br />
                                Maharashtra
                                <br />
                                411028
                            </p>

                        </div>


                        <div
                            className="
                            mt-5
                            space-y-2
                            text-sm
                            text-[var(--muted)]
                            "
                        >
                            <p>
                                <br />
                                editor@shreedeshna.in
                            </p>


                        </div>

                    </div>



                    {/* Brand */}

                    <div
                        className="
                        flex
                        flex-col
                        items-center
                        text-center
                        "
                    >

                        <Image
                            src="/logo/logo.png"
                            alt="श्री देशना"
                            width={260}
                            height={90}
                            className="w-64"
                        />


                        <p
                            className="
                            mt-5
                            max-w-xs
                            text-sm
                            leading-relaxed
                            text-[var(--muted)]
                            "
                        >
                            हिंदी साहित्य, जैन दर्शन,
                            संस्कृति और सामाजिक चिंतन
                            का डिजिटल संग्रह।
                        </p>


                        <Image
                            src="/logo/emblem.png"
                            alt="श्री देशना चिन्ह"
                            width={55}
                            height={55}
                            className="mt-5 opacity-80"
                        />

                    </div>



                    {/* Menu */}

                    <div>

                        <h2 className="text-2xl font-semibold">
                            Menu
                        </h2>


                        <div className="mt-6 space-y-3">

                            {links.map((link) => (

                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="
            group
            flex
            items-center
            gap-2
            text-sm
            text-[var(--muted)]
            transition-all
            duration-300
            hover:text-[var(--gold)]
            "
                                >
                                    <span
                                        className="
                h-px
                w-0
                bg-[var(--gold)]
                transition-all
                duration-300
                group-hover:w-4
                "
                                    />

                                    {link.label}

                                </Link>

                            ))}

                        </div>
                    </div>


                </div>


                <div
                    className="
                    mt-10
                    text-center
                    text-[var(--gold)]
                    "
                >
                    ───── ✦ ─────
                </div>


                <p
                    className="
                    mt-5
                    text-center
                    text-sm
                    text-[var(--muted)]
                    "
                >
                    © {new Date().getFullYear()} श्री देशना. सर्वाधिकार सुरक्षित।
                </p>
                <p
                    className="
                    mt-5
                    text-center
                    text-sm
                    text-[var(--muted)]
                    "
                >
                    Designed and Developed by Atishay J.
                </p>


            </div>

        </footer>
    );
}