import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gotorrent.tarunvishwakarma.dev"),
  title: "GoTorrent — The Go-Powered Terminal Torrent Client",
  description:
    "Blazing-fast, cross-platform torrent downloads from the command line. Written in Go. No GUI. No bloat.",
  keywords: [
    "torrent",
    "cli",
    "golang",
    "go",
    "downloader",
    "terminal",
    "cross-platform",
    "magnet",
    "p2p",
    "bittorrent"
  ],
  authors: [{ name: "Tarun Vishwakarma", url: "https://github.com/TarunVishwakarma1" }],
  openGraph: {
    title: "GoTorrent — The Go-Powered Terminal Torrent Client",
    description:
      "Blazing-fast, cross-platform torrent downloads from the command line.",
    type: "website",
    url: "https://gotorrent.tarunvishwakarma.dev",
    siteName: "GoTorrent",
  },
  twitter: {
    card: "summary_large_image",
    title: "GoTorrent — The Go-Powered Terminal Torrent Client",
    description: "Blazing-fast, cross-platform torrent downloads from the command line.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://gotorrent.tarunvishwakarma.dev",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
