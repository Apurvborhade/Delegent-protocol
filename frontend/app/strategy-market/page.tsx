"use client";

import { useState, useMemo } from "react";
import { Sidebar } from "@/components/layout/sidebar";
import { Topbar } from "@/components/layout/topbar";
import Link from "next/link";

const MOCK_STRATEGIES = [
  {
    id: "aave-usdc",
    name: "Aave USDC Leveraged Yield",
    riskLevel: "Medium Risk",
    riskColor: "text-tertiary border-tertiary/30",
    agent: "Agent Alpha",
    description: "Executes a recursive borrowing strategy on Aave v3 to maximize yield on USDC deposits while maintaining safe collateralization ratios.",
    apy: 12.4,
    riskScore: 4.2,
    agentRep: 98.5,
    tvl: 1250000,
    protocols: ["Aave v3"],
    isTrending: false
  },
  {
    id: "curve-3pool",
    name: "Curve 3Pool LP",
    riskLevel: "Low Risk",
    riskColor: "text-emerald-400 border-emerald-400/30",
    agent: "Agent Beta",
    description: "Provides liquidity to the Curve 3Pool (DAI/USDC/USDT) and auto-compounds CRV rewards into additional stablecoins for steady yield.",
    apy: 8.9,
    riskScore: 1.5,
    agentRep: 99.1,
    tvl: 3400000,
    protocols: ["Curve", "Convex"],
    isTrending: false
  },
  {
    id: "aave-uniswap",
    name: "Aave + Uniswap LP",
    riskLevel: "High Risk",
    riskColor: "text-error border-error/30",
    agent: "Agent Gamma",
    description: "Complex strategy borrowing assets on Aave to provide concentrated liquidity on Uniswap v3. Requires active management of price ranges.",
    apy: 15.2,
    riskScore: 8.7,
    agentRep: 94.2,
    tvl: 850000,
    protocols: ["Aave v3", "Uniswap v3"],
    isTrending: false
  },
  {
    id: "compound-usdc",
    name: "Compound USDC Supply",
    riskLevel: "Low Risk",
    riskColor: "text-emerald-400 border-emerald-400/30",
    agent: "Protocol Native",
    description: "Simple, single-sided supply of USDC to Compound v3. Zero impermanent loss risk. Ideal for conservative treasury management.",
    apy: 6.1,
    riskScore: 1.1,
    agentRep: 99.9,
    tvl: 5200000,
    protocols: ["Compound v3"],
    isTrending: false
  },
  {
    id: "balancer-weighted",
    name: "Balancer Weighted Pool",
    riskLevel: "Medium Risk",
    riskColor: "text-tertiary border-tertiary/30",
    agent: "Agent Delta",
    description: "Provides liquidity to 80/20 weighted pools to capture swap fees and liquidity mining incentives with reduced impermanent loss exposure.",
    apy: 10.7,
    riskScore: 5.4,
    agentRep: 96.8,
    tvl: 1100000,
    protocols: ["Balancer", "Aura"],
    isTrending: false
  },
  {
    id: "steth-loop",
    name: "stETH Liquid Staking Loop",
    riskLevel: "High Risk",
    riskColor: "text-error border-error/30",
    agent: "YieldMax",
    description: "Aggressive looping strategy utilizing Lido stETH as collateral to borrow ETH, swapping back to stETH to multiply staking yields.",
    apy: 18.3,
    riskScore: 9.2,
    agentRep: 91.4,
    tvl: 2100000,
    protocols: ["Lido", "Aave v3"],
    isTrending: true
  }
];

