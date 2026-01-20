'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';

const ASSETS = {
  logo: "https://b0lsqh365peprp3p.public.blob.vercel-storage.com/Logos/robora%20logo.svg"
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
      scrolled ? "bg-[#013A6F]/90 backdrop-blur-md shadow-lg" : "bg-transparent"
    }`}>
        <div className="mx-auto flex h-full max-w-[1280px] items-center justify-between">
          <Link href="https://roborafinancial.com/" className="relative block h-[48px] w-[170px] shrink-0 hover:opacity-90 transition-opacity">
            <Image 
              src={ASSETS.logo} 

            alt="Robora Financial" 
            fill 
            className="object-contain"
            priority
          />
        </Link>



          <div className="hidden lg:flex items-center gap-6">
              <a 
                href="https://app.roborafinancial.com/login" 
                className="text-[16px] font-semibold text-white transition-colors hover:text-[#FFCA40]"
              >
              Login
            </a>
            <Link
              href="#booking"
              className="inline-flex h-[48px] items-center justify-center rounded-[8px] bg-[#FFCA40] px-6 text-[16px] font-semibold text-[#013A6F] shadow-md transition-all hover:bg-[#EBAA00] hover:-translate-y-0.5"
            >
              Get Started
            </Link>
        </div>

          <button 
            className="lg:hidden p-2 text-white hover:text-[#FFCA40] transition-colors"
            aria-label="Open menu"
          >
          <Menu className="h-8 w-8" />
        </button>
      </div>
    </header>
  );
}
