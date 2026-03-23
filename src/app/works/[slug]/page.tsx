import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/data/works";
import { getCategoryLabel } from "@/lib/utils";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Badge from "@/components/ui/Badge";
import WorkCard from "@/components/sections/WorkCard";
import CtaBanner from "@/components/sections/CtaBanner";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: `${project.title} | 施工事例 | 小林建設株式会社`,
    description: project.description,
  };
}

export default function WorkDetailPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const related = projects
    .filter((p) => p.category === project.category && p.id !== project.id)
    .slice(0, 3);

  const infoRows = [
    { label: "所在地", value: project.location },
    project.structure ? { label: "構造", value: project.structure } : null,
    project.floorArea ? { label: "延床面積", value: project.floorArea } : null,
    { label: "施工期間", value: project.constructionPeriod },
    project.familyStructure ? { label: "家族構成", value: project.familyStructure } : null,
    project.reformType ? { label: "リフォーム種別", value: project.reformType } : null,
    project.completedAt ? { label: "完成", value: project.completedAt } : null,
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <>
      <Breadcrumb
        items={[
          { label: "施工事例", href: "/works" },
          { label: project.title },
        ]}
      />

      <section className="section-padding bg-background">
        <div className="container-wide max-w-4xl mx-auto">
          <div className="mb-4">
            <Badge label={getCategoryLabel(project.category)} variant={project.category} />
          </div>
          <h1 className="text-heading-2 font-serif font-bold text-text-primary">
            {project.title}
          </h1>

          {/* Gallery */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.images.map((img, i) => (
              <div
                key={i}
                className="aspect-[4/3] bg-secondary/30 rounded-lg flex items-center justify-center"
              >
                <div className="text-center text-text-secondary/50">
                  <svg className="w-8 h-8 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-xs">{img.caption || img.alt}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Description */}
          <div className="mt-8">
            <p className="text-text-secondary leading-relaxed">{project.description}</p>
          </div>

          {/* Info Table */}
          <div className="mt-8 border border-border rounded-lg overflow-hidden">
            {infoRows.map((row) => (
              <div key={row.label} className="flex border-b border-border last:border-b-0">
                <div className="w-32 md:w-40 flex-shrink-0 px-4 py-3 bg-secondary/20 font-medium text-sm text-text-primary">
                  {row.label}
                </div>
                <div className="flex-1 px-4 py-3 text-sm text-text-secondary">
                  {row.value}
                </div>
              </div>
            ))}
          </div>

          {/* Features */}
          {project.features.length > 0 && (
            <div className="mt-8">
              <h2 className="text-heading-3 font-serif font-bold text-text-primary mb-4">
                こだわりポイント
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.features.map((f, i) => (
                  <span
                    key={i}
                    className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Testimonial */}
          {project.testimonial && (
            <div className="mt-8 bg-surface p-6 rounded-lg border border-border/50">
              <h2 className="text-heading-3 font-serif font-bold text-text-primary mb-4">
                お客様の声
              </h2>
              <blockquote className="text-text-secondary leading-relaxed italic">
                &ldquo;{project.testimonial.comment}&rdquo;
              </blockquote>
              <p className="mt-3 text-sm text-text-primary font-medium">
                {project.testimonial.name}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Related works */}
      {related.length > 0 && (
        <section className="section-padding bg-surface">
          <div className="container-wide">
            <h2 className="text-heading-3 font-serif font-bold text-text-primary text-center mb-8">
              関連施工事例
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => (
                <WorkCard key={p.id} project={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBanner />
    </>
  );
}