export default function StrategyMarketPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterRisk, setFilterRisk] = useState("All");
  const [sortBy, setSortBy] = useState("APY (High to Low)");

  const filteredAndSortedStrategies = useMemo(() => {
    let result = [...MOCK_STRATEGIES];

    // Search filter
    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      result = result.filter(s => 
        s.name.toLowerCase().includes(lowerQuery) || 
        s.description.toLowerCase().includes(lowerQuery)
      );
    }

    // Risk filter
    if (filterRisk !== "All") {
      if (filterRisk === "Trending") {
        result = result.filter(s => s.isTrending);
      } else {
        result = result.filter(s => s.riskLevel === filterRisk);
      }
    }

    // Sort
    result.sort((a, b) => {
      switch (sortBy) {
        case "APY (High to Low)": return b.apy - a.apy;
        case "APY (Low to High)": return a.apy - b.apy;
        case "Risk (Low to High)": return a.riskScore - b.riskScore;
        case "TVL (High to Low)": return b.tvl - a.tvl;
        default: return 0;
      }
    });

    return result;
  }, [searchQuery, filterRisk, sortBy]);

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
            <input 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-9 pr-3 py-2 bg-surface-container-lowest border border-outline-variant/15 rounded-lg text-sm text-on-surface placeholder-secondary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" 
              placeholder="Search strategies..." 
              type="text" 
            />
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 border-b border-surface-container-low pb-6">
          <div className="flex items-center gap-4">
            <span className="text-sm text-secondary font-medium">Filter:</span>
            <div className="flex flex-wrap gap-2">
              {["All", "Low Risk", "Medium Risk", "High Risk", "Trending"].map((risk) => (
                <button 
                  key={risk}
                  onClick={() => setFilterRisk(risk)}
                  className={`px-4 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                    filterRisk === risk 
                      ? "bg-primary-container text-on-primary-container" 
                      : "bg-surface-container hover:bg-surface-container-high text-secondary hover:text-white"
                  }`}
                >
                  {risk}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-secondary">Sort by:</span>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-surface-container border border-outline-variant/15 text-white text-sm rounded-lg px-3 py-1.5 focus:ring-primary focus:border-primary block"
            >
              <option>APY (High to Low)</option>
              <option>APY (Low to High)</option>
              <option>Risk (Low to High)</option>
              <option>TVL (High to Low)</option>
            </select>
          </div>
        </div>

        {/* Strategy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredAndSortedStrategies.map((strategy) => (
            <div key={strategy.id} className="bg-[#111214] rounded-[12px] p-6 border border-outline-variant/15 flex flex-col justify-between group hover:bg-surface-container-low transition-colors duration-200">
              <div>
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-base font-semibold text-white tracking-tight">{strategy.name}</h3>
                  <span className={`px-2 py-0.5 text-[11px] font-medium uppercase tracking-wider border rounded ${strategy.riskColor}`}>
                    {strategy.riskLevel}
                  </span>
                </div>
                <div className="text-[12px] text-secondary mb-4">by {strategy.agent}</div>
                <p className="text-sm text-on-surface-variant line-clamp-2 mb-6">{strategy.description}</p>
                <div className="flex items-center gap-6 mb-6">
                  <div className="flex flex-col">
                    <span className="text-[11px] text-secondary uppercase tracking-widest mb-1">APY</span>
                    <span className="text-lg font-bold text-white tabular-nums">{strategy.apy}%</span>
                  </div>
                  <div className="w-px h-8 bg-surface-container-high"></div>
                  <div className="flex flex-col">
                    <span className="text-[11px] text-secondary uppercase tracking-widest mb-1">Risk Score</span>
                    <span className="text-sm font-medium text-white tabular-nums mt-1">{strategy.riskScore} / 10</span>
                  </div>
                  <div className="w-px h-8 bg-surface-container-high"></div>
                  <div className="flex flex-col">
                    <span className="text-[11px] text-secondary uppercase tracking-widest mb-1">Agent Rep</span>
                    <span className="text-sm font-medium text-white tabular-nums mt-1">{strategy.agentRep}%</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-surface-container-low">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-secondary">Protocols:</span>
                  {strategy.protocols.map(protocol => (
                    <span key={protocol} className="px-2 py-1 text-[10px] bg-surface-container text-on-surface-variant rounded">
                      {protocol}
                    </span>
                  ))}
                </div>
                <Link href={`/strategy/${strategy.id}`} className="px-4 py-2 text-xs font-medium text-primary border border-outline-variant/20 rounded-lg hover:bg-primary/5 transition-colors">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
