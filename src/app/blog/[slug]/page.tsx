import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog-posts";
import { formatDate } from "@/lib/utils";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import CtaBanner from "@/components/sections/CtaBanner";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | ブログ | 小林建設株式会社`,
    description: post.excerpt,
  };
}

export default function BlogDetailPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <>
      <Breadcrumb
        items={[
          { label: "ブログ・コラム", href: "/blog" },
          { label: post.title },
        ]}
      />

      <article className="section-padding bg-background">
        <div className="container-wide max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Badge label={post.categoryLabel} />
            <span className="text-sm text-text-secondary">{formatDate(post.date)}</span>
          </div>

          <h1 className="text-heading-2 font-serif font-bold text-text-primary">
            {post.title}
          </h1>

          {post.tags && (
            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block px-2 py-0.5 text-xs bg-secondary/30 text-text-secondary rounded"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          <div
            className="mt-8 prose prose-sm max-w-none text-text-secondary leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-12 text-center">
            <Button href="/blog" variant="outline">
              ブログ一覧に戻る
            </Button>
          </div>
        </div>
      </article>

      <CtaBanner />
    </>
  );
}
