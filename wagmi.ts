import { Chain, getDefaultConfig } from "@rainbow-me/rainbowkit";
import { mainnet } from "wagmi/chains";

const bsc = {
  id: Number("56"),
  name: "BNB Chain",
  iconUrl: "https://s2.coinmarketcap.com/static/img/coins/200x200/1839.png",
  nativeCurrency: { name: "Binance Smart Chain", symbol: "BSC", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://bsc-dataseed.binance.org/"] },
  },
  blockExplorers: {
    default: {
      name: "BNB Block Explorer",
      url: "https://bscscan.com/",
    },
  },
} as const satisfies Chain;

export const config = getDefaultConfig({
  appName: "Zeroloss",
  projectId: "YOUR_PROJECT_ID",
  chains: [bsc, mainnet],
  ssr: true,
});
