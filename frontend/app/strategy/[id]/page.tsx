import Link from "next/link";

export default function StrategyDetailPage() {
  return (
    <div className="bg-surface-container-lowest text-on-surface min-h-screen flex font-body antialiased">
      {/* Top Navigation (Mobile) */}
      <div className="md:hidden w-full h-16 bg-surface-container-lowest flex items-center px-4 fixed top-0 z-50 shadow-sm border-b border-surface-container">
        <span className="text-xl font-bold text-on-surface">Propex</span>
      </div>

      {/* Main Content Canvas - Full width since subpage */}
      <main className="flex-1 p-4 md:p-8 pt-20 md:pt-8 w-full max-w-[1400px] mx-auto flex flex-col gap-8">
        {/* Back Navigation */}
        <Link className="flex items-center gap-2 text-[13px] text-secondary hover:text-primary transition-colors w-fit group" href="/strategy-market">
          <span className="material-symbols-outlined text-[16px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
          Back to Strategy Market
        </Link>

        {/* Header Section */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 pb-4 border-b border-surface-container">
          <div className="flex flex-col gap-1">
            <h1 className="text-[22px] font-bold text-on-surface font-headline tracking-tight leading-none">Aave USDC Leveraged Yield</h1>
            <p className="text-[13px] text-secondary flex items-center gap-1.5">
              by <span className="text-primary font-medium">Agent Alpha</span>
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="px-2.5 py-1 bg-tertiary/10 text-tertiary text-xs font-semibold rounded-sm uppercase tracking-widest">Medium Risk</div>
            <div className="text-[24px] font-bold text-[#4ADE80] tabular-nums leading-none">12.4% <span className="text-xs text-secondary font-normal block text-right mt-1">APY</span></div>
          </div>
        </header>

        {/* Key Metrics Bar */}
        <section className="grid grid-cols-2 md:grid-cols-5 gap-0 bg-surface-container rounded-lg overflow-hidden border border-surface-container-high/50">
          <div className="p-4 flex flex-col gap-1 border-r border-b md:border-b-0 border-surface-container-high/50 hover:bg-surface-container-low transition-colors group">
            <span className="text-xs text-secondary uppercase tracking-widest font-semibold font-label">Expected APY</span>
            <span className="text-lg font-semibold text-on-surface tabular-nums group-hover:text-primary transition-colors">12.4%</span>
          </div>
          <div className="p-4 flex flex-col gap-1 border-r border-b md:border-b-0 border-surface-container-high/50 hover:bg-surface-container-low transition-colors group">
            <span className="text-xs text-secondary uppercase tracking-widest font-semibold font-label">Risk Score</span>
            <span className="text-lg font-semibold text-on-surface tabular-nums group-hover:text-primary transition-colors">38<span className="text-xs text-secondary font-normal">/100</span></span>
          </div>
          <div className="p-4 flex flex-col gap-1 border-r border-b md:border-b-0 border-surface-container-high/50 hover:bg-surface-container-low transition-colors group">
            <span className="text-xs text-secondary uppercase tracking-widest font-semibold font-label">Agent Rep</span>
            <span className="text-lg font-semibold text-on-surface tabular-nums group-hover:text-primary transition-colors">8,200</span>
          </div>
          <div className="p-4 flex flex-col gap-1 border-r border-b md:border-b-0 border-surface-container-high/50 hover:bg-surface-container-low transition-colors group">
            <span className="text-xs text-secondary uppercase tracking-widest font-semibold font-label">Max Slippage</span>
            <span className="text-lg font-semibold text-on-surface tabular-nums group-hover:text-primary transition-colors">0.50%</span>
          </div>
          <div className="p-4 flex flex-col gap-1 hover:bg-surface-container-low transition-colors group">
            <span className="text-xs text-secondary uppercase tracking-widest font-semibold font-label">Min Health</span>
            <span className="text-lg font-semibold text-on-surface tabular-nums group-hover:text-primary transition-colors">1.5x</span>
          </div>
        </section>

        {/* Main Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column (60%) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Strategy Overview */}
            <article className="bg-surface rounded-lg p-6 flex flex-col gap-4 border border-outline-variant/15 shadow-sm">
              <h2 className="text-sm font-semibold text-on-surface uppercase tracking-wider font-headline">Strategy Overview</h2>
              <p className="text-sm text-secondary leading-relaxed">
                This automated strategy deposits USDC into Aave v3 to generate base yield, then recursively borrows against the position up to a strict 1.5x health factor to amplify returns. The agent monitors borrow rates continuously and dynamically adjusts the leverage ratio to optimize net APY while maintaining a safe distance from liquidation thresholds. Recommended for stablecoin holders seeking enhanced yields with managed smart contract risk.
              </p>
            </article>

            {/* Execution Steps */}
            <div className="bg-surface rounded-lg p-6 flex flex-col gap-5 border border-outline-variant/15 shadow-sm">
              <h2 className="text-sm font-semibold text-on-surface uppercase tracking-wider font-headline">Execution Path</h2>
              <div className="flex flex-col gap-0">
                {/* Step 1 */}
                <div className="flex gap-4 p-3 hover:bg-surface-container-low transition-colors -mx-3 rounded">
                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full bg-surface-container flex items-center justify-center text-xs font-bold text-secondary border border-outline-variant/30">1</div>
                    <div className="w-px h-full bg-outline-variant/20 mt-2"></div>
                  </div>
                  <div className="flex flex-col gap-1 pb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-medium text-on-surface bg-surface-container-high px-2 py-0.5 rounded-sm">Aave v3</span>
                    </div>
                    <p className="text-sm text-secondary">Deposit initial USDC collateral into Aave lending pool to begin earning base supply APY.</p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4 p-3 hover:bg-surface-container-low transition-colors -mx-3 rounded">
                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full bg-surface-container flex items-center justify-center text-xs font-bold text-secondary border border-outline-variant/30">2</div>
                    <div className="w-px h-full bg-outline-variant/20 mt-2"></div>
                  </div>
                  <div className="flex flex-col gap-1 pb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-medium text-on-surface bg-surface-container-high px-2 py-0.5 rounded-sm">Aave v3</span>
                    </div>
                    <p className="text-sm text-secondary">Borrow USDC against deposited collateral, maintaining strict initial target Health Factor.</p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-4 p-3 hover:bg-surface-container-low transition-colors -mx-3 rounded">
                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full bg-surface-container flex items-center justify-center text-xs font-bold text-secondary border border-outline-variant/30">3</div>
                    <div className="w-px h-full bg-outline-variant/20 mt-2"></div>
                  </div>
                  <div className="flex flex-col gap-1 pb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-medium text-on-surface bg-surface-container-high px-2 py-0.5 rounded-sm">1inch</span>
                    </div>
                    <p className="text-sm text-secondary">Swap borrowed USDC if needed or route back into deposit pool to loop position.</p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex gap-4 p-3 hover:bg-surface-container-low transition-colors -mx-3 rounded">
                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary border border-primary/30">4</div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-sm">Agent Core</span>
                    </div>
                    <p className="text-sm text-secondary">Continuous monitoring loop initialized. Auto-rebalances or unwinds if HF drops below 1.5x.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance History Placeholder */}
            <div className="bg-surface rounded-lg p-6 flex flex-col gap-4 border border-outline-variant/15 shadow-sm">
              <div className="flex justify-between items-center">
                <h2 className="text-sm font-semibold text-on-surface uppercase tracking-wider font-headline">Performance History</h2>
                <div className="flex bg-surface-container rounded-sm p-0.5 border border-outline-variant/20">
                  <button className="px-3 py-1 text-xs font-medium text-secondary hover:text-on-surface transition-colors">7D</button>
                  <button className="px-3 py-1 text-xs font-medium bg-surface text-on-surface shadow-sm rounded-sm">30D</button>
                  <button className="px-3 py-1 text-xs font-medium text-secondary hover:text-on-surface transition-colors">90D</button>
                </div>
              </div>
              <div className="h-48 w-full bg-surface-container-lowest border border-outline-variant/10 rounded relative overflow-hidden flex flex-col">
                {/* Mock Chart Grid */}
                <div className="absolute inset-0 grid grid-rows-4 grid-cols-6 opacity-5 pointer-events-none">
                  <div className="border-b border-r border-white"></div><div className="border-b border-r border-white"></div><div className="border-b border-r border-white"></div><div className="border-b border-r border-white"></div><div className="border-b border-r border-white"></div><div className="border-b border-white"></div>
                  <div className="border-b border-r border-white"></div><div className="border-b border-r border-white"></div><div className="border-b border-r border-white"></div><div className="border-b border-r border-white"></div><div className="border-b border-r border-white"></div><div className="border-b border-white"></div>
                  <div className="border-b border-r border-white"></div><div className="border-b border-r border-white"></div><div className="border-b border-r border-white"></div><div className="border-b border-r border-white"></div><div className="border-b border-r border-white"></div><div className="border-b border-white"></div>
                  <div className="border-r border-white"></div><div className="border-r border-white"></div><div className="border-r border-white"></div><div className="border-r border-white"></div><div className="border-r border-white"></div><div></div>
                </div>
                {/* Mock Area Chart */}
                <div className="mt-auto h-[60%] w-full bg-gradient-to-t from-primary/20 to-transparent relative border-t border-primary/50">
                  <div className="absolute -top-2 left-1/4 w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(180,197,255,0.8)]"></div>
                  <div className="absolute -top-6 left-1/2 w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(180,197,255,0.8)]"></div>
                  <div className="absolute -top-1 right-1/4 w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(180,197,255,0.8)]"></div>
                </div>
              </div>
              <div className="flex gap-8 pt-2">
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-secondary font-label">Avg APY (30D)</span>
                  <span className="text-sm font-medium text-on-surface tabular-nums">11.8%</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-secondary font-label">Peak APY</span>
                  <span className="text-sm font-medium text-on-surface tabular-nums">14.2%</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-secondary font-label">Total Executions</span>
                  <span className="text-sm font-medium text-on-surface tabular-nums">1,420</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (40%) */}
          <aside className="lg:col-span-5 flex flex-col gap-6">
            {/* Allocate Capital */}
            <div className="bg-surface-container rounded-lg p-6 flex flex-col gap-5 border border-primary/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
              <h2 className="text-sm font-semibold text-on-surface uppercase tracking-wider font-headline">Allocate Capital</h2>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-secondary">Amount (USDC)</span>
                  <span className="text-secondary font-medium">Available: <span className="text-on-surface">2,147.38</span></span>
                </div>
                <div className="relative flex items-center bg-surface-container-lowest border border-outline-variant/20 rounded-md focus-within:border-primary/50 transition-colors">
                  <input className="w-full bg-transparent border-none text-on-surface text-lg py-3 px-4 focus:ring-0 tabular-nums placeholder-secondary/50" placeholder="0.00" type="text" />
                  <button className="absolute right-2 text-xs font-medium text-primary hover:bg-primary/10 px-2 py-1 rounded transition-colors uppercase tracking-wide">Max</button>
                </div>
              </div>
              <div className="bg-surface-container-low p-4 rounded border border-outline-variant/10 flex flex-col gap-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-secondary">Expected 1Y Return</span>
                  <span className="text-[#4ADE80] font-medium tabular-nums">+ $0.00</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-secondary">Network Fee est.</span>
                  <span className="text-on-surface tabular-nums">~$1.20</span>
                </div>
              </div>
              <button className="w-full bg-gradient-to-b from-primary to-primary-container text-on-primary-container font-bold py-3.5 rounded-lg shadow-sm hover:opacity-90 active:scale-[0.98] transition-all flex justify-center items-center gap-2 mt-2">
                <span className="material-symbols-outlined text-[18px]">bolt</span>
                Approve &amp; Execute
              </button>
            </div>

            {/* Risk Analysis */}
            <div className="bg-surface rounded-lg p-6 flex flex-col gap-5 border border-outline-variant/15 shadow-sm">
              <h2 className="text-sm font-semibold text-on-surface uppercase tracking-wider font-headline">Risk Profile</h2>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-secondary">Smart Contract Risk</span>
                    <span className="text-on-surface">Low</span>
                  </div>
                  <div className="w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                    <div className="h-full bg-[#4ADE80] w-[20%]"></div>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-secondary">Liquidation Risk</span>
                    <span className="text-tertiary">Medium</span>
                  </div>
                  <div className="w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                    <div className="h-full bg-tertiary w-[50%]"></div>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-secondary">Peg Risk (USDC)</span>
                    <span className="text-on-surface">Very Low</span>
                  </div>
                  <div className="w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                    <div className="h-full bg-[#4ADE80] w-[5%]"></div>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-secondary">Agent Centralization</span>
                    <span className="text-on-surface">Low</span>
                  </div>
                  <div className="w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                    <div className="h-full bg-[#4ADE80] w-[25%]"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Agent Info */}
            <div className="bg-surface rounded-lg p-6 flex flex-col gap-4 border border-outline-variant/15 shadow-sm">
              <div className="flex justify-between items-start">
                <h2 className="text-sm font-semibold text-on-surface uppercase tracking-wider font-headline">Strategy Publisher</h2>
                <span className="material-symbols-outlined text-secondary text-[18px]">verified</span>
              </div>
              <div className="flex items-center gap-4 mt-2">
                <div className="w-12 h-12 rounded bg-surface-container border border-outline-variant/20 flex items-center justify-center overflow-hidden">
                  <span className="material-symbols-outlined text-primary text-[24px]">robot_2</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-on-surface">Agent Alpha</span>
                  <span className="text-xs text-secondary tabular-nums font-mono">0x4F9...A1bC</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-2 pt-4 border-t border-outline-variant/10">
                <div className="flex flex-col gap-1">
                  <span className="text-[11px] text-secondary uppercase tracking-wider font-label">Success Rate</span>
                  <span className="text-sm font-semibold text-on-surface tabular-nums">98.4%</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[11px] text-secondary uppercase tracking-wider font-label">Active Users</span>
                  <span className="text-sm font-semibold text-on-surface tabular-nums">1,204</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
