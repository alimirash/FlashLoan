const hre = require("hardhat")
const { ethers } = hre
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
    const amount = 200000000

    // Get the contract ABI (fixed approach)
    const flashLoanArtifact = await hre.artifacts.readArtifact("FlashLoan");
    const flashLoanABI = flashLoanArtifact.abi;

    const [ signer ]  = await ethers.getSigners();
    const flashLoanContract = new ethers.Contract(contractAddress, flashLoanABI, signer);

    const balanceBefore = await flashLoanContract.getBalance(tokenAddress);
    console.log(`$USDC Before FlashLoan : ${balanceBefore.toString()}`);

    try{
        const tx = await flashLoanContract.requestFlashloan(tokenAddress, amount);
        console.log(`Transaction Hash: ${tx.hash}`);

        const receipt = await tx.wait();
        console.log(`FlashLoan executed in block ${receipt.blockNumber}`);

        const balanceAfter = await flashLoanContract.getBalance(tokenAddress);
        console.log(`$USDC After FlashLoan : ${balanceAfter.toString()}`);

    } catch (error) {
        console.error("Error requesting flash loan:", error);
        process.exitCode = 1;
    }
}

// Fixed function call with proper Promise handling
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});