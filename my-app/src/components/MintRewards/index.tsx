import React from 'react';
import { useWeb3React } from '@web3-react/core';
import Loading from '../../components/Loading/index';
import TokenList from '../../config/tokens/token-list-mainnet.json';
import { getERC20Contract } from '../../config/tokens/contractStore';
import { useAlert } from 'react-alert';
import './main.css';

function MintRewards() {
  let [selectedToken, setSelectedToken] = React.useState(TokenList[0]);
  let [isLoading, setIsLoading] = React.useState<boolean>(false);
  let [coraTokenOwner, setCoraTokenOwner] = React.useState<string>('');
  const { account, library, active } = useWeb3React();
  const coraTokenContract =  getERC20Contract(selectedToken.address, library);
  const alert = useAlert();
 
  function distributeRewards() {
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

  (async function getCoraTokenOwner() {
    const [owner] = await Promise.all([
      coraTokenContract.methods.owner().call(),
    ]);
    setCoraTokenOwner(owner)
  })();


  return (
    account !== coraTokenOwner ? <></>
    : <div className="my-5 text-center section-tab">
        <div className="section-title title-style-two text-center mb-60">
          <span>Owner Area</span>
          <h2>Distribute rewards to <span>all existing holders</span></h2>
        </div>
        <div className="product-tag">
          <span>This action cannot be reverted</span>
        </div>
        {
          isLoading === true 
          ? <Loading /> 
          : <button 
              className={ 'main-button' }
              onClick={distributeRewards}
            >Distribute Rewards</button>
        }
      </div>
  )
}

export default MintRewards;