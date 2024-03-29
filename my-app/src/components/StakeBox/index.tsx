import React from 'react';
import { useWeb3React } from '@web3-react/core';
import Loading from '../../components/Loading/index';
import TokenList from '../../config/tokens/token-list-mainnet.json';
import { getERC20Contract } from '../../config/tokens/contractStore';
import { useAlert } from 'react-alert';
import stakeIcon from '../../assets/img/greenorb.gif';
import coinIcon from '../../assets/img/orb.gif';
import './main.css';

function StakeBox() {

  const alert = useAlert();
  const [selectedToken, setSelectedToken] = React.useState(TokenList[0]);
  let [isLoading, setIsLoading] = React.useState<boolean>(false);
  const { account, library } = useWeb3React();
  const coraTokenContract = getERC20Contract(selectedToken.address, library);

  const stakeCoras = function(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    const target = e.target as typeof e.target & {
      amount: { value: number };
    };

    const decimals = 100000000;
    const amount = target.amount.value * decimals;

    coraTokenContract.methods.createStake(amount)
      .send({
        from: account,
      })
      .on('error', (error:any) => {
        alert.show('There was an error ' + error.message);
        setIsLoading(false);
      })
      .on('transactionHash', (txHash:any) => {
        alert.show('Transaction sent');
      })
      .on('receipt', () => {
        alert.show('Transaction confirmed');
        target.amount.value = 0;
        setIsLoading(false);
      });
  };

  return (
    <>
      <form className="new-contract" onSubmit={stakeCoras}>
        <div className="new-contract-box section-tab yellow-border">
          <div className="product-tag">
            <span>Stake your Orbs</span>
          </div>
          <div className='d-flex align-items-center mb-2'>
            <div className='col-9'>
              <p className={ 'title ' + (account ? '' : 'gray') }>
                Block your orbs and earn APY% and green orbs 
                  <span> You can unlock your orbs whenever you want</span>
              </p>
            </div>
            <div className='col-3 d-flex justify-content-end'>
              <img className="section-tab-pet" src={stakeIcon} alt="" />
            </div>
          </div>
          <div>
            <p className={ 'subtitle ' + (account ? '' : 'gray') }>
              Use your yield to buy collectibles and tickets and do not use your initial golden Orbs.
            </p>
          </div>
          <div className="terms">
            <div className="d-flex justify-content-between you-stake">
              <div className="d-flex align-items-center">
                <span className={ account ? '' : 'gray' }>I want to stake</span>
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
                <img className="pic" src={coinIcon} alt="" />
              </div>
            </div>
          </div>
          {
            isLoading === true 
            ? <Loading /> 
            : <button 
                className="main-button" 
                disabled={ account ? false : true} 
              >Stake Now</button>
          }
        </div>
      </form>
    </>
  )
}

export default StakeBox;
