import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-dm-sans",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "http://localhost:3000";

/** Bumps when you change the share image so iMessage / Slack refresh their preview cache. */
const shareImageCacheBust =
  process.env.NEXT_PUBLIC_OG_IMAGE_CACHE_BUST?.trim() || "3";
const shareImagePath = `/og-bellnob-clubhouse-1200x630.png?v=${encodeURIComponent(shareImageCacheBust)}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Bell Nob Golf Course — Newsletter",
    template: "%s | Bell Nob Golf Course",
  },
  description:
    "Course updates, tournaments, and agronomy news from Bell Nob Golf Course in Gillette, Wyoming.",
  applicationName: "Bell Nob Golf Course",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Bell Nob Golf Course",
    title: "Bell Nob Golf Course — Newsletter",
    description:
      "Course updates, tournaments, and agronomy news from Bell Nob Golf Course, Gillette, WY.",
    images: [
      {
        url: shareImagePath,
        width: 1200,
        height: 630,
        alt: "Bell Nob Golf Course clubhouse",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bell Nob Golf Course — Newsletter",
    description:
      "Course updates, tournaments, and agronomy news from Bell Nob Golf Course.",
    images: [shareImagePath],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full scroll-smooth", dmSans.variable, cormorant.variable)}
    >
      <body className="min-h-full antialiased">
        {children}
      </body>
    </html>
  );
}
