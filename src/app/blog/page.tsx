import Link from "next/link";

// ブログ記事コンポーネントを非同期関数として定義
export default async function BlogPage() {
  // ブログ記事データを取得
  // キャッシュを無効にして常に最新のデータを取得
  const res = await fetch("http://localhost:3001/api/posts", {
    cache: "no-cache",
  });
  const posts = await res.json();

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">ブログ一覧</h1>
      <ul>
        {posts.map(
          (post: {
            id: number;
            title: string;
            slug: string;
            content: string;
          }) => {
            return (
              <li key={post.id} className="mb-2">
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-blue-500 hover:underline"
                >
                  {post.title}
                </Link>
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
}
