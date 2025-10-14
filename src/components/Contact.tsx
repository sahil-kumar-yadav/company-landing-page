"use client";

import { useState, FormEvent } from "react";

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Placeholder for API call or integration (e.g., SendGrid, Resend, Supabase)
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
        setForm({ name: "", email: "", message: "" });
    };

    return (
        <section
            id="contact"
            className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 overflow-hidden">
            {/* Decorative Blurred Background Blob */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15),transparent_70%)] blur-3xl" />

            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Header */}
                <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
                    Ready to get started?
                </h2>
                <p className="text-indigo-100 mb-10">
                    Get in touch with us today — let’s build something great together.
                </p>

                {/* Contact Form */}
                <form
                    onSubmit={handleSubmit}
                    className="mx-auto max-w-2xl bg-white/10 backdrop-blur-xl rounded-3xl p-8 text-left shadow-xl border border-white/20"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-indigo-100 mb-1">
                                Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                value={form.name}
                                onChange={handleChange}
                                className="w-full rounded-xl bg-white/20 text-white placeholder-indigo-200 border border-white/30 focus:ring-2 focus:ring-white/50 focus:outline-none px-4 py-3"
                                placeholder="Your name"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-indigo-100 mb-1">
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={form.email}
                                onChange={handleChange}
                                className="w-full rounded-xl bg-white/20 text-white placeholder-indigo-200 border border-white/30 focus:ring-2 focus:ring-white/50 focus:outline-none px-4 py-3"
                                placeholder="you@example.com"
                            />
                        </div>
                    </div>

                    <div className="mb-6">
                        <label htmlFor="message" className="block text-sm font-medium text-indigo-100 mb-1">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            required
                            value={form.message}
                            onChange={handleChange}
                            className="w-full rounded-xl bg-white/20 text-white placeholder-indigo-200 border border-white/30 focus:ring-2 focus:ring-white/50 focus:outline-none px-4 py-3 resize-none"
                            placeholder="Tell us a bit about your project..."
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={submitted}
                        className={`w-full rounded-xl py-3 text-lg font-semibold transition-colors ${submitted
                                ? "bg-white/20 text-indigo-200 cursor-not-allowed"
                                : "bg-white text-indigo-700 hover:bg-indigo-100"
                            }`}
                    >
                        {submitted ? "Message Sent!" : "Send Message"}
                    </button>
                </form>
            </div>
        </section>
    );
}
