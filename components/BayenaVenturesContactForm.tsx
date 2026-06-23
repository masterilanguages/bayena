"use client";

import { useState, type FormEvent } from "react";

const INQUIRY_TYPES = [
  "Book a consultation",
  "Business strategy",
  "AI & automation",
  "Website development",
  "Sales systems",
  "General inquiry",
] as const;

type InquiryType = (typeof INQUIRY_TYPES)[number];

export default function BayenaVenturesContactForm({
  defaultInquiryType = "Book a consultation",
}: {
  defaultInquiryType?: InquiryType;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [inquiryType, setInquiryType] = useState<InquiryType>(defaultInquiryType);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          inquiryType: formData.get("inquiryType"),
          message: formData.get("message"),
        }),
      });

      const data = (await response.json().catch(() => null)) as { error?: string } | null;

      if (!response.ok) {
        throw new Error(data?.error ?? "Unable to send your message. Please try again.");
      }

      setSubmitted(true);
      form.reset();
      setInquiryType(defaultInquiryType);
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Unable to send your message. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="mx-auto max-w-xl rounded-2xl border border-emerald-200 bg-emerald-50 px-6 py-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
          Message received
        </p>
        <h3 className="mt-2 text-xl font-bold text-slate-900">Thank you for reaching out</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          We review every submission individually. A member of the Bayena Ventures team will
          follow up shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      id="contact-form"
      onSubmit={handleSubmit}
      className="mx-auto max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-slate-700">
          Full name
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            disabled={submitting}
            className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 shadow-sm focus:border-[#1a6b8a] focus:outline-none focus:ring-1 focus:ring-[#1a6b8a] disabled:opacity-60"
            placeholder="Your name"
          />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Email
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            disabled={submitting}
            className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 shadow-sm focus:border-[#1a6b8a] focus:outline-none focus:ring-1 focus:ring-[#1a6b8a] disabled:opacity-60"
            placeholder="you@company.com"
          />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Phone
          <input
            type="tel"
            name="phone"
            autoComplete="tel"
            disabled={submitting}
            className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 shadow-sm focus:border-[#1a6b8a] focus:outline-none focus:ring-1 focus:ring-[#1a6b8a] disabled:opacity-60"
            placeholder="Optional"
          />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Inquiry type
          <select
            name="inquiryType"
            required
            value={inquiryType}
            disabled={submitting}
            onChange={(e) => setInquiryType(e.target.value as InquiryType)}
            className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 shadow-sm focus:border-[#1a6b8a] focus:outline-none focus:ring-1 focus:ring-[#1a6b8a] disabled:opacity-60"
          >
            {INQUIRY_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-medium text-slate-700 sm:col-span-2">
          Message
          <textarea
            name="message"
            required
            rows={5}
            disabled={submitting}
            className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 shadow-sm focus:border-[#1a6b8a] focus:outline-none focus:ring-1 focus:ring-[#1a6b8a] disabled:opacity-60"
            placeholder="Tell us about your business, goals, and what you want to build."
          />
        </label>
      </div>
      {error && (
        <p className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </p>
      )}
      <button
        type="submit"
        disabled={submitting}
        className="mt-6 w-full rounded-lg px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:min-w-[200px]"
        style={{ backgroundColor: "#1a6b8a" }}
      >
        {submitting ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
