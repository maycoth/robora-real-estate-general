import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#013A6F] text-white pt-16 pb-8 md:pt-24 md:pb-12">
      <div className="container mx-auto px-6 md:px-10 lg:px-12 max-w-[1280px]">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-16 lg:mb-24">
          
          <div className="lg:w-5/12 space-y-8">
            <Link href="/" className="block relative w-[142px] h-[40px]">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/29262e1d-6af1-47bb-ade3-3c354d057c65-roborafinancial-com/assets/svgs/RdWBCJhSiWMpYFL98WQguHlW28-1.svg" 
                alt="Robora Financial" 
                fill
                className="object-contain"
                priority
              />
            </Link>
            
            <div className="space-y-6 max-w-md">
              <h2 className="text-[28px] md:text-[32px] font-bold leading-[1.2] tracking-tight text-white">
                Want to give your excess cash a boost?
              </h2>
                  <Link
                    href="https://app.roborafinancial.com/signup" 
                    className="inline-flex items-center justify-center bg-[#FFCA40] text-[#013A6F] font-semibold text-base px-6 py-3 rounded-lg shadow-md hover:bg-[#EBAA00] hover:-translate-y-0.5 transition-all duration-300 ease-in-out"
                  >
                  Get Started
                </Link>
            </div>
          </div>

          <div className="lg:w-7/12 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-4 lg:gap-8">
            
            <div className="space-y-6">
              <h3 className="font-bold text-lg md:text-xl text-white">Quick links</h3>
              <ul className="flex flex-col space-y-4">
                <li>
                    <Link href="https://roborafinancial.com/" className="text-base text-gray-200 hover:text-[#FFCA40] transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                    <Link href="https://roborafinancial.com/how-it-works" className="text-base text-gray-200 hover:text-[#FFCA40] transition-colors">
                    How it works
                  </Link>
                </li>
                <li>
                    <Link href="https://roborafinancial.com/who-we-are" className="text-base text-gray-200 hover:text-[#FFCA40] transition-colors">
                    Who we are
                  </Link>
                </li>
                <li>
                    <Link href="#pricing" className="text-base text-gray-200 hover:text-[#FFCA40] transition-colors">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="font-bold text-lg md:text-xl text-white">Resources</h3>
              <ul className="flex flex-col space-y-4">
                <li>
                    <Link href="https://roborafinancial.com/get-help" className="text-base text-gray-200 hover:text-[#FFCA40] transition-colors">
                    FAQs
                  </Link>
                </li>
                <li>
                    <Link href="https://roborafinancial.com/blogs" className="text-base text-gray-200 hover:text-[#FFCA40] transition-colors">
                    Blogs
                  </Link>
                </li>
                <li>
                    <Link href="https://roborafinancial.com/contact-us" className="text-base text-gray-200 hover:text-[#FFCA40] transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="font-bold text-lg md:text-xl text-white">Disclaimer</h3>
              <ul className="flex flex-col space-y-4">
                <li>
                    <Link href="https://roborafinancial.com/policy/privacy" className="text-base text-gray-200 hover:text-[#FFCA40] transition-colors">
                    Privacy policy
                  </Link>
                </li>
                <li>
                    <Link href="https://roborafinancial.com/policy/terms-of-service" className="text-base text-gray-200 hover:text-[#FFCA40] transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>

        <div className="border-t border-white/20 pt-10 space-y-8">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm text-gray-300">
              <div className="space-y-1">
                 <p className="font-medium text-white text-base">support@roborafinancial.com</p>
              </div>
              <p className="text-white">© Robora Financial, LLC. All rights reserved.</p>

          </div>

          <div className="text-[11px] md:text-xs leading-relaxed space-y-4 border-t border-white/10 pt-8" style={{ color: 'white' }}>
            <h4 className="font-bold text-sm mb-2" style={{ color: 'white' }}>Disclaimer</h4>
            <p style={{ color: 'white' }}>
              Robora Financial, LLC (&quot;Robora&quot;) is a financial technology company, not a depository institution, bank, or credit union, and is not itself a FDIC insured company. Robora currently partners with OMB Bank, Member FDIC. By opening an OMB Bank account with Robora, your funds are held in a deposit account at OMB Bank.
            </p>
            <p style={{ color: 'white' }}>
              1. Annual percentage yield (APY) is <span className="font-medium">3.11%</span> effective as of December 11, 2025 and may change at any time, before or after the account is opened, without rate limitation. Rates are determined by varying prevailing economic and business conditions, including the U.S. Federal Reserve interest paid on reserves.
            </p>
            <p style={{ color: 'white' }}>
              2. Robora is not an FDIC-insured depository institution and FDIC insurance only applies to the failure of the bank where your account is maintained.
            </p>
            <p style={{ color: 'white' }}>
              3. There is a free trial for the first 30 days. After which, there is (a) no monthly fee for aggregate average monthly account balances of $100,000 or greater and (b) a fee of $15 for such month the aggregate average monthly account balances are less than $100,000.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
