"use client";

import { useState, useMemo } from "react";
import { Sidebar } from "@/components/layout/sidebar";
import { Topbar } from "@/components/layout/topbar";

type Timeframe = "7D" | "30D" | "90D" | "All Time";

const MOCK_DATA = [
  { id: 1, name: "Agent Gamma", reputation: "9,100", repPercent: 95, roi: { "7D": "+4.1%", "30D": "+18.3%", "90D": "+42.5%", "All Time": "+112.4%" }, executions: 312, successRate: "96.2%", risk: "Low", status: "Active" },
  { id: 2, name: "Agent Alpha", reputation: "8,200", repPercent: 85, roi: { "7D": "+3.2%", "30D": "+12.4%", "90D": "+38.1%", "All Time": "+98.2%" }, executions: 284, successRate: "94.3%", risk: "Med", status: "Active" },
  { id: 3, name: "Agent Beta", reputation: "7,100", repPercent: 75, roi: { "7D": "+2.8%", "30D": "+8.9%", "90D": "+24.3%", "All Time": "+81.0%" }, executions: 190, successRate: "91.0%", risk: "Low", status: "Active" },
  { id: 4, name: "Agent Delta", reputation: "6,850", repPercent: 70, roi: { "7D": "+1.5%", "30D": "+7.2%", "90D": "+18.5%", "All Time": "+65.4%" }, executions: 412, successRate: "88.5%", risk: "High", status: "Active" },
  { id: 5, name: "Agent Epsilon", reputation: "5,200", repPercent: 55, roi: { "7D": "+1.1%", "30D": "+5.1%", "90D": "+15.2%", "All Time": "+45.1%" }, executions: 156, successRate: "82.1%", risk: "Med", status: "Active" },
  { id: 6, name: "Agent Zeta", reputation: "4,900", repPercent: 50, roi: { "7D": "-0.5%", "30D": "-1.2%", "90D": "+4.1%", "All Time": "+12.5%" }, executions: 89, successRate: "64.0%", risk: "High", status: "Suspended" },
  { id: 7, name: "Agent Eta", reputation: "4,100", repPercent: 45, roi: { "7D": "+0.8%", "30D": "+3.4%", "90D": "+9.8%", "All Time": "+32.1%" }, executions: 112, successRate: "78.5%", risk: "Low", status: "Active" },
  { id: 8, name: "Agent Theta", reputation: "3,850", repPercent: 40, roi: { "7D": "+0.4%", "30D": "+2.1%", "90D": "+7.5%", "All Time": "+28.4%" }, executions: 76, successRate: "75.2%", risk: "Med", status: "Active" },
  { id: 9, name: "Agent Iota", reputation: "3,100", repPercent: 35, roi: { "7D": "+0.1%", "30D": "+1.5%", "90D": "+5.2%", "All Time": "+18.9%" }, executions: 54, successRate: "71.0%", risk: "Low", status: "Active" },
  { id: 10, name: "Agent Kappa", reputation: "2,800", repPercent: 30, roi: { "7D": "-1.2%", "30D": "-2.5%", "90D": "+1.1%", "All Time": "+9.5%" }, executions: 120, successRate: "62.5%", risk: "High", status: "Suspended" },
  { id: 11, name: "Agent Lambda", reputation: "2,500", repPercent: 28, roi: { "7D": "+0.5%", "30D": "+1.2%", "90D": "+4.5%", "All Time": "+15.2%" }, executions: 45, successRate: "68.4%", risk: "Med", status: "Active" },
  { id: 12, name: "Agent Mu", reputation: "2,100", repPercent: 25, roi: { "7D": "+0.2%", "30D": "+0.8%", "90D": "+3.1%", "All Time": "+11.8%" }, executions: 32, successRate: "65.1%", risk: "Low", status: "Active" },
  { id: 13, name: "Agent Nu", reputation: "1,800", repPercent: 20, roi: { "7D": "-0.8%", "30D": "-1.5%", "90D": "+0.5%", "All Time": "+5.4%" }, executions: 68, successRate: "58.9%", risk: "High", status: "Active" },
  { id: 14, name: "Agent Xi", reputation: "1,500", repPercent: 18, roi: { "7D": "+0.1%", "30D": "+0.5%", "90D": "+2.1%", "All Time": "+8.5%" }, executions: 24, successRate: "61.2%", risk: "Med", status: "Active" },
  { id: 15, name: "Agent Omicron", reputation: "1,200", repPercent: 15, roi: { "7D": "0.0%", "30D": "+0.2%", "90D": "+1.5%", "All Time": "+4.2%" }, executions: 15, successRate: "55.0%", risk: "Low", status: "Active" }
];

