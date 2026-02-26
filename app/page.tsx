"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ShieldCheck,
  Zap,
  Monitor,
  Brain,
  Battery,
  Globe,
  AlertTriangle,
  Target,
  MapPin,
} from "lucide-react";

/* ── data ───────────────────────────────────────── */

const capabilities = [
  {
    icon: Zap,
    title: "Renders Full CT Stacks in Seconds",
    text: "While other laptops choke on heavy CBCT and MRI files, Medicync tears through them. GPU-accelerated. Zero lag. Zero compromise.",
  },
  {
    icon: ShieldCheck,
    title: "HIPAA Isn't a Feature. It's the Foundation.",
    text: "Encrypted at rest, encrypted in transit, biometric multi-factor auth, remote wipe. Not bolted on. Engineered in from day one.",
  },
  {
    icon: Monitor,
    title: "Diagnostic-Grade Display",
    text: "DICOM-calibrated, AI-corrected color accuracy. What you see on screen is what matters in the OR.",
  },
  {
    icon: Brain,
    title: "The Machine Reads the Room",
    text: "AI-powered sensors adapt brightness, lock automatically, and enable touchless gesture control in sterile environments.",
  },
  {
    icon: Battery,
    title: "All-Day Power. No Excuses.",
    text: "10 hours of sustained peak performance. No throttling during hour 8. No crashes during the case that matters most.",
  },
  {
    icon: Globe,
    title: "Your Office Is Wherever You Open the Lid",
    text: "Hospital, home, conference, clinic. Full-power performance and secure data access from any location.",
  },
];

const problems = [
  {
    title: "Your patient data is exposed",
    text: "Consumer laptops were never built for clinical security. Every unencrypted drive is a HIPAA violation waiting to happen.",
  },
  {
    title: "You can't even wipe it down",
    text: "Hospital-grade disinfectants destroy consumer hardware. You're choosing between hygiene and your device.",
  },
  {
    title: "Your imaging software crashes. Again.",
    text: "CT, MRI, CBCT files push consumer GPUs past their limits. Crashes mid-review aren't inconveniences. They're risks.",
  },
  {
    title: "You're chained to a workstation",
    text: "Planning software that only runs on a hospital desktop. Case review that only works in one room. That's not modern medicine.",
  },
];

const faqs = [
  {
    q: "Who is this actually for?",
    a: "Physicians, dentists, oral surgeons, radiologists, clinical researchers - anyone whose work depends on imaging, patient data, or planning software. It's powerful enough to be a premium everyday laptop, but it was made for the people who can't afford a lag.",
  },
  {
    q: "Can it really handle my imaging workload?",
    a: "Yes. GPU-accelerated rendering for CBCT, CT and MRI. Full surgical planning at native performance. The same files that crash your current laptop run flawlessly here.",
  },
  {
    q: "Is the HIPAA compliance real?",
    a: "Hardware-level. Encrypted storage, biometric multi-factor auth, proximity auto-lock, remote wipe. This isn't a software checkbox - it's the architecture.",
  },
  {
    q: "When can I get one?",
    a: "First production batch is underway. Waitlist members get first access, best pricing, and founding member benefits that disappear at public launch.",
  },
  {
    q: "What does the waitlist cost?",
    a: "Nothing. No payment, no commitment. Just your place in line. When we're ready, you'll be the first to know - and the first to order at the lowest price we'll ever offer.",
  },
];

/* ── helpers ─────────────────────────────────────── */

function Badge({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4F86F7]/10 border border-[#4F86F7]/20">
      <div className="w-5 h-5 rounded-full bg-[#4F86F7]/20 grid place-items-center">
        <Icon size={11} className="text-[#4F86F7]" />
      </div>
      <span className="text-xs font-semibold text-[#4F86F7] tracking-wide">{label}</span>
    </div>
  );
}

function GlassCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm p-8 ${className}`}>
      {children}
    </div>
  );
}

/* ── page ────────────────────────────────────────── */

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen font-sans bg-[#070d1a]">

      {/* ─── NAVBAR ─── */}
      <nav className="fixed top-0 w-full z-50 bg-[#070d1a]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Image
            src="/logomedicync.png"
            alt="Medicync"
            width={140}
            height={32}
            className="object-contain"
          />
          <a
            href="#waitlist"
            className="text-sm font-semibold text-white bg-[#4F86F7] hover:bg-[#3d72e0] px-5 py-2 rounded-full transition-colors"
          >
            Join Waitlist
          </a>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center px-6 overflow-hidden">
        {/* bg image */}
        <Image
          src="/laptop.png"
          alt="Medicync Laptop"
          fill
          className="object-cover object-center opacity-30"
          priority
        />
        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070d1a] via-[#070d1a]/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070d1a] via-transparent to-[#070d1a]/60" />

        <div className="relative z-10 max-w-7xl mx-auto w-full pt-20">
          <div className="max-w-3xl">
            <Badge icon={Zap} label="Now Accepting Waitlist Registrations" />

            <h1 className="text-5xl md:text-7xl lg:text-[82px] font-bold leading-[1.04] tracking-tight mt-8 mb-8">
              The First Laptop<br />
              Built for<br />
              Medicine.
            </h1>

            <p className="text-lg md:text-xl text-white/45 leading-relaxed max-w-xl mb-4">
              Clinical-grade imaging. Absolute data security. AI-powered intelligence. All in one device that finally works the way doctors do.
            </p>
            <p className="text-base text-white/30 leading-relaxed max-w-lg mb-10">
              Every other laptop makes you work around its limits. <span className="text-white/60 font-medium">Medicync has none worth mentioning.</span>
            </p>

            <div className="flex flex-wrap gap-4 mb-16">
              <a
                href="#waitlist"
                className="flex items-center gap-2 bg-[#4F86F7] text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-[#3d72e0] transition-colors"
              >
                Join the Waitlist <ArrowRight size={15} />
              </a>
              <a
                href="#capabilities"
                className="text-sm font-medium text-white/40 hover:text-white px-7 py-3.5 rounded-full border border-white/10 hover:border-white/20 transition-colors"
              >
                See Capabilities
              </a>
            </div>

            <div className="flex flex-wrap gap-8 text-[11px] text-white/20 uppercase tracking-widest font-medium">
              <span>HIPAA Compliant</span>
              <span>GPU Accelerated</span>
              <span>AI-Powered</span>
              <span>DICOM Ready</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── LAPTOP SHOWCASE ─── */}
      <section className="px-6 pb-10">
        <div className="max-w-7xl mx-auto">
          <div className="relative w-full aspect-[16/7] rounded-3xl overflow-hidden border border-white/5">
            <Image src="/laptop.png" alt="Medicync Laptop" fill className="object-contain" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070d1a] via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* ─── CLINICAL STAKES ─── */}
      <section className="px-6 py-28">
        <div className="max-w-7xl mx-auto">
          <Badge icon={Target} label="Clinical Stakes" />
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mt-10">
            <div>
              <h2 className="text-4xl md:text-6xl lg:text-[64px] font-bold leading-[1.06] tracking-tight">
                One Day, You Will Be on an Operating Table.
              </h2>
            </div>
            <div>
              <p className="text-lg font-semibold text-white/80 mb-4">Think about that for a moment.</p>
              <p className="text-base text-white/40 leading-relaxed mb-4">
                The physician reviewing your scans. The surgeon planning your procedure. The clarity of the image they saw. The speed of their software.
              </p>
              <p className="text-base text-white/40 leading-relaxed">
                Every tool used before the procedure directly affects confidence during the procedure. <span className="text-white/70 font-medium">Consumer laptops were never designed for this kind of pressure.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CURRENT PROBLEMS ─── */}
      <section className="px-6 py-28">
        <div className="max-w-7xl mx-auto">
          <Badge icon={AlertTriangle} label="Problem" />
          <div className="mt-10 mb-16">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-4">
              Why Every Other Laptop Fails Doctors
            </h2>
            <p className="text-base text-white/35 max-w-lg leading-relaxed">
              You wouldn't use a consumer scalpel. Why are you trusting a consumer laptop with patient data and diagnostic imaging?
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {problems.map((p, i) => (
              <GlassCard key={i}>
                <h3 className="text-lg font-semibold tracking-tight mb-2">{p.title}</h3>
                <p className="text-sm text-white/35 leading-relaxed">{p.text}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ─── THE PRODUCT ─── */}
      <section className="px-6 py-28">
        <div className="max-w-7xl mx-auto">
          <Badge icon={Monitor} label="Our Product" />
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start mt-10">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-4">
                This Changes Everything
              </h2>
              <p className="text-xl text-white/50 leading-relaxed">
                A new gold standard in medical computing. Built by a doctor who got tired of waiting for one.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mt-14">
            <GlassCard>
              <div className="w-10 h-10 rounded-full bg-[#4F86F7]/15 border border-[#4F86F7]/20 grid place-items-center mb-5">
                <Zap size={18} className="text-[#4F86F7]" />
              </div>
              <p className="text-sm text-white/50 leading-relaxed">
                Engineered to process the heaviest medical imaging files at speeds that would make your hospital workstation jealous.
              </p>
            </GlassCard>
            <GlassCard>
              <div className="w-10 h-10 rounded-full bg-[#4F86F7]/15 border border-[#4F86F7]/20 grid place-items-center mb-5">
                <ShieldCheck size={18} className="text-[#4F86F7]" />
              </div>
              <p className="text-sm text-white/50 leading-relaxed">
                Security that doesn't ask you to compromise. HIPAA compliance, patient data protection, and clinical mobility - finally in one device.
              </p>
            </GlassCard>
            <GlassCard>
              <div className="w-10 h-10 rounded-full bg-[#4F86F7]/15 border border-[#4F86F7]/20 grid place-items-center mb-5">
                <Globe size={18} className="text-[#4F86F7]" />
              </div>
              <p className="text-sm text-white/50 leading-relaxed">
                From the OR to your living room. Same power, same security, same precision. Your best work shouldn't depend on which building you're in.
              </p>
            </GlassCard>
          </div>

          {/* laptop image below cards */}
          <div className="relative w-full aspect-[16/8] rounded-3xl overflow-hidden border border-white/5 mt-14">
            <Image src="/laptop.png" alt="Medicync product" fill className="object-cover object-top" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070d1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-sm font-semibold text-white/80">Medicync</p>
              <p className="text-xs text-white/30 mt-1">Medical-grade hardware. Clinical-grade performance. Absolute data security.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MEDICINE TO GO ─── */}
      <section className="px-6 py-28">
        <div className="max-w-7xl mx-auto">
          <Badge icon={MapPin} label="Mobility" />
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mt-10">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
                Stop Being Chained to a Hospital Workstation
              </h2>
              <p className="text-lg font-semibold text-white/80 mb-4">
                The best doctors don't just operate. They prepare obsessively.
              </p>
              <p className="text-base text-white/40 leading-relaxed mb-4">
                Review cases at midnight. Prep for surgery from home. Share encrypted imaging with your team from a conference in another city.
              </p>
              <p className="text-base text-white/40 leading-relaxed mb-6">
                You shouldn't need a specific room to do your best work. Medicync makes that room wherever you are.
              </p>
              <p className="text-sm font-semibold text-white/60">
                Power in the hands of the physician.<br />Safety for the patient. Always.
              </p>
            </div>
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
              <Image src="/surgeon-prep.png" alt="Clinical environment" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── CAPABILITIES ─── */}
      <section id="capabilities" className="px-6 py-28">
        <div className="max-w-7xl mx-auto">
          <Badge icon={Zap} label="Key Features" />
          <div className="mt-10 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight max-w-3xl">
              Built Different. Because Medicine Demands It.
            </h2>
            <p className="text-base text-white/30 mt-4 max-w-xl">Every component hand-selected, stress-tested, and validated for the most demanding clinical environments on earth.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map((cap, i) => (
              <GlassCard key={i}>
                <div className="w-10 h-10 rounded-full bg-[#4F86F7]/15 border border-[#4F86F7]/20 grid place-items-center mb-5">
                  <cap.icon size={18} className="text-[#4F86F7]" />
                </div>
                <h3 className="text-base font-semibold mb-2 tracking-tight">{cap.title}</h3>
                <p className="text-sm text-white/35 leading-relaxed">{cap.text}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ─── IMAGING BREAK ─── */}
      <section className="relative w-full h-[60vh] min-h-[400px]">
        <Image src="/imaging-scene.png" alt="Medical imaging workflow" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070d1a] via-[#070d1a]/30 to-[#070d1a]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-2xl md:text-3xl font-bold text-white/70 tracking-tight text-center max-w-2xl leading-tight">
            The image that saves a life<br />deserves a screen worthy of it.
          </p>
        </div>
      </section>

      {/* ─── BOLD STATEMENT ─── */}
      <section className="px-6 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
                Your patients deserve better tools than what you're using right now.
              </h2>
              <p className="text-base text-white/35 mt-6 max-w-md">
                The physicians who join the waitlist today will have a permanent advantage over those who wait.
              </p>
              <div className="mt-8 flex flex-wrap gap-6 items-center">
                <a
                  href="#waitlist"
                  className="flex items-center gap-2 bg-[#4F86F7] text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-[#3d72e0] transition-colors"
                >
                  Secure Your Spot <ArrowRight size={15} />
                </a>
                <p className="text-sm text-white/20">
                  Limited first batch. Early access pricing won't last.
                </p>
              </div>
            </div>
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/5">
              <Image src="/remote-work.png" alt="Doctor working remotely" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── BUILT FOR ─── */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto border-t border-white/5 pt-20">
          <p className="text-xs font-semibold text-[#4F86F7] tracking-wide uppercase mb-8">
            Built for
          </p>
          <div className="flex flex-wrap gap-3">
            {["Dentists & Oral Surgeons", "Radiologists", "Physicians", "Surgical Specialists", "Clinical Researchers", "Hospital Departments", "Academic Institutions"].map((u, i) => (
              <span key={i} className="text-sm font-medium text-white/35 px-4 py-2 border border-white/8 rounded-full hover:border-[#4F86F7]/30 hover:text-white/60 transition-colors">
                {u}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FOUNDER ─── */}
      <section className="px-6 py-28">
        <div className="max-w-7xl mx-auto border-t border-white/5 pt-20">
          <Badge icon={ShieldCheck} label="Founded by" />
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20 items-start mt-10">
            {/* photo */}
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-[#1F417D] border border-white/5">
              <Image src="/drchang.png" alt="Dr. Jenny Chang" fill className="object-cover" />
            </div>

            {/* content */}
            <div>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Dr. Jenny Chang</h3>
              <p className="text-sm text-white/35 mb-8">
                Prosthodontist &middot; Founder & CEO, Chang Dental Group
              </p>

              <div className="flex flex-wrap gap-2 mb-10">
                {["Harvard DMD - Magna Cum Laude", "NIH Scientist Award", "16yr Harvard Faculty", "Implant Dentistry", "Oral Reconstruction"].map((c, i) => (
                  <span key={i} className="text-[11px] font-medium text-[#4F86F7]/70 px-3 py-1.5 border border-[#4F86F7]/15 rounded-full uppercase tracking-wide">
                    {c}
                  </span>
                ))}
              </div>

              <p className="text-[15px] text-white/45 leading-[1.8] mb-5">
                Dr. Chang is a Prosthodontist and Founder & CEO of Chang Dental Group, a specialist in the esthetic restoration and replacement of teeth. She graduated Magna Cum Laude from Harvard School of Dental Medicine.
              </p>
              <p className="text-[15px] text-white/45 leading-[1.8] mb-10">
                Her advanced training spans dental implants, oral and reconstructive surgery, TMD disorders, sleep apnea treatment, traumatic injuries and oral cancer reconstruction.
              </p>

              <blockquote className="border-l-2 border-[#4F86F7] pl-5 mb-10">
                <p className="text-[15px] text-white/35 leading-relaxed italic">
                  &ldquo;I built Medicync because I spent years doing clinical work on machines that were never designed for it. Every lag, every crash, every security gap - we felt it. This is the machine I always needed.&rdquo;
                </p>
              </blockquote>

              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/5">
                {[
                  { value: "20+", label: "Years in practice" },
                  { value: "16", label: "Years at Harvard" },
                  { value: "NIH", label: "Award recipient" },
                ].map((s, i) => (
                  <div key={i}>
                    <p className="text-2xl font-bold tracking-tight">{s.value}</p>
                    <p className="text-[11px] text-white/20 uppercase tracking-wide mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="px-6 py-28">
        <div className="max-w-7xl mx-auto border-t border-white/5 pt-20">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <Badge icon={ChevronDown} label="FAQ" />
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-8">
                Before You Decide, Read This.
              </h2>
            </div>
            <div className="divide-y divide-white/5">
              {faqs.map((faq, i) => (
                <div key={i}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between py-5 text-left"
                  >
                    <span className="font-medium text-[15px] pr-4 text-white/80">{faq.q}</span>
                    <ChevronDown
                      size={16}
                      className={`shrink-0 text-[#4F86F7]/50 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div className={`overflow-hidden transition-all duration-200 ${openFaq === i ? "max-h-40 pb-5" : "max-h-0"}`}>
                    <p className="text-sm text-white/30 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── WAITLIST ─── */}
      <section id="waitlist" className="px-6 py-28">
        <div className="max-w-7xl mx-auto border-t border-white/5 pt-20">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            <div>
              <Badge icon={ArrowRight} label="Waitlist" />
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-8 mb-6 leading-tight">
                The Best Price<br />We'll Ever Offer.<br />And It's Disappearing.
              </h2>
              <p className="text-base text-white/35 leading-relaxed mb-8">
                Early adopters get founding member pricing, first-batch allocation, and direct access to the team building it. These benefits won&apos;t exist at public launch.
              </p>
              <div className="space-y-3">
                {[
                  "First in line when production starts",
                  "Founding member pricing - lowest we'll ever offer",
                  "Direct access to Dr. Chang and the team",
                  "$0 to reserve. No commitment. No risk.",
                ].map((b, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-white/40">
                    <CheckCircle2 size={14} className="text-[#4F86F7] shrink-0" />
                    {b}
                  </div>
                ))}
              </div>
            </div>

            <GlassCard>
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle2 size={32} className="text-[#4F86F7] mx-auto mb-4" />
                  <h3 className="text-xl font-bold tracking-tight mb-2">You&apos;re on the list.</h3>
                  <p className="text-sm text-white/35">We&apos;ll reach out when your early access window opens.</p>
                </div>
              ) : (
                <form
                  className="space-y-4"
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Field label="Full Name" placeholder="Dr. Jane Doe" />
                    <Field label="Specialty" placeholder="e.g. Radiology" />
                  </div>
                  <Field label="Institution" placeholder="Hospital, Clinic or University" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Field label="Email" placeholder="you@institution.com" type="email" />
                    <Field label="Country" placeholder="United States" />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-[#4F86F7] text-white text-sm font-semibold py-4 rounded-full mt-2 hover:bg-[#3d72e0] transition-colors"
                  >
                    Join the Waitlist <ArrowRight size={14} />
                  </button>
                  <p className="text-center text-[11px] text-white/15 pt-1">
                    No payment. No commitment.
                  </p>
                </form>
              )}
            </GlassCard>

          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-white/5 px-6 py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <Image src="/logomedicync.png" alt="Medicync" width={110} height={26} className="object-contain opacity-40" />
          <div className="flex gap-6 text-[11px] uppercase tracking-wider text-white/15">
            <a href="#" className="hover:text-white/30 transition-colors">Privacy</a>
            <a href="#" className="hover:text-white/30 transition-colors">Terms</a>
            <a href="#" className="hover:text-white/30 transition-colors">Compliance</a>
          </div>
          <p className="text-[11px] text-white/10">&copy; {new Date().getFullYear()} Medicync</p>
        </div>
      </footer>
    </div>
  );
}

/* ─── field helper ──────────────────────────────── */
function Field({ label, placeholder, type = "text" }: { label: string; placeholder: string; type?: string }) {
  return (
    <div>
      <label className="text-[11px] font-medium text-white/25 uppercase tracking-wide mb-1.5 block">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/15 focus:outline-none focus:ring-1 focus:ring-[#4F86F7]/40 focus:border-[#4F86F7]/30 transition-all"
      />
    </div>
  );
}
