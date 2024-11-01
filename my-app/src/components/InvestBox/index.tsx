import React from 'react';
import exchangeIcon from '../../assets/img/exchange.png';
import usdcIcon from '../../assets/img/usdcIcon.png';
import investIcon from '../../assets/img/orb.gif';
import coinIcon from '../../assets/img/orb.gif';
import gasFeeIcon from '../../assets/img/gasIcon.png';
import { useWeb3React } from '@web3-react/core';
import './main.css';


function InvestBox() {

  const { account } = useWeb3React();

  return (
    <>
      <div className="invest-box section-tab yellow-border">
        <div className="product-tag">
          <span>Get your Orbs</span>
        </div>
        <div className='d-flex align-items-center mb-2'>
          <div className='col-9'>
            <p className={ 'title ' + (account ? '' : 'gray') }>
              The Orbs gives you all the perks <span> Enjoy our ecosystem</span>
            </p>
          </div>
          <div className='col-3 d-flex justify-content-end'>
            <img src={investIcon} className="section-tab-pet" alt="" />
          </div>
        </div>
        <div>
          <p className={ 'subtitle ' + (account ? '' : 'gray') }>
            Access our Invesments Performace App, Exclusive networking in the metaverse, staking and more
          </p>
        </div>
        {/* <div className="trade-box">  
          <div className="d-flex you-pay">
            <div className="position-relative d-flex align-items-center justify-content-center">
              <img className="token-pic" src={usdcIcon} alt="" />
              <span className={ account ? '' : 'gray' }>USDC</span>
              <span className="title-input">You pay</span>
            </div>
            <div>
            </div>
            <div className="d-flex align-items-center">
              <span className={ account ? '' : 'gray' }>$</span>
              <input 
                placeholder="0.00"
                min="1"
                max="1000000000"
                type="number"
                disabled={ account ? false : true}
              />
            </div>
          </div>

          <div className="d-flex justify-content-center exchange-icon">
            <div>
            </div>
            <div className="exchange-icon-img text-center">
              <img src={exchangeIcon} alt="" />
            </div>
            <div>
            </div>
          </div>

          <div className="d-flex you-receive">
            <div className="position-relative d-flex align-items-center justify-content-center">
              <img className="token-pic" src={coinIcon} alt="" />
              <span className={ account ? '' : 'gray' }>Orbs</span>
              <span className="title-input">You receive</span>
            </div>
            <div>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <input
                placeholder="200"
                type="number"
                className={ account ? '' : 'gray' }
                disabled={ account ? false : true }
              />
            </div>
          </div>

          <div className="mt-4 d-flex justify-content-between align-items-center">
            <div>
              <span className="transaction-cost-title">transaction cost</span>
              <span className={ account ? 'cost' : 'cost gray' }>
                <span>≈ $</span> 200.005
              </span>
            </div>
            <div className="gas-container d-flex align-items-center justify-content-between">
              <img className="gas-pic" src={gasFeeIcon} alt="" />
              <span className={ account ? '' : 'gray' }>0.005</span>
            </div>
          </div>

          <p className={ 'subtitle mt-3 mb-0 text-center' }>
            Stake your Orbs and earn APY%
          </p>
        </div> */}
        <button 
          className="main-button" 
          disabled={ account ? false : true }
        >Invest Now</button>
      </div>
    </>
  )
}

export default InvestBox;