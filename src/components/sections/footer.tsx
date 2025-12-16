import Link from "next/link";
import Image from "next/image";
import { Linkedin } from "lucide-react";

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
                <div className="flex items-center gap-4">
                   <a href="mailto:support@roborafinancial.com" className="font-medium text-white text-base hover:text-[#FFCA40] transition-colors">support@roborafinancial.com</a>
                   <a href="https://www.linkedin.com/company/robora-financial/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FFCA40] transition-colors">
                     <Linkedin className="w-5 h-5" />
                   </a>
                </div>
                <p className="text-white">© Robora Financial, LLC. All rights reserved.</p>

            </div>

          <div className="text-[11px] md:text-xs leading-relaxed space-y-4 border-t border-white/10 pt-8" style={{ color: 'white' }}>
              <h4 className="font-bold text-sm mb-2" style={{ color: 'white' }}>Disclaimer</h4>
              <p style={{ color: 'white' }}>
                Robora Financial, LLC (&quot;Robora&quot;) is a financial technology company, not a depository institution, bank, or credit union, and is not itself a FDIC insured company. Robora currently partners with OMB Bank, Member FDIC. By opening an OMB Bank account with Robora, your funds are held in a deposit account at OMB Bank.
              </p>
<p style={{ color: 'white' }}>
                  Annual percentage yield (APY) is 3.11% effective as of December 11, 2025 and may change at any time, before or after the account is opened, without rate limitation. Rates are determined by varying prevailing economic and business conditions, including the U.S. Federal Reserve interest paid on reserves.
                </p>
              <p style={{ color: 'white' }}>
                2. Robora is not an FDIC-insured depository institution and FDIC insurance only applies to the failure of the bank where your account is maintained. By opening an account through Robora, Customers deposit their funds into either:
              </p>
<p style={{ color: 'white', marginLeft: '1.5rem' }}>
                  A deposit account at OMB Bank, Member FDIC, and held by OMB Bank, with such funds (combined with any other of such Customers funds at OMB) FDIC Insured up to the current standard maximum deposit insurance amount of $250,000 (&quot;SMDIA&quot;); or a deposit account at OMB Bank, which sweeps those funds into deposit accounts across a network of FDIC-insured banks for access to millions of FDIC-insurance in aggregate across the accounts. Under this program, the Customer&apos;s funds are placed into deposit accounts across a network of FDIC-insured banks for up to the current SMDIA of $250,000 per eligible depositor, per receiving bank, for each ownership capacity or category, including any other balances they may hold at that receiving bank directly or indirectly through other intermediaries, including broker-dealers. OMB Bank uses a third-party vendor and agent to help administer this deposit placement process. View the <Link href="https://www.intrafi.com/network-banks" className="underline hover:text-[#FFCA40]">Institution List</Link> for a list of the banks and savings associations with which Robora and OMB Bank have a business relationship for the placement of deposits at receiving banks, and into which your deposits may be placed, subject to the <Link href="https://roborafinancial.com/policy/terms-of-service" className="underline hover:text-[#FFCA40]">Terms of Service</Link> and any opt-outs by OMB Bank or you. You should review the Institution list and opt-out of any particular institution to which you do not want us to allocate your funds. Certain conditions must be met to obtain such insurance and <Link href="https://beta.roborafinancial.com/ICS_Deposit_Placement_Agreement.pdf" className="underline hover:text-[#FFCA40]">Terms and restrictions apply</Link>.
                </p>
              <p style={{ color: 'white' }}>
                Your account with Robora and all services are subject to the <Link href="https://roborafinancial.com/policy/terms-of-service" className="underline hover:text-[#FFCA40]">Terms of Service</Link>, and there are no other applicable terms, representations or warranties, express or implied, except as expressly set forth in the Terms of Service. If you have any questions regarding your account, please contact <a href="mailto:support@roborafinancial.com" className="underline hover:text-[#FFCA40]">support@roborafinancial.com</a>
              </p>
              <p style={{ color: 'white' }}>
                3. There is a free trial for the first 30 days. After which, there is (a) no monthly fee for aggregate average monthly account balances of $100,000 or greater and (b) a fee of $15 for such month the aggregate average monthly account balances are less than $100,000. &quot;Aggregate average monthly account balances&quot; is the daily average deposit balance of the Robora account or accounts for a single Robora login profile.
              </p>
            </div>
        </div>
      </div>
    </footer>
  );
}
