import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-gray-900 to-gray-700 flex flex-col items-center justify-center px-4 flex-grow">
      <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-6">
        Welcome to the Next.js Blog App
      </h1>
      <p className="text-xl mb-8 text-gray-200 text-center max-w-2xl">
        Next.jsとTailwind CSSで構築されたシンプルなブログへようこそ！😊
      </p>
      <Link
        href="/blog"
        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:-translate-y-1"
      >
        ブログを見る
      </Link>
    </main>
  );
}
