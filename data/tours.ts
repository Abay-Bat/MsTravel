import type { Destination, Tour } from '@/types/tour';

// ---------------------------------------------------------------------------
// Данные собраны из программ туров, приложенных к брифу.
//
// ВАЖНО: ни в одной из программ не указана стоимость. У всех туров
// price.amount = null, и карточка отрисует «Цена по запросу».
// Как только появятся цифры — проставьте amount (в тенге) и всё заработает.
// ---------------------------------------------------------------------------

export const tours: Tour[] = [
  // -------------------------------------------------------------- china_tour
  {
    id: 'tour-china-classic',
    slug: 'china-classic',
    title: 'Китай: Пекин — Шанхай — Чжанцзяцзе',
    subtitle: '5 городов, Великая стена и горы Аватара',
    overlayLabel: 'Китай',
    category: 'sightseeing',
    country: ['Китай'],
    cities: ['Пекин', 'Цзюйюнгуань', 'Шанхай', 'Чунцин', 'Чжанцзяцзе'],
    departureCity: 'Алматы',
    durationDays: 10,
    durationNights: 9,
    startDate: '2026-05-28',
    endDate: '2026-06-06',
    dateLabel: '28 мая — 6 июня 2026',
    price: { amount: null, currency: 'KZT' },
    transport: 'plane',
    badges: ['plane', 'hotel', 'guide', 'visa', 'insurance'],
    highlights: [
      'Великая Китайская стена',
      'Запретный город и Храм Неба',
      'Башня Шанхай и набережная Вайтань',
      'Стеклянный мост Чжанцзяцзе',
      'Скала Аллилуйя из «Аватара»',
    ],
    included: [
      'Авиабилеты туда и обратно',
      'Проживание в отелях (9 ночей)',
      'Завтраки каждый день',
      'Гид-сопровождение весь тур',
      'Туристическая страховка',
      'Ручная кладь 8 кг',
      'Багаж 23 кг',
      'Оформление виз',
    ],
    notIncluded: [
      'Трансфер аэропорт — город',
      'Обеды и ужины',
      'Входные билеты в музеи',
      'Личные медикаменты',
      'Мобильная связь / SIM',
      'Личные расходы и шоппинг',
    ],
    itinerary: [
      {
        day: 1,
        city: 'Алматы → Пекин',
        date: '2026-05-28',
        activities: [
          'Вылет из Алматы, прилёт в Пекин (PEK)',
          'Заселение в отель',
          'Запретный город снаружи, площадь Тяньаньмэнь',
        ],
      },
      {
        day: 2,
        city: 'Пекин',
        date: '2026-05-29',
        activities: [
          'Запретный город внутри',
          'Летний дворец и озеро Куньмин',
          'Храм Неба',
          'Ужин с пекинской уткой',
        ],
      },
      {
        day: 3,
        city: 'Цзюйюнгуань',
        date: '2026-05-30',
        activities: [
          'Выезд к Великой Китайской стене (~50 км от Пекина)',
          'Прогулка по стене, культурный центр у ворот',
          'Крепость и сторожевые башни',
        ],
      },
      {
        day: 4,
        city: 'Пекин → Шанхай',
        date: '2026-05-31',
        activities: [
          'Улица Нанкин Роуд',
          'Перелёт Пекин — Шанхай',
          'Вечерняя набережная Вайтань',
        ],
      },
      {
        day: 5,
        city: 'Шанхай',
        date: '2026-06-01',
        activities: [
          'Башня Шанхай, смотровая на 118 этаже',
          'Французская концессия',
          'Сад радости Юйюань и базар',
          'Круиз по реке Хуанпу',
        ],
      },
      {
        day: 6,
        city: 'Шанхай → Чунцин',
        date: '2026-06-02',
        activities: [
          'Перелёт Шанхай — Чунцин',
          'Хунъяду — скала с домами',
          'Ночной рынок Цыци',
        ],
      },
      {
        day: 7,
        city: 'Чунцин',
        date: '2026-06-03',
        activities: [
          'Монастырь Цзюнь и панорама трёх рек',
          'Национальный музей Китая',
          'Канатная дорога над Янцзы',
        ],
      },
      {
        day: 8,
        city: 'Чунцин → Чжанцзяцзе',
        date: '2026-06-04',
        activities: [
          'Перелёт Чунцин — Чжанцзяцзе',
          'Национальный парк Чжанцзяцзе',
          'Смотровая площадка Тяньмэнь',
        ],
      },
      {
        day: 9,
        city: 'Чжанцзяцзе',
        date: '2026-06-05',
        activities: [
          'Стеклянный мост',
          'Скала Аллилуйя (Аватар), 1080 м',
          'Золотой хлыст и долина Чжанцзяцзе',
        ],
      },
      {
        day: 10,
        city: 'Чжанцзяцзе → Алматы',
        date: '2026-06-06',
        activities: [
          'Завтрак и выселение из отеля',
          'Перелёт с пересадкой',
          'Прилёт в Алматы около 20:00',
        ],
      },
    ],
    image: '/images/tours/china-classic.jpg',
    featured: true,
    sourceFile: 'china_tour.pdf',
  },

  // ------------------------------------------- THE_WEEKND_MALAYSIA_TOUR (KL)
  {
    id: 'tour-weeknd-asia-kl',
    slug: 'weeknd-asia-kl',
    title: 'Азия тур: The Weeknd в Куала-Лумпуре',
    subtitle: 'Малайзия, Бали и Сингапур — 25 локаций за одну поездку',
    overlayLabel: 'Куала-Лумпур',
    category: 'concert',
    country: ['Малайзия', 'Индонезия', 'Сингапур'],
    cities: ['Куала-Лумпур', 'Бали', 'Нуса Пенида', 'Сингапур'],
    departureCity: 'Алматы',
    durationDays: 11,
    durationNights: 10,
    startDate: '2026-11-02',
    endDate: '2026-11-13',
    dateLabel: '2 — 13 ноября',
    price: { amount: null, currency: 'KZT' },
    transport: 'plane',
    badges: ['plane', 'ticket', 'hotel', 'guide'],
    highlights: [
      'Концерт The Weeknd 4 ноября',
      'Башни Петронас и пещеры Бату',
      'Вулкан Агунг и рисовые террасы',
      'Пляжи Нуса Пенида',
      'Gardens by the Bay в Сингапуре',
    ],
    included: [
      'Все авиаперелёты',
      'Билет на концерт',
      'Ручная кладь 7—10 кг',
      'Проживание в отелях 4—5★ весь срок',
      'Завтраки на Бали',
      'Трансфер аэропорт — отель — аэропорт (кроме Сингапура)',
      'Сопровождение организаторов',
    ],
    notIncluded: [
      'Входные билеты в достопримечательности',
      'Обеды и ужины',
      'Личные расходы',
      'Багаж',
      'Виза',
    ],
    itinerary: [
      {
        day: 1,
        city: 'Куала-Лумпур',
        activities: [
          'Прилёт, трансфер в отель, завтрак',
          'Обзорная экскурсия по городу',
          'Башня Петронас и парк KLCC',
        ],
      },
      {
        day: 2,
        city: 'Куала-Лумпур',
        activities: ['Пещеры Бату', 'Храм Тянь Хоу', 'Улица Алор'],
      },
      {
        day: 3,
        city: 'Куала-Лумпур',
        activities: [
          'Концерт The Weeknd',
          'Свободное время в городе',
        ],
      },
      {
        day: 4,
        city: 'Бали',
        activities: [
          'Перелёт на Бали, размещение в отеле',
          'Обзорная экскурсия',
        ],
      },
      {
        day: 5,
        city: 'Бали',
        activities: [
          'Рисовые террасы',
          'Sari Timbul Glass Factory',
          'Дегустация кофе Лювак',
        ],
      },
      {
        day: 6,
        city: 'Бали',
        activities: [
          'Водопад Kanto Lampo',
          'Рафтинг',
          'Taman Beji Griya',
        ],
      },
      {
        day: 7,
        city: 'Бали',
        activities: [
          'Активный вулкан',
          'Горячий бассейн с видом на вулкан',
          'Отдых на территории отеля',
        ],
      },
      {
        day: 8,
        city: 'Бедугул',
        activities: [
          'Район Bedoegoel',
          'Знаменитые ворота на Бали',
          'Храм на озере Братан',
        ],
      },
      {
        day: 9,
        city: 'Нуса Дуа',
        activities: [
          'Melasti Beach',
          'Пляжный клуб в Улувату',
          'Закат на скалах',
        ],
      },
      {
        day: 10,
        city: 'Нуса Пенида',
        activities: [
          'Морская прогулка до острова',
          'Broken Beach и Angel’s Billabong',
          'Kelingking Beach',
        ],
      },
      {
        day: 11,
        city: 'Сингапур → Алматы',
        activities: [
          'Marina Bay Sands и Gardens by the Bay',
          'Сингапурский зоопарк и ночное сафари',
          'Вылет домой, прилёт в Алматы в 17:45',
        ],
      },
    ],
    concert: {
      artist: 'The Weeknd',
      city: 'Куала-Лумпур',
      date: '2026-11-04',
      onDay: 3,
    },
    image: '/images/tours/weeknd-asia-kl.jpg',
    featured: true,
    sourceFile: 'THE_WEEKND_MALAYSIA_TOUR.pdf',
  },

  // -------------------------------------------------- THE_WEEKND_THAILAND_1
  {
    id: 'tour-weeknd-thailand',
    slug: 'weeknd-thailand',
    title: 'Таиланд: The Weeknd в Бангкоке',
    subtitle: 'Три дня в Бангкоке и четыре — на Пхукете',
    overlayLabel: 'Пхукет',
    category: 'concert',
    country: ['Таиланд'],
    cities: ['Бангкок', 'Пхукет'],
    departureCity: 'Алматы',
    durationDays: 7,
    durationNights: 6,
    startDate: '2026-10-08',
    endDate: '2026-10-14',
    dateLabel: '8 — 14 октября',
    price: { amount: null, currency: 'KZT' },
    transport: 'plane',
    badges: ['plane', 'ticket', 'hotel', 'visa', 'insurance'],
    highlights: [
      'Концерт The Weeknd в Бангкоке',
      'Плавучий рынок Khlong Lat Mayom',
      'Храм Лежащего Будды и Храм Рассвета',
      'Острова Пхи-Пхи',
      'Пляж Ката и водопад Банг Пэ',
    ],
    included: [
      'Прямой перелёт из Казахстана',
      'Проживание',
      'Билет на концерт',
      'Медицинская страховка',
      'Сопровождение',
      'Помощь в визе',
    ],
    notIncluded: ['Карманные расходы', 'Питание', 'Транспорт'],
    itinerary: [
      {
        day: 1,
        city: 'Бангкок',
        activities: ['Сиам Парагон', 'Рынок Чатучак', 'Chinatown'],
      },
      {
        day: 2,
        city: 'Бангкок',
        activities: [
          'Парк Люмпини',
          'Храм Лежащего Будды',
          'Храм Рассвета',
        ],
      },
      {
        day: 3,
        city: 'Бангкок',
        activities: [
          'Плавучий рынок Khlong Lat Mayom',
          'Сукхумвит и Банглампху',
          'Концерт The Weeknd',
        ],
      },
      {
        day: 4,
        city: 'Пхукет',
        activities: ['Храм Ват Чалонг', 'Старый город', 'Улица Бангла Роуд'],
      },
      {
        day: 5,
        city: 'Пхукет',
        activities: [
          'Храм Суван Кхири Кет',
          'Гора обезьян',
          'Пхукет-таун',
        ],
      },
      {
        day: 6,
        city: 'Пхукет',
        activities: [
          'Острова Пхи-Пхи',
          'Ботанический сад',
          'Торговый центр Central',
        ],
      },
      {
        day: 7,
        city: 'Пхукет',
        activities: ['Аквариум Пхукета', 'Водопад Банг Пэ', 'Пляж Ката'],
      },
    ],
    concert: { artist: 'The Weeknd', city: 'Бангкок', onDay: 3 },
    image: '/images/tours/weeknd-thailand.jpg',
    featured: true,
    sourceFile: 'THE_WEEKND_THAILAND_1.pdf',
  },

  // --------------------------------------------------------------- BTSklthai
  {
    id: 'tour-bts-malaysia-thai',
    slug: 'bts-malaysia-thailand',
    title: 'Малайзия и Таиланд: концерт BTS',
    subtitle: 'Куала-Лумпур, Бангкок и Пхукет за девять дней',
    overlayLabel: 'Бангкок',
    category: 'concert',
    country: ['Малайзия', 'Таиланд'],
    cities: ['Куала-Лумпур', 'Бангкок', 'Пхукет'],
    departureCity: 'Казахстан',
    durationDays: 9,
    durationNights: 8,
    startDate: null,
    endDate: null,
    dateLabel: 'Даты уточняются',
    price: { amount: null, currency: 'KZT' },
    transport: 'plane',
    badges: ['plane', 'ticket', 'hotel', 'visa', 'insurance'],
    highlights: [
      'Концерт BTS в Бангкоке',
      'Башни Петронас и пещеры Бату',
      'Рынок Чатучак',
      'Пхукет Фантаси и Большой Будда',
      'Коралловый остров и Банана Бич',
    ],
    included: [
      'Перелёты',
      'Проживание',
      'Билет на концерт',
      'Медицинская страховка',
      'Сопровождение',
      'Помощь в визе',
    ],
    notIncluded: ['Карманные расходы', 'Питание', 'Транспорт'],
    itinerary: [
      {
        day: 1,
        city: 'Куала-Лумпур',
        activities: ['Парк KLCC', 'Башни Петронас', 'Чайна-таун'],
      },
      {
        day: 2,
        city: 'Куала-Лумпур',
        activities: ['Пещеры Бату', 'Национальный музей', 'Центральный парк'],
      },
      {
        day: 3,
        city: 'Бангкок',
        activities: ['Ват Пхо', 'Парк Люмпини', 'Рынок Чатучак'],
      },
      {
        day: 4,
        city: 'Бангкок',
        activities: ['Музей Бангкока', 'Сиам Парагон', 'Сиам Парк Сити'],
      },
      {
        day: 5,
        city: 'Бангкок',
        activities: ['Золотая гора', 'Pata Zoo', 'Концерт BTS'],
      },
      {
        day: 6,
        city: 'Пхукет',
        activities: ['Monkey Hill', 'Рынок Нака', 'Пляж Ката'],
      },
      {
        day: 7,
        city: 'Пхукет',
        activities: ['Пляж Ката Ной', 'Пхукет Фантаси', 'Большой Будда'],
      },
      {
        day: 8,
        city: 'Пхукет',
        activities: ['Ват Чалонг', 'Старый город', 'Коралловый остров'],
      },
      {
        day: 9,
        city: 'Пхукет',
        activities: ['Водопады', 'Улица Бангла Роуд', 'Банана Бич'],
      },
    ],
    concert: { artist: 'BTS', city: 'Бангкок', onDay: 5 },
    image: '/images/tours/bts-malaysia-thai.jpg',
    featured: true,
    sourceFile: 'BTSklthai.pdf',
  },

  // ---------------------------------------------------------------- BTSCHINA
  {
    id: 'tour-bts-china-hongkong',
    slug: 'bts-china-hongkong',
    title: 'Китай: концерт BTS в Гонконге',
    subtitle: 'Шанхай, Гонконг и Пекин — три города за девять дней',
    overlayLabel: 'Гонконг',
    category: 'concert',
    country: ['Китай'],
    cities: ['Шанхай', 'Гонконг', 'Пекин'],
    departureCity: 'Алматы',
    durationDays: 9,
    durationNights: 8,
    startDate: null,
    endDate: null,
    dateLabel: 'Даты уточняются',
    price: { amount: null, currency: 'KZT' },
    transport: 'plane',
    badges: ['plane', 'ticket', 'hotel', 'visa', 'insurance'],
    highlights: [
      'Концерт BTS в Гонконге',
      'Набережная Вайтань и Шанхайская башня',
      'Пик Виктория и Аллея звёзд',
      'Запретный город и Храм Неба',
      'Стадион «Птичье гнездо»',
    ],
    included: [
      'Перелёты',
      'Проживание',
      'Билет на концерт',
      'Медицинская страховка',
      'Сопровождение',
      'Визовая поддержка',
    ],
    notIncluded: ['Карманные расходы', 'Питание', 'Транспорт'],
    itinerary: [
      {
        day: 1,
        city: 'Шанхай',
        activities: ['Набережная Вайтань', 'Сад Юйюань', 'Старый город Наньши'],
      },
      {
        day: 2,
        city: 'Шанхай',
        activities: [
          'Народный парк',
          'Храм Нефритового Будды',
          'Шанхайская башня',
        ],
      },
      {
        day: 3,
        city: 'Шанхай',
        activities: ['Океанариум', 'Шанхайский музей', 'Река Хуанпу'],
      },
      {
        day: 4,
        city: 'Гонконг',
        activities: ['Пик Виктория', 'Необычные дома', 'Район Mong Kok'],
      },
      {
        day: 5,
        city: 'Гонконг',
        activities: ['Храм Вонг Тай Шин', 'Пляжи Гонконга', 'Концерт BTS'],
      },
      {
        day: 6,
        city: 'Гонконг',
        activities: ['Храм Ман Мо', 'Аллея звёзд', 'Цим Ша Цуй'],
      },
      {
        day: 7,
        city: 'Пекин',
        activities: ['Запретный город', 'Храм Неба', 'Парк Бэйхай'],
      },
      {
        day: 8,
        city: 'Пекин',
        activities: [
          'Национальный музей',
          'Стадион «Птичье гнездо»',
          'Храм Конфуция',
        ],
      },
      {
        day: 9,
        city: 'Пекин',
        activities: ['Улица Ванфуцзин', 'Пекинский зоопарк', 'Дом слонов'],
      },
    ],
    concert: { artist: 'BTS', city: 'Гонконг', onDay: 5 },
    image: '/images/tours/bts-china-hongkong.jpg',
    featured: true,
    sourceFile: 'BTSCHINA.pdf',
  },

  // ----------------------------------- f052...pdf (BTS, концерт в Сингапуре)
  {
    id: 'tour-bts-asia-singapore',
    slug: 'bts-asia-singapore',
    title: 'Малайзия — Бали — Сингапур: концерт BTS',
    subtitle: 'Тур для ARMY: три страны и концерт в Сингапуре',
    overlayLabel: 'Сингапур',
    category: 'concert',
    country: ['Малайзия', 'Индонезия', 'Сингапур'],
    cities: ['Куала-Лумпур', 'Бали', 'Нуса Пенида', 'Сингапур'],
    departureCity: 'Алматы',
    durationDays: 11,
    durationNights: 10,
    startDate: null,
    endDate: null,
    dateLabel: 'Даты уточняются',
    price: { amount: null, currency: 'KZT' },
    transport: 'plane',
    badges: ['plane', 'ticket', 'hotel', 'guide'],
    highlights: [
      'Концерт BTS в Сингапуре',
      '25 локаций в трёх странах',
      'Вулкан Агунг и горячие источники',
      'Kelingking Beach на Нуса Пенида',
      'Отели 4—5★ на весь тур',
    ],
    included: [
      'Все авиаперелёты',
      'Билет на концерт',
      'Ручная кладь 7—10 кг',
      'Проживание в отелях 4—5★ весь срок',
      'Завтраки на Бали',
      'Трансфер аэропорт — отель — аэропорт (кроме Сингапура)',
      'Сопровождение организаторов',
    ],
    notIncluded: [
      'Входные билеты в достопримечательности',
      'Обеды и ужины',
      'Личные расходы',
      'Багаж',
      'Виза',
    ],
    itinerary: [
      {
        day: 1,
        city: 'Куала-Лумпур',
        activities: [
          'Прилёт и трансфер в отель',
          'Обзорная экскурсия',
          'Башни Петронас и парк KLCC',
        ],
      },
      {
        day: 2,
        city: 'Куала-Лумпур',
        activities: ['Пещеры Бату', 'Храм Тянь Хоу', 'Улица Алор'],
      },
      {
        day: 3,
        city: 'Бали',
        activities: ['Перелёт на Бали', 'Размещение в отеле', 'Обзорная экскурсия'],
      },
      {
        day: 4,
        city: 'Бали',
        activities: [
          'Рисовые террасы',
          'Sari Timbul Glass Factory',
          'Дегустация кофе Лювак',
        ],
      },
      {
        day: 5,
        city: 'Бали',
        activities: ['Водопад Kanto Lampo', 'Рафтинг', 'Taman Beji Griya'],
      },
      {
        day: 6,
        city: 'Бали',
        activities: [
          'Активный вулкан',
          'Горячий бассейн с видом на вулкан',
          'Отдых в отеле',
        ],
      },
      {
        day: 7,
        city: 'Бедугул',
        activities: [
          'Район Bedoegoel',
          'Знаменитые ворота',
          'Храм на озере Братан',
        ],
      },
      {
        day: 8,
        city: 'Нуса Дуа',
        activities: ['Melasti Beach', 'Пляжный клуб в Улувату', 'Закат на скалах'],
      },
      {
        day: 9,
        city: 'Нуса Пенида',
        activities: [
          'Морская прогулка до острова',
          'Broken Beach и Angel’s Billabong',
          'Kelingking Beach',
        ],
      },
      {
        day: 10,
        city: 'Сингапур',
        activities: [
          'Обзорная экскурсия',
          'Marina Bay Sands и Gardens by the Bay',
          'Концерт BTS',
        ],
      },
      {
        day: 11,
        city: 'Сингапур → Алматы',
        activities: [
          'Свободный день и шоппинг',
          'Вылет в Алматы',
          'Прилёт в 17:45',
        ],
      },
    ],
    concert: { artist: 'BTS', city: 'Сингапур', onDay: 10 },
    image: '/images/tours/bts-asia-singapore.jpg',
    featured: false,
    sourceFile: 'f052defbeecd5076b8244f23573c96b140a3ea5e.pdf',
  },

  // --------------------------------------------------------------- asia_tour
  {
    id: 'tour-asia-bali-my-sg',
    slug: 'asia-bali-malaysia-singapore',
    title: 'Бали — Малайзия — Сингапур',
    subtitle: '25 локаций, 5 активностей и отели 4—5★',
    overlayLabel: 'Бали',
    category: 'combined',
    country: ['Индонезия', 'Малайзия', 'Сингапур'],
    cities: ['Куала-Лумпур', 'Бали', 'Нуса Пенида', 'Сингапур'],
    departureCity: 'Алматы',
    durationDays: 11,
    durationNights: 10,
    startDate: null,
    endDate: null,
    dateLabel: 'Даты уточняются',
    price: { amount: null, currency: 'KZT' },
    transport: 'plane',
    badges: ['plane', 'hotel', 'guide'],
    highlights: [
      'Рисовые террасы и водопады Бали',
      'Серфинг и рафтинг',
      'Вулкан Агунг',
      'Пляжи Нуса Пенида',
      'Ночное сафари в Сингапуре',
    ],
    included: [
      'Все авиаперелёты',
      'Ручная кладь 7—10 кг',
      'Проживание в отелях 4—5★ весь срок',
      'Завтраки на Бали',
      'Трансфер аэропорт — отель — аэропорт (кроме Сингапура)',
      'Сопровождение организаторов',
    ],
    notIncluded: [
      'Входные билеты в достопримечательности',
      'Обеды и ужины',
      'Личные расходы',
      'Багаж',
      'Виза',
    ],
    itinerary: [
      {
        day: 1,
        city: 'Куала-Лумпур',
        activities: [
          'Прилёт, трансфер в отель, завтрак',
          'Обзорная экскурсия',
          'Башни Петронас и парк KLCC',
        ],
      },
      {
        day: 2,
        city: 'Куала-Лумпур',
        activities: ['Пещеры Бату', 'Храм Тянь Хоу', 'Улица Алор'],
      },
      {
        day: 3,
        city: 'Бали',
        activities: ['Перелёт на Бали', 'Трансфер и размещение', 'Обзорная экскурсия'],
      },
      {
        day: 4,
        city: 'Бали',
        activities: [
          'Рисовые террасы',
          'Sari Timbul Glass Factory',
          'Дегустация кофе Лювак',
        ],
      },
      {
        day: 5,
        city: 'Бали',
        activities: ['Водопад Kanto Lampo', 'Рафтинг', 'Taman Beji Griya'],
      },
      {
        day: 6,
        city: 'Бали',
        activities: [
          'Активный вулкан',
          'Горячий бассейн с видом на вулкан',
          'Отдых в отеле',
        ],
      },
      {
        day: 7,
        city: 'Бедугул',
        activities: [
          'Район Bedoegoel',
          'Знаменитые ворота',
          'Храм на озере Братан',
        ],
      },
      {
        day: 8,
        city: 'Нуса Дуа',
        activities: ['Melasti Beach', 'Пляжный клуб в Улувату', 'Закат на скалах'],
      },
      {
        day: 9,
        city: 'Нуса Пенида',
        activities: [
          'Морская прогулка до острова',
          'Broken Beach и Angel’s Billabong',
          'Kelingking Beach',
        ],
      },
      {
        day: 10,
        city: 'Сингапур',
        activities: [
          'Обзорная экскурсия',
          'Marina Bay Sands и Gardens by the Bay',
          'Зоопарк и ночное сафари',
        ],
      },
      {
        day: 11,
        city: 'Сингапур → Алматы',
        activities: [
          'Пляжный отдых и шоппинг',
          'Вылет в Алматы',
          'Прилёт в 17:45',
        ],
      },
    ],
    image: '/images/tours/asia-bali-my-sg.jpg',
    featured: false,
    sourceFile: 'asia_tour.pdf',
  },
];

