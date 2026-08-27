import type { CurrencyCode, FaqItem, HowItWorksStep } from '@/types/tour';

export const site = {
  brand: 'TRAVEL',
  brandSuffix: 'by MUSAFIR',
  tagline: 'Путешествия с душой и заботой о каждом дне',
  phone: '+7 708 106 5700',
  phoneHref: 'tel:+77081065700',
  email: 'hello@mstravel.kz',
  instagram: 'ms.travel.kz',
  instagramHref: 'https://instagram.com/ms.travel.kz',
  city: 'Алматы, Казахстан',
  workingHours: 'Ежедневно с 10:00 до 20:00',
} as const;

export const nav = [
  { label: 'Туры', href: '/#tours' },
  { label: 'Экскурсии', href: '/#excursions' },
  { label: 'Как это работает', href: '/#how-it-works' },
  { label: 'Вопросы', href: '/#faq' },
] as const;

export const currencies: { code: CurrencyCode; label: string; symbol: string }[] = [
  { code: 'KZT', label: 'Тенге', symbol: '₸' },
  { code: 'USD', label: 'Доллар', symbol: '$' },
];

/** Курс для переключателя валют. Замените на живой курс, когда подключите API. */
export const usdRate = 480;

export const heroFeatures = [
  {
    icon: 'Route',
    title: 'Продуманные маршруты',
    description: 'Каждый день расписан по часам — без пустых переездов и суеты.',
    tone: 'orange',
  },
  {
    icon: 'CalendarDays',
    title: 'Даты и цены',
    description: 'Фиксированные даты вылета и понятная стоимость без скрытых доплат.',
    tone: 'blue',
  },
  {
    icon: 'Headset',
    title: 'Менеджер на связи',
    description: 'Сопровождение с первого сообщения и до возвращения домой.',
    tone: 'green',
  },
] as const;

export const howItWorks: HowItWorksStep[] = [
  {
    step: 1,
    title: 'Выберите тур',
    description: 'Посмотрите программу, маршрут и что входит в стоимость.',
    icon: 'Map',
  },
  {
    step: 2,
    title: 'Выберите дату',
    description: 'Уточните ближайший вылет и количество мест в группе.',
    icon: 'CalendarCheck',
  },
  {
    step: 3,
    title: 'Оставьте заявку',
    description: 'Заполните короткую форму — телефона и имени достаточно.',
    icon: 'Send',
  },
  {
    step: 4,
    title: 'Менеджер напишет',
    description: 'Свяжемся в течение 15 минут и поможем с визой и билетами.',
    icon: 'MessageCircle',
  },
];

export const faq: FaqItem[] = [
  {
    id: 'faq-booking',
    question: 'Как забронировать тур?',
    answer:
      'Оставьте заявку на сайте или напишите нам в Instagram. Менеджер свяжется с вами, подтвердит даты и количество мест, после чего бронь закрепляется предоплатой.',
  },
  {
    id: 'faq-included',
    question: 'Что входит в стоимость?',
    answer:
      'В большинстве туров это перелёты, проживание, завтраки, сопровождение и страховка. В концертных турах в стоимость также входит билет на концерт. Точный список есть на странице каждого тура.',
  },
  {
    id: 'faq-solo',
    question: 'Можно ли поехать одному?',
    answer:
      'Да. Все туры групповые, поэтому вы летите с русскоязычной группой и сопровождающим. Если едете один, мы подберём соседа по номеру или предложим одноместное размещение за доплату.',
  },
  {
    id: 'faq-visa',
    question: 'Помогаете ли вы с визой?',
    answer:
      'Да. Мы подсказываем список документов, проверяем анкету и помогаем записаться в визовый центр. Консульский сбор оплачивается отдельно.',
  },
  {
    id: 'faq-payment',
    question: 'Как происходит оплата?',
    answer:
      'Бронь закрепляется предоплатой, остаток вносится до вылета. Оплатить можно переводом или картой — менеджер пришлёт реквизиты и чек.',
  },
  {
    id: 'faq-luggage',
    question: 'Какой багаж можно взять?',
    answer:
      'В азиатских турах — ручная кладь до 10 кг, размер S. В туре по Китаю включены багаж 23 кг и ручная кладь 8 кг. Дополнительный багаж докупается при бронировании.',
  },
];

export const popularTags = [
  'Таиланд',
  'Китай',
  'Малайзия',
  'Бали',
  'Сингапур',
  'Гонконг',
] as const;
