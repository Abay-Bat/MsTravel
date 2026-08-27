'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BedDouble,
  CalendarRange,
  Clock3,
  FileCheck,
  Heart,
  Music,
  Plane,
  ShieldCheck,
  Ticket,
  UserCheck,
  type LucideIcon,
} from 'lucide-react';
import { useCurrency } from '@/components/currency-provider';
import { cn, formatDateRange, formatDuration, formatPrice } from '@/lib/format';
import type { Tour, TourBadge } from '@/types/tour';

const badgeIcons: Record<TourBadge, { icon: LucideIcon; label: string }> = {
  plane: { icon: Plane, label: 'Перелёт включён' },
  ticket: { icon: Ticket, label: 'Билет на концерт включён' },
  hotel: { icon: BedDouble, label: 'Проживание включено' },
  visa: { icon: FileCheck, label: 'Помощь с визой' },
  guide: { icon: UserCheck, label: 'Сопровождающий' },
  insurance: { icon: ShieldCheck, label: 'Страховка включена' },
};

interface TourCardProps {
  tour: Tour;
  index?: number;
  favorite?: boolean;
  onToggleFavorite?: (id: string) => void;
}

export function TourCard({
  tour,
  index = 0,
  favorite = false,
  onToggleFavorite,
}: TourCardProps) {
  const { currency } = useCurrency();
  const price = formatPrice(tour.price, currency);
  const hasPrice = tour.price.amount !== null;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: Math.min(index, 3) * 0.07 }}
      className="card card-hover group flex flex-col overflow-hidden"
    >
      {/* Фотография */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/25"
        />

        {/* Бейджи включённого */}
        <ul className="absolute left-4 top-4 flex flex-wrap gap-1.5">
          {tour.badges.slice(0, 3).map((badge) => {
            const { icon: Icon, label } = badgeIcons[badge];
            return (
              <li key={badge}>
                <span
                  title={label}
                  className="grid size-8 place-items-center rounded-full bg-white/95 text-ink shadow-sm backdrop-blur"
                >
                  <Icon className="size-4" aria-hidden />
                  <span className="sr-only">{label}</span>
                </span>
              </li>
            );
          })}
        </ul>

        {/* Избранное */}
        <button
          type="button"
          onClick={() => onToggleFavorite?.(tour.id)}
          aria-pressed={favorite}
          aria-label={
            favorite ? 'Убрать из избранного' : 'Добавить в избранное'
          }
          className="absolute right-4 top-4 grid size-9 place-items-center rounded-full bg-white/95 text-ink shadow-sm backdrop-blur transition-transform hover:scale-110 active:scale-95"
        >
          <Heart
            className={cn(
              'size-4 transition-colors',
              favorite && 'fill-brand text-brand',
            )}
            aria-hidden
          />
        </button>

        {/* Подпись поверх фото */}
        <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3">
          <span className="text-xl font-extrabold tracking-tight text-white drop-shadow-sm">
            {tour.overlayLabel}
          </span>
          {tour.concert && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand px-3 py-1.5 text-[11px] font-bold text-white">
              <Music className="size-3" aria-hidden />
              {tour.concert.artist}
            </span>
          )}
        </div>
      </div>

      {/* Содержимое */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-pretty text-lg font-bold leading-snug">{tour.title}</h3>
        <p className="mt-1.5 line-clamp-2 text-sm text-ink-muted">{tour.subtitle}</p>

        <dl className="mt-4 space-y-2 text-sm">
          <div className="flex items-center gap-2 text-ink-muted">
            <Clock3 className="size-4 shrink-0 text-brand" aria-hidden />
            <dt className="sr-only">Длительность</dt>
            <dd>{formatDuration(tour.durationDays, tour.durationNights)}</dd>
          </div>
          <div className="flex items-center gap-2 text-ink-muted">
            <CalendarRange className="size-4 shrink-0 text-brand" aria-hidden />
            <dt className="sr-only">Даты</dt>
            <dd>
              {formatDateRange(tour.startDate, tour.endDate, tour.dateLabel)}
            </dd>
          </div>
        </dl>

        <div className="mt-5 flex items-end justify-between gap-3 border-t border-line pt-4">
          <p>
            {hasPrice && (
              <span className="block text-xs text-ink-muted">от</span>
            )}
            <span
              className={cn(
                'block font-extrabold tracking-tight',
                hasPrice ? 'text-xl' : 'text-base text-ink-muted',
              )}
            >
              {price}
            </span>
          </p>

          <a
            href={`/tours/${tour.slug}`}
            className="btn-primary btn-md shrink-0 gap-1.5 px-5"
            aria-label={`Подробнее о туре «${tour.title}»`}
          >
            Подробнее
            <ArrowRight className="size-4" aria-hidden />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
