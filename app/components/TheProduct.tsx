"use client";

import Image from "next/image";
import { Zap, ShieldCheck, Globe, Monitor } from "lucide-react";
import Badge from "./Badge";
import GlassCard from "./GlassCard";

export default function TheProduct() {
    return (
        <section className="px-4 sm:px-6 py-8 sm:py-28">
            <div className="max-w-7xl mx-auto">
                <Badge icon={Monitor} label="Our Product" />
                <div className="grid lg:grid-cols-2 gap-8 sm:gap-16 lg:gap-24 items-start mt-6 sm:mt-10">
                    <div>
                        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-4">
                            This Changes Everything
                        </h2>
                        <p className="text-base sm:text-xl text-slate-500 leading-relaxed">
                            A new gold standard in medical computing. Built by a doctor who got tired of waiting for one.
                        </p>
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5 mt-8 sm:mt-14">
                    <GlassCard>
                        <div className="w-10 h-10 rounded-full bg-[#4159ff]/15 border border-[#4159ff]/20 grid place-items-center mb-5">
                            <Zap size={18} className="text-[#4159ff]" />
                        </div>
                        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                            Engineered to process the heaviest medical imaging files at speeds that would make your hospital workstation jealous.
                        </p>
                    </GlassCard>
                    <GlassCard>
                        <div className="w-10 h-10 rounded-full bg-[#4159ff]/15 border border-[#4159ff]/20 grid place-items-center mb-5">
                            <ShieldCheck size={18} className="text-[#4159ff]" />
                        </div>
                        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                            Security that doesn&apos;t ask you to compromise. HIPAA compliance, patient data protection, and clinical mobility - finally in one device.
                        </p>
                    </GlassCard>
                    <GlassCard>
                        <div className="w-10 h-10 rounded-full bg-[#4159ff]/15 border border-[#4159ff]/20 grid place-items-center mb-5">
                            <Globe size={18} className="text-[#4159ff]" />
                        </div>
                        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                            From the OR to your living room. Same power, same security, same precision. Your best work shouldn&apos;t depend on which building you&apos;re in.
                        </p>
                    </GlassCard>
                </div>

                {/* laptop image below cards */}
                <div className="relative w-full aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden mt-8 sm:mt-14">
                    <Image src="/notebook-amarelo-home.jpg" alt="Medicync in home office" fill className="object-cover" />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent pt-16 sm:pt-20 pb-6 sm:pb-8 px-5 sm:px-8">
                        <p className="text-sm font-semibold text-white">Medicync</p>
                        <p className="text-xs text-white/60 mt-1">Medical-grade hardware. Clinical-grade performance. Absolute data security.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
