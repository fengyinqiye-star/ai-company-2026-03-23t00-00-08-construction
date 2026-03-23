import type { Metadata } from "next";
import { pageMeta } from "@/data/metadata";
import Breadcrumb from "@/components/layout/Breadcrumb";
import SectionHeading from "@/components/ui/SectionHeading";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: pageMeta.warranty.title,
  description: pageMeta.warranty.description,
};

const warranties = [
  {
    title: "構造躯体保証（10年）",
    description:
      "住宅瑕疵担保履行法に基づき、構造耐力上主要な部分と雨水の浸入を防止する部分について10年間保証いたします。",
  },
  {
    title: "地盤保証（20年）",
    description:
      "地盤調査を実施し、適切な地盤改良を行った上で、不同沈下に対して20年間の保証をお付けします。",
  },
  {
    title: "防水保証（10年）",
    description:
      "屋根・外壁の防水工事について10年間の保証をいたします。",
  },
  {
    title: "シロアリ保証（5年）",
    description:
      "防蟻処理を施した上で、シロアリ被害に対して5年間の保証をお付けします。更新も可能です。",
  },
];

const inspections = [
  { timing: "引き渡し後 1年", content: "建物全体の点検、建具の調整、外構の確認" },
  { timing: "引き渡し後 3年", content: "外壁・屋根の状態確認、設備の動作確認" },
  { timing: "引き渡し後 5年", content: "構造部分の点検、防水状態の確認、メンテナンス提案" },
  { timing: "引き渡し後 10年", content: "総合点検、有償メンテナンスのご提案" },
];

export default function WarrantyPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "保証・アフターサービス" }]} />

      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionHeading
            title="保証・アフターサービス"
            subtitle="お引き渡し後も安心。充実の保証制度とアフターサポート"
          />

          <div className="max-w-3xl mx-auto">
            <h3 className="text-heading-3 font-serif font-bold text-text-primary mb-6">
              保証制度
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {warranties.map((w) => (
                <div key={w.title} className="bg-surface border border-border/50 rounded-lg p-5">
                  <h4 className="font-medium text-text-primary">{w.title}</h4>
                  <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                    {w.description}
                  </p>
                </div>
              ))}
            </div>

            <h3 className="text-heading-3 font-serif font-bold text-text-primary mb-6">
              定期点検スケジュール
            </h3>
            <div className="border border-border rounded-lg overflow-hidden">
              {inspections.map((insp) => (
                <div key={insp.timing} className="flex border-b border-border last:border-b-0">
                  <div className="w-36 md:w-44 flex-shrink-0 px-4 py-3 bg-secondary/20 font-medium text-sm text-text-primary">
                    {insp.timing}
                  </div>
                  <div className="flex-1 px-4 py-3 text-sm text-text-secondary">
                    {insp.content}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-surface border border-border/50 rounded-lg p-6">
              <h3 className="text-heading-3 font-serif font-bold text-text-primary mb-3">
                緊急時の対応
              </h3>
              <p className="text-text-secondary leading-relaxed">
                水漏れ・雨漏りなどの緊急事態には、営業時間外でも可能な限り対応いたします。
                まずはお電話にてご連絡ください。状況を確認の上、迅速に修理手配いたします。
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
