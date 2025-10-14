import { Settings, ShieldCheck, BarChart3 } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Settings className="w-6 h-6 text-white" />,
      title: "Easy Integration",
      description:
        "Seamlessly integrate with your existing tools and workflows.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
      title: "Secure & Reliable",
      description:
        "Your data is protected with enterprise-grade security.",
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-white" />,
      title: "Analytics",
      description:
        "Get insights with powerful analytics tools.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Amazing Features
          </h2>
          <p className="mt-2 text-slate-400">
            Discover what makes us different
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl shadow-sm border border-slate-800 hover:shadow-md hover:-translate-y-1 transition-transform bg-slate-800"
            >
              <div className="feature-icon mb-4">
                {feature.icon}
              </div>
              <h4 className="text-xl font-semibold mb-2 text-white">
                {feature.title}
              </h4>
              <p className="text-slate-300 text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
