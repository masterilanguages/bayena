"use client";

import { useState } from "react";

const BLUE = "#1a6b8a";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("loading");
    try {
      const res = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setState("done");
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  };

  if (state === "done") {
    return (
      <div className="text-center">
        <p className="text-xl font-bold text-white">✅ You&apos;re on the list.</p>
        <p className="mt-3 text-base text-slate-300">
          We&apos;ll send you practical insights on strategy, AI, and growth — no fluff.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="flex-1 rounded-lg border border-slate-600 bg-slate-800 px-4 py-3 text-sm text-white placeholder-slate-400 focus:border-[#1a6b8a] focus:outline-none"
      />
      <button
        type="submit"
        disabled={state === "loading"}
        className="rounded-lg px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:opacity-60"
        style={{ backgroundColor: BLUE }}
      >
        {state === "loading" ? "Subscribing…" : "Subscribe"}
      </button>
      {state === "error" && (
        <p className="text-xs text-red-400">Something went wrong. Try again.</p>
      )}
    </form>
  );
}
