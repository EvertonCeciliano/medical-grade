"use client";

import Image from "next/image";
import { Heart } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-slate-200">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-6 py-14">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                    {/* Brand — wider column */}
                    <div className="md:col-span-5">
                        <Image
                            src="/logo-medicync-new.png"
                            alt="Medicync"
                            width={140}
                            height={32}
                            className="object-contain mb-4"
                        />
                        <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
                            The first laptop built for medicine. Clinical-grade performance,
                            absolute data security, AI-powered intelligence.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-3">
                        <h4 className="font-semibold text-xs uppercase tracking-widest text-slate-900 mb-4">
                            Quick Links
                        </h4>
                        <ul className="space-y-2.5 text-sm">
                            <li>
                                <a
                                    href="#capabilities"
                                    className="text-slate-500 hover:text-[#4159ff] transition-colors"
                                >
                                    Capabilities
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#faq"
                                    className="text-slate-500 hover:text-[#4159ff] transition-colors"
                                >
                                    FAQ
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#waitlist"
                                    className="text-slate-500 hover:text-[#4159ff] transition-colors"
                                >
                                    Join the Waitlist
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="md:col-span-4">
                        <h4 className="font-semibold text-xs uppercase tracking-widest text-slate-900 mb-4">
                            Contact
                        </h4>
                        <ul className="space-y-2.5 text-sm">
                            <li>
                                <a
                                    href="mailto:jenny@drchang.com"
                                    className="text-slate-500 hover:text-[#4159ff] transition-colors"
                                >
                                    jenny@drchang.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom bar — "Made with love" */}
            <div className="bg-[#4159ff]">
                <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-3">
                    <p className="text-xs text-white/70">
                        &copy; {new Date().getFullYear()} Medicync. All rights reserved.
                    </p>

                    <div className="flex items-center gap-1.5 text-xs text-white/80">
                        <span>Made with</span>
                        <Heart size={12} className="text-red-300 fill-red-300 animate-pulse" />
                        <span>by</span>
                        <a
                            href="https://www.instagram.com/kaimkt_/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src="/kai-web.png"
                                alt="KAI Web"
                                width={56}
                                height={14}
                                className="h-3.5 w-auto inline-block brightness-200 hover:brightness-150 transition-all"
                            />
                        </a>
                        <span className="text-white/50 mx-0.5">&</span>
                        <a
                            href="https://www.linkedin.com/in/evertonceciliano/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-white hover:text-white/80 transition-colors"
                        >
                            Everton Ceciliano
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
