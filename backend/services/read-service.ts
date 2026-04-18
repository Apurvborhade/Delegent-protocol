import type { Address } from "../../shared/types.js";
import { getMarketplaceRepository } from "../repositories/index.js";
import {
  fetchAgentIdentity,
  fetchAgentMetadata,
  fetchAllFeedback,
  fetchFeedbackSummary,
  fetchReputation,
  fetchVaultAssetBalance,
  fetchVaultBalance,
  getChainContext,
} from "./contracts-service.js";

export async function getReputation(agentAddress: Address) {
  const stored = await getMarketplaceRepository().getAgentByAddress(agentAddress);
  return fetchReputation(agentAddress, stored?.registryAgentId);
}

export async function getAgentMetadataByKey(registryAgentId: string, key?: string) {
  if (!key) {
    throw new Error("Metadata query requires ?key=...");
  }

  return fetchAgentMetadata(registryAgentId, key);
}

export async function getAgentIdentity(agent: string) {
  const repository = getMarketplaceRepository();
  const isAddress = /^0x[a-fA-F0-9]{40}$/.test(agent);

  let stored = isAddress
    ? await repository.getAgentByAddress(agent)
    : await repository.getAgent(agent);

  const resolvedAddress = isAddress ? agent : stored?.agentAddress;

  if (!resolvedAddress || !/^0x[a-fA-F0-9]{40}$/.test(resolvedAddress)) {
    throw new Error("Agent must resolve to a valid EVM address via agentId or agentAddress.");
  }

  if (!stored) {
    stored = await repository.getAgentByAddress(resolvedAddress);
  }

  const onchain = await fetchAgentIdentity(resolvedAddress as Address, stored?.registryAgentId);

  return {
    ...onchain,
    agentUri: stored?.agentUri ?? onchain.agentUri,
    verifiedWallet: stored?.verifiedWallet ?? onchain.verifiedWallet,
    metadata: stored?.metadata ?? onchain.metadata,
    identityDocument: stored?.identityDocument,
    identityUpload: stored?.identityUpload,
  };
}

export async function getFeedbackSummaryForAgent(registryAgentId: string) {
  const onchain = await fetchFeedbackSummary(registryAgentId);
  if (onchain.source === "onchain" && onchain.totalFeedback > 0) {
    return onchain;
  }

  const feedback = await getMarketplaceRepository().listFeedback(registryAgentId);
  const totalFeedback = feedback.length;
  const positiveFeedback = feedback.filter((entry) => entry.score >= 7).length;
  const negativeFeedback = feedback.filter((entry) => entry.score <= 4).length;
  const averageScore =
    totalFeedback > 0
      ? feedback.reduce((sum, entry) => sum + entry.score, 0) / totalFeedback
      : 0;

  return {
    registryAgentId,
    averageScore,
    totalFeedback,
    positiveFeedback,
    negativeFeedback,
    source: totalFeedback > 0 ? ("mock" as const) : onchain.source,
  };
}

export async function getAllFeedbackForAgent(registryAgentId: string) {
  return fetchAllFeedback(registryAgentId);
}

export async function getVaultBalanceForRequest(vault: string, assetAddress?: string) {
  if (
    assetAddress &&
    /^0x[a-fA-F0-9]{40}$/.test(vault) &&
    /^0x[a-fA-F0-9]{40}$/.test(assetAddress)
  ) {
    return {
      vault,
      assetAddress,
      balance: (await fetchVaultAssetBalance(vault as Address, assetAddress as Address)).toString(),
    };
  }

  return {
    vault,
    balance: (await fetchVaultBalance(vault)).toString(),
  };
}

export function getHealth() {
  return {
    ok: true,
    service: "delegent-backend",
    chain: getChainContext(),
  };
}
