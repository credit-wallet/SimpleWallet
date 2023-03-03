const { ethers } = require("hardhat");

async function main() {
  const WalletFactory = await ethers.getContractFactory("WalletFactory");
  const walletFactory = await WalletFactory.deploy();

  console.log("WalletFactory deployed to:", walletFactory.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
