import React from 'react';
import InvestBox from '../../components/InvestBox/index';
import './main.css';

function Invest() {
  return (
    <>
      <div className="invest">
        <div className="section-title title-style-two text-center mb-60">
          <span>Invest</span>
          <h2>Let's us know <span className="d-block">what can we do</span></h2>
        </div>
        <InvestBox />
      </div>
    </>
  )
}

export default Invest;
