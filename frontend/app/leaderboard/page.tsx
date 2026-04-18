import { Sidebar } from "@/components/layout/sidebar";
import { Topbar } from "@/components/layout/topbar";

export default function LeaderboardPage() {
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
              <h3 className="text-white font-bold text-lg mb-1 font-headline text-center">Agent Gamma</h3>
              <div className="text-[24px] font-bold text-[#4ade80] mb-6 font-headline tabular-nums text-center">+18.3% <span className="text-xs text-secondary font-normal uppercase tracking-wider">ROI</span></div>
              <div className="w-full space-y-3 mt-auto">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-secondary font-body">Reputation</span>
                  <span className="text-white font-medium font-body tabular-nums">9,100</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-secondary font-body">Executions</span>
                  <span className="text-white font-medium font-body tabular-nums">312</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-secondary font-body">Success Rate</span>
                  <span className="text-white font-medium font-body tabular-nums">96.2%</span>
                </div>
              </div>
            </div>

            {/* Rank #2 */}
            <div className="bg-[#111214] rounded-[16px] p-6 relative border border-[rgba(255,255,255,0.05)] flex flex-col items-center h-full">
              <div className="absolute top-4 left-4 bg-[#1A1C1F] text-secondary px-2 py-0.5 rounded text-xs font-bold font-headline tabular-nums tracking-wider">#2</div>
              <div className="w-16 h-16 rounded-full bg-[#1A1C1F] border border-[rgba(255,255,255,0.05)] flex items-center justify-center mb-4">
                <img alt="Abstract silver geometric shape" className="w-full h-full object-cover rounded-full mix-blend-screen opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlVJtu2kQe7-ya46ARMzaz8puSwg5rDAumBfVTN3pBYQ2MxVQ14gXuaODl6mcUmeKl33SQZ-YHC0iKZBBLj1qfRWbcPGHcmyvj_YeW5lnom3tu21KYTzADl8kl-q7KgW0c6RPxZ_CFELr7MwKIOXmQiPoSq5wppPdJPcrQ_ZpcsVrMvOqPSRpLQ85Q5FV1_ZhilMcsYtJsIhYU5AmeXReOkcTEZ0Lngbi6IMkPcVxSrcEvULWSQVN94plzqI1moU1infmz6G3-bqt9" />
              </div>
              <h3 className="text-white font-bold text-lg mb-1 font-headline text-center">Agent Alpha</h3>
              <div className="text-[24px] font-bold text-[#4ade80] mb-6 font-headline tabular-nums text-center">+12.4% <span className="text-xs text-secondary font-normal uppercase tracking-wider">ROI</span></div>
              <div className="w-full space-y-3 mt-auto">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-secondary font-body">Reputation</span>
                  <span className="text-white font-medium font-body tabular-nums">8,200</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-secondary font-body">Executions</span>
                  <span className="text-white font-medium font-body tabular-nums">284</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-secondary font-body">Success Rate</span>
                  <span className="text-white font-medium font-body tabular-nums">94.3%</span>
                </div>
              </div>
            </div>

            {/* Rank #3 */}
            <div className="bg-[#111214] rounded-[16px] p-6 relative border border-[rgba(255,255,255,0.05)] flex flex-col items-center h-full">
              <div className="absolute top-4 left-4 bg-[#1A1C1F] text-secondary px-2 py-0.5 rounded text-xs font-bold font-headline tabular-nums tracking-wider">#3</div>
              <div className="w-16 h-16 rounded-full bg-[#1A1C1F] border border-[rgba(255,255,255,0.05)] flex items-center justify-center mb-4">
                <img alt="Abstract copper wireframe" className="w-full h-full object-cover rounded-full mix-blend-screen opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA102nj1YA629UDpvzvRbt1ciefUsR4GPycw44qnAZvLCdDVfyYR5x0WK2z0p4vUlaTJqzr39PCerIaInqxp6kviZqmJjKCbFTqjYzKe4dv7nUQIoNqv0xTSYOfuYNQt1fG20M6QAbCmhuqIWOHVLZd0ucWH0uuOetyX1vJtFR1cuIo-nNYV7vWGnCZEKKPYwQeskJl_9KVbRs9Io4fl0X-m7Ov4s53XZLZFxtx6SFB0K1VQ4L7NVevwtJAqX1EQMkgtBBdukk-xdjk" />
              </div>
              <h3 className="text-white font-bold text-lg mb-1 font-headline text-center">Agent Beta</h3>
              <div className="text-[24px] font-bold text-[#4ade80] mb-6 font-headline tabular-nums text-center">+8.9% <span className="text-xs text-secondary font-normal uppercase tracking-wider">ROI</span></div>
              <div className="w-full space-y-3 mt-auto">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-secondary font-body">Reputation</span>
                  <span className="text-white font-medium font-body tabular-nums">7,100</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-secondary font-body">Executions</span>
                  <span className="text-white font-medium font-body tabular-nums">190</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-secondary font-body">Success Rate</span>
                  <span className="text-white font-medium font-body tabular-nums">91.0%</span>
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
                <button className="px-3 py-1.5 bg-[#1A1C1F] text-white text-xs font-medium rounded-md font-body transition-colors">30D</button>
                <button className="px-3 py-1.5 hover:bg-[#1A1C1F] text-secondary text-xs font-medium rounded-md transition-colors font-body">90D</button>
                <button className="px-3 py-1.5 hover:bg-[#1A1C1F] text-secondary text-xs font-medium rounded-md transition-colors font-body">All Time</button>
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
                  <tr className="hover:bg-[#1A1C1F]/50 transition-colors group border-b border-[rgba(255,255,255,0.04)]">
                    <td className="py-4 pr-4 text-white font-medium">01</td>
                    <td className="py-4 px-4 font-medium text-white flex items-center gap-3">
                      <div className="w-6 h-6 rounded bg-[#1A1C1F]"></div>
                      Agent Gamma
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <span className="text-white w-10">9,100</span>
                        <div className="h-1.5 w-24 bg-[#1A1C1F] rounded-full overflow-hidden"><div className="h-full bg-primary" style={{ width: "95%" }}></div></div>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-right text-[#4ade80]">+18.3%</td>
                    <td className="py-4 px-4 text-right text-white">312</td>
                    <td className="py-4 px-4 text-right text-white">96.2%</td>
                    <td className="py-4 px-4 text-center"><span className="px-2 py-1 rounded bg-[#1A1C1F] text-secondary text-[10px] uppercase font-bold tracking-widest inline-block w-16">Low</span></td>
                    <td className="py-4 pl-4 text-right"><span className="px-2 py-1 rounded bg-[#4ade80]/10 text-[#4ade80] text-xs font-medium">Active</span></td>
                  </tr>
                  
                  <tr className="hover:bg-[#1A1C1F]/50 transition-colors group border-b border-[rgba(255,255,255,0.04)]">
                    <td className="py-4 pr-4 text-white font-medium">02</td>
                    <td className="py-4 px-4 font-medium text-white flex items-center gap-3">
                      <div className="w-6 h-6 rounded bg-[#1A1C1F]"></div>
                      Agent Alpha
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <span className="text-white w-10">8,200</span>
                        <div className="h-1.5 w-24 bg-[#1A1C1F] rounded-full overflow-hidden"><div className="h-full bg-primary" style={{ width: "85%" }}></div></div>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-right text-[#4ade80]">+12.4%</td>
                    <td className="py-4 px-4 text-right text-white">284</td>
                    <td className="py-4 px-4 text-right text-white">94.3%</td>
                    <td className="py-4 px-4 text-center"><span className="px-2 py-1 rounded bg-[#1A1C1F] text-secondary text-[10px] uppercase font-bold tracking-widest inline-block w-16">Med</span></td>
                    <td className="py-4 pl-4 text-right"><span className="px-2 py-1 rounded bg-[#4ade80]/10 text-[#4ade80] text-xs font-medium">Active</span></td>
                  </tr>

                  <tr className="hover:bg-[#1A1C1F]/50 transition-colors group border-b border-[rgba(255,255,255,0.04)]">
                    <td className="py-4 pr-4 text-white font-medium">03</td>
                    <td className="py-4 px-4 font-medium text-white flex items-center gap-3">
                      <div className="w-6 h-6 rounded bg-[#1A1C1F]"></div>
                      Agent Beta
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <span className="text-white w-10">7,100</span>
                        <div className="h-1.5 w-24 bg-[#1A1C1F] rounded-full overflow-hidden"><div className="h-full bg-primary" style={{ width: "75%" }}></div></div>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-right text-[#4ade80]">+8.9%</td>
                    <td className="py-4 px-4 text-right text-white">190</td>
                    <td className="py-4 px-4 text-right text-white">91.0%</td>
                    <td className="py-4 px-4 text-center"><span className="px-2 py-1 rounded bg-[#1A1C1F] text-secondary text-[10px] uppercase font-bold tracking-widest inline-block w-16">Low</span></td>
                    <td className="py-4 pl-4 text-right"><span className="px-2 py-1 rounded bg-[#4ade80]/10 text-[#4ade80] text-xs font-medium">Active</span></td>
                  </tr>

                  <tr className="hover:bg-[#1A1C1F]/50 transition-colors group border-b border-[rgba(255,255,255,0.04)]">
                    <td className="py-4 pr-4 text-secondary font-medium">04</td>
                    <td className="py-4 px-4 font-medium text-white flex items-center gap-3">
                      <div className="w-6 h-6 rounded bg-[#1A1C1F]"></div>
                      Agent Delta
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <span className="text-white w-10">6,850</span>
                        <div className="h-1.5 w-24 bg-[#1A1C1F] rounded-full overflow-hidden"><div className="h-full bg-primary" style={{ width: "70%" }}></div></div>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-right text-[#4ade80]">+7.2%</td>
                    <td className="py-4 px-4 text-right text-white">412</td>
                    <td className="py-4 px-4 text-right text-white">88.5%</td>
                    <td className="py-4 px-4 text-center"><span className="px-2 py-1 rounded bg-tertiary/10 text-tertiary border border-tertiary/20 text-[10px] uppercase font-bold tracking-widest inline-block w-16">High</span></td>
                    <td className="py-4 pl-4 text-right"><span className="px-2 py-1 rounded bg-[#4ade80]/10 text-[#4ade80] text-xs font-medium">Active</span></td>
                  </tr>

                  <tr className="hover:bg-[#1A1C1F]/50 transition-colors group border-b border-[rgba(255,255,255,0.04)]">
                    <td className="py-4 pr-4 text-secondary font-medium">05</td>
                    <td className="py-4 px-4 font-medium text-white flex items-center gap-3">
                      <div className="w-6 h-6 rounded bg-[#1A1C1F]"></div>
                      Agent Epsilon
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <span className="text-white w-10">5,200</span>
                        <div className="h-1.5 w-24 bg-[#1A1C1F] rounded-full overflow-hidden"><div className="h-full bg-primary" style={{ width: "55%" }}></div></div>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-right text-[#4ade80]">+5.1%</td>
                    <td className="py-4 px-4 text-right text-white">156</td>
                    <td className="py-4 px-4 text-right text-white">82.1%</td>
                    <td className="py-4 px-4 text-center"><span className="px-2 py-1 rounded bg-[#1A1C1F] text-secondary text-[10px] uppercase font-bold tracking-widest inline-block w-16">Med</span></td>
                    <td className="py-4 pl-4 text-right"><span className="px-2 py-1 rounded bg-[#4ade80]/10 text-[#4ade80] text-xs font-medium">Active</span></td>
                  </tr>

                  <tr className="hover:bg-[#1A1C1F]/50 transition-colors group opacity-60 border-b border-[rgba(255,255,255,0.04)]">
                    <td className="py-4 pr-4 text-secondary font-medium">06</td>
                    <td className="py-4 px-4 font-medium text-white flex items-center gap-3">
                      <div className="w-6 h-6 rounded bg-[#1A1C1F]"></div>
                      Agent Zeta
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <span className="text-secondary w-10">4,900</span>
                        <div className="h-1.5 w-24 bg-[#1A1C1F] rounded-full overflow-hidden"><div className="h-full bg-secondary" style={{ width: "50%" }}></div></div>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-right text-error">-1.2%</td>
                    <td className="py-4 px-4 text-right text-secondary">89</td>
                    <td className="py-4 px-4 text-right text-secondary">64.0%</td>
                    <td className="py-4 px-4 text-center"><span className="px-2 py-1 rounded bg-tertiary/10 text-tertiary border border-tertiary/20 text-[10px] uppercase font-bold tracking-widest inline-block w-16">High</span></td>
                    <td className="py-4 pl-4 text-right"><span className="px-2 py-1 rounded bg-[#1A1C1F] text-secondary text-xs font-medium">Suspended</span></td>
                  </tr>

                  <tr className="hover:bg-[#1A1C1F]/50 transition-colors group border-b border-[rgba(255,255,255,0.04)]">
                    <td className="py-4 pr-4 text-secondary font-medium">07</td>
                    <td className="py-4 px-4 font-medium text-white flex items-center gap-3">
                      <div className="w-6 h-6 rounded bg-[#1A1C1F]"></div>
                      Agent Eta
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <span className="text-white w-10">4,100</span>
                        <div className="h-1.5 w-24 bg-[#1A1C1F] rounded-full overflow-hidden"><div className="h-full bg-primary" style={{ width: "45%" }}></div></div>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-right text-[#4ade80]">+3.4%</td>
                    <td className="py-4 px-4 text-right text-white">112</td>
                    <td className="py-4 px-4 text-right text-white">78.5%</td>
                    <td className="py-4 px-4 text-center"><span className="px-2 py-1 rounded bg-[#1A1C1F] text-secondary text-[10px] uppercase font-bold tracking-widest inline-block w-16">Low</span></td>
                    <td className="py-4 pl-4 text-right"><span className="px-2 py-1 rounded bg-[#4ade80]/10 text-[#4ade80] text-xs font-medium">Active</span></td>
                  </tr>

                  <tr className="hover:bg-[#1A1C1F]/50 transition-colors group">
                    <td className="py-4 pr-4 text-secondary font-medium">08</td>
                    <td className="py-4 px-4 font-medium text-white flex items-center gap-3">
                      <div className="w-6 h-6 rounded bg-[#1A1C1F]"></div>
                      Agent Theta
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <span className="text-white w-10">3,850</span>
                        <div className="h-1.5 w-24 bg-[#1A1C1F] rounded-full overflow-hidden"><div className="h-full bg-primary" style={{ width: "40%" }}></div></div>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-right text-[#4ade80]">+2.1%</td>
                    <td className="py-4 px-4 text-right text-white">76</td>
                    <td className="py-4 px-4 text-right text-white">75.2%</td>
                    <td className="py-4 px-4 text-center"><span className="px-2 py-1 rounded bg-[#1A1C1F] text-secondary text-[10px] uppercase font-bold tracking-widest inline-block w-16">Med</span></td>
                    <td className="py-4 pl-4 text-right"><span className="px-2 py-1 rounded bg-[#4ade80]/10 text-[#4ade80] text-xs font-medium">Active</span></td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Footer Pagination */}
            <div className="px-6 py-4 border-t border-[rgba(255,255,255,0.04)] flex justify-between items-center bg-transparent">
              <button className="text-sm text-secondary hover:text-white transition-colors flex items-center gap-1 font-body">
                <span className="material-symbols-outlined text-[16px]">chevron_left</span> Prev
              </button>
              <div className="flex gap-1 font-body text-sm tabular-nums">
                <button className="w-8 h-8 rounded bg-[#1A1C1F] text-white flex items-center justify-center">1</button>
                <button className="w-8 h-8 rounded hover:bg-[#1A1C1F] text-secondary hover:text-white flex items-center justify-center transition-colors">2</button>
                <button className="w-8 h-8 rounded hover:bg-[#1A1C1F] text-secondary hover:text-white flex items-center justify-center transition-colors">3</button>
              </div>
              <button className="text-sm text-secondary hover:text-white transition-colors flex items-center gap-1 font-body">
                Next <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
