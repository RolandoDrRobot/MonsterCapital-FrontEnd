import React from 'react';
import { useWeb3React } from '@web3-react/core';
import './main.css';

function ReceiveCoras() {

  const { account } = useWeb3React();

  function copyAddressToClipboard() {
    navigator.clipboard.writeText(account ? account : '').then(function() {
      alert('Copied the address ' + account);
    }, () => { alert('No copied to the clipboard') });    
  }

  return (
    <>
      <div id="receive-box" className="navbar-collapse collapse">
        <button 
          onClick={() => copyAddressToClipboard()}
          type="button"
        >Receive
        </button>
      </div>
    </>
  )
}

export default ReceiveCoras;
