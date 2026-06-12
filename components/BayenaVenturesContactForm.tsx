"use client";

import { useState, type FormEvent } from "react";

const INQUIRY_TYPES = [
  "Funding request",
  "Join investor list",
  "Deal opportunity",
  "General inquiry",
] as const;

type InquiryType = (typeof INQUIRY_TYPES)[number];

export default function BayenaVenturesContactForm({
  defaultInquiryType = "General inquiry",
}: {
  defaultInquiryType?: InquiryType;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [inquiryType, setInquiryType] = useState<InquiryType>(defaultInquiryType);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
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
            className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
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
            className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
            placeholder="you@company.com"
          />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Phone
          <input
            type="tel"
            name="phone"
            autoComplete="tel"
            className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
            placeholder="Optional"
          />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Inquiry type
          <select
            name="inquiryType"
            required
            value={inquiryType}
            onChange={(e) => setInquiryType(e.target.value as InquiryType)}
            className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
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
            className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
            placeholder="Tell us about your capital need, investment interest, or deal opportunity."
          />
        </label>
      </div>
      <button
        type="submit"
        className="mt-6 w-full rounded-lg bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 sm:w-auto sm:min-w-[200px]"
      >
        Send message
      </button>
    </form>
  );
}
