import type { Metadata } from "next";
import { Noto_Serif_Devanagari, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const hindi = Noto_Serif_Devanagari({
    subsets: ["devanagari"],
    variable: "--font-hindi",
});

//const english = Source_Serif_4({
//    subsets: ["latin"],
//    variable: "--font-english",
//});

export const metadata: Metadata = {
    metadataBase: new URL("https://shreedeshna.in"),
    title: {
        default: "श्री देशना",
        template: "%s | श्री देशना",
    },
    description:
        "हिंदी साहित्य, विचार और संस्कृति का डिजिटल संग्रह।",
};


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="hi">
            <body className={`${hindi.variable} flex min-h-screen flex-col`}>

                <Header />

                <main className="flex-1">
                    {children}
                </main>

                <Footer />

                <Analytics />

            </body>
        </html>
    );
}