import Link from "next/link";
import { notFound } from "next/navigation";

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  // ブログ記事データを取得
  const res = await fetch(`http://localhost:3001/api/posts/${params.slug}`, {
    cache: "no-cache",
  });

  // エラーレスポンスの場合は404エラーを表示
  if (res.status === 404) {
    notFound();
  }

  const post = await res.json();
  if (!post) {
    notFound();
  }

  return (
    <main className="bg-gradient-to-br from-gray-900 to-gray-700 flex-grow px-4 py-12">
      <div className="container mx-auto max-w-3xl">
        <article className="p-6 rounded-lg bg-white/10 backdrop-blur-md border border-white/10">
          <h1 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            {post.title}
          </h1>
          <div className="text-gray-200 leading-relaxed">{post.content}</div>
        </article>

        <div className="mt-8 text-center">
          <Link
            href="/blog"
            className="inline-block px-8 py-4 rounded-full bg-green-500 text-white font-semibold shadow-lg transition-all duration-300 hover:bg-green-600 hover:-translate-y-1"
          >
            ブログ一覧へ戻る
          </Link>
        </div>
      </div>
    </main>
  );
}
