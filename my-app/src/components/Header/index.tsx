import React from 'react';
import metamaskIcon from '../../assets/img/metamask.png';
import ethIcon from '../../assets/img/ethereum.png';
import notificationsIcon from '../../assets/img/notifications.png';
import './main.css';

function Header() {

  return (
    <>
      <div className="header d-flex">
        <div className="wallet-info d-flex">
          <div className="wallet-connection d-flex justify-content-center align-items-center">
            <span className="status connected"></span>
            <img src={metamaskIcon} alt="" />
          </div>
          <div className="wallet-balance d-flex align-items-center">
            <img src={ethIcon} alt="" />
            <p className='m-0'>11.44 ETH</p>
          </div>
          <div className="wallet-address d-flex align-items-center">
            <p className='m-0'>0x45E...CDS</p>
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
