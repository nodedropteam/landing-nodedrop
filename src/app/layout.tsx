import "~/css/globals.css";

import { type Metadata } from "next";
import { Montserrat } from "next/font/google";

export const metadata: Metadata = {
    title: "Software Solutions for Business Problems",
    description: "We solve problems using software that scales.",
    icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Montserrat({
    subsets: ["latin"],
    variable: "--font-sans",
});

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className={`${geist.variable}`}>
            <body>
                <main>
                    {children}
                </main>
            </body>
        </html>
    );
}
