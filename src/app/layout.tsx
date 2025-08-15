import "~/css/globals.css";

import { type Metadata } from "next";
import { Montserrat } from "next/font/google";
import siteConfig from "../../site.config";

// export const metadata: Metadata = {
//     title: "Software Solutions for Business Problems",
//     description: "We solve problems using software that scales.",
//     icons: [{ rel: "icon", url: "/favicon.ico" }],
// };

export const metadata: Metadata = {
  title: `${siteConfig.title} | ${siteConfig.tagline}`,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  metadataBase: new URL(siteConfig.baseUrl),
  openGraph: {
    title: `${siteConfig.title} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: siteConfig.baseUrl,
    siteName: siteConfig.title,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.title} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
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
