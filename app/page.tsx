"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  BrainCircuit,
  Database,
  MonitorUp,
  Fingerprint,
  EyeOff,
  Move,
  LockKeyhole,
  Microscope,
  Cpu,
  Network,
  ArrowRight,
} from "lucide-react";

/* ── data ────────────────────────────────────────────── */

const featureGroups = [
  {
    title: "Clinical Performance",
    desc: "Every component chosen for one purpose: zero compromise when lives are on the line.",
    items: [
      { icon: ShieldCheck, text: "HIPAA compliant — built for physicians, not adapted from consumer hardware" },
      { icon: Database, text: "Process large CBCT, CT, and MRI datasets without lag or crashing" },
      { icon: Microscope, text: "Advanced surgical planning and AI-assisted diagnostics" },
      { icon: BrainCircuit, text: "Enhanced image clarity for imaging-heavy specialties" },
    ],
  },
  {
    title: "Absolute Security",
    desc: "Multi-layered protection that exceeds HIPAA requirements — without slowing you down.",
    items: [
      { icon: Fingerprint, text: "Multi-factor authentication: facial recognition, fingerprint, & smart card ID" },
      { icon: EyeOff, text: "Anti-peeping technology — auto sign-out when you step away" },
      { icon: LockKeyhole, text: "Security interlock — one touch wakes all integrated systems" },
      { icon: Network, text: "Secure remote case review and research workflows" },
    ],
  },
  {
    title: "Intelligent Interface",
    desc: "Technology that adapts to the physician — not the other way around.",
    items: [
      { icon: Move, text: "Touchless hand gesture control — no screen or mouse contact needed" },
      { icon: MonitorUp, text: "DICOM monitor display — AI calibration on non-DICOM monitors" },
      { icon: Cpu, text: "Smart sensing technology optimized for AI learning environments" },
    ],
  },
];

const hospitalBenefits = [
  "Improves surgical precision and pre-operative planning",
  "Reduces workflow inefficiencies caused by slow imaging systems",
  "Enhances AI integration into clinical decision-making",
  "Supports academic research and resident training",
  "Standardizes high-performance computing across departments",
];

const targetUsers = [
  "Surgeons",
  "Dental Specialists",
  "Radiologists",
  "Academic Faculty",
  "Research Teams",
  "AI-Focused Departments",
  "Medical Professionals",
];

