import React from 'react';
import { useWeb3React } from '@web3-react/core';
import TokenListRinkeby from '../../config/tokens/token-list-rinkeby.json';
import { getERC20Contract } from '../../config/tokens/contractStore';
import { useAlert } from 'react-alert';
import './main.css';

function MintRewards() {
  let [selectedToken, setSelectedToken] = React.useState(TokenListRinkeby[0]);
  const { account, library, active } = useWeb3React();
  const alert = useAlert();
 
  function distributeRewards() {
    const coraTokenContract =  getERC20Contract(selectedToken.address, library);
    if (active) {
        coraTokenContract.methods.distributeRewards()
        .send({
          from: account,
        })
        .on('error', (error:any) => {
          alert.show('There was an error ' + error.message);
        })
        .on('transactionHash', (txHash:any) => {
          alert.show('Transaction sent');
        })
        .on('receipt', () => {
          alert.show('Transaction confirmed');
        });
      }  
  };

  return (
    <>
      <div>
        <button 
          className={ 'secondary-button mt-4 ' + (account ? '' : 'gray') }
          disabled={ account ? false : true }
          onClick={distributeRewards}
        >Distribute Rewards</button>
      </div>
    </>
  )
}

export default MintRewards;