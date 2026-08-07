import Image from "next/image";
import Link from "next/link";
const links = [
    { href: "/", label: "Home" },
    { href: "/articles", label: "Articles" },
    { href: "/editorial", label: "Editorial" },
    { href: "/archive", label: "Archive" },
    { href: "/gallery", label: "Gallery" },
    { href: "/dr-neelam-jain", label: "About Me" },
];

export default function Header() {
    return (
        <header className="
            border-b
            border-[var(--border)]
            bg-[var(--paper)]
        ">
            <div className="
mx-auto
max-w-6xl
px-4
py-5
">

                <div className="flex justify-center">
                    <Link href="/">
                        <Image
                            src="/logo/logo.png"
                            alt="श्री देशना"
                            width={870}
                            height={255}
                            priority
                            className="
w-52
sm:w-64
"                        />
                    </Link>
                </div>


                <div className="
    my-3
    text-center
    text-[var(--gold)]
">
                    ───── ✦ ─────
                </div>

                <nav
                    className="
    flex
    flex-wrap
    items-center
    justify-center
    gap-x-5
    gap-y-3
    px-4
    font-[var(--font-hindi)]
    text-sm
    "
                >
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="
            group
            relative
            transition-all
            duration-300
            hover:text-[var(--accent)]
            "
                        >
                            {link.label}

                            <span
                                className="
                absolute
                -bottom-2
                left-0
                h-px
                w-0
                bg-[var(--gold)]
                transition-all
                duration-300
                group-hover:w-full
                "
                            />
                        </Link>
                    ))}
                </nav>

            </div>
        </header>
    );
}