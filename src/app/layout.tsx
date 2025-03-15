import Link from "next/link";
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
  title: "Next.js Blog App",
  description: "A simple blog built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        {/* ヘッダー */}
        <header className="bg-gray-800 text-white p-4">
          <nav className="container mx-auto flex space-x-4">
            <Link href="/">ホーム</Link>
            <Link href="/blog">ブログ</Link>
          </nav>
        </header>

        {/* メインコンテンツ */}
        {children}

        {/* フッター */}
        <footer className="bg-gray-800 text-center p-4">
          <p>&copy; {new Date().getFullYear()} My Next.js Blog App</p>
        </footer>
      </body>
    </html>
  );
}
