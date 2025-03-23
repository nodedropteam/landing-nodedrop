import type { Metadata } from "next";
import { Inter, Urbanist } from "next/font/google";
import SmoothScrollProvider from "@/components/smooth-scroll";
import "./globals.css";

export const metadata: Metadata = {
  title: "Freelance website design and development for businesses",
  description: "24/7, 365 Support for development and design of you businesses software.",
};

const fontInter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800", "900"] });
const fontUrbanist = Urbanist({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800", "900"], variable: '--font-urbanist' });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SmoothScrollProvider>
      <html lang="en">
        <body
          className={`${fontInter.className} ${fontUrbanist.variable} antialiased`}
        >
          <div id="main" className="smooth-scroll w-full content-grid">{children}</div>
        </body>
      </html>
    </SmoothScrollProvider>
  );
}
