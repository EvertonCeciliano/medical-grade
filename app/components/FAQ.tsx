"use client";

import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import Badge from "./Badge";

const faqs = [
    {
        q: "Who is this actually for?",
        a: "Clients, dentists, oral surgeons, radiologists, clinical researchers. Anyone whose work depends on imaging, patient data, or planning software, it's powerful enough to be a premium everyday laptop, but it was made for the people who can't afford a lag.",
    },
    {
        q: "Can it really handle my imaging workload?",
        a: "Yes. GPU-accelerated rendering for CBCT, CT and MRI. Full surgical planning at native performance. The same files that crash your current laptop run flawlessly here.",
    },
    {
        q: "Is the HIPAA compliance real?",
        a: "Hardware-level. Encrypted storage, biometric multi-factor auth, proximity auto-lock, remote wipe. This isn't a software checkbox, it's the architecture.",
    },
    {
        q: "When can I get one?",
        a: "First production batch is underway. Waitlist members get first access, best pricing, and founding member benefits that disappear at public launch.",
    },
    {
        q: "What does the waitlist cost?",
        a: "Nothing. No payment, no commitment. Just your place in line. When we're ready, you'll be the first to know and the first to order at the lowest price we'll ever offer.",
    },
];

export default function FAQ() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <section id="faq" className="px-4 sm:px-6 py-8 sm:py-28">
            <div className="max-w-7xl mx-auto border-t border-slate-200 pt-6 sm:pt-20">
                <div className="grid lg:grid-cols-2 gap-8 sm:gap-16 lg:gap-24">
                    <div>
                        <Badge icon={ChevronDown} label="FAQ" />
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mt-6 sm:mt-8 mb-6 sm:mb-8">
                            Before You Decide, Read This.
                        </h2>
                        <a
                            href="#waitlist"
                            className="inline-flex items-center gap-2 text-sm font-medium text-[#4159ff] hover:text-[#3347d9] transition-colors"
                        >
                            Ready? Skip to waitlist <ArrowRight size={14} />
                        </a>
                    </div>
                    <div className="divide-y divide-slate-200">
                        {faqs.map((faq, i) => (
                            <div key={i}>
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full flex items-center justify-between py-4 sm:py-5 text-left"
                                >
                                    <span className="font-medium text-sm sm:text-[15px] pr-4 text-slate-700">{faq.q}</span>
                                    <ChevronDown
                                        size={16}
                                        className={`shrink-0 text-[#4159ff]/50 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
                                    />
                                </button>
                                <div className={`overflow-hidden transition-all duration-200 ${openFaq === i ? "max-h-40 pb-4 sm:pb-5" : "max-h-0"}`}>
                                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{faq.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
