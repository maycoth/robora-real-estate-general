'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Menu } from 'lucide-react';

const ASSETS = {
  logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/29262e1d-6af1-47bb-ade3-3c354d057c65-roborafinancial-com/assets/svgs/RdWBCJhSiWMpYFL98WQguHlW28-1.svg"
};

export default function NavigationHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 h-[80px] w-full px-6 lg:px-10 py-5 transition-all duration-300 ${
      scrolled ? "bg-[#003D7A]/90 backdrop-blur-md shadow-lg" : "bg-transparent"
    }`}>
      <div className="mx-auto flex h-full max-w-[1280px] items-center justify-between">
        <Link href="/" className="relative block h-[40px] w-[142px] shrink-0 hover:opacity-90 transition-opacity">
          <Image 
            src={ASSETS.logo} 
            alt="Robora Financial" 
            fill 
            className="object-contain"
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
          <Link 
            href="#how-it-works" 
            className="text-[16px] font-medium text-white transition-colors hover:text-[#FFC700]"
          >
            How it works
          </Link>
          <Link 
            href="#who-we-are" 
            className="text-[16px] font-medium text-white transition-colors hover:text-[#FFC700]"
          >
            Who we are
          </Link>
          <Link 
            href="#pricing"
            className="text-[16px] font-medium text-white transition-colors hover:text-[#FFC700]"
          >
            Pricing
          </Link>
          <div className="group relative flex cursor-pointer items-center gap-1">
            <span className="text-[16px] font-medium text-white transition-colors hover:text-[#FFC700]">
              Resources
            </span>
            <ChevronDown className="h-4 w-4 text-white transition-colors group-hover:text-[#FFC700]" />
          </div>
        </nav>

        <div className="hidden lg:flex items-center gap-6">
          <a 
            href="#" 
            className="text-[16px] font-semibold text-white transition-colors hover:text-[#FFC700]"
          >
            Login
          </a>
          <a
            href="#"
            className="inline-flex h-[48px] items-center justify-center rounded-[8px] bg-[#FFC700] px-6 text-[16px] font-semibold text-[#003D7A] shadow-md transition-all hover:bg-[#FFB300] hover:-translate-y-0.5"
          >
            Get Started
          </a>
        </div>

        <button 
          className="lg:hidden p-2 text-white hover:text-[#FFC700] transition-colors"
          aria-label="Open menu"
        >
          <Menu className="h-8 w-8" />
        </button>
      </div>
    </header>
  );
}
