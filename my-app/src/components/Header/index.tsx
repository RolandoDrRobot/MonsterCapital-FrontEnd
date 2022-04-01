import React from 'react';
import metamaskIcon from '../../assets/img/metamask.png';
import coinIcon from '../../assets/img/coin.png';
import nftIcon from '../../assets/img/nft.png';
import logoutWalletIcon from '../../assets/img/logoutwallet.png';
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

  React.useEffect(() => {
    const connectWalletOnPageLoad = async () => {
      if (localStorage && localStorage.getItem('isWalletConnected') === 'true') {
        try {
          await activate(injected);
        } catch (e) {
          console.log(e);
        }
      }
    }
    connectWalletOnPageLoad()
  }, []);

  const [balance] = useBalance(
    selectedToken.address,
    selectedToken.decimals
  );

  return (
    <>{(active)
        ? <div className="header d-flex">
            <div className="wallet-info d-flex justify-content-between">
              <div className="wallet-logout d-flex justify-content-center align-items-center" onClick={disconnect}>
                <span className="status connected"></span>
                <img src={logoutWalletIcon} alt="" />
              </div>
              <div className="wallet-connection d-flex justify-content-center align-items-center">
                <span className="status connected"></span>
                <img src={metamaskIcon} alt="" />
              </div>
              <div className="wallet-balance d-flex align-items-center">
                <span className="d-flex align-items-center">
                  <img src={coinIcon} alt="" />
                  <p>{balance}</p>
                </span>
              </div> 
            </div>
            <div className="side-options d-flex align-items-center justify-content-end">
              <Link to="/nftroom" className="button">
                <img src={nftIcon} alt="" />
              </Link>
            </div>
          </div>
        : isLoading === true 
        ? <Loading /> 
        : <button className="connect-btn d-flex align-items-center justify-content-center m-0" onClick={connect}>
            <img src={metamaskIcon} alt="" />
            Connect your wallet
          </button>
      }
      
    </>
  )
}

export default Header;
