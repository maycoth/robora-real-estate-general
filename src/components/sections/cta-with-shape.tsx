import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function CtaWithShape() {
  return (
    <section className="relative w-full bg-white font-sans overflow-hidden">
      <div className="container mx-auto px-6 md:px-10 py-16 md:py-24 lg:py-32">
        
          {/* Top Centered Section */}
          <div className="max-w-4xl mx-auto text-center mb-20 md:mb-28 lg:mb-32">
            <p className="text-[#4B4F53] font-semibold tracking-[0.2em] text-xs md:text-sm uppercase mb-6 md:mb-8">
              Others
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-[#013A6F] leading-[1.15] md:leading-[1.15] tracking-tight">
              Do more of what you enjoy.<br />
              <span className="text-[#013A6F]">Leave cash management to us.</span>
            </h2>
          </div>

        {/* Bottom Split Section */}
        <div className="flex flex-col lg:flex-row items-stretch">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2 lg:pr-16 xl:pr-24 pb-12 lg:pb-0 z-10 flex flex-col justify-start pt-8 lg:pt-16">
            <h3 className="text-3xl md:text-[36px] font-bold text-[#013A6F] leading-tight mb-10 md:mb-14">
              Robora makes it effortless
            </h3>
            
            <div className="space-y-6 md:space-y-8">
              <FeatureItem text="KEEP YOUR BANK" />
              <FeatureItem text="AUTOMATE YOUR CASH" />
              <FeatureItem text="MAXIMIZE YOUR EARNINGS" />
            </div>
          </div>

          {/* Right Content / Blue Shape */}
          <div className="w-full lg:w-1/2 relative min-h-[300px] lg:min-h-auto">
            {/* 
              Background Shape Container 
              - Positioned absolutely to extend to the viewport edge on the right
              - Starts from the container's halfway point
              - Rounded top-left corner
            */}
              <div className="absolute top-0 left-0 w-[200vw] h-[120%] -translate-y-0 lg:-translate-y-12 bg-[#013A6F] rounded-tl-[60px] md:rounded-tl-[80px]" />
            
            {/* 
              This area is visually empty in the provided section screenshots 
              but serves as the backing for the step-by-step content in the full design.
              We keep it as the "dark blue background shape" requested.
            */}
          </div>

        </div>
      </div>
    </section>
  );
}

function FeatureItem({ text }: { text: string }) {
  return (
    <div className="group flex items-center space-x-6 cursor-pointer select-none">
      <div className="flex-shrink-0 w-4 h-5 md:w-5 md:h-6 relative">
        <svg 
          viewBox="0 0 14 16" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full text-[#013A6F] transition-transform duration-300 group-hover:translate-x-1"
        >
          <path 
            d="M13 8L1 15L1 1L13 8Z" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
        </svg>
      </div>
        <span className="text-sm md:text-base font-bold tracking-[0.15em] text-[#013A6F] uppercase transition-opacity duration-300 group-hover:opacity-80">
        {text}
      </span>
    </div>
  );
}