'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Phone, X } from 'lucide-react';
import { currencies, nav, site } from '@/data/site';
import { cn } from '@/lib/format';
import { useCurrency } from '@/components/currency-provider';

export function Header() {
  const { currency, setCurrency } = useCurrency();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        'sticky top-0 z-[100] bg-white/85 backdrop-blur-md transition-shadow duration-300',
        scrolled
          ? 'shadow-[0_1px_0_0_rgb(229_231_235),0_8px_24px_-16px_rgb(17_24_39/0.25)]'
          : '',
      )}
    >
      <div className="container-page flex h-[76px] items-center gap-6">
        {/* Logo */}
        <a
          href="/"
          className="flex shrink-0 items-baseline gap-1.5 text-lg font-extrabold tracking-tight"
          aria-label={`${site.brand} ${site.brandSuffix} — на главную`}
        >
          <span className="text-ink">{site.brand}</span>
          <span className="text-brand">{site.brandSuffix}</span>
        </a>

        {/* Desktop navigation */}
        <nav className="hidden flex-1 items-center justify-center gap-1 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-ink-muted transition-colors hover:bg-surface-muted hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="ml-auto flex items-center gap-3 lg:ml-0">
          <CurrencySwitch
            value={currency}
            onChange={setCurrency}
          />

          <a
            href={site.phoneHref}
            className="hidden items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-brand xl:flex"
          >
            <Phone className="size-4 text-brand" aria-hidden />
            {site.phone}
          </a>

          <a
            href="/#lead"
            className="btn-primary btn-md hidden sm:inline-flex"
          >
            Оставить заявку
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="btn-ghost size-11 rounded-full lg:hidden"
            aria-label="Открыть меню"
            aria-expanded={menuOpen}
          >
            <Menu className="size-5" aria-hidden />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <MobileMenu onClose={() => setMenuOpen(false)} />
        )}
      </AnimatePresence>
    </header>
  );
}

/* -------------------------------------------------------------------------- */

function CurrencySwitch({
  value,
  onChange,
}: {
  value: string;
  onChange: (code: 'KZT' | 'USD') => void;
}) {
  return (
    <div
      className="flex items-center rounded-full bg-surface-muted p-1"
      role="group"
      aria-label="Валюта цен"
    >
      {currencies.map((item) => {
        const active = item.code === value;

        return (
          <button
            key={item.code}
            type="button"
            onClick={() => onChange(item.code)}
            aria-pressed={active}
            title={item.label}
            className={cn(
              'relative rounded-full px-3 py-1.5 text-xs font-bold transition-colors',
              active
                ? 'text-white'
                : 'text-ink-muted hover:text-ink',
            )}
          >
            {active && (
              <motion.span
                layoutId="currency-pill"
                className="absolute inset-0 rounded-full bg-brand"
                transition={{
                  type: 'spring',
                  stiffness: 400,
                  damping: 32,
                }}
              />
            )}

            <span className="relative">{item.code}</span>
          </button>
        );
      })}
    </div>
  );
}

/* -------------------------------------------------------------------------- */

function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] h-dvh w-screen overflow-y-auto bg-white lg:hidden"
    >
      {/* Menu header */}
      <div className="container-page flex h-[76px] items-center justify-between">
        <span className="text-lg font-extrabold tracking-tight">
          {site.brand}{' '}
          <span className="text-brand">{site.brandSuffix}</span>
        </span>

        <button
          type="button"
          onClick={onClose}
          className="btn-ghost size-11 rounded-full"
          aria-label="Закрыть меню"
        >
          <X className="size-5" aria-hidden />
        </button>
      </div>

      {/* Navigation */}
      <nav className="container-page flex flex-col gap-2 pt-8">
        {nav.map((item, index) => (
          <motion.a
            key={item.href}
            href={item.href}
            onClick={onClose}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.05 * index,
              duration: 0.25,
            }}
            className="rounded-2xl px-5 py-5 text-2xl font-bold text-ink transition-colors hover:bg-surface-muted active:bg-surface-muted"
          >
            {item.label}
          </motion.a>
        ))}
      </nav>

      {/* Bottom section */}
      <div className="container-page mt-10 flex flex-col gap-3 pb-8">
        <a
          href={site.phoneHref}
          className="btn-outline btn-lg w-full"
        >
          <Phone className="size-4 text-brand" aria-hidden />
          {site.phone}
        </a>

        <a
          href="/#lead"
          onClick={onClose}
          className="btn-primary btn-lg w-full"
        >
          Оставить заявку
        </a>

        <p className="px-1 pt-2 text-sm text-ink-muted">
          {site.workingHours}
        </p>
      </div>
    </motion.div>
  );
}