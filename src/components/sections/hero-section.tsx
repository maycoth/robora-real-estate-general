"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Building2, Shield, TrendingUp } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#003D7A] via-[#0A5BA8] to-[#003D7A] text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-1/4 w-96 h-96 bg-[#FFC700]/10 rounded-full blur-3xl" />
        <div className="absolute -right-20 bottom-1/4 w-96 h-96 bg-[#2E7FD6]/20 rounded-full blur-3xl" />
      </div>

      <div className="absolute left-0 top-1/2 -translate-y-1/2 select-none pointer-events-none z-0 hidden lg:block">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/29262e1d-6af1-47bb-ade3-3c354d057c65-roborafinancial-com/assets/svgs/aFZmk2m18goD2LCFSvzrcPet0gM-2.svg"
          alt=""
          width={291}
          height={455}
          className="opacity-40 mix-blend-screen"
        />
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none z-0 hidden lg:block">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/29262e1d-6af1-47bb-ade3-3c354d057c65-roborafinancial-com/assets/svgs/5W1aqDqafcbcrdyzBx6AYKNIsuo-3.svg"
          alt=""
          width={292}
          height={455}
          className="opacity-40 mix-blend-screen"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center px-6 pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-44 lg:pb-32 container mx-auto text-center max-w-[1280px]">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
          <Building2 className="w-4 h-4 text-[#FFC700]" />
          <span className="text-sm font-medium text-white/90">Built for Apartment Management Companies</span>
        </div>

        <h1 className="mb-6 font-bold leading-[1.08] tracking-tight text-white text-4xl md:text-5xl lg:text-[60px] max-w-5xl mx-auto">
          Turn Idle Apartment Funds
          <br />
          <span className="text-[#FFC700]">Into Earning Assets</span>
        </h1>

        <p className="mb-8 text-lg md:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed">
          Your security deposits, operating accounts, and reserves could be earning{" "}
          <span className="font-semibold text-[#FFC700]">3.11% APY</span> instead of sitting dormant.
        </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 w-full sm:w-auto">
              <Link
                href="https://roborafinancial.com/book-a-demo"
                className="group flex items-center justify-center w-full sm:w-auto px-8 py-4 text-base font-semibold text-[#003D7A] bg-[#FFC700] rounded-lg hover:bg-[#FFD740] hover:-translate-y-0.5 shadow-lg shadow-[#FFC700]/25 transition-all duration-300 min-w-[200px]"
              >
                Schedule a Demo
              </Link>
          </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="flex items-center gap-3 px-5 py-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <Shield className="w-5 h-5 text-[#FFC700] shrink-0" />
            <span className="text-sm text-white/90">Tens of Millions in FDIC Coverage</span>
          </div>
          <div className="flex items-center gap-3 px-5 py-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <TrendingUp className="w-5 h-5 text-[#FFC700] shrink-0" />
            <span className="text-sm text-white/90">3.11% APY on All Accounts</span>
          </div>
          <div className="flex items-center gap-3 px-5 py-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <Building2 className="w-5 h-5 text-[#FFC700] shrink-0" />
            <span className="text-sm text-white/90">One Dashboard for All Properties</span>
          </div>
        </div>
      </div>
    </section>
  );
}
