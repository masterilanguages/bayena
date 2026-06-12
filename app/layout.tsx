import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bayena Ventures — Private Capital. Real Assets. Strategic Opportunities.",
  description:
    "Bayena Ventures is an asset management and private capital platform built for investors, borrowers, and business owners seeking structured financial opportunities.",
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
