// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
const Web3 = require("web3");
import { wait } from "./utils";

async function main() {
  // set this accordingly
  const token = "0xF2c96E402c9199682d5dED26D3771c6B192c01af";
  const owner = "0x3E53029B647248EA368f59F4C9E6cDfD3eaFa3aE";
  const beneficiary = "0x3E53029B647248EA368f59F4C9E6cDfD3eaFa3aE";

  const contracts = ["AdvisorsVesting"];

  for (let index = 0; index < contracts.length; index++) {
    const contract = contracts[index];

    console.log(`deploying ${contract}`);
    const Contract = await hre.ethers.getContractFactory(contract);
    const instance = await Contract.deploy(token, beneficiary, owner);
    await instance.deployed();
    console.log(`${contract} at`, instance.address);

    console.log("waiting for 5 blocks");
    await wait(15000);

    console.log(`verifying ${contract} at ${instance}`);
    await hre.run("verify:verify", {
      address: instance.address,
      contract: "contracts/vesting/AdvisorsVesting.sol:AdvisorsVesting",
      constructorArguments: [token, beneficiary, owner],
    });
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
