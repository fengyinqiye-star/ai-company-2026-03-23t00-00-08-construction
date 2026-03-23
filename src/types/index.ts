// ---- 施工事例 ----
export interface Project {
  id: string;
  slug: string;
  title: string;
  category: "new-build" | "reform";
  thumbnail: string;
  images: ProjectImage[];
  location: string;
  structure?: string;
  floorArea?: string;
  constructionPeriod: string;
  familyStructure?: string;
  features: string[];
  description: string;
  testimonial: Testimonial;
  reformType?: string;
  completedAt?: string;
}

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Testimonial {
  name: string;
  comment: string;
}

// ---- こだわりポイント ----
export interface Feature {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  points: string[];
  image: string;
  icon: string;
}

// ---- リフォームサービス ----
export interface ReformService {
  id: string;
  name: string;
  description: string;
  estimatedDuration: string;
  priceRange: string;
  icon: string;
  image: string;
}

// ---- スタッフ ----
export interface Staff {
  id: string;
  name: string;
  role: string;
  experience: string;
  message: string;
  image: string;
  qualifications?: string[];
  isRepresentative?: boolean;
}

// ---- 家づくりの流れ ----
export interface FlowStep {
  id: string;
  step: number;
  title: string;
  description: string;
  duration: string;
  points: string[];
  icon: string;
}

// ---- FAQ ----
export type FAQCategory = "general" | "cost" | "reform" | "warranty";

export interface FAQItem {
  id: string;
  category: FAQCategory;
  categoryLabel: string;
  question: string;
  answer: string;
  order: number;
}

// ---- ブログ記事 ----
export type BlogCategory = "tips" | "reform-case" | "column" | "news";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: BlogCategory;
  categoryLabel: string;
  date: string;
  thumbnail: string;
  excerpt: string;
  content: string;
  tags?: string[];
  ogImage?: string;
}

// ---- 見学会・イベント ----
export interface EventInfo {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  isActive: boolean;
  reservationUrl?: string;
}

// ---- 会社情報 ----
export interface CompanyInfo {
  name: string;
  representative: string;
  established: string;
  address: string;
  phone: string;
  fax: string;
  businessHours: string;
  holidays: string;
  licenses: string[];
  constructionPermit: string;
  business: string[];
  employees: string;
  serviceArea: string;
  serviceAreaCities: string[];
  mapEmbedUrl?: string;
  nearestStation?: string;
  parking?: string;
}

export interface HistoryItem {
  year: string;
  event: string;
}

// ---- お問い合わせフォーム ----
export type InquiryType = "document" | "new-build" | "reform" | "other";
export type ContactMethod = "email" | "phone" | "any";

export interface ContactFormData {
  lastNameKanji: string;
  firstNameKanji: string;
  lastNameKana: string;
  firstNameKana: string;
  email: string;
  phone: string;
  postalCode?: string;
  address?: string;
  inquiryType: InquiryType;
  message?: string;
  preferredContact?: ContactMethod;
  privacyAgreed: boolean;
}

// ---- ナビゲーション ----
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

// ---- パンくずリスト ----
export interface BreadcrumbItem {
  label: string;
  href?: string;
}

// ---- SEO メタデータ ----
export interface PageMeta {
  title: string;
  description: string;
  ogImage?: string;
  noIndex?: boolean;
}
