import React from 'react';
import monkeyPic from '../../assets/img/monkey.png';
import './main.css';

function Monkey() {

  return (
    <>
      <div className="monkey d-flex justify-content-end">
        <img src={monkeyPic} className="lil-monkey" alt="" />
      </div>  
    </>
  )
}

export default Monkey;
