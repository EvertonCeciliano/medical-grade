import Image from "next/image";

export default function Navbar() {
    return (
        <>
            {/* Promo banner */}
            <div className="shimmer-banner fixed top-0 w-full z-[60] text-white text-center py-2.5 sm:py-3 px-4 flex items-center justify-center min-h-[44px] sm:min-h-[44px]">
                <a href="#waitlist" className="flex items-center justify-center gap-1.5 sm:gap-2 text-[11px] sm:text-sm font-medium hover:underline leading-tight">
                    <span className="hidden sm:inline">🚀</span> Beta Program Open — First 1,000 clients:
                    <span className="font-black text-sm sm:text-base bg-white/20 px-2 py-0.5 rounded-full">$500</span>
                    <span className="hidden sm:inline">·</span> Reserve for <span className="font-bold">$0</span>
                    <span className="inline-block animate-bounce ml-1">→</span>
                </a>
            </div>

            <nav aria-label="Main navigation" className="fixed top-[44px] sm:top-[44px] w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
                    <a href="#" className="flex items-center gap-2">
                        <Image
                            src="/logo-3d.png"
                            alt="Medicync"
                            width={36}
                            height={36}
                            className="object-contain w-8 h-8 sm:w-9 sm:h-9"
                        />
                        <span
                            className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                            style={{ fontFamily: '"Helvetica World", "Helvetica Neue", Helvetica, Arial, sans-serif' }}
                        >
                            Medicync
                        </span>
                    </a>

                    {/* CTA — visible on all screen sizes */}
                    <a
                        href="#waitlist"
                        className="inline-flex text-xs sm:text-sm font-semibold text-white bg-[#4159ff] hover:bg-[#3347d9] px-4 sm:px-5 py-2 rounded-full transition-colors shadow-lg shadow-[#4159ff]/30"
                    >
                        Join Waitlist, $0
                    </a>
                </div>
            </nav>
        </>
    );
}
