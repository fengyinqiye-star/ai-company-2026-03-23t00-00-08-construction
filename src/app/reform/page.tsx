import type { Metadata } from "next";
import { pageMeta } from "@/data/metadata";
import { reformServices } from "@/data/reform-services";
import Breadcrumb from "@/components/layout/Breadcrumb";
import SectionHeading from "@/components/ui/SectionHeading";
import ReformCard from "@/components/sections/ReformCard";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: pageMeta.reform.title,
  description: pageMeta.reform.description,
};

export default function ReformPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "リフォーム" }]} />

      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionHeading
            title="リフォームサービス"
            subtitle="キッチン・浴室・外壁塗装・耐震補強など、住まいのお悩みを解決します"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reformServices.map((service) => (
              <ReformCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
