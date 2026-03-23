import type { Metadata } from "next";
import { pageMeta } from "@/data/metadata";
import { companyInfo, companyHistory } from "@/data/company";
import { staff } from "@/data/staff";
import Breadcrumb from "@/components/layout/Breadcrumb";
import SectionHeading from "@/components/ui/SectionHeading";
import Timeline from "@/components/ui/Timeline";
import GoogleMap from "@/components/ui/GoogleMap";
import StaffCard from "@/components/sections/StaffCard";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: pageMeta.about.title,
  description: pageMeta.about.description,
};

export default function AboutPage() {
  const representative = staff.find((s) => s.isRepresentative);
  const otherStaff = staff.filter((s) => !s.isRepresentative);

  const companyRows = [
    { label: "会社名", value: companyInfo.name },
    { label: "代表者", value: companyInfo.representative },
    { label: "創業", value: companyInfo.established },
    { label: "所在地", value: companyInfo.address },
    { label: "電話番号", value: companyInfo.phone },
    { label: "FAX", value: companyInfo.fax },
    { label: "営業時間", value: `${companyInfo.businessHours}（${companyInfo.holidays}定休）` },
    { label: "従業員数", value: companyInfo.employees },
    { label: "事業内容", value: companyInfo.business.join("、") },
    { label: "建設業許可", value: companyInfo.constructionPermit },
    { label: "資格・登録", value: companyInfo.licenses.join("\n") },
    { label: "施工対応エリア", value: `${companyInfo.serviceArea}\n（${companyInfo.serviceAreaCities.join("、")}）` },
  ];

  return (
    <>
      <Breadcrumb items={[{ label: "会社概要" }]} />

      {/* Representative greeting */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionHeading title="代表挨拶" />
          {representative && (
            <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-8 items-center md:items-start">
              <div className="w-40 h-40 rounded-full bg-secondary/40 flex-shrink-0 flex items-center justify-center">
                <svg className="w-16 h-16 text-primary/30" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <p className="text-text-secondary leading-relaxed whitespace-pre-line">
                  {representative.message}
                </p>
                <div className="mt-4">
                  <p className="font-serif font-bold text-text-primary">
                    {representative.role} {representative.name}
                  </p>
                  {representative.qualifications && (
                    <p className="text-sm text-text-secondary mt-1">
                      {representative.qualifications.join(" / ")}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Staff */}
      <section className="section-padding bg-surface">
        <div className="container-wide">
          <SectionHeading
            title="職人紹介"
            subtitle="経験豊富な職人たちが、心を込めて施工します"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherStaff.map((s) => (
              <StaffCard key={s.id} staff={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Company info table */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionHeading title="会社概要" />
          <div className="max-w-3xl mx-auto border border-border rounded-lg overflow-hidden">
            {companyRows.map((row) => (
              <div
                key={row.label}
                className="flex border-b border-border last:border-b-0"
              >
                <div className="w-36 md:w-44 flex-shrink-0 px-4 py-3 bg-secondary/20 font-medium text-sm text-text-primary">
                  {row.label}
                </div>
                <div className="flex-1 px-4 py-3 text-sm text-text-secondary whitespace-pre-line">
                  {row.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="section-padding bg-surface">
        <div className="container-wide">
          <SectionHeading title="沿革" />
          <div className="max-w-2xl mx-auto">
            <Timeline
              items={companyHistory.map((h) => ({
                title: `${h.year}年`,
                content: h.event,
              }))}
            />
          </div>
        </div>
      </section>

      {/* Access */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionHeading title="アクセス" />
          <div className="max-w-3xl mx-auto space-y-4">
            <GoogleMap embedUrl={companyInfo.mapEmbedUrl} />
            <div className="text-sm text-text-secondary space-y-1">
              <p>{companyInfo.address}</p>
              {companyInfo.nearestStation && <p>{companyInfo.nearestStation}</p>}
              {companyInfo.parking && <p>{companyInfo.parking}</p>}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
