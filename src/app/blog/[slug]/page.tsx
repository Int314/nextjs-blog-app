import { notFound } from "next/navigation";
import { posts } from "../../../data/posts";

export default function PostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = posts.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
