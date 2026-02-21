import { Heart, Instagram, Facebook, Mail } from 'lucide-react';

const footerLinks = {
  Асоціація: ['Про нас', 'Команда', 'Статут', 'Звіти'],
  Діяльність: ['Проєкти', 'Напрямки', 'Новини', 'Фестиваль'],
  Приєднатись: ['Членство', 'Волонтерство', 'Партнерство', 'Підтримати'],
};

export default function Footer() {
  return (
    <footer className="bg-[hsl(25,35%,15%)] text-white">
      <div className="section-container py-14">
        <div className="section-inner">
          <div className="grid lg:grid-cols-4 gap-10 mb-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[hsl(42,60%,55%)] to-[hsl(42,60%,45%)] flex items-center justify-center">
                  <span className="text-[hsl(25,25%,15%)] font-bold">Г</span>
                </div>
                <div>
                  <div className="font-bold text-sm">Почесні Газди</div>
                  <div className="text-xs text-white/50">Асоціація</div>
                </div>
              </div>
              <p className="text-sm text-white/60 leading-relaxed mb-5">
                Зберігаємо карпатські традиції та підтримуємо громади гірського краю.
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="mailto:info@honorovigazdy.ua"
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Links */}
            {Object.entries(footerLinks).map(([section, links]) => (
              <div key={section}>
                <h4 className="font-semibold text-sm text-[hsl(42,60%,65%)] uppercase tracking-wider mb-4">
                  {section}
                </h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-white/60 hover:text-white transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/40">
              © 2016–2025 Асоціація «Почесні Газди». Всі права захищені.
            </p>
            <p className="text-xs text-white/40 flex items-center gap-1">
              Зроблено з <Heart className="w-3 h-3 text-[hsl(42,60%,55%)]" /> для Карпат
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
