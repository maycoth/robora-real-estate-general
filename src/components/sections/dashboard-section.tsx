'use client';

import React from 'react';
import { LayoutDashboard, FileText, Link2, Mail, Settings, LogOut, ChevronDown, ArrowRight } from 'lucide-react';

const accounts = [
  { initials: 'SV', name: "Sunset View Apartments", total: 2857700, robora: 2157600, external: 700100, interest: 86512 },
  { initials: 'OP', name: "Oakwood Property Group", total: 3882300, robora: 3282300, external: 600000, interest: 57058 },
  { initials: 'HP', name: "Harbor Pointe Residences", total: 7904600, robora: 4904600, external: 3000000, interest: 102820 },
  { initials: 'ML', name: "Maple Lane Apartments", total: 546500, robora: 446500, external: 100000, interest: 3286 },
];

const navItems = [
  { icon: LayoutDashboard, label: 'Summary Dashboard', active: true },
  { icon: FileText, label: 'Documents', active: false },
  { icon: Link2, label: 'Manage Linked Accounts', active: false },
  { icon: Mail, label: 'Referrals', active: false },
];

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
            <div className="relative bg-[#F8F9FA] rounded-2xl shadow-2xl border border-[#E5E7EB] overflow-hidden flex">
              <div className="w-[180px] bg-[#F8F9FA] border-r border-[#E5E7EB] flex flex-col">
                <div className="p-4 flex items-center gap-2">
                  <div className="relative">
                    <div className="w-6 h-6 bg-[#013A6F] rotate-45 rounded-sm"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-2 h-2 bg-[#FFCA40] rotate-45 rounded-sm"></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-medium text-[#4B4F53] truncate">Summary</span>
                    <ChevronDown className="w-3 h-3 text-[#4B4F53]" />
                  </div>
                </div>
                
                <nav className="flex-1 px-2 py-2 space-y-0.5">
                  {navItems.map((item, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-[10px] ${
                        item.active 
                          ? 'bg-white text-[#013A6F] font-medium shadow-sm' 
                          : 'text-[#6B7280] hover:bg-white/50'
                      }`}
                    >
                      <item.icon className="w-3 h-3" />
                      <span className="truncate">{item.label}</span>
                    </div>
                  ))}
                </nav>

                <div className="p-3 mx-2 mb-2 bg-white rounded-lg">
                  <div className="flex justify-center mb-1">
                    <div className="relative">
                      <div className="w-5 h-5 bg-[#013A6F] rotate-45 rounded-sm"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-[#FFCA40] rotate-45 rounded-sm"></div>
                      </div>
                    </div>
                  </div>
                  <p className="text-[8px] text-[#6B7280] text-center mb-1.5 leading-tight">
                    Need a new Robora Cash account?
                  </p>
                  <button className="w-full bg-[#FFCA40] text-[#013A6F] text-[8px] font-semibold py-1 rounded">
                    + Add a Cash Account
                  </button>
                </div>

                <div className="px-2 py-2 border-t border-[#E5E7EB] space-y-0.5">
                  <div className="flex items-center gap-2 px-2 py-1.5 text-[10px] text-[#6B7280]">
                    <Settings className="w-3 h-3" />
                    <span>Settings</span>
                  </div>
                  <div className="flex items-center gap-2 px-2 py-1.5 text-[10px] text-[#6B7280]">
                    <LogOut className="w-3 h-3" />
                    <span>Sign Out</span>
                  </div>
                </div>

                <div className="px-2 py-2 border-t border-[#E5E7EB]">
                  <p className="text-[7px] text-[#9CA3AF]">© Robora Financial LLC. All rights reserved.</p>
                </div>
              </div>

              <div className="flex-1 bg-white p-4">
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-[#1A1B1D]">Welcome Sarah!</h3>
                  <p className="text-[10px] text-[#6B7280]">Here are your accounts at a glance</p>
                </div>

                  <div className="grid grid-cols-4 gap-2 mb-4">
                    <div className="bg-[#F8F9FA] rounded-lg p-2 border border-[#E5E7EB]">
                      <p className="text-[8px] text-[#6B7280]">Total Balance</p>
                      <p className="text-[10px] font-bold text-[#1A1B1D]">$15,191,100</p>
                    </div>
                    <div className="bg-[#F8F9FA] rounded-lg p-2 border border-[#E5E7EB]">
                      <p className="text-[8px] text-[#6B7280]">Robora Balance</p>
                      <p className="text-[10px] font-bold text-[#1A1B1D]">$10,791,000</p>
                    </div>
                    <div className="bg-[#F8F9FA] rounded-lg p-2 border border-[#E5E7EB]">
                      <p className="text-[8px] text-[#6B7280]">External Balance</p>
                      <p className="text-[10px] font-bold text-[#1A1B1D]">$4,400,100</p>
                    </div>
                    <div className="bg-[#F8F9FA] rounded-lg p-2 border border-[#E5E7EB]">
                      <p className="text-[8px] text-[#6B7280]">Interest Earned</p>
                      <p className="text-[10px] font-bold text-[#10B981]">$249,676</p>
                    </div>
                  </div>

                <div className="mb-3 flex items-center justify-between">
                  <h4 className="text-xs font-semibold text-[#1A1B1D]">Account Summary</h4>
                  <button className="bg-[#FFCA40] text-[#013A6F] text-[8px] font-semibold px-2 py-1 rounded flex items-center gap-1">
                    <span>↔</span> Transfer between Robora Accts
                  </button>
                </div>

                <div className="border border-[#E5E7EB] rounded-lg overflow-hidden">
                  <div className="grid grid-cols-[1fr_0.8fr_0.8fr_0.8fr_0.6fr_30px] gap-1 px-2 py-1.5 bg-[#F8F9FA] border-b border-[#E5E7EB]">
                    <span className="text-[8px] font-medium text-[#6B7280]">Account Name</span>
                    <span className="text-[8px] font-medium text-[#6B7280]">Total Balance</span>
                    <span className="text-[8px] font-medium text-[#6B7280]">Robora Balance</span>
                    <span className="text-[8px] font-medium text-[#6B7280]">External Balance</span>
                    <span className="text-[8px] font-medium text-[#6B7280]">Interest Earned</span>
                    <span></span>
                  </div>
                  {accounts.map((account, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-[1fr_0.8fr_0.8fr_0.8fr_0.6fr_30px] gap-1 px-2 py-2 border-b border-[#E5E7EB] last:border-0 items-center hover:bg-[#F8F9FA] transition-colors"
                    >
                      <div className="flex items-center gap-1.5">
                        <div className="w-5 h-5 rounded-full bg-[#FFCA40] flex items-center justify-center">
                          <span className="text-[7px] font-semibold text-[#013A6F]">{account.initials}</span>
                        </div>
                        <span className="text-[8px] text-[#1A1B1D] truncate">{account.name}</span>
                      </div>
                      <span className="text-[8px] text-[#1A1B1D]">${account.total.toLocaleString()}</span>
                      <span className="text-[8px] text-[#1A1B1D]">${account.robora.toLocaleString()}</span>
                      <span className="text-[8px] text-[#1A1B1D]">${account.external.toLocaleString()}</span>
                      <span className="text-[8px] text-[#10B981]">${account.interest.toLocaleString()}</span>
                      <ArrowRight className="w-3 h-3 text-[#6B7280]" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
