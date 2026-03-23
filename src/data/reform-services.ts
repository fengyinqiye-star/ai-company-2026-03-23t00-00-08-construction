import type { ReformService } from "@/types";

export const reformServices: ReformService[] = [
  {
    id: "reform-kitchen",
    name: "キッチンリフォーム",
    description:
      "使いやすさとデザイン性を両立したキッチンへ。対面型・アイランド型など、ご家族のライフスタイルに合わせた最適なプランをご提案します。収納力アップや動線の改善もお任せください。",
    estimatedDuration: "約1〜3週間",
    priceRange: "80万円〜250万円",
    icon: "kitchen",
    image: "/images/reform/kitchen.jpg",
  },
  {
    id: "reform-bathroom",
    name: "浴室リフォーム",
    description:
      "冬でも暖かく、お手入れしやすい最新のユニットバスに。浴室暖房乾燥機の設置、段差解消によるバリアフリー化なども対応いたします。",
    estimatedDuration: "約1〜2週間",
    priceRange: "60万円〜200万円",
    icon: "bath",
    image: "/images/reform/bathroom.jpg",
  },
  {
    id: "reform-toilet",
    name: "トイレリフォーム",
    description:
      "節水型トイレへの交換、手洗いカウンターの設置、内装のリフレッシュまで。清潔で快適なトイレ空間を実現します。",
    estimatedDuration: "約1〜3日",
    priceRange: "20万円〜80万円",
    icon: "toilet",
    image: "/images/reform/toilet.jpg",
  },
  {
    id: "reform-exterior",
    name: "外壁塗装",
    description:
      "経年劣化した外壁を美しく、丈夫に。高耐候性塗料やシリコン塗料で、美観と防水性を長期間キープ。足場の設置から丁寧に施工します。",
    estimatedDuration: "約2〜3週間",
    priceRange: "80万円〜180万円",
    icon: "paint",
    image: "/images/reform/exterior.jpg",
  },
  {
    id: "reform-roof",
    name: "屋根工事",
    description:
      "屋根の葺き替え・カバー工法・塗装など、状態に応じた最適な工法をご提案。雨漏り修理も迅速に対応いたします。",
    estimatedDuration: "約1〜3週間",
    priceRange: "50万円〜200万円",
    icon: "roof",
    image: "/images/reform/roof.jpg",
  },
  {
    id: "reform-earthquake",
    name: "耐震補強工事",
    description:
      "耐震診断に基づき、筋交いや制震ダンパーの追加、基礎の補強など、お住まいの耐震性を向上させます。各種補助金の申請もサポートします。",
    estimatedDuration: "約2〜4週間",
    priceRange: "100万円〜300万円",
    icon: "shield",
    image: "/images/reform/earthquake.jpg",
  },
  {
    id: "reform-barrier-free",
    name: "バリアフリーリフォーム",
    description:
      "手すりの設置、段差の解消、廊下の拡幅など、ご高齢の方にも安心して暮らせる住まいに。介護保険や補助金を活用したリフォームもご提案します。",
    estimatedDuration: "約1〜4週間",
    priceRange: "30万円〜200万円",
    icon: "accessibility",
    image: "/images/reform/barrier-free.jpg",
  },
];
