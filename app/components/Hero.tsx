"use client";

import Image from "next/image";
import { ArrowRight, ShieldCheck, Zap, Monitor, Brain, Sparkles } from "lucide-react";
import Badge from "./Badge";

export default function Hero() {
    return (
        <section className="relative overflow-hidden">
            {/* ── Desktop: background photo layout ── */}
            <div className="hidden md:flex relative min-h-screen items-center px-6">
                <Image
                    src="/notebook-branco-hero.png"
                    alt="Medicync clinical-grade AI workstation laptop"
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-white/20" />

                <div className="relative z-10 max-w-7xl mx-auto w-full pt-36 pb-16">
                    <div className="max-w-2xl">
                        <Badge icon={Zap} label="Now Accepting Waitlist Registrations" />

                        <h1 className="text-5xl md:text-7xl lg:text-[82px] font-bold leading-[1.04] tracking-tight mt-8 mb-6">
                            The First Laptop<br />
                            Built for<br />
                            Medicine.
                        </h1>

                        <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl mb-4">
                            Clinical-grade imaging. Absolute data security. AI-powered intelligence. All in one device that finally works the way doctors do.
                        </p>
                        <p className="text-base text-slate-400 leading-relaxed max-w-lg mb-6">
                            Every other laptop makes you work around its limits. <span className="text-slate-700 font-medium">Medicync has none worth mentioning.</span>
                        </p>

                        <div className="inline-flex items-start gap-4 px-6 py-5 rounded-2xl bg-[#4159ff]/10 border border-[#4159ff]/25 mb-8 backdrop-blur-sm">
                            <Sparkles size={20} className="text-[#4159ff] shrink-0 mt-1" />
                            <div>
                                <p className="text-base font-bold text-slate-800 mb-1">
                                    Limited Beta Pricing: <span className="text-[#4159ff] text-xl">$500</span>
                                </p>
                                <p className="text-xs text-slate-500 leading-relaxed">First 1,000 physicians only · $0 to reserve · No commitment · Founding member benefits disappear at launch</p>
                            </div>
                        </div>

                        <div className="flex gap-4 mb-12">
                            <a
                                href="#waitlist"
                                className="btn-glow flex items-center gap-2 bg-[#4159ff] text-white text-sm font-semibold px-8 py-4 rounded-full hover:bg-[#3347d9] transition-all"
                            >
                                Reserve for $0, Join the Waitlist <span className="bounce-arrow"><ArrowRight size={15} /></span>
                            </a>
                            <a
                                href="#features"
                                className="text-sm font-medium text-slate-600 hover:text-slate-900 px-8 py-4 rounded-full border border-slate-300 hover:border-slate-400 bg-white/60 backdrop-blur-sm transition-colors"
                            >
                                See Features
                            </a>
                        </div>

                        <div className="flex gap-6 text-[11px] text-slate-500 uppercase tracking-widest font-medium">
                            <span className="flex items-center gap-1.5"><ShieldCheck size={12} className="text-[#4159ff]" /> HIPAA</span>
                            <span className="flex items-center gap-1.5"><Zap size={12} className="text-[#4159ff]" /> GPU</span>
                            <span className="flex items-center gap-1.5"><Brain size={12} className="text-[#4159ff]" /> AI-Powered</span>
                            <span className="flex items-center gap-1.5"><Monitor size={12} className="text-[#4159ff]" /> DICOM</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Mobile: foto como banner + card sobreposto ── */}
            <div className="md:hidden relative">
                {/* Foto do laptop como banner no topo */}
                <div className="relative w-full h-[55vh] bg-slate-50">
                    <Image
                        src="/notebook-branco-profissional.png"
                        alt="Medicync laptop"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                </div>

                {/* Card branco que sobe sobre a foto */}
                <div className="relative -mt-20 bg-white rounded-t-3xl px-5 pt-6 pb-8">
                    <Badge icon={Zap} label="Now Accepting Waitlist Registrations" />

                    <h1 className="text-[32px] font-bold leading-[1.1] tracking-tight mt-5 mb-3">
                        The First Laptop<br />
                        Built for Medicine.
                    </h1>

                    <p className="text-[15px] text-slate-600 leading-relaxed mb-4">
                        Clinical-grade imaging. Absolute data security. AI-powered intelligence. All in one device.
                    </p>

                    <div className="flex items-start gap-3 px-4 py-3 rounded-xl bg-[#4159ff]/10 border border-[#4159ff]/25 mb-5">
                        <Sparkles size={16} className="text-[#4159ff] shrink-0 mt-0.5" />
                        <div>
                            <p className="text-sm font-bold text-slate-800">
                                Beta Pricing: <span className="text-[#4159ff]">$500</span>
                            </p>
                            <p className="text-[10px] text-slate-500 mt-0.5">First 1,000 physicians · $0 to reserve · No commitment</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 mb-6">
                        <a
                            href="#waitlist"
                            className="btn-glow flex items-center justify-center gap-2 bg-[#4159ff] text-white text-sm font-semibold px-6 py-3.5 rounded-full hover:bg-[#3347d9] transition-all"
                        >
                            Reserve for $0, Join the Waitlist <span className="bounce-arrow"><ArrowRight size={15} /></span>
                        </a>
                        <a
                            href="#features"
                            className="text-sm font-medium text-slate-600 text-center px-6 py-3 rounded-full border border-slate-300 bg-white/60"
                        >
                            See Features
                        </a>
                    </div>

                    <div className="flex flex-wrap gap-4 text-[10px] text-slate-500 uppercase tracking-widest font-medium">
                        <span className="flex items-center gap-1"><ShieldCheck size={11} className="text-[#4159ff]" /> HIPAA</span>
                        <span className="flex items-center gap-1"><Zap size={11} className="text-[#4159ff]" /> GPU</span>
                        <span className="flex items-center gap-1"><Brain size={11} className="text-[#4159ff]" /> AI-Powered</span>
                        <span className="flex items-center gap-1"><Monitor size={11} className="text-[#4159ff]" /> DICOM</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
