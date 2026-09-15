"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { Menu, X, Globe, Sun, Moon, LogIn, LifeBuoy, ChevronRight, Mail, MessageCircle } from "lucide-react"

const navLinks = [
  { label: "Home", href: "#" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Live Demo", href: "#" },
  { label: "Help & Support", href: "#support" },
]

const languages = ["English", "हिन्दी", "தமிழ்", "తెలుగు", "বাংলা", "मराठी"]

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

function useDismiss<T extends HTMLElement>(onDismiss: () => void) {
  const ref = useRef<T>(null)
  useEffect(() => {
    function handle(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) onDismiss()
    }
    document.addEventListener("mousedown", handle)
    return () => document.removeEventListener("mousedown", handle)
  }, [onDismiss])
  return ref
}

export default function Page() {
  const [dark, setDark] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [lang, setLang] = useState("English")

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    setDark(prefersDark)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark)
  }, [dark])

  const menuRef = useDismiss<HTMLDivElement>(() => setMenuOpen(false))
  const langRef = useDismiss<HTMLDivElement>(() => setLangOpen(false))

  return (
    <main className="min-h-screen bg-white text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100">
      {/* Top bar */}
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur-md transition-colors dark:border-slate-800 dark:bg-slate-950/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
          <div className="flex items-center gap-3">
            {/* Three-line navigation */}
            <div className="relative" ref={menuRef}>
              <button
                type="button"
                onClick={() => setMenuOpen((v) => !v)}
                aria-expanded={menuOpen}
                aria-label="Open navigation menu"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 text-slate-600 transition-colors hover:bg-slate-50 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-900"
              >
                {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
              {menuOpen && (
                <nav className="absolute left-0 top-11 w-52 overflow-hidden rounded-lg border border-slate-200 bg-white py-1 shadow-lg dark:border-slate-800 dark:bg-slate-900">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center justify-between px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800"
                    >
                      {link.label}
                      <ChevronRight className="h-4 w-4 text-slate-400" />
                    </a>
                  ))}
                </nav>
              )}
            </div>

            <div className="flex items-center gap-2">
              <div
                className="flex h-8 w-8 items-center justify-center rounded-md bg-[#0f2c5c] text-sm font-bold text-white dark:bg-[#3b6fd4]"
                aria-hidden="true"
              >
                A
              </div>
              <span className="text-lg font-semibold tracking-tight text-[#0f2c5c] dark:text-slate-100">AXIOM</span>
              <span className="ml-1 hidden text-xs font-medium uppercase tracking-widest text-slate-400 sm:inline">
                Record Intelligence
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            {/* Multilingual */}
            <div className="relative" ref={langRef}>
              <button
                type="button"
                onClick={() => setLangOpen((v) => !v)}
                aria-expanded={langOpen}
                aria-label="Select language"
                className="flex h-9 items-center gap-1.5 rounded-md border border-slate-200 px-2.5 text-slate-600 transition-colors hover:bg-slate-50 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-900"
              >
                <Globe className="h-5 w-5" />
                <span className="hidden text-sm font-medium sm:inline">{lang}</span>
              </button>
              {langOpen && (
                <div className="absolute right-0 top-11 w-40 overflow-hidden rounded-lg border border-slate-200 bg-white py-1 shadow-lg dark:border-slate-800 dark:bg-slate-900">
                  {languages.map((l) => (
                    <button
                      key={l}
                      type="button"
                      onClick={() => {
                        setLang(l)
                        setLangOpen(false)
                      }}
                      className={`flex w-full items-center px-4 py-2 text-left text-sm transition-colors hover:bg-slate-50 dark:hover:bg-slate-800 ${
                        l === lang
                          ? "font-semibold text-[#1f8a4c] dark:text-[#4ade80]"
                          : "text-slate-700 dark:text-slate-200"
                      }`}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Theme toggle */}
            <button
              type="button"
              onClick={() => setDark((v) => !v)}
              aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
              className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 text-slate-600 transition-colors hover:bg-slate-50 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-900"
            >
              {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            {/* Sign in */}
            <a
              href="#"
              className="flex h-9 items-center gap-1.5 rounded-md bg-[#0f2c5c] px-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 dark:bg-[#3b6fd4]"
            >
              <LogIn className="h-4 w-4" />
              <span className="hidden sm:inline">Sign in</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.4] dark:opacity-[0.25]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(15,44,92,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,44,92,0.06) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
          aria-hidden="true"
        />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#0f2c5c] dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
              <span className="h-2 w-2 rounded-full bg-[#1f8a4c]" aria-hidden="true" />
              System Ready
            </span>
            <h1 className="mt-5 text-balance text-4xl font-bold leading-tight tracking-tight text-[#0f2c5c] sm:text-5xl dark:text-white">
              Verify Land Records Before You Transfer.
            </h1>
            <p className="mt-5 max-w-md text-pretty text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              AI-assisted digitization, verification and risk analysis for safer property transactions.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#"
                className="rounded-md bg-[#0f2c5c] px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 dark:bg-[#3b6fd4]"
              >
                TRY LIVE DEMO
              </a>
              <a
                href="#how-it-works"
                className="rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-900"
              >
                VIEW HOW IT WORKS
              </a>
            </div>
          </div>

          {/* Provided image */}
          <div className="relative overflow-hidden rounded-xl border border-slate-200 shadow-sm dark:border-slate-800">
            <Image
              src="/axiom-record-intelligence.png"
              alt="AXIOM Record Intelligence interface showing a scanned Record of Rights being digitized with AI extraction and a 97.8% match confidence result."
              width={1456}
              height={1092}
              className="h-auto w-full"
              priority
            />
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section id="how-it-works" className="border-y border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="text-center text-sm font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
            How it works
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {workflow.map((step, i) => (
              <div key={step} className="flex items-center gap-3">
                <span className="rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
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
      <section id="capabilities" className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustIndicators.map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-slate-200 p-5 transition-colors dark:border-slate-800"
            >
              <div className="h-1 w-10 rounded-full bg-[#1f8a4c]" aria-hidden="true" />
              <h3 className="mt-4 text-base font-semibold text-[#0f2c5c] dark:text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Help & Support */}
      <section
        id="support"
        className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50"
      >
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="flex flex-col items-start justify-between gap-6 rounded-xl border border-slate-200 bg-white p-8 shadow-sm sm:flex-row sm:items-center dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#eaf3ff] text-[#0f2c5c] dark:bg-slate-800 dark:text-[#7fa8ec]">
                <LifeBuoy className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-[#0f2c5c] dark:text-white">Help &amp; Support</h2>
                <p className="mt-1 max-w-md text-sm text-slate-600 dark:text-slate-300">
                  Questions about verification, record uploads or transaction safety? Our team is here to help.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:support@axiom.gov"
                className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                <Mail className="h-4 w-4" />
                Email us
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-md bg-[#0f2c5c] px-4 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 dark:bg-[#3b6fd4]"
              >
                <MessageCircle className="h-4 w-4" />
                Live chat
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 dark:border-slate-800">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 px-6 py-6 text-sm text-slate-500 sm:flex-row sm:items-center dark:text-slate-400">
          <span>AXIOM &mdash; Intelligent Land Record Digitization &amp; Validation System</span>
          <a href="#support" className="font-medium text-[#0f2c5c] hover:underline dark:text-[#7fa8ec]">
            Help &amp; Support
          </a>
        </div>
      </footer>
    </main>
  )
}
