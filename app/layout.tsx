import type { Metadata } from "next";
import { Noto_Serif_Devanagari } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const hindi = Noto_Serif_Devanagari({
    subsets: ["devanagari"],
    variable: "--font-hindi",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://shreedeshna.in"),

    title: {
        default: "श्री देशना | हिंदी साहित्य एवं संस्कृति संग्रह",
        template: "%s | श्री देशना",
    },

    description:
        "श्री देशना हिंदी साहित्य, जैन दर्शन, संस्कृति, विचार और आध्यात्मिक लेखों का डिजिटल संग्रह है।",

    keywords: [
        "श्री देशना",
        "हिंदी साहित्य",
        "जैन साहित्य",
        "जैन दर्शन",
        "संस्कृति",
        "आध्यात्म",
        "हिंदी लेख",
    ],

    openGraph: {
        title: "श्री देशना",
        description:
            "हिंदी साहित्य, विचार और संस्कृति का डिजिटल संग्रह।",
        url: "https://shreedeshna.in",
        siteName: "श्री देशना",
        locale: "hi_IN",
        type: "website",
    },
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