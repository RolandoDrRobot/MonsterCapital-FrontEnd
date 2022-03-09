import React from 'react';
import walletIcon from '../../assets/img/coin.png';
import closetIcon from '../../assets/img/close.png';
import metamaskIcon from '../../assets/img/metamask.png';
import sendIcon from '../../assets/img/send.png';
import { useWeb3React } from '@web3-react/core';
import { useTruncatedAddress } from '../../hooks/useTruncatedAddress';
import './main.css';

function CoraWallet() {

  let [ethBalance, setEthBalance] = React.useState<number>(0);
  let [showSendWindow, setShowSendWindow] = React.useState<boolean>(false);
  const { account, library } = useWeb3React();

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

  function copyAddressToClipboard() {
    navigator.clipboard.writeText(account ? account : '').then(function() {
      alert('Copied the address ' + account);
    }, () => { alert('No copied to the clipboard') });    
  }

  return (
    <>
      <div className={ 'cora-wallet mb-4' + (account ? ' yellow-border' : '') }>
        { !showSendWindow 
          ? <div>
              <div className='d-flex justify-content-center align-items-center mb-4'>
                <div className="token-pic d-flex justify-content-center">
                  <img src={walletIcon} alt="" />
                </div>
                <div className="token-balance">
                  <p className={ account ? '' : 'gray' }>{ethBalance.toFixed(2)}</p>
                  <p className={ account ? '' : 'gray' }>Coras</p>
                  <p className="cora-wallet-address">{truncatedAddress ? truncatedAddress : 'Connect wallet'}</p>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <button 
                  className={ 'receive' + (account ? ' yellow-border' : '') } 
                  onClick={() => copyAddressToClipboard()} 
                  disabled={ account ? false : true}
                >Receive
                </button>
                <button 
                  className={ 'send' + (account ? ' yellow-border' : '') } 
                  onClick={() => setShowSendWindow(true)}
                  disabled={ account ? false : true}
                >Send</button>
              </div>
            </div> 
          : <div className="send-box">
              <img src={closetIcon} className="close-window" onClick={() => setShowSendWindow(false)} alt="" />
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
        }        
      </div>
    </>
  )
}

export default CoraWallet;
