import React from 'react';
import walletIcon from '../../assets/img/coin.png';
import './main.css';

function CoraWallet() {
  return (
    <>
      <div className="cora-wallet mb-4">
        <div className='d-flex justify-content-center align-items-center mb-4'>
          <img className="token-pic" src={walletIcon} alt="" />
          <div>
            <p>1,000,000</p>
            <p>Coras</p>
            <p>0x454...043</p>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button className="receive">Receive</button>
          <button className="send">Send</button>
        </div>
      </div>
    </>
  )
}

export default CoraWallet;
