import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero-gradient text-white py-24 min-h-[70vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4 text-white">
              Transform Your Business with Our Solution
            </h1>
            <p className="text-lg sm:text-xl text-white/80 mb-6">
              Empower your business with cutting-edge tools and insights. Start your journey today.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white text-black font-semibold shadow-sm hover:bg-gray-100 transition-colors"
              >
                Get Started
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-white/30 text-white hover:bg-white/10 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full flex justify-center lg:justify-end">
            <div className="rounded-2xl overflow-hidden shadow-2xl w-full max-w-md">
              <img
                src="https://cdn.pixabay.com/photo/2020/03/09/15/59/scifi-4916165_1280.jpg"
                alt="Hero image"
                className="w-full h-auto object-cover block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
