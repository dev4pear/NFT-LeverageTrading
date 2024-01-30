import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  connectorsForWallets,
  getDefaultWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { mainnet, polygon, bsc, goerli, bscTestnet } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

import {
  trustWallet,
  coinbaseWallet,
  metaMaskWallet,
} from "@rainbow-me/rainbowkit/wallets";

import "@rainbow-me/rainbowkit/styles.css";

const { chains, publicClient } = configureChains(
  [mainnet, goerli, bsc, bscTestnet, polygon],
  [
    alchemyProvider({
      apiKey:
        process.env.REACT_APP_ALCHEMY_API_KEY ||
        "ekZhZsGjfWuK39pYW_YXSEcRKDN8amSN",
    }),
    publicProvider(),
  ]
);

// const { connectors } = getDefaultWallets({
//   appName: process.env.REACT_APP_NAME || "NFT Leverage Trading",
//   projectId:
//     process.env.REACT_APP_PROJECT_ID || "698cc4759eac37f938534cecb46644df",
//   chains,
// });

const projectId =
  process.env.REACT_APP_PROJECT_ID || "698cc4759eac37f938534cecb46644df";

const connectors = connectorsForWallets([
  {
    groupName: "My Wallets",
    wallets: [
      metaMaskWallet({ chains, projectId }),
      trustWallet({ chains, projectId }),
      coinbaseWallet({
        appName: process.env.REACT_APP_NAME || "NFT Leverage Trading",
        chains,
      }),
    ],
  },
]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <App />
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
