const supportedChains = [
  {
    name: "Polygon Mumbai",
    short_name: "pos",
    chain: "polygon",
    network: "testnet",
    chain_id: 80001,
    network_id: 80001,
    rpc_url: `https://rpc-mumbai.maticvigil.com/v1/${process.env.RPC_MUMBAI_MATICVIGIL}`,
    native_currency: {
      symbol: "MATIC",
      name: "MATIC",
      decimals: "18",
      contractAddress: "",
      balance: "",
    },
    mainnet: false,
  },
];

export { supportedChains };
