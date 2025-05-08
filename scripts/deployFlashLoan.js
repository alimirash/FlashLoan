const hre = require("hardhat");
const { ethers } = hre;

async function main() {
    const FlashLoan = await ethers.getContractFactory("FlashLoan");
    const flashLoan = await FlashLoan.deploy(
        "0x012bAC54348C0E635dCAc9D5FB99f06F24136C9A"
    );

    // await flashLoan.deployed();
    console.log("FLashLoan Contract Deployed:", await flashLoan.getAddress());
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});