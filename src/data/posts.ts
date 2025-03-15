// 投稿データの型定義
export interface Post {
  id: number;
  title: string;
  slug: string;
  content: string;
}

// サンプルのブログ記事データ
export const posts: Post[] = [
  {
    id: 1,
    title: "Hello World!",
    slug: "hello-world",
    content:
      "Hello World! この投稿は、ブログアプリケーションの最初の投稿です。",
  },
  {
    id: 2,
    title: "Next.jsの魅力と詳細",
    slug: "nextjs-details",
    content:
      "Next.jsは、サーバーサイドレンダリング、静的サイト生成、動的ルーティングなど、最新のウェブ開発に必要な機能を豊富に備えています。パフォーマンスやSEO対策に優れ、開発の効率も大幅に向上するため、多くの開発者から支持されています。",
  },
  {
    id: 3,
    title: "Next.js勉強記録",
    slug: "nextjs-study",
    content:
      "このブログアプリは、Next.jsとTailwind CSSを使って作成しています。実際に動作するアプリケーションを構築しながら、Next.jsの機能や設計思想を学ぶ過程を記録していきます。",
  },
];
