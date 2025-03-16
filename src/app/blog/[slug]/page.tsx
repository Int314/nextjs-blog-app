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
    <div className="bg-gradient-to-br from-gray-900 to-gray-700 container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
