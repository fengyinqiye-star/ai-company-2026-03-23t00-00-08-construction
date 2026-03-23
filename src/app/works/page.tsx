import type { Metadata } from "next";
import { pageMeta } from "@/data/metadata";
import Breadcrumb from "@/components/layout/Breadcrumb";
import SectionHeading from "@/components/ui/SectionHeading";
import CtaBanner from "@/components/sections/CtaBanner";
import WorksPageClient from "./WorksPageClient";

export const metadata: Metadata = {
  title: pageMeta.works.title,
  description: pageMeta.works.description,
};

export default function WorksPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "施工事例" }]} />

      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionHeading
            title="施工事例"
            subtitle="新築注文住宅・リフォームの施工実績をご紹介します"
          />

          <WorksPageClient />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
