import type { Metadata, Viewport } from 'next';
import { Manrope } from 'next/font/google';
import { CurrencyProvider } from '@/components/currency-provider';
import { site } from '@/data/site';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mstravel.kz'),
  title: {
    default: `${site.brand} ${site.brandSuffix} — авторские туры из Алматы`,
    template: `%s · ${site.brand} ${site.brandSuffix}`,
  },
  description:
    'Групповые авторские туры и поездки на концерты из Алматы: Китай, Таиланд, Малайзия, Бали и Сингапур. Перелёты, отели, сопровождение и помощь с визой.',
  keywords: [
    'туры из Алматы',
    'групповые туры',
    'туры на концерты',
    'Китай тур',
    'Таиланд тур',
    'Бали Сингапур Малайзия',
  ],
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    siteName: `${site.brand} ${site.brandSuffix}`,
    title: 'Путешествия с душой и заботой о каждом дне',
    description:
      'Авторские групповые туры из Алматы. Продуманные маршруты, фиксированные даты и менеджер на связи.',
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#FF6B35',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={manrope.variable}>
      <body className="min-h-screen bg-surface font-sans text-ink">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          Перейти к содержимому
        </a>
        <CurrencyProvider>{children}</CurrencyProvider>
      </body>
    </html>
  );
}
