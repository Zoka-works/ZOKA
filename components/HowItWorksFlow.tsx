import * as React from "react";

type Step = {
  number: string;
  title: string;
  description: string;
  highlighted?: boolean;
  icon: React.ReactNode;
};

const steps: Step[] = [
  {
    number: "01",
    title: "Identify Ideal Clients",
    description:
      "We define your target audience based on industry, role, and intent.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="h-5 w-5"
      >
        <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="m20 20-3.5-3.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Build Targeted Lead List",
    description: "Scrape, verify, and enrich high-quality B2B leads.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="h-5 w-5"
      >
        <rect
          x="4"
          y="5"
          width="16"
          height="14"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M8 9h8M8 13h5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Launch Personalized Outreach",
    description:
      "AI-powered emails with personalization and optimized deliverability.",
    highlighted: true,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="h-5 w-5"
      >
        <path
          d="M4 7.5 12 13l8-5.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          x="3"
          y="5"
          width="18"
          height="14"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="m12 9 4-3"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Receive Qualified Replies",
    description: "You get real responses and book meetings.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="h-5 w-5"
      >
        <path
          d="M7 12.5 10 15.5 17 8.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          x="4"
          y="4"
          width="16"
          height="16"
          rx="4"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </svg>
    ),
  },
];

function Connector(): React.JSX.Element {
  return (
    <>
      <div className="absolute left-6 top-full h-8 w-px bg-gradient-to-b from-blue-400/40 via-violet-400/30 to-transparent lg:hidden" />
      <div className="pointer-events-none absolute left-[calc(100%+1rem)] top-1/2 hidden h-px w-8 -translate-y-1/2 lg:block">
        <div className="relative h-full w-full overflow-hidden rounded-full bg-gradient-to-r from-blue-400/35 via-violet-400/40 to-white/10">
          <div className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 border-r border-t border-violet-300/70" />
        </div>
      </div>
    </>
  );
}

export default function HowItWorksFlow(): React.JSX.Element {
  return (
    <section className="relative isolate overflow-hidden border-y border-white/10 bg-slate-950 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.14),transparent_22%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-200/80 shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset]">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-400 to-violet-400" />
            System Flow
          </div>

          <h2 className="mt-6 text-4xl font-extrabold tracking-[-0.04em] text-white sm:text-5xl md:text-6xl">
            How the Outbound Engine Works
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/62 sm:text-lg">
            A simple, proven system to generate qualified leads consistently.
          </p>
        </div>

        <div className="relative mt-16 flex flex-col gap-8 lg:flex-row lg:gap-8">
          <div className="pointer-events-none absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-white/0 via-white/10 to-white/0 lg:hidden" />

          {steps.map((step, index) => (
            <div key={step.number} className="relative flex-1">
              <article
                className={[
                  "group relative h-full overflow-hidden rounded-3xl border p-8 transition-all duration-300",
                  "shadow-[0_18px_60px_rgba(2,6,23,0.42)] hover:-translate-y-1.5",
                  step.highlighted
                    ? "border-violet-400/30 bg-gradient-to-br from-blue-500/10 via-violet-500/10 to-white/[0.04] hover:shadow-[0_24px_70px_rgba(99,102,241,0.2)]"
                    : "border-white/10 bg-white/[0.035] hover:border-violet-400/20 hover:bg-white/[0.05] hover:shadow-[0_24px_70px_rgba(59,130,246,0.14)]",
                ].join(" ")}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.14),transparent_34%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                <div className="relative">
                  <div className="flex items-center justify-between gap-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/18 to-violet-500/18 text-blue-200 shadow-[0_8px_30px_rgba(59,130,246,0.16)]">
                      {step.icon}
                    </div>

                    <span className="text-xs font-semibold tracking-[0.24em] text-white/35">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-8 text-2xl font-bold tracking-[-0.03em] text-white">
                    {step.title}
                  </h3>

                  <p className="mt-4 max-w-xs text-sm leading-7 text-white/62 sm:text-base">
                    {step.description}
                  </p>

                  {step.highlighted ? (
                    <div className="mt-6 inline-flex items-center rounded-full border border-violet-300/20 bg-violet-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-200">
                      Conversion point
                    </div>
                  ) : null}
                </div>
              </article>

              {index < steps.length - 1 ? <Connector /> : null}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm font-medium tracking-[0.18em] text-white/42 uppercase">
            System goes live in 7-14 days.
          </p>
        </div>
      </div>
    </section>
  );
}
