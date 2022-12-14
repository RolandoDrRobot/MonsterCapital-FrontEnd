import React from 'react';
import Homescreen from '../../components/Homescreen/index';
import InvestBox from '../../components/InvestBox/index';
import { useWeb3React } from '@web3-react/core';
import './main.css';

function Invest() {
  const { active } = useWeb3React();

  return (
    <>
      <div className="invest">
      {
        active
          ? <>
              <div className="section-title title-style-two text-center mb-60">
                <span>Invest</span>
                <h2>Let's us know <span className="d-block">what can we do</span></h2>
              </div>
              <InvestBox />
            </>
          : <Homescreen/> 
      }
      </div>
    </>
  )
}

export default Invest;
