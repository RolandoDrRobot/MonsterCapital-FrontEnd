import React from 'react';
import stakeIcon from '../../assets/img/stake.svg';
import coinIcon from '../../assets/img/coin.png';
import { useWeb3React } from '@web3-react/core';
import TokenListRinkeby from '../../config/tokens/token-list-rinkeby.json';
import { getERC20Contract } from '../../config/tokens/contractStore';
import { useAlert } from 'react-alert';
import './main.css';

function StakeBox() {

  const alert = useAlert();
  const [selectedToken, setSelectedToken] = React.useState(TokenListRinkeby[0]);
  const { account, library } = useWeb3React();
  const coraTokenContract = getERC20Contract(selectedToken.address, library);

  const stakeCoras = function(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      amount: { value: number };
    };

    const decimals = 100000000;
    const amount = target.amount.value * decimals;

    coraTokenContract.methods.createStake(amount)
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
        target.amount.value = 0.00;
      });
  };

  return (
    <>
      <form className="new-contract" onSubmit={stakeCoras}>
        <img className="section-tab-pet" src={stakeIcon} alt="" />
        <div className={ 'new-contract-box section-tab' + (account ? ' yellow-border' : '') }>
          <p className={ 'title mb-3 ' + (account ? '' : 'gray') }>
            Stake your Coras and earn APY%.
            You create contracts to earn APY% on your Coras.
            Stake your Coras and earn APY%
          </p>
          <div className="terms">
            <div className="d-flex justify-content-between you-stake">
              <div className="d-flex align-items-center">
                <span className={ account ? '' : 'gray' }>I want to stake</span>
              </div>
              <div className="d-flex align-items-center">
                <input
                  name="amount" 
                  placeholder="0.00" 
                  type="number" 
                  min="1"
                  max="1000000000"
                  disabled={ account ? false : true}
                  required />
                <img className="pic" src={coinIcon} alt="" />
              </div>
            </div>
          </div>
          <button 
            className="main-button" 
            disabled={ account ? false : true} 
          >Stake Now</button>
          <p className={ 'subtitle ' + (account ? '' : 'gray') }>
            Stake your Coras and earn APY%
          </p>
        </div>
      </form>
    </>
  )
}

export default StakeBox;
