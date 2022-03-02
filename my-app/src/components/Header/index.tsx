import React from 'react';
import metamaskIcon from '../../assets/img/metamask.png';
import ethIcon from '../../assets/img/ethereum.png';
import notificationsIcon from '../../assets/img/notifications.png';
import warningIcon from '../../assets/img/warning.png';

import { useTruncatedAddress } from '../../hooks/useTruncatedAddress';
import { useWeb3React } from '@web3-react/core';
import { injected } from '../../config/connector';
import web3 from 'web3';

import './main.css';

function Header() {

  const { active, account, library, activate, deactivate } = useWeb3React();

  async function connect() {
    try {
      await activate(injected);
    } catch (e) {
      console.log(e)
    }
  }

  // Thanks to this the address is shorter in the navbar
  const truncatedAddress = useTruncatedAddress(account);

  return (
    <>
      <div className="header d-flex">
        <div className="wallet-info d-flex">
          <div className="wallet-connection d-flex justify-content-center align-items-center">
            <span className="status connected"></span>
            {(active) 
              ? <img src={metamaskIcon} alt="" /> 
              : <img src={warningIcon} alt="" onClick={connect} />
            }
          </div>
          <div className="wallet-balance d-flex align-items-center">
            <img src={ethIcon} alt="" />
            <p className='m-0'>11.44 ETH</p>
          </div>
          <div className="wallet-address d-flex align-items-center">
            <p className='m-0'>{truncatedAddress}</p>
          </div>
        </div>
        <div className='side-options d-flex align-items-center justify-content-end'>
          <img src={notificationsIcon} alt="" />
        </div>
      </div>
    </>
  )
}

export default Header;
