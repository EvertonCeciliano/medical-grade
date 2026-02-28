"use client";

import Image from "next/image";
import { Monitor } from "lucide-react";
import Badge from "./Badge";

export default function ColorVariants() {
    return (
        <section className="px-4 sm:px-6 py-12 sm:py-28">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8 sm:mb-16">
                    <Badge icon={Monitor} label="Color Variants" />
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight leading-tight mt-6 sm:mt-8 mb-4">
                        Your Style. Your Practice.
                    </h2>
                    <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
                        Medicync is available in four carefully curated finishes, designed to complement any clinical or professional environment.
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
                    {/* White variant */}
                    <div className="group">
                        <div className="relative w-full aspect-square rounded-xl sm:rounded-2xl overflow-hidden bg-slate-100 mb-3 sm:mb-6">
                            <Image
                                src="/notebook-white-home.png"
                                alt="Medicync Arctic White"
                                fill
                                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                            <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white border-2 border-slate-200 shadow-sm" />
                            <h3 className="text-sm sm:text-xl font-bold tracking-tight">Arctic White</h3>
                        </div>
                        <p className="text-[11px] sm:text-sm text-slate-400 leading-relaxed hidden sm:block">
                            Clean. Clinical. Iconic. The white finish speaks the language of precision and sterility, a natural fit for any medical setting.
                        </p>
                    </div>

                    {/* Gold variant */}
                    <div className="group">
                        <div className="relative w-full aspect-square rounded-xl sm:rounded-2xl overflow-hidden bg-slate-100 mb-3 sm:mb-6">
                            <Image
                                src="/notebook-logo-blue.png"
                                alt="Medicync Royal Gold"
                                fill
                                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                            <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#c5a355] border-2 border-[#c5a355]/30 shadow-sm" />
                            <h3 className="text-sm sm:text-xl font-bold tracking-tight">Royal Gold</h3>
                        </div>
                        <p className="text-[11px] sm:text-sm text-slate-400 leading-relaxed hidden sm:block">
                            Bold. Authoritative. Refined. The gold finish conveys confidence and prestige, built to stand out in any boardroom or OR.
                        </p>
                    </div>

                    {/* Red variant */}
                    <div className="group">
                        <div className="relative w-full aspect-square rounded-xl sm:rounded-2xl overflow-hidden bg-slate-100 mb-3 sm:mb-6">
                            <Image
                                src="/notebook-dentist-office.png"
                                alt="Medicync Crimson Red"
                                fill
                                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                            <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#8b1a1a] border-2 border-[#8b1a1a]/30 shadow-sm" />
                            <h3 className="text-sm sm:text-xl font-bold tracking-tight">Crimson Red</h3>
                        </div>
                        <p className="text-[11px] sm:text-sm text-slate-400 leading-relaxed hidden sm:block">
                            Powerful. Distinctive. Unmistakable. The crimson finish makes a statement, for the physician who leads, not follows.
                        </p>
                    </div>

                    {/* Blue variant */}
                    <div className="group">
                        <div className="relative w-full aspect-square rounded-xl sm:rounded-2xl overflow-hidden bg-slate-100 mb-3 sm:mb-6">
                            <Image
                                src="/notebook-blue-vertical.png"
                                alt="Medicync Deep Blue"
                                fill
                                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                            <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#1a3a6e] border-2 border-[#1a3a6e]/30 shadow-sm" />
                            <h3 className="text-sm sm:text-xl font-bold tracking-tight">Deep Blue</h3>
                        </div>
                        <p className="text-[11px] sm:text-sm text-slate-400 leading-relaxed hidden sm:block">
                            Classic. Trusted. Professional. The deep blue finish reflects authority and reliability, the color of medicine itself.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
