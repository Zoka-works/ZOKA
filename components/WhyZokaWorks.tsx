import * as React from "react";

type Reason = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const reasons: Reason[] = [
  {
    title: "Built by a Senior Developer",
    description:
      "Your system is engineered end-to-end - not outsourced or templated.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="h-5 w-5"
      >
        <path
          d="M12 3 4 7v5c0 5 3.4 8.7 8 9 4.6-.3 8-4 8-9V7l-8-4Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m9.5 12 1.7 1.7 3.8-4.2"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Focused on ROI, Not Just Design",
    description:
      "Every decision is made to increase replies, meetings, and revenue.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="h-5 w-5"
      >
        <path
          d="M4 16.5 9 11.5l3.2 3.2L20 7"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 7h6v6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Data + Outreach + Routing Combined",
    description:
      "Lead sourcing, sending infrastructure, and follow-up logic work together.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="h-5 w-5"
      >
        <path
          d="M12 3v4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M6.4 5.4 9 8"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M3 12h4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="m6.4 18.6 2.6-2.6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M12 17v4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="m17.6 18.6-2.6-2.6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M17 12h4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M17.6 5.4 15 8"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <rect
          x="8"
          y="8"
          width="8"
          height="8"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </svg>
    ),
  },
  {
    title: "Fast Execution (7-14 Days)",
    description:
      "Most outbound systems go live in 7-14 days.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="h-5 w-5"
      >
        <path
          d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function WhyZokaWorks(): React.JSX.Element {
  return (
    <section className="relative isolate overflow-hidden border-y border-white/10 bg-slate-950 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.14),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.12),transparent_24%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-200/80 shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset]">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-400 to-violet-400" />
            Why Zoka.works
          </div>

          <h2 className="mt-6 max-w-3xl text-4xl font-extrabold tracking-[-0.04em] text-white sm:text-5xl md:text-6xl">
            Built for results
            <span className="text-white/45"> - </span>
            <span className="bg-gradient-to-r from-blue-300 via-violet-300 to-blue-500 bg-clip-text text-transparent">
              not just polished screens.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/62 sm:text-lg">
            Built to produce replies, meetings, and a predictable B2B pipeline.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {reasons.map((reason) => (
            <article
              key={reason.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-8 shadow-[0_18px_60px_rgba(2,6,23,0.42)] transition-all duration-300 hover:-translate-y-1.5 hover:border-violet-400/30 hover:bg-white/[0.05] hover:shadow-[0_24px_70px_rgba(59,130,246,0.14)]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.14),transparent_34%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/18 to-violet-500/18 text-blue-200 shadow-[0_8px_30px_rgba(59,130,246,0.16)]">
                  {reason.icon}
                </div>

                <h3 className="mt-6 text-2xl font-bold tracking-[-0.03em] text-white">
                  {reason.title}
                </h3>

                <p className="mt-4 max-w-md text-sm leading-7 text-white/62 sm:text-base">
                  {reason.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
