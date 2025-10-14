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
      features: [
        "1 Project",
        "Basic Analytics",
        "Email Support",
        "Community Access",
      ],
    },
    {
      name: "Pro",
      price: "$29",
      description: "Ideal for small teams and growing businesses.",
      features: [
        "10 Projects",
        "Advanced Analytics",
        "Priority Support",
        "Team Collaboration",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$99",
      description: "For large organizations with custom needs.",
      features: [
        "Unlimited Projects",
        "Dedicated Account Manager",
        "Custom Integrations",
        "24/7 Premium Support",
      ],
    },
  ];

  return (
    <section id="pricing" className="relative py-20 bg-slate-50 dark:bg-slate-900 overflow-hidden">
      {/* subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/40 via-white/20 to-transparent dark:from-indigo-900/20 dark:via-slate-800/30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Choose a plan that fits your needs — upgrade anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-8 border backdrop-blur-xl bg-white/40 dark:bg-slate-800/30 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg ${
                plan.popular
                  ? "border-indigo-500/50 shadow-indigo-100 dark:shadow-indigo-900/30"
                  : "border-slate-200/30"
              }`}
            >
              {/* “Most Popular” Badge */}
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-sm px-3 py-1 rounded-full shadow-md">
                  Most Popular
                </span>
              )}

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                {plan.name}
              </h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300">
                {plan.description}
              </p>

              <div className="mt-6">
                <span className="text-5xl font-extrabold text-slate-900 dark:text-white">
                  {plan.price}
                </span>
                <span className="text-slate-500 dark:text-slate-400">/month</span>
              </div>

              <ul className="mt-8 space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                    <Check className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-10 w-full rounded-xl py-3 font-semibold transition ${
                  plan.popular
                    ? "bg-indigo-600 text-white hover:bg-indigo-700"
                    : "bg-white/60 dark:bg-slate-700/50 text-slate-800 dark:text-white hover:bg-slate-100/70 dark:hover:bg-slate-700"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
