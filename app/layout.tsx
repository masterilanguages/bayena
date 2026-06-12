import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bayena — Branding & Growth Studio",
  description:
    "Strategy, design, campaigns, and web — a studio built for brands ready to scale.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
