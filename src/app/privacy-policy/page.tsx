import type { Metadata } from "next";
import { pageMeta } from "@/data/metadata";
import { companyInfo } from "@/data/company";
import Breadcrumb from "@/components/layout/Breadcrumb";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: pageMeta.privacyPolicy.title,
  description: pageMeta.privacyPolicy.description,
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "プライバシーポリシー" }]} />

      <section className="section-padding bg-background">
        <div className="container-wide max-w-3xl mx-auto">
          <SectionHeading title="プライバシーポリシー" />

          <div className="prose prose-sm max-w-none text-text-secondary leading-relaxed space-y-6">
            <p>
              {companyInfo.name}（以下「当社」）は、お客様の個人情報の保護に関して、
              以下のとおりプライバシーポリシー（以下「本ポリシー」）を定め、
              個人情報の適切な取り扱いと保護に努めます。
            </p>

            <h3 className="text-text-primary font-bold mt-8">1. 個人情報の収集</h3>
            <p>
              当社は、お問い合わせ・資料請求等の際に、お名前、ご住所、お電話番号、
              メールアドレス等の個人情報をお伺いすることがあります。
            </p>

            <h3 className="text-text-primary font-bold mt-8">2. 個人情報の利用目的</h3>
            <p>当社が収集した個人情報は、以下の目的で利用いたします。</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>お問い合わせへの回答、資料の送付</li>
              <li>工事・サービスに関するご連絡</li>
              <li>アフターサービス・メンテナンスのご案内</li>
              <li>イベント・見学会等のご案内</li>
            </ul>

            <h3 className="text-text-primary font-bold mt-8">3. 個人情報の第三者提供</h3>
            <p>
              当社は、法令に基づく場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。
            </p>

            <h3 className="text-text-primary font-bold mt-8">4. 個人情報の安全管理</h3>
            <p>
              当社は、個人情報の漏洩、滅失、毀損の防止その他の安全管理のために、
              必要かつ適切な措置を講じます。
            </p>

            <h3 className="text-text-primary font-bold mt-8">5. お問い合わせ</h3>
            <p>
              個人情報の取り扱いに関するお問い合わせは、下記までご連絡ください。
            </p>
            <p>
              {companyInfo.name}<br />
              {companyInfo.address}<br />
              TEL: {companyInfo.phone}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
