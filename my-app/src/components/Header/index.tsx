import React from 'react';
import metamaskIcon from '../../assets/img/metamask.png';
import coinIcon from '../../assets/img/coin.png';
import notificationsIcon from '../../assets/img/notifications.png';

import { useTruncatedAddress } from '../../hooks/useTruncatedAddress';
import { useWeb3React } from '@web3-react/core';
import { injected } from '../../config/connector';
import web3 from 'web3';

import './main.css';

function Header() {

  let [ethBalance, setEthBalance] = React.useState<number>(0);
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

  React.useEffect(() => {
    (async function() {
      if (library) {
        const decimalsConversion = 1000000000000000000;
        const balance = await library.eth.getBalance(account);
        setEthBalance(balance / decimalsConversion);
      }
    })();
  }, [account]);

  return (
    <>{(active) 
        ? <div className="header d-flex">
            <div className="wallet-info d-flex">
              <div className="wallet-connection d-flex justify-content-center align-items-center">
                <span className="status connected"></span>
                <img src={metamaskIcon} alt="" />
              </div>
              <div className="wallet-balance d-flex align-items-center">
                <span className="d-flex align-items-center">
                  <img src={coinIcon} alt="" />
                  <p className='m-0'>{ethBalance.toFixed(3)} COR</p>
                </span>
              </div>
              <div className="wallet-address d-flex align-items-center">
                <p className='m-0'>{truncatedAddress}</p>
              </div>
            </div>
            <div className='side-options d-flex align-items-center justify-content-end'>
              <img src={notificationsIcon} alt="" />
            </div>
          </div>
        : <button className="connect-btn d-flex align-items-center justify-content-center m-0" onClick={connect}>
            <img src={metamaskIcon} alt="" />
            Connect your wallet
          </button>
      }
      
    </>
  )
}

export default Header;
