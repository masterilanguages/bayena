import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email } = await request.json();
  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }
  try {
    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "Bayena Ventures <onboarding@resend.dev>",
      to: "info@bayenaventures.com",
      subject: `New newsletter subscriber: ${email}`,
      text: `${email} subscribed to the Bayena Ventures newsletter.`,
    });
  } catch {
    // Resend not configured — still return success
  }
  return NextResponse.json({ ok: true });
}
