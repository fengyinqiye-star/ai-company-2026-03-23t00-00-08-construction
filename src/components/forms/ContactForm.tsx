"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import type { ContactFormData } from "@/types";
import FormField from "./FormField";
import Button from "@/components/ui/Button";

const contactSchema = z.object({
  lastNameKanji: z.string().min(1, "姓を入力してください").max(20),
  firstNameKanji: z.string().min(1, "名を入力してください").max(20),
  lastNameKana: z
    .string()
    .min(1, "セイを入力してください")
    .max(20)
    .regex(/^[ァ-ヶー　\s]+$/, "カタカナで入力してください"),
  firstNameKana: z
    .string()
    .min(1, "メイを入力してください")
    .max(20)
    .regex(/^[ァ-ヶー　\s]+$/, "カタカナで入力してください"),
  email: z.string().min(1, "メールアドレスを入力してください").email("正しいメールアドレスを入力してください"),
  phone: z
    .string()
    .min(1, "電話番号を入力してください")
    .regex(/^[0-9-]{10,13}$/, "正しい電話番号を入力してください"),
  postalCode: z
    .string()
    .optional()
    .refine((v) => !v || /^[0-9]{7}$/.test(v), "7桁の数字で入力してください"),
  address: z.string().max(100).optional(),
  inquiryType: z.enum(["document", "new-build", "reform", "other"], {
    required_error: "お問い合わせ種別を選択してください",
  }),
  message: z.string().max(1000).optional(),
  preferredContact: z.enum(["email", "phone", "any"]).optional(),
  privacyAgreed: z.literal(true, {
    errorMap: () => ({ message: "プライバシーポリシーに同意してください" }),
  }),
});

type Step = "input" | "confirm" | "complete";

const inquiryLabels: Record<string, string> = {
  document: "資料請求",
  "new-build": "新築のご相談",
  reform: "リフォームのご相談",
  other: "その他",
};

const contactLabels: Record<string, string> = {
  email: "メール",
  phone: "電話",
  any: "どちらでも可",
};

