import { useState, useEffect } from 'react';
import { ZERO_ADDRESS, web3BNToFloatString } from '../utils/bigNumber';
import { getERC20Contract } from '../config/tokens/contractStore';
import BigNumber from 'bignumber.js';
import BN from 'bn.js';
import { useWeb3React } from '@web3-react/core';

export default function useBalance(
  tokenAddress:any,
  decimals:any,
) {

  const [balance, setBalance] = useState('0');
  const { account, library } = useWeb3React();

  useEffect(() => {
    let isCancelled = false;

    function getBalance() {
      return new Promise((resolve) => {
        if (!library || !tokenAddress) {
          resolve(new BN('0'));
          return
        }

        try {
          if (tokenAddress === ZERO_ADDRESS) {
            library.eth
              .getBalance(account)
              .then((value:any) => {
                console.log(value);
                resolve(new BN(value));
              })
              .catch((error:any) => {
                resolve(new BN('0'));
              })
          } else {
            const contract = getERC20Contract(tokenAddress, library)
            if(contract) {
              contract.methods
              .balanceOf(account)
              .call()
              .then((value:any) => {
                resolve(new BN(value));
              })
              .catch((error:any) => {
                resolve(new BN('0'));
              });
            }
          }
        } catch (error) {
          resolve(new BN('0'));
        }
      })
    }

    async function run() {
      const bn = await getBalance();
      if (!isCancelled) {
        const pow = new BigNumber('10').pow(new BigNumber(decimals));
        setBalance(web3BNToFloatString(bn, pow, 1, BigNumber.ROUND_DOWN));
      }
    }

    run();

    return () => {
      isCancelled = true;
    }
  }, [tokenAddress, library, decimals, account]);

  const fmt = {
    prefix: '',
    decimalSeparator: '.',
    groupSeparator: ',',
    groupSize: 3,
    secondaryGroupSize: 0,
    fractionGroupSeparator: ' ',
    fractionGroupSize: 0,
    suffix: ''
  }
  
  const x = new BigNumber(balance);
  
  // Set the global formatting options
  BigNumber.config({ FORMAT: fmt });

  return [x.toFormat(3)];
}
