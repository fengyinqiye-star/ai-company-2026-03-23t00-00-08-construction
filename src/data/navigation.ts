import type { NavItem } from "@/types";

export const mainNavItems: NavItem[] = [
  { label: "ホーム", href: "/" },
  { label: "家づくりの特徴", href: "/features" },
  { label: "施工事例", href: "/works" },
  { label: "家づくりの流れ", href: "/flow" },
  { label: "リフォーム", href: "/reform" },
  { label: "会社概要", href: "/about" },
  { label: "ブログ", href: "/blog" },
  { label: "お問い合わせ", href: "/contact" },
];

export const footerNavGroups = [
  {
    title: "家づくり",
    items: [
      { label: "家づくりの特徴", href: "/features" },
      { label: "施工事例", href: "/works" },
      { label: "家づくりの流れ", href: "/flow" },
      { label: "リフォーム", href: "/reform" },
    ],
  },
  {
    title: "会社情報",
    items: [
      { label: "会社概要", href: "/about" },
      { label: "保証・アフターサービス", href: "/warranty" },
      { label: "ブログ・コラム", href: "/blog" },
      { label: "見学会・イベント", href: "/events" },
    ],
  },
  {
    title: "お客様サポート",
    items: [
      { label: "資料請求・お問い合わせ", href: "/contact" },
      { label: "よくある質問", href: "/faq" },
      { label: "プライバシーポリシー", href: "/privacy-policy" },
    ],
  },
];
