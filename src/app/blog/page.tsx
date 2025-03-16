import Link from "next/link";

export default async function BlogPage() {
  // 最新のブログ記事データを取得（キャッシュ無効）
  const res = await fetch("http://localhost:3001/api/posts", {
    cache: "no-cache",
  });
  const posts = await res.json();

  return (
    <main className="bg-gradient-to-br from-gray-900 to-gray-700 flex-grow py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          ブログ一覧
        </h1>
        {/* グリッドレイアウト：画面サイズに応じて2列～3列に切り替え */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map(
            (post: {
              id: number;
              title: string;
              slug: string;
              content: string;
            }) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="block p-6 rounded-lg bg-white/10 backdrop-blur-md border border-white/10 transition-all duration-300 hover:bg-white/20 hover:scale-105"
              >
                <h2 className="text-xl font-semibold mb-2 text-white">
                  {post.title}
                </h2>
                <p className="text-gray-200 line-clamp-3">{post.content}</p>
              </Link>
            )
          )}
        </div>
      </div>
    </main>
  );
}
