'use client';

import React, { useState, useMemo } from 'react';
import { Search, CreditCard, Check, Sparkles, SlidersHorizontal, Share2, Copy, CheckCircle2 } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';
import Button from '@/components/ui/Button';
import RazorpayButton from '@/components/ui/RazorpayButton';
import { useCurrency } from '@/lib/currency-context';
import { initiateRazorpayCheckout } from '@/lib/razorpay';
import { customServices, packages } from '@/lib/pricing-data';

export default function InteractivePaymentPortal() {
  const { currency, formatPrice } = useCurrency();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedService, setSelectedService] = useState(null);
  const [useCustomAmount, setUseCustomAmount] = useState(false);
  const [customAmount, setCustomAmount] = useState('');

  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [invoiceNote, setInvoiceNote] = useState('');

  const [copiedLink, setCopiedLink] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  // Flatten all services for search
  const allServicesList = useMemo(() => {
    const list = [];

    // Add standard packages
    packages.forEach((pkg) => {
      list.push({
        id: `pkg-${pkg.id}`,
        name: pkg.name,
        category: 'Package',
        description: pkg.tagline,
        prices: pkg.prices,
      });
    });

    // Add websites, agents, software, add-ons
    Object.entries(customServices).forEach(([catKey, items]) => {
      items.forEach((item) => {
        list.push({
          id: item.id,
          name: item.name,
          category: catKey.toUpperCase(),
          description: item.description,
          prices: item.prices,
          isStarting: item.isStarting,
          isCustomQuote: item.isCustomQuote,
        });
      });
    });

    return list;
  }, []);

  // Filter services by search query
  const filteredServices = useMemo(() => {
    if (!searchQuery.trim()) return allServicesList.slice(0, 8);
    const query = searchQuery.toLowerCase();
    return allServicesList.filter(
      (item) =>
        item.name.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query)
    );
  }, [allServicesList, searchQuery]);

  // Calculate final payment amount
  const finalCalculatedAmount = useMemo(() => {
    if (useCustomAmount) {
      const val = parseFloat(customAmount);
      return isNaN(val) || val <= 0 ? 0 : val;
    }
    if (!selectedService || !selectedService.prices) return 0;
    if (typeof selectedService.prices === 'number') return selectedService.prices;
    const priceInCurrency = selectedService.prices[currency.code] || selectedService.prices['USD'] || selectedService.prices['INR'];
    return typeof priceInCurrency === 'number' ? priceInCurrency : 0;
  }, [useCustomAmount, customAmount, selectedService, currency]);

  // Handle Razorpay direct execution
  const handleRazorpayPayment = () => {
    if (!finalCalculatedAmount || finalCalculatedAmount <= 0) {
      alert('Please select a service with valid pricing or enter a custom amount.');
      return;
    }

    setIsProcessing(true);

    initiateRazorpayCheckout({
      amount: finalCalculatedAmount,
      currency: currency.code,
      serviceName: useCustomAmount ? `Custom Payment — ${invoiceNote || 'AuraLink Service'}` : selectedService?.name || 'AuraLink Service',
      description: invoiceNote || `Online Payment (${currency.symbol}${finalCalculatedAmount})`,
      clientName,
      clientEmail,
      clientPhone,
      onSuccess: (details) => {
        setIsProcessing(false);
        setPaymentSuccess(details);
      },
      onError: () => {
        setIsProcessing(false);
      },
    });
  };

  // Generate shareable payment link
  const generateShareableLink = () => {
    const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://auralink.agency';
    const params = new URLSearchParams();
    if (useCustomAmount && customAmount) params.set('amount', customAmount);
    if (selectedService) params.set('service', selectedService.name);
    params.set('currency', currency.code);

    const shareUrl = `${baseUrl}/pricing?${params.toString()}`;
    navigator.clipboard.writeText(shareUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 3000);
  };

  return (
    <GlassCard className="p-6 md:p-8 border border-white/[0.1] shadow-2xl relative overflow-hidden" hover={false}>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-b border-white/[0.08] pb-6">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-2">
            <CreditCard size={14} /> Instant Razorpay Payment Portal
          </span>
          <h3 className="font-display font-bold text-2xl text-white">
            Pay Online & Book Service
          </h3>
          <p className="text-xs text-[hsl(230,15%,65%)] mt-1">
            Search your service or enter a custom quote amount to pay instantly via Razorpay (UPI, Credit Cards, NetBanking).
          </p>
        </div>

        <button
          onClick={generateShareableLink}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-semibold text-white transition-all w-fit"
        >
          {copiedLink ? <CheckCircle2 size={14} className="text-emerald-400" /> : <Share2 size={14} />}
          <span>{copiedLink ? 'Payment Link Copied!' : 'Copy Payment Link'}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Search & Service Selection */}
        <div className="lg:col-span-7 space-y-6">
          {/* Mode Switcher: Service Search vs Custom Amount */}
          <div className="flex items-center gap-2 p-1 rounded-xl bg-white/[0.04] border border-white/[0.08]">
            <button
              onClick={() => {
                setUseCustomAmount(false);
              }}
              className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
                !useCustomAmount
                  ? 'bg-gradient-to-r from-[hsl(270,95%,65%)] to-[hsl(210,100%,60%)] text-white shadow-md'
                  : 'text-[hsl(230,15%,65%)] hover:text-white'
              }`}
            >
              🔍 Select Service From Catalog
            </button>
            <button
              onClick={() => {
                setUseCustomAmount(true);
              }}
              className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
                useCustomAmount
                  ? 'bg-gradient-to-r from-[hsl(270,95%,65%)] to-[hsl(210,100%,60%)] text-white shadow-md'
                  : 'text-[hsl(230,15%,65%)] hover:text-white'
              }`}
            >
              ✏️ Enter Custom Invoice Amount
            </button>
          </div>

          {!useCustomAmount ? (
            <>
              {/* Search Bar */}
              <div className="relative">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[hsl(230,15%,55%)]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search service name (e.g. Business Website, Voice Agent, SEO)..."
                  className="w-full pl-11 pr-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white placeholder:text-[hsl(230,15%,45%)] text-sm focus:outline-none focus:border-[hsl(270,95%,65%)]/50 focus:ring-1 focus:ring-[hsl(270,95%,65%)]/30 transition-all"
                />
              </div>

              {/* Filtered Services Selection List */}
              <div className="space-y-2.5 max-h-72 overflow-y-auto pr-1">
                {filteredServices.map((item) => {
                  const isSelected = selectedService?.id === item.id;
                  const itemPrice = typeof item.prices === 'number' ? item.prices : item.prices?.[currency.code] || item.prices?.['USD'];

                  return (
                    <div
                      key={item.id}
                      onClick={() => setSelectedService(item)}
                      className={`p-3.5 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-between gap-3 ${
                        isSelected
                          ? 'bg-[hsl(270,95%,65%)]/15 border-[hsl(270,95%,65%)] shadow-md shadow-purple-500/10'
                          : 'bg-white/[0.02] hover:bg-white/[0.05] border-white/[0.06]'
                      }`}
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.06] text-[hsl(185,100%,55%)] font-semibold">
                            {item.category}
                          </span>
                          <h4 className="text-sm font-bold text-white truncate">{item.name}</h4>
                        </div>
                        <p className="text-xs text-[hsl(230,15%,60%)] truncate">{item.description}</p>
                      </div>

                      <div className="text-right shrink-0">
                        <span className="text-sm font-extrabold gradient-text block">
                          {typeof itemPrice === 'number' ? formatPrice(item.prices) : 'Custom Quote'}
                        </span>
                        {isSelected && <Check size={16} className="text-[hsl(185,100%,55%)] ml-auto mt-1" />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            /* Custom Amount Input Box */
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] space-y-4">
              <label className="block text-xs font-semibold text-white">
                Enter Custom Amount to Charge ({currency.code} {currency.symbol}):
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-xl text-[hsl(270,95%,65%)]">
                  {currency.symbol}
                </span>
                <input
                  type="number"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  placeholder="e.g. 15000"
                  className="w-full pl-10 pr-4 py-3.5 bg-white/[0.04] border border-white/[0.1] rounded-xl text-white font-bold text-xl focus:outline-none focus:border-[hsl(270,95%,65%)] transition-all"
                />
              </div>
              <p className="text-xs text-[hsl(230,15%,55%)]">
                Razorpay will automatically process exact charges of <strong>{currency.symbol}{customAmount || '0'} {currency.code}</strong>.
              </p>
            </div>
          )}
        </div>

        {/* Right Column: Checkout Summary & Client Info */}
        <div className="lg:col-span-5 bg-white/[0.03] p-6 rounded-2xl border border-white/[0.08] flex flex-col justify-between">
          <div className="space-y-4">
            <h4 className="font-display font-bold text-base text-white border-b border-white/[0.08] pb-3">
              Payment Summary
            </h4>

            {/* Selected Service or Custom Summary */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-[hsl(230,15%,65%)]">
                <span>Selected Item:</span>
                <span className="text-white font-semibold">
                  {useCustomAmount ? 'Custom Quote Invoice' : selectedService?.name || 'None selected'}
                </span>
              </div>
              <div className="flex justify-between text-xs text-[hsl(230,15%,65%)]">
                <span>Display Currency:</span>
                <span className="text-[hsl(185,100%,55%)] font-semibold">{currency.code} ({currency.name})</span>
              </div>
              <div className="flex justify-between text-sm font-bold border-t border-white/[0.08] pt-3">
                <span className="text-white">Total Amount to Charge:</span>
                <span className="text-xl font-extrabold gradient-text">
                  {currency.symbol}{finalCalculatedAmount.toLocaleString()} {currency.code}
                </span>
              </div>
            </div>

            {/* Client Information Fields (Optional Prefill) */}
            <div className="space-y-3 pt-3 border-t border-white/[0.08]">
              <input
                type="text"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder="Your Name / Business Name (Optional)"
                className="w-full px-3 py-2 bg-white/[0.04] border border-white/[0.08] rounded-lg text-xs text-white placeholder:text-[hsl(230,15%,45%)] focus:outline-none focus:border-[hsl(270,95%,65%)]"
              />
              <input
                type="email"
                value={clientEmail}
                onChange={(e) => setClientEmail(e.target.value)}
                placeholder="Your Email for Receipt (Optional)"
                className="w-full px-3 py-2 bg-white/[0.04] border border-white/[0.08] rounded-lg text-xs text-white placeholder:text-[hsl(230,15%,45%)] focus:outline-none focus:border-[hsl(270,95%,65%)]"
              />
              <input
                type="text"
                value={invoiceNote}
                onChange={(e) => setInvoiceNote(e.target.value)}
                placeholder="Project Note / Invoice Ref (Optional)"
                className="w-full px-3 py-2 bg-white/[0.04] border border-white/[0.08] rounded-lg text-xs text-white placeholder:text-[hsl(230,15%,45%)] focus:outline-none focus:border-[hsl(270,95%,65%)]"
              />
            </div>
          </div>

          {/* Direct Checkout Trigger */}
          <div className="pt-6">
            <RazorpayButton
              numericAmount={finalCalculatedAmount}
              serviceName={useCustomAmount ? `Custom Quote — ${invoiceNote || 'AuraLink'}` : selectedService?.name || 'AuraLink Service'}
              buttonText={`Pay ${currency.symbol}${finalCalculatedAmount.toLocaleString()} via Razorpay`}
              className="w-full py-3.5 text-sm font-extrabold shadow-xl shadow-emerald-500/25"
            />
          </div>
        </div>
      </div>
    </GlassCard>
  );
}
