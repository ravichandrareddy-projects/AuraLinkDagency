'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  defaultCurrency,
  currencies,
  formatCurrencyAmount,
  countryToCurrency,
} from './pricing-data';

const CurrencyContext = createContext({
  currency: defaultCurrency,
  setCurrency: () => {},
  formatPrice: () => '',
  currencyMeta: currencies.USD,
  isAutoDetected: false,
});

// Client-side timezone/locale fallback (used only when live IP geo is unavailable)
function detectCurrencyFromClient() {
  if (typeof window === 'undefined') return defaultCurrency;

  try {
    const tz = (Intl.DateTimeFormat().resolvedOptions().timeZone || '').toLowerCase();
    const lang = (navigator.language || '').toLowerCase();

    // India (any city/state timezone or Indian locale) -> INR
    if (
      tz === 'asia/kolkata' ||
      tz === 'asia/calcutta' ||
      tz.includes('india') ||
      lang.endsWith('-in') ||
      lang === 'hi'
    ) {
      return 'INR';
    }

    // United Kingdom -> EUR
    if (
      tz === 'europe/london' ||
      tz === 'europe/belfast' ||
      lang.endsWith('-gb') ||
      lang === 'cy' ||
      lang === 'gd'
    ) {
      return 'EUR';
    }

    // USA and all other countries -> USD
    return defaultCurrency;
  } catch {
    return defaultCurrency;
  }
}

async function resolvePublicCountryFromBrowser() {
  const providers = [
    async () => {
      const res = await fetch('https://ipwho.is/', { cache: 'no-store', signal: AbortSignal.timeout(3000) });
      if (!res.ok) return '';
      const d = await res.json();
      return d?.success && d.country_code ? String(d.country_code).toUpperCase() : '';
    },
    async () => {
      const res = await fetch('https://api.country.is/', { cache: 'no-store', signal: AbortSignal.timeout(3000) });
      if (!res.ok) return '';
      const d = await res.json();
      return d?.country ? String(d.country).toUpperCase() : '';
    },
  ];

  for (const probe of providers) {
    try {
      const code = await probe();
      if (code && code !== 'UNKNOWN') return code;
    } catch {
      // Try next provider
    }
  }
  return '';
}

export function CurrencyProvider({ children }) {
  const [currency, setCurrencyState] = useState(defaultCurrency);
  const [isAutoDetected, setIsAutoDetected] = useState(false);

  useEffect(() => {
    let active = true;

    async function initLocationCurrency() {
      try {
        // Optional query override (?country=GB or ?currency=EUR) for quick testing
        const params = new URLSearchParams(window.location.search);
        const queryCurrency = (params.get('currency') || '').toUpperCase();
        const queryCountry = (params.get('country') || '').toUpperCase();
        if (queryCurrency && currencies[queryCurrency]) {
          if (active) setCurrencyState(queryCurrency);
          return;
        }
        if (queryCountry) {
          if (active) {
            setCurrencyState(countryToCurrency(queryCountry));
            setIsAutoDetected(true);
          }
          return;
        }

        // 1. Honor explicit user click selection only (never let old auto-cache lock location)
        const isManual = localStorage.getItem('auralink_currency_manual') === 'true';
        const saved = localStorage.getItem('auralink_currency');
        if (isManual && saved && currencies[saved]) {
          if (active) setCurrencyState(saved);
          return;
        }

        // 2. Fast initial fallback via timezone/locale while IP geo resolves
        const clientDetected = detectCurrencyFromClient();
        if (active && clientDetected && currencies[clientDetected]) {
          setCurrencyState(clientDetected);
          setIsAutoDetected(true);
        }

        // 3. Authoritative server Geo-IP check, falling back to browser HTTPS Geo-IP if Unknown
        let resolvedCountry = '';
        try {
          const geoRes = await fetch('/api/geo', { cache: 'no-store' });
          if (geoRes.ok) {
            const geoData = await geoRes.json();
            if (geoData?.country && geoData.country !== 'Unknown') {
              resolvedCountry = String(geoData.country).toUpperCase();
            }
          }
        } catch {
          // Ignore server geo error and fallback to browser IP check
        }

        if (!resolvedCountry) {
          resolvedCountry = await resolvePublicCountryFromBrowser();
        }

        if (!active) return;
        if (localStorage.getItem('auralink_currency_manual') === 'true') return;

        if (resolvedCountry) {
          const mapped = countryToCurrency(resolvedCountry);
          setCurrencyState(mapped);
          setIsAutoDetected(true);
        }
      } catch {
        // Keep default USD on unexpected error
      }
    }

    initLocationCurrency();
    return () => {
      active = false;
    };
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
