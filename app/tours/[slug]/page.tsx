import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  BedDouble,
  Check,
  FileCheck,
  Plane,
  ShieldCheck,
  UserCheck,
  X,
} from 'lucide-react';
import { getTourBySlug } from '@/data/tours';

type TourPageProps = {
  params: Promise<{ slug: string }>;
};

const whatsappNumber = '77070607053';

export default async function TourPage({ params }: TourPageProps) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);

  if (!tour) {
    notFound();
  }

  const whatsappText = encodeURIComponent(
    `Здравствуйте! Хочу узнать подробнее о туре «${tour.title}».`,
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;

  const badgeLabels: Record<string, { label: string; icon: typeof Plane }> = {
    plane: { label: 'Перелёт включён', icon: Plane },
    ticket: { label: 'Билеты включены', icon: FileCheck },
    hotel: { label: 'Проживание включено', icon: BedDouble },
    visa: { label: 'Помощь с визой', icon: FileCheck },
    guide: { label: 'Сопровождающий', icon: UserCheck },
    insurance: { label: 'Страховка включена', icon: ShieldCheck },
  };

  return (
    <main id="content" className="min-h-screen bg-surface">
      {/* Верхняя навигация */}
      <div className="container-page pt-8">
        <Link
          href="/#tours"
          className="inline-flex items-center gap-2 text-sm font-semibold text-ink-muted transition hover:text-ink"
        >
          <ArrowLeft className="size-4" />
          Вернуться к турам
        </Link>
      </div>

      {/* Hero */}
      <section className="container-page mt-6">
        <div className="relative overflow-hidden rounded-[2rem] bg-ink">
          <img
            src={tour.image}
            alt={tour.title}
            className="h-[420px] w-full object-cover sm:h-[500px]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/5" />

          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 lg:p-14">
            <span className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">
              {tour.overlayLabel}
            </span>

            <h1 className="mt-4 max-w-5xl text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {tour.title}
            </h1>

            <p className="mt-4 max-w-3xl text-base text-white/80 sm:text-lg">
              {tour.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Основная информация */}
      <section className="container-page py-10 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="min-w-0">
            {/* Характеристики */}
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl bg-white p-5 ring-1 ring-line">
                <p className="text-sm text-ink-muted">Продолжительность</p>
                <p className="mt-1 font-bold">
                  {tour.durationDays} дней / {tour.durationNights} ночей
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5 ring-1 ring-line">
                <p className="text-sm text-ink-muted">Дата</p>
                <p className="mt-1 font-bold">{tour.dateLabel}</p>
              </div>

              <div className="rounded-2xl bg-white p-5 ring-1 ring-line sm:col-span-2 lg:col-span-1">
                <p className="text-sm text-ink-muted">Вылет</p>
                <p className="mt-1 font-bold">{tour.departureCity}</p>
              </div>
            </div>

            {/* Highlights */}
            {tour.highlights.length > 0 && (
              <section className="mt-12">
                <p className="eyebrow">Главное</p>
                <h2 className="mt-2 text-3xl font-extrabold tracking-tight">
                  Что вас ждёт
                </h2>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {tour.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex gap-3 rounded-2xl bg-white p-5 ring-1 ring-line"
                    >
                      <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-brand/10 text-brand">
                        <Check className="size-4" />
                      </span>

                      <p className="text-sm leading-6 text-ink-muted">
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Бейджи */}
            {tour.badges.length > 0 && (
              <section className="mt-12">
                <h2 className="text-2xl font-extrabold">
                  Что уже включено
                </h2>

                <div className="mt-5 flex flex-wrap gap-3">
                  {tour.badges.map((badge) => {
                    const item = badgeLabels[badge];

                    if (!item) return null;

                    const Icon = item.icon;

                    return (
                      <div
                        key={badge}
                        className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-semibold ring-1 ring-line"
                      >
                        <Icon className="size-4 text-brand" />
                        {item.label}
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* Программа */}
            <section className="mt-14">
              <p className="eyebrow">Маршрут</p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight">
                Программа тура
              </h2>

              <div className="mt-7 space-y-4">
                {tour.itinerary.map((day) => (
                  <article
                    key={day.day}
                    className="overflow-hidden rounded-3xl bg-white ring-1 ring-line"
                  >
                    <div className="p-5 sm:p-6">
                      <div className="flex flex-wrap items-start gap-4">
                        <div className="grid size-11 shrink-0 place-items-center rounded-full bg-brand text-sm font-extrabold text-white">
                          {day.day}
                        </div>

                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-bold uppercase tracking-wider text-brand">
                            День {day.day}
                          </p>

                          <h3 className="mt-1 text-xl font-extrabold">
                            {day.city}
                          </h3>

                          {day.date && (
                            <p className="mt-1 text-sm text-ink-muted">
                              {day.date}
                            </p>
                          )}
                        </div>
                      </div>

                      <ul className="mt-5 space-y-3 border-t border-line pt-5">
                        {day.activities.map((activity) => (
                          <li
                            key={activity}
                            className="flex gap-3 text-sm leading-6 text-ink-muted"
                          >
                            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* Входит / не входит */}
            <section className="mt-14 grid gap-6 md:grid-cols-2">
              {tour.included.length > 0 && (
                <div className="rounded-3xl bg-white p-6 ring-1 ring-line sm:p-7">
                  <h2 className="text-xl font-extrabold">
                    Что входит в стоимость
                  </h2>

                  <ul className="mt-5 space-y-3">
                    {tour.included.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm leading-6 text-ink-muted"
                      >
                        <Check className="mt-1 size-4 shrink-0 text-brand" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {tour.notIncluded.length > 0 && (
                <div className="rounded-3xl bg-white p-6 ring-1 ring-line sm:p-7">
                  <h2 className="text-xl font-extrabold">
                    Что не входит
                  </h2>

                  <ul className="mt-5 space-y-3">
                    {tour.notIncluded.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm leading-6 text-ink-muted"
                      >
                        <X className="mt-1 size-4 shrink-0 text-ink-muted" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>
          </div>

          {/* Sticky booking card */}
          <aside className="h-fit lg:sticky lg:top-24">
            <div className="rounded-[2rem] bg-ink p-6 text-white shadow-xl sm:p-7">
              <p className="text-sm text-white/60">
                Продолжительность
              </p>

              <p className="mt-1 text-2xl font-extrabold">
                {tour.durationDays} дней / {tour.durationNights} ночей
              </p>

              <div className="mt-6 border-t border-white/10 pt-6">
                <p className="text-sm text-white/60">Дата тура</p>
                <p className="mt-1 font-bold">{tour.dateLabel}</p>
              </div>

              <div className="mt-6 border-t border-white/10 pt-6">
                <p className="text-sm text-white/60">Стоимость</p>
                <p className="mt-1 text-xl font-extrabold">
                  {tour.price.amount !== null
                    ? `${tour.price.amount.toLocaleString('ru-RU')} ${tour.price.currency}`
                    : 'Цена по запросу'}
                </p>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-green-500 px-5 py-4 text-sm font-bold text-white transition hover:bg-green-600"
              >
                Написать в WhatsApp
                <ArrowRight className="size-4" />
              </a>

              <Link
                href="/#lead"
                className="mt-3 flex w-full items-center justify-center rounded-full bg-white px-5 py-4 text-sm font-bold text-ink transition hover:bg-white/90"
              >
                Оставить заявку
              </Link>

              <p className="mt-4 text-center text-xs leading-5 text-white/50">
                Менеджер ответит, уточнит наличие мест и рассчитает
                стоимость под ваш состав.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* Нижний CTA */}
      <section className="container-page pb-16 lg:pb-24">
        <div className="rounded-[2rem] bg-surface-muted p-8 text-center sm:p-12">
          <h2 className="text-2xl font-extrabold sm:text-3xl">
            Хотите поехать в этот тур?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-ink-muted">
            Напишите нам в WhatsApp — расскажем о программе, наличии мест,
            стоимости и поможем подготовиться к поездке.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary btn-lg mt-7 inline-flex gap-2"
          >
            Написать в WhatsApp
            <ArrowRight className="size-4" />
          </a>
        </div>
      </section>
    </main>
  );
}