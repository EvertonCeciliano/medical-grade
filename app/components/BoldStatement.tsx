"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function BoldStatement() {
    return (
        <section className="px-6 py-32">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <div>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
                            Your patients deserve better tools than what you&apos;re using right now.
                        </h2>
                        <p className="text-base text-slate-400 mt-6 max-w-md">
                            The physicians who join the waitlist today will have a permanent advantage over those who wait.
                        </p>

                        {/* Urgency box */}
                        <div className="mt-8 p-5 rounded-xl bg-amber-50 border border-amber-200">
                            <p className="text-sm font-bold text-amber-900 mb-1">⏳ Limited first batch — spots are filling up</p>
                            <p className="text-xs text-amber-700">Early access pricing of $500 won&apos;t last. $0 to reserve your place.</p>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-6 items-center">
                            <a
                                href="#waitlist"
                                className="btn-glow flex items-center gap-2 bg-[#4159ff] text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-[#3347d9] transition-all"
                            >
                                Secure Your Spot — $0 <span className="bounce-arrow"><ArrowRight size={15} /></span>
                            </a>
                        </div>
                    </div>
                    <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-slate-50">
                        <Image src="/notebook-blue-vertical.png" alt="Medicync Deep Blue clinical laptop" fill className="object-contain" />
                    </div>
                </div>
            </div>
        </section>
    );
}