export default function ContactForm() {
  const [step, setStep] = useState<Step>("input");
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      inquiryType: "document",
      preferredContact: "any",
      privacyAgreed: false,
    },
  });

  const onConfirm = () => setStep("confirm");

  const onSubmit = async () => {
    setSubmitting(true);
    setServerError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(getValues()),
      });
      const data = await res.json();
      if (!res.ok) {
        setServerError(data.message || "送信に失敗しました");
        return;
      }
      setStep("complete");
    } catch {
      setServerError("通信エラーが発生しました。時間をおいて再度お試しください。");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 border border-border rounded-lg bg-surface text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent min-h-[44px]";

  if (step === "complete") {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-success/10 text-success flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-heading-3 font-serif font-bold text-text-primary">
          お問い合わせを受け付けました
        </h2>
        <p className="mt-3 text-text-secondary max-w-md mx-auto">
          3営業日以内に担当者よりご連絡させていただきます。
          お急ぎの場合はお電話にてお問い合わせください。
        </p>
        <div className="mt-8">
          <Button href="/" variant="primary">
            トップページへ戻る
          </Button>
        </div>
      </div>
    );
  }

  if (step === "confirm") {
    const values = getValues();
    const rows = [
      { label: "お名前", value: `${values.lastNameKanji} ${values.firstNameKanji}` },
      { label: "フリガナ", value: `${values.lastNameKana} ${values.firstNameKana}` },
      { label: "メールアドレス", value: values.email },
      { label: "電話番号", value: values.phone },
      { label: "郵便番号", value: values.postalCode || "-" },
      { label: "住所", value: values.address || "-" },
      { label: "お問い合わせ種別", value: inquiryLabels[values.inquiryType] },
      { label: "ご相談内容", value: values.message || "-" },
      {
        label: "ご希望の連絡方法",
        value: values.preferredContact ? contactLabels[values.preferredContact] : "-",
      },
    ];

    return (
      <div>
        <h2 className="text-heading-3 font-serif font-bold text-text-primary mb-6">
          入力内容の確認
        </h2>
        <div className="border border-border rounded-lg overflow-hidden">
          {rows.map((row) => (
            <div
              key={row.label}
              className="flex border-b border-border last:border-b-0"
            >
              <div className="w-40 flex-shrink-0 px-4 py-3 bg-secondary/20 font-medium text-sm text-text-primary">
                {row.label}
              </div>
              <div className="flex-1 px-4 py-3 text-sm text-text-secondary whitespace-pre-wrap">
                {row.value}
              </div>
            </div>
          ))}
        </div>
        {serverError && (
          <p className="mt-4 text-error text-sm text-center" role="alert">
            {serverError}
          </p>
        )}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="secondary" onClick={() => setStep("input")}>
            修正する
          </Button>
          <Button
            variant="cta"
            onClick={onSubmit}
            disabled={submitting}
          >
            {submitting ? "送信中..." : "この内容で送信する"}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onConfirm)} noValidate>
      <div className="space-y-6">
        {/* Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField label="姓" required error={errors.lastNameKanji?.message}>
            <input
              {...register("lastNameKanji")}
              className={inputClass}
              placeholder="小林"
            />
          </FormField>
          <FormField label="名" required error={errors.firstNameKanji?.message}>
            <input
              {...register("firstNameKanji")}
              className={inputClass}
              placeholder="太郎"
            />
          </FormField>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField label="セイ" required error={errors.lastNameKana?.message}>
            <input
              {...register("lastNameKana")}
              className={inputClass}
              placeholder="コバヤシ"
            />
          </FormField>
          <FormField label="メイ" required error={errors.firstNameKana?.message}>
            <input
              {...register("firstNameKana")}
              className={inputClass}
              placeholder="タロウ"
            />
          </FormField>
        </div>

        <FormField label="メールアドレス" required error={errors.email?.message}>
          <input
            {...register("email")}
            type="email"
            className={inputClass}
            placeholder="example@email.com"
          />
        </FormField>

        <FormField label="電話番号" required error={errors.phone?.message}>
          <input
            {...register("phone")}
            type="tel"
            className={inputClass}
            placeholder="048-XXX-XXXX"
          />
        </FormField>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField label="郵便番号" error={errors.postalCode?.message}>
            <input
              {...register("postalCode")}
              className={inputClass}
              placeholder="3300000"
            />
          </FormField>
          <FormField label="住所" error={errors.address?.message}>
            <input
              {...register("address")}
              className={inputClass}
              placeholder="埼玉県さいたま市..."
            />
          </FormField>
        </div>

        <FormField
          label="お問い合わせ種別"
          required
          error={errors.inquiryType?.message}
        >
          <select {...register("inquiryType")} className={inputClass}>
            <option value="document">資料請求</option>
            <option value="new-build">新築のご相談</option>
            <option value="reform">リフォームのご相談</option>
            <option value="other">その他</option>
          </select>
        </FormField>

        <FormField label="ご相談内容" error={errors.message?.message}>
          <textarea
            {...register("message")}
            rows={5}
            className={inputClass}
            placeholder="ご相談内容をご記入ください（任意）"
          />
        </FormField>

        <FormField label="ご希望の連絡方法">
          <div className="flex gap-6">
            {(["email", "phone", "any"] as const).map((v) => (
              <label key={v} className="flex items-center gap-2 cursor-pointer min-h-[44px]">
                <input
                  type="radio"
                  value={v}
                  {...register("preferredContact")}
                  className="w-4 h-4 text-primary"
                />
                <span className="text-sm text-text-primary">{contactLabels[v]}</span>
              </label>
            ))}
          </div>
        </FormField>

        <FormField error={errors.privacyAgreed?.message}>
          <label className="flex items-start gap-3 cursor-pointer min-h-[44px]">
            <input
              type="checkbox"
              {...register("privacyAgreed")}
              className="w-5 h-5 mt-0.5 text-primary rounded"
            />
            <span className="text-sm text-text-secondary">
              <a
                href="/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline hover:no-underline"
              >
                プライバシーポリシー
              </a>
              に同意する
            </span>
          </label>
        </FormField>

        <div className="pt-4">
          <Button type="submit" variant="cta" size="lg" className="w-full sm:w-auto">
            確認画面へ
          </Button>
        </div>
      </div>
    </form>
  );
}
