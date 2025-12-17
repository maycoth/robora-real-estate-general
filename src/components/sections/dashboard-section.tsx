import React from 'react';
import Image from 'next/image';

export default function DashboardSection() {
  return (
    <section className="w-full bg-white py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-10 max-w-[1280px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-[#013A6F] font-semibold text-sm tracking-wider uppercase mb-4 block">
              Unified Dashboard
            </span>
            <h2 className="text-[#013A6F] text-3xl md:text-[44px] leading-[1.2] font-bold mb-6">
              All Your Accounts.<br />One View.
            </h2>
            <p className="text-[#4B4F53] text-lg mb-8 leading-relaxed">
              See balances, transactions, and cash flow across all properties in a single dashboard. No more juggling multiple bank logins or spreadsheets.
            </p>
            
            <div className="space-y-4">
              {[
                'Updated balances across all properties',
                'Complete transaction history',
                'Cash flow charts and visualizations',
                'Property-level breakdowns',
                'Export statements for accounting',
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#FFCA40] rounded-full"></div>
                  <span className="text-[#4B4F53]">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#013A6F]/5 to-[#013A6F]/10 rounded-3xl blur-2xl"></div>
<Image 
                src="https://b0lsqh365peprp3p.public.blob.vercel-storage.com/Robora%20Dash.png" 
                alt="Robora Dashboard" 
                width={800}
                height={600}
                className="relative w-full h-auto rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-105"
              />
          </div>
        </div>
      </div>
    </section>
  );
}
