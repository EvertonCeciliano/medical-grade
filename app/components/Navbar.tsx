"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Promo banner */}
            <div className="fixed top-0 w-full z-[60] bg-[#4159ff] text-white text-center py-2 sm:py-2.5 px-4">
                <a href="#waitlist" className="text-[11px] sm:text-sm font-medium hover:underline leading-tight">
                    Beta Program Open. First 1,000 clients get Medicync laptop for <span className="font-bold underline">$500</span>. Reserve for <span className="font-bold">$0</span>{" "}
                    <span className="inline-block animate-bounce">→</span>
                </a>
            </div>

            <nav aria-label="Main navigation" className="fixed top-[36px] sm:top-[40px] w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
                    <Image
                        src="/logo-medicync-new.png"
                        alt="Medicync"
                        width={120}
                        height={28}
                        className="object-contain sm:w-[140px]"
                    />

                    {/* Desktop CTA */}
                    <a
                        href="#waitlist"
                        className="hidden sm:inline-flex text-sm font-semibold text-white bg-[#4159ff] hover:bg-[#3347d9] px-5 py-2 rounded-full transition-colors shadow-lg shadow-[#4159ff]/30"
                    >
                        Join Waitlist, $0
                    </a>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="sm:hidden p-2 text-slate-700"
                        aria-label="Toggle menu"
                    >
                        {open ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>

                {/* Mobile menu */}
                {open && (
                    <div className="sm:hidden bg-white border-t border-slate-200 px-4 py-4 space-y-3">
                        <a href="#features" onClick={() => setOpen(false)} className="block text-sm text-slate-600 hover:text-[#4159ff] transition-colors">
                            Features
                        </a>
                        <a href="#faq" onClick={() => setOpen(false)} className="block text-sm text-slate-600 hover:text-[#4159ff] transition-colors">
                            FAQ
                        </a>
                        <a
                            href="#waitlist"
                            onClick={() => setOpen(false)}
                            className="block text-center text-sm font-semibold text-white bg-[#4159ff] hover:bg-[#3347d9] px-5 py-2.5 rounded-full transition-colors"
                        >
                            Join Waitlist, $0
                        </a>
                    </div>
                )}
            </nav>
        </>
    );
}
