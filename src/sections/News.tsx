import { ArrowRight, Clock } from 'lucide-react';

const news = [
  {
    date: '15 листопада 2024',
    category: 'Фестиваль',
    categoryColor: 'bg-purple-50 text-purple-600',
    title: 'Оголошено дати «Свята Газди 2025»',
    excerpt: 'Щорічний фестиваль карпатської культури відбудеться 22–24 серпня 2025 року в Яремче. Реєстрація учасників розпочалась.',
    readTime: '3 хв',
  },
  {
    date: '3 жовтня 2024',
    category: 'Проєкти',
    categoryColor: 'bg-green-50 text-green-600',
    title: 'Відкрито нову садибу в рамках програми «Карпатські садиби»',
    excerpt: 'Родина Михайлюків зі с. Микуличин відкрила гостинну оселю завдяки підтримці нашої асоціації та навчальній програмі.',
    readTime: '5 хв',
  },
  {
    date: '18 вересня 2024',
    category: 'Ремесла',
    categoryColor: 'bg-orange-50 text-orange-600',
    title: 'Майстерня Гуцула прийняла 50-го учня',
    excerpt: 'Центр традиційних ремесел у Косові досяг важливої позначки — навчання пройшли вже 50 молодих майстрів різьбярства та ткацтва.',
    readTime: '4 хв',
  },
  {
    date: '5 серпня 2024',
    category: 'Партнерство',
    categoryColor: 'bg-blue-50 text-blue-600',
    title: 'Підписано угоду з Ivano-Frankivsk Tourism',
    excerpt: 'Асоціація уклала партнерство з обласним туристичним агентством для спільного просування агротуризму в Карпатах.',
    readTime: '2 хв',
  },
];

export default function News() {
  return (
    <section id="news" className="section-container py-20 lg:py-28 bg-[hsl(35,30%,96%)]">
      <div className="section-inner">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[hsl(15,45%,35%)]/10 text-[hsl(15,45%,35%)] text-sm font-medium mb-4">
              <span>✦</span>
              <span>Новини</span>
            </div>
            <h2 className="heading-lg text-[hsl(25,25%,15%)]">
              Останні події
            </h2>
          </div>
          <button className="btn-secondary self-start sm:self-auto">
            Всі новини
          </button>
        </div>

        {/* News list */}
        <div className="grid md:grid-cols-2 gap-6">
          {news.map((item) => (
            <article
              key={item.title}
              className="bg-white rounded-2xl p-6 shadow-sm border border-[hsl(35,20%,88%)] card-hover group cursor-pointer"
            >
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className={`px-2 py-1 rounded-md text-xs font-medium ${item.categoryColor}`}>
                  {item.category}
                </span>
                <div className="flex items-center gap-1 text-xs text-[hsl(25,10%,45%)]">
                  <Clock className="w-3 h-3" />
                  <span>{item.readTime}</span>
                </div>
              </div>

              <h3 className="heading-sm text-[hsl(25,25%,15%)] mb-3 group-hover:text-[hsl(15,45%,35%)] transition-colors">
                {item.title}
              </h3>
              <p className="body-sm text-[hsl(25,10%,45%)] mb-4">{item.excerpt}</p>

              <div className="flex items-center justify-between">
                <span className="text-xs text-[hsl(25,10%,55%)]">{item.date}</span>
                <div className="flex items-center gap-1 text-sm text-[hsl(15,45%,35%)] font-medium group-hover:gap-2 transition-all">
                  <span>Читати</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
