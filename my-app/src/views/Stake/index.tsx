import React from 'react';
import StakeBox from '../../components/StakeBox/index';
import Homescreen from '../../components/Homescreen/index';
import ManageRewards from '../../components/ManageRewards/index';
import MintRewards from '../../components/MintRewards/index';
import { useWeb3React } from '@web3-react/core';
import './main.css';

function Stake() {
  const { active } = useWeb3React();

  return (
    <>
      <div className="stake">
      {
        active
          ? <>
              <div className="section-title title-style-two text-center mb-60">
                <span>Stake</span>
                <h2>Let's us know <span className="d-block">what can we do</span></h2>
              </div>

              <StakeBox />
              <ManageRewards />
              <MintRewards />
            </>
          : <Homescreen/> 
      }
      </div>
    </>
  )
}

export default Stake;
