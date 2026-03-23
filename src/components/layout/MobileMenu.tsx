"use client";

import { useEffect } from "react";
import Link from "next/link";
import { mainNavItems } from "@/data/navigation";
import { companyInfo } from "@/data/company";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 lg:hidden",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu panel */}
      <div
        className={cn(
          "fixed top-0 right-0 z-50 h-full w-72 bg-surface shadow-xl transition-transform duration-300 lg:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="モバイルメニュー"
      >
        <div className="flex items-center justify-between p-4 border-b border-border/30">
          <span className="font-serif font-bold text-primary text-lg">メニュー</span>
          <button
            onClick={onClose}
            className="w-11 h-11 flex items-center justify-center"
            aria-label="メニューを閉じる"
          >
            <svg className="w-6 h-6 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="p-4" aria-label="モバイルナビゲーション">
          <ul className="space-y-1">
            {mainNavItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="block px-4 py-3 text-text-primary hover:bg-secondary/30 rounded-lg transition-colors min-h-[44px]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4 border-t border-border/30 space-y-3">
          <a
            href={`tel:${companyInfo.phone.replace(/-/g, "")}`}
            className="flex items-center justify-center gap-2 w-full py-3 bg-primary text-white rounded-lg font-medium min-h-[44px]"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            電話で相談する
          </a>
          <Link
            href="/contact"
            onClick={onClose}
            className="flex items-center justify-center w-full py-3 bg-cta text-white rounded-lg font-medium min-h-[44px]"
          >
            資料請求・お問い合わせ
          </Link>
        </div>
      </div>
    </>
  );
}
