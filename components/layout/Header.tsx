import Image from "next/image";
import Link from "next/link";

const links = [
    { href: "/", label: "Home" },
    { href: "/archive", label: "Archive" },
    { href: "/about", label: "About" },
    { href: "/search", label: "Search" },
];

export default function Header() {
    return (
        <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/95 backdrop-blur">
            <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">

                <Link href="/" className="flex items-center">
                    <Image
                        src="/logo/logo.png"
                        alt="श्री देशना"
                        width={870}
                        height={255}
                        priority
                        className="h-auto w-72" />
                </Link>

                <nav className="hidden items-center gap-6 md:flex">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="transition-colors hover:text-[var(--accent)]"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <Link href="/about">
                    <Image
                        src="/logo/emblem.png"
                        alt="Foundation emblem"
                        width={56}
                        height={56}
                        className="h-20 w-20"
                    />

                </Link>

            </div>
        </header>
    );
}