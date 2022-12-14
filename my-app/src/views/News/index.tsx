import React from 'react';
import Homescreen from '../../components/Homescreen/index';
import Meetings from '../../components/Meetings/index';
import { useWeb3React } from '@web3-react/core';
import './main.css';

function News() {
  const { active } = useWeb3React();

  return (
    <>
      <div className="news">
      {
        active
          ? <>
              <div className="section-title title-style-two text-center mb-60">
                <span>Metaverse Rooms</span>
                <h2>Welcome Home <span className="d-block">Monster Capital MetaMansion</span></h2>
              </div>
              <Meetings />
            </>
          : <Homescreen/> 
      }
      </div>
    </>
  )
}

export default News;
