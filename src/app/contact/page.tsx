import type { Metadata } from "next";
import { pageMeta } from "@/data/metadata";
import { companyInfo } from "@/data/company";
import Breadcrumb from "@/components/layout/Breadcrumb";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: pageMeta.contact.title,
  description: pageMeta.contact.description,
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "資料請求・お問い合わせ" }]} />

      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionHeading
            title="資料請求・お問い合わせ"
            subtitle="お気軽にご相談ください。3営業日以内にご連絡いたします。"
          />

          <div className="max-w-2xl mx-auto">
            <div className="mb-8 p-4 bg-surface border border-border/50 rounded-lg text-sm text-text-secondary text-center">
              <p>
                お急ぎの方はお電話でもお問い合わせいただけます。
              </p>
              <p className="mt-2 text-lg font-bold text-primary">
                {companyInfo.phone}
              </p>
              <p className="text-xs mt-1">
                {companyInfo.businessHours}（{companyInfo.holidays}定休）
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
