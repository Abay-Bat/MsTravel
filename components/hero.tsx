'use client';

import Image from 'next/image';
import { ArrowRight, CalendarDays, MapPin, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-ink">
      {/* Background image */}
      <Image
        src="/images/tours/hero-bali.jpg"
        alt="Бали — путешествие с TRAVEL by MUSAFIR"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/25" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1440px] flex-col justify-between px-5 py-6 sm:px-8 sm:py-8 lg:px-12 lg:py-10">
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-fit"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-4 py-2 text-xs font-semibold text-white backdrop-blur-xl sm:text-sm">
            <span className="size-2 rounded-full bg-brand shadow-[0_0_12px_rgba(255,107,53,0.8)]" />
            Групповые туры с вылетом из Алматы
          </div>
        </motion.div>

        {/* Main content */}
        <div className="flex flex-1 items-center py-12 sm:py-16 lg:py-20">
          <div className="w-full max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-white/60 sm:text-base"
            >
              TRAVEL by MUSAFIR
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="max-w-4xl text-[clamp(2.8rem,7vw,6.8rem)] font-extrabold leading-[0.96] tracking-[-0.045em] text-white"
            >
              Путешествия
              <br />
              <span className="text-white/65">
                с душой и заботой
              </span>
              <br />
              о каждом дне
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-2xl text-sm leading-6 text-white/75 sm:mt-8 sm:text-lg sm:leading-8 lg:text-xl"
            >
              Собираем небольшие группы и везём в Азию:
              перелёты, отели, программа по дням и сопровождающий
              рядом. Вам остаётся только собрать чемодан.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row"
            >
              <a
                href="/#tours"
                className="btn-primary btn-lg inline-flex justify-center gap-2 shadow-xl shadow-black/20"
              >
                Выбрать тур
                <ArrowRight className="size-5" aria-hidden />
              </a>

              <a
                href="/#lead"
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-7 py-3 text-sm font-bold text-white backdrop-blur-xl transition hover:border-white/40 hover:bg-white/20"
              >
                Подобрать поездку
              </a>
            </motion.div>
          </div>
        </div>

        {/* Bottom information */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="pb-1"
        >
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
            <HeroStat
              icon={<Users className="size-4" />}
              value="7"
              label="активных тура"
            />

            <HeroStat
              icon={<MapPin className="size-4" />}
              value="5"
              label="стран"
            />

            <HeroStat
              icon={<CalendarDays className="size-4" />}
              value="2023"
              label="года путешествий"
            />

            <div className="col-span-2 rounded-2xl border border-white/15 bg-black/25 p-4 backdrop-blur-xl sm:col-span-1">
              <p className="text-[11px] font-medium uppercase tracking-wide text-white/50">
                Ближайший вылет
              </p>

              <div className="mt-1 flex items-baseline gap-2">
                <p className="text-sm font-bold text-white">
                  Китай
                </p>
                <span className="text-xs text-white/50">
                  28 мая
                </span>
              </div>

              <p className="mt-0.5 text-xs text-white/55">
                10 дней · 9 ночей
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="/#tours"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/50 transition hover:text-white sm:flex"
        aria-label="Перейти к турам"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">
          Смотреть туры
        </span>

        <span className="flex h-9 w-6 items-start justify-center rounded-full border border-white/25 p-1.5">
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="size-1.5 rounded-full bg-white"
          />
        </span>
      </motion.a>
    </section>
  );
}

function HeroStat({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-white/15 bg-black/25 p-4 backdrop-blur-xl">
      <div className="flex items-center gap-2 text-white/55">
        {icon}
        <span className="text-[11px] font-medium sm:text-xs">
          {label}
        </span>
      </div>

      <p className="mt-2 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
        {value}
      </p>
    </div>
  );
}