import React from 'react';
import walletIcon from '../../assets/img/wallet.svg';
import './main.css';

function CoraWallet() {
  return (
    <>
      <div className="cora-wallet mb-4">
        <div className='d-flex justify-content-center align-items-center mb-4'>
          <img className="token-pic" src={walletIcon} alt="" />
          <span>200 Coras</span>
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
