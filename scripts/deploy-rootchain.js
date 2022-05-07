// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
const Web3 = require('web3');
const web3 = new Web3();

async function main() {
  // // Deploy the SCLP token
  // console.log('deploying token')
  // const ScallopToken = await hre.ethers.getContractFactory("FwdRootToken");
  // const token = await ScallopToken.deploy();
  // await token.deployed();
  // console.log("token deployed to:", token.address);

  // // set this accordingly
  const proxyAdmin = '0x7CeC523498c2C50fF305a9d07E4a38DaCd8ec0c5';
  const contractOwner = '0xe1bbAd157E8A0235f1083e50AbDbEfC773dc627f';

  // // Deploy proxy contract
  const encodedFunctionSignature = web3.eth.abi.encodeFunctionCall({
    name: 'initialize',
    type: 'function',
    inputs: [{
        type: 'address',
        name: 'owner'
      }]
    }, [contractOwner]
  );

  // console.log('deploying proxy');
  // const ProxyContract = await hre.ethers.getContractFactory("ScallopProxy");
  // const proxy = await ProxyContract.deploy(
  //   token.address,
  //   proxyAdmin,
  //   encodedFunctionSignature
  // );
  // await proxy.deployed();

  // console.log('proxy at', proxy.address);

  // verify token contract
  // await hre.run("verify:verify", {
  //   address: '0x70b87A965BE8BB33B1c28dbC28f3eD5bD2D78D3b',
  //   constructorArguments: [],
  // });


  await hre.run("verify:verify", {
    address: '0x933DBF44b42087E01f92e3e74e1FA5efebAE527c',
    contract: 'contracts/ScallopProxy.sol:ScallopProxy',
    constructorArguments: [
      '0x70b87A965BE8BB33B1c28dbC28f3eD5bD2D78D3b',
      proxyAdmin,
      encodedFunctionSignature
    ],
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
