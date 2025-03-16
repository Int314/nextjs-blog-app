import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-gradient-to-br from-gray-900 to-gray-700 flex-grow flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-6">
        About This Blog
      </h1>
      <div className="text-lg md:text-xl text-gray-200 max-w-2xl space-y-4 mb-8">
        <p>
          このブログは、Next.jsとTailwind
          CSSを使って構築されたサンプルアプリケーションです。
          学習や実験のために作られており、新しい機能の追加やカスタマイズを随時行っています。
        </p>
        <p>
          あなたも是非、このアプリを参考にしてNext.jsの魅力を体験してみてください。ご意見・ご感想など大歓迎です！
        </p>
        <p>
          このアプリに関する詳細やソースコードは、GitHubリポジトリをご覧ください。
        </p>
      </div>
      <Link
        href="https://github.com/Int314/nextjs-blog-app"
        className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:-translate-y-1 mb-8"
      >
        GitHubリポジトリを見る
      </Link>
      <Link
        href="/"
        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:-translate-y-1"
      >
        ホームに戻る
      </Link>
    </main>
  );
}
