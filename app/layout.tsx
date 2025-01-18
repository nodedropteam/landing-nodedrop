import type { Metadata } from "next";
import { Urbanist, Montserrat } from "next/font/google";
import "./globals.css";
import { client } from "@/sanity/client";
import { type SanityDocument } from "next-sanity";

const fontHeaderSans = Urbanist({
  variable: "--font-header-sans",
  subsets: ["latin"],
});

const fontBodySans = Montserrat({
  variable: "--font-body-sans",
  subsets: ["latin"],
});

const query = `*[_type == "siteSettings"][0]{
  ..., 
  "ogImage": image.asset->url 
}`;

export const metadata: Metadata = {
  title: "Loading...",
  description: "Loading...",
};

const options = { next: { revalidate: 30 } };

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteSettings = await client.fetch<SanityDocument>(query, {}, options);

  if (siteSettings) {
    metadata.title = siteSettings.siteTitle;
    metadata.description = siteSettings.siteDescription;
    // Add other metadata fields here
    // metadata.openGraph = {
    //   title: siteSettings.title,
    //   description: siteSettings.description,
    //   images: [{ url: siteSettings.ogImage }],
    // }; 
  }
  return (
    <html lang="en">
      <body
        className={`${fontBodySans.variable} ${fontHeaderSans.variable} antialiased`}
      >
        <div id="main" className="smooth-scroll">{children}</div>
      </body>
    </html>
  );
}
