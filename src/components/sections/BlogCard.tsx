import Link from "next/link";
import type { BlogPost } from "@/types";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <Card className="h-full transition-shadow group-hover:shadow-md">
        <div className="aspect-[16/9] bg-secondary/30 flex items-center justify-center">
          <div className="text-center text-text-secondary/50">
            <svg className="w-8 h-8 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
            <p className="text-xs">Blog</p>
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <Badge label={post.categoryLabel} />
            <span className="text-xs text-text-secondary">{formatDate(post.date)}</span>
          </div>
          <h3 className="font-medium text-text-primary group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="mt-2 text-sm text-text-secondary line-clamp-2">
            {post.excerpt}
          </p>
        </div>
      </Card>
    </Link>
  );
}
