import React from 'react';
import Link from 'next/link';
import { Check, Building2, Mail } from 'lucide-react';

const features = [
  "High-yield accounts for all fund types",
  "Tens of millions in FDIC coverage",
  "Unified dashboard for all properties",
  "No change to existing banking",
  "Free cash analytics tools",
  "Unlimited transfers",
];

export default function PricingCTASection() {
  return (
    <section id="contact" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-10 max-w-[1280px]">
        <div className="relative overflow-hidden rounded-[24px] md:rounded-[32px] bg-[#003D7A] text-white shadow-xl">
          <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
            <div 
              className="absolute -left-[50px] -top-[50px] h-[300px] w-[300px] md:-left-[20px] md:-top-[60px] md:h-[500px] md:w-[500px] lg:h-[600px] lg:w-[600px]"
              style={{
                backgroundColor: '#FFC700',
                borderRadius: '80px',
                transform: 'rotate(15deg) translateX(-30%)',
                opacity: 1,
              }}
            />
            <div 
              className="absolute -bottom-[100px] -left-[80px] h-[350px] w-[350px] md:-bottom-[150px] md:-left-[50px] md:h-[550px] md:w-[550px]"
              style={{
                backgroundColor: '#2E7FD6',
                borderRadius: '100px',
                transform: 'rotate(45deg)',
                opacity: 1,
                zIndex: -1,
              }}
            />
          </div>

          <div className="relative z-10 grid grid-cols-1 gap-12 p-8 md:p-12 lg:grid-cols-12 lg:p-16">
            <div className="hidden lg:col-span-5 lg:block" aria-hidden="true" />

            <div className="flex flex-col gap-8 lg:col-span-7">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full">
                  <Building2 className="w-4 h-4 text-[#FFC700]" />
                  <span className="text-sm font-medium">For Apartment Management Companies</span>
                </div>

                <h2 className="text-3xl font-bold leading-[1.2] md:text-5xl lg:text-[52px]" style={{ color: 'white' }}>
                  Start Earning More on Every Dollar You Manage
                </h2>

                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-4">
                  <div className="flex items-baseline gap-3">
                    <span className="text-xl font-normal md:text-2xl">Earn</span>
                    <span className="text-5xl font-bold text-[#FFC700] md:text-[64px] leading-none">
                      3.11%
                    </span>
                    <span className="relative top-0 text-xl font-semibold md:text-2xl">
                      APY<sup className="text-sm">1</sup>
                    </span>
                  </div>
                  <span className="text-lg font-normal opacity-90 md:text-xl">
                    on all balances
                  </span>
                </div>
              </div>

              <div className="h-px w-full bg-white/20" />

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#10B981]">
                      <Check className="h-3 w-3 text-white stroke-[3px]" />
                    </div>
                    <span className="text-sm font-medium text-white/90">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="h-px w-full bg-white/20" />

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="mailto:contact@roborafinancial.com"
                    className="group flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-[#003D7A] bg-[#FFC700] rounded-lg hover:bg-[#FFD740] transition-all duration-300 shadow-lg"
                  >
                    <Mail className="w-5 h-5" />
                    Schedule a Demo
                  </Link>
                </div>

              <p className="text-xs text-white/50">
                *$10K minimum initial deposit. $0/month for balances over $100K. $15/month for balances under $100K after 30-day trial.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
