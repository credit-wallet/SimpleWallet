/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.0",
  paths: {
    sources: "./contracts",
  },
  networks: {
    localhost: {
      chainId: 31337,
    },
  },
};
