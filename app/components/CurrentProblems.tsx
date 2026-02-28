"use client";

import { ArrowRight, AlertTriangle } from "lucide-react";
import Badge from "./Badge";
import GlassCard from "./GlassCard";

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

export default function CurrentProblems() {
    return (
        <section className="px-4 sm:px-6 py-12 sm:py-28">
            <div className="max-w-7xl mx-auto">
                <Badge icon={AlertTriangle} label="Problem" />
                <div className="mt-6 sm:mt-10 mb-8 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-4">
                        Why Every Other Laptop Fails Doctors
                    </h2>
                    <p className="text-sm sm:text-base text-slate-400 max-w-lg leading-relaxed">
                        You wouldn&apos;t use a consumer scalpel. Why are you trusting a consumer laptop with patient data and diagnostic imaging?
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-3 sm:gap-5">
                    {problems.map((p, i) => (
                        <GlassCard key={i}>
                            <h3 className="text-lg font-semibold tracking-tight mb-2">{p.title}</h3>
                            <p className="text-sm text-slate-400 leading-relaxed">{p.text}</p>
                        </GlassCard>
                    ))}
                </div>

                <div className="mt-8 sm:mt-12 text-center">
                    <a
                        href="#waitlist"
                        className="btn-glow inline-flex items-center gap-2 bg-[#4159ff] text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-[#3347d9] transition-all"
                    >
                        There&apos;s a Better Way, $0 to Start <span className="bounce-arrow"><ArrowRight size={15} /></span>
                    </a>
                    <p className="text-xs text-slate-400 mt-3">Join the waitlist. <span className="font-semibold text-[#4159ff]">First 1,000 clients: $500.</span></p>
                </div>
            </div>
        </section>
    );
}
