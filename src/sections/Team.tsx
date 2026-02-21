import { Mail, Phone } from 'lucide-react';

const team = [
  {
    name: 'Іван Гуцуляк',
    role: 'Голова асоціації',
    desc: 'Засновник асоціації, пасічник з 20-річним досвідом, організатор фестивалю «Свято Газди».',
    initials: 'ІГ',
    color: 'from-[hsl(15,45%,35%)] to-[hsl(15,45%,25%)]',
  },
  {
    name: 'Марія Коломієць',
    role: 'Координатор проєктів',
    desc: 'Відповідає за реалізацію культурних проєктів та партнерства з місцевими громадами.',
    initials: 'МК',
    color: 'from-[hsl(350,45%,30%)] to-[hsl(350,45%,20%)]',
  },
  {
    name: 'Петро Довбуш',
    role: 'Майстер ремесел',
    desc: 'Різьбяр по дереву, народний майстер України, куратор майстерень та навчальних програм.',
    initials: 'ПД',
    color: 'from-[hsl(42,60%,45%)] to-[hsl(42,60%,35%)]',
  },
  {
    name: 'Оксана Щербань',
    role: 'Менеджер комунікацій',
    desc: 'Веде соціальні мережі, організовує заходи та підтримує зв'язок з членами асоціації.',
    initials: 'ОЩ',
    color: 'from-[hsl(85,30%,40%)] to-[hsl(85,30%,30%)]',
  },
];

export default function Team() {
  return (
    <section id="team" className="section-container py-20 lg:py-28 bg-white">
      <div className="section-inner">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[hsl(15,45%,35%)]/10 text-[hsl(15,45%,35%)] text-sm font-medium mb-4">
            <span>✦</span>
            <span>Команда</span>
          </div>
          <h2 className="heading-lg text-[hsl(25,25%,15%)] mb-4">
            Хто за цим стоїть
          </h2>
          <p className="body-lg text-[hsl(25,10%,45%)] max-w-xl mx-auto">
            Наша команда — люди, які щиро люблять Карпати та вірять у силу традицій.
          </p>
        </div>

        {/* Team grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-[hsl(35,30%,96%)] rounded-2xl p-6 text-center card-hover border border-[hsl(35,20%,88%)]"
            >
              {/* Avatar */}
              <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center mx-auto mb-4 shadow-md`}>
                <span className="text-white font-bold text-xl">{member.initials}</span>
              </div>

              <h3 className="font-semibold text-[hsl(25,25%,15%)] mb-1">{member.name}</h3>
              <div className="text-sm text-[hsl(15,45%,35%)] font-medium mb-3">{member.role}</div>
              <p className="text-sm text-[hsl(25,10%,45%)] leading-relaxed">{member.desc}</p>
            </div>
          ))}
        </div>

        {/* Join CTA */}
        <div className="mt-12 text-center p-8 rounded-2xl bg-gradient-to-br from-[hsl(15,45%,35%)] to-[hsl(15,45%,25%)] text-white">
          <h3 className="heading-sm mb-3">Хочете приєднатися до нашої команди?</h3>
          <p className="text-white/80 mb-6 max-w-lg mx-auto">
            Ми завжди раді новим членам, волонтерам та партнерам, які поділяють наші цінності.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-[hsl(42,60%,55%)] text-[hsl(25,25%,15%)] font-semibold transition-all hover:bg-[hsl(42,60%,45%)]"
          >
            Написати нам
          </a>
        </div>
      </div>
    </section>
  );
}
