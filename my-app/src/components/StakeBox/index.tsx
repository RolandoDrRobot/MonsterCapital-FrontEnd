import React from 'react';
import stakeIcon from '../../assets/img/stake.svg';
import coinIcon from '../../assets/img/coin.png';
import timeIcon from '../../assets/img/time.png';
import { useWeb3React } from '@web3-react/core';
import './main.css';

function StakeBox() {

  const { account } = useWeb3React();

  return (
    <>
      <div className="new-contract">
        <img className="section-tab-pet" src={stakeIcon} alt="" />
        <div className={ 'new-contract-box section-tab' + (account ? ' yellow-border' : '') }>
          <p className={ account ? '' : 'gray' }>Stake your Coras and earn APY%.
            You create contracts to earn APY% on your Coras.
            Stake your Coras and earn APY%</p>

          <p>Stake your Coras and earn APY%</p>

          <div className="terms">
            <div className="d-flex justify-content-between you-stake">
              <div className="d-flex align-items-center">
                <span className={ account ? '' : 'gray' }>I want to stake</span>
              </div>
              <div className="d-flex align-items-center">
                <input 
                  placeholder="0.00"
                  type="number"
                  max="1"
                  min="1000000000"
                  disabled={ account ? false : true} />
                <img className="pic" src={coinIcon} alt="" />
              </div>
            </div>
            <div className="d-flex justify-content-between stake-time">
              <div className="d-flex align-items-center">
                <span className={ account ? '' : 'gray' }>During</span>
              </div>
              <div className="d-flex align-items-center">
                <input placeholder="6" type="number" disabled={ account ? false : true} />
                <span className={ account ? '' : 'gray' }>Months</span>
                <img className="pic" src={timeIcon} alt="" />
              </div>
            </div>
          </div>
          <button 
            className="main-button"
            disabled={ account ? false : true}
          >Stake Now</button>
        </div>
      </div>
    </>
  )
}

export default StakeBox;
