"use client";

import { useState, useRef, useEffect } from "react";
import { Sidebar } from "@/components/layout/sidebar";
import { Topbar } from "@/components/layout/topbar";

export default function VaultPage() {
  const [mode, setMode] = useState<"deposit" | "withdraw">("deposit");
  const [amount, setAmount] = useState("1000.00");
  const [balance, setBalance] = useState(10247.38);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedToken, setSelectedToken] = useState({ symbol: "USDC", color: "bg-primary/20", textClass: "text-primary" });
  
  const tokens = [
    { symbol: "USDC", color: "bg-primary/20", textClass: "text-primary" },
    { symbol: "ETH", color: "bg-[#627eea]/20", textClass: "text-[#627eea]" },
    { symbol: "DAI", color: "bg-[#f4b731]/20", textClass: "text-[#f4b731]" },
  ];

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  
  const [pendingApprovals, setPendingApprovals] = useState([
    {
      id: 1,
      name: "Aave USDC Leveraged Yield",
      agent: "Agent Alpha",
      apy: "12.4% APY",
    },
    {
      id: 2,
      name: "Curve 3Pool Optimization",
      agent: "Agent Beta",
      apy: "8.2% APY",
    },
  ]);

  const handleAction = () => {
    setError("");
    setSuccess("");
    const numAmount = parseFloat(amount);

    if (!amount || isNaN(numAmount)) {
      setError("Please enter a valid amount.");
      return;
    }

    if (numAmount <= 0) {
      setError("Amount must be greater than 0.");
      return;
    }

    if (mode === "withdraw" && numAmount > balance) {
      setError("Insufficient balance.");
      return;
    }

    if (mode === "deposit") {
      setBalance((prev) => prev + numAmount);
      setSuccess(`Successfully deposited $${numAmount.toFixed(2)} ${selectedToken.symbol}`);
    } else {
      setBalance((prev) => prev - numAmount);
      setSuccess(`Successfully withdrew $${numAmount.toFixed(2)} ${selectedToken.symbol}`);
    }
  };

  const handleApprove = (id: number) => {
    console.log(`Approved strategy ${id}`);
    setPendingApprovals((prev) => prev.filter((item) => item.id !== id));
  };

  const handleReject = (id: number) => {
    console.log(`Rejected strategy ${id}`);
    setPendingApprovals((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="bg-surface-container-lowest text-on-surface font-body antialiased min-h-screen flex">
      <Sidebar active="vault" variant="default" />
      <main className="flex-1 ml-0 md:ml-[220px] flex flex-col min-h-screen">
        <Topbar variant="vault" />
        <div className="p-8 flex flex-col gap-8 max-w-7xl mx-auto w-full">
          {/* Row 1: Key Metrics Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-surface p-6 rounded-[16px] flex flex-col justify-between border-l-2 border-primary-container">
              <span className="text-secondary text-sm font-medium mb-4">Total Balance</span>
              <div className="text-[28px] font-bold text-white tabular-nums tracking-tight">$10,247.38</div>
            </div>
            <div className="bg-surface p-6 rounded-[16px] flex flex-col justify-between relative overflow-hidden">
              <div className="absolute right-0 bottom-0 w-32 h-32 bg-primary/5 rounded-tl-full -mr-8 -mb-8"></div>
              <span className="text-secondary text-sm font-medium mb-4 relative z-10">Allocated</span>
              <div className="flex items-baseline gap-3 relative z-10">
                <div className="text-[28px] font-bold text-white tabular-nums tracking-tight">$8,100.00</div>
                <span className="text-xs text-secondary">79.1% of vault</span>
              </div>
            </div>
            <div className="bg-surface p-6 rounded-[16px] flex flex-col justify-between">
              <div className="flex items-center justify-between mb-4">
                <span className="text-secondary text-sm font-medium">Pending Approvals</span>
                <div className={`w-2.5 h-2.5 rounded-full bg-tertiary ${pendingApprovals.length > 0 ? "animate-pulse" : ""}`}></div>
              </div>
              <div className="text-[28px] font-bold text-white tabular-nums tracking-tight">{pendingApprovals.length}</div>
            </div>
          </div>

          {/* Row 2: Deposit / Withdraw & Pending Approvals List */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4 bg-surface rounded-[16px] p-6 flex flex-col gap-6">
              <div className="flex p-1 bg-surface-container-low rounded-lg">
                <button
                  onClick={() => { setMode("deposit"); setError(""); setSuccess(""); }}
                  className={`flex-1 py-2 text-sm font-medium transition-all ${
                    mode === "deposit"
                      ? "text-white bg-surface-container rounded-md shadow-sm"
                      : "text-secondary hover:text-white"
                  }`}
                >
                  Deposit
                </button>
                <button
                  onClick={() => { setMode("withdraw"); setError(""); setSuccess(""); }}
                  className={`flex-1 py-2 text-sm font-medium transition-all ${
                    mode === "withdraw"
                      ? "text-white bg-surface-container rounded-md shadow-sm"
                      : "text-secondary hover:text-white"
                  }`}
                >
                  Withdraw
                </button>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="relative" ref={dropdownRef}>
                    <button 
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="flex items-center gap-2 bg-surface-container-low border border-[rgba(67,70,84,0.15)] rounded-lg px-4 py-3 hover:bg-surface-container transition-colors active:scale-95"
                    >
                      <div className={`w-6 h-6 rounded-full ${selectedToken.color} flex items-center justify-center text-[10px] font-bold ${selectedToken.textClass}`}>
                        {selectedToken.symbol}
                      </div>
                      <span className="font-medium text-sm w-8 text-left">{selectedToken.symbol}</span>
                      <span className="material-symbols-outlined text-[16px] text-secondary">expand_more</span>
                    </button>

                    {isDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-full min-w-[120px] bg-surface-container-highest border border-[rgba(67,70,84,0.15)] rounded-lg overflow-hidden z-50 shadow-lg">
                        {tokens.map((token) => (
                          <button
                            key={token.symbol}
                            onClick={() => {
                              setSelectedToken(token);
                              setIsDropdownOpen(false);
                            }}
                            className="w-full flex items-center gap-2 px-4 py-3 hover:bg-surface-container transition-colors text-left"
                          >
                            <div className={`w-6 h-6 rounded-full ${token.color} flex items-center justify-center text-[10px] font-bold ${token.textClass}`}>
                              {token.symbol}
                            </div>
                            <span className="font-medium text-sm text-white">{token.symbol}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="flex-1 relative">
                    <input
                      value={amount}
                      onChange={(e) => {
                        setAmount(e.target.value);
                        setError("");
                        setSuccess("");
                      }}
                      className="w-full bg-surface-container-lowest border border-[rgba(67,70,84,0.15)] rounded-lg px-4 py-3 text-right text-white font-medium tabular-nums focus:border-primary/100 focus:ring-0 transition-colors"
                      placeholder="0.00"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-secondary">
                    Vault Balance: <span className="text-white tabular-nums">${balance.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                  </span>
                  <button
                    onClick={() => {
                      setAmount(balance.toString());
                      setError("");
                      setSuccess("");
                    }}
                    className="text-primary hover:text-primary-container font-medium transition-colors active:scale-95"
                  >
                    Max
                  </button>
                </div>
              </div>
              
              <div className="flex flex-col gap-2 mt-auto">
                {error && <p className="text-error text-xs text-center">{error}</p>}
                {success && <p className="text-[#4ade80] text-xs text-center">{success}</p>}
                <button
                  onClick={handleAction}
                  className="w-full bg-primary text-on-primary font-bold py-3.5 rounded-[12px] hover:bg-primary-fixed-dim transition-colors active:scale-[0.98]"
                >
                  {mode === "deposit" ? "Deposit" : "Withdraw"}
                </button>
              </div>
            </div>

            <div className="lg:col-span-8 bg-surface rounded-[16px] p-6 flex flex-col">
              <h3 className="text-sm font-medium text-secondary mb-6 tracking-wide">PENDING APPROVALS</h3>
              {pendingApprovals.length === 0 ? (
                <div className="text-sm text-secondary flex-1 flex items-center justify-center min-h-[150px]">
                  No pending approvals.
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  {pendingApprovals.map((approval) => (
                    <div
                      key={approval.id}
                      className="bg-surface-container-low hover:bg-surface-container p-4 rounded-[12px] flex items-center justify-between transition-colors border-l-2 border-tertiary"
                    >
                      <div className="flex flex-col gap-1">
                        <span className="text-sm font-bold text-white">{approval.name}</span>
                        <div className="flex items-center gap-3 text-xs">
                          <span className="text-secondary">{approval.agent}</span>
                          <span className="text-[#4ade80] font-medium tabular-nums">{approval.apy}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleReject(approval.id)}
                          className="px-4 py-1.5 border border-error/30 text-error rounded-md text-xs font-medium hover:bg-error/10 transition-colors active:scale-95"
                        >
                          Reject
                        </button>
                        <button
                          onClick={() => handleApprove(approval.id)}
                          className="px-4 py-1.5 border border-[#4ade80]/30 text-[#4ade80] rounded-md text-xs font-medium hover:bg-[#4ade80]/10 transition-colors active:scale-95"
                        >
                          Approve
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Row 4: Transaction History */}
          <div className="bg-surface rounded-[16px] p-6">
            <h3 className="text-sm font-medium text-secondary mb-6 tracking-wide">TRANSACTION HISTORY</h3>
            <div className="w-full overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="text-[11px] uppercase tracking-[0.05em] text-secondary border-b border-[#1A1C1F]">
                    <th className="pb-3 font-medium">Type</th>
                    <th className="pb-3 font-medium">Asset</th>
                    <th className="pb-3 font-medium text-right">Amount</th>
                    <th className="pb-3 font-medium text-center">Status</th>
                    <th className="pb-3 font-medium text-right">Date</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="hover:bg-surface-container-low transition-colors group">
                    <td className="py-4 font-medium text-white">Deposit</td>
                    <td className="py-4 text-secondary">USDC</td>
                    <td className="py-4 text-right tabular-nums text-white">+5,000.00</td>
                    <td className="py-4 text-center">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-[#4ade80]/10 text-[#4ade80]">Confirmed</span>
                    </td>
                    <td className="py-4 text-right text-secondary tabular-nums">Oct 24, 14:32</td>
                  </tr>
                  <tr className="hover:bg-surface-container-low transition-colors group">
                    <td className="py-4 font-medium text-white">Strategy Allocation</td>
                    <td className="py-4 text-secondary">ETH</td>
                    <td className="py-4 text-right tabular-nums text-white">-2.50</td>
                    <td className="py-4 text-center">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-tertiary/10 text-tertiary">Pending</span>
                    </td>
                    <td className="py-4 text-right text-secondary tabular-nums">Oct 23, 09:15</td>
                  </tr>
                  <tr className="hover:bg-surface-container-low transition-colors group">
                    <td className="py-4 font-medium text-white">Withdraw</td>
                    <td className="py-4 text-secondary">USDT</td>
                    <td className="py-4 text-right tabular-nums text-white">-1,200.00</td>
                    <td className="py-4 text-center">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-[#4ade80]/10 text-[#4ade80]">Confirmed</span>
                    </td>
                    <td className="py-4 text-right text-secondary tabular-nums">Oct 21, 11:45</td>
                  </tr>
                  <tr className="hover:bg-surface-container-low transition-colors group">
                    <td className="py-4 font-medium text-white">Deposit</td>
                    <td className="py-4 text-secondary">DAI</td>
                    <td className="py-4 text-right tabular-nums text-white">+3,500.00</td>
                    <td className="py-4 text-center">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-error/10 text-error">Failed</span>
                    </td>
                    <td className="py-4 text-right text-secondary tabular-nums">Oct 19, 16:20</td>
                  </tr>
                  <tr className="hover:bg-surface-container-low transition-colors group">
                    <td className="py-4 font-medium text-white">Strategy Yield</td>
                    <td className="py-4 text-secondary">USDC</td>
                    <td className="py-4 text-right tabular-nums text-[#4ade80]">+142.38</td>
                    <td className="py-4 text-center">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-[#4ade80]/10 text-[#4ade80]">Confirmed</span>
                    </td>
                    <td className="py-4 text-right text-secondary tabular-nums">Oct 18, 00:01</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
