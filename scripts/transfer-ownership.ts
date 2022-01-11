// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";

async function main() {
  // set this accordingly
  const newOwner = "0x3E53029B647248EA368f59F4C9E6cDfD3eaFa3aE";
  const target = "0x29afBa149e1B9D18198aAA075Ef4657a0949Af6c";

  const contract = await ethers.getContractAt(
    "contracts/lib/Ownable.sol:Ownable",
    target
  );

  console.log("transferring owernship to", newOwner);
  await contract.transferOwnership(newOwner);

  console.log("done");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
