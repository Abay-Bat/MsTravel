'use client';

import { useState, type FormEvent } from 'react';
import Image from 'next/image';
import { Send } from 'lucide-react';
import { site } from '@/data/site';

const initialValues = {
  name: '',
  phone: '',
  destination: '',
};

export function LeadBanner() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Partial<typeof initialValues>>({});

  const update = (field: keyof typeof initialValues, value: string) => {
    setValues((previous) => ({
      ...previous,
      [field]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [field]: undefined,
    }));
  };

  const validate = () => {
    const next: Partial<typeof initialValues> = {};

    if (values.name.trim().length < 2) {
      next.name = 'Укажите имя';
    }

    if (values.phone.replace(/\D/g, '').length < 10) {
      next.phone = 'Проверьте номер телефона';
    }

    setErrors(next);

    return Object.keys(next).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    const message =
      'Здравствуйте! Хочу оставить заявку на тур.\n\n' +
      'Имя: ' +
      values.name.trim() +
      '\n' +
      'Телефон: ' +
      values.phone.trim() +
      '\n' +
      'Направление: ' +
      (values.destination.trim() || 'Не указано');

    const telegramUrl =
      'https://t.me/baukaturagent?text=' +
      encodeURIComponent(message);

    window.open(telegramUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="lead" className="scroll-mt-24 py-8 lg:py-12">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem]">
          <Image
            src="/images/tours/lead-banner.jpg"
            alt=""
            fill
            sizes="(max-width: 1280px) 100vw, 1240px"
            className="object-cover"
          />

          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-br from-ink/92 via-ink/85 to-ink/70"
          />

          <div className="relative grid gap-10 p-8 sm:p-10 lg:grid-cols-2 lg:items-center lg:gap-14 lg:p-14">
            <div>
              <h2 className="text-balance text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-4xl">
                Не нашли подходящий тур?
              </h2>

              <p className="mt-4 max-w-md text-pretty leading-relaxed text-white/75">
                Оставьте заявку — подберём даты, посчитаем стоимость и соберём
                маршрут под ваш состав и бюджет. Ответим в течение 15 минут.
              </p>

              <p className="mt-6 text-sm text-white/60">
                Или звоните напрямую:{' '}
                <a
                  href={site.phoneHref}
                  className="font-semibold text-white underline decoration-brand decoration-2 underline-offset-4"
                >
                  {site.phone}
                </a>
              </p>
            </div>

            <div className="rounded-3xl bg-white/95 p-5 shadow-float backdrop-blur sm:p-6">
              <form
                onSubmit={handleSubmit}
                noValidate
                className="space-y-3"
              >
                <Field
                  id="lead-name"
                  label="Имя"
                  placeholder="Как к вам обращаться"
                  value={values.name}
                  error={errors.name}
                  onChange={(value) => update('name', value)}
                />

                <Field
                  id="lead-phone"
                  label="Телефон"
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  autoComplete="tel"
                  value={values.phone}
                  error={errors.phone}
                  onChange={(value) => update('phone', value)}
                />

                <Field
                  id="lead-destination"
                  label="Куда хотите поехать?"
                  placeholder="Например, Таиланд в октябре"
                  value={values.destination}
                  error={errors.destination}
                  onChange={(value) => update('destination', value)}
                />

                <button
                  type="submit"
                  className="btn-primary btn-lg w-full"
                >
                  <Send className="size-4" aria-hidden />
                  Отправить заявку
                </button>

                <p className="pt-1 text-center text-xs leading-relaxed text-ink-subtle">
                  Нажимая кнопку, вы соглашаетесь на обработку персональных
                  данных.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */

function Field({
  id,
  label,
  value,
  onChange,
  placeholder,
  error,
  type = 'text',
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>

      <input
        id={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`field ${
          error ? 'border-brand focus:ring-brand/30' : ''
        }`}
      />

      {error && (
        <p
          id={`${id}-error`}
          className="mt-1.5 px-1 text-xs font-medium text-brand-dark"
        >
          {error}
        </p>
      )}
    </div>
  );
}