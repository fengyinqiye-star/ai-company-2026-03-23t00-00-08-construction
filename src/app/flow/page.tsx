import type { Metadata } from "next";
import { pageMeta } from "@/data/metadata";
import { flowSteps } from "@/data/flow-steps";
import Breadcrumb from "@/components/layout/Breadcrumb";
import SectionHeading from "@/components/ui/SectionHeading";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: pageMeta.flow.title,
  description: pageMeta.flow.description,
};

export default function FlowPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "家づくりの流れ" }]} />

      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionHeading
            title="家づくりの流れ"
            subtitle="資料請求から完成・引き渡しまで、5つのステップ"
          />

          <div className="max-w-3xl mx-auto relative">
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-primary/20" />

            <div className="space-y-12">
              {flowSteps.map((step) => (
                <div key={step.id} className="relative pl-16 md:pl-20">
                  <div className="absolute left-3 md:left-5 top-0 w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>

                  <h3 className="text-heading-3 font-serif font-bold text-text-primary">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm text-primary font-medium">
                    目安期間: {step.duration}
                  </p>
                  <p className="mt-3 text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {step.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
