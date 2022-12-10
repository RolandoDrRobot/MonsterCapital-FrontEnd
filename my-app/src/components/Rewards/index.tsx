import React from 'react';
import { useWeb3React } from '@web3-react/core';
import Loading from '../../components/Loading/index';
import TokenListRinkeby from '../../config/tokens/token-list-rinkeby.json';
import { getERC20Contract } from '../../config/tokens/contractStore';
import BigNumber from 'bignumber.js';
import { useAlert } from 'react-alert';

import RewardsIcon from '../../assets/img/rewards.png';
import coinIcon from '../../assets/img/orb.gif';
import './main.css';

function Rewards() {

  const alert = useAlert();
  const [selectedToken, setSelectedToken] = React.useState(TokenListRinkeby[0]);
  let [isLoading, setIsLoading] = React.useState<boolean>(false);
  const { account, library, active } = useWeb3React();
  let [rewardsAvailable, setRewardsAvailable] = React.useState<any>(0);
  let coraTokenContract:any = {}
  const decimals = 100000000;

  if (active) coraTokenContract =  getERC20Contract(selectedToken.address, library);

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

  (async function getRewardsInformation() {
    if (active) {
      coraTokenContract = await getERC20Contract(selectedToken.address, library);
      const [rewardsAvailable] = await Promise.all([
        coraTokenContract.methods.rewardOf(account).call(),
      ]);
      setRewardsAvailable((new BigNumber(rewardsAvailable / decimals)).toFormat(3));
    }
  })();

  const claimRewards = function() {
    if (active) {
      setIsLoading(true);
      coraTokenContract.methods.withdrawReward()
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
        setIsLoading(false);
      });
    }
  }
  
  return (
    <>
      <div className="rewards">
        <div className={ 'rewards-box text-center section-tab' + (account ? ' yellow-border' : '') }>
          <img className="vault mb-3" src={RewardsIcon} alt="" width="120" />
          <p>
            <img className="pic" src={coinIcon} alt="" />
            Rewards available: 
            <span className="yellow m-0"> {rewardsAvailable}</span>
          </p> 
          {
            isLoading === true 
            ? <Loading /> 
            : <button 
                className="main-button"
                disabled={ account ? false : true}
                onClick={claimRewards}
              >Claim Rewards Now</button>
          }
          <p className={ 'subtitle mt-3 ' + (account ? '' : 'gray') }>
            Stake your Coras and earn APY%, Stake your.
          </p>
        </div>
      </div>
    </>
  )
}

export default Rewards;
