// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
const Web3 = require("web3");
const web3 = new Web3();

import { wait } from "./utils";

async function main() {
  // Deploy the SCLP token
  const sclpTokenBSC = "0xf2c96e402c9199682d5ded26d3771c6b192c01af";

  const args = [
    "0xca41f33c4415734993fFD22BE9D2B7Baf570d3A7", // address _rewardsDistribution,
    sclpTokenBSC, // address _rewardsToken,
    sclpTokenBSC, // address _rewardsToken,
    86400 * 365, // uint256 _rewardsDuration - 1yr
    1762005600, // uint256 _withdrawUnlock
  ];

  // console.log("deploying contract", args);
  // const Contract = await hre.ethers.getContractFactory("Staking4Y");
  // const contract = await Contract.deploy(...args);
  // await contract.deployed();
  // console.log("contract deployed to:", contract.address);

  // await wait(30 * 1000); // 30sec wait

  await hre.run("verify:verify", {
    address: "0x9C1a1A2Bd7a4174Ea1D1789e71d672a0aDc22662",
    // contract: "contracts/Staking4Y.sol:Staking4Y",
    constructorArguments: args,
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
