'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { faq, site } from '@/data/site';
import { cn } from '@/lib/format';

export function Faq() {
  // Открыт максимум один пункт: список короткий, так его проще просматривать.
  const [openId, setOpenId] = useState<string | null>(faq[0]?.id ?? null);

  return (
    <section id="faq" className="scroll-mt-24 bg-surface-muted py-20 lg:py-28">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <span className="eyebrow">Вопросы</span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Частые вопросы
            </h2>
            <p className="mt-3 text-pretty text-ink-muted">
              Не нашли ответ? Позвоните{' '}
              <a
                href={site.phoneHref}
                className="font-semibold text-ink underline decoration-brand decoration-2 underline-offset-4 hover:text-brand"
              >
                {site.phone}
              </a>{' '}
              или напишите в Instagram.
            </p>
          </div>

          <ul className="space-y-3">
            {faq.map((item) => {
              const open = item.id === openId;

              return (
                <li key={item.id} className="overflow-hidden rounded-3xl bg-white">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpenId(open ? null : item.id)}
                      aria-expanded={open}
                      aria-controls={`${item.id}-panel`}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className="text-pretty font-bold">{item.question}</span>
                      <span
                        className={cn(
                          'grid size-9 shrink-0 place-items-center rounded-full transition-all duration-300',
                          open
                            ? 'rotate-45 bg-brand text-white'
                            : 'bg-surface-muted text-ink-muted',
                        )}
                      >
                        <Plus className="size-4" aria-hidden />
                      </span>
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        id={`${item.id}-panel`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 pr-16 text-pretty leading-relaxed text-ink-muted">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
