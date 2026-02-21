import { Mail, Phone, MapPin, Instagram, Facebook, Send } from 'lucide-react';

const contactItems = [
  {
    icon: MapPin,
    label: 'Адреса',
    value: 'вул. Незалежності 12, Яремче, Івано-Франківська обл.',
    href: 'https://maps.google.com',
  },
  {
    icon: Phone,
    label: 'Телефон',
    value: '+38 (093) 123 45 67',
    href: 'tel:+380931234567',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@honorovigazdy.ua',
    href: 'mailto:info@honorovigazdy.ua',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-container py-20 lg:py-28 bg-[hsl(35,30%,96%)]">
      <div className="section-inner">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[hsl(15,45%,35%)]/10 text-[hsl(15,45%,35%)] text-sm font-medium mb-4">
            <span>✦</span>
            <span>Контакти</span>
          </div>
          <h2 className="heading-lg text-[hsl(25,25%,15%)] mb-4">
            Зв'язатись з нами
          </h2>
          <p className="body-lg text-[hsl(25,10%,45%)] max-w-xl mx-auto">
            Маєте питання чи хочете приєднатися? Напишіть нам — ми відповімо протягом доби.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact info */}
          <div className="space-y-6">
            {contactItems.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-start gap-4 p-5 bg-white rounded-xl border border-[hsl(35,20%,88%)] hover:border-[hsl(15,45%,35%)]/30 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[hsl(15,45%,35%)]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[hsl(15,45%,35%)] transition-colors">
                  <Icon className="w-5 h-5 text-[hsl(15,45%,35%)] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-xs text-[hsl(25,10%,55%)] mb-1 uppercase tracking-wide font-medium">{label}</div>
                  <div className="text-[hsl(25,25%,15%)] font-medium">{value}</div>
                </div>
              </a>
            ))}

            {/* Social */}
            <div className="p-5 bg-white rounded-xl border border-[hsl(35,20%,88%)]">
              <div className="text-xs text-[hsl(25,10%,55%)] mb-3 uppercase tracking-wide font-medium">
                Соціальні мережі
              </div>
              <div className="flex gap-3">
                <a
                  href="https://instagram.com"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 text-white text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
                <a
                  href="https://facebook.com"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-700 text-white text-sm font-medium hover:bg-blue-700/90 transition-opacity"
                >
                  <Facebook className="w-4 h-4" />
                  Facebook
                </a>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-[hsl(35,20%,88%)]">
            <h3 className="heading-sm text-[hsl(25,25%,15%)] mb-6">Написати повідомлення</h3>
            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[hsl(25,10%,45%)] mb-1.5">
                    Ваше ім'я
                  </label>
                  <input
                    type="text"
                    placeholder="Іван Іваненко"
                    className="w-full px-4 py-3 rounded-lg border border-[hsl(35,20%,88%)] text-[hsl(25,25%,15%)] placeholder:text-[hsl(25,10%,45%)] focus:outline-none focus:border-[hsl(15,45%,35%)] focus:ring-2 focus:ring-[hsl(15,45%,35%)]/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[hsl(25,10%,45%)] mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="ivan@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-[hsl(35,20%,88%)] text-[hsl(25,25%,15%)] placeholder:text-[hsl(25,10%,45%)] focus:outline-none focus:border-[hsl(15,45%,35%)] focus:ring-2 focus:ring-[hsl(15,45%,35%)]/20 transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[hsl(25,10%,45%)] mb-1.5">
                  Тема
                </label>
                <input
                  type="text"
                  placeholder="Про що хочете поговорити?"
                  className="w-full px-4 py-3 rounded-lg border border-[hsl(35,20%,88%)] text-[hsl(25,25%,15%)] placeholder:text-[hsl(25,10%,45%)] focus:outline-none focus:border-[hsl(15,45%,35%)] focus:ring-2 focus:ring-[hsl(15,45%,35%)]/20 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[hsl(25,10%,45%)] mb-1.5">
                  Повідомлення
                </label>
                <textarea
                  rows={4}
                  placeholder="Ваше повідомлення..."
                  className="w-full px-4 py-3 rounded-lg border border-[hsl(35,20%,88%)] text-[hsl(25,25%,15%)] placeholder:text-[hsl(25,10%,45%)] focus:outline-none focus:border-[hsl(15,45%,35%)] focus:ring-2 focus:ring-[hsl(15,45%,35%)]/20 transition-all resize-none"
                />
              </div>
              <button className="btn-gold w-full flex items-center justify-center gap-2 py-3.5 text-base font-semibold">
                <Send className="w-4 h-4" />
                Надіслати
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
