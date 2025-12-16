'use client';

import React from 'react';
import { Shield, ArrowRightLeft, Landmark, Check } from 'lucide-react';

const accountTypes = [
  {
    icon: Shield,
    title: 'Security Deposit Accounts',
    description: 'High-yield accounts purpose-built for tenant security deposits',
    features: [
      'Earn 3.11% APY on all deposits',
      'Tens of millions in FDIC coverage',
      'Easy compliance with state requirements',
      'Separate tracking per property',
    ],
    color: '#FFC700',
    bgColor: '#FFC700/10',
  },
  {
    icon: ArrowRightLeft,
    title: 'Operating Account Sweep',
    description: 'Automatic sweep of excess operating funds to maximize returns',
    features: [
      'Keep liquidity for daily operations',
      'Earn on idle cash automatically',
      'Smart cash flow optimization',
      'No change to current banking',
    ],
    color: '#2E7FD6',
    bgColor: '#2E7FD6/10',
  },
  {
    icon: Landmark,
    title: 'Reserve & Treasury Accounts',
    description: 'Park capital reserves, CapEx funds, and insurance reserves',
    features: [
      'Perfect for long-term reserves',
      'Instant access when needed',
      'Higher yields than CDs',
      'No lock-up periods',
    ],
    color: '#10B981',
    bgColor: '#10B981/10',
  },
];

export default function AccountTypesSection() {
  return (
    <section className="w-full bg-[#F5F7FA] py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-10 max-w-[1280px]">
        <div className="text-center mb-16">
          <span className="text-[#2E7FD6] font-semibold text-sm tracking-wider uppercase mb-4 block">
            Purpose-Built Solutions
          </span>
          <h2 className="text-[#003D7A] text-3xl md:text-[44px] leading-[1.2] font-bold max-w-3xl mx-auto mb-4">
            Three Ways to Put Your Funds to Work
          </h2>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
            Whether it&apos;s tenant deposits, operating cash, or reserve funds—we have a high-yield solution for every dollar you manage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {accountTypes.map((account, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 flex flex-col h-full shadow-sm hover:shadow-lg transition-shadow duration-300 border border-[#E5E7EB]"
            >
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                style={{ backgroundColor: `${account.color}15` }}
              >
                <account.icon className="w-7 h-7" style={{ color: account.color }} />
              </div>
              
              <h3 className="text-xl font-bold text-[#003D7A] mb-3">
                {account.title}
              </h3>
              
              <p className="text-[#6B7280] mb-6">
                {account.description}
              </p>
              
              <div className="mt-auto space-y-3">
                {account.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <div 
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{ backgroundColor: `${account.color}20` }}
                    >
                      <Check className="w-3 h-3" style={{ color: account.color }} strokeWidth={3} />
                    </div>
                    <span className="text-sm text-[#4B5563]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
