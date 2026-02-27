"use client";

const roles = [
    "Surgeons",
    "Dentists & Oral Surgeons",
    "Radiologists",
    "Physicians",
    "Surgical Specialists",
    "Clinical Researchers",
    "Hospital Departments",
    "Academic Faculty",
    "Research Teams",
    "AI-Focused Departments",
    "Medical Professionals",
];

export default function BuiltForSlider() {
    const items = [...roles, ...roles];

    return (
        <section className="relative py-5 bg-slate-950 overflow-hidden border-y border-slate-800">
            <div className="marquee-track flex items-center gap-8 whitespace-nowrap w-max">
                {items.map((role, i) => (
                    <span key={i} className="flex items-center gap-3 text-sm font-medium text-white/70 shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4159ff]" />
                        {role}
                    </span>
                ))}
            </div>
        </section>
    );
}
