import BayenaVenturesContactForm from "@/components/BayenaVenturesContactForm";

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-widest text-amber-600">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-3 text-lg text-slate-600">{subtitle}</p>}
    </div>
  );
}

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mt-0.5 h-5 w-5 shrink-0 text-amber-600"
        aria-hidden="true"
      >
        <path d="M20 6L9 17l-5-5" />
      </svg>
      <span className="text-slate-700">{children}</span>
    </li>
  );
}

const AUDIENCES = [
  {
    title: "For Investors",
    tagline: "Put your capital to work through private opportunities.",
    intro: "Bayena Ventures offers access to selected investment opportunities, including:",
    items: [
      "Asset-backed lending",
      "Private credit",
      "Real estate opportunities",
      "Business funding deals",
      "Revenue-share agreements",
      "Short-term capital placements",
      "Strategic acquisitions and partnerships",
    ],
    footer:
      "Our goal is to identify opportunities where capital is protected by structure, collateral, cash flow, or clear business fundamentals.",
  },
  {
    title: "For Borrowers",
    tagline: "Access capital without traditional bank friction.",
    intro: "Bayena Ventures works with borrowers who need funding for:",
    items: [
      "Business growth",
      "Real estate transactions",
      "Inventory or equipment",
      "Short-term liquidity",
      "Bridge financing",
      "Project funding",
      "Asset-backed loans",
    ],
    footer:
      "We review each opportunity based on collateral, repayment ability, business strength, and deal structure.",
  },
  {
    title: "For Business Owners",
    tagline: "Structure capital opportunities for growth.",
    intro: "We can help with:",
    items: [
      "Raising private capital",
      "Structuring investor offers",
      "Creating lending terms",
      "Building deal presentations",
      "Organizing financial documents",
      "Reviewing business opportunities",
      "Connecting with strategic capital partners",
    ],
    footer:
      "Bayena Ventures helps business owners structure capital opportunities for growth.",
  },
];

const OPPORTUNITIES = [
  "Private lending",
  "Secured notes",
  "Real estate-backed loans",
  "Business loans",
  "Profit participation deals",
  "Revenue-share investments",
  "Acquisition financing",
  "Special situation opportunities",
];

const PRINCIPLES = [
  "Clear deal terms",
  "Asset protection",
  "Transparent documentation",
  "Responsible underwriting",
  "Practical risk management",
  "Strategic capital deployment",
  "Long-term investor relationships",
];

const STEPS = [
  {
    title: "Submit Your Opportunity",
    body: "Investors, borrowers, and business owners can submit basic information about their goals.",
  },
  {
    title: "Review & Evaluation",
    body: "We review the opportunity, capital need, risk profile, collateral, repayment plan, and potential upside.",
  },
  {
    title: "Deal Structuring",
    body: "If the opportunity fits, we help structure the terms, documents, timeline, and investor presentation.",
  },
  {
    title: "Capital Placement",
    body: "Approved opportunities may be introduced to private capital partners, lenders, or investors.",
  },
  {
    title: "Ongoing Management",
    body: "We track performance, payments, reporting, communication, and investor updates.",
  },
];

const WHO_WE_WORK_WITH = [
  "Private investors",
  "Entrepreneurs",
  "Business owners",
  "Real estate operators",
  "Asset owners",
  "High-income professionals",
  "Borrowers seeking private capital",
  "Investors seeking alternative opportunities",
];

