import React from 'react';
import loadingIcon from '../../assets/img/loading.png';
import './main.css';

function Loading() {
  return (
    <>
      <div className="loading d-flex justify-content-center">
        <img src={loadingIcon} className="loading-icon" alt="" />
      </div>
    </>
  )
}

export default Loading;
