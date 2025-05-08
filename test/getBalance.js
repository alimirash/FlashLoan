const hre = require("hardhat");
const { ethers } = hre;
require("dotenv").config();

async function main() {

    const contractAddress = process.env.CONTRACT_ADDRESS;
    if (!contractAddress) {
        console.error("CONTRACT_ADDRESS not found in environment variables");
        process.exit(1);
    } 
    
    // USDC address in AAVE 
    // Get Faucet From https://gho.aave.com/faucet/
    const tokenAddress = "0x94a9D9AC8a22534E3FaCa9F4e7F2E2cf85d5E4C8"; 


    const flashLoanArtifact = await hre.artifacts.readArtifact("FlashLoan");
    const flashLoanABI = flashLoanArtifact.abi;
    

    const [signer] = await ethers.getSigners();

    const flashLoanContract = new ethers.Contract(contractAddress, flashLoanABI, signer);

    console.log(`Fetching balance of token $USDC for FlashLoan contract ...`);

    try {
        const balance = await flashLoanContract.getBalance(tokenAddress);
        console.log(`The balance is: ${balance} tokens`); 
    } catch (error) {
        console.error("Error fetching balance:", error);
        process.exitCode = 1;
    }
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});