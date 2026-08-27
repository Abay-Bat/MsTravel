// ---------------------------------------------------------------------------
// Доменные типы для туров musafir travel
// ---------------------------------------------------------------------------

/** Валюты, между которыми переключается селектор в шапке. */
export type CurrencyCode = 'KZT' | 'USD';

/** Тип тура — используется для фильтров и бейджей на карточке. */
export type TourCategory =
  | 'concert' // тур на концерт / мероприятие
  | 'sightseeing' // экскурсионный
  | 'beach' // пляжный
  | 'combined'; // комбинированный (несколько стран)

/** Транспорт до места — иконка-бейдж в углу карточки. */
export type TransportKind = 'plane' | 'train' | 'bus';

/** Иконки для бейджей на карточке тура (Lucide). */
export type TourBadge =
  | 'plane'
  | 'ticket'
  | 'hotel'
  | 'visa'
  | 'guide'
  | 'insurance';

export interface Money {
  /** Сумма «от». `null` — цена по запросу, карточка покажет «Цена по запросу». */
  amount: number | null;
  currency: CurrencyCode;
}

export interface ItineraryDay {
  /** Порядковый номер дня, начиная с 1. */
  day: number;
  /** Город или локация этого дня. */
  city: string;
  /** Календарная дата в формате ISO (YYYY-MM-DD), если известна. */
  date?: string;
  /** 2–4 пункта программы дня. */
  activities: string[];
}

export interface ConcertInfo {
  /** Исполнитель или название мероприятия. */
  artist: string;
  /** Город концерта. */
  city: string;
  /** Дата концерта в формате ISO, если известна. */
  date?: string;
  /** Номер дня тура, на который выпадает концерт. */
  onDay?: number;
}

export interface Tour {
  id: string;
  /** URL-адрес карточки: /tours/[slug] */
  slug: string;
  /** Заголовок на карточке. */
  title: string;
  /** Короткая строка под заголовком. */
  subtitle: string;
  /** Подпись поверх фотографии: город или страна. */
  overlayLabel: string;

  category: TourCategory;
  country: string[];
  cities: string[];
  /** Город вылета. */
  departureCity: string;

  durationDays: number;
  durationNights: number;

  /** ISO-даты. `null`, если даты ещё не зафиксированы. */
  startDate: string | null;
  endDate: string | null;
  /** Готовая подпись для карточки: «28 мая — 6 июня 2026» или «Даты уточняются». */
  dateLabel: string;

  price: Money;

  transport: TransportKind;
  badges: TourBadge[];

  /** 3–5 главных достопримечательностей для карточки и страницы тура. */
  highlights: string[];
  included: string[];
  notIncluded: string[];
  itinerary: ItineraryDay[];

  concert?: ConcertInfo;

  image: string;
  gallery?: string[];

  /** Показывать в блоке «Ближайшие туры» на главной. */
  featured: boolean;
  /** Имя исходного файла-программы — чтобы всегда знать источник данных. */
  sourceFile: string;
}

/** Направление в блоке «Экскурсии» (карточка страны). */
export interface Destination {
  id: string;
  /** Название страны на русском. */
  name: string;
  /** Код страны, ISO 3166-1 alpha-2. */
  code: string;
  image: string;
  /** Сколько туров доступно по направлению. */
  tourCount: number;
}

/** Элемент FAQ-аккордеона. */
export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

/** Шаг блока «Как это работает». */
export interface HowItWorksStep {
  step: number;
  title: string;
  description: string;
  /** Имя иконки Lucide. */
  icon: string;
}
