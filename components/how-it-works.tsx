'use client';

import { motion } from 'framer-motion';
import {
  CalendarCheck,
  Map,
  MessageCircle,
  Send,
  type LucideIcon,
} from 'lucide-react';
import { howItWorks } from '@/data/site';

const icons: Record<string, LucideIcon> = {
  Map,
  CalendarCheck,
  Send,
  MessageCircle,
};

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-24 bg-surface-muted py-20 lg:py-28"
    >
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Всего четыре шага</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Как это работает
          </h2>
          <p className="mt-3 text-pretty text-ink-muted">
            От первого сообщения до посадки в самолёт — без длинных анкет и
            походов в офис.
          </p>
        </div>

        <ol className="relative mt-12 grid gap-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6">
          {/* Линия, соединяющая шаги на широком экране */}
          <span
            aria-hidden
            className="absolute left-0 right-0 top-8 hidden border-t-2 border-dashed border-line-strong lg:block"
          />

          {howItWorks.map((step, index) => {
            const Icon = icons[step.icon] ?? Map;

            return (
              <motion.li
                key={step.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative text-center lg:text-left"
              >
                <span className="relative mx-auto grid size-16 place-items-center rounded-full bg-white ring-1 ring-line lg:mx-0">
                  <Icon className="size-6 text-brand" aria-hidden />
                  <span className="absolute -right-1 -top-1 grid size-6 place-items-center rounded-full bg-brand text-xs font-bold text-white">
                    {step.step}
                  </span>
                </span>

                <h3 className="mt-5 text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {step.description}
                </p>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
