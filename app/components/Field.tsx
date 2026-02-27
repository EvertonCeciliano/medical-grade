"use client";

export default function Field({
    label,
    placeholder,
    type = "text",
    name,
    required = false,
}: {
    label: string;
    placeholder: string;
    type?: string;
    name?: string;
    required?: boolean;
}) {
    return (
        <div>
            <label className="text-[11px] font-medium text-slate-400 uppercase tracking-wide mb-1.5 block">{label}</label>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                required={required}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-[#4159ff]/40 focus:border-[#4159ff]/30 transition-all"
            />
        </div>
    );
}
