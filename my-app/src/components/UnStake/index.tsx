import React from 'react';
import RewardsIcon from '../../assets/img/rewards.png';
import coinIcon from '../../assets/img/coin.png';
import walletIcon from '../../assets/img/wallet.png';
import { useWeb3React } from '@web3-react/core';
import './main.css';

function UnStake() {
  
  const { account } = useWeb3React();
  return (
    <>
      <div className="unstake">
        <div className={ 'unstake-box section-tab row d-flex align-items-center ' + (account ? ' yellow-border' : '') }>
          <div className="col-8 reward-information">
            <p>
              You can unlock
              <span className="yellow m-0"> 300 Coras </span>
              to your wallet
            </p>
          </div>
          <div className="col-4 m-0 mb-3 pl-0">
            <img className="unlock-pic" src={walletIcon} alt="" />
          </div>
          <div className="col-12">
            <div className="d-flex justify-content-between you-unstake">
              <div className="d-flex align-items-center">
                <span className="">I want to unlock</span>
              </div>
              <div className="d-flex align-items-center">
                <input placeholder="0.00" type="number" max="1" min="1000000000" />
                <img className="pic" src={coinIcon} alt="" />
              </div>
            </div>
            <button className={ 'secondary-button d-block mb-3 ' + (account ? '' : 'gray') }>
              Unlock Coras
            </button>
            <p className={ 'subtitle ' + (account ? '' : 'gray') }>
              Stake your Coras and earn APY%, Stake your Coras and earn APY%, Stake your Coras.
            </p>
          </div> 
        </div>
      </div>
    </>
  )
}

export default UnStake;
