import BayenaVenturesContactForm from "@/components/BayenaVenturesContactForm";
import NewsletterForm from "@/components/NewsletterForm";
import WhaleMark from "@/components/WhaleMark";

const BLUE = "#1a6b8a";
const NAVY = "#0a1628";

const SERVICES = [
  {
    id: "ai-automation",
    title: "AI & Automation",
    description:
      "Implement AI-powered systems that reduce manual work, improve customer experience, and increase operational efficiency.",
    items: [
      "AI Chatbots",
      "Lead Qualification",
      "Workflow Automation",
      "Client Onboarding",
      "Email Automation",
      "CRM Automation",
    ],
  },
  {
    id: "sales-systems",
    title: "Sales Systems",
    description:
      "Build scalable sales processes that generate, nurture, and convert leads consistently.",
    items: [
      "CRM Setup",
      "Sales Pipelines",
      "Lead Tracking",
      "Follow-Up Automation",
      "Sales Dashboards",
      "Conversion Optimization",
    ],
  },
  {
    id: "websites",
    title: "Websites & Digital Presence",
    description:
      "Create modern websites and digital experiences designed to convert visitors into customers.",
    items: [
      "Website Design",
      "Landing Pages",
      "Booking Systems",
      "Client Portals",
      "Membership Platforms",
      "Mobile Optimization",
    ],
  },
  {
    id: "startup-growth",
    title: "Startup Launch & Growth",
    description:
      "Turn ideas into businesses with structured strategy, positioning, and execution.",
    items: [
      "Business Model Development",
      "Offer Creation",
      "Pricing Strategy",
      "Market Positioning",
      "Go-To-Market Strategy",
      "Brand Messaging",
    ],
  },
  {
    id: "infrastructure",
    title: "Business Infrastructure",
    description:
      "Build the systems and processes necessary to scale efficiently.",
    items: [
      "KPI Dashboards",
      "Reporting Systems",
      "SOP Development",
      "Team Workflows",
      "Process Optimization",
      "Business Operating Systems",
    ],
  },
];

const DIFFERENTIATORS = [
  {
    title: "Strategy First",
    body: "We start with your business goals, then design systems and technology around them — not the other way around.",
  },
  {
    title: "Built to Scale",
    body: "Every system we implement is designed to grow with your business, reducing friction as you add customers and team members.",
  },
  {
    title: "Execution Focused",
    body: "We don't just advise — we build. From automation to websites to sales workflows, we deliver working systems.",
  },
  {
    title: "Measurable Results",
    body: "We define success in real numbers: leads generated, hours saved, revenue increased, conversion rates improved.",
  },
];

