import type { Metadata } from "next";
import { pageMeta } from "@/data/metadata";
import { features } from "@/data/features";
import Breadcrumb from "@/components/layout/Breadcrumb";
import SectionHeading from "@/components/ui/SectionHeading";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: pageMeta.features.title,
  description: pageMeta.features.description,
};

export default function FeaturesPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "家づくりの特徴" }]} />

      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionHeading
            title="家づくりの特徴"
            subtitle="小林建設がこだわる4つのポイント"
          />
        </div>
      </section>

      {features.map((feature, index) => (
        <section
          key={feature.id}
          id={feature.slug}
          className={`section-padding ${index % 2 === 0 ? "bg-surface" : "bg-background"}`}
        >
          <div className="container-wide">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/2">
                  <div className="aspect-[4/3] bg-secondary/30 rounded-lg flex items-center justify-center">
                    <div className="text-center text-text-secondary/50">
                      <svg
                        className="w-12 h-12 mx-auto mb-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <p className="text-sm">{feature.title}</p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <h2 className="text-heading-3 font-serif font-bold text-text-primary">
                    {feature.title}
                  </h2>
                  <p className="mt-1 text-primary font-medium">{feature.tagline}</p>
                  <p className="mt-4 text-text-secondary leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="mt-6 space-y-2">
                    {feature.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                        <span className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <CtaBanner />
    </>
  );
}
