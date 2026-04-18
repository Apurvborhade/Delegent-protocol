"use client";

import { useEffect, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Sidebar } from "@/components/layout/sidebar";
import { Topbar } from "@/components/layout/topbar";
import Link from "next/link";
import { useWallet } from "@/context/WalletContext";
import { api, type ProposalResponse } from "@/lib/api";

type StrategyCard = {
  id: string;
  name: string;
  riskLevel: string;
  riskColor: string;
  agent: string;
  description: string;
  apy: number;
  riskScore: number;
  agentRep: number;
  tvl: number;
  protocols: string[];
  isTrending: boolean;
};

function toRiskColor(riskLevel: ProposalResponse["riskLevel"]) {
  if (riskLevel === "high") {
    return "text-error border-error/30";
  }
  if (riskLevel === "medium") {
    return "text-tertiary border-tertiary/30";
  }
  return "text-emerald-400 border-emerald-400/30";
}

function toRiskLabel(riskLevel: ProposalResponse["riskLevel"]) {
  if (riskLevel === "high") return "High Risk";
  if (riskLevel === "medium") return "Medium Risk";
  return "Low Risk";
}

function toRiskScore(riskLevel: ProposalResponse["riskLevel"]) {
  if (riskLevel === "high") return 8.5;
  if (riskLevel === "medium") return 5;
  return 2;
}

function buildStrategies(proposals: ProposalResponse[] | undefined): StrategyCard[] {
  if (!proposals?.length) {
    return [];
  }

  return proposals.map((proposal) => ({
    id: proposal.id,
    name: proposal.title,
    riskLevel: toRiskLabel(proposal.riskLevel),
    riskColor: toRiskColor(proposal.riskLevel),
    agent: proposal.proposerAgentId,
    description: proposal.summary,
    apy: proposal.expectedApyBps / 100,
    riskScore: toRiskScore(proposal.riskLevel),
    agentRep: Number((proposal.marketSnapshot.confidence * 100).toFixed(1)),
    tvl: Number.parseFloat(proposal.calls?.[0]?.value ?? "0"),
    protocols: [proposal.protocolPlan.protocol],
    isTrending: proposal.status === "pending",
  }));
}

export default function StrategyMarketPage() {
  const { address, isConnected } = useWallet();
  const [searchQuery, setSearchQuery] = useState("");
  const [filterRisk, setFilterRisk] = useState("All");
  const [sortBy, setSortBy] = useState("APY (High to Low)");

  const proposalsQuery = useQuery({
    queryKey: ["strategy-market", address],
    queryFn: () => api.getProposals(address as string),
    enabled: isConnected && !!address,
    staleTime: 30_000,
  });

  useEffect(() => {
    if (proposalsQuery.error) {
      console.error("Failed to fetch strategies", proposalsQuery.error);
    }
  }, [proposalsQuery.error]);

  const strategies = useMemo(
    () => buildStrategies(proposalsQuery.data?.proposals),
    [proposalsQuery.data?.proposals],
  );

  const filteredAndSortedStrategies = useMemo(() => {
    let result = [...strategies];

    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      result = result.filter(
        (strategy) =>
          strategy.name.toLowerCase().includes(lowerQuery) ||
          strategy.description.toLowerCase().includes(lowerQuery),
      );
    }

    if (filterRisk !== "All") {
      if (filterRisk === "Trending") {
        result = result.filter((strategy) => strategy.isTrending);
      } else {
        result = result.filter((strategy) => strategy.riskLevel === filterRisk);
      }
    }

    result.sort((a, b) => {
      switch (sortBy) {
        case "APY (High to Low)":
          return b.apy - a.apy;
        case "APY (Low to High)":
          return a.apy - b.apy;
        case "Risk (Low to High)":
          return a.riskScore - b.riskScore;
        case "TVL (High to Low)":
          return b.tvl - a.tvl;
        default:
          return 0;
      }
    });

    return result;
  }, [strategies, searchQuery, filterRisk, sortBy]);

  return (
    <div className="bg-surface-container-lowest text-on-surface antialiased min-h-screen">
      <Sidebar active="strategy-market" variant="strategy" />
      <Topbar variant="strategy" />

      <main className="md:ml-[220px] p-8 pt-8 min-h-screen bg-surface">
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 gap-6">
          <div>
            <h2 className="text-[22px] font-bold text-white tracking-tight mb-2">Strategy Market</h2>
            <p className="text-sm text-secondary">
              AI agents compete to execute the best yield strategies for your vault.
            </p>
          </div>
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {proposalsQuery.isLoading && (
            <div className="bg-[#111214] rounded-[12px] p-6 border border-outline-variant/15 text-secondary">
              Loading strategies...
            </div>
          )}
          {proposalsQuery.isError && (
            <div className="bg-[#111214] rounded-[12px] p-6 border border-outline-variant/15 text-secondary">
              Unable to load strategies.
            </div>
          )}
          {!proposalsQuery.isLoading &&
            !proposalsQuery.isError &&
            filteredAndSortedStrategies.length === 0 && (
              <div className="bg-[#111214] rounded-[12px] p-6 border border-outline-variant/15 text-secondary">
                No strategies found for this vault.
              </div>
            )}
          {!proposalsQuery.isLoading &&
            !proposalsQuery.isError &&
            filteredAndSortedStrategies.map((strategy) => (
              <div
                key={strategy.id}
                className="bg-[#111214] rounded-[12px] p-6 border border-outline-variant/15 flex flex-col justify-between group hover:bg-surface-container-low transition-colors duration-200"
              >
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-base font-semibold text-white tracking-tight">{strategy.name}</h3>
                    <span
                      className={`px-2 py-0.5 text-[11px] font-medium uppercase tracking-wider border rounded ${strategy.riskColor}`}
                    >
                      {strategy.riskLevel}
                    </span>
                  </div>
                  <div className="text-[12px] text-secondary mb-4">by {strategy.agent}</div>
                  <p className="text-sm text-on-surface-variant line-clamp-2 mb-6">{strategy.description}</p>
                  <div className="flex items-center gap-6 mb-6">
                    <div className="flex flex-col">
                      <span className="text-[11px] text-secondary uppercase tracking-widest mb-1">APY</span>
                      <span className="text-lg font-bold text-white tabular-nums">{strategy.apy.toFixed(1)}%</span>
                    </div>
                    <div className="w-px h-8 bg-surface-container-high"></div>
                    <div className="flex flex-col">
                      <span className="text-[11px] text-secondary uppercase tracking-widest mb-1">
                        Risk Score
                      </span>
                      <span className="text-sm font-medium text-white tabular-nums mt-1">
                        {strategy.riskScore.toFixed(1)} / 10
                      </span>
                    </div>
                    <div className="w-px h-8 bg-surface-container-high"></div>
                    <div className="flex flex-col">
                      <span className="text-[11px] text-secondary uppercase tracking-widest mb-1">Agent Rep</span>
                      <span className="text-sm font-medium text-white tabular-nums mt-1">
                        {strategy.agentRep.toFixed(1)}%
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-surface-container-low">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-secondary">Protocols:</span>
                    {strategy.protocols.map((protocol) => (
                      <span
                        key={protocol}
                        className="px-2 py-1 text-[10px] bg-surface-container text-on-surface-variant rounded"
                      >
                        {protocol}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/strategy/${strategy.id}`}
                    className="px-4 py-2 text-xs font-medium text-primary border border-outline-variant/20 rounded-lg hover:bg-primary/5 transition-colors"
                  >
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

