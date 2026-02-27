"use client";

import Image from "next/image";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Badge from "./Badge";

export default function Founder() {
    return (
        <section className="px-6 py-28">
            <div className="max-w-7xl mx-auto border-t border-slate-200 pt-20">
                <Badge icon={ShieldCheck} label="Founded by" />
                <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20 items-start mt-10">
                    {/* photo */}
                    <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-slate-200 border border-slate-200">
                        <Image src="/dr-jenny-chang.jpg" alt="Dr. Jenny Chang" fill className="object-cover" />
                    </div>

                    {/* content */}
                    <div>
                        <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Dr. Jenny Chang</h3>
                        <p className="text-sm text-slate-400 mb-8">
                            Prosthodontist &middot; Founder & CEO, Chang Dental Group
                        </p>

                        <div className="flex flex-wrap gap-2 mb-10">
                            {["Harvard DMD - Magna Cum Laude", "NIH Scientist Award", "16yr Harvard Faculty", "Implant Dentistry", "Oral Reconstruction"].map((c, i) => (
                                <span key={i} className="text-[11px] font-medium text-[#4159ff]/70 px-3 py-1.5 border border-[#4159ff]/15 rounded-full uppercase tracking-wide">
                                    {c}
                                </span>
                            ))}
                        </div>

                        <p className="text-[15px] text-slate-500 leading-[1.8] mb-5">
                            Dr. Chang is a Prosthodontist and Founder & CEO of Chang Dental Group, a specialist in the esthetic restoration and replacement of teeth. She graduated Magna Cum Laude from Harvard School of Dental Medicine.
                        </p>
                        <p className="text-[15px] text-slate-500 leading-[1.8] mb-10">
                            Her advanced training spans dental implants, oral and reconstructive surgery, TMD disorders, sleep apnea treatment, traumatic injuries and oral cancer reconstruction.
                        </p>

                        <blockquote className="border-l-2 border-[#4159ff] pl-5 mb-10">
                            <p className="text-[15px] text-slate-400 leading-relaxed italic">
                                &ldquo;I built Medicync because I spent years doing clinical work on machines that were never designed for it. Every lag, every crash, every security gap - we felt it. This is the machine I always needed.&rdquo;
                            </p>
                        </blockquote>

                        <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-200">
                            {[
                                { value: "20+", label: "Years in practice" },
                                { value: "16", label: "Years at Harvard" },
                                { value: "NIH", label: "Award recipient" },
                            ].map((s, i) => (
                                <div key={i}>
                                    <p className="text-2xl font-bold tracking-tight">{s.value}</p>
                                    <p className="text-[11px] text-slate-300 uppercase tracking-wide mt-1">{s.label}</p>
                                </div>
                            ))}
                        </div>

                        <a
                            href="#waitlist"
                            className="inline-flex items-center gap-2 bg-[#4159ff] text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-[#3347d9] transition-colors mt-10"
                        >
                            Join Dr. Chang&apos;s Vision <ArrowRight size={15} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
