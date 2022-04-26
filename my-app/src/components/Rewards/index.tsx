import React from 'react';
import RewardsIcon from '../../assets/img/rewards.png';
import coinIcon from '../../assets/img/coin.png';
import { useWeb3React } from '@web3-react/core';
import './main.css';

function Rewards() {
  
  const { account } = useWeb3React();
  return (
    <>
      <div className="rewards">
        <img className="section-tab-pet" src={RewardsIcon} alt="" />
        <div className={ 'rewards-box section-tab' + (account ? ' yellow-border' : '') }>
          <p>
            <img className="pic" src={coinIcon} alt="" />
            Rewards available: 
            <span className="yellow m-0"> 202</span>
          </p>
          <button 
            className="main-button"
            disabled={ account ? false : true}
          >Claim Rewards Now</button>
          <p className={ 'subtitle mt-2 ' + (account ? '' : 'gray') }>
            Stake your Coras and earn APY%, Stake your.
          </p>
        </div>
      </div>
    </>
  )
}

export default Rewards;
