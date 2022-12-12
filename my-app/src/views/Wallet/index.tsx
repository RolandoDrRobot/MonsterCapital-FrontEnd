import React from 'react';
import CoraWallet from '../../components/CoraWallet/index';
import RecentTransactions from '../../components/RecentTransactions/index';
import './main.css';

function Wallet() {
  return (
    <>
      <div className="wallet">
        <div>
          <div className="section-title title-style-two text-center mb-3">
            <h2>Cora <span>Wallet</span></h2>
          </div>
          <CoraWallet />
          <RecentTransactions />
        </div>
      </div>
    </>
  )
}

export default Wallet;
