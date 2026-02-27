"use client";

import React from "react";

export default function GlassCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return (
        <div className={`rounded-2xl border border-slate-200 bg-slate-50 p-8 ${className}`}>
            {children}
        </div>
    );
}
