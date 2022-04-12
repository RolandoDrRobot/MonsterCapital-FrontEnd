import React from 'react';
import CoraWallet from '../../components/CoraWallet/index';
import RecentTransactions from '../../components/RecentTransactions/index';
import './main.css';

function Wallet() {
  return (
    <>
      <div className="wallet">
        <div>
          <CoraWallet />
          <RecentTransactions />
        </div>
      </div>
    </>
  )
}

export default Wallet;
