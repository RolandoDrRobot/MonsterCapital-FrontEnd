import ERC20ABI from './abi-erc20.json';

export function getERC20Contract(tokenAddress: any, web3: any) {
  return web3
    ? new web3.eth.Contract(ERC20ABI, tokenAddress, {
      from: web3.eth.defaultAccount,
    })
    : null
}
