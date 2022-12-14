import React from 'react';
import Homescreen from '../../components/Homescreen/index';
import CoraWallet from '../../components/CoraWallet/index';
import RecentTransactions from '../../components/RecentTransactions/index';
import { useWeb3React } from '@web3-react/core';
import './main.css';

function Wallet() {
  const { active } = useWeb3React();

  return (
    <>
      <div className="wallet">
      {
        active
          ? <>
              <div>
                <div className="section-title title-style-two text-center mb-3">
                  <h2>Orbs <span>Wallet</span></h2>
                </div>
                <CoraWallet />
                <RecentTransactions />
              </div>
            </>
            : <Homescreen/> 
        }
      </div>
    </>
  )
}

export default Wallet;
