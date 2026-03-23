import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { rateLimit } from "@/lib/rate-limit";
import { sendAdminNotification, sendAutoReply } from "@/lib/resend";

const contactSchema = z.object({
  lastNameKanji: z.string().min(1).max(20),
  firstNameKanji: z.string().min(1).max(20),
  lastNameKana: z.string().min(1).max(20),
  firstNameKana: z.string().min(1).max(20),
  email: z.string().email(),
  phone: z.string().regex(/^[0-9-]{10,13}$/),
  postalCode: z.string().regex(/^[0-9]{7}$/).optional().or(z.literal("")),
  address: z.string().max(100).optional(),
  inquiryType: z.enum(["document", "new-build", "reform", "other"]),
  message: z.string().max(1000).optional(),
  preferredContact: z.enum(["email", "phone", "any"]).optional(),
  privacyAgreed: z.literal(true),
});

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      "unknown";
    const { success } = rateLimit(ip);
    if (!success) {
      return NextResponse.json(
        { success: false, message: "送信回数の上限に達しました。しばらくしてからお試しください。" },
        { status: 429 }
      );
    }

    const body = await request.json();
    const result = contactSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: "入力内容にエラーがあります",
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    await Promise.all([
      sendAdminNotification(result.data),
      sendAutoReply(result.data),
    ]);

    return NextResponse.json({
      success: true,
      message: "お問い合わせを受け付けました",
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, message: "サーバーエラーが発生しました" },
      { status: 500 }
    );
  }
}
