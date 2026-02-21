import { ArrowDown, Mountain, Users, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient & pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(25,35%,20%)] via-[hsl(15,45%,28%)] to-[hsl(350,45%,25%)]" />

      {/* Decorative texture overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Decorative mountain silhouette */}
      <div className="absolute bottom-0 left-0 right-0 h-32 opacity-20">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-full fill-white">
          <path d="M0,120 L0,80 L120,20 L240,70 L360,10 L480,60 L600,0 L720,50 L840,15 L960,55 L1080,5 L1200,45 L1320,20 L1440,60 L1440,120 Z" />
        </svg>
      </div>

      {/* Gold accent circles */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-[hsl(42,60%,55%)]/10 blur-3xl" />
      <div className="absolute bottom-40 left-10 w-48 h-48 rounded-full bg-[hsl(42,60%,55%)]/10 blur-3xl" />

      <div className="relative z-10 section-container py-32 lg:py-40">
        <div className="section-inner text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium mb-8 backdrop-blur-sm">
            <Star className="w-4 h-4 text-[hsl(42,60%,65%)]" />
            <span>Карпатська спадщина та традиції</span>
          </div>

          {/* Main headline */}
          <h1 className="heading-xl text-white mb-6 max-w-4xl mx-auto">
            <span className="block">Почесні</span>
            <span className="block text-[hsl(42,60%,65%)]">Газди</span>
          </h1>

          <p className="body-lg text-white/80 max-w-2xl mx-auto mb-10">
            Асоціація, що об'єднує хранителів карпатських традицій, підтримує розвиток
            громад та зберігає культурну спадщину Гуцульщини для майбутніх поколінь.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="#about"
              className="inline-flex items-center justify-center px-8 py-4 rounded-md bg-[hsl(42,60%,55%)] text-[hsl(25,25%,15%)] font-semibold text-lg transition-all duration-200 hover:bg-[hsl(42,60%,45%)] hover:shadow-xl"
            >
              Дізнатись більше
            </a>
            <a
              href="#donate"
              className="inline-flex items-center justify-center px-8 py-4 rounded-md border-2 border-white/50 text-white font-semibold text-lg transition-all duration-200 hover:bg-white/10 hover:border-white"
            >
              Підтримати нас
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
            {[
              { icon: Users, value: '120+', label: 'Членів' },
              { icon: Mountain, value: '15', label: 'Громад' },
              { icon: Star, value: '8', label: 'Років' },
            ].map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center"
              >
                <Icon className="w-5 h-5 text-[hsl(42,60%,65%)] mx-auto mb-1" />
                <div className="text-2xl font-bold text-white">{value}</div>
                <div className="text-xs text-white/70">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-bounce">
        <span className="text-xs uppercase tracking-widest">Донизу</span>
        <ArrowDown className="w-4 h-4" />
      </div>
    </section>
  );
}
