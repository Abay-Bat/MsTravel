'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { tours } from '@/data/tours';
import { TourCard } from '@/components/tour-card';
import { cn } from '@/lib/format';
import type { TourCategory } from '@/types/tour';

type Filter = 'all' | TourCategory;

const filters: { value: Filter; label: string }[] = [
  { value: 'all', label: 'Все туры' },
  { value: 'concert', label: 'На концерты' },
  { value: 'sightseeing', label: 'Экскурсионные' },
  { value: 'combined', label: 'Несколько стран' },
];

export function Tours() {
  const [filter, setFilter] = useState<Filter>('all');
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const visible = useMemo(
    () =>
      filter === 'all' ? tours : tours.filter((tour) => tour.category === filter),
    [filter],
  );

  const toggleFavorite = (id: string) => {
    setFavorites((previous) => {
      const next = new Set(previous);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <section id="tours" className="scroll-mt-24 bg-surface-muted py-20 lg:py-28">
      <div className="container-page">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <span className="eyebrow">Расписание</span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Ближайшие туры
            </h2>
            <p className="mt-3 text-pretty text-ink-muted">
              Группы небольшие, места разбирают заранее. Выберите направление —
              менеджер подтвердит даты и посчитает стоимость под ваш состав.
            </p>
          </div>

          {/* Фильтр по типу тура */}
          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label="Фильтр туров"
          >
            {filters.map((item) => {
              const active = item.value === filter;
              return (
                <button
                  key={item.value}
                  type="button"
                  onClick={() => setFilter(item.value)}
                  aria-pressed={active}
                  className={cn(
                    'rounded-full px-4 py-2.5 text-sm font-semibold transition-colors',
                    active
                      ? 'bg-ink text-white'
                      : 'bg-white text-ink-muted ring-1 ring-line hover:text-ink',
                  )}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        {visible.length > 0 ? (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
            {visible.map((tour, index) => (
              <TourCard
                key={tour.id}
                tour={tour}
                index={index}
                favorite={favorites.has(tour.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        ) : (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-14 rounded-3xl bg-white p-10 text-center text-ink-muted ring-1 ring-line"
          >
            В этой категории пока нет туров. Посмотрите остальные или оставьте
            заявку — соберём маршрут под вас.
          </motion.p>
        )}

        <p className="mt-10 text-center text-sm text-ink-muted">
          Не нашли подходящие даты?{' '}
          <a
            href="/#lead"
            className="font-semibold text-ink underline decoration-brand decoration-2 underline-offset-4 hover:text-brand"
          >
            Напишите нам
          </a>{' '}
          — подберём вылет под ваш график.
        </p>
      </div>
    </section>
  );
}
