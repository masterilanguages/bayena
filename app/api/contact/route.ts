import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const DEFAULT_TO_EMAIL = "bayenaventures@gmail.com";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  inquiryType?: string;
  message?: string;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const inquiryType = body.inquiryType?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || !email || !inquiryType || !message) {
    return NextResponse.json({ error: "Please fill in all required fields." }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const toEmail = process.env.CONTACT_TO_EMAIL ?? DEFAULT_TO_EMAIL;
  const gmailUser = process.env.GMAIL_USER ?? DEFAULT_TO_EMAIL;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

  if (!gmailAppPassword) {
    console.error("GMAIL_APP_PASSWORD is not configured.");
    return NextResponse.json(
      { error: "Email is not configured yet. Please try again later." },
      { status: 503 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: gmailUser,
      pass: gmailAppPassword,
    },
  });

  const subject = `Bayena Ventures inquiry: ${inquiryType}`;
  const text = [
    `New contact form submission`,
    ``,
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || "Not provided"}`,
    `Inquiry type: ${inquiryType}`,
    ``,
    `Message:`,
    message,
  ].join("\n");

  const html = `
    <h2>New Bayena Ventures contact form submission</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
    <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
    <p><strong>Inquiry type:</strong> ${escapeHtml(inquiryType)}</p>
    <p><strong>Message:</strong></p>
    <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
  `;

  try {
    await transporter.sendMail({
      from: `"Bayena Ventures Website" <${gmailUser}>`,
      to: toEmail,
      replyTo: email,
      subject,
      text,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to send contact email:", error);
    return NextResponse.json(
      { error: "Unable to send your message right now. Please try again." },
      { status: 500 }
    );
  }
}
