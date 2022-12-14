
import React from 'react';
import Homescreen from '../../components/Homescreen/index';
import Settings from '../../components/Settings/index';
import { useWeb3React } from '@web3-react/core';
import './main.css';

function Home() {
  const { active } = useWeb3React();

  return (
    <>
      <div className="home">
        {active ? <Settings /> : <Homescreen/> }
      </div>
    </>
  )
}

export default Home;
