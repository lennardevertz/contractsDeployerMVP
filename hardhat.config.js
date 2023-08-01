require("@nomicfoundation/hardhat-toolbox");
/** @type import('hardhat/config').HardhatUserConfig */
require("@truffle/dashboard-hardhat-plugin");

module.exports = {
  solidity: "0.8.17",
  settings: {
      optimizer: {
        enabled: true,
        runs: 100,
      },
    },

  networks: {
    truffledashboard: {
      url: "http://localhost:24012/rpc"
    },
    optimisticEthereum: {
      url: "https://mainnet.optimism.io",
      // use some dummy PK
      accounts: [
          ""
      ],
    },
    optimisticGoerli: {
      url: "https://goerli.optimism.io",
      // use some dummy PK
      accounts: [
          ""
      ],
    },
  },
  etherscan: {
    apiKey: {
      optimisticGoerli: "",
      optimisticEthereum: "",
    },
  },
};
