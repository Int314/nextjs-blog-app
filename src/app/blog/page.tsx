import Link from "next/link";
import { posts } from "../../data/posts";

export default function BlogPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">ブログ一覧</h1>
      <ul>
        {posts.map((post) => {
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
        })}
      </ul>
    </div>
  );
}
