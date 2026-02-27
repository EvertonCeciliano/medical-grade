"use client";

export default function BuiltFor() {
    return (
        <section className="px-6 pb-20">
            <div className="max-w-7xl mx-auto border-t border-slate-200 pt-20">
                <p className="text-xs font-semibold text-[#4159ff] tracking-wide uppercase mb-8">
                    Built for
                </p>
                <div className="flex flex-wrap gap-3">
                    {["Surgeons", "Dentists & Oral Surgeons", "Radiologists", "Physicians", "Surgical Specialists", "Clinical Researchers", "Hospital Departments", "Academic Faculty", "Research Teams", "AI-Focused Departments", "Medical Professionals"].map((u, i) => (
                        <span key={i} className="text-sm font-medium text-slate-400 px-4 py-2 border border-slate-200 rounded-full hover:border-[#4159ff]/30 hover:text-slate-600 transition-colors">
                            {u}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
