"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import Badge from "./Badge";
import GlassCard from "./GlassCard";
import Field from "./Field";

// ── Google Sheets Integration ──
// To connect to YOUR Google Sheet:
// 1. Create a Google Sheet with columns: Timestamp, Name, Specialty, Institution, Email, Phone, Interest
// 2. Go to Extensions > Apps Script
// 3. Paste this code:
//
//    function doPost(e) {
//      var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
//      var data = JSON.parse(e.postData.contents);
//      sheet.appendRow([
//        new Date(),
//        data.name,
//        data.specialty,
//        data.institution,
//        data.email,
//        data.phone,
//        data.interest
//      ]);
//      return ContentService
//        .createTextOutput(JSON.stringify({ status: "ok" }))
//        .setMimeType(ContentService.MimeType.JSON);
//    }
//
// 4. Deploy > New deployment > Web app > Anyone can access > Deploy
// 5. Copy the URL and paste it below:

const GOOGLE_SHEETS_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL || "";

export default function Waitlist() {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        const form = e.currentTarget;
        const formData = new FormData(form);

        const data = {
            name: formData.get("name") as string,
            specialty: formData.get("specialty") as string,
            institution: formData.get("institution") as string,
            email: formData.get("email") as string,
            phone: formData.get("phone") as string,
            interest: formData.get("interest") as string,
        };

        try {
            if (GOOGLE_SHEETS_URL) {
                await fetch(GOOGLE_SHEETS_URL, {
                    method: "POST",
                    mode: "no-cors",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data),
                });
            }
            setSubmitted(true);
        } catch {
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="waitlist" className="px-6 py-28">
            <div className="max-w-7xl mx-auto border-t border-slate-200 pt-20">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                    <div>
                        <Badge icon={ArrowRight} label="Waitlist" />
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-8 mb-6 leading-tight">
                            Join the Beta Program.
                        </h2>

                        <div className="rounded-xl bg-[#4159ff]/5 border border-[#4159ff]/15 p-5 mb-8">
                            <p className="text-sm font-semibold text-slate-700 mb-1">🎯 First 1,000 physicians get Medicync for <span className="text-[#4159ff] font-bold">$500</span>.</p>
                            <p className="text-xs text-slate-400">Beta pricing. Limited allocation. This offer disappears at public launch.</p>
                        </div>

                        <div className="space-y-3">
                            {[
                                "First in line when production starts",
                                "Beta pricing — $500 for the first 1,000 users",
                                "Direct access to Dr. Chang and the team",
                                "$0 to reserve. No commitment. No risk.",
                            ].map((b, i) => (
                                <div key={i} className="flex items-center gap-3 text-sm text-slate-500">
                                    <CheckCircle2 size={14} className="text-[#4159ff] shrink-0" />
                                    {b}
                                </div>
                            ))}
                        </div>
                    </div>

                    <GlassCard>
                        {submitted ? (
                            <div className="text-center py-12">
                                <CheckCircle2 size={32} className="text-[#4159ff] mx-auto mb-4" />
                                <h3 className="text-xl font-bold tracking-tight mb-2">You&apos;re on the list.</h3>
                                <p className="text-sm text-slate-400">We&apos;ll reach out when your early access window opens.</p>
                            </div>
                        ) : (
                            <form className="space-y-4" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <Field label="Full Name" placeholder="Dr. Jane Doe" name="name" required />
                                    <Field label="Specialty" placeholder="e.g. Radiology, Oral Surgery" name="specialty" />
                                </div>
                                <Field label="Institution" placeholder="Hospital, Clinic or University" name="institution" />
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <Field label="Email" placeholder="you@institution.com" type="email" name="email" required />
                                    <Field label="Phone" placeholder="+1 (555) 000-0000" type="tel" name="phone" />
                                </div>
                                <div>
                                    <label className="text-[11px] font-medium text-slate-400 uppercase tracking-wide mb-1.5 block">Interest Type</label>
                                    <select
                                        name="interest"
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-[#4159ff]/40 focus:border-[#4159ff]/30 transition-all"
                                    >
                                        <option value="">Select your interest</option>
                                        <option value="beta">Beta Tester</option>
                                        <option value="early">Early Adopter</option>
                                        <option value="institutional">Institutional Pilot</option>
                                    </select>
                                </div>

                                {error && (
                                    <p className="text-sm text-red-500 text-center">{error}</p>
                                )}

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="btn-glow w-full flex items-center justify-center gap-2 bg-[#4159ff] text-white text-sm font-semibold py-4 rounded-full mt-2 hover:bg-[#3347d9] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {loading ? (
                                        <>
                                            <Loader2 size={14} className="animate-spin" /> Reserving your spot...
                                        </>
                                    ) : (
                                        <>
                                            Join the Beta — $0 to Reserve <span className="bounce-arrow"><ArrowRight size={14} /></span>
                                        </>
                                    )}
                                </button>
                                <p className="text-center text-[11px] text-slate-300 pt-1">
                                    $0 to reserve. No commitment. <span className="font-semibold text-[#4159ff]">First 1,000 get $500 pricing.</span>
                                </p>
                            </form>
                        )}
                    </GlassCard>

                </div>
            </div>
        </section>
    );
}
