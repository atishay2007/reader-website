import Image from "next/image";
import Link from "next/link";

const links = [
    { href: "/", label: "Home" },
    { href: "/articles", label: "Articles" },
    { href: "/about", label: "About" },
    { href: "/search", label: "Search" },
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
                px-6
                py-8
            ">

                <div className="flex justify-center">
                    <Link href="/">
                        <Image
                            src="/logo/logo.png"
                            alt="श्री देशना"
                            width={870}
                            height={255}
                            priority
                            className="w-80"
                        />
                    </Link>
                </div>


                <div className="
                    my-6
                    text-center
                    text-[var(--gold)]
                ">
                    ───── ✦ ─────
                </div>


                <nav className="
                    flex
                    items-center
                    justify-center
                    gap-8
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

                    <Link
                        href="/admin"
                        className="
                            text-[var(--muted)]
                            hover:text-[var(--accent)]
                        "
                    >
                        Admin
                    </Link>
                </nav>

            </div>
        </header>
    );
}