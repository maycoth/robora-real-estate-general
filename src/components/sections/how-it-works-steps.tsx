import React from 'react';
import Link from 'next/link';
import { UserPlus, Link2, Wallet, TrendingUp } from 'lucide-react';

const steps = [
  {
    id: 1,
    icon: UserPlus,
    title: "Open Your Account",
    description: "5-minute digital onboarding. No paperwork, no branch visits.",
  },
  {
    id: 2,
    icon: Link2,
    title: "Link Existing Accounts",
    description: "Securely connect your current bank accounts via Plaid.",
  },
  {
    id: 3,
    icon: Wallet,
    title: "Transfer Funds",
    description: "Move security deposits, reserves, or operating funds to your Robora accounts.",
  },
  {
    id: 4,
    icon: TrendingUp,
    title: "Start Earning",
    description: "Watch your idle cash earn 3.11% APY with full FDIC protection.",
  },
];

export default function HowItWorksSteps() {
  return (
    <section id="how-it-works" className="relative w-full bg-[#F4F5F5] py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-4 md:px-10 max-w-[1280px]">
        <div className="text-center mb-16">
          <span className="text-[#013A6F] font-semibold text-sm tracking-wider uppercase mb-4 block">
            Simple Setup
          </span>
          <h2 className="text-[#013A6F] text-3xl md:text-[44px] leading-[1.2] font-bold max-w-3xl mx-auto mb-4">
            Get Started in Minutes, Not Days
          </h2>
          <p className="text-[#4B4F53] text-lg max-w-2xl mx-auto">
            No need to change your existing banking relationships. We work alongside your current setup.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-[#D4D6D8]">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t-2 border-r-2 border-[#D4D6D8] transform rotate-45"></div>
                  </div>
                )}
              
                <div className="relative z-10 bg-white rounded-2xl p-6 h-full shadow-sm border border-[#D4D6D8]">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#013A6F] rounded-xl flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-[#FFCA40]" />
                    </div>
                    <span className="text-5xl font-bold text-[#D4D6D8]">{step.id}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#013A6F] mb-2">{step.title}</h3>
                  <p className="text-[#4B4F53] text-sm">{step.description}</p>
                </div>
            </div>
          ))}
        </div>

          <div className="mt-16 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4">
              <Link
                    href="https://roborafinancial.com/book-a-demo"
                    className="px-8 py-4 text-base font-semibold text-[#013A6F] bg-[#FFCA40] rounded-lg hover:bg-[#EBAA00] transition-all duration-300 shadow-lg shadow-[#FFCA40]/25"
                  >
                  Schedule a Demo
                </Link>
            </div>
          </div>
      </div>
    </section>
  );
}
