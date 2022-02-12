import React from 'react';
import usdcIcon from '../../assets/img/usdcIcon.png';
import coraIcon from '../../assets/img/coraIcon.png';
import './main.css';

function Stake() {
  return (
    <>
      <div className="stake">
        <div className="wallet">
          <div className="d-flex justify-content-between mb-3">
            <div>
              <img className="token-pic" src={coraIcon} />
              <span>Coras</span>
            </div>
            <span>200</span>
          </div>
          <div className="d-flex justify-content-between">
            <div>
              <img className="token-pic" src={usdcIcon} />
              <span>USDC</span>
            </div>
            <span>$ 200</span>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Stake;
