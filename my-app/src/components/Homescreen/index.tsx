import React from 'react';
import monster from '../../assets/img/developermonster-face.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './main.css';

function Homescreen() {
  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <div className="breadcrumb-content text-right">
            <h2><span>We create your App </span>We are your experts</h2>
          </div>
        </div>
        <div className="col-md-6">
          <div className="breadcrumb-content text-left">
            <img src={monster} width="112" height="112" />
            <p>Connect your wallet and <span>Let's start</span></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Homescreen;
