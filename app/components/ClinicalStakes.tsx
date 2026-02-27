"use client";

import { ArrowRight, Target } from "lucide-react";
import Badge from "./Badge";

export default function ClinicalStakes() {
    return (
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
                        <p className="text-lg font-semibold text-slate-700 mb-4">Think about that for a moment.</p>
                        <p className="text-base text-slate-500 leading-relaxed mb-4">
                            The physician reviewing your scans. The surgeon planning your procedure. The clarity of the image they saw. The speed of their software.
                        </p>
                        <p className="text-base text-slate-500 leading-relaxed mb-8">
                            Every tool used before the procedure directly affects confidence during the procedure. <span className="text-slate-600 font-medium">Consumer laptops were never designed for this kind of pressure.</span>
                        </p>
                        <a
                            href="#waitlist"
                            className="btn-glow inline-flex items-center gap-2 bg-[#4159ff] text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-[#3347d9] transition-all"
                        >
                            Demand Better — Reserve for $0 <span className="bounce-arrow"><ArrowRight size={15} /></span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
