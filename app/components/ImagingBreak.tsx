"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ImagingBreak() {
    return (
        <section className="relative w-full h-[70vh] min-h-[500px]">
            <Image src="/notebook-branco-profissional.png" alt="Medicync laptop in professional environment" fill className="object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-center pb-16">
                <div className="text-center max-w-2xl px-6">
                    <p className="text-2xl md:text-4xl font-bold text-white tracking-tight leading-tight mb-4">
                        The image that saves a life<br />deserves a screen worthy of it.
                    </p>
                    <p className="text-sm text-white/70 mb-6 max-w-lg mx-auto">
                        Your patients deserve better tools than what you&apos;re using right now. The physicians who join today will have a permanent advantage.
                    </p>

                    {/* Urgency */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
                        <span className="text-xs text-white/90 font-medium">⏳ Limited first batch · <span className="font-bold">$500 beta pricing</span> · $0 to reserve</span>
                    </div>

                    <div>
                        <a
                            href="#waitlist"
                            className="inline-flex items-center gap-2 bg-[#4159ff] text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-[#3347d9] transition-colors shadow-lg shadow-[#4159ff]/30"
                        >
                            Secure Your Spot — $0 <ArrowRight size={15} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
