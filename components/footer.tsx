'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUp,
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react';
import { nav, site } from '@/data/site';
import { destinations } from '@/data/tours';
import { cn } from '@/lib/format';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-surface-dark text-white">
      <div className="container-page py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Бренд */}
          <div>
            <p className="text-xl font-extrabold tracking-tight">
              {site.brand} <span className="text-brand">{site.brandSuffix}</span>
            </p>
            <p className="mt-4 max-w-xs text-pretty text-sm leading-relaxed text-white/60">
              Собираем небольшие группы и возим в Азию с 2023 года. Авторские
              маршруты, поездки на концерты и мероприятия мирового масштаба.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href={site.instagramHref}
                target="_blank"
                rel="noreferrer"
                className="grid size-11 place-items-center rounded-full bg-white/10 transition-colors hover:bg-brand"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
              </a>
              <a
                href={site.phoneHref}
                className="grid size-11 place-items-center rounded-full bg-white/10 transition-colors hover:bg-brand"
                aria-label="Позвонить"
              >
                <Phone className="size-5" aria-hidden />
              </a>
              <a
                href="/#lead"
                className="grid size-11 place-items-center rounded-full bg-white/10 transition-colors hover:bg-brand"
                aria-label="Оставить заявку"
              >
                <Send className="size-5" aria-hidden />
              </a>
            </div>
          </div>

          <FooterColumn title="Навигация">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-brand">
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a href="/#lead" className="transition-colors hover:text-brand">
                Оставить заявку
              </a>
            </li>
          </FooterColumn>

          <FooterColumn title="Направления">
            {destinations.map((destination) => (
              <li key={destination.id}>
                <a
                  href="/#excursions"
                  className="transition-colors hover:text-brand"
                >
                  {destination.name}
                </a>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Контакты">
            <li>
              <a
                href={site.phoneHref}
                className="flex items-start gap-2.5 transition-colors hover:text-brand"
              >
                <Phone className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden />
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex items-start gap-2.5 transition-colors hover:text-brand"
              >
                <Mail className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden />
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden />
              {site.city}
            </li>
            <li className="pt-1 text-white/40">{site.workingHours}</li>
          </FooterColumn>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/40">
            © {year} {site.brand} {site.brandSuffix}. Все права защищены.
          </p>
          <ScrollTop />
        </div>
      </div>
    </footer>
  );
}

/* -------------------------------------------------------------------------- */

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/40">
        {title}
      </p>
      <ul className="mt-5 space-y-3 text-sm text-white/70">{children}</ul>
    </div>
  );
}

function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      animate={{ opacity: visible ? 1 : 0.4 }}
      className={cn(
        'inline-flex items-center gap-2 self-start rounded-full bg-white/10 px-5 py-3 text-sm font-semibold',
        'transition-colors hover:bg-brand sm:self-auto',
      )}
    >
      Наверх
      <ArrowUp className="size-4" aria-hidden />
    </motion.button>
  );
}