/* ── page ─────────────────────────────────────────────── */

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F4F7FC] text-[#0B1A2F] font-sans selection:bg-[#4F86F7] selection:text-white relative overflow-x-hidden">
      {/* ambient glows – soft blue tones */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -top-40 left-[10%] w-[700px] h-[700px] rounded-full bg-[#D6E4FF]/60 blur-[200px]" />
        <div className="absolute top-[45%] right-[5%] w-[800px] h-[800px] rounded-full bg-[#4F86F7]/10 blur-[250px]" />
        <div className="absolute bottom-0 left-[40%] w-[600px] h-[400px] rounded-full bg-[#1F417D]/5 blur-[180px]" />
      </div>

      {/* ─── NAVBAR ─── */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/70 border-b border-[#0B1A2F]/5">
        <div className="max-w-[1320px] mx-auto px-6 h-[72px] flex items-center justify-between">
          <span className="text-[22px] font-bold tracking-tight flex items-center gap-2.5 text-[#0B1A2F]">
            <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#1F417D] to-[#4F86F7] grid place-items-center shadow-lg shadow-blue-500/20">
              <span className="w-3.5 h-3.5 bg-white rounded-[4px]" />
            </span>
            Intelliplan
          </span>
          <a
            href="#contact"
            className="bg-[#0B1A2F] text-white text-[13px] font-bold px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity"
          >
            Join Beta Program
          </a>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section className="relative z-10 pt-40 pb-10 px-6">
        <div className="max-w-[1320px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-[#4F86F7]/10 border border-[#4F86F7]/20">
              <span className="w-2 h-2 rounded-full bg-[#4F86F7] animate-pulse" />
              <span className="text-[12px] font-semibold text-[#4F86F7] uppercase tracking-widest">Clinical-Grade AI Workstation</span>
            </div>

            <h1 className="text-[clamp(48px,7vw,88px)] font-semibold leading-[1.05] tracking-tight mb-6 text-[#0B1A2F]">
              Carry Medicine.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1F417D] to-[#4F86F7]">Absolute Security.</span>
            </h1>

            <p className="text-[#0B1A2F]/55 text-lg md:text-xl leading-relaxed max-w-xl mb-10">
              The power of an institutional diagnostic center, wrapped in a high-end laptop. Built specifically for physicians — not adapted from consumer hardware.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="bg-[#0B1A2F] text-white text-[15px] font-bold px-8 py-4 rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-[#0B1A2F]/20"
              >
                Reserve Workstation
              </a>
              <a
                href="#features"
                className="border border-[#0B1A2F]/12 text-[#0B1A2F] text-[15px] font-medium px-8 py-4 rounded-full hover:bg-white/60 transition-colors"
              >
                Read Specs
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── HERO PRODUCT CARD ─── */}
      <section className="relative z-10 px-6 pt-16 pb-28">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="max-w-[1320px] mx-auto"
        >
          <div className="relative w-full rounded-[32px] border border-white/70 bg-white/40 backdrop-blur-2xl overflow-hidden p-8 md:p-14 shadow-[0_20px_60px_rgba(31,65,125,0.1)]">
            <div className="absolute top-8 right-8 z-20 bg-white/90 backdrop-blur-md rounded-2xl p-5 w-52 border border-[#0B1A2F]/5 shadow-xl hidden md:block">
              <p className="text-[10px] uppercase tracking-widest text-[#0B1A2F]/50 mb-1">Dataset Performance</p>
              <p className="text-lg font-bold text-[#0B1A2F]">Zero Lag MRI</p>
              <div className="mt-3 h-1.5 w-full bg-[#0B1A2F]/10 rounded-full overflow-hidden"><div className="h-full w-full bg-gradient-to-r from-[#1F417D] to-[#4F86F7] rounded-full" /></div>
            </div>
            <div className="relative w-full aspect-[16/8]">
              <Image src="/laptop.png" alt="Intelliplan AI Workstation" fill className="object-contain drop-shadow-[0_30px_60px_rgba(11,26,47,0.2)]" priority />
            </div>
          </div>
        </motion.div>
      </section>

      {/* ─── FEATURES – 3 GROUPED CARDS ─── */}
      <section id="features" className="relative z-10 px-6 pb-28">
        <div className="max-w-[1320px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-5 text-[#0B1A2F]">
              Engineered for Medicine.
            </h2>
            <p className="text-[#0B1A2F]/55 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Every component purpose-built for clinical workflows, diagnostic imaging, and absolute data security.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {featureGroups.map((group, gi) => (
              <div
                key={gi}
                className="rounded-[28px] border border-white/70 bg-white/50 backdrop-blur-xl p-10 flex flex-col shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:bg-white/70 transition-colors"
              >
                <h3 className="text-2xl font-semibold tracking-tight mb-2 text-[#0B1A2F]">{group.title}</h3>
                <p className="text-[#0B1A2F]/45 text-sm leading-relaxed mb-8">{group.desc}</p>

                <div className="flex flex-col gap-5 mt-auto">
                  {group.items.map((item, ii) => (
                    <div key={ii} className="flex items-start gap-3">
                      <div className="w-8 h-8 shrink-0 rounded-lg bg-[#EBF1FF] border border-[#4F86F7]/10 grid place-items-center text-[#4F86F7]">
                        <item.icon size={16} strokeWidth={1.8} />
                      </div>
                      <p className="text-[14px] leading-relaxed text-[#0B1A2F]/75 pt-1">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BOLD STATEMENT ─── */}
      <section className="relative z-10 px-6 py-28">
        <div className="max-w-[1320px] mx-auto text-center">
          <h2 className="text-4xl md:text-7xl font-semibold tracking-tight leading-tight text-[#0B1A2F]">
            They diagnose.<br />You empower.
          </h2>
          <p className="text-[#0B1A2F]/55 text-lg md:text-xl mt-6 max-w-xl mx-auto">
            Hospitals are not buying hardware — they are investing in safety, efficiency, and technological leadership.
          </p>
        </div>
      </section>

      {/* ─── HOSPITAL VALUE CARD ─── */}
      <section id="hospitals" className="relative z-10 px-6 pb-28">
        <div className="max-w-[1320px] mx-auto rounded-[32px] border border-white/70 bg-white/50 backdrop-blur-2xl overflow-hidden shadow-[0_20px_60px_rgba(31,65,125,0.06)]">
          <div className="grid lg:grid-cols-2">
            <div className="p-10 md:p-16 flex flex-col justify-center">
              <h3 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight mb-6 text-[#0B1A2F]">
                Why Hospitals<br />Should Care.
              </h3>
              <p className="text-[#0B1A2F]/55 text-lg leading-relaxed">
                Standardize high-performance computing across all departments. Elevate surgical precision while reclaiming hours lost to sluggish imaging workflows.
              </p>
            </div>
            <div className="p-10 md:p-16 flex flex-col justify-center gap-5 border-t lg:border-t-0 lg:border-l border-[#0B1A2F]/5">
              {hospitalBenefits.map((b, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="text-[#4F86F7] font-bold text-sm mt-0.5 shrink-0">0{i + 1}</span>
                  <p className="text-[15px] leading-relaxed text-[#0B1A2F]">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── TARGET USERS ─── */}
      <section className="relative z-10 px-6 pb-24">
        <div className="max-w-[1320px] mx-auto text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#4F86F7] font-bold mb-8">Built For</p>
          <div className="flex flex-wrap justify-center gap-3">
            {targetUsers.map((u, i) => (
              <span key={i} className="px-5 py-2.5 rounded-full border border-[#0B1A2F]/8 bg-white/60 text-sm font-medium text-[#0B1A2F]/65 hover:text-[#0B1A2F] hover:border-[#4F86F7]/30 hover:bg-[#EBF1FF] transition-colors">
                {u}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA / FORM ─── */}
      <section id="contact" className="relative z-10 px-6 py-28">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-4xl md:text-7xl font-semibold tracking-tight mb-5 text-[#0B1A2F]">
            Join the Beta Program.
          </h2>
          <p className="inline-block bg-[#4F86F7]/10 border border-[#4F86F7]/25 text-[#1F417D] font-semibold text-lg md:text-xl px-6 py-2 rounded-full mb-4">
            First 1,000 users — $500 Flagship Offer
          </p>
          <p className="text-[#0B1A2F]/45 text-base mt-4">
            Sign up now. Build your verified physician interest list.
          </p>
        </div>

        <form className="max-w-2xl mx-auto rounded-[28px] border border-white/70 bg-white/60 backdrop-blur-2xl p-8 md:p-12 space-y-5 shadow-[0_20px_60px_rgba(31,65,125,0.06)]" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Field label="Full Name" placeholder="Dr. Jane Doe" />
            <Field label="Specialty" placeholder="e.g. Radiology, Surgery" />
          </div>
          <Field label="Institution / Practice" placeholder="Hospital or Clinic Name" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Field label="Email" placeholder="doctor@hospital.edu" type="email" />
            <Field label="Phone" placeholder="(555) 000-0000" type="tel" />
          </div>
          <div className="space-y-1.5">
            <label className="text-[11px] uppercase tracking-widest text-[#0B1A2F]/45 font-semibold">Interest Type</label>
            <select className="w-full bg-white border border-[#0B1A2F]/8 rounded-2xl px-5 py-4 text-[#0B1A2F] focus:outline-none focus:ring-2 focus:ring-[#4F86F7]/40 transition-all appearance-none shadow-sm">
              <option value="beta">Beta Program Participant</option>
              <option value="early">Early Adopter</option>
              <option value="institutional">Institutional Pilot</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-[#0B1A2F] text-white font-bold text-[15px] py-5 rounded-full mt-4 hover:opacity-90 transition-opacity shadow-lg shadow-[#0B1A2F]/15">
            Secure $500 Beta Access
          </button>
        </form>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="relative z-10 border-t border-[#0B1A2F]/5 px-6 py-10">
        <div className="max-w-[1320px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-lg font-bold tracking-tight text-[#0B1A2F]">Intelliplan</span>
          <div className="flex gap-6 text-[11px] uppercase tracking-widest text-[#0B1A2F]/35 font-semibold">
            <a href="#" className="hover:text-[#0B1A2F] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#0B1A2F] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#0B1A2F] transition-colors">Compliance</a>
          </div>
          <p className="text-[#0B1A2F]/25 text-xs">&copy; {new Date().getFullYear()} Intelliplan Systems · HIPAA Compliant</p>
        </div>
      </footer>
    </div>
  );
}

/* ─── helper ──────────────────────────────────────────── */
function Field({ label, placeholder, type = "text" }: { label: string; placeholder: string; type?: string }) {
  return (
    <div className="space-y-1.5">
      <label className="text-[11px] uppercase tracking-widest text-[#0B1A2F]/45 font-semibold">{label}</label>
      <input type={type} placeholder={placeholder} className="w-full bg-white border border-[#0B1A2F]/8 rounded-2xl px-5 py-4 text-[#0B1A2F] placeholder:text-[#0B1A2F]/20 focus:outline-none focus:ring-2 focus:ring-[#4F86F7]/40 transition-all font-light shadow-sm" />
    </div>
  );
}
