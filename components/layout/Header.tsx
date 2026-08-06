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
className="w-64"
                        />
                    </Link>
                </div>


                <div className="
    my-3
    text-center
    text-[var(--gold)]
">
                    ───── ✦ ─────
                </div>


                <nav className="
                    flex
                    items-center
                    justify-center
                    gap-6
                    font-[var(--font-hindi)]
                    text-sm
                ">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="
                                transition-colors
                                hover:text-[var(--accent)]
                            "
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

            </div>
        </header>
    );
}