import { Shield, Building2, Lock } from 'lucide-react';

export default function SafetySecuritySection() {
  return (
    <section className="bg-[#003D7A] text-white py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-10 max-w-[1280px]">
        <div className="text-center mb-16">
          <span className="text-[#FFC700] font-semibold text-sm tracking-wider uppercase mb-4 block">
            Security You Can Trust
          </span>
          <h2 className="text-3xl md:text-[44px] font-bold leading-[1.2] text-white max-w-3xl mx-auto mb-4">
            Tens of Millions in FDIC Protection
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            As a property manager, you have a fiduciary responsibility to protect tenant deposits. We take that seriously.
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
                <p className="text-[#FFC700] text-sm mb-2">With Robora</p>
                <p className="text-[#FFC700] font-bold text-xl mb-3">$10M+</p>
                <div className="h-48 bg-gradient-to-t from-[#FFC700] to-[#FFD740] rounded-lg relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Shield className="w-12 h-12 text-[#003D7A]" />
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
              <div className="w-12 h-12 bg-[#FFC700]/20 rounded-xl flex items-center justify-center shrink-0">
                <Shield className="w-6 h-6 text-[#FFC700]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Extended FDIC Coverage</h3>
                <p className="text-white/70">
                  Access tens of millions in aggregate FDIC insurance through our partner bank, OMB Bank, and the IntraFi network.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#2E7FD6]/20 rounded-xl flex items-center justify-center shrink-0">
                <Building2 className="w-6 h-6 text-[#2E7FD6]" />
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
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.8 13.2h-3.6v3.6h3.6v-3.6zm0-7.2h-3.6v3.6h3.6V6zm7.2 7.2h-3.6v3.6h3.6v-3.6zm0-7.2h-3.6v3.6h3.6V6z" />
              </svg>
              <span className="text-xl font-bold">PLAID</span>
            </div>
            <p className="text-white/60 text-sm">Secure Account Linking</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-xl font-bold">OMB Bank</span>
            </div>
            <p className="text-white/60 text-sm">FDIC Member Banking Partner</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-2 mb-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white transform rotate-90">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              <span className="text-xl font-bold">ALLOY</span>
            </div>
            <p className="text-white/60 text-sm">Identity Verification</p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-[10px] md:text-xs leading-5 text-white/40 max-w-4xl mx-auto text-center">
          <p>
            *Your funds are held with FDIC-insured depository institutions, not with Robora. Robora is not a bank. Banking services are provided by OMB Bank, member FDIC, and deposits are placed through IntraFi&apos;s ICS service. Certain conditions must be satisfied for &quot;pass-through&quot; FDIC deposit insurance coverage to apply.
          </p>
        </div>
      </div>
    </section>
  );
}
