import React from 'react';
import walletIcon from '../../assets/img/coin.png';
import closetIcon from '../../assets/img/close.png';
import metamaskIcon from '../../assets/img/metamask.png';
import sendIcon from '../../assets/img/send.png';
import './main.css';

function CoraWallet() {
  let [showMainWindow, setMainSendWindow] = React.useState<boolean>(true);
  let [showSendWindow, setShowSendWindow] = React.useState<boolean>(false);
  let [showReceiveWindow, setShowReceiveWindow] = React.useState<boolean>(false);

  function showWindow(window:string){
    switch(window) {
      case 'main':
        setMainSendWindow(true);
        setShowSendWindow(false);
        setShowReceiveWindow(false);
        break;
      case 'send':
        setMainSendWindow(false);
        setShowSendWindow(true);
        setShowReceiveWindow(false);
        break;
      case 'receive':
        setMainSendWindow(false);
        setShowSendWindow(false);
        setShowReceiveWindow(true);
        break;
      default:
        // code block
    }
  }

  return (
    <>
      <div className="cora-wallet mb-4">
        { showMainWindow ?  
          <div>
            <div className='d-flex justify-content-center align-items-center mb-4'>
              <img className="token-pic" src={walletIcon} alt="" />
              <div>
                <p>1,000,000</p>
                <p>Coras</p>
                <p className="cora-wallet-address">0x454...043</p>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <button className="receive" onClick={() => showWindow('receive')}>Receive</button>
              <button className="send" onClick={() => showWindow('send')}>Send</button>
            </div>
          </div> : <div></div>
        }

        { showSendWindow ?  
          <div className="send-box">
            <img src={closetIcon} className="close-window" onClick={() => showWindow('main')} alt="" />
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
            <button>Send Coras</button>
          </div> : <div></div>
        }

        { showReceiveWindow ?  
          <div>
            <div className='d-flex justify-content-center align-items-center mb-4'>
              <img className="token-pic" src={walletIcon} alt="" />
              <div>
                <p>0x454...043</p>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <button className="receive">Receive</button>
              <button className="send">Send</button>
            </div>
          </div> : <div></div>
        }
        
      </div>
    </>
  )
}

export default CoraWallet;
