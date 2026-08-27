'use client';

import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import type { CurrencyCode } from '@/types/tour';

interface CurrencyContextValue {
  currency: CurrencyCode;
  setCurrency: (currency: CurrencyCode) => void;
}

const CurrencyContext = createContext<CurrencyContextValue | null>(null);

/**
 * Хранит выбранную валюту. Шапка её переключает, карточки туров читают.
 * Состояние живёт в памяти — при перезагрузке возвращается к тенге.
 */
export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrencyState] = useState<CurrencyCode>('KZT');

  const setCurrency = useCallback((next: CurrencyCode) => {
    setCurrencyState(next);
  }, []);

  const value = useMemo(() => ({ currency, setCurrency }), [currency, setCurrency]);

  return (
    <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>
  );
}

export function useCurrency(): CurrencyContextValue {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency нужно вызывать внутри <CurrencyProvider>');
  }
  return context;
}
