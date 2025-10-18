import { Settings, ShieldCheck, BarChart3 } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Settings className="w-6 h-6" style={{ color: "var(--accent)" }} />,
      title: "Easy Integration",
      description: "Seamlessly integrate with your existing tools and workflows.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" style={{ color: "var(--accent)" }} />,
      title: "Secure & Reliable",
      description: "Your data is protected with enterprise-grade security.",
    },
    {
      icon: <BarChart3 className="w-6 h-6" style={{ color: "var(--accent)" }} />,
      title: "Analytics",
      description: "Get insights with powerful analytics tools.",
    },
  ];

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ color: "var(--text)" }}>
            Amazing Features
          </h2>
          <p className="mt-2 muted">Discover what makes us different</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl transition-transform hover:-translate-y-1 glass"
              style={{ border: "1px solid rgba(255,255,255,0.04)" }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h4 className="text-xl font-semibold" style={{ color: "var(--text)" }}>
                {feature.title}
              </h4>
              <p className="mt-2 muted">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}