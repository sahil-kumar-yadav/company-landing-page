import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-indigo-900 via-indigo-950 to-black text-gray-300 py-12 border-t border-white/10">
      {/* Decorative background blur */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_70%)] blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand / Text */}
          <div className="text-center md:text-left">
            <h5 className="text-white text-xl font-semibold mb-2 flex items-center justify-center md:justify-start gap-2">
              <span className="inline-block bg-white/10 rounded-xl p-2">
                🚀
              </span>
              StartUp
            </h5>
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} StartUp. All rights reserved.
            </p>
          </div>

          {/* Social links */}
          <div className="flex justify-center md:justify-end gap-5">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-gray-500">
          Built with ❤️ using Next.js & Tailwind CSS
        </div>
      </div>
    </footer>
  );
}
