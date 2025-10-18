import Image from "next/image";

interface Testimonial {
  name: string;
  title: string;
  image: string;
  quote: string;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      name: "Sarah B.",
      title: "E-commerce Store Owner",
      image: "/client-1.png",
      quote:
        "Working with this platform has been an absolute pleasure. The dashboard is sleek, intuitive, and helps me manage my clients effortlessly.",
    },
    {
      name: "Alex M.",
      title: "Personal Trainer",
      image: "/client-2.png",
      quote:
        "It has completely transformed the way I organize my sessions and track progress. My clients love the experience too!",
    },
    {
      name: "Priya S.",
      title: "Startup Founder",
      image: "/client-3.png",
      quote:
        "Superb design, seamless workflow, and responsive support. I couldn’t be happier with how everything turned out.",
    },
  ];

  return (
    <section id="testimonials" className="relative py-24 overflow-hidden" style={{ background: "transparent" }}>
      {/* Glowing gradient accents */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full blur-[80px]" style={{ background: "radial-gradient(circle, rgba(124,92,255,0.14), transparent 30%)" }} />
      <div className="absolute -bottom-28 -left-28 w-[420px] h-[420px] rounded-full blur-[100px]" style={{ background: "radial-gradient(circle, rgba(6,182,212,0.10), transparent 30%)" }} />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: "var(--text)" }}>
          What Our Clients Say
        </h2>
        <p className="mb-16 max-w-2xl mx-auto muted" style={{ color: "var(--muted)" }}>
          Hear from professionals who’ve built success with our platform.
        </p>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <article
              key={i}
              className="relative rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-1"
              style={{
                background: "var(--card)",
                border: "1px solid rgba(255,255,255,0.06)",
                boxShadow: "var(--shadow)",
                backdropFilter: "blur(12px)",
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-14 h-14 rounded-full overflow-hidden" style={{ border: "2px solid rgba(124,92,255,0.18)" }}>
                  <Image src={t.image} alt={t.name} fill className="object-cover" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold" style={{ color: "var(--text)" }}>
                    {t.name}
                  </h4>
                  <p className="text-sm" style={{ color: "var(--muted)" }}>
                    {t.title}
                  </p>
                </div>
              </div>

              <p className="leading-relaxed" style={{ color: "var(--text)" }}>
                “{t.quote}”
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}