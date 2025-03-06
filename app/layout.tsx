import type { Metadata } from "next";
import { Inter, Urbanist } from "next/font/google";
import SmoothScrollProvider from "@/components/smooth-scroll";
import "./globals.css";

export const metadata: Metadata = {
  title: "NodeDrop — Transform your online presence",
  description: "Built with NextJS, by the NodeDrop team.",
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
