import { ethers } from 'ethers';
import { useEthers } from 'vue-dapp';
import tokens from "../../abi/tokens.json";

const { chainId } = useEthers();

export default {
  namespaced: true,
  
  state: () => ({
    networkCurrency: "ETH",
    networkName: "Unsupported Network",
    supportedNetworks: {
      1: "Ethereum",
      42161: "Arbitrum",
      56: "BNB Smart Chain",
      421611: "Arbitrum Testnet",
      8001: "Mumbai"   

    }
  }),

  getters: { 
    getBlockExplorerBaseUrl() {
      if (chainId.value === 1) {
        return "https://etherscan.io";
      } else if (chainId.value === 3) {
        return "https://ropsten.etherscan.io";
      } else if (chainId.value === 4) {
        return "https://rinkeby.etherscan.io";
      } else if (chainId.value === 10) {
        return "https://optimistic.etherscan.io";
      } else if (chainId.value === 56) {
        return "https://bscscan.com";
      } else if (chainId.value === 97) {
        return "https://testnet.bscscan.com";
      } else if (chainId.value === 69) {
        return "https://kovan-optimistic.etherscan.io";
      } else if (chainId.value === 77) {
        return "https://blockscout.com/poa/sokol";
      } else if (chainId.value === 100) {
        return "https://blockscout.com/xdai/mainnet";
      } else if (chainId.value === 137) {
        return "https://polygonscan.com";
      } else if (chainId.value === 42161) {
        return "https://arbiscan.io";
      } else if (chainId.value === 80001) {
        return "https://mumbai.polygonscan.com";
      } else if (chainId.value === 421611) {
        return "https://testnet.arbiscan.io";
      } else if (chainId.value === 2000) {
        return "https://explorer.dogechain.dog/";
      } else if (chainId.value === 568) {
        return "https://explorer-testnet.dogechain.dog/";
      }
    },
    
    getChainId() {
      return chainId.value;
    },

    getFallbackProvider: (state) => (networkId) => {
      let urls;

      if (networkId === 1) {
        // Ethereum
        urls = [
          "https://eth-mainnet.g.alchemy.com/v2/" + import.meta.env.VITE_ALCHEMY_ETHEREUM_KEY
        ];
      } else if (networkId === 3) {
        // Ropsten testnet
      } else if (networkId === 4) {
        // Rinkeby testnet
      } else if (networkId === 10) {
        // Optimism
        urls = [
          "https://mainnet.optimism.io", 
          "https://opt-mainnet.g.alchemy.com/v2/" + import.meta.env.VITE_ALCHEMY_OPTIMISM_KEY
        ]; 
      } else if (networkId === 56) {
        // BSC mainnet
        urls = [
          "https://bscrpc.com"
        ];
      } else if (networkId === 97) {
        // BSC testner
        urls = [
          "https://data-seed-prebsc-1-s1.binance.org:8545"
        ];
      } else if (networkId === 69) {
        // Optimism testnet
        urls = [
          "https://kovan.optimism.io"
        ];
      } else if (networkId === 77) {
        // Gnosis Chain testnet (Sokol)
        urls = [
          "https://sokol.poa.network"
        ];
      } else if (networkId === 100) {
        // Gnosis Chain
        urls = [
          "https://rpc.xdaichain.com",
          "https://rpc.gnosischain.com"
        ];
      } else if (networkId === 137) {
        // Polygon PoS Chain
        urls = [
          "https://polygon-rpc.com/", 
          "https://polygon-mainnet.g.alchemy.com/v2/" + import.meta.env.VITE_ALCHEMY_POLYGON_KEY
        ];
      } else if (networkId === 42161) {
        // Arbitrum
        urls = [
          "https://arb1.arbitrum.io/rpc",
          "https://arb-mainnet.g.alchemy.com/v2/" + import.meta.env.VITE_ALCHEMY_ARBITRUM_KEY
        ];
      } else if (networkId === 80001) {
        // Mumbai testnet (Polygon testnet)
        urls = [
          "https://matic-mumbai.chainstacklabs.com",
          "https://polygon-mumbai.g.alchemy.com/v2/" + import.meta.env.VITE_ALCHEMY_MUMBAI_KEY
        ]
      } else if (networkId === 421611) {
        // Arbitrum testnet
        urls = [
          "https://rinkeby.arbitrum.io/rpc"
        ];
      } else if (networkId === 568) {
        // Dogechain testnet
        urls = [
          "https://rpc-testnet.dogechain.dog"
        ];
      } else if (networkId === 2000) {
        // Dogechain Mainnet
        urls = [
          "https://rpc02-sg.dogechain.dog"
        ];
      }

      if (urls) {
        const providers = urls.map(url => new ethers.providers.JsonRpcProvider(url));
        return new ethers.providers.FallbackProvider(providers, 1); // return fallback provider
      } else {
        return null;
      }
    },

    getNetworkCurrency(state) {
      return state.networkCurrency;
    },

    getNetworkName(state) {
      const supportedIds = Object.keys(state.supportedNetworks);

      if (supportedIds && supportedIds.includes(String(chainId.value))) {
        return state.networkName;
      }

      return "Unsupported Network";
    },

    getSupportedNetworks(state) {
      return state.supportedNetworks;
    },

    getSupportedNetworkIds(state) {
      return Object.keys(state.supportedNetworks);
    },

    getSupportedNetworkNames(state) {
      return Object.values(state.supportedNetworks);
    },

    getTokens(state) {
      return tokens[String(chainId.value)]
    },

    isNetworkSupported(state) {
      const supportedIds = Object.keys(state.supportedNetworks);

      if (supportedIds && supportedIds.includes(String(chainId.value))) {
        return true;
      }

      return false;
    }
  },

  mutations: { 
    setNetworkData(state) {
      if (chainId.value === 137) {
        state.networkName = "Polygon";
        state.networkCurrency = "MATIC";
      } else if (chainId.value === 1) {
        state.networkName = "Ethereum";
        state.networkCurrency = "ETH";
      } else if (chainId.value === 10) {
        state.networkName = "Optimism";
        state.networkCurrency = "ETH";
      } else if (chainId.value === 56) {
        state.networkName = "BNB Smart Chain";
        state.networkCurrency = "BNB";
      } else if (chainId.value === 69) {
        state.networkName = "Optimism Testnet";
        state.networkCurrency = "ETH";
      } else if (chainId.value === 77) {
        state.networkName = "Gnosis Testnet";
        state.networkCurrency = "SPOA";
      } else if (chainId.value === 100) {
        state.networkName = "Gnosis Chain";
        state.networkCurrency = "XDAI";
      } else if (chainId.value === 137) {
        state.networkName = "Polygon";
        state.networkCurrency = "MATIC";
      } else if (chainId.value === 42161) {
        state.networkName = "Arbitrum";
        state.networkCurrency = "ETH";
      } else if (chainId.value === 421611) {
        state.networkName = "Arbitrum Testnet";
        state.networkCurrency = "ETH";
      } else if (chainId.value === 80001) {
        state.networkName = "Polygon Testnet";
        state.networkCurrency = "MATIC";
      } else if (chainId.value === 3) {
        state.networkName = "Ropsten";
        state.networkCurrency = "ETH";
      } else if (chainId.value === 568) {
        state.networkName = "Doge Testnet";
        state.networkCurrency = "DOGE";
      } else if (chainId.value === 2000) {
        state.networkName = "Dogechain";
        state.networkCurrency = "DOGE";
      } else if (chainId.value === 4) {
        state.networkName = "Rinkeby";
        state.networkCurrency = "ETH";
      } else {
        state.networkName = "Unsupported Network";
        state.networkCurrency = "ETH";
      }
    }
  },

  actions: { 
    
  }

};