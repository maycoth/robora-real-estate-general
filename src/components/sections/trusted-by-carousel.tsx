'use client';

import React from 'react';
import Image from 'next/image';

const logos = [
  { name: 'Brandon', url: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/29262e1d-6af1-47bb-ade3-3c354d057c65-roborafinancial-com/assets/images/mnULoWzps5jmb4B2dvtbnOQmjbw-1.png', width: 1536 },
  { name: 'Luquire', url: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/29262e1d-6af1-47bb-ade3-3c354d057c65-roborafinancial-com/assets/images/VYEOi4UxdMvVC5K9rxVgTFngPE-2.png', width: 2700 },
  { name: 'Saratoga', url: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/29262e1d-6af1-47bb-ade3-3c354d057c65-roborafinancial-com/assets/images/iVErFkJVWtK90XC8Vv5Qmwmkno-3.png', width: 1423 },
  { name: 'Tablerock', url: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/29262e1d-6af1-47bb-ade3-3c354d057c65-roborafinancial-com/assets/images/3RyBvfaM5bD7JZtCwpnHQrvMA9w-4.png', width: 1024 },
  { name: 'Duvalla', url: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/29262e1d-6af1-47bb-ade3-3c354d057c65-roborafinancial-com/assets/images/xBrJA6GS0f3PcZBBMwfjobHsNEU-5.png', width: 1024 },
  { name: 'Columbia', url: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/29262e1d-6af1-47bb-ade3-3c354d057c65-roborafinancial-com/assets/images/ZlpIbfRK4uhgrasIozd6K4PG58w-6.png', width: 1000 },
  { name: 'Anderson', url: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/29262e1d-6af1-47bb-ade3-3c354d057c65-roborafinancial-com/assets/images/aRwGMGEescXKB18pKMwLKczaJJI-7.png', width: 1950 },
  { name: 'Abacus', url: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/29262e1d-6af1-47bb-ade3-3c354d057c65-roborafinancial-com/assets/images/MqQ5O65O2T2gVD9uFn95hCElwjo-8.png', width: 1247 },
  { name: 'TrackHawk', url: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/29262e1d-6af1-47bb-ade3-3c354d057c65-roborafinancial-com/assets/images/Bo8JfcMhdupeLDRrSkBQkFPPc-9.png', width: 1024 },
  { name: 'River Pools', url: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/29262e1d-6af1-47bb-ade3-3c354d057c65-roborafinancial-com/assets/images/5uUeRNRqoaosRMtTiMllRI5qJw-10.png', width: 1024 },
];

export default function TrustedByCarousel() {
  return (
    <section className="w-full py-12 md:py-16 bg-secondary overflow-hidden font-[family-name:var(--font-inter)] border-b border-border/50">
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>

      <div className="container mx-auto px-4 mb-8">
        <p className="text-center text-base sm:text-lg font-normal text-muted-foreground tracking-wide">
          Trusted by CRE Firms Nationwide
        </p>
      </div>

      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 w-24 sm:w-32 bg-gradient-to-r from-secondary to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 sm:w-32 bg-gradient-to-l from-secondary to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-scroll group hover:[animation-play-state:paused]">
          <div className="flex items-center gap-12 sm:gap-16 md:gap-24 pr-12 sm:pr-16 md:pr-24">
            {logos.map((logo, index) => (
              <div 
                key={`logo-1-${index}`} 
                className="relative h-8 sm:h-10 w-auto min-w-[100px] grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 flex items-center justify-center"
              >
                <Image 
                  src={logo.url} 
                  alt={`${logo.name} logo`} 
                  height={80} 
                  width={logo.width} 
                  className="h-full w-auto object-contain select-none"
                  draggable={false}
                />
              </div>
            ))}
          </div>

          <div className="flex items-center gap-12 sm:gap-16 md:gap-24 pr-12 sm:pr-16 md:pr-24">
            {logos.map((logo, index) => (
              <div 
                key={`logo-2-${index}`} 
                className="relative h-8 sm:h-10 w-auto min-w-[100px] grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 flex items-center justify-center"
              >
                <Image 
                  src={logo.url} 
                  alt={`${logo.name} logo`} 
                  height={80} 
                  width={logo.width} 
                  className="h-full w-auto object-contain select-none"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
