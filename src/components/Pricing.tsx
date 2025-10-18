"use client";

import { Check } from "lucide-react";

interface Plan {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export default function Pricing() {
  const plans: Plan[] = [
    {
      name: "Starter",
      price: "$9",
      description: "Perfect for freelancers and individuals.",
      features: ["1 Project", "Basic Analytics", "Email Support", "Community Access"],
    },
    {
      name: "Pro",
      price: "$29",
      description: "Ideal for small teams and growing businesses.",
      features: ["10 Projects", "Advanced Analytics", "Priority Support", "Team Collaboration"],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$99",
      description: "For large organizations with custom needs.",
      features: ["Unlimited Projects", "Dedicated Account Manager", "Custom Integrations", "24/7 Premium Support"],
    },
  ];

  return (
    <section id="pricing" className="relative py-20 overflow-hidden" style={{ background: "transparent" }}>
      {/* subtle modern gradient */}
      <div className="absolute inset-0" style={{ background: "var(--bg-gradient)", opacity: 0.25, pointerEvents: "none" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 style={{ color: "var(--text)" }} className="text-3xl sm:text-4xl font-extrabold">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-2 muted">Choose a plan that fits your needs — upgrade anytime.</p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="relative rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-1"
              style={{
                background: "var(--card)",
                border: plan.popular ? `1px solid rgba(124,92,255,0.18)` : "1px solid rgba(255,255,255,0.04)",
                boxShadow: plan.popular ? "0 12px 40px rgba(124,92,255,0.08)" : "var(--shadow)",
                backdropFilter: "blur(12px)",
              }}
            >
              {/* “Most Popular” Badge */}
              {plan.popular && (
                <span
                  className="absolute -top-3 left-1/2 -translate-x-1/2 text-sm px-3 py-1 rounded-full"
                  style={{ background: "linear-gradient(90deg,var(--accent),var(--accent-2))", color: "#fff", boxShadow: "0 6px 20px rgba(99,102,241,0.12)" }}
                >
                  Most Popular
                </span>
              )}

              <h3 style={{ color: "var(--text)" }} className="text-2xl font-bold">
                {plan.name}
              </h3>
              <p className="mt-2 muted" style={{ color: "var(--muted)" }}>
                {plan.description}
              </p>

              <div className="mt-6">
                <span className="text-5xl font-extrabold" style={{ color: "var(--text)" }}>
                  {plan.price}
                </span>
                <span className="ml-2 muted">/month</span>
              </div>

              <ul className="mt-8 space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3" style={{ color: "var(--text)" }}>
                    <Check style={{ color: "var(--accent)" }} className="w-5 h-5" />
                    <span className="muted" style={{ color: "var(--text)" }}>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className="mt-10 w-full rounded-xl py-3 font-semibold transition"
                style={
                  plan.popular
                    ? { background: "linear-gradient(90deg,var(--accent),var(--accent-2))", color: "#fff" }
                    : { background: "transparent", color: "var(--text)", border: "1px solid rgba(255,255,255,0.06)" }
                }
                aria-label={`Select ${plan.name} plan`}
              >
                {plan.popular ? "Get Started" : "Choose plan"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}