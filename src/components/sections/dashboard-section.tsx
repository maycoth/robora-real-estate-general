'use client';

import React from 'react';
import { TrendingUp, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const properties = [
  { name: 'Maple Heights', balance: 847500, change: 2180 },
  { name: 'Riverside Commons', balance: 623400, change: 1605 },
  { name: 'Oak Park Plaza', balance: 412800, change: 1063 },
  { name: 'Downtown Lofts', balance: 356200, change: 917 },
];

const transactions = [
  { type: 'deposit', description: 'Security Deposit - Unit 4B', amount: 2500, property: 'Maple Heights' },
  { type: 'deposit', description: 'Interest Payment', amount: 5180, property: 'All Properties' },
  { type: 'withdrawal', description: 'Deposit Refund - Unit 12A', amount: -1800, property: 'Riverside Commons' },
  { type: 'deposit', description: 'Reserve Transfer', amount: 15000, property: 'Oak Park Plaza' },
];

export default function DashboardSection() {
  return (
    <section className="w-full bg-white py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-10 max-w-[1280px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-[#2E7FD6] font-semibold text-sm tracking-wider uppercase mb-4 block">
              Unified Dashboard
            </span>
            <h2 className="text-[#003D7A] text-3xl md:text-[44px] leading-[1.2] font-bold mb-6">
              All Your Accounts.<br />One View.
            </h2>
            <p className="text-[#6B7280] text-lg mb-8 leading-relaxed">
              See balances, transactions, and cash flow across all properties in a single dashboard. No more juggling multiple bank logins or spreadsheets.
            </p>
            
            <div className="space-y-4">
              {[
                'Real-time balances across all properties',
                'Complete transaction history',
                'Cash flow charts and visualizations',
                'Property-level breakdowns',
                'Export reports for accounting',
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#FFC700] rounded-full"></div>
                  <span className="text-[#4B5563]">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#003D7A]/5 to-[#2E7FD6]/5 rounded-3xl blur-2xl"></div>
            <div className="relative bg-white rounded-2xl shadow-2xl border border-[#E5E7EB] overflow-hidden">
              <div className="bg-[#003D7A] px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#FFC700] rounded-full"></div>
                  <span className="text-white font-semibold">Robora Dashboard</span>
                </div>
                <span className="text-white/60 text-sm">Property Overview</span>
              </div>
              
              <div className="p-6">
                <div className="bg-gradient-to-r from-[#003D7A] to-[#0A5BA8] rounded-xl p-5 mb-6">
                  <p className="text-white/70 text-sm mb-1">Total Balance</p>
                  <p className="text-3xl font-bold text-white mb-2">$2,239,900</p>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#10B981]" />
                    <span className="text-[#10B981] text-sm font-medium">+$5,765 this month</span>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-sm font-semibold text-[#003D7A] mb-3">By Property</p>
                  <div className="space-y-2">
                    {properties.map((property, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-[#F5F7FA] rounded-lg">
                        <span className="text-sm text-[#4B5563]">{property.name}</span>
                        <div className="text-right">
                          <span className="text-sm font-semibold text-[#003D7A]">
                            ${property.balance.toLocaleString()}
                          </span>
                          <span className="text-xs text-[#10B981] ml-2">+${property.change}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#003D7A] mb-3">Recent Transactions</p>
                  <div className="space-y-2">
                    {transactions.map((tx, index) => (
                      <div key={index} className="flex items-center justify-between py-2 border-b border-[#E5E7EB] last:border-0">
                        <div className="flex items-center gap-3">
                          <div className={`w-7 h-7 rounded-full flex items-center justify-center ${tx.amount > 0 ? 'bg-[#10B981]/10' : 'bg-red-50'}`}>
                            {tx.amount > 0 ? (
                              <ArrowDownRight className="w-4 h-4 text-[#10B981]" />
                            ) : (
                              <ArrowUpRight className="w-4 h-4 text-red-500" />
                            )}
                          </div>
                          <div>
                            <p className="text-xs font-medium text-[#1F2937]">{tx.description}</p>
                            <p className="text-[10px] text-[#6B7280]">{tx.property}</p>
                          </div>
                        </div>
                        <span className={`text-sm font-semibold ${tx.amount > 0 ? 'text-[#10B981]' : 'text-red-500'}`}>
                          {tx.amount > 0 ? '+' : ''}${Math.abs(tx.amount).toLocaleString()}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
