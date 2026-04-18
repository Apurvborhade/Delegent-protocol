"use client";

import { useState } from "react";
import { Sidebar } from "@/components/layout/sidebar";
import { Topbar } from "@/components/layout/topbar";
import Link from "next/link";

const ASSETS_DATA = [
  {
    symbol: "USDC",
    name: "USDC",
    network: "Base",
    networkColor: "bg-[#0052ff]",
    iconColor: "text-[#2775ca]",
    iconBg: "bg-[#2775ca]/20 border-[#2775ca]/30",
    balance: "5,000.00",
    value: "$5,000.00",
    allocatedValue: "4,000.00",
    strategy: "Yield Farm Alpha",
    percentage: 48.8,
  },
  {
    symbol: "WETH",
    name: "WETH",
    network: "Ethereum",
    networkColor: "bg-[#627eea]",
    iconColor: "text-[#627eea]",
    iconBg: "bg-[#627eea]/20 border-[#627eea]/30",
    balance: "1.50",
    value: "$3,450.00",
    allocatedValue: "1.00",
    strategy: "ETH Delta Neutral",
    percentage: 33.6,
  },
  {
    symbol: "stETH",
    name: "stETH",
    network: "Ethereum",
    networkColor: "bg-[#627eea]",
    iconColor: "text-[#00a3ff]",
    iconBg: "bg-[#00a3ff]/20 border-[#00a3ff]/30",
    balance: "0.45",
    value: "$1,035.00",
    allocatedValue: null,
    strategy: "Idle",
    percentage: 10.1,
  },
  {
    symbol: "aUSDC",
    name: "aUSDC",
    network: "Base",
    networkColor: "bg-[#0052ff]",
    iconColor: "text-[#b6509e]",
    iconBg: "bg-[#b6509e]/20 border-[#b6509e]/30",
    balance: "500.00",
    value: "$500.00",
    allocatedValue: "500.00",
    strategy: "Aave Lending",
    percentage: 4.8,
  },
  {
    symbol: "UNI-LP",
    name: "UNI-V3-LP",
    network: "Base",
    networkColor: "bg-[#0052ff]",
    iconColor: "text-[#ff007a]",
    iconBg: "bg-[#ff007a]/20 border-[#ff007a]/30",
    balance: "1.00",
    value: "$262.38",
    allocatedValue: "1.00",
    strategy: "Liq Provisioning",
    percentage: 2.5,
  }
];

