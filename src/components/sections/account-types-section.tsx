'use client';

import React from 'react';
import { Shield, ArrowRightLeft, Landmark, Check } from 'lucide-react';

const accountTypes = [
  {
    icon: ArrowRightLeft,
    title: 'Operating Account Optimization',
    description: 'Sweep excess cash from your operating accounts automatically or manually',
    features: [
      'Set up automated or manual sweeps',
      'Keep your existing bank relationships',
      'Earn 3.11% APY on idle operating funds',
      'No change to your daily workflows',
    ],
    color: '#FFCA40',
    bgColor: '#FFCA40/10',
  },
  {
    icon: Shield,
    title: 'Reserve Fund Yield',
    description: 'Park CapEx reserves and insurance funds to earn more',
    features: [
      'Perfect for long-term capital reserves',
      'Same-day ACH transfers when you need liquidity',
      'Higher yields than traditional bank accounts',
      'No lock-up periods or penalties',
    ],
    color: '#013A6F',
    bgColor: '#013A6F/10',
  },
  {
    icon: Landmark,
    title: 'Treasury Management',
    description: 'Manage treasury accounts for multiple properties in one place.',
    features: [
      'Single dashboard for all funds',
      'Tens of millions in FDIC coverage*',
      'Track by property or fund purpose',
      'Easy compliance and reporting',
    ],
    color: '#10B981',
    bgColor: '#10B981/10',
  },
];

export default function AccountTypesSection() {
  return (
    <section className="w-full bg-[#F4F5F5] py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-10 max-w-[1280px]">
        <div className="text-center mb-16">
          <span className="text-[#013A6F] font-semibold text-sm tracking-wider uppercase mb-4 block">
            Flexible Use Cases
          </span>
          <h2 className="text-[#013A6F] text-3xl md:text-[44px] leading-[1.2] font-bold max-w-3xl mx-auto mb-4">
            One Platform, Three Ways to Use It
          </h2>
          <p className="text-[#4B4F53] text-lg max-w-2xl mx-auto">
            Robora connects to your existing banks and helps you earn more on idle cash. Use it for operating excess, reserves, or treasury.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {accountTypes.map((account, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 flex flex-col h-full shadow-sm hover:shadow-lg transition-shadow duration-300 border border-[#D4D6D8]"
              >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                style={{ backgroundColor: `${account.color}15` }}
              >
                <account.icon className="w-7 h-7" style={{ color: account.color }} />
              </div>

                <h3 className="text-xl font-bold text-[#013A6F] mb-3">
                {account.title}
              </h3>

                <p className="text-[#4B4F53] mb-6">
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
                    <span className="text-sm text-[#4B4F53]">{feature}</span>
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
