import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";

import "./globals.css";

import { cn } from "@/lib/utils";
import EdgeOverlay from "@/components/ui/EdgeOverlay";

import { StateProvider } from "./provider/StateProvider";
import Nav from "@/components/Nav/Nav";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Maulanatazqi",
  description:
    "Zero-to-market veteran, with 5 years of experience in startups and agencies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* <script
          crossOrigin="anonymous"
          src="//unpkg.com/react-scan/dist/auto.global.js"
        /> */}
      </head>
      <body className={cn("font-sans antialiased", fontSans.variable)}>
        <StateProvider>
          <Nav />
          <div className="fixed left-0 top-0 z-50 h-[80px] w-screen">
            <div className="mask-to-t absolute left-0 top-0 h-full w-full backdrop-blur-md" />
            <div className="mask-to-t absolute left-0 top-0 h-full w-full backdrop-blur-md" />
            <div className="mask-to-t absolute left-0 top-0 h-full w-full backdrop-blur-md" />
          </div>
          <div className="pointer-events-none fixed bottom-0 left-0 z-50 h-[80px] w-screen">
            <div className="mask-to-b absolute left-0 top-0 h-full w-full backdrop-blur-md" />
            <div className="mask-to-b absolute left-0 top-0 h-full w-full backdrop-blur-md" />
          </div>
          <div
            vaul-drawer-wrapper=""
            className="flex min-h-screen justify-center bg-white"
          >
            {/* <EdgeOverlay top={true} /> */}
            {children}
            {/* <EdgeOverlay top={false} /> */}
          </div>
        </StateProvider>
      </body>
    </html>
  );
}
