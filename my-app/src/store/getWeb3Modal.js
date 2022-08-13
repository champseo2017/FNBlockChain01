import React from "react"
import Web3Modal from "web3modal";
import create from "zustand"
import WalletConnectProvider from "@walletconnect/web3-provider";

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      rpc: {
        80001: `https://rpc-mumbai.maticvigil.com/v1/${process.env.RPC_MUMBAI_MATICVIGIL}`,
      },
    },
  },
}

const getWeb3Modal = create((set) => ({
  web3Modal: null,
  connectWeb3Modal: () => {
    const web3Modal = new Web3Modal({
      network: "testnet",
      cacheProvider: true,
      theme: "dark",
      providerOptions,
    });
    set((state) => {
      state.web3Modal = web3Modal;
    })
  },
}))

export {
  getWeb3Modal
}