/** Направления для блока «Экскурсии» — считаются из массива туров. */
export const destinations: Destination[] = [
  { id: 'th', name: 'Таиланд', code: 'TH', image: '/images/tours/weeknd-thailand.jpg', tourCount: 2 },
  { id: 'cn', name: 'Китай', code: 'CN', image: '/images/tours/china-classic.jpg', tourCount: 2 },
  { id: 'my', name: 'Малайзия', code: 'MY', image: '/images/tours/weeknd-asia-kl.jpg', tourCount: 4 },
  { id: 'id', name: 'Индонезия', code: 'ID', image: '/images/tours/asia-bali-my-sg.jpg', tourCount: 3 },
  { id: 'sg', name: 'Сингапур', code: 'SG', image: '/images/tours/bts-asia-singapore.jpg', tourCount: 3 },
  { id: 'hk', name: 'Гонконг', code: 'HK', image: '/images/tours/bts-china-hongkong.jpg', tourCount: 1 },
];

/** Уникальные страны — для выпадающего списка «Страна» в поиске. */
export const countries: string[] = Array.from(
  new Set(tours.flatMap((tour) => tour.country)),
).sort((a, b) => a.localeCompare(b, 'ru'));

/** Уникальные города — для выпадающего списка «Город». */
export const cities: string[] = Array.from(
  new Set(tours.flatMap((tour) => tour.cities)),
).sort((a, b) => a.localeCompare(b, 'ru'));

export const featuredTours = tours.filter((tour) => tour.featured);

export function getTourBySlug(slug: string): Tour | undefined {
  return tours.find((tour) => tour.slug === slug);
}
