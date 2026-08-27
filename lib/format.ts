import { usdRate } from '@/data/site';
import type { CurrencyCode, Money } from '@/types/tour';

/**
 * Форматирует цену «от». Если сумма не задана — возвращает «Цена по запросу».
 * Именно так сейчас отрисуются все туры: в программах стоимость не указана.
 */
export function formatPrice(price: Money, display: CurrencyCode = 'KZT'): string {
  if (price.amount === null) return 'Цена по запросу';

  const amount =
    display === price.currency
      ? price.amount
      : display === 'USD'
        ? Math.round(price.amount / usdRate)
        : Math.round(price.amount * usdRate);

  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: display,
    maximumFractionDigits: 0,
  }).format(amount);
}

/** «10 дней / 9 ночей» с правильными окончаниями. */
export function formatDuration(days: number, nights: number): string {
  return `${days} ${plural(days, 'день', 'дня', 'дней')} / ${nights} ${plural(
    nights,
    'ночь',
    'ночи',
    'ночей',
  )}`;
}

/** Русские окончания: 1 день, 2 дня, 5 дней. */
export function plural(
  count: number,
  one: string,
  few: string,
  many: string,
): string {
  const mod10 = count % 10;
  const mod100 = count % 100;
  if (mod10 === 1 && mod100 !== 11) return one;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return few;
  return many;
}

/** «28 мая — 6 июня 2026», либо готовая подпись, если дат нет. */
export function formatDateRange(
  start: string | null,
  end: string | null,
  fallback: string,
): string {
  if (!start || !end) return fallback;

  const from = new Date(start);
  const to = new Date(end);
  const sameYear = from.getFullYear() === to.getFullYear();

  const day = new Intl.DateTimeFormat('ru-RU', { day: 'numeric', month: 'long' });
  const dayYear = new Intl.DateTimeFormat('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return `${sameYear ? day.format(from) : dayYear.format(from)} — ${dayYear.format(to)}`;
}

/** Склеивает классы, отбрасывая пустые значения. */
export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}
