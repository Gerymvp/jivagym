import { Menu } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "INICIO", href: "#inicio" },
    { name: "PLANES", href: "#planes" },
    { name: "HORARIOS", href: "#horarios" },
    { name: "UBICACIÓN", href: "#ubicacion" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-zinc-900/95 backdrop-blur-sm border-b border-orange-500/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
              <svg
                className="w-6 h-6 text-zinc-900"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold">JIVA</h1>
              <p className="text-xs text-orange-500">GYMS</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium hover:text-orange-500 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#inscribirse"
              className="bg-orange-500 hover:bg-orange-600 text-zinc-900 px-6 py-2 rounded font-medium transition-colors"
            >
              INSCRÍBETE
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-orange-500/20">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium hover:text-orange-500 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#inscribirse"
                className="bg-orange-500 hover:bg-orange-600 text-zinc-900 px-6 py-2 rounded font-medium transition-colors text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                INSCRÍBETE
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
