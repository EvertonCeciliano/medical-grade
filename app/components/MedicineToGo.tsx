"use client";

import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";

export default function MedicineToGo() {
    return (
        <section className="relative px-4 sm:px-6 py-16 sm:py-32 overflow-hidden">
            {/* full-width background image */}
            <div className="absolute inset-0">
                <Image src="/notebook-dentist-office.png" alt="Medicync in dental office" fill className="object-cover object-center -scale-x-100" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40 sm:from-slate-900/90 sm:via-slate-900/70 sm:to-slate-900/30" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="max-w-xl">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6 sm:mb-10">
                        <div className="w-5 h-5 rounded-full bg-white/20 grid place-items-center">
                            <MapPin size={11} className="text-white" />
                        </div>
                        <span className="text-xs font-semibold text-white tracking-wide">Mobility</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight leading-tight text-white mb-6">
                        Your Office Is<br />Wherever You Are.
                    </h2>

                    <p className="text-base sm:text-lg text-white/70 leading-relaxed mb-6 sm:mb-10 max-w-md">
                        Review cases at midnight. Prep for surgery from home. Share encrypted imaging from a conference across the world. Same power, same security, no workstation required.
                    </p>

                    <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
                        {[
                            { value: "100%", label: "HIPAA compliant remotely" },
                            { value: "0", label: "Performance compromise" },
                            { value: "∞", label: "Locations supported" },
                        ].map((stat, i) => (
                            <div key={i}>
                                <p className="text-xl sm:text-2xl font-bold text-white tracking-tight">{stat.value}</p>
                                <p className="text-[10px] sm:text-[11px] text-white/40 uppercase tracking-wide mt-1">{stat.label}</p>
                            </div>
                        ))}
                    </div>

                    <a
                        href="#waitlist"
                        className="inline-flex items-center gap-2 bg-white text-slate-900 text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-white/90 transition-colors"
                    >
                        Work From Anywhere <ArrowRight size={15} />
                    </a>
                </div>
            </div>
        </section>
    );
}
