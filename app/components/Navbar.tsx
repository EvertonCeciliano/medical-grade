"use client";

import Image from "next/image";

export default function Navbar() {
    return (
        <>
            {/* Promo banner */}
            <div className="fixed top-0 w-full z-[60] bg-[#4159ff] text-white text-center py-2.5 px-4">
                <a href="#waitlist" className="text-xs sm:text-sm font-medium hover:underline">
                    🚀 Beta Program Open — First 1,000 physicians get Medicync for <span className="font-bold underline">$500</span>. Reserve yours for <span className="font-bold">$0</span>{" "}
                    <span className="inline-block animate-bounce">→</span>
                </a>
            </div>

            <nav aria-label="Main navigation" className="fixed top-[40px] w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <Image
                        src="/logo-medicync-new.png"
                        alt="Medicync"
                        width={140}
                        height={32}
                        className="object-contain"
                    />
                    <a
                        href="#waitlist"
                        className="text-sm font-semibold text-white bg-[#4159ff] hover:bg-[#3347d9] px-5 py-2 rounded-full transition-colors shadow-lg shadow-[#4159ff]/30"
                    >
                        Join Waitlist — $0
                    </a>
                </div>
            </nav>
        </>
    );
}
