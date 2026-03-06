"use client";

import Image from "next/image";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Badge from "./Badge";

export default function Founder() {
    return (
        <section className="px-4 sm:px-6 py-8 sm:py-28">
            <div className="max-w-7xl mx-auto border-t border-slate-200 pt-6 sm:pt-20">
                <Badge icon={ShieldCheck} label="Founded by" />
                <div className="grid lg:grid-cols-[1fr_1.3fr] gap-8 sm:gap-12 lg:gap-20 items-start mt-6 sm:mt-10">
                    {/* photo */}
                    <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] rounded-2xl overflow-hidden bg-slate-200 border border-slate-200 max-w-[220px] sm:max-w-sm mx-auto lg:max-w-none">
                        <Image src="/dr-jenny-chang.jpg" alt="Dr. Jenny Chang" fill className="object-cover" />
                    </div>

                    {/* content */}
                    <div>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-2">Dr. Jenny Chang</h3>
                        <p className="text-xs sm:text-sm text-slate-400 mb-6 sm:mb-8">
                            Harvard-trained Prosthodontist (DMD, DMSc) &middot; Founder, Chang Dental Group & Cape Cod Dental Group
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6 sm:mb-10">
                            {["Harvard DMD, DMSc", "NIH Dentist-Scientist Award", "Harvard Faculty", "Implant Reconstruction", "Digital Dentistry"].map((c, i) => (
                                <span key={i} className="text-[10px] sm:text-[11px] font-medium text-[#4159ff]/70 px-2.5 sm:px-3 py-1 sm:py-1.5 border border-[#4159ff]/15 rounded-full uppercase tracking-wide">
                                    {c}
                                </span>
                            ))}
                        </div>

                        <p className="text-sm sm:text-[15px] text-slate-500 leading-[1.8] mb-4 sm:mb-5">
                            Dr. Jenny Chang is a Harvard-trained prosthodontist (DMD, DMSc) and founder of Chang Dental Group and Cape Cod Dental Group, multi-location specialty practices focused on complex implant reconstruction and advanced esthetic dentistry.
                        </p>
                        <p className="text-sm sm:text-[15px] text-slate-500 leading-[1.8] mb-6 sm:mb-10">
                            With more than 30 years of clinical and surgical experience and early leadership in digital dentistry, she has firsthand insight into the technological gaps in modern medical imaging and clinical workflows. Dr. Chang is also a recipient of the National Institutes of Health Dentist-Scientist Award and has served on the faculty of Harvard School of Dental Medicine.
                        </p>

                        <blockquote className="border-l-2 border-[#4159ff] pl-4 sm:pl-5 mb-6 sm:mb-10">
                            <p className="text-sm sm:text-[15px] text-slate-400 leading-relaxed italic">
                                &ldquo;I built Medicync because I spent years doing clinical work on computers that were never designed for medicine. Every lag, every crash, every security gap slowed down how doctors work. Medicync is the machine I always needed.&rdquo;
                            </p>
                        </blockquote>

                        <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-5 sm:pt-6 border-t border-slate-200">
                            {[
                                { value: "30+", label: "Years in practice" },
                                { value: "NIH", label: "Dentist-Scientist Award" },
                                { value: "Harvard", label: "Faculty member" },
                            ].map((s, i) => (
                                <div key={i}>
                                    <p className="text-xl sm:text-2xl font-bold tracking-tight">{s.value}</p>
                                    <p className="text-[10px] sm:text-[11px] text-slate-500 uppercase tracking-wide mt-1">{s.label}</p>
                                </div>
                            ))}
                        </div>

                        <a
                            href="#waitlist"
                            className="inline-flex items-center gap-2 bg-[#4159ff] text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-[#3347d9] transition-colors mt-6 sm:mt-10"
                        >
                            Join Dr. Chang&apos;s Vision <ArrowRight size={15} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
