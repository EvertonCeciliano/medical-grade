"use client";

import React from "react";

export default function GlassCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return (
        <div className={`rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-8 ${className}`}>
            {children}
        </div>
    );
}
