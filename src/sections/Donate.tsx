import { Heart, CreditCard, Smartphone, Building2 } from 'lucide-react';

const amounts = [100, 250, 500, 1000];

const impactItems = [
  { amount: '100 грн', impact: 'Навчальні матеріали для одного учня Школи Газди' },
  { amount: '250 грн', impact: 'Насіння та розсада для трьох господарств' },
  { amount: '500 грн', impact: 'Один день майстер-класу з традиційного ремесла' },
  { amount: '1000 грн', impact: 'Участь майстра у виставці народних ремесел' },
];

const methods = [
  { icon: CreditCard, name: 'Картою онлайн', desc: 'Visa, Mastercard', primary: true },
  { icon: Smartphone, name: 'Monobank', desc: 'Jar або переказ', primary: false },
  { icon: Building2, name: 'Банківський переказ', desc: 'IBAN рахунок', primary: false },
];

export default function Donate() {
  return (
    <section id="donate" className="section-container py-20 lg:py-28 bg-gradient-to-br from-[hsl(25,35%,20%)] via-[hsl(15,45%,28%)] to-[hsl(350,45%,25%)]">
      <div className="section-inner">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Info */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium mb-6">
              <Heart className="w-4 h-4 text-[hsl(42,60%,65%)]" />
              <span>Підтримати асоціацію</span>
            </div>
            <h2 className="heading-lg text-white mb-6">
              Ваша підтримка<br />
              <span className="text-[hsl(42,60%,65%)]">змінює Карпати</span>
            </h2>
            <p className="body-lg text-white/80 mb-8">
              Кожна гривня допомагає нам зберігати карпатські традиції, підтримувати
              майстрів та розвивати громади. Ваш внесок — це інвестиція в культуру.
            </p>

            {/* Impact items */}
            <div className="space-y-3">
              {impactItems.map((item) => (
                <div key={item.amount} className="flex items-start gap-3">
                  <div className="px-2 py-1 rounded-md bg-[hsl(42,60%,55%)] text-[hsl(25,25%,15%)] text-xs font-bold flex-shrink-0 mt-0.5">
                    {item.amount}
                  </div>
                  <p className="text-white/80 text-sm">{item.impact}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Donation form */}
          <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-2xl">
            <h3 className="heading-sm text-[hsl(25,25%,15%)] mb-6">Зробити внесок</h3>

            {/* Amount buttons */}
            <div className="grid grid-cols-4 gap-2 mb-4">
              {amounts.map((amount) => (
                <button
                  key={amount}
                  className="py-2.5 rounded-lg border-2 border-[hsl(35,20%,88%)] text-sm font-semibold text-[hsl(25,25%,15%)] hover:border-[hsl(15,45%,35%)] hover:text-[hsl(15,45%,35%)] transition-colors focus:border-[hsl(15,45%,35%)] focus:ring-2 focus:ring-[hsl(15,45%,35%)]/20"
                >
                  {amount}₴
                </button>
              ))}
            </div>

            {/* Custom amount */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-[hsl(25,10%,45%)] mb-1.5">
                Або введіть свою суму
              </label>
              <div className="relative">
                <input
                  type="number"
                  placeholder="Сума в гривнях"
                  className="w-full px-4 py-3 pr-12 rounded-lg border border-[hsl(35,20%,88%)] text-[hsl(25,25%,15%)] focus:outline-none focus:border-[hsl(15,45%,35%)] focus:ring-2 focus:ring-[hsl(15,45%,35%)]/20 transition-all"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[hsl(25,10%,45%)] font-medium">₴</span>
              </div>
            </div>

            {/* Payment methods */}
            <div className="space-y-2 mb-6">
              {methods.map((method) => (
                <button
                  key={method.name}
                  className={`w-full flex items-center gap-3 p-3 rounded-lg border-2 text-left transition-all ${
                    method.primary
                      ? 'border-[hsl(15,45%,35%)] bg-[hsl(15,45%,35%)]/5'
                      : 'border-[hsl(35,20%,88%)] hover:border-[hsl(15,45%,35%)]/30'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    method.primary ? 'bg-[hsl(15,45%,35%)]' : 'bg-[hsl(35,25%,92%)]'
                  }`}>
                    <method.icon className={`w-4 h-4 ${method.primary ? 'text-white' : 'text-[hsl(25,25%,15%)]'}`} />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-[hsl(25,25%,15%)]">{method.name}</div>
                    <div className="text-xs text-[hsl(25,10%,45%)]">{method.desc}</div>
                  </div>
                </button>
              ))}
            </div>

            <button className="btn-gold w-full text-base font-semibold py-3.5">
              Підтримати ❤️
            </button>

            <p className="text-xs text-center text-[hsl(25,10%,55%)] mt-4">
              Всі пожертви використовуються виключно на реалізацію програм асоціації
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
