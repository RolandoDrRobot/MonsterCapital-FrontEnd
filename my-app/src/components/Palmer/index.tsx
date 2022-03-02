
import React from 'react';
import palmer1Pic from '../../assets/img/palmer1.png';
import palmer2Pic from '../../assets/img/palmer2.png';
import palmer3Pic from '../../assets/img/palmer3.png';
import './main.css';

function Palmer() {

  return (
    <>
      <div className="palmers d-flex justify-content-center">
        <img src={palmer2Pic} className="palmer-2 flip-pic" alt="" />
        <img src={palmer1Pic} className="palmer-1" alt="" />
        <img src={palmer3Pic} className="palmer-3" alt="" />
        <img src={palmer2Pic} className="palmer-2" alt="" />
      </div>  
    </>
  )
}

export default Palmer;
