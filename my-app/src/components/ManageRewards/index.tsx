import React from 'react';
import { Link } from 'react-router-dom';
import { useWeb3React } from '@web3-react/core';
import TokenListRinkeby from '../../config/tokens/token-list-rinkeby.json';
import { getERC20Contract } from '../../config/tokens/contractStore';
import BigNumber from 'bignumber.js';
import rewardPic from '../../assets/img/rewards.png';
import coinIcon from '../../assets/img/orb.gif';
import './main.css';

function ManageRewards() {

  let [selectedToken, setSelectedToken] = React.useState(TokenListRinkeby[0]);
  let [corasLocked, setCorasLocked] = React.useState<any>(0);
  let [rewardsAvailable, setRewardsAvailable] = React.useState<any>(0);
  const { account, library, active } = useWeb3React();
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
 
  (async function getRewardsInformation() {
    if (active) {
      const coraTokenContract = await getERC20Contract(selectedToken.address, library);
      const [corasLocked, rewardsAvailable] = await Promise.all([
        coraTokenContract.methods.stakeOf(account).call(),
        coraTokenContract.methods.rewardOf(account).call(),
      ]);
      setCorasLocked((new BigNumber(corasLocked / decimals)).toFormat(3));
      setRewardsAvailable((new BigNumber(rewardsAvailable / decimals)).toFormat(3));
    }
  })();

  return (
    <>
      <div className="manage-rewards section-tab row d-flex align-items-center yellow-border">
        <div className="col-7 reward-information mb-3">
          <div className="d-flex align-items-center mb-2">
            <img className="pic" src={coinIcon} alt="" />
            <p className="m-0">Orbs locked: <span className="yellow m-0"> {corasLocked}</span></p>
          </div>
          <div className="d-flex align-items-center">
            <img className="pic" src={coinIcon} alt="" />
            <p className="m-0">Rewards: <span className="yellow m-0"> {rewardsAvailable}</span></p>
          </div>
        </div>
        <div className="col-5 m-0 mb-3">
          <img className="reward-pic" src={rewardPic} alt="" />
        </div>
        <div className="col-12">
          <Link to="/rewards" className={ 'main-button d-block mb-3 ' + (account ? '' : 'gray') }>
            Manage your Rewards Here!
          </Link>
        </div> 
      </div>
      
    </>
  )
}

export default ManageRewards;
