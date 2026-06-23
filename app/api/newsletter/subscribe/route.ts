import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email } = await request.json();
  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const gmailUser = process.env.GMAIL_USER ?? "bayenaventures@gmail.com";
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

  if (gmailAppPassword) {
    try {
      const nodemailer = await import("nodemailer");
      const transporter = nodemailer.default.createTransport({
        service: "gmail",
        auth: { user: gmailUser, pass: gmailAppPassword },
      });
      await transporter.sendMail({
        from: `"Bayena Ventures" <${gmailUser}>`,
        to: gmailUser,
        subject: `New newsletter subscriber: ${email}`,
        text: `${email} subscribed to the Bayena Ventures newsletter.`,
      });
    } catch {
      // Non-fatal — still confirm to user
    }
  }

  return NextResponse.json({ ok: true });
}
