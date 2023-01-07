# ⚡️ MonsterCapital-FrontEnd


## 🔮 Table of contents
1. [What is this](#-what-is-this)
2. [Features](#%EF%B8%8F-features)
3. [How to install](#%EF%B8%8F-how-to-install)
4. [How to use](#%EF%B8%8F-how-to-use)
5. [Improvements Ideas](#-improvements-ideas)
6. [Screenshots](#%EF%B8%8F-screenshots)


### 🪙 What is this
- This is Monster Capital APP: Our private investors app
- This app is intended for a private list of investors, they can get access to our ecosystem by using this app
- The contracts are deployed in Mumbai (Polygon tesnet) We will be deploying on polygon soon
- [Here](https://github.com/RolandoDrRobot/MonsterCapital-Contracts) are the smart contracts for this project


### ⚡️ Features
- Cover (appears when the wallet is not connected)
- Header: shows disconnect wallet, account balance (Orbs), metarooms link
- Wallet: send and receive Orbs - recent transactions
- Staking: stake and unstake Orbs, distribute rewards (Only visible for contract's owner)
- NFTs: collectibles wallet, collectible viewer, collections, send collectibles, wallets viewer
- Metarooms: Rooms for different investors tiers (meetings) Private Oncyber rooms
- Invest: in progress
- Indentity NFT: In progress
- BTC performance tracker: In progress


### ⚙️ How to install
- Clone this repo: `git clone https://github.com/RolandoDrRobot/MonsterCapital-FrontEnd.git`
- Go to `my-app` and `npm install`
- Run `npm run start`
- Open `http://localhost:3000/`
- Please make sure you are connected to the Mumbai network
- [Here](https://medium.com/stakingbits/how-to-connect-polygon-mumbai-testnet-to-metamask-fc3487a3871f#:~:text=Connect%20Metamask%20to%20Polygon%20Testnet,the%20Mumbai%20Testnet%20in%20Metamask.) you can configure your metamask for Mumbai
- You can deploy this project by using the `deploy.sh` file. It'll be deployed in IPFS through Infura, wait for the hash where you will see the app


### ⚙️ How to use
- Contract's deployer: Me 😄 RolandoDrRobot
- Please request testing Orbs (Mumbai) here (These Orbs were assigned to the contract's deployer wallet)
- You won't be able to use the app If you do not connect your wallet, we just request read access

- You can receive and send Orbs to other wallets 
- There are 1,000,000 Orbs in the Contract's deployer's wallet
- The Orbs ERC20 contract supports staking, so, you can stake these orbs, and receive more golden orbs as reward
- The app shows an screen only for the contract's deployer where he can distribute the rewards

- You can mint a Mystic Animal collectible for free
- There is a price for a Tribe Mask collectible (payable)
- You can take a look to all the collectibles minted at the moment for each collection and the holder's wallet
- You can transfer you collectibles

- You can get to any metaverse room at the moment


### 🔮 Improvements Ideas
- Use videos for metaverse rooms, instead of pics
- Make the rooms appear only for specific NFT holders
- Create Identity NFT (NFT with dynamic content)
- Enable Recent transactions for Orbs wallet
- Enable Invest section - Swap USDC for Orbs (so we can sell the orbs to our private investors)

### 🐝 Tech debt
- Replace "Cora" by "Orb" in the names of the files
- Back button for Rewards page
- Repair amount to send bug
- Refactor how we mint NFTs
- Make only tribemask collection (send method) payable
- Make sure the rewards are being received when unstake
- Make number inputs larger

### ⚡️ Screenshots
<img src="Screenshots/Cover.png" alt="Home" width="500"/>
<img src="Screenshots/Header.png" alt="Stake" width="500"/>
<img src="Screenshots/NFTWallet.png" alt="Rewards" width="500"/>
<img src="Screenshots/NFTDetail.png" alt="Invest" width="500"/>
<img src="Screenshots/NFTDetail2.png" alt="New" width="500"/>
<img src="Screenshots/collection.png" alt="Wallet" width="500"/>
<img src="Screenshots/NFTHolder.png" alt="Wallet" width="500"/>
<img src="Screenshots/Stake.png" alt="Home" width="500"/>
<img src="Screenshots/Distribute.png" alt="Stake" width="500"/>
<img src="Screenshots/Invest.png" alt="Rewards" width="500"/>
<img src="Screenshots/Wallet.png" alt="Rewards" width="500"/>
<img src="Screenshots/SendCoras.png" alt="Invest" width="500"/>
<img src="Screenshots/Metarooms.png" alt="New" width="500"/>
