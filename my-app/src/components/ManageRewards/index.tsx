import React from 'react';
import { Link } from 'react-router-dom';
import { useWeb3React } from '@web3-react/core';
import rewardPic from '../../assets/img/rewards.png';
import coinIcon from '../../assets/img/coin.png';
import './main.css';

function ManageRewards() {
  const { account } = useWeb3React();

  return (
    <>
      <div className={ 'manage-rewards section-tab row d-flex align-items-center ' + (account ? ' yellow-border' : '') }>
        <div className="col-8 reward-information">
          <p>
            <img className="pic" src={coinIcon} alt="" />
            Coras locked: 
            <span className="yellow m-0"> 300</span>
          </p>
          <p>
            <img className="pic" src={coinIcon} alt="" />
            Rewards: 
            <span className="yellow m-0"> 202</span>
          </p>
        </div>
        <div className="col-4 m-0 mb-4 pl-0">
          <img className="reward-pic" src={rewardPic} alt="" />
        </div>
        <div className="col-12">
          <Link to="/rewards" className={ 'secondary-button d-block mb-3 ' + (account ? '' : 'gray') }>
            Manage your Rewards Here!
          </Link>
        </div> 
      </div>
      
    </>
  )
}

export default ManageRewards;
