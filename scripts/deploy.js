// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {

  const TeleBlocksNumbers = await hre.ethers.getContractFactory("TeleBlocksNumbers");
  const teleblocksnumbers = await TeleBlocksNumbers.deploy();

  await teleblocksnumbers.deployed();

  console.log("My NFT deployed to:", teleblocksnumbers.address);
}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
