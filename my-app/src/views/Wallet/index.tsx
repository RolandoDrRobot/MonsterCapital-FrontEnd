import React from 'react';
import sendIcon from '../../assets/img/send.png';
import receiveIcon from '../../assets/img/receive.png';
import loadingIcon from '../../assets/img/loading.png';
import walletIcon from '../../assets/img/wallet.svg';
import './main.css';

function Wallet() {
  return (
    <>
      <div className="wallet">
        <div className="wallet-coins mb-4">
          <div className='d-flex justify-content-center align-items-center mb-4'>
            <img className="token-pic" src={walletIcon} />
            <span>200 Coras</span>
          </div>
          <div className="d-flex justify-content-center">
            <button className="receive">Receive</button>
            <button className="send">Send</button>
          </div>
        </div>

        <div className="transactions">
          <h4>Recent transactions</h4>

          <div className="transaction d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <img className="send-receive-pic" src={loadingIcon} />
              </div>
              <div>
                <span>Sending</span><br/>
                <span>to: 0x3432...4342</span>
              </div>
            </div>
            <div className="">
              <span>200</span>
            </div>
          </div>

          <div className="transaction d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <img className="send-receive-pic" src={receiveIcon} />
              </div>
              <div>
                <span>Received</span><br/>
                <span>to: 0x3432...4342</span>
              </div>
            </div>
            <div className="">
              <span>30</span>
            </div>
          </div>

          <div className="transaction d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <img className="send-receive-pic" src={sendIcon} />
              </div>
              <div>
                <span>Sent</span><br/>
                <span>to: 0x3432...4342</span>
              </div>
            </div>
            <div className="">
              <span>15</span>
            </div>
          </div><div className="transaction d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <img className="send-receive-pic" src={receiveIcon} />
              </div>
              <div>
                <span>Received</span><br/>
                <span>to: 0x3432...4342</span>
              </div>
            </div>
            <div className="">
              <span>200</span>
            </div>
          </div>

          <div className="transaction d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <img className="send-receive-pic" src={sendIcon} />
              </div>
              <div>
                <span>Sent</span><br/>
                <span>to: 0x3432...4342</span>
              </div>
            </div>
            <div className="">
              <span>200</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Wallet;
