import React from 'react';
import monster from '../../assets/img/developermonster-face.png';
import './main.css';

function Homescreen() {
  return (
    <>
      <div className="homescreen">
        <div className="breadcrumb-content text-right">
          <h2><span>Welcome to Monster Capital </span>Investor's App</h2>
        </div>
        <div className="breadcrumb-content text-left">
          <img src={monster} width="112" height="112" />
          <p>Connect your wallet and <span>Let's start</span></p>
        </div>
      </div>
    </>
  )
}

export default Homescreen;
