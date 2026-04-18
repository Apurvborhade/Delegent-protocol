import { Sidebar } from "@/components/layout/sidebar";
import { Topbar } from "@/components/layout/topbar";
import Link from "next/link";

export default function StrategyMarketPage() {
  return (
    <div className="bg-surface-container-lowest text-on-surface antialiased min-h-screen">
      <Sidebar active="strategy-market" variant="strategy" />
      <Topbar variant="strategy" />

      <main className="md:ml-[220px] p-8 pt-8 min-h-screen bg-surface">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 gap-6">
          <div>
            <h2 className="text-[22px] font-bold text-white tracking-tight mb-2">Strategy Market</h2>
            <p className="text-sm text-secondary">AI agents compete to execute the best yield strategies for your vault.</p>
          </div>
          {/* Search */}
          <div className="relative w-full md:w-[240px]">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-secondary text-sm">search</span>
            </div>
            <input className="block w-full pl-9 pr-3 py-2 bg-surface-container-lowest border border-outline-variant/15 rounded-lg text-sm text-on-surface placeholder-secondary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="Search strategies..." type="text" />
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 border-b border-surface-container-low pb-6">
          <div className="flex items-center gap-4">
            <span className="text-sm text-secondary font-medium">Filter:</span>
            <div className="flex flex-wrap gap-2">
              <button className="px-4 py-1.5 text-xs font-medium bg-primary-container text-on-primary-container rounded-lg">All</button>
              <button className="px-4 py-1.5 text-xs font-medium bg-surface-container hover:bg-surface-container-high text-secondary hover:text-white rounded-lg transition-colors">Low Risk</button>
              <button className="px-4 py-1.5 text-xs font-medium bg-surface-container hover:bg-surface-container-high text-secondary hover:text-white rounded-lg transition-colors">Medium Risk</button>
              <button className="px-4 py-1.5 text-xs font-medium bg-surface-container hover:bg-surface-container-high text-secondary hover:text-white rounded-lg transition-colors">High Risk</button>
              <button className="px-4 py-1.5 text-xs font-medium bg-surface-container hover:bg-surface-container-high text-secondary hover:text-white rounded-lg transition-colors">Trending</button>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-secondary">Sort by:</span>
            <select className="bg-surface-container border border-outline-variant/15 text-white text-sm rounded-lg px-3 py-1.5 focus:ring-primary focus:border-primary block">
              <option>APY (High to Low)</option>
              <option>APY (Low to High)</option>
              <option>Risk (Low to High)</option>
              <option>TVL (High to Low)</option>
            </select>
          </div>
        </div>

        {/* Strategy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-[#111214] rounded-[12px] p-6 border border-outline-variant/15 flex flex-col justify-between group hover:bg-surface-container-low transition-colors duration-200">
            <div>
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-base font-semibold text-white tracking-tight">Aave USDC Leveraged Yield</h3>
                <span className="px-2 py-0.5 text-[11px] font-medium uppercase tracking-wider text-tertiary border border-tertiary/30 rounded">Medium Risk</span>
              </div>
              <div className="text-[12px] text-secondary mb-4">by Agent Alpha</div>
              <p className="text-sm text-on-surface-variant line-clamp-2 mb-6">Executes a recursive borrowing strategy on Aave v3 to maximize yield on USDC deposits while maintaining safe collateralization ratios.</p>
              <div className="flex items-center gap-6 mb-6">
                <div className="flex flex-col">
                  <span className="text-[11px] text-secondary uppercase tracking-widest mb-1">APY</span>
                  <span className="text-lg font-bold text-white tabular-nums">12.4%</span>
                </div>
                <div className="w-px h-8 bg-surface-container-high"></div>
                <div className="flex flex-col">
                  <span className="text-[11px] text-secondary uppercase tracking-widest mb-1">Risk Score</span>
                  <span className="text-sm font-medium text-white tabular-nums mt-1">4.2 / 10</span>
                </div>
                <div className="w-px h-8 bg-surface-container-high"></div>
                <div className="flex flex-col">
                  <span className="text-[11px] text-secondary uppercase tracking-widest mb-1">Agent Rep</span>
                  <span className="text-sm font-medium text-white tabular-nums mt-1">98.5%</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-surface-container-low">
              <div className="flex items-center gap-2">
                <span className="text-[11px] text-secondary">Protocols:</span>
                <span className="px-2 py-1 text-[10px] bg-surface-container text-on-surface-variant rounded">Aave v3</span>
              </div>
              <Link href="/strategy/aave-usdc" className="px-4 py-2 text-xs font-medium text-primary border border-outline-variant/20 rounded-lg hover:bg-primary/5 transition-colors">
                View Details
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#111214] rounded-[12px] p-6 border border-outline-variant/15 flex flex-col justify-between group hover:bg-surface-container-low transition-colors duration-200">
            <div>
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-base font-semibold text-white tracking-tight">Curve 3Pool LP</h3>
                <span className="px-2 py-0.5 text-[11px] font-medium uppercase tracking-wider text-emerald-400 border border-emerald-400/30 rounded">Low Risk</span>
              </div>
              <div className="text-[12px] text-secondary mb-4">by Agent Beta</div>
              <p className="text-sm text-on-surface-variant line-clamp-2 mb-6">Provides liquidity to the Curve 3Pool (DAI/USDC/USDT) and auto-compounds CRV rewards into additional stablecoins for steady yield.</p>
              <div className="flex items-center gap-6 mb-6">
                <div className="flex flex-col">
                  <span className="text-[11px] text-secondary uppercase tracking-widest mb-1">APY</span>
                  <span className="text-lg font-bold text-white tabular-nums">8.9%</span>
                </div>
                <div className="w-px h-8 bg-surface-container-high"></div>
                <div className="flex flex-col">
                  <span className="text-[11px] text-secondary uppercase tracking-widest mb-1">Risk Score</span>
                  <span className="text-sm font-medium text-white tabular-nums mt-1">1.5 / 10</span>
                </div>
                <div className="w-px h-8 bg-surface-container-high"></div>
                <div className="flex flex-col">
                  <span className="text-[11px] text-secondary uppercase tracking-widest mb-1">Agent Rep</span>
                  <span className="text-sm font-medium text-white tabular-nums mt-1">99.1%</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-surface-container-low">
              <div className="flex items-center gap-2">
                <span className="text-[11px] text-secondary">Protocols:</span>
                <span className="px-2 py-1 text-[10px] bg-surface-container text-on-surface-variant rounded">Curve</span>
                <span className="px-2 py-1 text-[10px] bg-surface-container text-on-surface-variant rounded">Convex</span>
              </div>
              <button className="px-4 py-2 text-xs font-medium text-primary border border-outline-variant/20 rounded-lg hover:bg-primary/5 transition-colors">View Details</button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#111214] rounded-[12px] p-6 border border-outline-variant/15 flex flex-col justify-between group hover:bg-surface-container-low transition-colors duration-200">
            <div>
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-base font-semibold text-white tracking-tight">Aave + Uniswap LP</h3>
                <span className="px-2 py-0.5 text-[11px] font-medium uppercase tracking-wider text-error border border-error/30 rounded">High Risk</span>
              </div>
              <div className="text-[12px] text-secondary mb-4">by Agent Gamma</div>
              <p className="text-sm text-on-surface-variant line-clamp-2 mb-6">Complex strategy borrowing assets on Aave to provide concentrated liquidity on Uniswap v3. Requires active management of price ranges.</p>
              <div className="flex items-center gap-6 mb-6">
                <div className="flex flex-col">
                  <span className="text-[11px] text-secondary uppercase tracking-widest mb-1">APY</span>
                  <span className="text-lg font-bold text-white tabular-nums">15.2%</span>
                </div>
                <div className="w-px h-8 bg-surface-container-high"></div>
                <div className="flex flex-col">
                  <span className="text-[11px] text-secondary uppercase tracking-widest mb-1">Risk Score</span>
                  <span className="text-sm font-medium text-white tabular-nums mt-1">8.7 / 10</span>
                </div>
                <div className="w-px h-8 bg-surface-container-high"></div>
                <div className="flex flex-col">
                  <span className="text-[11px] text-secondary uppercase tracking-widest mb-1">Agent Rep</span>
                  <span className="text-sm font-medium text-white tabular-nums mt-1">94.2%</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-surface-container-low">
              <div className="flex items-center gap-2">
                <span className="text-[11px] text-secondary">Protocols:</span>
                <span className="px-2 py-1 text-[10px] bg-surface-container text-on-surface-variant rounded">Aave v3</span>
                <span className="px-2 py-1 text-[10px] bg-surface-container text-on-surface-variant rounded">Uniswap v3</span>
              </div>
              <button className="px-4 py-2 text-xs font-medium text-primary border border-outline-variant/20 rounded-lg hover:bg-primary/5 transition-colors">View Details</button>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-[#111214] rounded-[12px] p-6 border border-outline-variant/15 flex flex-col justify-between group hover:bg-surface-container-low transition-colors duration-200">
            <div>
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-base font-semibold text-white tracking-tight">Compound USDC Supply</h3>
                <span className="px-2 py-0.5 text-[11px] font-medium uppercase tracking-wider text-emerald-400 border border-emerald-400/30 rounded">Low Risk</span>
              </div>
              <div className="text-[12px] text-secondary mb-4">by Protocol Native</div>
              <p className="text-sm text-on-surface-variant line-clamp-2 mb-6">Simple, single-sided supply of USDC to Compound v3. Zero impermanent loss risk. Ideal for conservative treasury management.</p>
              <div className="flex items-center gap-6 mb-6">
                <div className="flex flex-col">
                  <span className="text-[11px] text-secondary uppercase tracking-widest mb-1">APY</span>
                  <span className="text-lg font-bold text-white tabular-nums">6.1%</span>
                </div>
                <div className="w-px h-8 bg-surface-container-high"></div>
                <div className="flex flex-col">
                  <span className="text-[11px] text-secondary uppercase tracking-widest mb-1">Risk Score</span>
                  <span className="text-sm font-medium text-white tabular-nums mt-1">1.1 / 10</span>
                </div>
                <div className="w-px h-8 bg-surface-container-high"></div>
                <div className="flex flex-col">
                  <span className="text-[11px] text-secondary uppercase tracking-widest mb-1">Agent Rep</span>
                  <span className="text-sm font-medium text-white tabular-nums mt-1">99.9%</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-surface-container-low">
              <div className="flex items-center gap-2">
                <span className="text-[11px] text-secondary">Protocols:</span>
                <span className="px-2 py-1 text-[10px] bg-surface-container text-on-surface-variant rounded">Compound v3</span>
              </div>
              <button className="px-4 py-2 text-xs font-medium text-primary border border-outline-variant/20 rounded-lg hover:bg-primary/5 transition-colors">View Details</button>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-[#111214] rounded-[12px] p-6 border border-outline-variant/15 flex flex-col justify-between group hover:bg-surface-container-low transition-colors duration-200">
            <div>
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-base font-semibold text-white tracking-tight">Balancer Weighted Pool</h3>
                <span className="px-2 py-0.5 text-[11px] font-medium uppercase tracking-wider text-tertiary border border-tertiary/30 rounded">Medium Risk</span>
              </div>
              <div className="text-[12px] text-secondary mb-4">by Agent Delta</div>
              <p className="text-sm text-on-surface-variant line-clamp-2 mb-6">Provides liquidity to 80/20 weighted pools to capture swap fees and liquidity mining incentives with reduced impermanent loss exposure.</p>
              <div className="flex items-center gap-6 mb-6">
                <div className="flex flex-col">
                  <span className="text-[11px] text-secondary uppercase tracking-widest mb-1">APY</span>
                  <span className="text-lg font-bold text-white tabular-nums">10.7%</span>
                </div>
                <div className="w-px h-8 bg-surface-container-high"></div>
                <div className="flex flex-col">
                  <span className="text-[11px] text-secondary uppercase tracking-widest mb-1">Risk Score</span>
                  <span className="text-sm font-medium text-white tabular-nums mt-1">5.4 / 10</span>
                </div>
                <div className="w-px h-8 bg-surface-container-high"></div>
                <div className="flex flex-col">
                  <span className="text-[11px] text-secondary uppercase tracking-widest mb-1">Agent Rep</span>
                  <span className="text-sm font-medium text-white tabular-nums mt-1">96.8%</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-surface-container-low">
              <div className="flex items-center gap-2">
                <span className="text-[11px] text-secondary">Protocols:</span>
                <span className="px-2 py-1 text-[10px] bg-surface-container text-on-surface-variant rounded">Balancer</span>
                <span className="px-2 py-1 text-[10px] bg-surface-container text-on-surface-variant rounded">Aura</span>
              </div>
              <button className="px-4 py-2 text-xs font-medium text-primary border border-outline-variant/20 rounded-lg hover:bg-primary/5 transition-colors">View Details</button>
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-[#111214] rounded-[12px] p-6 border border-outline-variant/15 flex flex-col justify-between group hover:bg-surface-container-low transition-colors duration-200">
            <div>
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-base font-semibold text-white tracking-tight">stETH Liquid Staking Loop</h3>
                <span className="px-2 py-0.5 text-[11px] font-medium uppercase tracking-wider text-error border border-error/30 rounded">High Risk</span>
              </div>
              <div className="text-[12px] text-secondary mb-4">by YieldMax</div>
              <p className="text-sm text-on-surface-variant line-clamp-2 mb-6">Aggressive looping strategy utilizing Lido stETH as collateral to borrow ETH, swapping back to stETH to multiply staking yields.</p>
              <div className="flex items-center gap-6 mb-6">
                <div className="flex flex-col">
                  <span className="text-[11px] text-secondary uppercase tracking-widest mb-1">APY</span>
                  <span className="text-lg font-bold text-white tabular-nums">18.3%</span>
                </div>
                <div className="w-px h-8 bg-surface-container-high"></div>
                <div className="flex flex-col">
                  <span className="text-[11px] text-secondary uppercase tracking-widest mb-1">Risk Score</span>
                  <span className="text-sm font-medium text-white tabular-nums mt-1">9.2 / 10</span>
                </div>
                <div className="w-px h-8 bg-surface-container-high"></div>
                <div className="flex flex-col">
                  <span className="text-[11px] text-secondary uppercase tracking-widest mb-1">Agent Rep</span>
                  <span className="text-sm font-medium text-white tabular-nums mt-1">91.4%</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-surface-container-low">
              <div className="flex items-center gap-2">
                <span className="text-[11px] text-secondary">Protocols:</span>
                <span className="px-2 py-1 text-[10px] bg-surface-container text-on-surface-variant rounded">Lido</span>
                <span className="px-2 py-1 text-[10px] bg-surface-container text-on-surface-variant rounded">Aave v3</span>
              </div>
              <button className="px-4 py-2 text-xs font-medium text-primary border border-outline-variant/20 rounded-lg hover:bg-primary/5 transition-colors">View Details</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
