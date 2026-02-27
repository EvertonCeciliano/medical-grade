"use client";

import React from "react";

export default function Badge({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
    return (
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4159ff]/10 border border-[#4159ff]/20">
            <div className="w-5 h-5 rounded-full bg-[#4159ff]/20 grid place-items-center">
                <Icon size={11} className="text-[#4159ff]" />
            </div>
            <span className="text-xs font-semibold text-[#4159ff] tracking-wide">{label}</span>
        </div>
    );
}
