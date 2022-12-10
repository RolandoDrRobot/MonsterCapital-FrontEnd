import React from 'react';
import { useWeb3React } from '@web3-react/core';
import Loading from '../../components/Loading/index';
import TokenListRinkeby from '../../config/tokens/token-list-rinkeby.json';
import { getERC20Contract } from '../../config/tokens/contractStore';
import BigNumber from 'bignumber.js';
import { useAlert } from 'react-alert';

import coinIcon from '../../assets/img/orb.gif';
import walletIcon from '../../assets/img/wallet.png';
import './main.css';

function UnStake() {
  
  const alert = useAlert();
  const [selectedToken, setSelectedToken] = React.useState(TokenListRinkeby[0]);
  let [isLoading, setIsLoading] = React.useState<boolean>(false);
  let [corasLocked, setCorasLocked] = React.useState<any>(0);
  const { account, library, active } = useWeb3React();
  const coraTokenContract = getERC20Contract(selectedToken.address, library);
  const decimals = 100000000;

  const fmt = {
    prefix: '',
    decimalSeparator: '.',
    groupSeparator: ',',
    groupSize: 3,
    secondaryGroupSize: 0,
    fractionGroupSeparator: ' ',
    fractionGroupSize: 0,
    suffix: ''
  };
  // Set the global formatting options
  BigNumber.config({ FORMAT: fmt });

  const unStakeCoras = function(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    const target = e.target as typeof e.target & {
      amount: { value: number };
    };

    const decimals = 100000000;
    const amount = target.amount.value * decimals;

    coraTokenContract.methods.removeStake(amount)
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
        target.amount.value = 0.00;
        setIsLoading(false);
      });
  };

  (async function getRewardsInformation() {
    if (active) {
      const coraTokenContract = await getERC20Contract(selectedToken.address, library);
      const [corasLocked] = await Promise.all([
        coraTokenContract.methods.stakeOf(account).call(),
      ]);
      setCorasLocked((new BigNumber(corasLocked / decimals)).toFormat(3));
    }
  })();

  return (
    <>
      <form className="unstake" onSubmit={unStakeCoras}>
        <div className={ 'unstake-box section-tab row d-flex align-items-center ' + (account ? ' yellow-border' : '') }>
          <div className="col-8 reward-information mb-4">
            <p className="m-0">
              You can unlock up to
              <span className="yellow m-0"> {corasLocked} Coras </span>
            </p>
          </div>
          <div className="col-4 mb-4">
            <img className="unlock-pic" src={walletIcon} alt="" />
          </div>
          <div className="col-12">
            <div className="d-flex justify-content-between you-unstake">
              <div className="d-flex align-items-center">
                <span className="">I want to unlock</span>
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
            {
              isLoading === true 
              ? <Loading /> 
              : <button 
                  className={ 'main-button d-block mb-3 ' + (account ? '' : 'gray') }
                  disabled={ account ? false : true} 
                >Unlock Coras</button>
            }
            <p className={ 'subtitle text-center mt-3 ' + (account ? '' : 'gray') }>
              Stake your Coras and earn APY%, Stake your Coras and earn APY%, Stake your Coras.
            </p>
          </div> 
        </div>
      </form>
    </>
  )
}

export default UnStake;
