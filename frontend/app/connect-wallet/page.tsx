"use client";

import Link from "next/link";
import { useWallet } from "@/context/WalletContext";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ConnectWalletPage() {
  const { connectWallet, isConnected } = useWallet();
  const router = useRouter();

  useEffect(() => {
    if (isConnected) {
      router.push("/vault");
    }
  }, [isConnected, router]);
  return (
    <div className="text-on-surface min-h-screen flex flex-col relative overflow-hidden antialiased selection:bg-surface-variant selection:text-primary bg-[#0A0B0D]">
      {/* TopNavBar */}
      <header className="docked full-width top-0 no-border flat no shadows z-50 bg-[#0A0B0D]">
        <div className="flex justify-between items-center w-full px-8 md:px-12 py-6 md:py-8 max-w-[1920px] mx-auto">
          {/* Brand & Subtitle */}
          <div className="flex flex-col gap-1">
            <span className="text-lg font-bold text-white tracking-tight">Propex</span>
            <span className="text-[11px] uppercase tracking-[0.05em] text-[#A0A3A8] font-medium hidden sm:block">Trustless AI Strategy Execution</span>
          </div>
          {/* Trailing Actions */}
          <div className="flex items-center gap-4">
            <button onClick={() => connectWallet()} className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-primary text-on-primary rounded-xl font-bold text-sm tracking-wide uppercase hover:opacity-90 transition-opacity">
              Connect Wallet
            </button>
            <button aria-label="Wallet" className="p-2 text-primary hover:text-white transition-colors duration-150 rounded-lg hover:bg-surface-container-low flex items-center justify-center">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>account_balance_wallet</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 relative z-10 w-full max-w-[1920px] mx-auto">
        <div className="w-full max-w-[440px] flex flex-col items-center text-center space-y-10 animate-fade-in">
          {/* Hero Typography */}
          <div className="space-y-4 w-full">
            <h1 className="text-[40px] md:text-[44px] leading-[1.1] font-bold text-primary tracking-tight font-headline">
              Institutional DeFi.<br/>AI-Executed.
            </h1>
            <p className="text-base text-secondary font-body leading-relaxed max-w-[380px] mx-auto">
              Connect your wallet to access the Propex vault, explore AI strategy agents, and execute yield strategies on-chain.
            </p>
          </div>
          {/* Primary Action */}
          <div className="w-full space-y-4">
            {/* Main Connect Button - Tonal Shift Style per Design System */}
            <button onClick={() => connectWallet()} className="w-full h-[52px] bg-primary text-on-primary font-bold text-[15px] uppercase tracking-wide rounded-[12px] flex items-center justify-center gap-2 hover:opacity-90 transition-opacity bg-gradient-to-b from-primary to-primary-container shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">
              <span>Connect Wallet</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
            {/* Trust Metadata */}
            <div className="flex items-center justify-center gap-1.5 text-[13px] text-secondary font-label uppercase tracking-[0.05em]">
              <span className="material-symbols-outlined text-[14px]">lock</span>
              <span>Non-custodial. Your keys, your funds.</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="docked full-width bottom-0 bg-transparent flat z-10 w-full">
        <div className="fixed bottom-0 w-full flex justify-center items-center gap-12 pb-12">
          <Link className="text-[13px] font-medium uppercase tracking-widest font-['Inter'] text-[#A0A3A8] hover:text-white transition-opacity" href="#">Docs</Link>
          <Link className="text-[13px] font-medium uppercase tracking-widest font-['Inter'] text-[#A0A3A8] hover:text-white transition-opacity" href="#">GitHub</Link>
          <span className="hidden">Propex Institutional</span>
        </div>
      </footer>

      {/* Background Accents (Subtle Institutional Depth) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden flex justify-center">
        {/* Subtle radial glow behind the main text to separate from pure black slightly */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-surface-container-lowest rounded-full blur-[120px] opacity-40"></div>
      </div>
    </div>
  );
}
