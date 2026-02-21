import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const navLinks = [
  { label: 'Про нас', href: '#about' },
  { label: 'Напрямки', href: '#focus' },
  { label: 'Проєкти', href: '#projects' },
  { label: 'Команда', href: '#team' },
  { label: 'Новини', href: '#news' },
  { label: 'Партнери', href: '#partners' },
  { label: 'Контакти', href: '#contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-[hsl(35,20%,88%)]'
          : 'bg-transparent'
      }`}
    >
      <div className="section-container">
        <div className="section-inner">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br from-[hsl(15,45%,35%)] to-[hsl(15,45%,25%)] flex items-center justify-center shadow-md flex-shrink-0">
                <span className="text-white font-bold text-lg lg:text-xl">Г</span>
              </div>
              <div className="hidden sm:block">
                <div className={`font-bold text-sm lg:text-base leading-tight transition-colors ${scrolled ? 'text-[hsl(25,25%,15%)]' : 'text-white drop-shadow-md'}`}>
                  Почесні Газди
                </div>
                <div className={`text-xs leading-tight transition-colors ${scrolled ? 'text-[hsl(25,10%,45%)]' : 'text-white/80 drop-shadow-sm'}`}>
                  Асоціація
                </div>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    scrolled
                      ? 'text-[hsl(25,25%,15%)] hover:text-[hsl(15,45%,35%)] hover:bg-[hsl(35,25%,92%)]'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA + Burger */}
            <div className="flex items-center gap-3">
              <a
                href="#donate"
                className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-md bg-[hsl(42,60%,55%)] text-[hsl(25,25%,15%)] text-sm font-semibold transition-all duration-200 hover:bg-[hsl(42,60%,45%)] hover:shadow-lg"
              >
                Підтримати
              </a>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`lg:hidden p-2 rounded-md transition-colors ${
                  scrolled ? 'text-[hsl(25,25%,15%)] hover:bg-[hsl(35,25%,92%)]' : 'text-white hover:bg-white/10'
                }`}
                aria-label="Меню"
              >
                {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-[hsl(35,20%,88%)] shadow-xl">
          <div className="section-container py-4">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-3 rounded-md text-[hsl(25,25%,15%)] font-medium hover:bg-[hsl(35,25%,92%)] hover:text-[hsl(15,45%,35%)] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#donate"
                onClick={() => setMenuOpen(false)}
                className="mt-2 mx-0 inline-flex items-center justify-center px-4 py-3 rounded-md bg-[hsl(42,60%,55%)] text-[hsl(25,25%,15%)] font-semibold transition-all hover:bg-[hsl(42,60%,45%)]"
              >
                Підтримати асоціацію
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
