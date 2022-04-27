import React from 'react';
import { useWeb3React } from '@web3-react/core';
import Loading from '../../components/Loading/index';
import TokenListRinkeby from '../../config/tokens/token-list-rinkeby.json';
import { getERC20Contract } from '../../config/tokens/contractStore';
import { useAlert } from 'react-alert';
import './main.css';

function MintRewards() {
  let [selectedToken, setSelectedToken] = React.useState(TokenListRinkeby[0]);
  let [isLoading, setIsLoading] = React.useState<boolean>(false);
  const { account, library, active } = useWeb3React();
  const alert = useAlert();
 
  function distributeRewards() {
    const coraTokenContract =  getERC20Contract(selectedToken.address, library);
    if (active) {
      setIsLoading(true);
      coraTokenContract.methods.distributeRewards()
      .send({
        from: account,
      })
      .on('error', (error:any) => {
        alert.show('There was an error ' + error.message);
        setIsLoading(false);
      })
      .on('transactionHash', (txHash:any) => {
        alert.show('Transaction sent');
      })
      .on('receipt', () => {
        alert.show('Transaction confirmed');
        setIsLoading(false);
      });
    }  
  };

  return (
    <>
      <div className="mb-2">
        {
          isLoading === true 
          ? <Loading /> 
          : <button 
              className={ 'secondary-button ' + (account ? '' : 'gray') }
              disabled={ account ? false : true }
              onClick={distributeRewards}
            >Distribute Rewards</button>
        }
      </div>
    </>
  )
}

export default MintRewards;