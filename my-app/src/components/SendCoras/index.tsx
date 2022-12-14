import React from 'react';
import { useWeb3React } from '@web3-react/core';
import Loading from '../../components/Loading/index';
import TokenListRinkeby from '../../config/tokens/token-list-rinkeby.json';
import { getERC20Contract } from '../../config/tokens/contractStore';
import { useAlert } from 'react-alert';

import walletIcon from '../../assets/img/orb.gif';
import closetIcon from '../../assets/img/close.png';
import metamaskIcon from '../../assets/img/metamask.png';
import sendIcon from '../../assets/img/send.png';
import './main.css';

interface SendCorasProps {
  setShowSendWindow: Function
}

function SendCoras(props:SendCorasProps) {

  const alert = useAlert();
  const [selectedToken, setSelectedToken] = React.useState(TokenListRinkeby[0]);
  let [isLoading, setIsLoading] = React.useState<boolean>(false);
  const { account, library } = useWeb3React();

  const sendCoras = function(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    const target = e.target as typeof e.target & {
      amount: { value: number };
      recipient: { value: string };
    };
    const decimals = 100000000;
    const amount = target.amount.value * decimals;
    const recipient = target.recipient.value;
    const coraTokenContract = getERC20Contract(selectedToken.address, library);

    if(coraTokenContract) {
      coraTokenContract.methods.transfer(recipient, amount)
      .send({
        from: account,
      })
      .on('error', (error:any) => {
        alert.show('There was an error ' + error.message);
        setIsLoading(false);
      })
      .on('transactionHash', (txHash:string) => {
        alert.show('Transaction sent');
      })
      .on('receipt', () => {
        alert.show('Transaction confirmed');
        target.amount.value = 0.00;
        target.recipient.value = '';
        setIsLoading(false);
      });
    }
  }

  const [closeSendCorasWindow, setCloseSendCorasWindow] = React.useState(false);
  React.useEffect(() => {
    if (closeSendCorasWindow === true) props.setShowSendWindow(false);
  }, [closeSendCorasWindow])

  return (
    <>
      <form className="send-box" onSubmit={sendCoras}>
        <img src={closetIcon} className="close-window" onClick={() => setCloseSendCorasWindow(true)} alt="" />
        <div className="d-flex justify-content-center align-items-center mb-3">
          <img src={sendIcon} className="mr-2" alt="" />
          <p className={ account ? 'headline' : 'gray headline' }><strong>Send your Orbs</strong></p>
        </div>
        <div className="send-box-input">
          <div className="d-flex justify-content-between you-send">
            <div className="d-flex align-items-center">
              <span className={ account ? '' : 'gray' }>I want to send</span>
            </div>
            <div className="d-flex align-items-center">
              <input 
                name="amount" 
                placeholder="0.00" 
                type="number" 
                min="1"
                max="1000000000"
                disabled={ account ? false : true}
                required />
              <img className="pic" src={walletIcon} alt="" />
            </div>
          </div>
          <div className="d-flex justify-content-end align-items-center you-send-address">
            <div className="d-flex align-items-center">
              <input 
                name="recipient" 
                placeholder="Recipient address?" 
                type="text"
                disabled={ account ? false : true}
                required />
            </div>
            <img className="pic" src={metamaskIcon} alt="" />
          </div>
        </div>
        {
          isLoading === true 
          ? <Loading /> 
          : <button 
              className="main-button"
              disabled={ account ? false : true}
            >Send Orbs</button>
        }
        <p className={ 'subtitle mt-3 ' + (account ? '' : 'gray') }>
          Make sure you copied the metamask address properly. If the address is incorrect, your Orbs will be lost
        </p>
      </form>
    </>
  )
}

export default SendCoras;
