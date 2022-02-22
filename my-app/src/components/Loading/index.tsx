import React from 'react';
import loadingIcon from '../../assets/img/loading-c.png';
import './main.css';

function Loading() {
  return (
    <>
      <div className="loading d-flex justify-content-center">
        <img src={loadingIcon} className="loading-icon" />
      </div>
    </>
  )
}

export default Loading;
