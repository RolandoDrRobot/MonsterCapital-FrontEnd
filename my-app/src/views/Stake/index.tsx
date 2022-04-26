import React from 'react';
import StakeBox from '../../components/StakeBox/index';
import ClaimRewards from '../../components/ClaimRewards/index';
import './main.css';

function Stake() {
  return (
    <>
      <div className="stake">
        <StakeBox />
        <ClaimRewards />
      </div>
    </>
  )
}

export default Stake;
