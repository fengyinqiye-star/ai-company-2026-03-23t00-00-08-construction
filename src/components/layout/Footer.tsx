import Link from "next/link";
import { footerNavGroups } from "@/data/navigation";
import { companyInfo } from "@/data/company";
import CopyrightYear from "./CopyrightYear";

export default function Footer() {
  return (
    <footer className="bg-text-primary text-white/80">
      <div className="container-wide py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-xl font-serif font-bold text-white">
              小林建設
            </Link>
            <p className="mt-3 text-sm leading-relaxed">
              {companyInfo.address}
            </p>
            <a
              href={`tel:${companyInfo.phone.replace(/-/g, "")}`}
              className="inline-flex items-center gap-2 mt-2 text-white font-medium hover:text-cta transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {companyInfo.phone}
            </a>
            <p className="mt-1 text-xs">
              営業時間: {companyInfo.businessHours}（{companyInfo.holidays}定休）
            </p>
          </div>

          {/* Nav groups */}
          {footerNavGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-white font-medium mb-3">{group.title}</h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Service area */}
        <div className="mt-10 pt-6 border-t border-white/10">
          <p className="text-sm">
            <span className="text-white font-medium">施工対応エリア: </span>
            {companyInfo.serviceAreaCities.join("、")}（{companyInfo.serviceArea}）
          </p>
        </div>

        {/* Permit */}
        <div className="mt-3 text-xs text-white/50">
          <p>{companyInfo.constructionPermit}</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="container-wide py-4 text-center text-xs text-white/40">
          &copy; <CopyrightYear /> {companyInfo.name} All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
