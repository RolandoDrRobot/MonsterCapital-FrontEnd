import React from 'react';
import StakeBox from '../../components/StakeBox/index';
import ManageRewards from '../../components/ManageRewards/index';
import './main.css';

function Stake() {
  return (
    <>
      <div className="stake">
        <StakeBox />
        <ManageRewards />
      </div>
    </>
  )
}

export default Stake;
