import { projects } from "@/data/works";
import SectionHeading from "@/components/ui/SectionHeading";

export default function TestimonialTeaser() {
  const testimonials = projects
    .filter((p) => p.testimonial)
    .slice(0, 3);

  return (
    <section className="section-padding bg-secondary/20">
      <div className="container-wide">
        <SectionHeading
          title="お客様の声"
          subtitle="小林建設で家を建てたお客様からいただいた声です"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((project) => (
            <div
              key={project.id}
              className="bg-surface rounded-xl p-6 border border-border/30"
            >
              <blockquote className="text-text-secondary leading-relaxed text-sm">
                &ldquo;{project.testimonial.comment}&rdquo;
              </blockquote>
              <div className="mt-4 pt-4 border-t border-border/30">
                <p className="font-medium text-text-primary text-sm">
                  {project.testimonial.name}
                </p>
                <p className="text-xs text-text-secondary mt-0.5">
                  {project.location} | {project.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