export default function HomePage() {
  return (
    <div className="bg-white text-slate-800 antialiased">

      {/* ── Header ─────────────────────────────────────────── */}
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="#top" className="flex items-center gap-2.5">
            <WhaleMark className="h-5 w-11 text-[#1a6b8a]" />
            <div className="leading-tight">
              <span className="block text-sm font-bold tracking-tight text-slate-900">
                BAYENA
              </span>
              <span className="block text-[10px] font-medium tracking-widest text-slate-400 uppercase">
                Strategy · Systems · Growth
              </span>
            </div>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
            <a href="#services" className="transition hover:text-slate-900">Services</a>
            <a href="#why-bayena" className="transition hover:text-slate-900">Why Bayena</a>
            <a href="#contact" className="transition hover:text-slate-900">Contact</a>
          </nav>
          <a
            href="#contact"
            className="rounded-lg px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
            style={{ backgroundColor: BLUE }}
          >
            Book a Strategy Call
          </a>
        </div>
      </header>

      {/* ── Hero ───────────────────────────────────────────── */}
      <section id="top" className="relative overflow-hidden border-b border-slate-100">
        {/* subtle grid background */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#1a6b8a 1px, transparent 1px), linear-gradient(90deg, #1a6b8a 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 py-28 sm:px-6 sm:py-36">
          <div className="mx-auto max-w-3xl text-center">
            <div
              className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
              style={{ borderColor: `${BLUE}40`, color: BLUE }}
            >
              AI · Automation · Growth Systems
            </div>
            <h1 className="text-5xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-6xl lg:text-[4rem]">
              Build Faster.{" "}
              <span style={{ color: BLUE }}>Scale Smarter.</span>
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-slate-500 sm:text-xl">
              We help startups and growing businesses implement AI, automation,
              websites, and sales systems that drive measurable growth.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#contact"
                className="w-full rounded-lg px-8 py-3.5 text-center text-sm font-bold text-white transition hover:opacity-90 sm:w-auto"
                style={{ backgroundColor: BLUE }}
              >
                Book a Strategy Call
              </a>
              <a
                href="#services"
                className="w-full rounded-lg border border-slate-300 px-8 py-3.5 text-center text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 sm:w-auto"
              >
                View Services
              </a>
            </div>
          </div>

          {/* stat strip */}
          <div className="mx-auto mt-20 grid max-w-3xl grid-cols-3 gap-px rounded-2xl border border-slate-200 bg-slate-200 overflow-hidden shadow-sm">
            {[
              { value: "5", label: "Core Service Areas" },
              { value: "AI-First", label: "Implementation Approach" },
              { value: "End-to-End", label: "Strategy to Execution" },
            ].map((s) => (
              <div key={s.label} className="bg-white px-6 py-6 text-center">
                <p className="text-2xl font-extrabold tracking-tight text-slate-900">{s.value}</p>
                <p className="mt-1 text-xs font-medium text-slate-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ───────────────────────────────────────── */}
      <section id="services" className="scroll-mt-20 bg-slate-50 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest" style={{ color: BLUE }}>
              What We Do
            </p>
            <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Services
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-500">
              From strategy to implementation — we build the systems that grow your business.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:border-[#1a6b8a]/30 hover:shadow-md"
              >
                <h3 className="text-lg font-bold text-slate-900">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">{service.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border px-3 py-1 text-xs font-medium text-slate-600 transition group-hover:border-[#1a6b8a]/30"
                      style={{ borderColor: "#e2e8f0" }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* CTA card */}
            <div
              className="flex flex-col items-start justify-between rounded-2xl p-7"
              style={{ backgroundColor: NAVY }}
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  Ready to start?
                </p>
                <h3 className="mt-3 text-xl font-bold leading-snug text-white">
                  Let&apos;s build the systems your business needs to scale.
                </h3>
              </div>
              <a
                href="#contact"
                className="mt-8 inline-block rounded-lg px-6 py-3 text-sm font-bold text-white transition hover:opacity-90"
                style={{ backgroundColor: BLUE }}
              >
                Book a Strategy Call →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Bayena ─────────────────────────────────────── */}
      <section id="why-bayena" className="scroll-mt-20 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-start gap-16 lg:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest" style={{ color: BLUE }}>
                Why Bayena
              </p>
              <h2 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl">
                Technology Alone Doesn&apos;t Create Growth.{" "}
                <span style={{ color: BLUE }}>Systems Do.</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-500">
                Bayena helps businesses implement the strategy, technology, and operational
                systems needed to scale with confidence. We combine business consulting,
                automation, and modern digital infrastructure to create sustainable growth.
              </p>
              <a
                href="#contact"
                className="mt-8 inline-block rounded-lg px-7 py-3.5 text-sm font-bold text-white transition hover:opacity-90"
                style={{ backgroundColor: BLUE }}
              >
                Work With Us
              </a>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {DIFFERENTIATORS.map((d) => (
                <div key={d.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <div
                    className="mb-4 h-1 w-8 rounded-full"
                    style={{ backgroundColor: BLUE }}
                  />
                  <h3 className="text-sm font-bold text-slate-900">{d.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{d.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Process ────────────────────────────────────────── */}
      <section className="bg-slate-50 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest" style={{ color: BLUE }}>
              How We Work
            </p>
            <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900">
              From Strategy to Execution
            </h2>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "01", title: "Discover", body: "We audit your business, understand your goals, and identify the highest-leverage growth opportunities." },
              { step: "02", title: "Design", body: "We design a tailored strategy — systems, automations, and digital assets — matched to your stage and objectives." },
              { step: "03", title: "Build", body: "We implement everything: AI tools, sales workflows, websites, dashboards, and operating systems." },
              { step: "04", title: "Scale", body: "We optimize, measure, and iterate so your systems keep performing as your business grows." },
            ].map((item) => (
              <div key={item.step} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                <span
                  className="text-4xl font-black leading-none"
                  style={{ color: `${BLUE}20` }}
                >
                  {item.step}
                </span>
                <h3 className="mt-4 text-base font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ──────────────────────────────────────── */}
      <section className="py-24 sm:py-32" style={{ backgroundColor: NAVY }}>
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
            Get Started
          </p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Ready to Build Faster and Scale Smarter?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-400">
            Book a strategy call and let&apos;s map out exactly what your business needs to grow.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#contact"
              className="w-full rounded-lg px-8 py-3.5 text-center text-sm font-bold text-white transition hover:opacity-90 sm:w-auto"
              style={{ backgroundColor: BLUE }}
            >
              Book a Strategy Call
            </a>
            <a
              href="#services"
              className="w-full rounded-lg border border-slate-600 px-8 py-3.5 text-center text-sm font-semibold text-slate-300 transition hover:border-slate-400 hover:text-white sm:w-auto"
            >
              View Services
            </a>
          </div>
        </div>
      </section>

      {/* ── Contact ────────────────────────────────────────── */}
      <section id="contact" className="scroll-mt-20 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest" style={{ color: BLUE }}>
              Contact
            </p>
            <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900">
              Book a Strategy Call
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-500">
              Tell us about your business and goals. We&apos;ll follow up to schedule a call.
            </p>
          </div>
          <div className="mt-12">
            <BayenaVenturesContactForm defaultInquiryType="Book a consultation" />
          </div>
        </div>
      </section>

      {/* ── Newsletter ─────────────────────────────────────── */}
      <section className="py-20 sm:py-28" style={{ backgroundColor: NAVY }}>
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Stay in the Loop
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-400">
            Get practical insights on AI, business strategy, and growth systems — delivered to your inbox.
          </p>
          <div className="mt-8">
            <NewsletterForm />
          </div>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────── */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <WhaleMark className="h-5 w-11 text-[#1a6b8a]" />
              <div className="leading-tight">
                <p className="text-sm font-bold text-slate-900">BAYENA</p>
                <p className="text-xs font-medium tracking-widest uppercase text-slate-400">
                  Strategy · Systems · Growth
                </p>
              </div>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-slate-500">
              Bayena helps businesses launch, automate, and scale through AI, systems, and growth-focused strategy.
            </p>
            <p className="text-xs text-slate-400 whitespace-nowrap">
              © {new Date().getFullYear()} Bayena. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
