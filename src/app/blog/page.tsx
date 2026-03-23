import type { Metadata } from "next";
import { pageMeta } from "@/data/metadata";
import { blogPosts } from "@/data/blog-posts";
import Breadcrumb from "@/components/layout/Breadcrumb";
import SectionHeading from "@/components/ui/SectionHeading";
import BlogCard from "@/components/sections/BlogCard";

export const metadata: Metadata = {
  title: pageMeta.blog.title,
  description: pageMeta.blog.description,
};

export default function BlogPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "ブログ・コラム" }]} />

      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionHeading
            title="ブログ・コラム"
            subtitle="家づくりのヒント、リフォーム事例、スタッフコラムなど"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
