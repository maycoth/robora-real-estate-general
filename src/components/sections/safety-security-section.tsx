import Link from 'next/link';
import { Shield, Building2, Lock } from 'lucide-react';

export default function SafetySecuritySection() {
  return (
    <section className="bg-[#013A6F] text-white py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-10 max-w-[1280px]">
        <div className="text-center mb-16">
          <span className="text-[#FFCA40] font-semibold text-sm tracking-wider uppercase mb-4 block">
            Security You Can Trust
          </span>
          <h2 className="text-3xl md:text-[44px] font-bold leading-[1.2] text-white max-w-3xl mx-auto mb-4">
            Tens of Millions in FDIC Protection
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            As a fiduciary, you have a responsibility to protect company funds. We take that seriously.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="flex items-end gap-8 mb-8">
              <div className="flex-1">
                <p className="text-white/60 text-sm mb-2">Standard FDIC</p>
                <p className="text-white font-bold text-xl mb-3">$250,000</p>
                <div className="h-20 bg-white/20 rounded-lg"></div>
              </div>
              <div className="flex-1">
                <p className="text-[#FFCA40] text-sm mb-2">With Robora</p>
                  <p className="text-[#FFCA40] font-bold text-xl mb-3">$10M+</p>
                  <div className="h-48 bg-gradient-to-t from-[#FFCA40] to-[#EBAA00] rounded-lg relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Shield className="w-12 h-12 text-[#013A6F]" />
                    </div>
                  </div>
              </div>
            </div>
            <p className="text-white/70 text-sm">
              Through our partner bank network, we spread your deposits across multiple FDIC-insured institutions, providing coverage far beyond the standard $250K limit.
            </p>
          </div>

          <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#FFCA40]/20 rounded-xl flex items-center justify-center shrink-0">
                  <Shield className="w-6 h-6 text-[#FFCA40]" />
                </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Extended FDIC Coverage</h3>
                <p className="text-white/70">
                  Access tens of millions in aggregate FDIC insurance through our partner bank, OMB Bank, and the IntraFi network.
                </p>
              </div>
            </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#FFCA40]/20 rounded-xl flex items-center justify-center shrink-0">
                  <Building2 className="w-6 h-6 text-[#FFCA40]" />
                </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Trusted Bank Partners</h3>
                <p className="text-white/70">
                  Your funds are held with FDIC-insured depository institutions. Banking services provided by OMB Bank, member FDIC.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#10B981]/20 rounded-xl flex items-center justify-center shrink-0">
                <Lock className="w-6 h-6 text-[#10B981]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Secure Account Linking</h3>
                <p className="text-white/70">
                  Bank-level security powered by Plaid for secure account connections. Identity verification through Alloy.
                </p>
              </div>
            </div>
          </div>
        </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/10">
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center gap-2 mb-3 h-10">
                  <img src="https://b0lsqh365peprp3p.public.blob.vercel-storage.com/Logos/plaid%20white%20transparent.png" alt="Plaid" className="h-8 w-auto object-contain" />
                </div>
                <p className="text-white/60 text-sm">Secure Account Linking</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="flex items-center gap-2 mb-3 h-10">
                  <img src="https://b0lsqh365peprp3p.public.blob.vercel-storage.com/Logos/omb%20white%20transparent.png" alt="OMB Bank" className="h-10 w-auto object-contain" />
                </div>
                <p className="text-white/60 text-sm">FDIC Member Banking Partner</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="flex items-center gap-2 mb-3 h-10">
                  <img src="https://b0lsqh365peprp3p.public.blob.vercel-storage.com/Logos/alloy%20white%20transparent.png" alt="Alloy" className="h-8 w-auto object-contain" />
                </div>
                <p className="text-white/60 text-sm">Identity Verification</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link
                href="#booking"
                className="inline-flex px-8 py-4 text-base font-semibold text-[#013A6F] bg-[#FFCA40] rounded-lg hover:bg-[#EBAA00] transition-all duration-300 shadow-lg"
              >
                Schedule a Demo
              </Link>
            </div>

            <p className="text-xs text-white/50 mt-10 max-w-4xl mx-auto leading-relaxed text-center">
              *Your funds are held with FDIC-insured² depository institutions, not with Robora. Robora is not a bank. We are a financial technology company and your &quot;robo&quot; cash advisor empowering the ability to find safe, high-yielding returns. Banking services are provided by OMB Bank, member FDIC, and OMB Bank will place deposits through IntraFi&apos;s ICS service, which is the largest bank network of its kind, and subject to the ICS Deposit Placement Agreement. Certain conditions must be satisfied for &quot;pass-through&quot; FDIC deposit insurance coverage to apply.
            </p>

        </div>
    </section>
  );
}
