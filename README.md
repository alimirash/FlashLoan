# 💸 FlashLoan

![Solidity](https://img.shields.io/badge/Solidity-%5E0.8.26-blue)
![Hardhat](https://img.shields.io/badge/Hardhat-2.24.0-yellow)
![Aave](https://img.shields.io/badge/Aave-V3-purple)
![License](https://img.shields.io/badge/License-MIT-green)

A smart contract implementation of Aave Flash Loans on Ethereum. This project demonstrates how to execute flash loans using Aave's V3 protocol on the Sepolia testnet.

## 📋 Features

- Execute flash loans using Aave's V3 protocol
- Check token balances
- Withdraw tokens from the contract
- Built with Hardhat for easy testing and deployment

## 🚀 Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- npm or yarn
- An Ethereum wallet with Sepolia ETH
- Sepolia RPC URL (from Infura, Alchemy, etc.)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/alimirash/FlashLoan.git
cd FlashLoan
```

2. Install dependencies:

```bash
npm install
```

3. Configure environment variables:

```bash
cp .env.example .env
```

4. Update the `.env` file with your:
   - `PRIVATE_KEY` - Your Ethereum wallet private key
   - `SEPOLIA_URL` - Your Sepolia RPC endpoint
   - After deployment, add your `CONTRACT_ADDRESS`

## 📦 Deployment

Deploy your flash loan contract to the Sepolia testnet:

```bash
npx hardhat run scripts/deployFlashLoan.js --network sepolia
```

After successful deployment, copy the contract address and add it to your `.env` file as `CONTRACT_ADDRESS`.

## 💡 How to Use

### Check Token Balance

To check the USDC balance of your contract:

```bash
npx hardhat run test/getBalance.js --network sepolia
```

Example output:
```
Fetching balance of token $USDC for FlashLoan contract ...
The balance is: 499800000 tokens
```

### Execute a Flash Loan

To execute a flash loan:

```bash
npx hardhat run test/requestFlashLoan.js --network sepolia
```

Example output:
```
$USDC Before FlashLoan : 499800000
Transaction Hash: 0x682b8bcf678abc40f5c49791dd4d2b156d509c0deb889ac76775a4f21fa5221f
FlashLoan executed in block 8282603
$USDC After FlashLoan : 499700000
```

## 🧩 Contract Overview

The FlashLoan contract is built on Aave's FlashLoanSimpleReceiverBase and implements:

- **executeOperation**: Logic to execute during the flash loan
- **requestFlashloan**: Function to request a flash loan from Aave
- **getBalance**: Check token balances in the contract
- **withdraw**: Allow the owner to withdraw tokens from the contract

## 🔍 Test Scripts

| Script | Description |
|--------|-------------|
| `getBalance.js` | Check the balance of USDC tokens in the contract |
| `requestFlashLoan.js` | Execute a flash loan of USDC tokens |

## 💰 Getting Test Tokens

You can obtain test USDC tokens from:
- [Aave's Faucet](https://gho.aave.com/faucet/)

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgements

- [Aave Protocol](https://aave.com/) for the flash loan functionality
- [Hardhat](https://hardhat.org/) for the Ethereum development environment