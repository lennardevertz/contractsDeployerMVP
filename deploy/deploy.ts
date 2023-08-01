const { ethers } = require("hardhat");
// npm link typescript
//npx hardhat run --network truffledashboard deploy/deploy.ts

async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    console.log("Account balance:", (await deployer.getBalance()).toString());
    // Deploy the Oracle contract
    const Contract = await ethers.getContractFactory("TippingPG");
    // first: chainlink oracle
    // second: EAS attester contract
    const contract = await Contract.deploy("0x57241A37733983F97C4Ab06448F244A1E0Ca0ba8", "0x4200000000000000000000000000000000000021");
    await contract.deployed();
    console.log("Contract deployed to:", contract.address);

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
