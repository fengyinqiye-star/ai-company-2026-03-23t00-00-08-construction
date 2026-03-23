import { Resend } from "resend";
import type { ContactFormData } from "@/types";

function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not set");
  }
  return new Resend(apiKey);
}

const ADMIN_EMAIL = process.env.CONTACT_EMAIL_TO || "admin@example.com";
const FROM_EMAIL = "noreply@kobayashi-kensetsu.com";

const INQUIRY_TYPE_LABELS: Record<string, string> = {
  document: "資料請求",
  "new-build": "新築のご相談",
  reform: "リフォームのご相談",
  other: "その他",
};

const CONTACT_METHOD_LABELS: Record<string, string> = {
  email: "メール",
  phone: "電話",
  any: "どちらでも可",
};

export async function sendAdminNotification(data: ContactFormData) {
  const fullName = `${data.lastNameKanji} ${data.firstNameKanji}`;
  const inquiryLabel = INQUIRY_TYPE_LABELS[data.inquiryType] || data.inquiryType;

  await getResend().emails.send({
    from: FROM_EMAIL,
    to: ADMIN_EMAIL,
    subject: `【お問い合わせ】${fullName}様 - ${inquiryLabel} | 小林建設`,
    html: `
      <h2>お問い合わせがありました</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px;">
        <tr><td style="padding:8px;border:1px solid #ddd;background:#f5f5f5;font-weight:bold;">お名前</td><td style="padding:8px;border:1px solid #ddd;">${fullName}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;background:#f5f5f5;font-weight:bold;">フリガナ</td><td style="padding:8px;border:1px solid #ddd;">${data.lastNameKana} ${data.firstNameKana}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;background:#f5f5f5;font-weight:bold;">メールアドレス</td><td style="padding:8px;border:1px solid #ddd;">${data.email}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;background:#f5f5f5;font-weight:bold;">電話番号</td><td style="padding:8px;border:1px solid #ddd;">${data.phone}</td></tr>
        ${data.postalCode ? `<tr><td style="padding:8px;border:1px solid #ddd;background:#f5f5f5;font-weight:bold;">郵便番号</td><td style="padding:8px;border:1px solid #ddd;">${data.postalCode}</td></tr>` : ""}
        ${data.address ? `<tr><td style="padding:8px;border:1px solid #ddd;background:#f5f5f5;font-weight:bold;">住所</td><td style="padding:8px;border:1px solid #ddd;">${data.address}</td></tr>` : ""}
        <tr><td style="padding:8px;border:1px solid #ddd;background:#f5f5f5;font-weight:bold;">お問い合わせ種別</td><td style="padding:8px;border:1px solid #ddd;">${inquiryLabel}</td></tr>
        ${data.message ? `<tr><td style="padding:8px;border:1px solid #ddd;background:#f5f5f5;font-weight:bold;">ご相談内容</td><td style="padding:8px;border:1px solid #ddd;">${data.message.replace(/\n/g, "<br>")}</td></tr>` : ""}
        ${data.preferredContact ? `<tr><td style="padding:8px;border:1px solid #ddd;background:#f5f5f5;font-weight:bold;">ご希望の連絡方法</td><td style="padding:8px;border:1px solid #ddd;">${CONTACT_METHOD_LABELS[data.preferredContact] || data.preferredContact}</td></tr>` : ""}
      </table>
    `,
  });
}

export async function sendAutoReply(data: ContactFormData) {
  const fullName = `${data.lastNameKanji} ${data.firstNameKanji}`;

  await getResend().emails.send({
    from: FROM_EMAIL,
    to: data.email,
    subject: "【小林建設】お問い合わせを受け付けました",
    html: `
      <p>${fullName} 様</p>
      <p>この度は小林建設株式会社へお問い合わせいただき、誠にありがとうございます。</p>
      <p>お問い合わせ内容を確認の上、3営業日以内に担当者よりご連絡させていただきます。</p>
      <p>お急ぎの場合は、お電話（0120-XXX-XXX）にてお気軽にお問い合わせください。</p>
      <br>
      <p>---</p>
      <p>小林建設株式会社</p>
      <p>TEL: 0120-XXX-XXX</p>
      <p>営業時間: 8:00〜18:00（日曜・祝日定休）</p>
    `,
  });
}
