import Button from "@/components/ui/Button";
import { companyInfo } from "@/data/company";

export default function CtaBanner() {
  return (
    <section className="bg-primary py-12 md:py-16">
      <div className="container-wide text-center">
        <h2 className="text-2xl md:text-heading-2 font-serif font-bold text-white">
          家づくりのこと、お気軽にご相談ください
        </h2>
        <p className="mt-3 text-white/80 max-w-xl mx-auto">
          資料請求は無料です。まずはパンフレットをお手に取ってみてください。
          お電話でのご相談も承っております。
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/contact" variant="cta" size="lg">
            資料請求・無料相談
          </Button>
          <a
            href={`tel:${companyInfo.phone.replace(/-/g, "")}`}
            className="inline-flex items-center gap-2 px-8 py-4 text-lg text-white border-2 border-white rounded-lg hover:bg-white hover:text-primary transition-colors min-h-[44px] font-medium"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {companyInfo.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
