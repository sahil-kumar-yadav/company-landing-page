import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative py-12">
      <div className="absolute inset-0 -z-10" style={{ background: "linear-gradient(180deg, rgba(124,92,255,0.06), rgba(6,182,212,0.04))", filter: "blur(40px)" }} />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h5 className="text-xl font-semibold mb-2 flex items-center gap-2" style={{ color: "var(--text)" }}>
              <span className="inline-block rounded-xl p-2" style={{ background: "rgba(255,255,255,0.03)" }}>
                🚀
              </span>
              StartUp
            </h5>
            <p className="text-sm muted">© {new Date().getFullYear()} StartUp. All rights reserved.</p>
          </div>

          <div className="flex justify-center md:justify-end gap-5">
            <a href="#" className="text-muted hover:text-white transition-colors" aria-label="Twitter"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="text-muted hover:text-white transition-colors" aria-label="Facebook"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="text-muted hover:text-white transition-colors" aria-label="LinkedIn"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="text-muted hover:text-white transition-colors" aria-label="Instagram"><Instagram className="w-5 h-5" /></a>
          </div>
        </div>

        <div className="border-t mt-10 pt-6 text-center text-sm muted" style={{ borderColor: "rgba(255,255,255,0.04)" }}>
          Built with ❤️ using Next.js & Tailwind CSS
        </div>
      </div>
    </footer>
  );
}