import React from 'react';
import Homescreen from '../../components/Homescreen/index';
import Rewards from '../../components/Rewards/index';
import UnStake from '../../components/UnStake/index';
import { useWeb3React } from '@web3-react/core';
import './main.css';


function RewardsRoom() {
  const { active } = useWeb3React();

  return (
    <>
      <div className="rewards-room">
      {
        active
          ? <>
              <Rewards />
              <UnStake />
            </>
          : <Homescreen/> 
      }
      </div>
    </>
  )
}

export default RewardsRoom;
