"use client";

import { ArrowRight, Zap, Fingerprint, Eye, Hand, Monitor, Lock, Brain, Battery, Globe } from "lucide-react";
import Badge from "./Badge";
import GlassCard from "./GlassCard";

const capabilities = [
    {
        icon: Zap,
        title: "Renders Full CT Stacks in Seconds",
        text: "CBCT, CT, and MRI datasets that crash consumer laptops run flawlessly here. GPU-accelerated rendering with zero lag, zero compromise.",
    },
    {
        icon: Fingerprint,
        title: "Multi-Factor Authentication",
        text: "Facial recognition, fingerprint scanner, and smart card ID, three layers of biometric security for full HIPAA compliance.",
    },
    {
        icon: Eye,
        title: "Anti-Peeping Technology",
        text: "Walk away from your laptop and it knows you're gone. Unauthorized faces trigger automatic sign-out. Patient data stays protected.",
    },
    {
        icon: Hand,
        title: "Touchless Gesture Control",
        text: "Navigate imaging files, scroll through records, and control your workflow without touching the screen or mouse. Built for sterile environments.",
    },
    {
        icon: Monitor,
        title: "DICOM-Grade Display",
        text: "AI-calibrated color accuracy on a non-DICOM monitor that meets diagnostic standards. What you see on screen is what matters in the OR.",
    },
    {
        icon: Lock,
        title: "Security Interlock",
        text: "One touch wakes everything, notebook, docking station, all connected systems. Instant-on with full security handshake.",
    },
    {
        icon: Brain,
        title: "Smart Sensing & AI Learning",
        text: "Adaptive sensors that learn your workflow, optimize performance in real-time, and power AI-assisted diagnostics and surgical planning.",
    },
    {
        icon: Battery,
        title: "All-Day Power. No Excuses.",
        text: "10+ hours of sustained peak performance. No throttling during hour 8. No crashes during the case that matters most.",
    },
    {
        icon: Globe,
        title: "Secure Remote Access",
        text: "Review cases at midnight. Prep for surgery from home. Full-power performance and encrypted data access from any location.",
    },
];

export default function Capabilities() {
    return (
        <section id="features" className="px-4 sm:px-6 py-8 sm:py-28">
            <div className="max-w-7xl mx-auto">
                <Badge icon={Zap} label="Key Features" />
                <div className="mt-6 sm:mt-10 mb-8 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight max-w-3xl">
                        Built Different. Because Medicine Demands It.
                    </h2>
                    <p className="text-sm sm:text-base text-slate-400 mt-4 max-w-xl">Every component hand-selected, stress-tested, and validated for the most demanding clinical environments on earth.</p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
                    {capabilities.map((cap, i) => (
                        <GlassCard key={i}>
                            <div className="w-10 h-10 rounded-full bg-[#4159ff]/15 border border-[#4159ff]/20 grid place-items-center mb-5">
                                <cap.icon size={18} className="text-[#4159ff]" />
                            </div>
                            <h3 className="text-sm sm:text-base font-semibold mb-2 tracking-tight">{cap.title}</h3>
                            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{cap.text}</p>
                        </GlassCard>
                    ))}
                </div>

                <div className="mt-8 sm:mt-14 text-center">
                    <a
                        href="#waitlist"
                        className="btn-glow inline-flex items-center gap-2 bg-[#4159ff] text-white text-sm font-semibold px-8 py-4 rounded-full hover:bg-[#3347d9] transition-all"
                    >
                        Reserve Yours, $0 <span className="bounce-arrow"><ArrowRight size={15} /></span>
                    </a>
                    <p className="text-xs text-slate-400 mt-3">Limited first batch. <span className="font-semibold text-[#4159ff]">$500 for the first 1,000 clients.</span></p>
                </div>
            </div>
        </section>
    );
}
