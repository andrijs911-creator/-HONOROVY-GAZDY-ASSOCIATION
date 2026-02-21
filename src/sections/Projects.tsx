import { ArrowRight, Calendar, MapPin } from 'lucide-react';

const projects = [
  {
    tag: 'Туризм',
    tagColor: 'bg-green-50 text-green-600',
    title: 'Карпатські садиби',
    desc: 'Програма розвитку агротуристичних садиб у гірських селах. Допомагаємо господарям облаштувати житло для прийому туристів та вийти на ринок.',
    location: 'Яремче, Верховина',
    year: '2022–2024',
    gradient: 'from-green-500 to-teal-600',
    status: 'Активний',
  },
  {
    tag: 'Ремесла',
    tagColor: 'bg-orange-50 text-orange-600',
    title: 'Майстерня Гуцула',
    desc: 'Центр традиційних ремесел, де майстри навчають молодь різьбярству по дереву, писанкарству та ткацтву на верстаті.',
    location: 'Косів',
    year: '2021–досі',
    gradient: 'from-amber-500 to-orange-600',
    status: 'Активний',
  },
  {
    tag: 'Фестиваль',
    tagColor: 'bg-purple-50 text-purple-600',
    title: 'Свято Газди',
    desc: 'Щорічний фестиваль карпатської культури, де збираються найкращі господарі, майстри та митці зі всього регіону.',
    location: 'Яремче',
    year: 'Щорічно',
    gradient: 'from-rose-500 to-red-600',
    status: 'Наступний: Серпень 2025',
  },
  {
    tag: 'Освіта',
    tagColor: 'bg-blue-50 text-blue-600',
    title: 'Школа Газди',
    desc: 'Освітня програма для підлітків та молоді, що поєднує традиційні знання про господарство з сучасними підприємницькими навичками.',
    location: 'Онлайн + Карпати',
    year: '2023–досі',
    gradient: 'from-blue-500 to-indigo-600',
    status: 'Активний',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-container py-20 lg:py-28 bg-[hsl(35,30%,96%)]">
      <div className="section-inner">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[hsl(15,45%,35%)]/10 text-[hsl(15,45%,35%)] text-sm font-medium mb-4">
              <span>✦</span>
              <span>Проєкти</span>
            </div>
            <h2 className="heading-lg text-[hsl(25,25%,15%)]">
              Наші ініціативи
            </h2>
          </div>
          <a
            href="#contact"
            className="btn-secondary self-start sm:self-auto"
          >
            Всі проєкти
          </a>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[hsl(35,20%,88%)] card-hover"
            >
              {/* Color bar */}
              <div className={`h-2 bg-gradient-to-r ${p.gradient}`} />

              <div className="p-6">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <span className={`px-2 py-1 rounded-md text-xs font-medium ${p.tagColor}`}>
                    {p.tag}
                  </span>
                  <span className="px-2 py-1 rounded-md text-xs font-medium bg-[hsl(15,45%,35%)]/10 text-[hsl(15,45%,35%)]">
                    {p.status}
                  </span>
                </div>

                <h3 className="heading-sm text-[hsl(25,25%,15%)] mb-3">{p.title}</h3>
                <p className="body-md text-[hsl(25,10%,45%)] mb-5">{p.desc}</p>

                <div className="flex flex-wrap gap-4 text-xs text-[hsl(25,10%,45%)]">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[hsl(42,60%,55%)]" />
                    <span>{p.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[hsl(42,60%,55%)]" />
                    <span>{p.year}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
