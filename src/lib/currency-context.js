'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { defaultCurrency, currencies, formatCurrencyAmount } from './pricing-data';

const CurrencyContext = createContext({
  currency: defaultCurrency,
  setCurrency: () => {},
  formatPrice: () => '',
  currencyMeta: currencies.USD,
});

export function CurrencyProvider({ children }) {
  const [currency, setCurrencyState] = useState(defaultCurrency);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('auralink_currency');
      if (saved && currencies[saved]) {
        setCurrencyState(saved);
      }
    } catch (e) {
      // Ignore localStorage errors in SSR or private modes
    }
  }, []);

  const setCurrency = (code) => {
    if (currencies[code]) {
      setCurrencyState(code);
      try {
        localStorage.setItem('auralink_currency', code);
      } catch (e) {}
    }
  };

  const formatPrice = (pricesObjOrAmount, isStarting = false, period = '') => {
    if (!pricesObjOrAmount) return 'Custom Quote';
    if (pricesObjOrAmount === 'Custom Quote') return 'Custom Quote';
    if (typeof pricesObjOrAmount === 'object') {
      const amt = pricesObjOrAmount[currency];
      if (amt === null || amt === undefined) return 'Custom Quote';
      return formatCurrencyAmount(amt, currency, isStarting, period);
    }
    return formatCurrencyAmount(pricesObjOrAmount, currency, isStarting, period);
  };

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        setCurrency,
        formatPrice,
        currencyMeta: currencies[currency] || currencies.USD,
        currencies,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  return useContext(CurrencyContext);
}
