import React from 'react';
import walletIcon from '../../assets/img/coin.png';
import { useWeb3React } from '@web3-react/core';
import { useTruncatedAddress } from '../../hooks/useTruncatedAddress';
import TokenListRinkeby from '../../config/tokens/token-list-rinkeby.json';
import useBalance from '../../hooks/useBalance';
import SendCora from '../../components/sendCora/index';
import BigNumber from 'bignumber.js';
import './main.css';

function CoraWallet() {

  const [selectedToken, setSelectedToken] = React.useState(TokenListRinkeby[0]);
  let [showSendWindow, setShowSendWindow] = React.useState<boolean>(false);
  const { account } = useWeb3React();

  const [balance] = useBalance(
    selectedToken.address,
    selectedToken.decimals
  )

  // Thanks to this the address is shorter in the navbar
  const truncatedAddress = useTruncatedAddress(account);

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
                  <p className={ account ? '' : 'gray' }>{balance}</p>
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
          : <SendCora />
        }        
      </div>
    </>
  )
}

export default CoraWallet;