export default function HomePage() {
  return (
    <div className="bg-white">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500 text-sm font-bold text-slate-950">
              BV
            </span>
            <span className="text-sm font-semibold tracking-tight text-white">
              Bayena Ventures
            </span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#what-we-do" className="transition hover:text-white">
              What We Do
            </a>
            <a href="#opportunities" className="transition hover:text-white">
              Opportunities
            </a>
            <a href="#how-it-works" className="transition hover:text-white">
              How It Works
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>
          <a
            href="#contact"
            className="rounded-lg bg-amber-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
          >
            Get Started
          </a>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden bg-slate-950">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(600px 300px at 80% 20%, rgba(245,158,11,0.25), transparent), radial-gradient(500px 300px at 10% 80%, rgba(245,158,11,0.12), transparent)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Bayena Ventures
          </h1>
          <p className="mt-3 text-lg font-medium text-amber-400 sm:text-xl">
            Private Capital. Real Assets. Strategic Opportunities.
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            Bayena Ventures is an asset management and private capital platform built for
            investors, borrowers, and business owners seeking structured financial
            opportunities. We connect capital with opportunity through asset-backed lending,
            private investment deals, business funding, and strategic capital partnerships.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="rounded-lg bg-amber-500 px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
            >
              Submit a Funding Request
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-slate-600 px-6 py-3 text-center text-sm font-semibold text-white transition hover:border-slate-400 hover:bg-white/5"
            >
              Join the Investor List
            </a>
          </div>
        </div>
      </section>

      <section id="what-we-do" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6 sm:py-24">
        <SectionHeading
          eyebrow="What We Do"
          title="Structure, accountability, and clear terms"
          subtitle="Bayena Ventures helps individuals, businesses, and investors participate in private financial opportunities. Our focus is simple:"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            "Help investors place capital into secured or strategic opportunities",
            "Help borrowers access funding backed by assets, business income, or investment potential",
            "Help businesses and operators structure deals, raise capital, and grow",
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center"
            >
              <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-sm font-bold text-amber-500">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-4 font-medium leading-relaxed text-slate-800">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Who It's For"
            title="Built for investors, borrowers, and operators"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {AUDIENCES.map((audience) => (
              <div
                key={audience.title}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <h3 className="text-xl font-bold text-slate-900">{audience.title}</h3>
                <p className="mt-1 font-medium text-amber-600">{audience.tagline}</p>
                <p className="mt-4 text-sm text-slate-600">{audience.intro}</p>
                <ul className="mt-4 flex-1 space-y-2.5 text-sm">
                  {audience.items.map((item) => (
                    <CheckItem key={item}>{item}</CheckItem>
                  ))}
                </ul>
                <p className="mt-5 border-t border-slate-100 pt-4 text-sm leading-relaxed text-slate-500">
                  {audience.footer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="opportunities" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6 sm:py-24">
        <SectionHeading
          eyebrow="Investment Opportunities"
          title="Where we focus"
          subtitle="Each opportunity is evaluated individually and structured with clear terms, repayment expectations, risk factors, and documentation."
        />
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {OPPORTUNITIES.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-slate-200 bg-white p-5 text-center text-sm font-semibold text-slate-800 shadow-sm transition hover:border-amber-400"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-amber-500">
                Why Bayena Ventures
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Private capital works when structure comes first.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-300">
                We are not here to sell hype. We are here to structure serious opportunities.
              </p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {PRINCIPLES.map((principle) => (
                <li
                  key={principle}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-slate-100"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                  {principle}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6 sm:py-24">
        <SectionHeading eyebrow="How It Works" title="From submission to management" />
        <ol className="mx-auto mt-12 max-w-3xl space-y-8">
          {STEPS.map((step, i) => (
            <li key={step.title} className="flex gap-5">
              <div className="flex flex-col items-center">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-950 text-sm font-bold text-amber-500">
                  {i + 1}
                </span>
                {i < STEPS.length - 1 && (
                  <span className="mt-2 w-px flex-1 bg-slate-200" aria-hidden="true" />
                )}
              </div>
              <div className="pb-2">
                <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-1 leading-relaxed text-slate-600">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading eyebrow="Who We Work With" title="Our partners and clients" />
          <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-3">
            {WHO_WE_WORK_WITH.map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6 sm:py-24">
        <SectionHeading
          eyebrow="Contact"
          title="Get in touch"
          subtitle="Submit your funding request, join the investor list, or send us an opportunity for review."
        />
        <div className="mt-12">
          <BayenaVenturesContactForm />
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Important Disclaimer
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Bayena Ventures is not a bank. All investments involve risk, including possible
              loss of principal. Lending and investment opportunities are reviewed individually
              and are not guaranteed. Any investment or loan opportunity should be evaluated
              with proper legal, tax, and financial advisors.
            </p>
          </div>
          <div className="mt-10 flex justify-center">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-950 text-sm font-bold text-amber-500">
                BV
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-900">Bayena Ventures</p>
                <p className="text-xs text-slate-500">Private Capital. Structured Opportunity.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
