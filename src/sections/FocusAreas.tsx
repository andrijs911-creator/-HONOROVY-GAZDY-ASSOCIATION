import { Leaf, Home, Music, Scissors, BookOpen, Camera } from 'lucide-react';

const areas = [
  {
    icon: Leaf,
    title: 'Агротуризм',
    desc: 'Розвиваємо сільський туризм у Карпатах, допомагаємо газдам відкривати садиби та приймати гостей.',
    color: 'bg-green-50 text-green-600',
    border: 'border-green-100',
  },
  {
    icon: Home,
    title: 'Традиційне господарство',
    desc: 'Підтримуємо збереження традиційних форм ведення господарства: скотарство, пасічництво, городництво.',
    color: 'bg-amber-50 text-amber-600',
    border: 'border-amber-100',
  },
  {
    icon: Scissors,
    title: 'Народні ремесла',
    desc: 'Сприяємо відродженню гуцульських ремесел: різьбярства, вишивки, лижникарства та гончарства.',
    color: 'bg-orange-50 text-orange-600',
    border: 'border-orange-100',
  },
  {
    icon: Music,
    title: 'Культура та фольклор',
    desc: 'Організовуємо фестивалі, концерти та культурні заходи для збереження гуцульського фольклору.',
    color: 'bg-purple-50 text-purple-600',
    border: 'border-purple-100',
  },
  {
    icon: BookOpen,
    title: 'Освіта',
    desc: 'Проводимо навчальні програми для молоді та майстер-класи з традиційних карпатських практик.',
    color: 'bg-blue-50 text-blue-600',
    border: 'border-blue-100',
  },
  {
    icon: Camera,
    title: 'Документація спадщини',
    desc: 'Фіксуємо та зберігаємо автентичні знання, пісні, обряди та традиції Гуцульщини.',
    color: 'bg-teal-50 text-teal-600',
    border: 'border-teal-100',
  },
];

export default function FocusAreas() {
  return (
    <section id="focus" className="section-container py-20 lg:py-28 bg-white">
      <div className="section-inner">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[hsl(15,45%,35%)]/10 text-[hsl(15,45%,35%)] text-sm font-medium mb-4">
            <span>✦</span>
            <span>Напрямки діяльності</span>
          </div>
          <h2 className="heading-lg text-[hsl(25,25%,15%)] mb-4">
            Що ми робимо
          </h2>
          <p className="body-lg text-[hsl(25,10%,45%)] max-w-2xl mx-auto">
            Асоціація працює у шести ключових напрямках для збереження та розвитку
            карпатської культури та спільнот.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map(({ icon: Icon, title, desc, color, border }) => (
            <div
              key={title}
              className={`rounded-2xl p-6 border ${border} card-hover bg-white shadow-xs`}
            >
              <div className={`w-12 h-12 rounded-xl ${color} bg-opacity-20 flex items-center justify-center mb-4`}>
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="heading-sm text-[hsl(25,25%,15%)] mb-3">{title}</h3>
              <p className="body-md text-[hsl(25,10%,45%)]">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
