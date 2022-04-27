import React from 'react';
import StakeBox from '../../components/StakeBox/index';
import ManageRewards from '../../components/ManageRewards/index';
import MintRewards from '../../components/MintRewards/index';
import './main.css';

function Stake() {
  return (
    <>
      <div className="stake">
        <StakeBox />
        <ManageRewards />
        <MintRewards />
      </div>
    </>
  )
}

export default Stake;
