import React from 'react';
import metamaskIcon from '../../assets/img/metamask.png';
import monster from '../../assets/img/developermonster-face.png';
import coinIcon from '../../assets/img/orb.gif';
import Loading from '../../components/Loading/index';
import { Link } from 'react-router-dom';
import { useWeb3React } from '@web3-react/core';
import { injected } from '../../config/connector';
import TokenListRinkeby from '../../config/tokens/token-list-rinkeby.json';
import useBalance from '../../hooks/useBalance';

import './main.css';

function Header() {

  const [selectedToken, setSelectedToken] = React.useState(TokenListRinkeby[0]);
  let [isLoading, setIsLoading] = React.useState<boolean>(false);
  const { active, activate, deactivate } = useWeb3React();

  async function connect() {
    setIsLoading(true);
    try {
      await activate(injected);
      localStorage.setItem('isWalletConnected', 'true');
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  }

  async function disconnect() {
    setIsLoading(true);
    try {
      await deactivate();
      localStorage.setItem('isWalletConnected', 'false');
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  }

  const [balance] = useBalance(
    selectedToken.address,
    selectedToken.decimals
  );

  return (
    <>{(active)
        ?
          <nav className="navbar navbar-expand-lg">
            <div className="logo d-flex align-items-center mb-2">
              <a href="https://developermonster.com/"><img src={monster} height="70" alt="Logo" /></a>
              <h2>Monster <span>Capital</span></h2>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item"><a href="#">Balance {balance} <img src={coinIcon}/></a></li>
                <li className="nav-item">
                  <Link to="/news" className="button">
                    Metaverse Rooms
                  </Link>
                </li>
                <li className="nav-item" onClick={disconnect}><a href="#">Logout</a></li>
              </ul>
            </div>
          </nav>
        : isLoading === true 
        ? <Loading /> 
        : <button className="connect-btn d-flex align-items-center justify-content-center m-0" onClick={connect}>
            <img src={metamaskIcon} alt="" />
            Connect your Metamask
          </button>
      }
      
    </>
  )
}

export default Header;
