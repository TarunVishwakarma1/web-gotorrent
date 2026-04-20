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
  ],
  openGraph: {
    title: "GoTorrent — The Go-Powered Terminal Torrent Client",
    description:
      "Blazing-fast, cross-platform torrent downloads from the command line.",
    type: "website",
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
