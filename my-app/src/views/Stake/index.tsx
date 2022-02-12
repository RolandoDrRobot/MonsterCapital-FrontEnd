import React from 'react';
import stakeIcon from '../../assets/img/stake.png';
import coraIcon from '../../assets/img/coraIcon.png';
import timeIcon from '../../assets/img/time.png';
import openContractIcon from '../../assets/img/open-contract.png';
import closedContractIcon from '../../assets/img/closed-contract.png';
import './main.css';

function Stake() {
  return (
    <>
      <div className="stake">
        <img className="stake-icon" src={stakeIcon} />
        <div className="new-contract-box">
          <p>Stake your Coras and earn APY%. 
            You create contracts to earn APY% on your Coras. 
            Stake your Coras and earn APY%</p>

          <p>Stake your Coras and earn APY%</p>

          <div className="terms">
            <div className="d-flex justify-content-between you-stake">
              <div className="d-flex align-items-center">
                <span>I want to stake</span>
              </div>
              <div className="d-flex align-items-center">
                <input placeholder="0.00" type="number" />
                <img className="pic" src={coraIcon} />
              </div>
            </div>
            <div className="d-flex justify-content-between stake-time">
              <div className="d-flex align-items-center">
                <span>During</span>
              </div>
              <div className="d-flex align-items-center">
                <input placeholder="6" type="number" />
                <span>Months</span>
                <img className="pic" src={timeIcon} />
              </div>
            </div>
          </div>
          <p className="main-button">Stake Now</p>
        </div>
        
        <div className="open-contracts mb-5">
          <h4 className="mb-3">Open Contracts</h4>
          <div className="contracts">
            <div className="contract d-flex justify-content-between align-items-center">
              <div className="">
                <p className="">200 Coras</p>
                <p className="">Open date: 12-04-2022</p>
                <p className="">Close date: 9-02-2023</p>
              </div>
              <div className="">
                <img className="" src={openContractIcon} />
              </div>
            </div>
            <div className="contract d-flex justify-content-between align-items-center">
              <div className="">
                <p className="">200 Coras</p>
                <p className="">Open date: 12-04-2022</p>
                <p className="">Close date: 9-02-2023</p>
              </div>
              <div className="">
                <img className="" src={openContractIcon} />
              </div>
            </div>
          </div>
        </div>
        
        <div className="closed-contracts">
          <h4 className="mb-3">Closed Contracts</h4>
          <div className="contracts">
            <div className="contract d-flex justify-content-between align-items-center">
              <div className="">
                <p className="">200 Coras</p>
                <p className="">Open date: 12-04-2022</p>
                <p className="">Close date: 9-02-2023</p>
              </div>
              <div className="">
                <img className="" src={closedContractIcon} />
              </div>
            </div>
            <div className="contract d-flex justify-content-between align-items-center">
              <div className="">
                <p className="">200 Coras</p>
                <p className="">Open date: 12-04-2022</p>
                <p className="">Close date: 9-02-2023</p>
              </div>
              <div className="">
                <img className="" src={closedContractIcon} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Stake;
