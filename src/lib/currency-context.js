'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { defaultCurrency, currencies, formatCurrencyAmount } from './pricing-data';

const CurrencyContext = createContext({
  currency: defaultCurrency,
  setCurrency: () => {},
  formatPrice: () => '',
  currencyMeta: currencies.USD,
  isAutoDetected: false,
});

// Fast client-side timezone-based currency detection
function detectCurrencyFromClient() {
  if (typeof window === 'undefined') return null;

  try {
    const tz = (Intl.DateTimeFormat().resolvedOptions().timeZone || '').toLowerCase();
    const lang = (navigator.language || '').toLowerCase();

    // India detection
    if (
      tz.includes('calcutta') ||
      tz.includes('kolkata') ||
      tz.includes('india') ||
      lang.endsWith('-in') ||
      lang === 'hi'
    ) {
      return 'INR';
    }

    // UK and Europe detection
    if (
      tz.startsWith('europe/') ||
      tz.includes('london') ||
      tz.includes('dublin') ||
      tz.includes('paris') ||
      tz.includes('berlin') ||
      tz.includes('rome') ||
      tz.includes('madrid') ||
      tz.includes('amsterdam') ||
      tz.includes('brussels') ||
      tz.includes('vienna') ||
      tz.includes('stockholm') ||
      tz.includes('warsaw') ||
      tz.includes('athens') ||
      tz.includes('lisbon') ||
      lang.endsWith('-gb') ||
      lang.endsWith('-de') ||
      lang.endsWith('-fr') ||
      lang.endsWith('-it') ||
      lang.endsWith('-es')
    ) {
      return 'EUR';
    }

    // Americas / USA / Canada / Global default
    return 'USD';
  } catch {
    return 'USD';
  }
}

export function CurrencyProvider({ children }) {
  const [currency, setCurrencyState] = useState(defaultCurrency);
  const [isAutoDetected, setIsAutoDetected] = useState(false);

  useEffect(() => {
    try {
      // 1. Check if user already chose a preference in previous sessions
      const saved = localStorage.getItem('auralink_currency');
      if (saved && currencies[saved]) {
        setCurrencyState(saved);
        return;
      }

      // 2. Instant client-side timezone & locale detection
      const clientDetected = detectCurrencyFromClient();
      if (clientDetected && currencies[clientDetected]) {
        setCurrencyState(clientDetected);
        setIsAutoDetected(true);
        try {
          localStorage.setItem('auralink_currency', clientDetected);
        } catch {}
      }

      // 3. Asynchronous IP/Network Geo-verification via /api/geo
      fetch('/api/geo')
        .then((res) => res.json())
        .then((data) => {
          if (data?.success && data.currency && currencies[data.currency]) {
            // Only update if user hasn't explicitly clicked a manual selection
            const currentSaved = localStorage.getItem('auralink_currency_manual');
            if (!currentSaved) {
              setCurrencyState(data.currency);
              try {
                localStorage.setItem('auralink_currency', data.currency);
              } catch {}
            }
          }
        })
        .catch(() => {
          // Keep timezone detected value on network error
        });
    } catch {
      // Ignore errors in SSR or restricted environments
    }
  }, []);

  const setCurrency = (code) => {
    if (currencies[code]) {
      setCurrencyState(code);
      setIsAutoDetected(false);
      try {
        localStorage.setItem('auralink_currency', code);
        localStorage.setItem('auralink_currency_manual', 'true');
      } catch {}
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
        isAutoDetected,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  return useContext(CurrencyContext);
}
