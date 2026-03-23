import type { Staff } from "@/types";

export const staff: Staff[] = [
  {
    id: "staff-kobayashi",
    name: "小林 正樹",
    role: "代表取締役",
    experience: "30年",
    message:
      "父の代から受け継いだ「丁寧な家づくり」の精神を大切に、地域の皆様に安心して暮らせる住まいをお届けしてまいります。家は一生に一度の大きな買い物。だからこそ、一棟一棟に真心を込めて、お客様の夢を形にします。",
    image: "/images/staff/kobayashi.jpg",
    qualifications: ["一級建築士", "一級建築施工管理技士", "宅地建物取引士"],
    isRepresentative: true,
  },
  {
    id: "staff-tanaka",
    name: "田中 勇一",
    role: "大工棟梁",
    experience: "35年",
    message:
      "木の特性を見極め、一本一本の木材を最適な場所に使う。それが私の仕事です。手刻みの技術も大切にしながら、お客様に長く愛される家を建てています。",
    image: "/images/staff/tanaka.jpg",
    qualifications: ["一級建築大工技能士", "木造建築士"],
  },
  {
    id: "staff-suzuki",
    name: "鈴木 美穂",
    role: "一級建築士・設計担当",
    experience: "15年",
    message:
      "「暮らしやすさ」を第一に考えた設計を心がけています。お客様の理想のライフスタイルをヒアリングし、光と風を取り込む快適な間取りをご提案します。",
    image: "/images/staff/suzuki.jpg",
    qualifications: ["一級建築士", "インテリアコーディネーター"],
  },
  {
    id: "staff-yamada",
    name: "山田 健太",
    role: "現場監督",
    experience: "20年",
    message:
      "安全第一、品質第一で現場を管理しています。お客様に安心していただけるよう、工事の進捗を写真付きで定期的にご報告いたします。",
    image: "/images/staff/yamada.jpg",
    qualifications: ["一級建築施工管理技士", "二級建築士"],
  },
  {
    id: "staff-sato",
    name: "佐藤 和也",
    role: "リフォーム担当",
    experience: "18年",
    message:
      "「今の住まいをもっと快適に」というお客様の想いに応えるのが私の使命です。小さな修繕から大規模リノベーションまで、何でもご相談ください。",
    image: "/images/staff/sato.jpg",
    qualifications: ["二級建築施工管理技士", "増改築相談員"],
  },
];
