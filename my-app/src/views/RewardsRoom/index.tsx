import React from 'react';
import Rewards from '../../components/Rewards/index';
import UnStake from '../../components/UnStake/index'
import './main.css';


function RewardsRoom() {
  return (
    <>
      <div className="rewards-room">
        <Rewards />
        <UnStake />
      </div>
    </>
  )
}

export default RewardsRoom;
