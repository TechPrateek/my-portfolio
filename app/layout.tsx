import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/motion/SmoothScroll";
import CustomCursor from "@/components/motion/CustomCursor";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prateek Yadav — Software Developer",
  description:
    "Portfolio of Prateek Yadav — software developer focused on problem solving, data structures, algorithms, and building digital products.",
  keywords: [
    "Prateek Yadav",
    "Software Developer",
    "Full Stack Engineer",
    "B.Tech Computer Science",
    "LeetCode",
    "Codolio",
    "Competitive Programming",
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "Prisma",
    "MechOnWay",
    "PhysioConnect",
  ],
  authors: [{ name: "Prateek Yadav" }],
  creator: "Prateek Yadav",
  metadataBase: new URL("https://prateekyadav.dev"),
  openGraph: {
    title: "Prateek Yadav — Software Developer",
    description:
      "Portfolio of Prateek Yadav — software developer focused on problem solving, data structures, algorithms, and building digital products.",
    url: "https://prateekyadav.dev",
    siteName: "Prateek Yadav Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prateek Yadav — Software Developer",
    description:
      "Portfolio of Prateek Yadav — software developer focused on problem solving, data structures, algorithms, and building digital products.",
    creator: "@TechPrateek",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#080808",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}>
      <body className="antialiased selection:bg-sky-500/30 selection:text-white bg-noise">
        <ThemeProvider>
          <SmoothScroll>
            <CustomCursor />
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
