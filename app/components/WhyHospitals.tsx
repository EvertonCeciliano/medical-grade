"use client";

import { ArrowRight, Building2, TrendingUp, Zap, Brain, GraduationCap } from "lucide-react";
import Badge from "./Badge";

export default function WhyHospitals() {
    return (
        <section className="px-4 sm:px-6 py-12 sm:py-28">
            <div className="max-w-7xl mx-auto">
                <Badge icon={Building2} label="For Institutions" />
                <div className="mt-6 sm:mt-10 mb-8 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-4">
                        Hospitals Aren&apos;t Buying Hardware.<br className="hidden sm:block" />They&apos;re Investing in Leadership.
                    </h2>
                    <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
                        Safety. Efficiency. Technological advantage. Medicync delivers all three, standardized across every department.
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
                    {[
                        { icon: TrendingUp, title: "Surgical Precision", text: "Improved pre-operative planning with real-time 3D rendering of imaging datasets." },
                        { icon: Zap, title: "Workflow Efficiency", text: "Eliminate bottlenecks caused by slow imaging systems and outdated workstations." },
                        { icon: Brain, title: "AI Integration", text: "Seamless integration of AI-assisted diagnostics into clinical decision-making." },
                        { icon: GraduationCap, title: "Training & Research", text: "Supports academic research, resident training, and cross-department standardization." },
                    ].map((item, i) => (
                        <div key={i} className="rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-6">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#4159ff]/15 border border-[#4159ff]/20 grid place-items-center mb-4">
                                <item.icon size={18} className="text-[#4159ff]" />
                            </div>
                            <h3 className="text-sm font-semibold tracking-tight mb-1.5">{item.title}</h3>
                            <p className="text-xs text-slate-400 leading-relaxed">{item.text}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-8 sm:mt-12 text-center">
                    <a
                        href="#waitlist"
                        className="inline-flex items-center gap-2 bg-[#4159ff] text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-[#3347d9] transition-colors"
                    >
                        Schedule an Institutional Demo <ArrowRight size={15} />
                    </a>
                </div>
            </div>
        </section>
    );
}
