import React from 'react';
import StakeBox from '../../components/StakeBox/index';
import ManageRewards from '../../components/ManageRewards/index';
import MintRewards from '../../components/MintRewards/index';
import './main.css';

function Stake() {
  return (
    <>
      <div className="stake">
        <div className="section-title title-style-two text-center mb-60">
          <span>Stake</span>
          <h2>Let's us know <span className="d-block">what can we do</span></h2>
        </div>

        <StakeBox />
        <ManageRewards />
        <MintRewards />
      </div>
    </>
  )
}

export default Stake;
