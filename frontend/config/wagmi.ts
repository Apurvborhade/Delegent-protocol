import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { mainnet, arbitrum, base } from "@reown/appkit/networks";

export const projectId = "YOUR_PROJECT_ID";

export const networks = [mainnet, arbitrum, base] as [any, ...any[]];

export const wagmiAdapter = new WagmiAdapter({
  projectId,
  networks,
});

export const config = wagmiAdapter.wagmiConfig;
