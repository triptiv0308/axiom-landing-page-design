import Image from "next/image"

const navy = "#0f2c5c"
const green = "#1f8a4c"

const workflow = [
  "Old Record",
  "AI Digitization",
  "Confidence Check",
  "Human Verification",
  "Cross Verification",
  "GIS Validation",
  "Transaction Safety",
]

const trustIndicators = [
  {
    title: "AI-assisted verification",
    description: "Automated OCR and structured extraction from scanned land records.",
  },
  {
    title: "Multi-source cross-checking",
    description: "Records reconciled against registry, mutation and cadastral sources.",
  },
  {
    title: "GIS boundary validation",
    description: "Parcel boundaries verified against cadastral maps for area conflicts.",
  },
  {
    title: "Transaction risk detection",
    description: "Inconsistencies surfaced before a property transfer takes place.",
  },
]

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Top bar */}
      <header className="border-b border-slate-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div
              className="flex h-8 w-8 items-center justify-center rounded-md text-sm font-bold text-white"
              style={{ backgroundColor: navy }}
              aria-hidden="true"
            >
              A
            </div>
            <span className="text-lg font-semibold tracking-tight" style={{ color: navy }}>
              AXIOM
            </span>
            <span className="ml-2 hidden text-xs font-medium uppercase tracking-widest text-slate-400 sm:inline">
              Record Intelligence
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: green }} aria-hidden="true" />
              System Ready
            </span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <span
            className="inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider"
            style={{ backgroundColor: "#eaf3ff", color: navy }}
          >
            Smart India Hackathon 2026
          </span>
          <h1 className="mt-5 text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl" style={{ color: navy }}>
            Verify Land Records Before You Transfer.
          </h1>
          <p className="mt-5 max-w-md text-pretty text-lg leading-relaxed text-slate-600">
            AI-assisted digitization, verification and risk analysis for safer property transactions.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#"
              className="rounded-md px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: navy }}
            >
              TRY LIVE DEMO
            </a>
            <a
              href="#how-it-works"
              className="rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
            >
              VIEW HOW IT WORKS
            </a>
          </div>
        </div>

        {/* Provided image */}
        <div className="relative overflow-hidden rounded-xl border border-slate-200 shadow-sm">
          <Image
            src="/axiom-record-intelligence.png"
            alt="AXIOM Record Intelligence interface showing a scanned Record of Rights being digitized with AI extraction and a 97.8% match confidence result."
            width={1456}
            height={1092}
            className="h-auto w-full"
            priority
          />
        </div>
      </section>

      {/* Workflow */}
      <section id="how-it-works" className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="text-center text-sm font-semibold uppercase tracking-widest text-slate-500">
            How it works
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {workflow.map((step, i) => (
              <div key={step} className="flex items-center gap-3">
                <span className="rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
                  {step}
                </span>
                {i < workflow.length - 1 && (
                  <span className="text-slate-400" aria-hidden="true">
                    &rarr;
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust indicators */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustIndicators.map((item) => (
            <div key={item.title} className="rounded-lg border border-slate-200 p-5">
              <div className="h-1 w-10 rounded-full" style={{ backgroundColor: green }} aria-hidden="true" />
              <h3 className="mt-4 text-base font-semibold" style={{ color: navy }}>
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-slate-500">
          AXIOM &mdash; Intelligent Land Record Digitization &amp; Validation System
        </div>
      </footer>
    </main>
  )
}