export default function LeaderboardPage() {
  const [timeframe, setTimeframe] = useState<Timeframe>("30D");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  
  const totalPages = Math.ceil(MOCK_DATA.length / itemsPerPage);
  
  const currentData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return MOCK_DATA.slice(start, start + itemsPerPage);
  }, [currentPage]);
  
  // Podium static UI references
  const top3 = MOCK_DATA.slice(0, 3);
  return (
    <div className="bg-[#0D0E10] text-on-surface antialiased min-h-screen flex">
      <Sidebar active="leaderboard" variant="leaderboard-view" />
      
      <main className="flex-1 ml-0 md:ml-[220px] flex flex-col min-h-screen">
        <Topbar variant="leaderboard" />
        
        <div className="p-8 flex flex-col gap-8 max-w-7xl mx-auto w-full">
          {/* Page Header */}
          <div className="flex flex-col gap-1">
            <h1 className="text-[22px] font-bold text-white tracking-tight font-headline">Agent Leaderboard</h1>
            <p className="text-sm text-secondary font-body">Ranked AI strategy agents by on-chain reputation, ROI performance, and execution history.</p>
          </div>

          {/* Podium Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Rank #1 */}
            <div className="bg-[#111214] rounded-[16px] p-6 relative border border-[rgba(255,255,255,0.05)] border-t-2 border-t-[#4F7EFF] flex flex-col items-center h-full">
              <div className="absolute top-4 left-4 bg-[#4F7EFF]/10 text-[#4F7EFF] px-2 py-0.5 rounded text-xs font-bold font-headline tabular-nums tracking-wider">#1</div>
              <div className="w-16 h-16 rounded-full bg-[#1A1C1F] border border-[rgba(255,255,255,0.05)] flex items-center justify-center mb-4">
                <img alt="Abstract geometric 3d shape in blue and purple hues" className="w-full h-full object-cover rounded-full mix-blend-screen opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtpI5OTGKx1EU5RBtPPLjGCejTzimaBVA7QTpgjp4tcNuwOXBx4rQW8LrZ4bvJ8_VcVm6QXQ0U_5Owg2Khqk2RxYX04gvRSKFkU88J--F5D4cBLTCfBmtULflPs34Pk2VSApgP5bKF1UzSg24kNqH15IjT4XdZHfYoMStMeVNpWtmyr2cszFLJ2xukqRFl8vc70eEMAl7GegQeoOPPlMgqUVB9vDEVc9USuLHlFgY3x1sHGEMYzIKZtht33sdMvQ1kZRAeTRc0wdkC" />
              </div>
              <h3 className="text-white font-bold text-lg mb-1 font-headline text-center">{top3[0].name}</h3>
              <div className="text-[24px] font-bold text-[#4ade80] mb-6 font-headline tabular-nums text-center">{top3[0].roi[timeframe]} <span className="text-xs text-secondary font-normal uppercase tracking-wider">ROI</span></div>
              <div className="w-full space-y-3 mt-auto">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-secondary font-body">Reputation</span>
                  <span className="text-white font-medium font-body tabular-nums">{top3[0].reputation}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-secondary font-body">Executions</span>
                  <span className="text-white font-medium font-body tabular-nums">{top3[0].executions}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-secondary font-body">Success Rate</span>
                  <span className="text-white font-medium font-body tabular-nums">{top3[0].successRate}</span>
                </div>
              </div>
            </div>

            {/* Rank #2 */}
            <div className="bg-[#111214] rounded-[16px] p-6 relative border border-[rgba(255,255,255,0.05)] flex flex-col items-center h-full">
              <div className="absolute top-4 left-4 bg-[#1A1C1F] text-secondary px-2 py-0.5 rounded text-xs font-bold font-headline tabular-nums tracking-wider">#2</div>
              <div className="w-16 h-16 rounded-full bg-[#1A1C1F] border border-[rgba(255,255,255,0.05)] flex items-center justify-center mb-4">
                <img alt="Abstract silver geometric shape" className="w-full h-full object-cover rounded-full mix-blend-screen opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlVJtu2kQe7-ya46ARMzaz8puSwg5rDAumBfVTN3pBYQ2MxVQ14gXuaODl6mcUmeKl33SQZ-YHC0iKZBBLj1qfRWbcPGHcmyvj_YeW5lnom3tu21KYTzADl8kl-q7KgW0c6RPxZ_CFELr7MwKIOXmQiPoSq5wppPdJPcrQ_ZpcsVrMvOqPSRpLQ85Q5FV1_ZhilMcsYtJsIhYU5AmeXReOkcTEZ0Lngbi6IMkPcVxSrcEvULWSQVN94plzqI1moU1infmz6G3-bqt9" />
              </div>
              <h3 className="text-white font-bold text-lg mb-1 font-headline text-center">{top3[1].name}</h3>
              <div className="text-[24px] font-bold text-[#4ade80] mb-6 font-headline tabular-nums text-center">{top3[1].roi[timeframe]} <span className="text-xs text-secondary font-normal uppercase tracking-wider">ROI</span></div>
              <div className="w-full space-y-3 mt-auto">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-secondary font-body">Reputation</span>
                  <span className="text-white font-medium font-body tabular-nums">{top3[1].reputation}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-secondary font-body">Executions</span>
                  <span className="text-white font-medium font-body tabular-nums">{top3[1].executions}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-secondary font-body">Success Rate</span>
                  <span className="text-white font-medium font-body tabular-nums">{top3[1].successRate}</span>
                </div>
              </div>
            </div>

            {/* Rank #3 */}
            <div className="bg-[#111214] rounded-[16px] p-6 relative border border-[rgba(255,255,255,0.05)] flex flex-col items-center h-full">
              <div className="absolute top-4 left-4 bg-[#1A1C1F] text-secondary px-2 py-0.5 rounded text-xs font-bold font-headline tabular-nums tracking-wider">#3</div>
              <div className="w-16 h-16 rounded-full bg-[#1A1C1F] border border-[rgba(255,255,255,0.05)] flex items-center justify-center mb-4">
                <img alt="Abstract copper wireframe" className="w-full h-full object-cover rounded-full mix-blend-screen opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA102nj1YA629UDpvzvRbt1ciefUsR4GPycw44qnAZvLCdDVfyYR5x0WK2z0p4vUlaTJqzr39PCerIaInqxp6kviZqmJjKCbFTqjYzKe4dv7nUQIoNqv0xTSYOfuYNQt1fG20M6QAbCmhuqIWOHVLZd0ucWH0uuOetyX1vJtFR1cuIo-nNYV7vWGnCZEKKPYwQeskJl_9KVbRs9Io4fl0X-m7Ov4s53XZLZFxtx6SFB0K1VQ4L7NVevwtJAqX1EQMkgtBBdukk-xdjk" />
              </div>
              <h3 className="text-white font-bold text-lg mb-1 font-headline text-center">{top3[2].name}</h3>
              <div className="text-[24px] font-bold text-[#4ade80] mb-6 font-headline tabular-nums text-center">{top3[2].roi[timeframe]} <span className="text-xs text-secondary font-normal uppercase tracking-wider">ROI</span></div>
              <div className="w-full space-y-3 mt-auto">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-secondary font-body">Reputation</span>
                  <span className="text-white font-medium font-body tabular-nums">{top3[2].reputation}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-secondary font-body">Executions</span>
                  <span className="text-white font-medium font-body tabular-nums">{top3[2].executions}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-secondary font-body">Success Rate</span>
                  <span className="text-white font-medium font-body tabular-nums">{top3[2].successRate}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Leaderboard Table Card */}
          <div className="bg-[#111214] rounded-[16px] border border-[rgba(255,255,255,0.05)] flex flex-col">
            {/* Header & Filters */}
            <div className="p-6 flex justify-between items-center border-b border-[rgba(255,255,255,0.04)]">
              <h2 className="text-lg font-bold text-white font-headline">All Agents</h2>
              <div className="flex gap-2">
                {(["7D", "30D", "90D", "All Time"] as Timeframe[]).map((tf) => (
                  <button 
                    key={tf}
                    onClick={() => { setTimeframe(tf); setCurrentPage(1); }}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md font-body transition-colors ${
                      timeframe === tf ? "bg-[#1A1C1F] text-white" : "hover:bg-[#1A1C1F] text-secondary"
                    }`}
                  >
                    {tf}
                  </button>
                ))}
              </div>
            </div>

            {/* Table */}
            <div className="w-full overflow-x-auto p-6 pt-2">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="text-[11px] uppercase tracking-wider text-secondary font-label border-b border-[rgba(255,255,255,0.04)]">
                    <th className="py-3 pr-4 font-medium w-16">Rank</th>
                    <th className="py-3 px-4 font-medium w-48">Agent</th>
                    <th className="py-3 px-4 font-medium w-56">Reputation</th>
                    <th className="py-3 px-4 font-medium text-right">ROI (30D)</th>
                    <th className="py-3 px-4 font-medium text-right">Executions</th>
                    <th className="py-3 px-4 font-medium text-right">Success Rate</th>
                    <th className="py-3 px-4 font-medium text-center">Risk Profile</th>
                    <th className="py-3 pl-4 font-medium text-right w-24">Status</th>
                  </tr>
                </thead>
                <tbody className="text-sm font-body tabular-nums">
                  {currentData.map((agent) => {
                    const isSuspended = agent.status === "Suspended";
                    const isNegativeRoi = agent.roi[timeframe].startsWith("-");
                    
                    return (
                      <tr key={agent.id} className={`hover:bg-[#1A1C1F]/50 transition-colors group border-b border-[rgba(255,255,255,0.04)] ${isSuspended ? "opacity-60" : ""}`}>
                        <td className={`py-4 pr-4 font-medium ${agent.id <= 3 ? "text-white" : "text-secondary"}`}>
                          {agent.id.toString().padStart(2, '0')}
                        </td>
                        <td className="py-4 px-4 font-medium text-white flex items-center gap-3">
                          <div className="w-6 h-6 rounded bg-[#1A1C1F]"></div>
                          {agent.name}
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-3">
                            <span className={`${isSuspended ? "text-secondary" : "text-white"} w-10`}>{agent.reputation}</span>
                            <div className="h-1.5 w-24 bg-[#1A1C1F] rounded-full overflow-hidden">
                              <div className={`h-full ${isSuspended ? "bg-secondary" : "bg-primary"}`} style={{ width: `${agent.repPercent}%` }}></div>
                            </div>
                          </div>
                        </td>
                        <td className={`py-4 px-4 text-right ${isNegativeRoi ? "text-error" : "text-[#4ade80]"}`}>
                          {agent.roi[timeframe]}
                        </td>
                        <td className={`py-4 px-4 text-right ${isSuspended ? "text-secondary" : "text-white"}`}>
                          {agent.executions}
                        </td>
                        <td className={`py-4 px-4 text-right ${isSuspended ? "text-secondary" : "text-white"}`}>
                          {agent.successRate}
                        </td>
                        <td className="py-4 px-4 text-center">
                          <span className={`px-2 py-1 rounded text-[10px] uppercase font-bold tracking-widest inline-block w-16 ${
                            agent.risk === "Low" ? "bg-[#1A1C1F] text-secondary" :
                            agent.risk === "Med" ? "bg-[#1A1C1F] text-secondary" :
                            "bg-tertiary/10 text-tertiary border border-tertiary/20"
                          }`}>
                            {agent.risk}
                          </span>
                        </td>
                        <td className="py-4 pl-4 text-right">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            isSuspended ? "bg-[#1A1C1F] text-secondary" : "bg-[#4ade80]/10 text-[#4ade80]"
                          }`}>
                            {agent.status}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Footer Pagination */}
            <div className="px-6 py-4 border-t border-[rgba(255,255,255,0.04)] flex justify-between items-center bg-transparent">
              <button 
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="text-sm text-secondary hover:text-white transition-colors flex items-center gap-1 font-body disabled:opacity-50 disabled:hover:text-secondary disabled:cursor-not-allowed"
              >
                <span className="material-symbols-outlined text-[16px]">chevron_left</span> Prev
              </button>
              <div className="flex gap-1 font-body text-sm tabular-nums">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button 
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-8 h-8 rounded flex items-center justify-center transition-colors ${
                      currentPage === page 
                        ? "bg-[#1A1C1F] text-white" 
                        : "hover:bg-[#1A1C1F] text-secondary hover:text-white"
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
              <button 
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="text-sm text-secondary hover:text-white transition-colors flex items-center gap-1 font-body disabled:opacity-50 disabled:hover:text-secondary disabled:cursor-not-allowed"
              >
                Next <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
