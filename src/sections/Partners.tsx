const partners = [
  { name: 'Ivano-Frankivsk ODA', type: 'Державний партнер' },
  { name: 'Карпатський НПП', type: 'Природний парк' },
  { name: 'USAID Ukraine', type: 'Міжнародний донор' },
  { name: 'Яремче Туризм', type: 'Туристичний оператор' },
  { name: 'Гуцульщина Медіа', type: 'Медіа партнер' },
  { name: 'ГО «Карпатська хата»', type: 'Громадська організація' },
  { name: 'Косівський коледж', type: 'Освітній партнер' },
  { name: 'Укрпошта', type: 'Логістичний партнер' },
];

const testimonials = [
  {
    text: 'Завдяки Почесним Газдам наша садиба стала відомою далеко за межами Карпат. Ми навчились приймати гостей і тепер маємо стабільний дохід.',
    author: 'Галина Матвієнко',
    role: 'Учасниця програми «Карпатські садиби»',
    initials: 'ГМ',
  },
  {
    text: 'Програма «Майстерня Гуцула» повернула мені інтерес до різьбярства. Тепер я сам навчаю молодших і відчуваю себе частиною великої спільноти.',
    author: 'Михайло Семенів',
    role: 'Майстер різьбярства, Косів',
    initials: 'МС',
  },
];

export default function Partners() {
  return (
    <section id="partners" className="section-container py-20 lg:py-28 bg-white">
      <div className="section-inner">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[hsl(15,45%,35%)]/10 text-[hsl(15,45%,35%)] text-sm font-medium mb-4">
            <span>✦</span>
            <span>Партнери та відгуки</span>
          </div>
          <h2 className="heading-lg text-[hsl(25,25%,15%)] mb-4">
            Разом ми сильніші
          </h2>
          <p className="body-lg text-[hsl(25,10%,45%)] max-w-xl mx-auto">
            Нас підтримують організації та інституції, які вірять у розвиток Карпатського регіону.
          </p>
        </div>

        {/* Partners grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {partners.map((p) => (
            <div
              key={p.name}
              className="flex flex-col items-center justify-center p-5 rounded-xl border border-[hsl(35,20%,88%)] bg-[hsl(35,30%,96%)] hover:border-[hsl(15,45%,35%)]/30 hover:shadow-md transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-[hsl(15,45%,35%)]/10 flex items-center justify-center mb-3">
                <span className="text-lg font-bold text-[hsl(15,45%,35%)]">
                  {p.name.charAt(0)}
                </span>
              </div>
              <div className="font-medium text-sm text-[hsl(25,25%,15%)] mb-1">{p.name}</div>
              <div className="text-xs text-[hsl(25,10%,55%)]">{p.type}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="bg-[hsl(35,30%,96%)] rounded-2xl p-7 border border-[hsl(35,20%,88%)]"
            >
              <div className="text-4xl text-[hsl(42,60%,55%)] leading-none mb-4 font-serif">"</div>
              <p className="body-md text-[hsl(25,25%,15%)] italic mb-6">{t.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[hsl(15,45%,35%)] to-[hsl(15,45%,25%)] flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{t.initials}</span>
                </div>
                <div>
                  <div className="font-semibold text-sm text-[hsl(25,25%,15%)]">{t.author}</div>
                  <div className="text-xs text-[hsl(25,10%,45%)]">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
