import React from 'react';
import walletIcon from '../../assets/img/coin.png';
import closetIcon from '../../assets/img/close.png';
import metamaskIcon from '../../assets/img/metamask.png';
import sendIcon from '../../assets/img/send.png';
import { useWeb3React } from '@web3-react/core';
import TokenListRinkeby from '../../config/tokens/token-list-rinkeby.json';
import useBalance from '../../hooks/useBalance';
import './main.css';

function SendCoras() {

  const [selectedToken, setSelectedToken] = React.useState(TokenListRinkeby[0]);
  const { account } = useWeb3React();

  const [balance] = useBalance(
    selectedToken.address,
    selectedToken.decimals
  )

  return (
    <>
      <div className="send-box">
        <img src={closetIcon} className="close-window" alt="" />
        <div className="d-flex justify-content-center align-items-center mb-3">
          <img src={sendIcon} className="mr-2" alt="" />
          <p><strong>Send your Coras</strong></p>
        </div>
        <div className="send-box-input">
          <div className="d-flex justify-content-between you-send">
            <div className="d-flex align-items-center">
              <span>I want to send</span>
            </div>
            <div className="d-flex align-items-center">
              <input placeholder="0.00" type="number" />
              <img className="pic" src={walletIcon} alt="" />
            </div>
          </div>
          <div className="d-flex justify-content-end align-items-center you-send-address">
            <div className="d-flex align-items-center">
              <input placeholder="Receiver address?" type="text" />
            </div>
            <img className="pic" src={metamaskIcon} alt="" />
          </div>
        </div>
        <button className={ account ? ' yellow-border' : '' }>Send Coras</button>
      </div>
    </>
  )
}

export default SendCoras;
