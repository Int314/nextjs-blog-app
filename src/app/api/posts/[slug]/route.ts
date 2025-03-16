import { NextResponse } from "next/server";
import { posts } from "../../../../data/posts";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;
  const post = posts.find((post) => post.slug === slug);

  if (!post) {
    return NextResponse.json(
      { error: "記事が見つかりません" },
      { status: 404 }
    );
  }

  return NextResponse.json(post);
}
