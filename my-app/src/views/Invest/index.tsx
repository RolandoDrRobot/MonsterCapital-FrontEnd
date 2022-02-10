import React from 'react';
import exchangeIcon from '../../assets/img/exchange.png';
import investIcon from '../../assets/img/invest.png';
import './main.css';

function Invest() {
  return (
    <>
      <div className="invest d-flex align-items-center justify-content-center">
        <div>
          <img src={investIcon} className="pet" />
          <div className="invest-box"> 
            <h5>Invest</h5>
            <div className="trade-box">
              <div className="d-flex">
                <input placeholder="" />
                <input placeholder="" />
              </div>
              <img src={exchangeIcon} className="exchange-icon" />
              <div className="d-flex">
                <input placeholder="" />
                <input placeholder="" />
              </div>
              <p className="main-button">Invest Now</p>
            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Invest;
