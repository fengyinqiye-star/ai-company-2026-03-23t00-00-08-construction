import type { Metadata } from "next";
import { pageMeta } from "@/data/metadata";
import Breadcrumb from "@/components/layout/Breadcrumb";
import SectionHeading from "@/components/ui/SectionHeading";
import CtaBanner from "@/components/sections/CtaBanner";
import FAQPageClient from "./FAQPageClient";

export const metadata: Metadata = {
  title: pageMeta.faq.title,
  description: pageMeta.faq.description,
};

export default function FAQPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "よくある質問" }]} />

      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionHeading
            title="よくある質問"
            subtitle="お客様からよくいただくご質問をまとめました"
          />

          <FAQPageClient />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
