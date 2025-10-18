"use client";
import Image from "next/image";

export default function Hero() {

  return (
    <section className="py-24 min-h-[72vh]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight" style={{ color: "var(--text)" }}>
                Transform Your Business with Our Solution
              </h1>
            </div>

            <p className="text-lg" style={{ color: "var(--muted)" }}>
              Empower your business with cutting-edge tools and insights. Start your journey today.
            </p>

            <div className="flex gap-4">
              <a href="#contact" className="btn-accent inline-flex items-center justify-center">
                Get Started
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl border"
                style={{
                  borderColor: "rgba(255,255,255,0.06)",
                  color: "var(--text)",
                  background: "transparent",
                }}
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="w-full flex justify-center lg:justify-end">
            <div className="glass w-full max-w-md rounded-3xl overflow-hidden border border-white/6">
              <Image src="/hero-image.png" alt="Hero" width={600} height={600} className="object-cover w-full h-auto" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}