export default function AssetsPage() {
  const [assets] = useState(ASSETS_DATA);

  const handleExportCSV = () => {
    const headers = ["Asset Name", "Network", "Balance", "Value", "Allocated", "Strategy", "Percentage"];
    const rows = assets.map(a => [
      a.name, 
      a.network, 
      a.balance.replace(/,/g, ''), 
      a.value.replace(/[$,]/g, ''), 
      a.allocatedValue ? a.allocatedValue.replace(/,/g, '') : "0", 
      a.strategy, 
      `${a.percentage}%`
    ]);
    
    const csvContent = [
      headers.join(","),
      ...rows.map(row => row.join(","))
    ].join("\\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "assets_export.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="text-on-surface antialiased min-h-screen flex bg-[#0A0B0D]">
      <Sidebar active="assets" variant="assets-view" />
      
      <div className="flex-1 ml-[220px] flex flex-col min-h-screen">
        <Topbar variant="assets" />

        <main className="flex-1 p-8 space-y-8 bg-[#0A0B0D]">
          {/* Row 1: Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Total Balance */}
            <div className="bg-[#111214] p-6 rounded-[16px] border border-white/5 flex flex-col justify-between h-32 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div>
                <p className="text-xs font-semibold text-secondary uppercase tracking-wider mb-1">Total Balance</p>
                <h3 className="text-3xl font-bold text-white tabular-nums tracking-tight">$10,247.38</h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex items-center text-[#85d996] text-xs font-medium bg-[#85d996]/10 px-1.5 py-0.5 rounded">
                  <span className="material-symbols-outlined text-[12px] mr-1">trending_up</span> +2.4%
                </span>
                <span className="text-xs text-secondary">vs last 7d</span>
              </div>
            </div>

            {/* Allocated */}
            <div className="bg-[#111214] p-6 rounded-[16px] border border-white/5 flex flex-col justify-between h-32">
              <div className="flex justify-between items-start mb-1">
                <p className="text-xs font-semibold text-secondary uppercase tracking-wider">Allocated</p>
                <span className="text-xs font-medium text-white bg-surface-container-high px-2 py-0.5 rounded-sm border border-white/5">79%</span>
              </div>
              <h3 className="text-2xl font-bold text-white tabular-nums tracking-tight">$8,100.00</h3>
              <div className="w-full bg-surface-container-highest rounded-full h-1.5 mt-2">
                <div className="bg-primary h-1.5 rounded-full" style={{ width: "79%" }}></div>
              </div>
            </div>

            {/* Available */}
            <div className="bg-[#111214] p-6 rounded-[16px] border border-white/5 flex flex-col justify-between h-32">
              <div>
                <p className="text-xs font-semibold text-secondary uppercase tracking-wider mb-1">Available</p>
                <h3 className="text-2xl font-bold text-white tabular-nums tracking-tight">$2,147.38</h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-secondary">Idle in Vault</span>
              </div>
            </div>
          </div>

          {/* Row 2: Asset Breakdown Table */}
          <div className="bg-[#111214] rounded-[16px] border border-white/5 overflow-hidden">
            <div className="p-6 border-b border-white/5 flex justify-between items-center">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Asset Breakdown</h3>
              <button 
                onClick={handleExportCSV}
                className="text-xs font-medium text-primary hover:text-primary-fixed transition-colors active:scale-95"
              >
                Export CSV
              </button>
            </div>
            <div className="w-full overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="text-[11px] font-semibold text-secondary uppercase tracking-widest border-b border-white/5">
                    <th className="px-5 py-3 font-medium">Token</th>
                    <th className="px-5 py-3 font-medium text-right">Balance</th>
                    <th className="px-5 py-3 font-medium text-right">USD Value</th>
                    <th className="px-5 py-3 font-medium">Allocated</th>
                    <th className="px-5 py-3 font-medium">% of Vault</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-on-surface divide-y divide-white/5">
                  {assets.map((asset) => (
                    <tr key={asset.symbol} className="hover:bg-white/5 transition-colors group border-b border-white/5 last:border-0">
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center border ${asset.iconBg}`}>
                            <span className={`${asset.iconColor} text-[10px] font-bold`}>{asset.symbol}</span>
                          </div>
                          <div>
                            <div className="font-medium text-white">{asset.name}</div>
                            <div className="text-[11px] text-secondary flex items-center gap-1 mt-0.5">
                              <span className={`w-1.5 h-1.5 rounded-full ${asset.networkColor}`}></span> {asset.network}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-4 text-right tabular-nums font-medium">{asset.balance}</td>
                      <td className="px-5 py-4 text-right tabular-nums text-white font-medium">{asset.value}</td>
                      <td className="px-5 py-4">
                        {asset.allocatedValue ? (
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded border border-primary/20 tabular-nums">{asset.allocatedValue}</span>
                            <Link className="text-[11px] text-secondary hover:text-white transition-colors flex items-center" href="#">
                              {asset.strategy} <span className="material-symbols-outlined text-[14px] ml-0.5">open_in_new</span>
                            </Link>
                          </div>
                        ) : (
                          <span className="text-xs text-secondary">{asset.strategy}</span>
                        )}
                      </td>
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-16 h-1 bg-surface-container-highest rounded-full overflow-hidden">
                            <div className="bg-primary h-full" style={{ width: `${asset.percentage}%` }}></div>
                          </div>
                          <span className="text-xs tabular-nums text-secondary w-8 text-right">{asset.percentage}%</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Row 3: Allocation Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3 bg-[#111214] rounded-[16px] border border-white/5 p-6 flex flex-col">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Allocation Breakdown</h3>
              <div className="flex-1 flex flex-col sm:flex-row items-center justify-center gap-12">
                <div className="relative w-48 h-48 rounded-full border-[24px] border-[#111214] flex items-center justify-center" style={{ borderTopColor: "#628aff", borderRightColor: "#ffb786", borderBottomColor: "#e07312", borderLeftColor: "#343537", transform: "rotate(-45deg)" }}>
                  <div className="absolute inset-0 flex flex-col items-center justify-center rounded-full bg-[#111214] m-[-1px]" style={{ transform: "rotate(45deg)" }}>
                    <span className="text-xs text-secondary uppercase tracking-widest mb-1">Allocated</span>
                    <span className="text-xl font-bold text-white tabular-nums">$8,100</span>
                  </div>
                </div>
                <div className="flex flex-col gap-4 w-full sm:w-auto">
                  <div className="flex items-center justify-between gap-6">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-sm bg-[#628aff]"></div>
                      <span className="text-sm text-secondary">Yield Farm Alpha</span>
                    </div>
                    <span className="text-sm font-medium text-white tabular-nums">49.3%</span>
                  </div>
                  <div className="flex items-center justify-between gap-6">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-sm bg-[#ffb786]"></div>
                      <span className="text-sm text-secondary">ETH Delta Neutral</span>
                    </div>
                    <span className="text-sm font-medium text-white tabular-nums">28.4%</span>
                  </div>
                  <div className="flex items-center justify-between gap-6">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-sm bg-[#e07312]"></div>
                      <span className="text-sm text-secondary">Aave Lending</span>
                    </div>
                    <span className="text-sm font-medium text-white tabular-nums">19.1%</span>
                  </div>
                  <div className="flex items-center justify-between gap-6">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-sm bg-[#343537]"></div>
                      <span className="text-sm text-secondary">Liq Provisioning</span>
                    </div>
                    <span className="text-sm font-medium text-white tabular-nums">3.2%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 bg-[#111214] rounded-[16px] border border-white/5 flex flex-col">
              <div className="p-6 border-b border-white/5">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">Active Positions</h3>
              </div>
              <div className="flex-1 flex flex-col p-2">
                <div className="p-4 hover:bg-white/5 rounded-lg transition-colors border-b border-white/5 last:border-0 flex justify-between items-center group">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-sm font-medium text-white">Yield Farm Alpha</h4>
                      <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-sm bg-tertiary-container/20 text-tertiary-fixed-dim border border-tertiary-container/30">Alpha Agent</span>
                    </div>
                    <div className="text-[11px] text-secondary flex gap-3">
                      <span>Pool: USDC/ETH</span>
                      <span>Base</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-[#85d996] tabular-nums">12.4% APY</div>
                    <div className="text-xs text-secondary tabular-nums mt-0.5">$4,000.00</div>
                  </div>
                </div>

                <div className="p-4 hover:bg-white/5 rounded-lg transition-colors border-b border-white/5 last:border-0 flex justify-between items-center group">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-sm font-medium text-white">ETH Delta Neutral</h4>
                      <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-sm bg-primary-container/20 text-primary-fixed-dim border border-primary-container/30">Neutral Agent</span>
                    </div>
                    <div className="text-[11px] text-secondary flex gap-3">
                      <span>Pool: WETH/USDC</span>
                      <span>Ethereum</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-[#85d996] tabular-nums">8.2% APY</div>
                    <div className="text-xs text-secondary tabular-nums mt-0.5">$2,300.00</div>
                  </div>
                </div>

                <div className="p-4 hover:bg-white/5 rounded-lg transition-colors border-b border-white/5 last:border-0 flex justify-between items-center group">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-sm font-medium text-white">Aave Lending</h4>
                      <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-sm bg-surface-container-highest border border-white/5 text-secondary">Passive</span>
                    </div>
                    <div className="text-[11px] text-secondary flex gap-3">
                      <span>Asset: aUSDC</span>
                      <span>Base</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-[#85d996] tabular-nums">4.5% APY</div>
                    <div className="text-xs text-secondary tabular-nums mt-0.5">$1,800.00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
