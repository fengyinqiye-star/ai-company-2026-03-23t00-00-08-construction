import Link from "next/link";
import type { Project } from "@/types";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { getCategoryLabel } from "@/lib/utils";

interface WorkCardProps {
  project: Project;
}

export default function WorkCard({ project }: WorkCardProps) {
  return (
    <Link href={`/works/${project.slug}`} className="group block">
      <Card className="h-full transition-shadow group-hover:shadow-md">
        {/* Thumbnail placeholder */}
        <div className="aspect-[4/3] bg-secondary/40 flex items-center justify-center relative overflow-hidden">
          <div className="text-center text-text-secondary/60">
            <svg className="w-10 h-10 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
            </svg>
            <p className="text-xs">{project.title}</p>
          </div>
          <div className="absolute top-3 left-3">
            <Badge
              label={getCategoryLabel(project.category)}
              variant={project.category}
            />
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-medium text-text-primary group-hover:text-primary transition-colors line-clamp-2">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-text-secondary">{project.location}</p>
          {project.constructionPeriod && (
            <p className="mt-0.5 text-xs text-text-secondary">
              工期: {project.constructionPeriod}
            </p>
          )}
        </div>
      </Card>
    </Link>
  );
}
