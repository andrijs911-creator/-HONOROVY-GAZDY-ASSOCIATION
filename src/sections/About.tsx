import { Shield, Heart, Globe, Award } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Традиції',
    desc: 'Зберігаємо і передаємо автентичні карпатські традиції, звичаї та обряди наступним поколінням.',
  },
  {
    icon: Heart,
    title: 'Громада',
    desc: 'Об'єднуємо людей, підтримуємо локальні ініціативи та розвиваємо спільноти гірських сіл.',
  },
  {
    icon: Globe,
    title: 'Відкритість',
    desc: 'Ділимось карпатською культурою зі світом і запрошуємо всіх долучитися до нашої спільноти.',
  },
  {
    icon: Award,
    title: 'Визнання',
    desc: 'Відзначаємо видатних газдів і підтримуємо тих, хто зберігає та розвиває господарство краю.',
  },
];

export default function About() {
  return (
    <section id="about" className="section-container py-20 lg:py-28 bg-[hsl(35,30%,96%)]">
      <div className="section-inner">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[hsl(15,45%,35%)]/10 text-[hsl(15,45%,35%)] text-sm font-medium mb-4">
              <span>✦</span>
              <span>Хто ми</span>
            </div>
            <h2 className="heading-lg text-[hsl(25,25%,15%)] mb-6">
              Асоціація «Почесні Газди»
            </h2>
            <div className="space-y-4 text-[hsl(25,10%,45%)] body-lg">
              <p>
                Ми — спільнота справжніх господарів Карпат, які пишаються своїм корінням
                та плекають традиції предків. Асоціація «Почесні Газди» заснована для
                підтримки людей, які присвятили своє життя збереженню гуцульської культури.
              </p>
              <p>
                Наші члени — це фермери, ремісники, музиканти, вчителі та підприємці,
                що живуть і працюють у карпатських горах. Разом ми будуємо сильніші
                громади та зберігаємо культурну ідентичність регіону.
              </p>
              <p>
                З 2016 року ми реалізуємо проєкти у сферах агротуризму, традиційних
                ремесел, освіти та сталого розвитку гірських територій.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#projects" className="btn-secondary">
                Наші проєкти
              </a>
              <a href="#contact" className="btn-gold">
                Зв'язатись з нами
              </a>
            </div>
          </div>

          {/* Values grid */}
          <div className="grid grid-cols-2 gap-4">
            {values.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-[hsl(35,20%,88%)] card-hover"
              >
                <div className="w-10 h-10 rounded-xl bg-[hsl(15,45%,35%)]/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-[hsl(15,45%,35%)]" />
                </div>
                <h3 className="font-semibold text-[hsl(25,25%,15%)] mb-2">{title}</h3>
                <p className="text-sm text-[hsl(25,10%,45%)] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
