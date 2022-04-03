import React from 'react';
import { useWeb3React } from '@web3-react/core';
import { injected } from '../../config/connector';

function ConnectOnPageLoad() {

  const { activate } = useWeb3React();

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

  return (
    <>
    </>
  )
}

export default ConnectOnPageLoad;
