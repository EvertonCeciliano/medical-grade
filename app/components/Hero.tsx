"use client";

import Image from "next/image";
import { ArrowRight, ShieldCheck, Zap, Monitor, Brain, Sparkles } from "lucide-react";
import Badge from "./Badge";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center px-4 sm:px-6 overflow-hidden">
            <Image
                src="/notebook-branco-hero.png"
                alt="Medicync clinical-grade AI workstation laptop"
                fill
                className="object-cover object-center"
                priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/30 md:from-white/90 md:via-white/60 md:to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-white/20 md:from-white/70" />

            <div className="relative z-10 max-w-7xl mx-auto w-full pt-28 sm:pt-36 pb-12 sm:pb-16">
                <div className="max-w-2xl">
                    <Badge icon={Zap} label="Now Accepting Waitlist Registrations" />

                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[82px] font-bold leading-[1.04] tracking-tight mt-6 sm:mt-8 mb-4 sm:mb-6">
                        The First Laptop<br />
                        Built for<br />
                        Medicine.
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl mb-3 sm:mb-4">
                        Clinical-grade imaging. Absolute data security. AI-powered intelligence. All in one device that finally works the way doctors do.
                    </p>
                    <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-lg mb-5 sm:mb-6">
                        Every other laptop makes you work around its limits. <span className="text-slate-700 font-medium">Medicync has none worth mentioning.</span>
                    </p>

                    <div className="inline-flex items-start gap-3 px-4 sm:px-5 py-3 sm:py-4 rounded-xl bg-[#4159ff]/8 border border-[#4159ff]/25 mb-6 sm:mb-8 backdrop-blur-sm">
                        <Sparkles size={18} className="text-[#4159ff] shrink-0 mt-0.5" />
                        <div>
                            <p className="text-xs sm:text-sm font-bold text-slate-800 mb-0.5">
                                Limited Offer: First 1,000 clients get Medicync laptop for <span className="text-[#4159ff]">$500</span>
                            </p>
                            <p className="text-[10px] sm:text-xs text-slate-400">$0 to reserve · No commitment · Founding member benefits disappear at launch</p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 sm:mb-12">
                        <a
                            href="#waitlist"
                            className="btn-glow flex items-center justify-center gap-2 bg-[#4159ff] text-white text-sm font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-full hover:bg-[#3347d9] transition-all"
                        >
                            Reserve for $0, Join the Waitlist <span className="bounce-arrow"><ArrowRight size={15} /></span>
                        </a>
                        <a
                            href="#features"
                            className="text-sm font-medium text-slate-600 hover:text-slate-900 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full border border-slate-300 hover:border-slate-400 bg-white/60 backdrop-blur-sm transition-colors text-center"
                        >
                            See Features
                        </a>
                    </div>

                    <div className="flex flex-wrap gap-4 sm:gap-6 text-[11px] text-slate-500 uppercase tracking-widest font-medium">
                        <span className="flex items-center gap-1.5"><ShieldCheck size={12} className="text-[#4159ff]" /> HIPAA</span>
                        <span className="flex items-center gap-1.5"><Zap size={12} className="text-[#4159ff]" /> GPU</span>
                        <span className="flex items-center gap-1.5"><Brain size={12} className="text-[#4159ff]" /> AI-Powered</span>
                        <span className="flex items-center gap-1.5"><Monitor size={12} className="text-[#4159ff]" /> DICOM</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
