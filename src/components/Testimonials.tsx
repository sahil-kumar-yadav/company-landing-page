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
    <section id="testimonials" className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 overflow-hidden">
      {/* Subtle blurred background blob */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-200/40 dark:bg-indigo-500/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
          What Our Clients Say
        </h2>
        <p className="text-slate-500 dark:text-slate-400 mb-16 max-w-2xl mx-auto">
          Hear from professionals who’ve built success with our platform.
        </p>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative rounded-3xl bg-white/40 dark:bg-slate-800/40 border border-slate-200/40 dark:border-slate-700/50 shadow-md backdrop-blur-xl p-8 text-left transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-indigo-500/60">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">
                    {t.name}
                  </h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">
                    {t.title}
                  </p>
                </div>
              </div>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                “{t.quote}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
