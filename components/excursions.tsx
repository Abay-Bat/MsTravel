'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronDown, MapPin, Search } from 'lucide-react';
import { destinations, tours } from '@/data/tours';
import { popularTags } from '@/data/site';
import { cn, plural } from '@/lib/format';

const ANY = '';

/** Считаем туры по направлению из самих данных, чтобы число не устаревало. */
function countTours(name: string): number {
  return tours.filter(
    (tour) => tour.country.includes(name) || tour.cities.includes(name),
  ).length;
}

export function Excursions() {
  // Черновик формы и применённый фильтр разделены: сетка меняется по кнопке,
  // а не на каждое движение в выпадающем списке.
  const [countryDraft, setCountryDraft] = useState(ANY);
  const [cityDraft, setCityDraft] = useState(ANY);
  const [applied, setApplied] = useState<{ country: string; city: string }>({
    country: ANY,
    city: ANY,
  });

  const countryOptions = useMemo(
    () =>
      Array.from(new Set(tours.flatMap((tour) => tour.country))).sort((a, b) =>
        a.localeCompare(b, 'ru'),
      ),
    [],
  );

  // Города зависят от выбранной страны.
  const cityOptions = useMemo(() => {
    const source = countryDraft
      ? tours.filter((tour) => tour.country.includes(countryDraft))
      : tours;
    return Array.from(new Set(source.flatMap((tour) => tour.cities))).sort((a, b) =>
      a.localeCompare(b, 'ru'),
    );
  }, [countryDraft]);

  const matchingTours = useMemo(
    () =>
      tours.filter(
        (tour) =>
          (!applied.country || tour.country.includes(applied.country)) &&
          (!applied.city || tour.cities.includes(applied.city)),
      ),
    [applied],
  );

  const visibleDestinations = useMemo(
    () =>
      applied.country
        ? destinations.filter((item) => item.name === applied.country)
        : destinations,
    [applied.country],
  );

  const isFiltered = Boolean(applied.country || applied.city);

  const handleSubmit = () => {
    setApplied({ country: countryDraft, city: cityDraft });
  };

  const handleTag = (tag: string) => {
    const isCountry = countryOptions.includes(tag);
    const nextCountry = isCountry ? tag : ANY;
    const nextCity = isCountry ? ANY : tag;
    setCountryDraft(nextCountry);
    setCityDraft(nextCity);
    setApplied({ country: nextCountry, city: nextCity });
  };

  const reset = () => {
    setCountryDraft(ANY);
    setCityDraft(ANY);
    setApplied({ country: ANY, city: ANY });
  };

  return (
    <section id="excursions" className="scroll-mt-24 py-20 lg:py-28">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow">Экскурсии</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Куда хотите поехать?
          </h2>
          <p className="mt-3 text-pretty text-ink-muted">
            Выберите страну и город — покажем, какие экскурсии и туры туда есть.
          </p>
        </div>

        {/* Поиск */}
        <div className="mt-8 rounded-3xl bg-surface-muted p-4 ring-1 ring-line sm:p-5">
          <div className="grid gap-3 lg:grid-cols-[1fr_1fr_auto]">
            <Select
              label="Страна"
              value={countryDraft}
              placeholder="Любая страна"
              options={countryOptions}
              onChange={(value) => {
                setCountryDraft(value);
                setCityDraft(ANY);
              }}
            />
            <Select
              label="Город"
              value={cityDraft}
              placeholder="Любой город"
              options={cityOptions}
              onChange={setCityDraft}
            />
            <button
              type="button"
              onClick={handleSubmit}
              className="btn-primary h-12 gap-2 px-8 lg:h-auto"
            >
              <Search className="size-4" aria-hidden />
              Показать экскурсии
            </button>
          </div>

          {/* Популярные направления */}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="mr-1 text-xs font-semibold uppercase tracking-wider text-ink-subtle">
              Популярное
            </span>
            {popularTags.map((tag) => {
              const active = applied.country === tag || applied.city === tag;
              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => handleTag(tag)}
                  aria-pressed={active}
                  className={cn(
                    'rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors',
                    active
                      ? 'bg-brand text-white'
                      : 'bg-white text-ink-muted ring-1 ring-line hover:text-ink',
                  )}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </div>

        {/* Результат поиска */}
        {isFiltered && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm"
          >
            <span className="text-ink-muted">
              {matchingTours.length > 0 ? (
                <>
                  Нашли{' '}
                  <strong className="font-bold text-ink">
                    {matchingTours.length}{' '}
                    {plural(matchingTours.length, 'тур', 'тура', 'туров')}
                  </strong>{' '}
                  по вашему запросу
                </>
              ) : (
                'По этому запросу готовых туров нет — оставьте заявку, соберём маршрут под вас.'
              )}
            </span>
            <button
              type="button"
              onClick={reset}
              className="font-semibold text-brand underline underline-offset-4 hover:text-brand-strong"
            >
              Сбросить
            </button>
          </motion.div>
        )}

        {/* Сетка направлений */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visibleDestinations.map((destination, index) => (
            <motion.a
              key={destination.id}
              href="/#tours"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: Math.min(index, 3) * 0.06 }}
              className="group relative aspect-[3/2] overflow-hidden rounded-3xl"
            >
              <Image
                src={destination.image}
                alt={destination.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent"
              />
              <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-3">
                <span>
                  <span className="flex items-center gap-1.5 text-xl font-extrabold text-white">
                    <MapPin className="size-4 text-brand" aria-hidden />
                    {destination.name}
                  </span>
                  <span className="mt-1 block text-sm text-white/80">
                    {countTours(destination.name)}{' '}
                    {plural(countTours(destination.name), 'тур', 'тура', 'туров')}
                  </span>
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {visibleDestinations.length === 0 && (
          <p className="mt-8 rounded-3xl bg-surface-muted p-10 text-center text-ink-muted">
            Направлений по этому фильтру нет.{' '}
            <button
              type="button"
              onClick={reset}
              className="font-semibold text-brand underline underline-offset-4"
            >
              Показать все
            </button>
          </p>
        )}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */

function Select({
  label,
  value,
  placeholder,
  options,
  onChange,
}: {
  label: string;
  value: string;
  placeholder: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  return (
    <label className="relative block">
      <span className="sr-only">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="field h-12 cursor-pointer appearance-none pr-11 font-medium"
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <ChevronDown
        className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-ink-subtle"
        aria-hidden
      />
    </label>
  );
}
