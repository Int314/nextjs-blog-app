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
        <header className="bg-gradient-to-r from-gray-900 to-gray-700 py-4">
          <nav className="container mx-auto px-4 flex items-center justify-between">
            {/* サイトロゴ（テキストでも画像でもOK） */}
            <div className="text-2xl font-bold text-white">
              <Link href="/">MyBlog</Link>
            </div>
            {/* ナビゲーションメニュー */}
            <ul className="flex items-center space-x-6 text-lg">
              <li>
                <Link
                  href="/"
                  className="transition-colors hover:text-green-400"
                >
                  ホーム
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="transition-colors hover:text-green-400"
                >
                  ブログ
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="transition-colors hover:text-green-400"
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* ページ固有のコンテンツ */}
        {children}

        {/* フッター */}
        <footer className="bg-gradient-to-r from-gray-900 to-gray-700 text-center p-4">
          <p>&copy; {new Date().getFullYear()} My Next.js Blog App</p>
        </footer>
      </body>
    </html>
  );
}
