"use client";

import { useState, FormEvent } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Something went wrong");

      setStatus("success");
      setForm({ name: "", email: "", message: "" });

      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      console.error(error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const idleStyle = { background: "var(--card)", color: "var(--text)" };
  const loadingStyle = { background: "rgba(255,255,255,0.06)", color: "var(--muted)" };
  const successStyle = { background: "linear-gradient(90deg, #16a34a, #059669)", color: "#041014" };
  const errorStyle = { background: "linear-gradient(90deg, #ef4444, #dc2626)", color: "#fff" };

  const btnStyle =
    status === "loading" ? loadingStyle : status === "success" ? successStyle : status === "error" ? errorStyle : idleStyle;

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-[100px]" style={{ background: "radial-gradient(circle,#7c5cff33,transparent)" }} />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-[100px]" style={{ background: "radial-gradient(circle,#06b6d433,transparent)" }} />

      <div className="relative z-10 container mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ color: "var(--text)" }}>
          Ready to get started?
        </h2>
        <p className="mt-2 muted mb-8">Get in touch with us today — let’s build something great together.</p>

        <form onSubmit={handleSubmit} className="mx-auto max-w-2xl glass p-8 rounded-3xl text-left border border-white/6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1" style={{ color: "var(--text)" }}>
                Name
              </label>
              <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} className="w-full rounded-xl px-4 py-3 transition" placeholder="Your name" style={{ background: "rgba(255,255,255,0.03)", color: "var(--text)", border: "1px solid rgba(255,255,255,0.04)" }} />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1" style={{ color: "var(--text)" }}>
                Email
              </label>
              <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} className="w-full rounded-xl px-4 py-3 transition" placeholder="you@example.com" style={{ background: "rgba(255,255,255,0.03)", color: "var(--text)", border: "1px solid rgba(255,255,255,0.04)" }} />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium mb-1" style={{ color: "var(--text)" }}>
              Message
            </label>
            <textarea id="message" name="message" rows={4} required value={form.message} onChange={handleChange} className="w-full rounded-xl px-4 py-3 resize-none transition" placeholder="Tell us about your project..." style={{ background: "rgba(255,255,255,0.03)", color: "var(--text)", border: "1px solid rgba(255,255,255,0.04)" }} />
          </div>

          <button type="submit" disabled={status === "loading"} className="w-full rounded-xl py-3 text-lg font-semibold transition-all duration-200" style={btnStyle}>
            {status === "loading" ? "Sending..." : status === "success" ? "Message Sent!" : status === "error" ? "Failed — Try Again" : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}