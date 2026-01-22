'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { DollarSign, TrendingUp, AlertCircle } from 'lucide-react';

export default function CalculatorSection() {
  const [amount, setAmount] = useState<string>('2000000');
  
  const APY_RATE = 0.0311;
  const BANK_RATE = 0.0025;
  
  const calculations = useMemo(() => {
    const numAmount = parseFloat(amount.replace(/,/g, '')) || 0;
    const roboraEarnings = numAmount * APY_RATE;
    const bankEarnings = numAmount * BANK_RATE;
    const difference = roboraEarnings - bankEarnings;
    return {
      roboraEarnings,
      bankEarnings,
      difference,
      numAmount
    };
  }, [amount]);

  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(num);
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setAmount(value);
  };

  return (
    <section className="w-full bg-white py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 text-red-700 rounded-full text-sm font-medium mb-6">
            <AlertCircle className="w-4 h-4" />
            The Hidden Cost of Low-Yield Accounts
          </span>
          <h2 className="text-[#013A6F] text-3xl md:text-[44px] leading-[1.2] font-bold max-w-[900px] mx-auto mb-4">
            Your Deposits Are Working for Banks, Not You
          </h2>
          <p className="text-[#4B4F53] text-lg max-w-2xl mx-auto">
            Most CRE firms leave millions in operating capital and reserves earning near-zero interest. See what you&apos;re missing.
          </p>
        </div>

          <div className="bg-[#F4F5F5] rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <label className="block text-sm font-semibold text-[#013A6F] mb-3">
                  Total Cash Holdings
                </label>
                <div className="relative mb-8">
                  <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#4B4F53]" />
                  <input
                    type="text"
                    value={calculations.numAmount.toLocaleString()}
                    onChange={handleAmountChange}
                    className="w-full h-14 py-3 pl-12 pr-4 text-2xl font-bold border-2 border-[#D4D6D8] rounded-xl outline-none transition-all text-[#013A6F] focus:border-[#013A6F] focus:ring-4 focus:ring-[#013A6F]/10 bg-white"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-[#D4D6D8]">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                      <span className="text-[#4B4F53] text-sm">Typical Bank (0.25% APY)</span>
                    </div>
                    <span className="font-bold text-[#1A1B1D]">{formatCurrency(calculations.bankEarnings)}/yr</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-[#013A6F] rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-[#FFCA40] rounded-full"></div>
                      <span className="text-white text-sm">Robora (3.11% APY)</span>
                    </div>
                    <span className="font-bold text-[#FFCA40] text-lg">{formatCurrency(calculations.roboraEarnings)}/yr</span>
                  </div>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center text-center">
              <div className="relative">
                <div className="absolute inset-0 bg-[#10B981]/20 rounded-full blur-3xl"></div>
                <div className="relative bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-[#10B981]/20">
                  <TrendingUp className="w-10 h-10 text-[#10B981] mx-auto mb-4" />
                  <p className="text-sm font-medium text-[#4B4F53] mb-2">You&apos;re Missing Out On</p>
                  <p className="text-4xl md:text-5xl font-bold text-[#10B981] mb-2">
                    {formatCurrency(calculations.difference)}
                  </p>
                  <p className="text-sm text-[#4B4F53]">per year in potential earnings</p>
                </div>
              </div>
              
              <p className="mt-8 text-sm text-[#4B4F53] max-w-sm">
                This calculation assumes constant balance and rates. Actual earnings may vary.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="#booking"
            className="inline-flex px-8 py-4 text-base font-semibold text-[#013A6F] bg-[#FFCA40] rounded-lg hover:bg-[#EBAA00] transition-all duration-300 shadow-lg shadow-[#FFCA40]/25"
          >
            Schedule a Demo
          </Link>
        </div>
      </div>
    </section>
  );
}
