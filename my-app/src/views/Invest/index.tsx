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
              <div className="d-flex you-pay">
                <div>
                  <input placeholder="" />
                </div>
                <div>
                </div>
                <div>
                  <input placeholder="" />
                </div>
              </div>

              <div className="d-flex justify-content-between exchange-icon">
                <div>
                </div>
                <div className="exchange-icon-img">
                  <img src={exchangeIcon} />
                </div>
                <div>
                </div>
              </div>

              <div className="d-flex you-receive">
                <div>
                  <input placeholder="" />
                </div>
                <div>
                </div>
                <div>
                  <input placeholder="" />
                </div>
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
